@date: 2020-08-21
@tag: [javascript]

## try...catch 能否捕获异步错误？

只能捕获同步代码块中的异常，不能捕获异步回调中的异常。

### 例子1：同步 throw，能捕获

```js
try {
  throw new Error('同步错误');
} catch (e) {
  console.log('捕获到：', e.message); // 捕获到：同步错误
}
```

### 例子2：setTimeout 里的 throw，不能捕获

```js
try {
  setTimeout(() => {
    throw new Error('异步错误');
  }, 0);
} catch (e) {
  console.log('捕获到：', e.message); // 不会执行
}
```

**_原因：setTimeout 的回调是在主线程事件队列的下一个宏任务执行，已经脱离了 try...catch 的作用域。_**

## Promise 的异常捕获

promise 内部的异常（无论同步还是异步），都能被 .catch 捕获

### 例子3：Promise 内 throw，catch 能捕获

```js
Promise.resolve()
  .then(() => {
    throw new Error('Promise错误');
  })
  .catch((e) => {
    console.log('捕获到：', e.message); // 捕获到：Promise错误
  });
```

### 例子4：Promise 内 setTimeout throw，catch 不能捕获

```js
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      throw new Error('定时器里的错误');
    }, 0);
  })
  .catch((e) => {
    console.log('捕获到：', e.message); // 不会执行
  });
```

原因：setTimeout 里的 throw 依然是脱离了 Promise 链的，catch 捕获不到。

## async/await 与 try...catch

如果你用 await 等待一个 Promise，try...catch 可以捕获 await 抛出的异常：

```js
async function test() {
  try {
    await Promise.reject(new Error('异步错误'));
  } catch (e) {
    console.log('捕获到：', e.message); // 捕获到：异步错误
  }
}
test();
```

## 总结

- try...catch 只能捕获同步代码块里的异常，不能捕获异步回调（如 setTimeout、事件监听器）里的异常。
- Promise.prototype.catch 能捕获 Promise 链中抛出的异常（无论同步还是异步的 then 回调），但不能捕获 Promise 链外的异步异常（如 setTimeout 里的 throw）。
- async/await + try...catch 可以捕获 await 的 Promise 抛出的异常。

如果你想让所有异步异常都能被捕获，建议把异步操作写进 Promise 里，并用 catch 处理。
