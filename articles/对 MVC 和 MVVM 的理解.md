@date: 2020-09-13
@tag: [软件架构,react,vue]

## MVC（Model-View-Controller）与 React

### MVC 核心思想

- Model（模型）：管理数据和业务逻辑（如数据获取、存储、验证）。
- View（视图）：负责 UI 的呈现（如 HTML、CSS）。
- Controller（控制器）：处理用户输入，协调 Model 和 View 的交互。

### React 如何体现 MVC 模式

React 本身更侧重 View 层，但结合其他库（如 Redux、Context API）可实现类似 MVC 的架构：

| 角色       | React 中的对应                                                                    |
| ---------- | --------------------------------------------------------------------------------- |
| Model      | 状态管理工具（如 Redux Store、Context API 的全局状态、组件内部的 useState）       |
| View       | React 组件（JSX 描述 UI，通过 Props 和 State 渲染）                               |
| Controller | 事件处理函数（如 onClick）、Redux 的 Actions/Reducers、自定义 Hooks（业务逻辑）。 |

### React 的 MVC 数据流

1. 用户触发事件（如点击按钮），调用 Controller 逻辑（如 Redux Action）。
2. Controller 更新 Model（如修改 Redux Store 的状态）。
3. Model 变化触发 View 更新（React 组件重新渲染）。

示例（React + Redux）：

```jsx
// Model (Redux Store)
const initialState = { count: 0 };
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

// View (React Component)
const Counter = ({ count, increment }) => (
  <div>
    <p>{count}</p>
    <button onClick={increment}>+</button>
  </div>
);

// Controller (Redux Action)
const mapDispatch = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
});
export default connect(mapState, mapDispatch)(Counter);
```

### React MVC 的特点

- 单向数据流：数据从 Model → View → Controller → Model 循环。
- 职责分离：状态管理（Model）、UI 渲染（View）、逻辑处理（Controller）解耦。
- 灵活性：需要手动管理状态和逻辑的传递（如 Props Drilling）。

## MVVM（Model-View-ViewModel）与 Vue

### MVVM 核心思想

- Model（模型）：管理数据和业务逻辑（与 MVC 的 Model 类似）。
- View（视图）：UI 的声明式描述（如 Vue 模板）。
- ViewModel（视图模型）：连接 View 和 Model 的桥梁，通过数据绑定自动同步两者。

### Vue 如何实现 MVVM？

Vue 是典型的 MVVM 框架，其核心是 响应式系统 和 模板语法：

| 角色      | Vue 中的对应                                           |
| --------- | ------------------------------------------------------ |
| Model     | Vue 组件的 data 属性、Pinia/Vuex 的状态                |
| View      | Vue 模板（.vue 文件中的 <template> 部分）              |
| ViewModel | Vue 实例（自动生成的响应式系统，处理模板与数据的绑定） |

### Vue 的 MVVM 数据流

1. View 中声明数据绑定（如 {{ count }} 或 v-model）。

2. ViewModel 监听 Model 变化，自动更新 View。

3. 用户操作 View（如输入框输入），ViewModel 自动更新 Model。

示例：

```vue
<template>
  <!-- View -->
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  // Model
  data() {
    return { count: 0 };
  },
  // ViewModel (逻辑处理)
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>
```

### Vue MVVM 的特点

- 双向数据绑定：通过 v-model 实现 View 和 Model 的自动同步。
- 声明式编程：模板中直接绑定数据和事件，无需手动操作 DOM。
- 响应式系统：基于依赖追踪的自动更新（无需手动触发渲染）。

## MVC（React） vs MVVM（Vue）对比

| 特性     | React MVC                           | Vue MVVM                               |
| -------- | ----------------------------------- | -------------------------------------- |
| 数据流   | 单向数据流（需手动管理状态传递）    | 双向数据绑定（自动同步 View 和 Model） |
| 状态管理 | 依赖外部库（如 Redux、Context API） | 内置响应式系统（data + reactive）      |
| UI 更新  | 通过 Virtual DOM Diff 优化渲染      | 基于依赖追踪的精准更新                 |
| 代码风格 | 函数式编程（Hooks + JSX）           | 声明式模板 + 选项式/组合式 API         |
| 适用场景 | 大型复杂应用，需高度定制化架构      | 中小型应用，快速开发，注重开发体验     |

## 总结

React 的 MVC 模式

- 强调单向数据流和职责分离，适合需要精细控制状态和逻辑的场景。
- 需要结合其他库实现完整的 MVC 架构。

Vue 的 MVVM 模式

- 通过响应式系统和双向绑定简化开发，适合快速迭代和中小型项目。
- 内置的 ViewModel 自动处理数据与视图的同步。

根据项目需求选择框架：

- 选择 React：需要高度灵活性和可扩展性的大型应用。
- 选择 Vue：追求开发效率和简洁性的中小型应用。
