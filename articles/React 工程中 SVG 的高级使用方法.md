@date: 2020-09-09
@tag: [react,webpack,svg,工程化]

## 比较 low 的做法

打开 create-react-app 的官方文档，它会告诉你使用 svg，将 svg 进行导入（实际导入的是 svg 的路径字符串），然后放到 img 的 src 上。这种方法我们称为将 svg 当做图片使用。

为什么这种方式不好？

比如：无法改变 svg 的颜色

## 使用 svg-sprite-loader（自己配置法）

使用 svg-sprite-loader 要在 webpack.config.js 里配置，但是我们用 create-react-app 搭建起来的项目里没有 webpack 的配置文件。

使用 `yarn eject` 命令，可以把配置文件弄出来。运行后，发现项目下多了两个目录，其中就有 webpack.config.js，我们就可以修改它进行配置。按照官网配置即可。

注意：一定要先进行 git commit，才能运行 eject，否则会无法成功弹出配置。

### 步骤

1. 安装两个 loader

```
yarn add --dev svg-sprite-loader
yarn add --dev svgo-loader
```

2. 在 webpack.config.js 中配置这两个 loader

```js
{
  test: /\.svg$/,
  use: [
    { loader: 'svg-sprite-loader', options: {} },
    { loader: 'svgo-loader', options: {} },
  ]
},
```

3. 使用

App.tsx

```tsx
import x from "icons/apple.svg";

console.log(x) // 查看浏览器dom树，可以发现多了一个svg

// 多出来的svg如下：
<svg fill='red'>
   <use xlinkHref='#apple'/>
</svg>
```

apple 就是文件名。svg 上还可以直接加 fill 属性来改变颜色。
引入的 x 如果不使用，就是如果不打印，页面上的图标就看不到了。必须用一下图标才能生效。这是因为treeshaking，意思是，如果你用不上一个东西，我就把他从树上摇下来。react 发现你引入了 x，但是没使用，就会把它删了。
那我怎么样既能引入也不需要打印呢？
treeshaking 不适用于 require，所以可以用 require导入

4. 封装 svg 成 icon 组件

现在每次使用 svg 都要写三句代码，还要 require 引入。避免重复，把它封装成组件。

```tsx
import React from 'react';

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name: string;
};

function Icon(props: Props) {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name} />
    </svg>
  );
}

export default Icon;
```

说明：

把 require 导入也放进来。但是如果有 100 个 svg，就要写 100 次 require。所以我们选择直接导入一个目录，这个目录里存放所有的 svg。这里封装为 importAll。

但是有报错，说找不到 `__WebpackModuleApi`，这是因为在 ts 里不支持这个的问题。去谷歌搜索解决方案。
安装：`yarn add --dev @types/webpack-env` 就可以解决。

其他组件想使用 Icon，一句话引入即可 `<Icon name='chart'/>` name 属性是文件名。

Icon 如果想改变颜色，可以直接在 css 里用 fill 改变：

```css
.icon {
  fill: rgb(140, 177, 253);
}
```

可是有一些svg图标是自带颜色的，在它们的文件里会通过 fill 属性指定颜色。如果是这种情况，就改不了颜色了。我们可以选择手动去它们的 svg 文件里删除 fill 属性，但是如果有很多图标，一个个删除太慢了。

svgo-loader 有一个功能，可以删除fill属性，只需要把需要的语句添加到配置文件的 svgo-loader 后边的选项options 里边就可以。
svgo 就是 svg optimizer 优化器的意思。

```js
{ loader: 'svgo-loader', options: {
  plugins:[
      {removeAttrs: {attrs:'fill'}}
    ]
  }
},
```
