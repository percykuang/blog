@date: 2020-10-21
@tag: [javascript, es6]

## 前言

Promise 是 JavaScript 中用于处理异步操作的对象，它代表了一个异步操作的最终完成（或失败）及其结果值。

## 用法

### 创建 Promise

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
  }, 1000);
});
```

### 使用 Promise

```js
promise.then((result) => {
  console.log(result);
});
```

## 实现原理

### 基础结构和构造函数

```js
class MyPromise {
  constructor(fn) {
    // Promise 状态
    this.status = 'pending';
    // 成功值
    this.value = null;
    // 失败原因
    this.reason = null;
    // 成功回调队列
    this.onFulfilledCallbacks = [];
    // 失败回调队列
    this.onRejectedCallbacks = [];

    // resolve 处理函数
    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    // reject 处理函数
    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    // 执行传入的函数
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
}
```

关键点：

- 维护 Promise 的三种状态：pending、fulfilled、rejected
- 使用回调队列存储异步操作的回调函数
- 状态一旦改变就不可逆

### then 方法实现

```js
then(onFulfilled, onRejected) {
  // 参数校验，确保是函数
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason;
        };
  // 返回新的 Promise 以支持链式调用
  const promise2 = new MyPromise((resolve, reject) => {
    if (this.status === "fulfilled") {
      setTimeout(() => {
        try {
          const x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    }
    if (this.status === "rejected") {
      setTimeout(() => {
        try {
          const x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    }
    if (this.status === "pending") {
      this.onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      });
    }
  });
  return promise2;
}
```

关键点：

- 支持链式调用
- 使用 setTimeout 确保异步执行
- 处理返回值的 Promise 状态

### resolvePromise 方法实现

```js
function resolvePromise(promise2, x, resolve, reject) {
  // 防止循环引用
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }

  // 处理返回值为 Promise 的情况
  if (x instanceof MyPromise) {
    x.then((value) => {
      resolvePromise(promise2, value, resolve, reject);
    }).catch(reject);
  } else {
    // 普通值直接 resolve
    resolve(x);
  }
}
```

关键点：

- 处理循环引用问题
- 处理返回值为 Promise 的情况
- 递归解析 Promise

### 静态方法实现

```js
// 创建一个已完成的 Promise
static resolve(value) {
  return new MyPromise(resolve => resolve(value));
}

// 创建一个已拒绝的 Promise
static reject(reason) {
  return new MyPromise((_, reject) => reject(reason));
}

// 等待所有 Promise 完成
static all(promises) {
  return new MyPromise((resolve, reject) => {
    const results = [];
    promises.forEach((promise, index) => {
      MyPromise.resolve(promise)
        .then(value => {
          results[index] = value;
          if (results.length === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// 返回最先完成的 Promise
static race(promises) {
  return new MyPromise((resolve, reject) => {
    promises.forEach(promise => {
      MyPromise.resolve(promise)
        .then(resolve)
        .catch(reject);
    });
  });
}

// 返回所有 Promise 的状态和结果
static allSettled(promises) {
  return new MyPromise((resolve) => {
    const results = [];
    promises.forEach((promise, index) => {
      MyPromise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
          if (results.length === promises.length) {
            resolve(results);
          }
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
          if (results.length === promises.length) {
            resolve(results);
          }
        });
    });
  });
}
```

### 辅助方法实现

```js
// 错误处理
catch(onRejected) {
  return this.then(null, onRejected);
}

// 无论成功失败都会执行
finally(callback) {
  return this.then(callback, callback);
}
```

## 完整代码

```js
// 手写简版 promise
class MyPromise {
  constructor(fn) {
    this.status = 'pending';
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };
    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason;
          };
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });
    return promise2;
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  finally(callback) {
    return this.then(callback, callback);
  }
  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }
  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const results = [];
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise)
          .then((value) => {
            results[index] = value;
            if (results.length === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      });
    });
  }
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        MyPromise.resolve(promise).then(resolve).catch(reject);
      });
    });
  }
  static allSettled(promises) {
    return new MyPromise((resolve) => {
      const results = [];
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise)
          .then((value) => {
            results[index] = { status: 'fulfilled', value };
            if (results.length === promises.length) {
              resolve(results);
            }
          })
          .catch((reason) => {
            results[index] = { status: 'rejected', reason };
            if (results.length === promises.length) {
              resolve(results);
            }
          });
      });
    });
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  if (x instanceof MyPromise) {
    x.then((value) => {
      resolvePromise(promise2, value, resolve, reject);
    }).catch(reject);
  } else {
    resolve(x);
  }
}
```

## 总结

这个实现涵盖了 Promise 的主要特性：

- Promise 状态管理
- 异步操作处理
- 链式调用
- 错误处理
- 常用静态方法

需要注意的是，这是一个简化版的实现，完整的 Promise/A+ 规范还包括更多的边界情况处理。但这个实现已经可以满足大多数使用场景。
