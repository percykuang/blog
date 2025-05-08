@date: 2024-09-06
@tag: [react]

# React Hooks 完全指南：从入门到精通

React Hooks 是 React 16.8 版本引入的特性，它让我们可以在不编写 class 组件的情况下使用状态和其他 React 特性。Hooks 的出现彻底改变了 React 的开发模式，使代码更简洁、更易于理解和测试。本文将全面解析 React 内置的各种 Hooks，包括它们的用法、应用场景以及最佳实践。

## 1. useState - 状态管理的基础

`useState` 是最基础的 Hook，它让函数组件能够拥有自己的状态。

### 基本用法

```jsx
import React, { useState } from 'react';

function Counter() {
  // 声明一个叫 count 的 state 变量，初始值为 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>点击我</button>
    </div>
  );
}
```

### 函数式更新

当新的状态需要基于之前的状态计算得出时，可以使用函数式更新：

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>你点击了 {count} 次</p>
      {/* 使用函数式更新，确保使用的是最新的状态值 */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>点击我</button>
    </div>
  );
}
```

### 使用对象或数组作为状态

当状态是对象或数组时，需要注意不能直接修改状态，而是要创建新的对象或数组：

```jsx
function UserForm() {
  const [user, setUser] = useState({ name: '', age: 0 });

  const handleNameChange = (e) => {
    // 创建新对象，保留其他字段不变
    setUser({ ...user, name: e.target.value });
  };

  return (
    <form>
      <input value={user.name} onChange={handleNameChange} placeholder="姓名" />
      {/* 其他表单元素 */}
    </form>
  );
}
```

### 惰性初始化

如果初始状态需要通过复杂计算获得，可以传入一个函数来惰性初始化状态：

```jsx
function ExpensiveInitialState() {
  // 这个函数只会在组件首次渲染时执行一次
  const [state, setState] = useState(() => {
    const initialState = performExpensiveCalculation();
    return initialState;
  });

  // 组件其余部分
}
```

### 应用场景

- 表单控件状态管理
- 切换组件可见性
- 计数器、定时器状态
- 用户输入处理
- 简单的组件本地状态管理

## 2. useEffect - 处理副作用

`useEffect` 让你在函数组件中执行副作用操作，如数据获取、订阅、手动修改 DOM 等。

### 基本用法

```jsx
import React, { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 类似于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    // 更新文档标题
    document.title = `你点击了 ${count} 次`;
  });

  return (
    <div>
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>点击我</button>
    </div>
  );
}
```

### 依赖数组

通过提供依赖数组，可以控制 effect 的执行时机：

```jsx
// 仅在 count 变化时执行
useEffect(() => {
  document.title = `你点击了 ${count} 次`;
}, [count]);

// 仅在组件挂载时执行一次
useEffect(() => {
  console.log('组件已挂载');
}, []);
```

### 清除副作用

有些副作用需要清除，比如订阅或定时器，可以通过返回一个函数来实现：

```jsx
useEffect(() => {
  // 设置订阅
  const subscription = dataSource.subscribe();

  // 清除副作用
  return () => {
    subscription.unsubscribe();
  };
}, [dataSource]); // 仅在 dataSource 变化时重新订阅
```

### 异步数据获取

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 重置状态
    setLoading(true);
    setError(null);

    // 定义异步函数
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error('获取用户数据失败');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // 仅在 userId 变化时重新获取

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>邮箱: {user.email}</p>
    </div>
  );
}
```

### 应用场景

- 数据获取
- 订阅外部数据源
- 手动 DOM 操作
- 记录日志
- 定时器和间隔器
- 与第三方库集成

## 3. useContext - 跨组件共享数据

`useContext` 让你可以订阅 React 的 Context，而不必使用嵌套的 Consumer 组件。

### 基本用法

```jsx
import React, { createContext, useContext, useState } from 'react';

// 创建一个 Context
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <ThemedButton />
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切换主题</button>
      </div>
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  // 使用 useContext 获取当前主题
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
      我是一个主题按钮
    </button>
  );
}
```

### 避免不必要的重渲染

当 Context 值变化时，所有使用该 Context 的组件都会重新渲染。为了避免不必要的重渲染，可以：

