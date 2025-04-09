@date: 2023-03-12
@tag: [npm, monorepo]

## 前言

业务中经常涉及到本地包的开发和调试，有一个绕不开的工具是 yalc，yalc 是一个更强大的本地包管理工具，相比 npm link 有很多优势。

## 基本概念

- yalc 是一个用于本地包开发和测试的工具
- 它模拟了真实的包安装过程，比 npm link 更接近生产环境
- 支持多个项目同时使用同一个本地包

## 主要优势

- 更接近真实环境：模拟了真实的包安装过程
- 更好的依赖处理：正确处理 peerDependencies
- 多项目支持：可以在多个项目中同时使用同一个本地包
- 版本管理：支持包的版本控制
- 更可靠：不会出现符号链接相关的问题

## 安装

```bash
# 全局安装
npm install -g yalc
# 或
yarn global add yalc
```

## 基本使用流程

### 在包项目中

```bash
# 1. 构建包
npm run build

# 2. 发布到本地存储
yalc publish

# 3. 当代码有更新时
yalc push
```

### 在使用包的项目中

```bash
# 1. 添加本地包
yalc add npm-package

# 2. 更新包
yalc update npm-package

# 3. 移除包
yalc remove npm-package
```

### 常用命令

```bash
# 查看帮助
yalc --help

# 查看已发布的包
yalc installations show

# 清理所有安装
yalc installations clean

# 查看包信息
yalc info
```

## 工作流程示例

假设你在开发 css-scope-loader：

```bash
# 在 css-scope-loader 项目中
# 1. 初始化
npm install -g yalc

# 2. 构建
npm run build

# 3. 发布到本地存储
yalc publish

# 4. 当代码有更新时
# 修改代码后
npm run build
yalc push  # 这会自动更新所有使用这个包的项目
```

在 my-app 项目中：

```bash
# 1. 添加本地包
yalc add css-scope-loader

# 2. 更新包（当包有更新时）
yalc update css-scope-loader

# 3. 当开发完成后，移除本地包
yalc remove css-scope-loader
# 然后安装正式版本
npm install css-scope-loader
```

## 与 npm link 的区别

| 特性       | yalc             | npm link       |
| ---------- | ---------------- | -------------- |
| 安装方式   | 模拟真实安装     | 使用符号链接   |
| 依赖处理   | 正确处理所有依赖 | 可能有依赖问题 |
| 多项目支持 | 支持             | 有限支持       |
| 更新机制   | 需要显式更新     | 自动更新       |
| 可靠性     | 更高             | 较低           |
| 使用场景   | 开发测试         | 快速原型       |

## 最佳实践

- 在开发包时使用 yalc publish 和 yalc push
- 在测试项目中使用 yalc add 和 yalc update
- 定期使用 yalc installations clean 清理旧的安装
- 在发布到 npm 前，确保使用 yalc remove 移除本地包

## 高级用法

```bash
# 发布特定版本
yalc publish --version 1.0.0

# 强制更新
yalc push --force

# 查看包的状态
yalc status

# 添加私有包
yalc add file:../path/to/package
```

## 与 monorepo 配合使用

如果你使用 monorepo（如 lerna 或 yarn workspaces），yalc 可以很好地配合：

```bash
# 在 monorepo 的包目录中
yalc publish

# 在其他包中使用
yalc add css-scope-loader
```

## 注意事项

- yalc 会在项目根目录创建 .yalc 目录和 yalc.lock 文件
- 这些文件应该被添加到 .gitignore 中
- 在团队开发中，确保所有成员都使用相同版本的 yalc
- 在 CI/CD 环境中不要使用 yalc

总的来说，yalc 是一个比 npm link 更强大、更可靠的本地包开发工具，特别适合：

- 开发需要复杂依赖的包
- 在多个项目中测试同一个包
- 需要更接近生产环境的测试
- 团队协作开发包
