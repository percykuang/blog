@date: 2022-08-23
@tag: [模块化、工程化]

## CommonJS 和 ESModule 的起源与背景

### CommonJS

- 起源：2009 年由 Mozilla 工程师 Kevin Dangoor 提出，旨在为 JavaScript 在浏览器外（如服务器端）提供模块化支持。
- 应用场景：Node.js 的默认模块系统，主要用于服务器端开发。
- 核心目标：解决 JavaScript 无模块化的问题，实现代码复用和依赖管理。

### ESModule

- 起源：2015 年随 ES6 (ECMAScript 2015) 正式发布，成为 JavaScript 语言标准的一部分。
- 应用场景：现代浏览器和前端构建工具（如 Webpack、Rollup）广泛支持，逐步成为主流。
- 核心目标：统一 JavaScript 的模块化标准，支持静态分析和异步加载。

## 语法对比

### CommonJS 语法

导出模块：

```js
// 导出单个值
module.exports = function add(a, b) {
  return a + b;
};

// 导出多个值
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
```

导入模块：

```js// 导入整个模块
const math = require('./math.js');
math.add(2, 3); // 5

// 解构导入
const { subtract } = require('./math.js');
subtract(5, 2); // 3
```

### ESModule 语法

导出模块：

```js
// 命名导出
export const PI = 3.14;
export function circleArea(r) {
  return PI * r * r;
}

// 默认导出
export default class Calculator {
  /* ... */
}
```

导入模块：

```js
// 导入命名导出
// 12.56
// 导入默认导出
import Calculator from './Calculator.js';
import { PI, circleArea } from './math.js';

console.log(circleArea(2)); // 12.56

const calc = new Calculator();

// 动态导入（异步）
import('./math.js').then((module) => {
  console.log(module.PI);
});
```

## 核心差异

### 标准

一个是社区标准，一个是官方标准。

### 加载方式

| 特性     | CommonJS                   | ESModule                 |
| -------- | -------------------------- | ------------------------ |
| 加载时机 | 运行时同步加载（阻塞执行） | 编译时静态解析，异步加载 |
| 适用环境 | 服务器（Node.js）          | 浏览器和现代 Node.js     |
| 动态导入 | 支持 `require` 动态加载    | 支持 `import()` 动态加载 |

示例：动态加载

```js
// CommonJS
if (condition) {
  const module = require('./dynamic-module');
}

// ESModule
if (condition) {
  import('./dynamic-module.js').then((module) => {
    /* ... */
  });
}
```

### 模块作用域与值传递

| 特性     | CommonJS                               | ESModule                            |
| -------- | -------------------------------------- | ----------------------------------- |
| 输出类型 | 输出值的拷贝（原始类型复制，对象引用） | 输出值的只读引用（类似 const 绑定） |
| 响应性   | 导出值变化后，导入方不受影响           | 导出值变化后，导入方同步更新        |

示例：值传递差异

```js
// counter.js (CommonJS)
let count = 0;
module.exports = { count, increment: () => count++ };

// main.js
const { count, increment } = require('./counter');
increment();
console.log(count); // 0（count 是原始值的拷贝）

// counter.mjs (ESModule)
export let count = 0;
export const increment = () => count++;

// main.mjs
import { count, increment } from './counter.mjs';
increment();
console.log(count); // 1（count 是引用）
```

### 循环依赖处理

| 特性     | CommonJS                         | ESModule                   |
| -------- | -------------------------------- | -------------------------- |
| 处理方式 | 可能获取不完整模块（已执行部分） | 通过静态分析确保引用完整性 |

示例：循环依赖

```js
// a.js (CommonJS)
const b = require('./b');
console.log('a: b.value =', b.value);
module.exports = { value: 'a' };

// b.js (CommonJS)
const a = require('./a');
console.log('b: a.value =', a.value); // 输出 {}（a 未完成初始化）
module.exports = { value: 'b' };

// 执行 node a.js 输出：
// b: a.value = {}
// a: b.value = b

// a.mjs (ESModule)
import { value } from './b.mjs';
console.log('a:', value);
export const value = 'a';

// b.mjs (ESModule)
import { value } from './a.mjs';
console.log('b:', value); // 报错：无法在初始化前访问 'value'
export const value = 'b';

// 浏览器中执行会直接报错（ReferenceError）
```

### 静态分析与 Tree Shaking

- ESModule：支持静态分析，构建工具（如 Webpack）可进行 Tree Shaking，删除未使用的代码。
- CommonJS：动态特性导致无法可靠分析依赖，Tree Shaking 效果有限。

示例：Tree Shaking

```js
// main.js
import { add } from './math.js';

// math.js (ESModule)
export function add(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}

console.log(add(2, 3));

// 构建后产物中不会包含 multiply 函数。
```

### Top-Level Await

- ESModule：支持在模块顶层使用 await。
- CommonJS：不支持，必须在函数内部使用。

示例：Top-Level Await

```js
// data.mjs (ESModule)
const data = await fetch('https://api.example.com/data');
export { data };

// main.mjs
import { data } from './data.mjs';
console.log(data);
```

## 现代开发中的使用与兼容

### Node.js 中的 ESModule 支持

- 文件扩展名：使用 .mjs 或设置 package.json 中 "type": "module"。
- 互操作性：可通过 import 加载 CommonJS 模块，但部分特性（如动态 require）受限。

示例：Node.js 配置

```json
// package.json
{
  "type": "module", // 启用 ESModule
  "scripts": {
    "start": "node index.mjs"
  }
}
```

### 构建工具中的转换

- Babel：将 ESModule 转换为 CommonJS 以兼容旧环境。
- Webpack/Rollup：支持混合使用两种模块系统。

示例：Babel 配置

```json
// .babelrc
{
  "presets": [
    ["@babel/preset-env", { "modules": "commonjs" }] // 转译 ESM 为 CJS
  ]
}
```

## 总结与选择建议

| 场景                | 推荐模块系统            | 理由                        |
| ------------------- | ----------------------- | --------------------------- |
| Node.js 服务端      | CommonJS                | 内置支持，生态成熟          |
| 现代浏览器/前端项目 | ESModule                | 原生支持，Tree Shaking 优化 |
| 混合项目            | ESModule + 构建工具转换 | 兼容新旧环境，统一代码风格  |

未来趋势：ESModule 逐渐成为主流，Node.js 也在增强对 ESM 的支持。建议新项目优先使用 ESModule，旧项目逐步迁移。