1. 拆分 Context
2. 使用 `useMemo` 记忆化 Context 值

```jsx
function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: '张三' });

  // 使用 useMemo 记忆化 Context 值
  const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme]);
  const userContextValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <UserContext.Provider value={userContextValue}>
        <MainContent />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
```

### 应用场景

- 主题切换
- 用户认证状态
- 语言偏好设置
- 全局状态管理
- 路由参数共享

## 4. useReducer - 复杂状态管理

`useReducer` 是 `useState` 的替代方案，适用于复杂的状态逻辑，特别是当下一个状态依赖于之前的状态时。

### 基本用法

```jsx
import React, { useReducer } from 'react';

// 定义 reducer 函数
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error(`未知的 action 类型: ${action.type}`);
  }
}

function Counter() {
  // 使用 useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>计数: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>增加</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>减少</button>
      <button onClick={() => dispatch({ type: 'reset' })}>重置</button>
    </div>
  );
}
```

### 惰性初始化

与 `useState` 类似，`useReducer` 也支持惰性初始化：

```jsx
function init(initialCount) {
  return { count: initialCount };
}

function Counter({ initialCount = 0 }) {
  const [state, dispatch] = useReducer(counterReducer, initialCount, init);

  // 组件其余部分
}
```

### 结合 Context 进行全局状态管理

```jsx
import React, { createContext, useContext, useReducer } from 'react';

// 创建 Context
const TodoContext = createContext();

// 定义 reducer
function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'toggle':
      return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    case 'delete':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

// 创建 Provider 组件
function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return <TodoContext.Provider value={{ todos, dispatch }}>{children}</TodoContext.Provider>;
}

// 使用 Context
function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: 'toggle', id: todo.id })} />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
          <button onClick={() => dispatch({ type: 'delete', id: todo.id })}>删除</button>
        </li>
      ))}
    </ul>
  );
}
```

### 应用场景

- 复杂的表单状态管理
- 多步骤流程控制
- 购物车功能
- 游戏状态管理
- 全局状态管理（结合 Context）

## 5. useCallback - 记忆化回调函数

`useCallback` 返回一个记忆化的回调函数，只有当依赖项变化时，该回调函数才会更新。

### 基本用法

```jsx
import React, { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // 只有当 count 变化时，handleClick 才会更新
  const handleClick = useCallback(() => {
    console.log(`当前计数: ${count}`);
  }, [count]);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>增加计数</button>
      <button onClick={() => setOtherState(otherState + 1)}>更新其他状态</button>
    </div>
  );
}

// 使用 React.memo 包装子组件，只有当 props 变化时才重新渲染
const ChildComponent = React.memo(function ChildComponent({ onClick }) {
  console.log('子组件渲染');
  return <button onClick={onClick}>点击我</button>;
});
```

### 与 useEffect 结合使用

```jsx
function SearchComponent({ query }) {
  const [results, setResults] = useState([]);

  // 记忆化搜索函数
  const fetchResults = useCallback(async () => {
    const response = await fetch(`/api/search?q=${query}`);
    const data = await response.json();
    setResults(data);
  }, [query]);

  // 当 query 或 fetchResults 变化时执行搜索
  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  // 组件其余部分
}
```

### 应用场景

- 传递回调给子组件时避免不必要的重渲染
- 在依赖项列表中使用的函数
- 事件处理函数
- 防抖和节流函数的依赖
- API 调用函数

## 6. useMemo - 记忆化计算结果

`useMemo` 返回一个记忆化的值，只有当依赖项变化时，才会重新计算该值。

### 基本用法

```jsx
import React, { useMemo, useState } from 'react';

function ExpensiveCalculation({ list, filter }) {
  // 只有当 list 或 filter 变化时，才会重新计算
  const filteredList = useMemo(() => {
    console.log('执行昂贵的计算...');
    return list.filter((item) => item.includes(filter));
  }, [list, filter]);

  return (
    <ul>
      {filteredList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
```

### 避免不必要的重渲染

