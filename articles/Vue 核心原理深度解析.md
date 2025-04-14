@date: 2024-03-16
@tag: [vue]

## 一、响应式系统（Reactivity）

### 1. Vue 2.x 的响应式实现

Vue 2 使用 `Object.defineProperty` 实现数据响应式：

```javascript
function observe(obj) {
  if (!obj || typeof obj !== 'object') return;

  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    let dep = new Dep();

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        // 依赖收集
        if (Dep.target) {
          dep.depend();
        }
        return value;
      },
      set(newValue) {
        if (value === newValue) return;
        value = newValue;
        // 触发更新
        dep.notify();
      },
    });

    // 递归观察子属性
    observe(value);
  });
}

// 依赖收集器
class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if (Dep.target) {
      this.subscribers.add(Dep.target);
    }
  }

  notify() {
    this.subscribers.forEach((sub) => sub.update());
  }
}
```

### 2. Vue 3.x 的响应式实现

Vue 3 使用 Proxy 实现数据响应式：

```javascript
function reactive(target) {
  if (!isObject(target)) return target;

  const handler = {
    get(target, key, receiver) {
      const result = Reflect.get(target, key, receiver);
      // 依赖收集
      track(target, key);
      return isObject(result) ? reactive(result) : result;
    },

    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      if (oldValue !== value) {
        // 触发更新
        trigger(target, key);
      }
      return result;
    },
  };

  return new Proxy(target, handler);
}
```

Vue 3 的优势：

- 可以监听数组变化
- 可以监听对象属性的添加和删除
- 支持 Map、Set、WeakMap、WeakSet
- 性能更好，不需要递归遍历

## 二、虚拟 DOM（Virtual DOM）

### 1. 虚拟 DOM 的结构

```javascript
const vnode = {
  type: 'div',
  props: {
    id: 'app',
    class: 'container',
  },
  children: [
    {
      type: 'h1',
      props: null,
      children: ['Hello Vue'],
    },
  ],
};
```

### 2. Diff 算法实现

```javascript
function patch(n1, n2) {
  if (n1.type !== n2.type) {
    // 节点类型不同，直接替换
    replaceNode(n1, n2);
    return;
  }

  // 更新属性
  const el = (n2.el = n1.el);
  const oldProps = n1.props || {};
  const newProps = n2.props || {};

  // 更新新属性
  for (const key in newProps) {
    if (oldProps[key] !== newProps[key]) {
      patchProp(el, key, oldProps[key], newProps[key]);
    }
  }

  // 删除旧属性
  for (const key in oldProps) {
    if (!(key in newProps)) {
      patchProp(el, key, oldProps[key], null);
    }
  }

  // 更新子节点
  patchChildren(n1, n2, el);
}
```

## 三、编译器（Compiler）

### 1. 模板编译过程

```javascript
// 模板
<div id="app">
  <p>{{ message }}</p>
</div>;

// 编译后的渲染函数
function render() {
  return h('div', { id: 'app' }, [h('p', null, ctx.message)]);
}
```

### 2. 编译优化

Vue 3 的编译优化：

```javascript
// 模板
<div>
  <p>静态内容</p>
  <p>{{ dynamic }}</p>
</div>;

// 编译后（带有 PatchFlag）
const hoisted = h('p', null, '静态内容');

function render() {
  return h('div', null, [hoisted, h('p', null, ctx.dynamic, 1 /* TEXT */)]);
}
```

## 四、组件化机制

### 1. 组件的生命周期

```javascript
const MyComponent = {
  data() {
    return { count: 0 };
  },

  beforeCreate() {
    // 实例初始化之后，数据观测之前
  },

  created() {
    // 数据观测、事件配置完成
  },

  beforeMount() {
    // 挂载开始之前
  },

  mounted() {
    // 挂载完成
  },

  beforeUpdate() {
    // 数据更新时
  },

  updated() {
    // 更新完成
  },

  beforeUnmount() {
    // 卸载之前
  },

  unmounted() {
    // 卸载完成
  },
};
```

### 2. 组件通信

```javascript
// 父组件
const Parent = {
  template: `
    <Child 
      :msg="message"
      @update="handleUpdate"
    />
  `,
  data() {
    return {
      message: 'Hello',
    };
  },
  methods: {
    handleUpdate(value) {
      this.message = value;
    },
  },
};

// 子组件
const Child = {
  props: ['msg'],
  emits: ['update'],
  template: `
    <div @click="$emit('update', 'New Message')">
      {{ msg }}
    </div>
  `,
};
```

## 五、Vue 3 的新特性

### 1. Composition API

```javascript
import { computed, onMounted, ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2);

    function increment() {
      count.value++;
    }

    onMounted(() => {
      console.log('组件已挂载');
    });

    return {
      count,
      double,
      increment,
    };
  },
};
```

### 2. 新的 API 设计

```javascript
// 创建应用实例
const app = createApp({
  // 根组件选项
});

// 注册全局组件
app.component('my-component', {
  // 组件选项
});

// 注册全局指令
app.directive('focus', {
  mounted(el) {
    el.focus();
  },
});

// 挂载应用
app.mount('#app');
```

