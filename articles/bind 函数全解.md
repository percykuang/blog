@date: 2020-07-19
@tag: [javascript]

## 功能

bind 函数是 JavaScript 中一个非常重要的函数，它可以将一个函数的上下文绑定到指定的对象上，从而改变函数执行时的上下文。bind 的传参结构为`function.bind(thisArg, arg1, arg2, ...)`，`thisArg` 表示绑定的 this 上下文，`arg1, arg2, ...`表示预设的参数。

## 用法

### 绑定 this

```js
const person = {
  name: 'Alice',
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const greet = person.greet;
// 直接调用会丢失 this 上下文
greet(); // Hello, I'm undefined

const boundGreet = person.greet.bind(person);
// bind 后保持了正确的 this 指向
boundGreet(); // Hello, I'm Alice
```

### 参数预设

```js
function multiply(a, b) {
  return a * b;
}

// 创建一个新函数，第一个参数固定为 2
const double = multiply.bind(null, 2);
console.log(double(4)); // 8
console.log(double(5)); // 10
```

### 在类/构造函数中使用

```js
class Button {
  constructor() {
    this.clicked = false;
    // 在事件处理中保持 this 指向
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.clicked = true;
    console.log('Button clicked');
  }
}
```

### 支持作为构造函数使用

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 创建一个预设年龄的构造函数
const CreateTeenager = Person.bind(null, 'Unknown', 16);
const teen = new CreateTeenager();
console.log(teen.age); // 16
```

## 实现原理

具体代码实现：

```js
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
  }

  const self = this; // 保存原函数的引用
  // 改用普通函数，这样可以作为构造函数使用
  const fBound = function (...boundArgs) {
    return self.apply(
      // 使用 instanceof 检查是否是通过 new 调用
      this instanceof fBound ? this : context,
      [...args, ...boundArgs]
    );
  };

  // 设置 fBound.__proto__ 指向 self，使之可以访问 self 对象上的静态方法
  Object.setPrototypeOf(fBound, self);
  // 设置 fBound.prototype 为 self.prototype 的副本，这样 fBound 的实例可以继承 self 的原型对象上的方法
  fBound.prototype = Object.create(self.prototype);

  return fBound;
};
```

代码解析：

1. 参数检查

```js
if (typeof this !== 'function') {
  throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
}
```

- 因为 myBind 是定义在 Function.prototype 上的方法
- 检查调用 myBind 的对象是否为函数
- 如果不是函数则抛出错误

2. 保存原函数引用

```js
const self = this;
```

- this 在这里指向原始函数
- 保存引用是为了在后面的函数中使用

3. 创建绑定函数

```js
const fBound = function (...boundArgs) {
  // 函数体
};
```

- 创建一个新函数作为返回值
- 使用剩余参数语法收集调用时传入的参数

4. 处理 this 指向

```js
this instanceof fBound ? this : context;
```

- 判断 fBound 是否被作为构造函数调用（使用 new）
- 如果是构造函数调用：使用新创建的实例（this）
- 如果是普通调用：使用传入的上下文（context）

5. 合并参数

```js
[...args, ...boundArgs];
```

- args：调用 bind 时预设的参数
- boundArgs：调用绑定函数时传入的参数
- 使用扩展运算符合并两组参数

6. 继承原型链

```js
Object.setPrototypeOf(fBound, self);
fBound.prototype = Object.create(self.prototype);
```

- 设置 fBound 函数对象的原型（**proto**）指向原函数，继承静态属性/方法
- 创建原函数原型的副本作为 fBound 的 prototype，继承实例方法