```jsx
function ParentComponent() {
  const [count, setCount] = useState(0);

  // 使用 useMemo 记忆化对象
  const userObject = useMemo(() => {
    return { name: 'Alice', age: 25 };
  }, []); // 空依赖数组，只计算一次

  return (
    <div>
      <ChildComponent user={userObject} />
      <button onClick={() => setCount(count + 1)}>增加计数: {count}</button>
    </div>
  );
}

// 使用 React.memo 包装子组件
const ChildComponent = React.memo(function ChildComponent({ user }) {
  console.log('子组件渲染');
  return (
    <div>
      {user.name}, {user.age}
    </div>
  );
});
```

### 与 useCallback 的区别

- `useMemo` 记忆化计算结果（值）
- `useCallback` 记忆化函数本身

```jsx
// 记忆化函数
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// 等价于
const memoizedCallback = useMemo(() => {
  return () => doSomething(a, b);
}, [a, b]);
```

### 应用场景

- 昂贵的计算（排序、过滤、转换大型数据集）
- 避免子组件不必要的重渲染
- 记忆化对象和数组引用
- 复杂的数据处理和格式化
- 依赖项计算

## 7. useRef - 引用 DOM 和保存变量

`useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数。返回的对象在组件的整个生命周期内保持不变。

### 引用 DOM 元素

```jsx
import React, { useEffect, useRef } from 'react';

function TextInputWithFocusButton() {
  // 创建 ref
  const inputRef = useRef(null);

  // 点击按钮时聚焦输入框
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>聚焦输入框</button>
    </div>
  );
}
```

### 保存变量（不触发重渲染）

```jsx
function Timer() {
  const [count, setCount] = useState(0);

  // 使用 ref 保存定时器 ID
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return; // 避免多次启动

    timerRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  // 组件卸载时清除定时器
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={startTimer}>开始</button>
      <button onClick={stopTimer}>停止</button>
    </div>
  );
}
```

### 保存前一个值

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  // 使用 ref 保存前一个值
  const prevCountRef = useRef();

  useEffect(() => {
    // 在渲染后更新 ref
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>
        当前值: {count}, 前一个值: {prevCount !== undefined ? prevCount : '无'}
      </p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
```

### 应用场景

- 访问 DOM 元素
- 保存定时器或订阅的 ID
- 保存前一个 props 或 state
- 存储不需要触发重渲染的值
- 实现命令式动画

## 8. useImperativeHandle - 自定义暴露给父组件的实例值

`useImperativeHandle` 可以让你在使用 `ref` 时自定义暴露给父组件的实例值。

### 基本用法

```jsx
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

// 使用 forwardRef 包装组件
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // 自定义暴露给父组件的实例值
  useImperativeHandle(ref, () => ({
    // 只暴露需要的方法
    focus: () => {
      inputRef.current.focus();
    },
    // 自定义方法
    clear: () => {
      inputRef.current.value = '';
    },
  }));

  return <input ref={inputRef} />;
});

function Parent() {
  const fancyInputRef = useRef();

  const handleClick = () => {
    // 可以调用子组件暴露的方法
    fancyInputRef.current.focus();
  };

  const handleClear = () => {
    fancyInputRef.current.clear();
  };

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button onClick={handleClick}>聚焦输入框</button>
      <button onClick={handleClear}>清空输入框</button>
    </div>
  );
}
```

### 应用场景

- 自定义组件的命令式 API
- 限制父组件对子组件 DOM 的访问
- 实现复杂的表单控件
- 封装第三方库的命令式接口
- 实现自定义动画控制

## 9. useLayoutEffect - 同步执行副作用

`useLayoutEffect` 与 `useEffect` 的函数签名完全相同，但它会在所有 DOM 变更之后同步调用，并且会阻塞浏览器渲染。

### 基本用法

```jsx
import React, { useLayoutEffect, useRef, useState } from 'react';

function Tooltip() {
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const tooltipRef = useRef();

  // 在 DOM 更新后同步测量高度
  useLayoutEffect(() => {
    const height = tooltipRef.current.getBoundingClientRect().height;
    setTooltipHeight(height);

    // 根据高度调整位置，避免闪烁
    tooltipRef.current.style.top = `-${height}px`;
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div
        ref={tooltipRef}
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          color: 'white',
          padding: '5px',
          borderRadius: '3px',
        }}
      >
        这是一个工具提示
      </div>
      <button>悬停查看提示</button>
    </div>
  );
}
```

