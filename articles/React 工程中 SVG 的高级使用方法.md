@date: 2020-09-09
@tag: [react, webpack, svg]

## 比较low的做法

打开create-react-app的官方文档，它会告诉你使用svg，将svg进行导入（实际导入的是svg的路径字符串），然后放到img的src上。这种方法我们称为将svg当做图片使用。

为什么这种方式不好？

比如：无法改变svg的颜色

## 使用svg-sprite-loader（自己配置法）

使用svg-sprite-loader要在webpack.config.js里配置，但是我们用create-react-app搭建起来的项目里没有webpack的配置文件。

使用yarn eject命令，可以把配置文件弄出来。运行后，发现项目下多了两个目录，其中就有webpack.config.js，我们就可以修改它进行配置。按照官网配置即可。

注意：一定要先进行git commit，才能运行eject，否则会无法成功弹出配置。

### 步骤

1. 安装两个loader

```
yarn add --dev svg-sprite-loader
yarn add --dev svgo-loader
```

2. 在webpack.config.js中配置这两个loader

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

apple就是文件名。svg上还可以直接加fill属性来改变颜色。
引入的x如果不使用，就是如果不打印，页面上的图标就看不到了。必须用一下图标才能生效。这是因为treeshaking，意思是，如果你用不上一个东西，我就把他从树上摇下来。react发现你引入了x，但是没使用，就会把它删了。
那我怎么样既能引入也不需要打印呢？
treeshaking不适用于require，所以可以用require导入

4. 封装svg成Icon组件

现在每次使用svg都要写三句代码，还要require引入。避免重复，把它封装成组件。

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

把require导入也放进来。但是如果有100个svg，就要写100次reuqire。所以我们选择直接导入一个目录，这个目录里存放所有的svg。这里封装为importAll。

但是有报错，说找不到\_\_WebpackModuleApi，这是因为在ts里不支持这个的问题。去谷歌搜索解决方案。
安装：yarn add --dev @types/webpack-env就可以解决。

其他组件想使用Icon，一句话引入即可<Icon name='chart'/> name属性是文件名。

Icon如果想改变颜色，可以直接在css里用fill改变：

```css
.icon {
  fill: rgb(140, 177, 253);
}
```

可是有一些svg图标是自带颜色的，在它们的文件里会通过fill属性指定颜色。如果是这种情况，就改不了颜色了。我们可以选择手动去它们的svg文件里删除fill属性，但是如果有很多图标，一个个删除太慢了。

svgo-loader有一个功能，可以删除fill属性，只需要把需要的语句添加到配置文件的svgo-loader后边的选项options里边就可以。
svgo就是svg optimizer 优化器的意思。

```js
{ loader: 'svgo-loader', options: {
  plugins:[
      {removeAttrs: {attrs:'fill'}}
    ]
  }
},
```
