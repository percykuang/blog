@date: 2024-03-02
@tag: [react]

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

## 5. 完整代码

```js
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
  createTextElement(text) {
    return {
      type: 'TEXT_ELEMENT',
      props: { nodeValue: text, children: [] },
    };
  },
};

const vdom = React.createElement('div', { id: '1' }, React.createElement('span', null, '2'));

// <div id="1"><span>2</span></div>
console.log(vdom);

// 完成虚拟DOM转fiber结构和时间切片

let nextUnitOfWork = null; // 下一个工作单元
let wipRoot = null; // 当前正在工作的根节点
let currentRoot = null; // 上一次的根节点
let deletions = null; // 需要删除的节点

function render(element, container) {
  // 初始化fiber结构
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    // 旧的fiber树
    alternate: currentRoot,
  };
  deletions = [];
  nextUnitOfWork = wipRoot;
}

function createDom(fiber) {
  const dom = fiber.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(fiber.type);

  updateDom(dom, {}, fiber.props); // 挂在新的属性

  return dom;
}

function updateDom(dom, prevProps, nextProps) {
  // 旧的属性删除
  Object.keys(prevProps)
    .filter((name) => name !== 'children')
    .forEach((name) => {
      dom[name] = '';
    });
  // 新的属性要添加
  Object.keys(nextProps)
    .filter((name) => name !== 'children')
    .forEach((name) => {
      dom[name] = nextProps[name];
    });
}

function workLoop(deadline) {
  // 是否需要让出时间
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  // 没有工作单元 -> 所有改动都已经完成
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

// 返回值返回下一个工作单元（fiber）
function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  const elements = Array.isArray(fiber.props.children) ? fiber.props.children : [fiber.props.children];
  // 遍历子节点
  reconcileChildren(fiber, elements);

  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      // 返回兄弟节点
      return nextFiber.sibling;
    }
    // 返回父节点
    nextFiber = nextFiber.parent;
  }
  return null;
}

function createFiber(element, parent) {
  return {
    type: element.type,
    props: element.props,
    parent: parent,
    dom: null,
    alternate: null,
    effectTag: null,
    sibling: null,
    child: null,
  };
}

// diff 算法、形成 fiber 树
function reconcileChildren(fiber, elements) {
  let index = 0;
  let oldFiber = fiber.alternate && fiber.alternate.child;
  let prevSibling = null;

  while (index < elements.length || oldFiber !== null) {
    const element = elements[index];
    let newFiber = null;
    // 1、复用
    const sameType = oldFiber && element && oldFiber.type === element.type;
    if (sameType) {
      console.log('复用', element);
      newFiber = {
        // 类型复用
        type: oldFiber.type,
        // 属性可能会变
        props: element.props,
        // 复用dom
        dom: oldFiber.dom,
        parent: fiber,
        alternate: oldFiber,
        // 更新
        effectTag: 'UPDATE',
      };
    }
    // 2、新增
    if (!sameType && element) {
      console.log('新增', element);
      newFiber = createFiber(element, fiber);
      newFiber.effectTag = 'PLACEMENT'; // 新增
    }
    // 3、删除
    if (oldFiber && !sameType) {
      console.log('删除', oldFiber);
      oldFiber.effectTag = 'DELETION';
      deletions.push(oldFiber);
    }
    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }
    prevSibling = newFiber;
    index++;
  }
}

function commitRoot() {
  deletions.forEach(commitWork);
  commitWork(wipRoot.child);
  currentRoot = wipRoot; // 更新旧的fiber树
  wipRoot = null; // 所有的变化都完成了 回归原始状态
}

// 提交工作
function commitWork(fiber) {
  if (!fiber) {
    return;
  }
  const domParent = fiber.parent.dom;
  if (fiber.effectTag === 'PLACEMENT' && fiber.dom !== null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === 'UPDATE' && fiber.dom !== null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === 'DELETION') {
    domParent.removeChild(fiber.dom);
  }
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

// 获取容器元素
const container = document.getElementById('root');

render(React.createElement('div', { id: 1 }, React.createElement('span', null, 'a')), container);

setTimeout(() => {
  render(React.createElement('div', { id: 1 }, React.createElement('p', null, 'b')), container);
}, 2000);
```

## 6. 总结

这个简化版的实现展示了 React 的核心工作原理：

1. 使用虚拟 DOM 描述 UI
2. 通过 Fiber 架构实现可中断的渲染
3. 通过协调过程高效地计算更新
4. 在提交阶段同步应用这些更新

虽然这个实现省略了很多 React 的特性（如事件系统、Hooks、Context 等），但它展示了 React 最核心的工作原理。理解这些原理对于深入使用 React 和调试复杂问题都很有帮助。

这个实现也展示了现代前端框架是如何解决性能问题的：通过将大量工作分解成小单元，并在浏览器空闲时执行，从而不阻塞主线程，保证了良好的用户体验。