### 与 useEffect 的区别

- `useEffect` 在浏览器绘制之后异步执行，不会阻塞渲染
- `useLayoutEffect` 在 DOM 更新之后、浏览器绘制之前同步执行，会阻塞渲染
- 大多数情况下应该使用 `useEffect`，只有当需要在浏览器绘制前进行 DOM 测量或修改时才使用 `useLayoutEffect`

### 应用场景

- 需要在渲染前测量 DOM 元素
- 避免闪烁或布局跳动
- 动画的初始化
- 依赖于 DOM 布局的计算
- 需要立即响应 DOM 变化的场景

## 10. useDebugValue - 开发者工具中显示自定义 Hook 标签

`useDebugValue` 可用于在 React 开发者工具中显示自定义 Hook 的标签。

### 基本用法

```jsx
import React, { useDebugValue, useEffect, useState } from 'react';

// 自定义 Hook
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 在 React 开发者工具中显示状态
  useDebugValue(isOnline ? '在线' : '离线');

  return isOnline;
}

function StatusIndicator() {
  const isOnline = useOnlineStatus();

  return <div>您当前是 {isOnline ? '在线' : '离线'} 状态</div>;
}
```

### 延迟格式化调试值

对于可能需要昂贵格式化操作的调试值，可以传递一个格式化函数作为第二个参数：

```jsx
function useCustomHook(data) {
  // ...

  // 只有在开发者工具检查 Hook 时才会调用格式化函数
  useDebugValue(data, (data) => formatDataForDebug(data));

  // ...
}
```

### 应用场景

- 开发自定义 Hooks 时提供调试信息
- 在团队协作中帮助其他开发者理解 Hook 的状态
- 复杂状态的可视化
- 开发和调试过程中的状态监控

## 11. useSyncExternalStore - 订阅外部数据源

`useSyncExternalStore` 是 React 18 引入的新 Hook，用于订阅外部数据源，确保在并发渲染特性下外部状态的一致性。

### 基本用法

```jsx
import React, { useSyncExternalStore } from 'react';

function useWindowWidth() {
  // 订阅窗口宽度变化
  const windowWidth = useSyncExternalStore(
    // 订阅函数
    (callback) => {
      window.addEventListener('resize', callback);
      return () => window.removeEventListener('resize', callback);
    },
    // 获取当前状态的函数
    () => window.innerWidth,
    // 服务器端渲染时使用的状态（可选）
    () => 1024
  );

  return windowWidth;
}

function WindowSizeComponent() {
  const width = useWindowWidth();

  return <div>窗口宽度: {width}px</div>;
}
```

### 与第三方状态管理库集成

```jsx
import { useSyncExternalStore } from 'react';

import { createStore } from 'redux';

// 创建 Redux store
const store = createStore(reducer);

// 自定义 Hook 连接 Redux
function useSelector(selector) {
  return useSyncExternalStore(
    // 订阅 store 变化
    (callback) => {
      const unsubscribe = store.subscribe(callback);
      return unsubscribe;
    },
    // 从 store 获取当前状态
    () => selector(store.getState())
  );
}

function Counter() {
  // 使用自定义 Hook 获取 Redux 状态
  const count = useSelector((state) => state.count);

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>增加</button>
    </div>
  );
}
```

### 应用场景

- 订阅浏览器 API（如窗口大小、网络状态）
- 集成第三方状态管理库（Redux、MobX 等）
- 订阅 WebSocket 或其他实时数据源
- 处理需要在并发渲染中保持一致性的外部状态
- 自定义事件系统

<a id="useTransition"></a>

## 12. useTransition - 非阻塞状态更新

`useTransition` 允许将状态更新标记为非紧急的，这样其他更新可以先完成，避免界面卡顿。

### 基本用法

