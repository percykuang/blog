@date: 2024-03-26
@tag: [SSO,业务场景]

## 前言

在现代企业应用中，用户经常需要访问多个相关但独立的系统。如何避免用户重复登录，同时保证系统安全性？单点登录（Single Sign-On，SSO）提供了完美的解决方案。本文将深入探讨 SSO 的原理、实现方式和最佳实践。

## 什么是单点登录

单点登录是一种身份验证机制，允许用户使用单一的凭据（如用户名和密码）访问多个相关的系统。一次登录，即可访问所有已授权的应用，无需重复认证。

## SSO 的实现方式

### 1. 基于 Cookie 的同域名 SSO

适用于同一主域名下的多个子域名系统，例如：

- app1.example.com
- app2.example.com
- app3.example.com

```typescript
// Cookie 配置示例
const cookieConfig = {
  domain: '.example.com', // 注意这里的点号
  path: '/',
  httpOnly: true,
  secure: true,
};
```

### 2. 基于 Token 的跨域名 SSO

适用于不同域名的系统之间的单点登录：

```typescript
interface TokenPayload {
  userId: string;
  username: string;
  exp: number; // 过期时间
  iat: number; // 签发时间
  applications: string[]; // 允许访问的应用列表
}
```

## SSO 登录流程详解

### 1. 基本流程

1. 用户访问应用系统
2. 应用系统检查是否已登录
3. 未登录则重定向到 SSO 认证中心
4. 用户在 SSO 认证中心登录
5. SSO 认证中心验证身份并生成 Token
6. 重定向回应用系统，并携带 Token
7. 应用系统验证 Token 并创建本地会话

### 2. 代码实现

#### 前端实现

```typescript
class SSOClient {
  private ssoServerUrl: string;
  private clientId: string;

  constructor(config: SSOConfig) {
    this.ssoServerUrl = config.ssoServerUrl;
    this.clientId = config.clientId;
  }

  async checkAuthentication() {
    const token = localStorage.getItem('sso_token');

    if (!token) {
      this.redirectToLogin();
      return;
    }

    try {
      await this.validateToken(token);
    } catch {
      this.redirectToLogin();
    }
  }

  private redirectToLogin() {
    const currentUrl = encodeURIComponent(window.location.href);
    window.location.href = `${this.ssoServerUrl}/login?redirect_uri=${currentUrl}&client_id=${this.clientId}`;
  }
}
```

#### 后端实现

```typescript
class SSOServer {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    // 验证用户
    const user = await this.validateUser(username, password);

    if (user) {
      // 生成 token
      const token = jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

      // 重定向回原系统
      const { redirect_uri } = req.query;
      res.redirect(`${redirect_uri}?token=${token}`);
    }
  }

  async validateToken(req: Request, res: Response) {
    const { token } = req.query;

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      res.json({ valid: true, user: decoded });
    } catch {
      res.json({ valid: false });
    }
  }
}
```

## 安全性考虑

### 1. Token 安全

- 使用 JWT 等标准格式
- 设置合理的过期时间
- 使用 HTTPS 传输
- 实现 Token 撤销机制

### 2. CSRF 防护

```typescript
// 添加 CSRF Token
const csrfToken = generateCSRFToken();
res.cookie('XSRF-TOKEN', csrfToken, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict',
});
```

### 3. 单点登出

```typescript
class SingleLogout {
  async logout() {
    // 清除本地 token
    localStorage.removeItem('sso_token');

    // 通知 SSO 服务器
    await fetch(`${ssoServerUrl}/logout`, {
      credentials: 'include',
    });

    // 通知所有子系统
    this.notifyApplications();

    // 重定向到登出页面
    window.location.href = logoutPage;
  }

  private async notifyApplications() {
    const apps = this.getRegisteredApps();
    await Promise.all(
      apps.map((app) =>
        fetch(`${app.url}/logout`, {
          method: 'POST',
          credentials: 'include',
        })
      )
    );
  }
}
```

## 性能优化

### 1. 缓存策略

```typescript
class TokenCache {
  private cache: Map<string, TokenInfo>;
  private readonly maxAge: number;

  constructor(maxAge: number = 3600000) {
    // 1小时
    this.cache = new Map();
    this.maxAge = maxAge;
    this.startCleanup();
  }

  set(token: string, info: TokenInfo) {
    this.cache.set(token, {
      ...info,
      timestamp: Date.now(),
    });
  }

  get(token: string): TokenInfo | null {
    const info = this.cache.get(token);
    if (!info) return null;

    if (Date.now() - info.timestamp > this.maxAge) {
      this.cache.delete(token);
      return null;
    }

    return info;
  }

  private startCleanup() {
    setInterval(() => {
      const now = Date.now();
      for (const [token, info] of this.cache.entries()) {
        if (now - info.timestamp > this.maxAge) {
          this.cache.delete(token);
        }
      }
    }, this.maxAge);
  }
}
```

### 2. 监控和日志

```typescript
class SSOMonitoring {
  logLoginAttempt(userId: string, success: boolean) {
    logger.info('Login attempt', {
      userId,
      success,
      timestamp: new Date(),
      ip: request.ip,
    });
  }

  trackTokenUsage(token: string) {
    metrics.increment('token.usage', {
      token: hashToken(token),
    });
  }

  reportError(error: Error) {
    errorTracking.capture(error);
  }
}
```

## 最佳实践

1. **使用标准协议**

   - OAuth 2.0
   - SAML 2.0
   - OpenID Connect

2. **错误处理**

   - SSO 服务器宕机的降级策略
   - Token 过期的优雅处理
   - 网络异常的重试机制

3. **用户体验**
   - 无感知的 Token 续期
   - 友好的错误提示
   - 平滑的登录/登出过程

## 总结

单点登录（SSO）是现代企业应用不可或缺的认证机制。通过合理的实现和配置，可以：

1. 提升用户体验
2. 增强系统安全性
3. 简化认证管理
4. 降低维护成本

在实施 SSO 时，需要注意：

- 选择合适的实现方式
- 重视安全性考虑
- 优化性能
- 做好监控和日志
- 遵循最佳实践

通过本文的详细讲解，相信你已经对 SSO 有了深入的理解，可以在实际项目中进行合理的实现和应用。
