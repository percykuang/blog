@date: 2023-03-11
@tag: [npm]

## 作用

`npm link`是一个非常有用的开发工具，它允许你在本地开发和测试 npm 包，而不需要每次都发布到 npm 仓库。

## 原理

### 符号链接（Symbolic Link）机制

- npm link 本质上是在你的系统中创建了一个符号链接（symlink）
- 符号链接类似于 Windows 的快捷方式或 macOS/Linux 的软链接
- 它创建了一个指向源文件的引用，而不是复制文件

### 工作流程

当你在包目录中运行`npm link`时：

```text
/path/to/your-package $ npm link
```

- npm 会在全局的 node_modules 目录中创建一个符号链接
- 这个链接指向你的包目录
- 包的名称来自 package.json 中的 name 字段

当你在项目目录中运行`npm link package-name`时：

```text
/path/to/your-project $ npm link package-name
```

- npm 会在项目的 node_modules 目录中创建一个符号链接
- 这个链接指向全局 node_modules 中的包链接
- 最终形成了一个链式链接：项目 → 全局 → 包源码

### 实际路径示例

假设你的包名是 css-scope-loader：

```text
项目 node_modules/css-scope-loader
→ 全局 node_modules/css-scope-loader
→ 你的包源码目录
```

### 优势

- 实时更新：修改包源码后，项目会立即看到变化
- 无需发布：可以在本地测试包的功能
- 节省时间：避免了频繁的 npm publish 和 npm install
- 方便调试：可以直接在源码中设置断点

### 注意事项

- 如果包有依赖，需要确保这些依赖在项目中可用
- 某些构建工具可能需要额外的配置来处理符号链接
- 在 Windows 系统上可能需要管理员权限
- 如果包使用了 peerDependencies，需要确保版本兼容

### 替代方案

- yarn link：与 npm link 类似，但由 yarn 提供
- npm install ../path/to/package：直接安装本地包
- yalc：更强大的本地包管理工具

### 最佳实践

- 在开发包时使用 npm link
- 在测试完成后，使用 npm unlink 解除链接
- 确保包的 package.json 中正确设置了 main、module 等字段
- 在包的 devDependencies 中声明开发依赖
- 在 peerDependencies 中声明必要的运行时依赖

这就是为什么 npm link 是开发 npm 包时非常有用的工具 - 它创建了一个无缝的开发环境，让你可以实时测试和调试你的包，而不需要经过发布和安装的繁琐过程。