```jsx
import React, { useState, useTransition } from 'react';

function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // 立即更新输入框（高优先级）
    setQuery(e.target.value);

    // 将搜索结果更新标记为低优先级
    startTransition(() => {
      // 假设这是一个耗时的操作
      const searchResults = performExpensiveSearch(e.target.value);
      setResults(searchResults);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />

      {/* 显示加载状态 */}
      {isPending && <div>加载中...</div>}

      {/* 显示结果 */}
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### 与 Suspense 结合使用

```jsx
function TabContainer() {
  const [tab, setTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <div>
      <TabButton isActive={tab === 'home'} onClick={() => selectTab('home')}>
        首页
      </TabButton>
      <TabButton isActive={tab === 'posts'} onClick={() => selectTab('posts')}>
        文章
      </TabButton>
      <TabButton isActive={tab === 'contact'} onClick={() => selectTab('contact')}>
        联系我们
      </TabButton>

      {/* 显示加载指示器 */}
      {isPending && <div className="loading-indicator">切换中...</div>}

      {/* 内容区域 */}
      <div className="tab-content">
        <Suspense fallback={<Spinner />}>
          {tab === 'home' && <HomeTab />}
          {tab === 'posts' && <PostsTab />}
          {tab === 'contact' && <ContactTab />}
        </Suspense>
      </div>
    </div>
  );
}
```

### 应用场景

- 输入框实时搜索和过滤
- 标签页切换
- 大型列表或表格的更新
- 复杂表单的状态更新
- 需要保持 UI 响应性的任何场景

<a id="useDeferredValue"></a>

## 13. useDeferredValue - 延迟更新低优先级内容

`useDeferredValue` 接收一个值，并返回该值的延迟版本。在紧急更新期间，它会保留旧值，然后在后台更新。

### 基本用法

```jsx
import React, { useDeferredValue, useState } from 'react';

function SearchResults() {
  const [query, setQuery] = useState('');

  // 创建查询的延迟版本
  const deferredQuery = useDeferredValue(query);

  // 检查是否正在使用旧值
  const isStale = query !== deferredQuery;

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />

      <div style={{ opacity: isStale ? 0.8 : 1 }}>
        {/* 使用延迟值渲染结果列表 */}
        <ResultsList query={deferredQuery} />
      </div>
    </div>
  );
}

