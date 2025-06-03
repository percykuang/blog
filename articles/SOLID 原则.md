@date: 2020-08-23
@tag: [javascript,设计模式]

## 引言

SOLID 是面向对象设计的五个基本原则，分别是：

- 单一职责原则（Single Responsibility Principle）
- 开放封闭原则（Open/Closed Principle）
- 里氏替换原则（Liskov Substitution Principle）
- 接口隔离原则（Interface Segregation Principle）
- 依赖倒置原则（Dependency Inversion Principle）

##

### 单一职责原则

一个类应该只负责一件事

```ts
// ❌ 错误示例：一个类做多件事
class UserManager {
  createUser() { /* ... */ }
  sendEmail() { /* ... */ }  // 不应该处理邮件
  generateReport() { /* ... */ }  // 不应该处理报告
}

// ✅ 正确示例：职责分离
class UserManager {
  createUser() { /* ... */ }
  updateUser() { /* ... */ }
  deleteUser() { /* ... */ }
}

class EmailService {
  sendEmail() { /* ... */ }
}

class ReportGenerator {
  generateReport() { /* ... */ }
}
```

### 开放封闭原则

对扩展开放，对修改封闭

```ts
// ❌ 错误示例：每增加形状都需要修改计算方法
class AreaCalculator {
  calculateArea(shape: string) {
    if (shape === 'circle') {
      /* ... */
    }
    if (shape === 'square') {
      /* ... */
    }
    // 新增形状需要修改代码
  }
}

// ✅ 正确示例：通过继承扩展
interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  calculateArea() {
    /* ... */
  }
}

class Square implements Shape {
  calculateArea() {
    /* ... */
  }
}

// 新增形状不需要修改现有代码
class Triangle implements Shape {
  calculateArea() {
    /* ... */
  }
}
```

### 里氏替换原则

子类必须能够替换其父类

```ts
// ❌ 错误示例：违反 LSP
class Bird {
  fly() {
    /* ... */
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('企鹅不能飞！'); // 违反了父类的行为
  }
}

// ✅ 正确示例：正确的继承关系
interface Bird {
  move(): void;
}

class FlyingBird implements Bird {
  move() {
    this.fly();
  }
  private fly() {
    /* ... */
  }
}

class WalkingBird implements Bird {
  move() {
    this.walk();
  }
  private walk() {
    /* ... */
  }
}
```

### 接口隔离原则

客户端不应该依赖它不需要的接口

```ts
// ❌ 错误示例：一个大而全的接口
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

// ✅ 正确示例：接口分离
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

class Human implements Workable, Eatable, Sleepable {
  work() {
    /* ... */
  }
  eat() {
    /* ... */
  }
  sleep() {
    /* ... */
  }
}

class Robot implements Workable {
  work() {
    /* ... */
  }
  // 机器人不需要实现 eat 和 sleep
}
```

### 依赖倒置原则

高层模块不应该依赖低层模块，两者都应该依赖抽象

```ts
// ❌ 错误示例：直接依赖具体实现
class EmailNotifier {
  sendEmail() { /* ... */ }
}

class UserService {
  private emailNotifier = new EmailNotifier();  // 直接依赖具体类

  notifyUser() {
    this.emailNotifier.sendEmail();
  }
}

// ✅ 正确示例：依赖抽象接口
interface Notifier {
  notify(): void;
}

class EmailNotifier implements Notifier {
  notify() { /* 发送邮件 */ }
}

class SMSNotifier implements Notifier {
  notify() { /* 发送短信 */ }
}

class UserService {
  constructor(private notifier: Notifier) {}  // 依赖注入

  notifyUser() {
    this.notifier.notify();
  }
}

// 使用时可以灵活切换通知方式
const userService1 = new UserService(new EmailNotifier());
const userService2 = new UserService(new SMSNotifier());
```
