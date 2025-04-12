@date: 2020-07-24
@tag: [react,redux,状态管理]

## 使用 useReducer 和 Context 实现 redux 的功能

步骤：

1. 将数据集中在一个 store 对象
2. 将所有操作集中在 reducer
3. 创建一个 Context
4. 创建对数据的读写 API
5. 将第4步的内容放到第 3 步的 Context 中
6. 用 Context.Provider 将 Context 提供给所有组件
7. 各个组件用 useContext 获取读写 API

代码演示：

```tsx
import React, { Dispatch, createContext, useContext, useEffect, useReducer } from 'react';

import './App.css';

interface IPersonState {
  books: string[];
  movies: string[];
}

type IPersonAction = {
  type: 'getBooks' | 'getMovies';
  payload: string[];
};

const initialState: IPersonState = {
  books: [],
  movies: [],
};

function reducer(state: IPersonState = initialState, action: IPersonAction) {
  if (action.type === 'getBooks') {
    return { ...state, books: action.payload };
  }
  if (action.type === 'getMovies') {
    return { ...state, movies: action.payload };
  }
  return state;
}

export interface IContextValue {
  state: IPersonState;
  dispatch: Dispatch<IPersonAction>;
}

const Context = createContext<IContextValue | undefined>(undefined);

function Person() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div>
        <Books />
        <Movies />
      </div>
    </Context.Provider>
  );
}

function Books() {
  const { state, dispatch } = useContext(Context)!;
  useEffect(() => {
    fetch('http://api.kuanglinfeng.com')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'getBooks', payload: data.books }));
  }, []);

  return (
    <div>
      <h1>我的书籍</h1>
      <ul>
        {state.books!.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

function Movies() {
  const { state, dispatch } = useContext(Context)!;

  useEffect(() => {
    fetch('http://api.kuanglinfeng.com')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'getMovies', payload: data.movies }));
  }, []);
  return (
    <div>
      <h1>我的电影</h1>
      {state.movies.map((movie) => (
        <li key={movie}>{movie}</li>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Person />
    </div>
  );
}

export default App;
```

如何对 reducer 进行拆分？

答：可将 reducer 写成多个对象的形式，合并所有的子 reducer 时只需要 `{...reducer1, ...reducer2, ...}` 即可
