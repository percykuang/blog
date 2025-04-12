@date: 2020-10-15
@tag: [javascript,es6]

## Promise 是什么

Promise 是 JavaScript 中用于处理异步操作的对象，它代表了一个异步操作的最终完成（或失败）及其结果值。

## Promise 的状态

Promise 有三种状态：

```js
// 1. pending（进行中）
const promise = new Promise((resolve, reject) => {
  // 异步操作尚未完成
});

// 2. fulfilled（已成功）
const promise = new Promise((resolve, reject) => {
  resolve('success');
});

// 3. rejected（已失败）
const promise = new Promise((resolve, reject) => {
  reject('error');
});
```

特点：

- 状态只能从 pending 转为 fulfilled 或 rejected
- 状态一旦改变，就不会再变

## Promise 的基本用法

```js
// 创建 Promise
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    if (/* 操作成功 */) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 1000);
});

// 使用 Promise
promise
  .then(result => {
    console.log(result); // 处理成功
  })
  .catch(error => {
    console.log(error);  // 处理失败
  })
  .finally(() => {
    console.log('完成'); // 无论成功失败
  });
```

## Promise 的链式调用

```js
// 链式调用示例
new Promise((resolve, reject) => {
  resolve(1);
})
  .then((value) => {
    return value + 1; // 2
  })
  .then((value) => {
    return value * 2; // 4
  })
  .then((value) => {
    console.log(value); // 4
  });
```

## Promise 的静态方法

```js
// Promise.resolve
Promise.resolve('success').then((value) => {
  console.log(value); // 'success'
});

// Promise.reject
Promise.reject('error').catch((error) => {
  console.log(error); // 'error'
});

// Promise.all - 所有Promise都成功才成功
Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log(results); // [result1, result2, result3]
});

// Promise.race - 返回最快的Promise结果
Promise.race([promise1, promise2]).then((result) => {
  console.log('最快完成的结果:', result);
});

// Promise.allSettled - 等待所有Promise完成
Promise.allSettled([promise1, promise2]).then((results) => {
  // 返回所有Promise的结果，包括成功和失败
});
```

## 错误处理

```js
// 方式1：使用 catch
promise
  .then((result) => {})
  .catch((error) => {
    console.log('捕获错误:', error);
  });

// 方式2：then 的第二个参数
promise.then(
  (result) => {},
  (error) => {
    console.log('捕获错误:', error);
  }
);
```

## Promise 的优势

1. 解决回调地狱

```js
// 回调地狱
asyncFunc1(function (result1) {
  asyncFunc2(result1, function (result2) {
    asyncFunc3(result2, function (result3) {
      console.log(result3);
    });
  });
});

// Promise 方式
asyncFunc1()
  .then((result1) => asyncFunc2(result1))
  .then((result2) => asyncFunc3(result2))
  .then((result3) => console.log(result3));
```

2. 更好的错误处理
3. 链式调用更清晰
4. 支持并行操作

## 实际应用场景

```js
// 1. 网络请求
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data));

// 2. 文件操作
readFile('file.txt')
  .then((content) => writeFile('new.txt', content))
  .then(() => console.log('完成'));

// 3. 延时操作
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
delay(1000).then(() => console.log('1秒后执行'));
```

## 注意事项

1. Promise 一旦创建就会执行
2. then 方法返回新的 Promise
3. 错误会沿着链式调用传递
4. Promise 状态一旦改变就不可逆
5. finally 不接收参数

## 最佳实践

```js
// 1. 始终使用 catch 处理错误
// 2. 合理使用 Promise.all 和 Promise.race
// 3. 避免嵌套 Promise
// 4. 使用 async/await 让代码更简洁
async function example() {
  try {
    const result = await somePromise();
    return result;
  } catch (error) {
    console.error(error);
  }
}
```
