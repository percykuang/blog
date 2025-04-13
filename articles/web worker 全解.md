@date: 2024-02-16
@tag: [javascript, web worker, 性能优化]

## 前言

在 Web 开发中，JavaScript 是单线程的，这意味着所有任务都在主线程上执行。当遇到计算密集型任务时，可能会导致页面卡顿。Web Worker 提供了在后台线程中运行脚本的能力，让我们可以进行真正的并行处理。

## Web Worker 基础

### 1. 创建 Worker

```javascript
// main.js
const worker = new Worker('worker.js');

// worker.js
self.onmessage = (e) => {
  const result = complexCalculation(e.data);
  self.postMessage(result);
};
```

### 2. 通信机制

```javascript
// 主线程发送消息
worker.postMessage({ type: 'START', payload: data });

// 主线程接收消息
worker.onmessage = (e) => {
  console.log('Received:', e.data);
};

// Worker 中发送消息
self.postMessage({ type: 'RESULT', payload: result });

// Worker 中接收消息
self.onmessage = (e) => {
  console.log('Received in worker:', e.data);
};
```

### 3. 错误处理

```javascript
// 主线程监听错误
worker.onerror = (error) => {
  console.error('Worker error:', error);
};

// Worker 中的错误处理
self.onerror = (error) => {
  console.error('Error in worker:', error);
};
```

## Worker 类型

### 1. Dedicated Worker

最基本的 Worker 类型，一个页面专用。

```javascript
const dedicatedWorker = new Worker('worker.js');
```

### 2. Shared Worker

可以在多个页面间共享的 Worker。

```javascript
const sharedWorker = new SharedWorker('shared-worker.js');
sharedWorker.port.start();
sharedWorker.port.postMessage(data);
```

### 3. Service Worker

主要用于 PWA，可以拦截网络请求和实现缓存。

```javascript
// 注册 Service Worker
navigator.serviceWorker.register('/sw.js').then((registration) => {
  console.log('SW registered');
});
```

## 数据传输

### 1. 基本数据传输

```javascript
// 传输普通数据
worker.postMessage({
  number: 42,
  string: 'Hello',
  array: [1, 2, 3],
});
```

### 2. Transferable Objects

```javascript
// 传输 ArrayBuffer
const buffer = new ArrayBuffer(1024);
worker.postMessage(buffer, [buffer]);

// 传输 ImageBitmap
createImageBitmap(imageBlob).then((bitmap) => {
  worker.postMessage({ image: bitmap }, [bitmap]);
});
```

### 3. SharedArrayBuffer

```javascript
// 共享内存
const sharedBuffer = new SharedArrayBuffer(1024);
worker.postMessage({ buffer: sharedBuffer });
```

## 实际应用场景

### 1. 大数据处理

```javascript
// main.js
const dataWorker = new Worker('data-worker.js');

function processLargeDataset(data) {
  dataWorker.postMessage(data);
}

dataWorker.onmessage = (e) => {
  updateUI(e.data);
};

// data-worker.js
self.onmessage = (e) => {
  const result = e.data.map((item) => complexCalculation(item));
  self.postMessage(result);
};
```

### 2. 图像处理

```javascript
// image-worker.js
self.onmessage = async (e) => {
  const { imageData } = e.data;
  const processed = await applyImageFilters(imageData);
  self.postMessage(processed);
};

// 使用示例
const imageWorker = new Worker('image-worker.js');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const imageData = ctx.getImageData(0, 0, width, height);

imageWorker.postMessage({ imageData });
```

### 3. 实时数据处理

```javascript
// websocket-worker.js
let ws;

self.onmessage = (e) => {
  if (e.data.type === 'connect') {
    ws = new WebSocket(e.data.url);
    ws.onmessage = (event) => {
      const processed = processData(event.data);
      self.postMessage(processed);
    };
  }
};
```

## 性能优化实践

### 1. Worker 池

```javascript
class WorkerPool {
  constructor(size, workerScript) {
    this.workers = [];
    this.queue = [];
    this.activeWorkers = new Map();

    for (let i = 0; i < size; i++) {
      const worker = new Worker(workerScript);
      this.workers.push(worker);
    }
  }

  runTask(data) {
    return new Promise((resolve, reject) => {
      const availableWorker = this.workers.find((w) => !this.activeWorkers.has(w));

      if (availableWorker) {
        this.executeTask(availableWorker, data, resolve);
      } else {
        this.queue.push({ data, resolve });
      }
    });
  }

  executeTask(worker, data, resolve) {
    const handler = (e) => {
      worker.removeEventListener('message', handler);
      this.activeWorkers.delete(worker);
      resolve(e.data);

      if (this.queue.length > 0) {
        const next = this.queue.shift();
        this.executeTask(worker, next.data, next.resolve);
      }
    };

    worker.addEventListener('message', handler);
    this.activeWorkers.set(worker, handler);
    worker.postMessage(data);
  }
}
```

### 2. 任务分片

```javascript
// 大任务分片处理
function splitTask(data, chunkSize) {
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  return chunks;
}

const workerPool = new WorkerPool(4, 'worker.js');
const chunks = splitTask(largeData, 1000);

Promise.all(chunks.map((chunk) => workerPool.runTask(chunk))).then((results) => {
  const finalResult = results.flat();
  updateUI(finalResult);
});
```

## 注意事项与限制

1. **Worker 限制**

- 不能访问 DOM
- 不能使用 window 对象
- 限制使用某些 Web API

2. **内存考虑**

- 合理控制 Worker 数量
- 注意数据传输开销
- 及时终止不需要的 Worker

3. **调试技巧**

```javascript
// Worker 中添加调试信息
self.postMessage({
  type: 'DEBUG',
  payload: {
    memory: performance.memory,
    time: performance.now(),
  },
});
```

## 总结

Web Worker 为 Web 应用提供了强大的多线程能力，适合处理：

1. 计算密集型任务
2. 大数据处理
3. 实时数据处理
4. 图像处理

通过合理使用 Worker，我们可以：

- 提升应用性能
- 优化用户体验
- 实现更复杂的功能

记住要根据实际需求选择合适的 Worker 类型和数据传输方式，同时注意内存管理和性能优化。
