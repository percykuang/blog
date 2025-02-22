@date: 2023-02-15
@tag: [webpack]

> 在平时自己由零搭建项目时，虽然基础配置都比较熟悉，比如配置 file-loader, url-loader, css-loader 等，配置不难，但究竟是怎么起作用的呢，今天就来说说如何编写一个 Webpack Loader。

# Loader 作用

按我自己的简单理解，loader 通常指打包的方案，即按什么方式来处理打包，打包的时候它可以拿到模块源代码，经过特定 loader 的转换后返回新的结果。
比如 sass-loader 可以把 SCSS 代码转换成 CSS 代码
