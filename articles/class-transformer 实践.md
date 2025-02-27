@date: 2020-12-14
@tag: [typescript, class-transformer]

## 为什么要使用这个库

比如，我们在后台管理系统中要发布一篇文章，我们只需创建一个普通的平面对象，然后将所有填写的标题、内容等信息给到这个普通对象。但是，如果这个普通对象若是转为对应的类对象，则会出现以下问题：

代码：

```ts
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import Express from 'express';

import Article from './model/Article';
import articleRoute from './routes/articleRoute';

const app = Express();

app.use('/api/article', articleRoute);

// 约束为平面对象
const article: any = {};

article.title = '12345';
article.content = '123';
article.publishTime = new Date();
// 下面的属性是必须的，但是这里进行注释
// article.tagList = ['12']

// 按理说，这里应该要输出缺失了tagList这个属性的信息
validate(article).then((errors) => {
  console.log(errors);
});

app.listen(3000, () => console.log('服务已开启！'));
```

运行结果（没有捕获到任何信息）：

![1.png](https://free4.yunpng.top/2025/02/27/67bfb1b1c37a5.png)

因此，我们需要对平面对象进行转换，才可结合class-validator对类属性信息进行约束。

## 安装

```ts
yarn add class-transformer
```

## 使用

```ts
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import Express from 'express';

import Article from './model/Article';
import articleRoute from './routes/articleRoute';

const app = Express();

app.use('/api/article', articleRoute);

// 这是个平面对象
const article: any = {};

article.title = '12345';
article.content = '123';
article.publishTime = new Date();

const newArticle = plainToClass(Article, article);

validate(newArticle).then((errors) => {
  console.log(errors);
});

app.listen(3000, () => console.log('服务已开启！'));
```

运行结果:

![2.png](https://free4.yunpng.top/2025/02/27/67bfb1b1ad296.png)

## 没这么简单

如果，一开始给平面对象赋值时的属性的类型就不对呢？

如下代码：

```ts
// 这是个平面对象
const article: any = {};

// 类约束是的类型是字符串，这里赋值数字
article.title = 123;
article.content = '123';
article.publishTime = new Date();
article.tagList = ['123'];

const newArticle = plainToClass(Article, article);

console.log(newArticle.title, typeof newArticle.title);

validate(newArticle).then((errors) => {
  console.log(errors);
});
```

运行结果：

![3.png](https://free4.yunpng.top/2025/02/27/67bfb1ec0579f.png)

这里可以看出，虽然数据类型对于不上，但还是验证通过了。所以，我们需要使用class-transform提供给我们的运行时的类型验证。

## 使用装饰器@Type进行运行时的类型约束

1. 安装reflect-metadata

```ts
yarn add reflect-metadata
```

2. 在入口文件`index.ts`中全局导入

```ts
// 最好在第一行导入，否则可能依旧会报错
import 'reflect-metadata'
import Express from 'express'
import articleRoute from './routes/articleRoute'
import Article from './model/Article'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'
...
```

3. 对Article类进行运行时的类型约束

```ts
import { ArrayMinSize, IsDate, IsNotEmpty } from 'class-validator'
import { Type } from 'class-transformer'

class Article {

  @IsNotEmpty({ message: '文章标题不可以为空' })
  // 运行时的类型约束
  @Type(() => String)
  public title: string

  @IsNotEmpty({ message: '文章标签不可以为空' })
  @ArrayMinSize(1, { message: '文章标签至少有一个' })
  // 文档建议如果是字符串的数组，使用字符串约束更好，因为js其实不存在数字数组，字符串数组等
  @Type(() => String)
  // 上面虽然解决了不是字符串的数组的问题，但是如果传进来的是一个字符串呢？这就太tm难了，所以再在编译时检查一下算了吧，运行时不管了
  @IsArray({ message: '文章标签必须是一个数组' })
  public tagList: string[]

  @IsNotEmpty({ message: '发布日期不可以为空' })
  @IsDate()
  @Type(() => Date)
  public publishTime: Date

  @IsNotEmpty({ message: '文章内容不可以为空' })
  @Type(() => String)
  public content: string
}

export default Article
```

4. 运行结果

![4.png](https://free4.yunpng.top/2025/02/27/67bfb1ec05754.png)

可以看出，已经将数字类型的title转为了字符串类型，同时也通过了验证。
