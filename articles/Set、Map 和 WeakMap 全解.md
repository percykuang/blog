@date: 2020-09-27
@tag: [javascript, es6]

## Set

### 前言

- Set 是 ES6 引入的一种新的数据结构，它类似于数组，但是成员的值都是唯一的，没有重复的值。
- Set 本身是一个构造函数，可以接受一个数组（或具有 iterable 接口的其他数据结构）作为参数，用来初始化。

### 基础使用

```js
// 创建 Set
const set = new Set();

// 添加值
set.add(1);
set.add('text');
set.add({ x: 10 });

// 链式调用
set.add(1).add(2).add(3);

// 检查值是否存在
console.log(set.has(1)); // true

// 删除值
set.delete(1);

// 获取大小
console.log(set.size);

// 清空 Set
set.clear();
```

### 特点

```js
// 1. 值的唯一性
const set = new Set([1, 1, 2, 2, 3, 3]);
console.log(set); // Set(3) {1, 2, 3}

// 2. NaN 的处理
const set = new Set([NaN, NaN]);
console.log(set.size); // 1

// 3. +0 和 -0 被视为相同
const set = new Set([+0, -0]);
console.log(set.size); // 1

// 4. 对象引用不同则视为不同值
const set = new Set();
set.add({});
set.add({});
console.log(set.size); // 2
```

### 常用操作

```js
// 1. 数组去重
const array = [1, 2, 2, 3, 3, 4];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4]

// 2. 字符串去重
const str = 'hello';
const uniqueStr = [...new Set(str)].join('');
console.log(uniqueStr); // 'helo'

// 3. Set 转数组
const set = new Set([1, 2, 3]);
const array1 = Array.from(set);
const array2 = [...set];

// 4. 遍历操作
const set = new Set(['a', 'b', 'c']);

// forEach
set.forEach(value => {
  console.log(value);
});

// for...of
for (const value of set) {
  console.log(value);
}
```

### 集合操作

```js
// 1. 并集
function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

// 2. 交集
function intersection(setA, setB) {
  return new Set([...setA].filter((x) => setB.has(x)));
}

// 3. 差集
function difference(setA, setB) {
  return new Set([...setA].filter((x) => !setB.has(x)));
}

// 使用示例
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

console.log(union(setA, setB)); // Set(4) {1, 2, 3, 4}
console.log(intersection(setA, setB)); // Set(2) {2, 3}
console.log(difference(setA, setB)); // Set(1) {1}
```

## Map

### 前言

Map 是 ES6 引入的一种新的数据结构，它类似于对象，但是键值对的键可以是任意类型。

### 基础使用

```js
// 创建 Map
const map = new Map();

// 设置键值对
map.set('name', 'Alice');
map.set(1, 'number one');
map.set({}, 'object');

// 链式调用
map.set('a', 1).set('b', 2).set('c', 3);

// 获取值
console.log(map.get('name')); // 'Alice'

// 检查键是否存在
console.log(map.has('name')); // true

// 删除键值对
map.delete('name');

// 获取大小
console.log(map.size);

// 清空 Map
map.clear();
```

### 特点

```js
// 1. 任何类型都可以作为键
const map = new Map();

// 使用对象作为键
const objKey = { id: 1 };
map.set(objKey, 'object value');

// 使用函数作为键
const fnKey = function () {};
map.set(fnKey, 'function value');

// 使用 NaN 作为键
map.set(NaN, 'NaN value');
console.log(map.get(NaN)); // 'NaN value'

// 2. 键的比较使用 Same-value-zero 算法
map.set(-0, 'negative zero');
console.log(map.get(+0)); // 'negative zero'

// 3. 保持插入顺序
const orderedMap = new Map([
  ['first', 1],
  ['second', 2],
  ['third', 3],
]);

// 遍历按插入顺序进行
for (const [key, value] of orderedMap) {
  console.log(key, value);
}
```

## WeakMap

### 前言

WeakMap 和 Map 功能类似，只不过它具有弱引用的特点且只能使用对象作为键。

### 基础使用

```js
// 创建 WeakMap
const weakMap = new WeakMap();

// 只能使用对象作为键
const obj = { id: 1 };
weakMap.set(obj, 'object data');

// 获取值
console.log(weakMap.get(obj));

// 检查键是否存在
console.log(weakMap.has(obj));

// 删除键值对
weakMap.delete(obj);
```

### 特点

```js
// 1. 弱引用特性
let obj = { id: 1 };
const weakMap = new WeakMap();
weakMap.set(obj, 'data');

obj = null; // 对象可被垃圾回收
// weakMap 中的键值对会自动被清除

// 2. 不可遍历
// 没有 size 属性
// 没有 clear() 方法
// 不能使用 for...of

// 3. 只接受对象作为键
// 这些都会报错
weakMap.set(1, 'value');
weakMap.set('key', 'value');
weakMap.set(true, 'value');
```

## Map vs WeakMap

### 引用区别

```js
// Map：强引用
const map = new Map();
let obj = { id: 1 };
map.set(obj, 'data');
obj = null; // 原对象仍然在 map 中

// WeakMap：弱引用
const weakMap = new WeakMap();
let obj2 = { id: 2 };
weakMap.set(obj2, 'data');
obj2 = null; // 对象可被垃圾回收
```

### 性能区别

```js
// 1. 频繁增删键值对
const map = new Map(); // 适合

// 2. 存储对象关联数据，且需要自动清理
const weakMap = new WeakMap(); // 适合

// 3. 需要遍历操作
const map = new Map(); // 适合
// WeakMap 不支持遍历

// 4. 内存敏感的场景
const weakMap = new WeakMap(); // 适合
```

### 最佳实践

```js
// 1. 使用 Map 的场景
// - 需要频繁添加/删除键值对
// - 需要遍历键值对
// - 需要获取键值对数量
const userRoles = new Map();
userRoles.set(user1, ['admin']);
userRoles.set(user2, ['user']);

// 2. 使用 WeakMap 的场景
// - 存储对象的元数据
// - DOM 节点相关数据
// - 需要自动垃圾回收
const domData = new WeakMap();
domData.set(element, {
  clickCount: 0,
  lastClicked: null,
});
```

选择使用 Map 还是 WeakMap 主要考虑：

1. 键的类型（是否只用对象）
2. 是否需要遍历
3. 内存管理需求
4. 是否需要获取集合大小
5. 是否需要清空操作
