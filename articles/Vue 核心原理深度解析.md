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

- 静态树提升（Static Tree Hoisting）
- 静态属性提升
- Patch Flag 标记动态节点
- Block Tree 优化更新性能

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
