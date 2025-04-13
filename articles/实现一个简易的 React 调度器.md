@date: 2024-03-05
@tag: [react]

## 前言

React 16 引入了全新的调度系统（Scheduler），通过时间分片的方式来处理任务，避免长时间占用主线程。本文将从零实现一个简易版的调度器，帮助理解 React 调度系统的核心原理。

## RequestIdleCallback

功能：在浏览器的空闲时段内调用传入的回调函数，通常是在一帧（16.6ms）渲染完成后的剩余时间执行，以避免阻塞主线程上的重要工作（如动画和用户交互）。

### 使用示例

```javascript
requestIdleCallback((deadline) => {
  // deadline.timeRemaining() 获取当前帧的剩余时间
  // deadline.didTimeout 是否超时
  while (deadline.timeRemaining() > 0) {
    // 执行任务
  }
});
```

## MessageChannel

功能：设计之初是用于提供了一个双向通信的管道，通过其两个端口（port1 和 port2）实现异步消息传递，可用于在不同的上下文间进行通信。在 react 实现中用于替代 requestIdleCallback。

### 为什么选择 MessageChannel

1. 更好的兼容性

相比于 requestIdleCallback 有更好的兼容性

2. 更精确的时间控制

- setTimeout 和 setInterval 有最小延迟时间（约 4ms）
- 在后台标签页时，setTimeout 的最小延迟会被限制到 1000ms
- MessageChannel 没有这些限制，可以更精确地控制任务执行时机

```js
// requestIdleCallback 依赖浏览器的空闲时间，不够灵活
requestIdleCallback((deadline) => {
  // 只能在浏览器认为空闲的时候执行
  while (deadline.timeRemaining() > 0) {
    // 执行任务
  }
});

// MessageChannel 可以自己控制时间切片
const channel = new MessageChannel();
channel.port1.onmessage = () => {
  const startTime = performance.now();
  while (performance.now() - startTime < 5) {
    // 可以精确控制执行时间
    performUnitOfWork();
  }
};
```

3. 更好的性能

MessageChannel 的消息通道机制比 setTimeout 更轻量，开销更小

4. 优先级更高

宏任务执行时机比 setTimout 优先级更高，可以更快触发

5. 更稳定的行为

- setTimeout 在不同浏览器中的行为可能不一致
- setTimeout 在系统繁忙时可能会被延迟更长时间
- MessageChannel 的行为更加可预测和稳定

### 使用示例

```javascript
const channel = new MessageChannel();
const port = channel.port2;

channel.port1.onmessage = () => {
  // 处理任务
};

// 发送消息触发任务
port.postMessage(null);
```

## Scheduler 核心实现

```js
const ImmediatePriority = 1; // 立即执行，点击事件
const UserBlockingPriority = 2; // 用户阻塞，数据请求
const NormalPriority = 3; // 正常，数据渲染
const LowPriority = 4; // 低，数据更新
const IdlePriority = 5; // 空闲，数据预加载

function getCurrentTime() {
  return performance.now(); // 精确到微秒，更加精确
}

class SimpleScheduler {
  constructor() {
    this.taskQueue = [];
    // 是否正在执行任务，防止任务多次执行
    this.isPerformingTasks = false;
    const channel = new MessageChannel();
    this.port = channel.port2;
    channel.port1.onmessage = this.performWorkUnitDeaLine.bind(this);
  }

  performWorkUnitDeaLine() {
    this.isPerformingTasks = true;
    this.workLoop();
    this.isPerformingTasks = false;
  }

  scheduleCallback(priorityLevel, callback) {
    const currentTime = getCurrentTime();
    let timeout;
    switch (priorityLevel) {
      case ImmediatePriority:
        timeout = -1;
        break;
      case NormalPriority:
        timeout = 5000;
        break;
      case UserBlockingPriority:
        timeout = 250;
        break;
      case LowPriority:
        timeout = 10000;
        break;
      case IdlePriority:
        timeout = 1073741823;
        break;
      default:
        timeout = 5000;
        break;
    }
    const task = {
      callback,
      priorityLevel,
      expirationTime: currentTime + timeout,
    };
    this.push(this.taskQueue, task);
    if (!this.isPerformingTasks) {
      this.isPerformingTasks = true;
      this.port.postMessage(null);
    }
  }

  workLoop() {
    let currentTask = this.peak(this.taskQueue);

    while (currentTask) {
      let cb = currentTask.callback;
      cb?.();
      this.pop(this.taskQueue);
      currentTask = this.peak(this.taskQueue);
    }
  }

  push(queue, task) {
    queue.push(task);
    // 优先级排序
    queue.sort((a, b) => a.expirationTime - b.expirationTime);
  }
  peak(queue) {
    return queue[0] || null;
  }
  pop(queue) {
    return queue.shift();
  }
}

const s = new SimpleScheduler();

// 代码可以乱写，但是执行顺序是固定的

s.scheduleCallback(NormalPriority, () => {
  console.log('2');
});

s.scheduleCallback(UserBlockingPriority, () => {
  console.log('1');
});

s.scheduleCallback(IdlePriority, () => {
  console.log('5');
});

s.scheduleCallback(NormalPriority, () => {
  console.log('3');
});

// 输出：1 2 3 5
```

## 总结

通过实现这个简易的调度器，我们了解了：

1. React 调度系统的核心原理
2. 时间分片的实现方式
3. 任务优先级的管理方法
4. 异步调度的具体实现

虽然这是一个简化版本，但包含了 React Scheduler 的核心概念，有助于深入理解 React 的调度机制。

## 补充

React 19 可能计划改变调度器的实现方式，主要是使用浏览器新的 API：Scheduler Postask API。

这个改变的原因是：

1. 新的 Scheduler Postask API 更适合调度任务

```js
// 新的 Scheduler API
window.scheduler.postTask(
  () => {
    // 执行任务
  },
  { priority: 'user-visible' }
);
```

2. 相比 MessageChannel 的优势

- 是专门为任务调度设计的 API
- 提供了原生的优先级控制
- 更好的性能和可靠性
- 与浏览器更好的集成

3. React 团队的考虑

- 更好地利用浏览器的能力
- 简化调度器的实现
- 提供更好的性能

不过需要注意：

- 这个改变还在计划中
- 需要等待浏览器的广泛支持
- 可能会提供降级方案