// 假设这是一个渲染开销很大的组件
function ResultsList({ query }) {
  // 模拟耗时的渲染过程
  const results = computeExpensiveResults(query);

  return (
    <ul>
      {results.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

### 与 memo 结合使用

```jsx
// 使用 memo 包装开销大的组件
const MemoizedResultsList = React.memo(ResultsList);

function SearchApp() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />

      {/* 只有当 deferredQuery 变化时才会重新渲染 */}
      <MemoizedResultsList query={deferredQuery} />
    </div>
  );
}
```

### 与 useTransition 的区别

- `useTransition` 用于将状态更新标记为低优先级
- `useDeferredValue` 用于将派生值标记为低优先级
- 两者都用于提高应用的响应性，但适用场景略有不同

### 应用场景

- 实时搜索和过滤
- 大型列表或表格的渲染
- 文本编辑器的实时预览
- 图表和可视化的更新
- 任何需要延迟渲染的场景

<a id="useId"></a>

## 14. useId - 生成唯一ID

`useId` 是 React 18 引入的新 Hook，用于生成稳定、唯一的 ID，特别适用于可访问性属性。

### 基本用法

```jsx
import React, { useId } from 'react';

function FormField() {
  // 生成唯一 ID
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>邮箱</label>
      <input id={id} type="email" />
    </div>
  );
}
```

### 生成多个相关 ID

```jsx
function ComplexForm() {
  // 生成基础 ID
  const baseId = useId();

  // 派生多个相关 ID
  const nameId = `${baseId}-name`;
  const emailId = `${baseId}-email`;
  const passwordId = `${baseId}-password`;

  return (
    <form>
      <div>
        <label htmlFor={nameId}>姓名</label>
        <input id={nameId} type="text" />
      </div>

      <div>
        <label htmlFor={emailId}>邮箱</label>
        <input id={emailId} type="email" />
      </div>

      <div>
        <label htmlFor={passwordId}>密码</label>
        <input id={passwordId} type="password" />
      </div>
    </form>
  );
}
```

### 与 ARIA 属性结合使用

```jsx
function Accordion() {
  const headingId = useId();
  const panelId = useId();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h3>
        <button
          aria-expanded={isExpanded}
          aria-controls={panelId}
          id={headingId}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          常见问题
        </button>
      </h3>

      <div id={panelId} aria-labelledby={headingId} role="region" hidden={!isExpanded}>
        这里是常见问题的内容...
      </div>
    </div>
  );
}
```

### 应用场景

- 表单标签和输入框的关联
- ARIA 属性（如 aria-labelledby、aria-controls）
- 生成唯一的 DOM ID
- 客户端和服务器端渲染的一致性
- 组件库开发

<a id="useInsertionEffect"></a>

## 15. useInsertionEffect - CSS-in-JS 库的样式注入

`useInsertionEffect` 是 React 18 引入的新 Hook，专为 CSS-in-JS 库设计，用于在 DOM 变更之前注入样式，避免布局抖动。

### 基本用法

```jsx
import React, { useInsertionEffect } from 'react';

// 这是一个简化的 CSS-in-JS 库示例
function useCssInJs(rule) {
  useInsertionEffect(() => {
    // 在 DOM 变更之前注入样式
    const style = document.createElement('style');
    style.textContent = rule;
    document.head.appendChild(style);

    return () => {
      // 清理样式
      document.head.removeChild(style);
    };
  }, [rule]);
}

function StyledComponent() {
  // 使用自定义 Hook 注入 CSS
  useCssInJs(`
    .styled-button {
      background-color: #3370ff;
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }

    .styled-button:hover {
      background-color: #2350cc;
    }
  `);

  return <button className="styled-button">样式化按钮</button>;
}
```

### 与其他 Effect Hooks 的区别

`useInsertionEffect` 的执行时机比 `useLayoutEffect` 更早，比 `useEffect` 更早：

1. `useInsertionEffect`: DOM 变更之前执行
2. `useLayoutEffect`: DOM 变更之后、浏览器绘制之前执行
3. `useEffect`: DOM 变更之后、浏览器绘制之后执行

### 注意事项

- 这个 Hook 主要面向 CSS-in-JS 库的作者，而不是普通应用开发者
- 在 `useInsertionEffect` 内部无法访问 refs，因为 DOM 还没有更新
- 不应该在这个 Hook 中更新状态，因为它会在所有 DOM 变更之前运行

### 应用场景

- CSS-in-JS 库的实现（如 styled-components、emotion）
- 动态样式注入
- 避免样式注入导致的布局抖动
- 性能优化，特别是在并发渲染模式下

<a id="useOptimistic"></a>

## 16. useOptimistic - 乐观 UI 更新

`useOptimistic` 是 React 的实验性 Hook，用于实现乐观更新，即在服务器响应之前立即更新 UI，提升用户体验。

### 基本用法

```jsx
import React, { useOptimistic, useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '学习 React', completed: false },
    { id: 2, text: '学习 Hooks', completed: false },
  ]);

  // 使用 useOptimistic 创建乐观状态
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, (currentTodos, newTodo) => [
    ...currentTodos,
    newTodo,
  ]);

  const addTodo = async (text) => {
    // 创建新待办事项对象
    const newTodo = { id: Date.now(), text, completed: false };

    // 乐观地更新 UI
    addOptimisticTodo(newTodo);

    try {
      // 发送请求到服务器
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) throw new Error('添加待办事项失败');

      // 服务器响应成功后，更新实际状态
      const savedTodo = await response.json();
      setTodos([...todos, savedTodo]);
    } catch (error) {
      // 处理错误，可能需要回滚乐观更新
      console.error(error);
      // 这里可以显示错误通知
    }
  };

  return (
    <div>
      <h2>待办事项列表</h2>
      <ul>
        {optimisticTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => addTodo('新待办事项')}>添加待办事项</button>
    </div>
  );
}
```

### 与表单提交结合使用

```jsx
function CommentForm({ postId }) {
  const [comments, setComments] = useState([]);
  const [optimisticComments, addOptimisticComment] = useOptimistic(comments, (currentComments, newComment) => [
    ...currentComments,
    newComment,
  ]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commentText = formData.get('comment');

    // 创建乐观评论
    const optimisticComment = {
      id: `temp-${Date.now()}`,
      text: commentText,
      author: '当前用户',
      createdAt: new Date().toISOString(),
      pending: true,
    };

    // 乐观更新 UI
    addOptimisticComment(optimisticComment);

    // 重置表单
    event.target.reset();

    try {
      // 发送到服务器
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('提交评论失败');

      // 获取实际保存的评论
      const savedComment = await response.json();
      setComments([...comments, savedComment]);
    } catch (error) {
      console.error(error);
      // 显示错误通知
    }
  };

  return (
    <div>
      <h3>评论</h3>
      <ul className="comments-list">
        {optimisticComments.map((comment) => (
          <li key={comment.id} className={comment.pending ? 'pending' : ''}>
            <strong>{comment.author}</strong>: {comment.text}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <textarea name="comment" required placeholder="写下你的评论..." />
        <button type="submit">提交评论</button>
      </form>
    </div>
  );
}
```

### 应用场景

- 社交媒体的点赞、评论功能
- 表单提交后的即时反馈
- 购物车添加/删除商品
- 任务管理应用中的任务状态更新
- 任何需要提高感知性能的用户交互

<a id="useActionState"></a>

## 17. useActionState - 处理异步操作状态

`useActionState` 是 React 的实验性 Hook，用于处理异步操作的状态管理，简化加载、错误和成功状态的处理。

### 基本用法

```jsx
import React, { useActionState } from 'react';

function UserProfile({ userId }) {
  // 定义异步操作函数
  async function fetchUserData(prevState, userId) {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) throw new Error('获取用户数据失败');
    return await response.json();
  }

  // 使用 useActionState 管理异步操作状态
  const [userData, dispatch, { status, error }] = useActionState(fetchUserData, null);

  // 组件挂载时获取用户数据
  React.useEffect(() => {
    dispatch(userId);
  }, [userId, dispatch]);

  // 根据状态渲染不同内容
  if (status === 'pending') {
    return <div>加载中...</div>;
  }

  if (status === 'error') {
    return <div>错误: {error.message}</div>;
  }

  if (!userData) {
    return <div>没有用户数据</div>;
  }

  return (
    <div className="user-profile">
      <h2>{userData.name}</h2>
      <p>邮箱: {userData.email}</p>
      <p>角色: {userData.role}</p>
      <button onClick={() => dispatch(userId)}>刷新</button>
    </div>
  );
}
```

### 表单提交示例

```jsx
function ContactForm() {
  // 定义表单提交函数
  async function submitForm(prevState, formData) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '提交表单失败');
    }

    return { success: true, message: '消息已发送！' };
  }

  // 使用 useActionState 管理表单提交状态
  const [result, submitAction, { status, error }] = useActionState(submitForm, null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    submitAction(formData);
  };

  return (
    <div className="contact-form">
      <h2>联系我们</h2>

      {status === 'success' && <div className="success-message">{result.message}</div>}

      {status === 'error' && <div className="error-message">{error.message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">姓名</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">邮箱</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">消息</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" disabled={status === 'pending'}>
          {status === 'pending' ? '提交中...' : '发送消息'}
        </button>
      </form>
    </div>
  );
}
```

### 与 useOptimistic 结合使用

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);

  // 乐观更新
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, (currentTodos, newTodo) => [
    ...currentTodos,
    newTodo,
  ]);

  // 异步操作状态管理
  async function addTodoAction(prevState, text) {
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, completed: false }),
    });

    if (!response.ok) throw new Error('添加待办事项失败');
    const newTodo = await response.json();

    // 更新实际状态
    setTodos((currentTodos) => [...currentTodos, newTodo]);
    return newTodo;
  }

  const [, addTodo, { status, error }] = useActionState(addTodoAction, null);

  const handleAddTodo = (text) => {
    // 创建乐观待办事项
    const optimisticTodo = {
      id: `temp-${Date.now()}`,
      text,
      completed: false,
      pending: true,
    };

    // 乐观更新 UI
    addOptimisticTodo(optimisticTodo);

    // 执行实际操作
    addTodo(text);
  };

  return (
    <div>
      <h2>待办事项</h2>
      {error && <div className="error">{error.message}</div>}

      <ul>
        {optimisticTodos.map((todo) => (
          <li key={todo.id} className={todo.pending ? 'pending' : ''}>
            {todo.text}
          </li>
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.elements.todo.value;
          handleAddTodo(text);
          e.target.reset();
        }}
      >
        <input name="todo" placeholder="添加新待办事项..." />
        <button type="submit" disabled={status === 'pending'}>
          {status === 'pending' ? '添加中...' : '添加'}
        </button>
      </form>
    </div>
  );
}
```

### 应用场景

- 表单提交和处理
- 数据获取和刷新
- 用户认证流程
- 任何需要跟踪加载、错误和成功状态的异步操作
- 与乐观更新结合使用的复杂交互

<a id="自定义Hooks"></a>

## 18. 自定义 Hooks - 封装和复用逻辑

自定义 Hooks 是一种复用状态逻辑的方式，它不复用状态本身，而是复用状态逻辑。

### 创建自定义 Hook

```jsx
import { useEffect, useState } from 'react';

