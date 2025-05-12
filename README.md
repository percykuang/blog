# 个人技术博客

一个基于 React + TypeScript + Vite 构建的现代化技术博客，专注于前端技术分享。

## 项目特点

- 🚀 **高性能**：基于 Vite 构建，实现快速的开发和构建体验
- 📱 **响应式设计**：使用 Tailwind CSS 实现的全响应式布局，适配各种设备
- 📝 **Markdown 支持**：使用 marked 和 highlight.js 实现 Markdown 渲染和代码高亮
- 🖼️ **图片预览**：集成 Fancybox 实现图片和视频的优雅预览
- 🔍 **文章大纲**：自动生成文章大纲，方便导航
- 📋 **代码复制**：一键复制代码块功能
- 🏷️ **标签分类**：支持按标签筛选文章
- 🔄 **自动部署**：通过 GitHub Actions 实现自动构建和部署

## 技术栈

- **前端框架**：React 18 + React Router 6
- **开发语言**：TypeScript
- **构建工具**：Vite 6
- **CSS 框架**：Tailwind CSS 4
- **Markdown 解析**：marked + highlight.js
- **工具库**：
  - dayjs：日期处理
  - lodash：工具函数
  - DOMPurify：防止 XSS 攻击
  - @fancyapps/ui：图片预览

## 项目结构

```
├── articles/            # Markdown 文章目录
├── plugins/             # 自定义 Vite 插件
│   └── article-watcher/ # 文章监视插件，自动生成文章列表
├── public/              # 静态资源
├── src/
│   ├── components/      # 组件
│   ├── config/          # 配置文件
│   ├── hooks/           # 自定义 Hooks
│   ├── pages/           # 页面组件
│   ├── types/           # TypeScript 类型定义
│   ├── App.tsx          # 应用入口
│   └── articles.json    # 自动生成的文章列表
└── .github/workflows/   # GitHub Actions 配置
```

## 主要功能

### 文章管理

- 自动扫描 `articles/` 目录下的 Markdown 文件
- 解析文章元数据（日期、标签）
- 生成唯一稳定的文章 ID
- 计算文章字数

### 文章展示

- 按年份分组展示文章列表
- 文章详情页支持 Markdown 渲染
- 代码高亮和一键复制功能
- 图片和视频预览
- 自动生成文章大纲

### 导航与分类

- 标签分类系统
- 按标签筛选文章
- 响应式导航栏

## 开发与部署

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 构建与预览

```bash
# 构建生产版本
pnpm build

# 本地预览生产版本
pnpm preview
```

### 部署

项目通过 GitHub Actions 自动部署到 GitHub Pages，每次推送到 main 分支时会触发构建和部署流程。

## 自定义

### 添加新文章

在 `articles/` 目录下创建新的 Markdown 文件，并按以下格式添加元数据：

```markdown
@date: 2024-09-06
@tag: [react, hooks]

# 文章内容
```

文章会在开发服务器启动或构建时自动添加到文章列表中。
