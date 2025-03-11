@date: 2020-06-03
@tag: [前端安全]

## XSS （跨站脚本攻击）

### 攻击原理

XSS（Cross-Site Scripting）攻击的核心是让恶意脚本在受害者的浏览器中执行。攻击者通过注入恶意代码（通常是 JavaScript）到网页中，当其他用户访问该页面时，代码会被浏览器解析并执行，从而实现窃取用户数据、会话劫持、篡改页面内容等攻击行为。

### 攻击类型

1. 反射型 XSS

- **原理**：恶意脚本通过 URL 参数注入，服务端未过滤直接返回给客户端。
  - 例如：用户点击一个精心构造的链接：
  ```http
  https://example.com/search?query=<script>alert('XSS')</script>
  ```
  - 服务端将`query`参数直接插入到页面中，导致脚本执行。
- **特点**：需要诱导用户主动点击恶意链接，常见于钓鱼攻击。

2. 存储型 XSS

- **原理**：恶意脚本被存储到服务器数据库（如评论、留言板），其他用户访问页面时触发。
  - 例如：攻击者在评论区提交内容：
  ```html
  <script>
    stealCookie(document.cookie);
  </script>
  ```
  - 所有用户访问该页面时，脚本自动执行，窃取 Cookie。
- **特点**：危害范围广，持续时间长（数据长期存储在服务端）。

3. DOM 型 XSS

- **原理**：前端 JavaScript 动态操作 DOM 时未对用户输入转义，导致恶意脚本执行。
  - 例如：面通过 location.hash 获取 URL 片段并插入到 DOM 中：
  ```js
  document.getElementById('content').innerHTML = location.hash.substring(1);
  ```
  - 攻击者构造 URL：
  ```
  https://example.com#<img src=x onerror=alert('XSS')>
  ```
  - 用户访问该 URL 时，恶意脚本执行。
- **特点**：完全在客户端触发，无需服务端参与。

### 攻击危害

- 窃取用户 Cookie 或会话信息（Session Hijacking）。

- 伪造用户操作（如转账、修改密码）。

- 篡改页面内容（如插入钓鱼表单）。

- 劫持用户浏览器（如发起 DDoS 攻击）。

### 防御措施

#### 输入过滤与输出编码

- **输入过滤**：对用户输入进行严格校验（如正则表达式、白名单）。

- **输出编码**：根据输出位置选择不同的转义规则：
  - **HTML 上下文**：转义 <, >, &, ", ' 等字符。
  ```js
  function escapeHTML(str) {
    return str.replace(
      /[&<>"']/g,
      (c) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        })[c]
    );
  }
  ```
  - **JavaScript 上下文**：使用 JSON.stringify 或 encodeURIComponent。
  - **URL 上下文**：使用 encodeURIComponent 编码参数。

#### CSP（内容安全策略）

通过 HTTP 头限制资源加载来源：

```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com;
```

- 禁止内联脚本（unsafe-inline）和 eval。

- 仅允许加载指定域名的脚本、样式、图片等资源。

#### 安全的 Cookie 设置

敏感 Cookie 设置 HttpOnly（禁止 JavaScript 访问）：

```http
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Lax;
```

### 避免危险 API

- 使用 textContent 替代 innerHTML。

- 避免直接执行用户输入的字符串（如 eval）。

## CSRF （跨站请求伪造）

### 攻击原理

CSRF（Cross-Site Request Forgery）攻击的核心是利用用户的登录状态，诱导用户访问恶意页面，伪造一个合法请求（如转账、修改密码），而用户并不知情。

**典型场景**：

1. 用户登录银行网站 bank.com，Cookie 中保存了会话信息。
2. 用户访问恶意页面 evil.com，该页面自动发起一个向 bank.com/transfer 的请求：

```js
<img src="https://bank.com/transfer?to=hacker&amount=1000000">
```

3. 浏览器自动携带 bank.com 的 Cookie，请求被服务器认为是合法的。

### 攻击危害

- 以用户身份执行敏感操作（如转账、删除数据）。

- 修改用户账户信息（如邮箱、密码）。

### 防御措施

#### CSRF Token

**原理**：服务端生成随机 Token，嵌入表单或请求头，提交时验证 Token 合法性。
**实现步骤**：

1. 用户访问页面时，服务端生成 Token 并存储在 Session 或 Cookie 中。
2. 页面表单中插入 Token：

```html
<input type="hidden" name="csrf_token" value="随机Token" />
```

3. 提交表单时，服务端验证 Token 合法性。
   **关键点**：Token 需随机、一次性，且绑定用户会话。

#### SameSite Cookie

**原理**：通过 Cookie 的 SameSite 属性限制跨站请求携带 Cookie。

```http
Set-Cookie: sessionId=abc123; SameSite=Lax;
```

- Lax：允许部分安全请求（如导航跳转）携带 Cookie。
- Strict：完全禁止跨站携带 Cookie。
- None：允许跨站携带 Cookie（需配合 Secure）。

#### 验证 Referer/Origin 头

检查请求头中的 Referer 或 Origin 是否为可信域名。

```js
// 服务端校验示例（Node.js）
if (req.headers.referer !== 'https://trusted-domain.com') {
  throw new Error('非法请求来源');
}
```

**局限性**：某些浏览器会禁用 Referer，且可能被伪造。

#### 关键操作二次验证

对敏感操作（如支付、修改密码）要求用户输入密码或短信验证码。

## XSS 和 CSRF 的区别

| 区别       | XSS                      | CSRF                           |
| ---------- | ------------------------ | ------------------------------ |
| 攻击目标   | 窃取用户数据或劫持会话   | 伪造用户身份执行操作           |
| 依赖条件   | 需要注入恶意脚本         | 依赖用户已登录目标网站         |
| 攻击发起者 | 用户访问含恶意脚本的页面 | 用户访问恶意页面或点击恶意链接 |
| 防御核心   | 控制不可信数据的输出     | 验证请求来源和合法性           |

## 总结

- **XSS** 的核心是防止恶意脚本执行，需重点关注**输出编码**和**CSP 策略**。
- **CSRF** 的核心是验证请求是否由用户主动发起，需依赖**CSRF Token** 和 **SameSite Cookie**。
- 安全是系统工程，需前后端协作，结合多种防御手段降低风险。
