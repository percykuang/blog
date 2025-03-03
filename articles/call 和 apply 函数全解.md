## 功能

call 和 apply 函数是 JavaScript 中用于改变函数执行上下文（this 值）的函数。它们可以调用一个函数，并指定函数执行时的上下文（this 值）。他们两个的差异在于传参方式不同，call 的传参结构为`function.call(thisArg, arg1, arg2, ...)`，apply 的传参结构为`function.apply(thisArg, [argsArray])`。

## 用法

### 绑定函数 this

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person = { name: 'Alice' };
greet.call(person, 'Hello'); // Hello, Alice!
```

### 多参数

```js
function introduce(greeting, profession) {
  console.log(`${greeting}, I'm ${this.name}, I'm a ${profession}`);
}

const person = { name: 'Bob' };
introduce.myCall(person, 'Hi', 'developer'); // Hi, I'm Bob, I'm a developer
```

## 实现原理

具体代码实现（call）：

```js
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.call - what is trying to be bound is not callable');
  }
  context = context || window;
  const fn = Symbol('fn');
  context.fn = fn;
  const res = context.fn(...args);
  delete context.fn;
  return res;
};
```

具体代码实现（apply）：

```js
Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.apply - what is trying to be bound is not callable');
  }
  context = context || window;
  const fn = Symbol('fn');
  context.fn = fn;
  const res = context.fn(...args);
  delete context.fn;
  return res;
};
```

不难看出，call 和 apply 的底层实现都是类似的：

1. 函数临时添加为目标对象的方法
2. 通过对象调用这个方法（此时 this 自然指向该对象）
3. 调用完成后删除这个临时方法

这种实现方式巧妙地利用了 JavaScript 中 this 的指向规则：当函数作为对象的方法调用时，this 指向该对象。

## 注意事项：

- 在严格模式下，需要特别处理 context 为 null/undefined 的情况
- 在实际项目中，可能需要考虑 Symbol 的兼容性
- 在 Node.js 环境中需要使用 global 替代 window
- 需要注意属性名冲突的问题（虽然使用 Symbol 已经很好地解决了这个问题）
