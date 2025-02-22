@date: 2025-03-15
@tag: [typescript, webpack]

> 在平时自己由零搭建项目时，虽然基础配置都比较熟悉，比如配置 file-loader, url-loader, css-loader 等，配置不难，但究竟是怎么起作用的呢，今天就来说说如何编写一个 Webpack Loader。

# Loader 作用

按我自己的简单理解，loader 通常指打包的方案，即按什么方式来处理打包，打包的时候它可以拿到模块源代码，`经过特定 loader 的转换`后返回新的结果。

## 水果列表

- 苹果
- 香蕉
- 橙子
- 草莓
- 葡萄
- 西瓜
- 芒果

~~比如 sass-loader 可以把 SCSS 代码转换成 CSS 代码~~

```js
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import articleList from '../articles.json';
import { Article } from '../types';
import dayjs from 'dayjs';

marked.setOptions({
  breaks: true, // 允许回车换行
  gfm: true, // 启用 GitHub Flavored Markdown
});

const Detail: FC = () => {
  const params = useParams();
  const [article, setArticle] = useState<Article>();

  console.log('params', params, article?.content);

  useEffect(() => {
    const record = articleList.find((item) => item.id === params.id);
    setArticle(record);
  }, [params]);

  if (!article) {
    return <div>404</div>;
  }

  return (
    <div className="mt-8">
      <h1 className="my-6 text-3xl font-bold">{article.title}</h1>
      <div className="mb-4 text-sm text-stone-400">{`Updated at ${dayjs(article.date).format('YYYY.MM.DD')}`}</div>
      <article
        className="prose prose-stone lg:prose-lg dark:prose-invert prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-a:text-blue-600 prose-code:text-blue-600 prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-img:rounded-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: marked.parse(article.content),
        }}
      ></article>
      <footer></footer>
    </div>
  );
};

export default Detail;
```
