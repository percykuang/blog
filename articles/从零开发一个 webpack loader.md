@date: 2021-11-18
@tag: [webpack]

## 背景

由于近一段时间业务中开始需要经常开发、贡献物料组件，但是物料项目中对于样式隔离的方案不是那么的自动化，需要开发人员自己手动给每一个类名加上唯一且稳定的前缀（类似于作用域，进行样式隔离，防止业务中用到多个物料组件时有类名冲突的问题），这就使得开发体验不是很好。因此我打算给物料项目提供一个 webpack loader，来解决需要开发人员手动给样式添加类名前缀的问题。

## 需求调研

根据项目中的对于类名前缀的使用情况进行调研，发现为以下情形：

**_一、每个 React 组件使用 className 时，必须通过一个设置前缀的函数对类名附加上前缀_**

代码示例：

getScopedClassName 的定义:

```ts
function getScopedClassName(className: string) {
  return className ? `${PREFIX_CLASSNAME}${className}` : '';
}
```

组件使用 getScopedClassName：

```jsx
<div className={getScopedClassName('f-table')}>...</div>
```

**_二、less 文件（项目中用的样式是 less）中对应也需要加上前缀变量_**

举个🌰：

```less
.@{PREFIX_CLASSNAME}f-table {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

## 方案设计

针对于调研中的使用情况，我们不难设计：

- 由于整体涉及到的是对代码文件内容的改动，因此 loader 比 plugin 更合适
- 类名前缀通过使用 loader 时传递参数传给 loader 里，供其内部处理
- loader 内部需要处理以下任务：
  - 把 tsx/jsx 文件里组件使用到的 className 属性值加上前缀
  - 把 css 文件里的类名添加上前缀（less 经过转译也会变为 css，因此只处理 css 即可）

## 代码实现

### 主入口文件（index.ts）

主要用于对接受到文件内容进行分发处理，代码如下：

```ts
import type { LoaderContext } from 'webpack';

import processCSS from './processCSS';
import processJS from './processJS';

interface CSSScopeLoaderOptions {
  scope?: string;
}

function cssScopeLoader(this: LoaderContext<CSSScopeLoaderOptions>, source: string): string {
  // 告诉 webpack 这个 loader 的输出是否可以被缓存
  this.cacheable && this.cacheable();

  // 获取配置的 scope 参数值
  const options = this.getOptions();
  const scope = options.scope || 'your-scope';
  const resourcePath = this.resourcePath.toLowerCase();

  try {
    if (/\.(jsx|tsx)$/.test(resourcePath)) {
      return processJS(source, scope);
    } else if (/\.css$/.test(resourcePath)) {
      return processCSS(source, scope);
    }
    return source;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    this.emitError(new Error(`类名前缀处理错误: ${errorMessage}`));
    return source;
  }
}

// 声明 loader 的 raw 属性
// 文本文件处理用 raw = false
// 二进制文件处理用 raw = true
cssScopeLoader.raw = false;

export default cssScopeLoader;
```

### processJS 文件（处理 jsx、tsx）

```ts
import generate from '@babel/generator';
import { parse as babelParse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';

/**
 * 处理 className 字符串
 */
export function addScopeToClassName(classNames: string, scope: string): string {
  return classNames
    .split(/\s+/)
    .map((className) => (className ? `${scope}${className}` : className))
    .join(' ');
}

/**
 * 处理 JSX/TSX 中的 className 属性，保持原始代码格式不变
 */
function processJS(content: string, scope: string): string {
  const ast = babelParse(content, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
    allowReturnOutsideFunction: true,
    createParenthesizedExpressions: true,
  });

  // 处理字符串字面量中的类名
  const processStringLiteral = (node: t.StringLiteral) => {
    node.value = addScopeToClassName(node.value, scope);
  };

  // 处理条件表达式中的类名
  const processConditionalExpression = (node: t.ConditionalExpression) => {
    if (t.isStringLiteral(node.consequent)) {
      processStringLiteral(node.consequent);
    }
    if (t.isStringLiteral(node.alternate)) {
      processStringLiteral(node.alternate);
    }
  };

  traverse(ast, {
    JSXAttribute(path) {
      // 只处理 className 属性
      if (path.node.name.name !== 'className') {
        return;
      }

      const value = path.node.value;
      if (!value) return;

      // 处理字符串字面量
      if (t.isStringLiteral(value)) {
        processStringLiteral(value);
        return;
      }

      // 处理表达式容器
      if (t.isJSXExpressionContainer(value)) {
        const expression = value.expression;

        // 处理三元表达式
        if (t.isConditionalExpression(expression)) {
          processConditionalExpression(expression);
          return;
        }

        // 处理模板字符串
        if (t.isTemplateLiteral(expression)) {
          // 处理模板字符串中的静态部分
          expression.quasis.forEach((quasi) => {
            if (quasi.value.raw.trim()) {
              quasi.value.raw = addScopeToClassName(quasi.value.raw, scope);
              quasi.value.cooked = addScopeToClassName(quasi.value.cooked || '', scope);
            }
          });

          // 处理模板字符串中的表达式
          expression.expressions.forEach((expr) => {
            if (t.isConditionalExpression(expr)) {
              processConditionalExpression(expr);
            } else if (t.isLogicalExpression(expr)) {
              if (t.isStringLiteral(expr.right)) {
                processStringLiteral(expr.right);
              }
            } else if (t.isStringLiteral(expr)) {
              processStringLiteral(expr);
            }
          });
          return;
        }

        // 处理逻辑表达式 (&&)
        if (t.isLogicalExpression(expression)) {
          if (t.isStringLiteral(expression.right)) {
            processStringLiteral(expression.right);
          }
          return;
        }
      }
    },
  });

  return generate(ast).code;
}

