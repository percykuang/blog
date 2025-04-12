@date: 2020-10-25
@tag: [javascript,es6]

## 基本概念

async/await 是 Promise 的语法糖，让异步代码看起来像同步代码。

```js
// Promise 方式
function getData() {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
}

// async/await 方式
async function getData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
```

## async 函数

```js
// async 函数总是返回 Promise
async function example() {
  return 'hello';  // 自动包装成 Promise
}

// 等价于
function example() {
  return Promise.resolve('hello');
}

// 使用
example().then(result => console.log(result)); // 'hello'
```

## await 关键字

```js
async function example() {
  // await 等待 Promise 完成
  const result1 = await promise1;
  const result2 = await promise2;
  return result1 + result2;
}

// await 可以等待任何值
const str = await 'hello'; // 直接返回
const num = await 123; // 直接返回
const p = await Promise.resolve('world'); // 等待 Promise 完成
```

## 错误处理

```js
// 方式1：try/catch
async function example() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// 方式2：链式调用
async function example() {
  const data = await fetch('https://api.example.com/data')
    .then(response => response.json())
    .catch(error => console.error(error));
  return data;
}
```

## 并行执行

```js
// 串行执行 - 较慢
async function serial() {
  const result1 = await asyncOperation1();
  const result2 = await asyncOperation2();
  return [result1, result2];
}

// 并行执行 - 较快
async function parallel() {
  // Promise.all
  const [result1, result2] = await Promise.all([
    asyncOperation1(),
    asyncOperation2()
  ]);
  return [result1, result2];

  // 或者
  const promise1 = asyncOperation1();  // 立即开始执行
  const promise2 = asyncOperation2();  // 立即开始执行
  const result1 = await promise1;      // 等待完成
  const result2 = await promise2;      // 等待完成
}
```

## 实际应用场景

```js
// 1. API 请求
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

// 2. 多个依赖请求
async function getUserWithPosts(userId) {
  // 并行请求用户信息和文章
  const [user, posts] = await Promise.all([fetchUser(userId), fetchUserPosts(userId)]);

  return {
    ...user,
    posts,
  };
}

// 3. 条件请求
async function conditionalFetch(id) {
  const data = await fetchInitialData(id);

  if (data.needsExtra) {
    const extraData = await fetchExtraData(id);
    return { ...data, ...extraData };
  }

  return data;
}
```

## 循环中的 async/await

```js
// 串行处理
async function processArray(array) {
  for (const item of array) {
    await processItem(item);  // 一个接一个处理
  }
}

// 并行处理
async function processArray(array) {
  const promises = array.map(item => processItem(item));
  await Promise.all(promises);  // 同时处理所有项
}

// forEach 不能正确处理 async/await
array.forEach(async item => {  // 错误！不会等待
  await processItem(item);
});
```

## 最佳实践

```js
// 1. 总是使用 try/catch 处理错误
async function example() {
  try {
    const result = await riskyOperation();
    return result;
  } catch (error) {
    // 处理错误
    console.error(error);
    // 可以选择重新抛出
    throw error;
  }
}

// 2. 合理使用并行处理
async function fetchAllData() {
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]);
  return { users, posts, comments };
}

// 3. 避免无谓的 await
async function example() {
  const promise = fetchData();  // 立即开始
  // 做其他事情
  const result = await promise; // 需要结果时才等待
}
```

## async/await 向 promise 转换示例

### async 函数

```js
// async 函数
async function foo() {
  return 'hello';
}

// 转换为 Promise
function foo() {
  return Promise.resolve('hello');
}
```

### await 表达式

```js
// async/await 版本
async function example() {
  const result = await somePromise();
  return result + 1;
}

// 转换为 Promise 版本
function example() {
  return new Promise((resolve, reject) => {
    somePromise()
      .then(result => {
        resolve(result + 1);
      })
      .catch(reject);
  });
}
```

### 多个 await 表达式

```js
// async/await 版本
async function getData() {
  const data1 = await fetch('/api/data1');
  const data2 = await fetch('/api/data2');
  return data1 + data2;
}

// 转换为 Promise 版本
function getData() {
  return new Promise((resolve, reject) => {
    fetch('/api/data1')
      .then(data1 => {
        return fetch('/api/data2')
          .then(data2 => {
            resolve(data1 + data2);
          });
      })
      .catch(reject);
  });
}
```

### try/catch

```js
// async/await 版本
async function example() {
  try {
    const result = await riskyOperation();
    return result;
  } catch (error) {
    console.error(error);
    return 'default';
  }
}

// 转换为 Promise 版本
function example() {
  return new Promise((resolve) => {
    riskyOperation()
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        console.error(error);
        resolve('default');
      });
  });
}
```

### 复杂流程控制

```js
// async/await 版本
async function processData() {
  const data = await fetchData();
  if (data.needsExtra) {
    const extra = await fetchExtra();
    return { ...data, ...extra };
  }
  return data;
}

// 转换为 Promise 版本
function processData() {
  return new Promise((resolve, reject) => {
    fetchData()
      .then(data => {
        if (data.needsExtra) {
          return fetchExtra()
            .then(extra => {
              resolve({ ...data, ...extra });
            });
        }
        resolve(data);
      })
      .catch(reject);
  });
}
```

### 循环

```js
// async/await 版本
async function processItems(items) {
  const results = [];
  for (const item of items) {
    const result = await processItem(item);
    results.push(result);
  }
  return results;
}

// 转换为 Promise 版本
function processItems(items) {
  return new Promise((resolve, reject) => {
    const results = [];
    let promise = Promise.resolve();

    items.forEach(item => {
      promise = promise
        .then(() => processItem(item))
        .then(result => {
          results.push(result);
        });
    });

    promise
      .then(() => resolve(results))
      .catch(reject);
  });
}
```

### 并行操作

```js
// async/await 版本
async function parallel() {
  const [result1, result2] = await Promise.all([
    asyncOp1(),
    asyncOp2()
  ]);
  return result1 + result2;
}

// 转换为 Promise 版本
function parallel() {
  return Promise.all([asyncOp1(), asyncOp2()])
    .then(([result1, result2]) => {
      return result1 + result2;
    });
}
```

**转换的核心原则：**

- async 函数总是返回 Promise
- await 表达式转换为 .then() 调用
- 错误处理转换为 .catch()
- 保持执行顺序
- 维护变量作用域

这种转换通常是由 JavaScript 引擎或转译器（如 Babel）自动完成的，我们不需要手动进行这种转换。理解这个转换过程有助于我们更好地理解 async/await 的工作原理。

## 注意事项

1. async 函数总是返回 Promise
2. await 只能在 async 函数内使用
3. 错误会沿着调用链传播
4. 注意区分串行和并行操作
5. 小心循环中的 async/await

async/await 是现代 JavaScript 中处理异步操作的最佳方式，它让异步代码更容易理解和维护。合理使用 async/await 可以大大提高代码的可读性和可维护性。
