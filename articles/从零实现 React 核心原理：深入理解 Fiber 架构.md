## 前言

在这篇文章中，我们将通过实现一个简化版的 React 来深入理解 React 的核心工作原理，特别是 Fiber 架构和协调过程。

## 1. React.createElement 和虚拟 DOM

首先，我们实现了最基础的 `createElement` 函数，这是 JSX 转换的核心：

```javascript
const React = {
  createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map((child) => (typeof child === 'object' ? child : React.createTextElement(child))),
      },
    };
  },
};
```

这个函数将 JSX：

```jsx
<div id="1">
  <span>2</span>
</div>
```

转换为虚拟 DOM 对象：

```javascript
{
  type: "div",
  props: {
    id: "1",
    children: [{
      type: "span",
      props: {
        children: [{
          type: "TEXT_ELEMENT",
          props: { nodeValue: "2", children: [] }
        }]
      }
    }]
  }
}
```

## 2. Fiber 架构的实现

### 2.1 什么是 Fiber？

Fiber 是 React 16 引入的新架构，它的核心目标是实现增量渲染：能够将渲染工作分片，并将其分散到多个帧中。

每个 Fiber 节点包含以下关键信息：

```
{
  type, // 节点类型
  props, // 属性
  dom, // 真实 DOM 节点
  parent, // 父 Fiber 节点
  child, // 子 Fiber 节点
  sibling, // 兄弟 Fiber 节点
  alternate, // 上一次渲染的 Fiber 节点
  effectTag; // 标记节点要执行的操作
}
```

### 2.2 工作循环（Work Loop）

实现时间切片的核心是工作循环：

```javascript
function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }
  requestIdleCallback(workLoop);
}
```

这个循环的特点是：

1. 可以被中断（当浏览器需要处理其他任务时）
2. 通过 `requestIdleCallback` 在浏览器空闲时执行
3. 每个工作单元执行完后都会检查剩余时间

## 3. 协调过程（Reconciliation）

协调过程是 React 的核心，它决定如何高效地更新 UI：

```javascript
function reconcileChildren(fiber, elements) {
  let index = 0;
  let oldFiber = fiber.alternate && fiber.alternate.child;
  let prevSibling = null;

  while (index < elements.length || oldFiber !== null) {
    const element = elements[index];
    let newFiber = null;

    // 比较新旧节点
    const sameType = oldFiber && element && oldFiber.type === element.type;

    if (sameType) {
      // 更新节点
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: fiber,
        alternate: oldFiber,
        effectTag: 'UPDATE',
      };
    }
    if (!sameType && element) {
      // 新增节点
      newFiber = createFiber(element, fiber);
      newFiber.effectTag = 'PLACEMENT';
    }
    if (oldFiber && !sameType) {
      // 删除节点
      oldFiber.effectTag = 'DELETION';
      deletions.push(oldFiber);
    }
  }
}
```

协调过程的三种主要操作：

1. 更新：当新旧节点类型相同时
2. 创建：当有新节点时
3. 删除：当旧节点不再需要时

## 4. 提交阶段（Commit Phase）

最后是将变更应用到真实 DOM 的阶段：

```javascript
function commitWork(fiber) {
  if (!fiber) return;

  const domParent = fiber.parent.dom;
  if (fiber.effectTag === 'PLACEMENT') {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === 'UPDATE') {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === 'DELETION') {
    domParent.removeChild(fiber.dom);
  }

  commitWork(fiber.child);
  commitWork(fiber.sibling);
}
```

提交阶段的特点：

1. 是同步执行的，不能被中断
2. 只有在所有工作单元处理完后才会执行
3. 按照深度优先的顺序应用变更

## 5. 总结

这个简化版的实现展示了 React 的核心工作原理：

1. 使用虚拟 DOM 描述 UI
2. 通过 Fiber 架构实现可中断的渲染
3. 通过协调过程高效地计算更新
4. 在提交阶段同步应用这些更新

虽然这个实现省略了很多 React 的特性（如事件系统、Hooks、Context 等），但它展示了 React 最核心的工作原理。理解这些原理对于深入使用 React 和调试复杂问题都很有帮助。

这个实现也展示了现代前端框架是如何解决性能问题的：通过将大量工作分解成小单元，并在浏览器空闲时执行，从而不阻塞主线程，保证了良好的用户体验。