// 自定义 Hook 用于获取窗口尺寸
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // 处理窗口大小变化
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 添加事件监听
    window.addEventListener('resize', handleResize);

    // 清除事件监听
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依赖数组，只在挂载和卸载时执行

  return windowSize;
}

// 使用自定义 Hook
function ResponsiveComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>窗口宽度: {width}px</p>
      <p>窗口高度: {height}px</p>
      {width < 768 ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

### 自定义 Hook 示例：表单处理

```jsx
function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    reset,
  };
}

// 使用自定义 Hook
function SignupForm() {
  const { values, handleChange, handleBlur, reset } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 提交表单逻辑
    console.log('表单提交', values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>用户名</label>
        <input type="text" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
      </div>
      {/* 其他表单字段 */}
      <button type="submit">注册</button>
    </form>
  );
}
```

### 自定义 Hook 示例：数据获取

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        if (!response.ok) throw new Error('请求失败');

        const result = await response.json();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

// 使用自定义 Hook
function UserList() {
  const { data, loading, error } = useFetch('https://api.example.com/users');

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;
  if (!data) return null;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

<a id="Hooks使用规则"></a>

## 19. Hooks 使用规则和最佳实践

### Hooks 使用规则

1. **只在最顶层使用 Hooks**

   - 不要在循环、条件或嵌套函数中调用 Hooks
   - 确保 Hooks 在每次渲染时都以相同的顺序被调用

2. **只在 React 函数组件和自定义 Hooks 中调用 Hooks**
   - 不要在普通的 JavaScript 函数中调用 Hooks
   - 不要在类组件中调用 Hooks

### 最佳实践

1. **合理拆分 Hooks**

   - 将相关的逻辑封装到自定义 Hooks 中
   - 保持每个 Hook 的职责单一

2. **正确管理依赖项**

   - 在 `useEffect`、`useCallback` 和 `useMemo` 的依赖数组中包含所有使用的变量
   - 使用 ESLint 插件 `eslint-plugin-react-hooks` 检查依赖项

3. **避免过度优化**

   - 不要过早使用 `useMemo` 和 `useCallback`
   - 只在性能确实有问题时才进行优化

4. **合理使用 Context**

   - 将 Context 拆分为多个小的 Context，避免不必要的重渲染
   - 使用 `useMemo` 记忆化 Context 值

5. **处理异步操作**

   - 在 `useEffect` 中处理异步操作时，注意组件卸载后的状态更新
   - 使用清除函数防止内存泄漏

6. **测试 Hooks**
   - 使用 `@testing-library/react-hooks` 测试自定义 Hooks
   - 编写单元测试确保 Hooks 行为符合预期

## 总结

React Hooks 彻底改变了 React 组件的编写方式，使函数组件拥有了类组件的所有能力，同时代码更简洁、更易于测试和复用。通过合理使用内置 Hooks 和创建自定义 Hooks，我们可以更好地组织和复用组件逻辑，提高开发效率和代码质量。

希望本文能帮助你全面了解 React Hooks，并在实际项目中灵活运用。随着 React 的不断发展，Hooks 将继续成为 React 开发的核心部分，掌握它们对于每一位 React 开发者来说都至关重要。
