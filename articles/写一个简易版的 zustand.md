@date: 2023-08-11
@tag: [react,zustand,状态管理]

## 前言

工作中的状态管理从一开始的`rematch`切换到了`zustand`，相比于`rematch`，`zustand`更加的简单易用体积小，且使业务中少写了很多模板代码。因此抱着学习的态度来研究一下它的底层实现。

## 基本使用

根据官方文档给出的基本示例：

1.首先通过`create`来创建我们的全局状态

```js
import { create } from 'zustand';

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
```

2.将状态绑定到需要的组件中

```js
// 展示 bears 数值
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

// 点击按钮，增加 bears 数值
function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
```

以上便是 zustand 的基本使用了，这个场景其实已经涵盖了百分之八十的业务场景了，业务中无非也就是创建状态，然后去消费、设置状态。

## zustand 的本质

通过[阅读源码](https://github.com/pmndrs/zustand/tree/main/src)可以发现，其实`zustand`的本质是通过闭包去实现全局状态的管理。

这种实现方式的优点是：

- 状态被完全封装，外部无法直接访问和修改
- 通过闭包提供的访问控制，我们可以精确控制状态的更新方式
- 不需要像 Redux 那样维护一个全局的 store 对象
- 实现简单且高效，因为状态更新直接发生在闭包内部

## 写一个简化版本的 zustand

根据对源码核心原理的理解，我们可以写一个简化版本的`zustand`，代码如下：

```js
// 创建 store 的函数
function create(createState) {
  let state;
  const listeners = new Set();

  // 设置状态并通知所有监听器
  const setState = (partial) => {
    const nextState = typeof partial === 'function' ? partial(state) : partial;
    if (nextState !== state) {
      state = Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state));
    }
  };

  // 获取当前状态
  const getState = () => state;

  // 订阅状态变化
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  // 初始化状态
  const api = { setState, getState, subscribe };
  state = createState(setState, getState, api);

  const useStore = (selector = (state) => state) => {
    const [, forceUpdate] = React.useReducer((c) => c + 1, 0);
    const currentState = React.useRef(state);

    React.useEffect(() => {
      const listener = () => {
        const nextState = selector(state);
        if (nextState !== currentState.current) {
          currentState.current = nextState;
          forceUpdate();
        }
      };
      // 订阅视图更新监听器
      const destory = subscribe(listener);
      // 销毁视图更新监听器
      return destory;
    }, [selector]);

    return selector(state);
  };

  // 将 store 的方法挂载到 useStore 上
  Object.assign(useStore, {
    getState,
    setState,
    subscribe,
  });

  return useStore;
}
```

## useSyncExternalStore

`useSyncExternalStore` 是 React 18 引入的一个专门用于订阅外部数据源的 Hook

在`zustand`的最新版本中可以看到它是使用`useSyncExternalStore`去做视图更新的，它这么做主要是基于以下原因：

并发模式支持：

- 在 React 18 的并发模式下，useEffect 可能会被延迟执行，这可能导致状态更新不及时
- useSyncExternalStore 能确保在并发模式下状态更新是同步的，避免出现状态不一致的问题

性能优化：

- useSyncExternalStore 内部实现了更高效的订阅机制
- 它能够避免不必要的重渲染，只在状态真正变化时才触发更新

SSR 支持：

- useSyncExternalStore 对服务端渲染（SSR）有更好的支持
- 它能够正确处理服务端和客户端的状态同步

因此我们可以优化一下我们的代码：

```js
// 创建 store 的函数
function create(createState) {
  let state;
  const listeners = new Set();

  // 设置状态并通知所有监听器
  const setState = (partial) => {
    const nextState = typeof partial === 'function' ? partial(state) : partial;
    if (nextState !== state) {
      state = Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state));
    }
  };

  // 获取当前状态
  const getState = () => state;

  // 订阅状态变化
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  // 初始化状态
  const api = { setState, getState, subscribe };
  state = createState(setState, getState, api);

  // 使用 useSyncExternalStore 替代 useReducer 和 useEffect
  const useStore = (selector = (state) => state) => {
    return React.useSyncExternalStore(
      subscribe,
      () => selector(state),
      () => selector(state)
    );
  };

  // 将 store 的方法挂载到 useStore 上
  Object.assign(useStore, {
    getState,
    setState,
    subscribe,
  });

  return useStore;
}
```

解释一下 useSyncExternalStore 的三个参数：

- subscribe: 订阅函数，当外部数据源发生变化时会被调用
- getSnapshot: 获取当前状态的函数
- getServerSnapshot: 在服务端渲染时获取状态的函数（这里我们使用相同的函数）