## 六、性能优化

### 1. 编译时优化

Vue 3 在编译时引入了多项优化策略，显著提升了应用性能：

#### 1.1 静态树提升（Static Tree Hoisting）

静态树提升是指将永远不会改变的静态子树提升到渲染函数之外，使其只被创建一次，后续的重新渲染直接复用。

```javascript
// 模板
<div>
  <div class="header">
    <h1>标题</h1>
    <p>静态内容</p>
  </div>
  <div class="content">{{ message }}</div>
</div>;

// 编译后
const hoisted = createVNode('div', { class: 'header' }, [
  createVNode('h1', null, '标题'),
  createVNode('p', null, '静态内容'),
]);

function render() {
  return createVNode('div', null, [
    hoisted, // 直接复用静态子树
    createVNode('div', { class: 'content' }, ctx.message),
  ]);
}
```

这种优化：

- 减少了每次渲染时的 VNode 创建开销
- 降低了内存占用
- 提高了渲染性能

#### 1.2 静态属性提升

与静态树提升类似，静态属性也会被提升到渲染函数之外。

```javascript
// 模板
<div>
  <div class="card" data-type="info" :title="title">
    {{ content }}
  </div>
</div>

// 编译后
const hoistedProps = {
  class: "card",
  "data-type": "info"
}

function render() {
  return createVNode("div", null, [
    createVNode("div", {
      ...hoistedProps,  // 复用静态属性
      title: ctx.title
    }, ctx.content)
  ])
}
```

优势：

- 避免重复创建静态属性对象
- 减少内存分配
- 提高属性比对效率

#### 1.3 Patch Flag 标记动态节点

Patch Flag 是 Vue 3 引入的一个重要优化，它会在编译时标记动态内容的类型，运行时只需要关注带有标记的内容。

```javascript
// 模板
<div>
  <div>{{ text }}</div>
  <div :class="cls"></div>
  <div :id="id">{{ text }}</div>
</div>

// 编译后
function render() {
  return createVNode("div", null, [
    createVNode("div", null, ctx.text, 1 /* TEXT */),
    createVNode("div", { class: ctx.cls }, null, 2 /* CLASS */),
    createVNode("div", { id: ctx.id }, ctx.text, 3 /* PROPS + TEXT */)
  ])
}
```

Patch Flag 类型：

- TEXT = 1: 文本内容是动态的
- CLASS = 2: class 是动态的
- PROPS = 4: 属性是动态的
- STYLE = 8: style 是动态的
- 等等...

优势：

- 精确定位需要更新的内容
- 跳过静态内容的比对
- 提高 diff 效率

#### 1.4 Block Tree 优化更新性能

Block Tree 是 Vue 3 中的一个更高层次的优化，它将模板基于动态节点进行分块。

```javascript
// 模板
<div>
  <div>静态内容</div>
  <div v-if="show">
    <div>{{ dynamic }}</div>
  </div>
</div>;

// 编译后（简化版）
function render() {
  return createBlock('div', null, [
    createVNode('div', null, '静态内容'),
    (openBlock(),
    createBlock(Fragment, null, [
      ctx.show
        ? createBlock('div', null, [createVNode('div', null, ctx.dynamic, 1 /* TEXT */)])
        : createCommentVNode('v-if'),
    ])),
  ]);
}
```

Block Tree 的工作原理：

1. 将模板分割成不同的 block
2. 每个 block 跟踪其内部的动态节点
3. 更新时只需要遍历 block 中的动态节点

优势：

- 减少虚拟 DOM 树的遍历范围
- 提高大型应用的更新性能
- 更精确的更新追踪

这些编译时优化共同作用，使得 Vue 3 相比 Vue 2：

- 初始渲染速度提升约 40%
- 更新性能提升约 260%
- 内存使用减少约 40%

在实际开发中，我们可以：

1. 尽可能使用静态内容
2. 合理划分动态和静态内容
3. 利用 v-once 和 v-memo 等指令进一步优化
4. 关注编译器警告，避免反优化

通过理解这些优化策略，我们可以编写出更高性能的 Vue 应用。

### 2. 运行时优化

```javascript
// 1. 使用 v-show 代替频繁切换的 v-if
<template>
  <div v-show="visible">内容</div>
</template>

// 2. 使用 computed 缓存计算结果
const double = computed(() => count.value * 2);

// 3. 使用 v-once 处理静态内容
<div v-once>这个内容永远不会改变</div>

// 4. 合理使用 v-memo
<div v-memo="[item.id]">
  <!-- 只有 item.id 改变时才会更新 -->
</div>
```

## 总结

Vue 的核心原理包括：

1. 响应式系统：追踪数据变化
2. 虚拟 DOM：高效更新视图
3. 模板编译：优化渲染性能
4. 组件化：提高代码复用性和可维护性

理解这些原理有助于：

- 更好地使用 Vue 框架
- 解决开发中遇到的问题
- 优化应用性能
- 编写更高质量的代码
