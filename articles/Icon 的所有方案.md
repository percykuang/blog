@date: 2020-07-21
@tag: [icon]

## icon 的各种做法

1. img 法
2. background 法
3. background 合一法
4. font 法
5. SVG 法
6. CSS 就是干法

### img 法

1. 搞一张图片
2. 使用`<img src="图片路径"/>`来使用图片
3. 通过其它 css 属性来控制图片的大小，位置等

优点：可以利用图片默认自动缩放的特性，通过仅设置宽度或者高度来改变图片的大小

### background 法

1. 搞一张图片
2. 利用 css 属性`background: url(./image.png)`
3. 通过其它 css 属性来控制图片的大小，位置等

### background 合一法

1. 将几张图片拼成一张图，可以用网上的 css sprites generator 工具
2. 利用 css 属性`width，height, overflow, background-position`来显示某一张图片

### font 法

使用 icon-font，字体即图标，图标即字体。常用网站：http://iconfont.cn

注意：一般来说，字体图标的 Entity Number 一般都以`&#xe6`开头，因为这一段范围通常不表示任何字符

- inconfont 的 HTML 形式（对应 iconfont.cn 里的 Unicode 功能）

用法：

1. 在样式里引入@font-face

```css
@font-face {
  font-family: 'iconfont'; /* project id 1958405 */
  src: url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.eot');
  src:
    url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.woff') format('woff'),
    url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.svg#iconfont') format('svg');
}
```

2. 使用字体对应的 Entity Number（unicode）并指定 font-family

```html
<div style="font-family: iconfont;">&#xe600;</div>
```

- inconfont 的 CSS 形式（对应 iconfont.cn 里的 Font class 功能）

1. 在样式里引入@font-face，并使用伪类指定对应 iconfont 的 Entity Number

```css
@font-face {
  font-family: 'iconfont'; /* project id 1958405 */
  src: url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.eot');
  src:
    url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.woff') format('woff'),
    url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1958405_gp6ql65yxke.svg#iconfont') format('svg');
}
.xxx:before {
  content: '\e600';
}
```

2. 指定 font-family 和伪类

```html
<div class="xxx" style="font-family: iconfont;"></div>
```

### SVG-symbol 法

这种方式是最推荐的做法。与以上方式相比有如下特点：

1. 支持多色图标，不再受单色限制
2. 通过一些技巧，支持像字体那样，通过 font-size，color 来调样式
3. 兼容性较差，支持 ie9+即现代浏览器
4. 浏览器渲染 svg 的性能一般，还不如 png

使用步骤：

1. 从 iconfont.cn 上拷贝项目下生成的 symbol 代码

```js
//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js
```

2. 加入通用 css 代码（引入一次就行）

```html
<style type="text/css">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
```

3. 挑选相应的图标并获取类名，应用于页面

```html
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xxx"></use>
</svg>
```

### 「CSS 就是干」法

纯css技巧来实现icon。

推荐一个网站，这个网站是一个设计师写的，全是用css实现的icon。

https://cssicon.space