export default processJS;
```

### processCSS 文件（处理 css）

```ts
import { parse as cssParser, stringify as cssStringify } from 'css';

import type { CssAst, CssRule } from './types';

/**
 * 处理 CSS 规则
 * @param rules CSS 规则数组
 * @param scope 作用域
 */
function processRules(rules: CssRule[], scope: string): void {
  rules.forEach((rule: CssRule) => {
    switch (rule.type) {
      case 'rule':
        // 处理普通规则
        if (rule.selectors) {
          rule.selectors = rule.selectors.map((selector: string) => {
            return selector.replace(/\.([\w-]+)/g, `.${scope}$1`);
          });
        }
        break;

      case 'media':
      case 'supports':
      case 'document':
      case 'host':
      case 'layer':
        // 处理所有可能包含嵌套规则的 at-rules
        if (rule.rules) {
          processRules(rule.rules, scope);
        }
        break;

      case 'keyframes':
        // 处理关键帧动画
        if (rule.keyframes) {
          processRules(rule.keyframes, scope);
        } else if (rule.rules) {
          // 某些 CSS 解析器可能将关键帧放在 rules 中
          processRules(rule.rules, scope);
        }
        break;

      default:
        // 处理其他可能包含规则的节点
        if (rule.rules && Array.isArray(rule.rules)) {
          processRules(rule.rules, scope);
        }
        if (rule.keyframes && Array.isArray(rule.keyframes)) {
          processRules(rule.keyframes, scope);
        }
        break;
    }
  });
}

/**
 * 处理 CSS 内容
 * @param content CSS 内容
 * @param scope 作用域
 * @returns 处理后的 CSS 内容
 */
function processCSS(content: string, scope: string): string {
  try {
    // 确保输入内容不为空
    if (!content.trim()) {
      return '';
    }

    // 如果是简单的空规则，直接处理
    if (content.match(/^\.([\w-]+)\s*{\s*}\s*$/)) {
      return content.replace(/\.([\w-]+)/g, `.${scope}$1`);
    }

    const ast = cssParser(content, {
      silent: false, // 不静默处理错误
    }) as CssAst;

    // 确保 AST 和规则数组存在
    if (!ast || !ast.stylesheet || !Array.isArray(ast.stylesheet.rules)) {
      // 如果 AST 解析失败，尝试直接处理选择器
      return content.replace(/\.([\w-]+)/g, `.${scope}$1`);
    }

    // 递归处理所有规则
    processRules(ast.stylesheet.rules, scope);

    // 将 AST 转换回 CSS 代码
    const result = cssStringify(ast);

    // 如果转换结果为空，尝试直接处理原始内容
    if (!result) {
      return content.replace(/\.([\w-]+)/g, `.${scope}$1`);
    }

    return result;
  } catch (error) {
    // 发生错误时，尝试直接处理原始内容
    console.error('处理 CSS 内容时出错:', error);
    return content.replace(/\.([\w-]+)/g, `.${scope}$1`);
  }
}

export default processCSS;
```

## 发布

经过测试没问题后，需要将 loader 发布到 npm，有以下需要注意的点：

1. 上传到 npm 的包需要在 package.json 中包含一些必要字段

```js
{
  "name": "css-scope-loader",        // 包名，必须唯一
  "version": "0.0.1",                // 版本号，必须符合语义化版本
  "description": "A webpack loader that adds scope to css in react projects",  // 包描述
  "main": "./dist/index.cjs",        // 主入口文件
  "author": "Percy Kuang",           // 作者信息
  "license": "MIT"                   // 许可证
}
```

2. 确保你已经登录 npm

```bash
npm login
```

如果你还没有 npm 账号，需要先在 npm 官网 注册一个账号。

3. 更新版本号

在发布之前，建议更新版本号。遵循语义化版本（Semantic Versioning）：

- 主版本号（Major）：当你做了不兼容的 API 修改
- 次版本号（Minor）：当你做了向下兼容的功能性新增
- 修订号（Patch）：当你做了向下兼容的问题修正

你可以使用以下命令更新版本号：

```bash
npm version patch  # 0.0.1 -> 0.0.2
# 或
npm version minor  # 0.0.1 -> 0.1.0
# 或
npm version major  # 0.0.1 -> 1.0.0
```

4. 构建项目

确保你的代码已经构建完成：

```bash
npm run build
```

5. 检查 .npmignore 或 files 字段

确保正确配置了 files 字段，只包含 dist 目录

6. 发布后进行验证

发布完成后，可以：

- 在 npm 官网上搜索包名
- 使用 npm view css-scope-loader 查看包信息
- 创建一个测试项目安装你的包：npm install css-scope-loader
