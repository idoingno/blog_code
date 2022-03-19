---
title: This和对象委托
autoGroup-1: JS 核心
---

## this 常见理解错误

1、 很容易把`this`理解成指向函数自身。

2、 误认为`this`指向函数的作用域。需要明确的是，`this`在任何情况下都不指向函数的词法作用域。

> `this` 实际上是在函数在被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。
>
> 当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。`this` 就是这个记录的一个属性，会在函数执行的过程中用到。

## 调用位置

调用位置就是函数在代码中被调用的位置（而不是声明的位置）。
分析调用栈，到达当前执行位置所调用的所有函数。

```js
function a() {
  // 当前调用栈是a
  // 因此调用位置是全局作用域
  b(); // <--- b的调用位置
}
function b() {
  // 当前调用栈是a -> b
  // 因此调用位置是a中
  c(); // <--- c的调用位置
}
function c() {
  // 当前调用栈是 a -> b -> c
  // 因此调用位置是b中
}
a(); // <--- a的调用位置
```

## 绑定规则

四条绑定规则：默认绑定、隐式绑定、显示绑定、new 绑定。

优先级：new 绑定 > 显示绑定 > 隐式绑定 > 默认绑定

### 默认绑定

非严格模式下，默认绑定才能绑定到全局对象。

```js
// this 指向了全局对象
function foo() {
  console.log(this.a);
}
var a = 1;
foo(); // 1
```

使用严格模式（strict mode），则不能将全局对象用于默认绑定，因此 this 会绑定到 undefined

```js
// this 指向了全局对象
function foo() {
  "use strict";
  console.log(this.a);
}
var a = 1;

foo(); //TypeError: this is undefined

// 在严格模式下调用fob() 则不影响默认绑定
function fob() {
  console.log(this.a);
}
var a = 2;
(function () {
  "use strict";
  fob(); // 2
})();
```

### 隐式绑定

当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。

```js
// 对象属性引用链中只有上一层或者说最后一层在调用位置中起作用。
function foo() {
  console.log(this.a);
}
var obj2 = {
  a: 42,
  foo: foo,
};
var obj1 = {
  a: 2,
  obj2: obj2,
};
obj1.obj2.foo(); // 42
```

隐式绑定的函数可能会丢失绑定对象，即会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 42,
  foo: foo,
};
var bar = obj.foo; // 函数别名
var a = "global"; // a是全局对象的属性
bar(); //  "global"
```

同样，在传入回调函数时，也会发生丢失 this 绑定

```js
// 调用回调函数的函数可能会修改this
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  // fn 其实引用的时foo
  fn(); // <--- 调用位置
}

var obj = {
  a: 42,
  foo: foo,
};

var a = "global"; // a是全局对象的属性
doFoo(obj.foo); // "global"
```

### 显示绑定

可以使用`call(..)`和`apply(..)` 强制绑定到对象上。

```js
// 调用foo时强制绑定把它的this绑定到obj
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
foo.call(obj); // 2
```

如果传入的是原始值（字符串类型、布尔类型或者数字类型）来当作 this 的绑定对象，这个原始值会被转换成它的对象形式。（new String(...)、 new Boolean(...)、或者 new Number(...)）。

硬绑定的典型应用场景就是创建一个包裹函数，负责接收参数并返回值。

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
// 简单的辅助绑定函数;
function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  };
}

var obj = {
  a: 2,
};
var bar = bind(foo, obj);
var b = bar(3); // 2 3
console.log(b); // 5
```

ES5 提供了内置的方法 `Function.prototype.bind`, 可以直接调用 `bind` 方法。

### new 绑定

在 JavaScript 中，构造函数只是一些使用 new 操作符时被调用的函数。
使用 new 来调用函数会发生什么：

- 创建（或者说构造）一个全新的对象。
- 这个新对象会被执行`[[Prototype]]`连接。
- 这个新对象会绑定到函数调用的 `this`。
- 如果函数没有返回其他对象，那么 `new` 表达式中的函数调用会自动返回这个新对象。

```js
function foo() {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); //2
```

> 根据优先级判断 this：
> ① 函数是否在`new`中调用（new 绑定）？如果是的话`this`绑定的是新创建的对象。 （`var bar = new foo()`）
> ② 函数是否通过`call`、`apply`（显示绑定）或者硬绑定调用 ？ 如果是的话，`this`绑定的是指定的对象。（`var bar = foo.call(obj)`）
> ③ 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，`this`绑定的是那个上下文对象。（`var bar = obj1.foo()`）
> ④ 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到`undefined`，否则绑定到全局对象。

## 绑定例外

如果你把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值在调用时会被忽略，实际应用的是默认绑定规则：

```js
function foo() {
  console.log(this.a);
}
var a = 2;
foo.call(null); // 2

// 还可以使用apply() 只能展开数组
function foo(a, b) {
  console.log("a:" + a + ", b:" + b);
}
// 把数组“展开”成参数
foo.apply(null, [2, 3]); //a:2, b:3
//使用bind(..)进行柯里化
var bar = foo.bind(null, 2);
bar(3); // a:2, b:3
```

使用 null 来忽略 this 绑定可能会产生一些副作用，更安全的做法是传入一个特殊的对象，把`this`绑定到这个对象不会产生任何副作用。在 JavaScript 中创建一个空对象最简单的方法都是 `Object.create(null)`。

```js
function foo(a, b) {
  console.log("a:" + a + ", b:" + b);
}
var n = Object.create(null);
// 把数组“展开”成参数
foo.apply(n, [2, 3]); // a:2, b:3
//使用bind(..)进行柯里化
var bar = foo.bind(n, 2);
bar(3); // a:2, b:3
```

硬绑定这种方式可以把`this`强制绑定到指定的对象（除了使用`new`时），防止函数调用应用默认绑定规则。硬绑定会大大降低函数的灵活性，使用硬绑定之后就无法使用隐式绑定或者显式绑定来修改`this`。可以给默认绑定指定一个`全局对象`和`undefined`以外的值，那就可以实现和硬绑定相同的效果，同时保留隐式绑定或者显式绑定修改`this`的能力。可以通过**软绑定**的方法来实现！

```js
// 软绑定
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function (obj) {
    var fn = this;
    //捕获所有curried参数
    var curried = [].slice.call(arguments, 1);
    var bound = function () {
      return fn.apply(
        !this || this === (window || global) ? obj : this,
        curried.concat.apply(curried, arguments)
      );
    };
    bound.prototype = Object.create(fn.prototype);
    return bound;
  };
}
```

ES6 中的箭头函数，使用被称为“胖箭头”的操作符 => 定义。 箭头函数不使用`this`的四种标准规则，而是根据外层（函数或者全局）作用域来决定`this`。

箭头函数可以像`bind(..)`一样确保函数的`this`被绑定到指定对象，此外，其重要性还体现在它用更常见的词法作用域取代了传统的`this`机制。

```js
function foo() {
  setTimeout(() => {
    //这里的this在词法上继承自foo();
    console.log(this.a);
  }, 100);
}
var obj = {
  a: 2,
};
foo.call(obj); // 2
```

## 面向对象及对象关联

两种思维模型，基于类和委托

**面向对象风格：** 子类`Bar`继承了父类`Foo`，然后生成了`b1`和`b2`两个实例。`b1`委托了`Bar.prototype`，`Bar.prototype`委托了`Foo.prototype`。

```js
// 典型的（“原型”）面向对象风格：
function Foo(who) {
  this.me = who;
}
Foo.prototype.identify = function () {
  return "I am " + this.me;
};
function Bar(who) {
  Foo.call(this, who);
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.speak = function () {
  alert("Hello, " + this.identify() + ".");
};
var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();
```

![](/imgs/js/object-1.png)

**对象关联风格：** 利用`[[Prototype]]`把 b1 委托给 Bar 并把 Bar 委托给 Foo，仍然实现了三个对象之间的关联。

```js
Foo = {
  init: function (who) {
    this.me = who;
  },
  identify: function () {
    return "I am " + this.me;
  },
};
Bar = Object.create(Foo);
Bar.speak = function () {
  alert("Hello, " + this.identify() + ".");
};
var b1 = Object.create(Bar);
b1.init("b1");

var b2 = Object.create(Bar);
b2.init("b2");

b1.speak();
b2.speak();
```

![](/imgs/js/object-2.png)

使用对象关联风格委托来实现 UI 控件（jQuery 实现 - Button 组件）, 不需要把`Widget`和`Button`当作父类和子类。`Widget`只是一个对象，包含一组通用的函数，任何类型的控件都可以委托，`Button`同样只是一个对象。

```js
var Widget = {
  init: function (width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  },
  insert: function ($where) {
    if (this.$elem) {
      this.$elem
        .css({
          width: this.width + "px",
          height: this.height + "px",
        })
        .appendTo($where);
    }
  },
};
var Button = Object.create(Widget);
Button.setup = function (width, height, label) {
  // 委托调用
  this.init(width, height);
  this.label = label || "Default";
  this.$elem = $("<button>").text(this.label);
};
Button.build = function ($where) {
  // 委托调用
  this.insert($where);
  this.$elem.click(this.onClick.bind(this));
};
Button.onClick = function (evt) {
  console.log("Button '" + this.label + "'clicked!");
};
$(document).ready(function () {
  var $body = $(document.body);

  var btn1 = Object.create(Button);
  btn1.setup(125, 30, "Hello");

  var btn2 = Object.create(Button);
  btn2.setup(150, 40, "World");

  btn1.build($body);
  btn2.build($body);
});
```

> 对象关联可以更好地支持关注分离（separation of concerns）原则，创建和初始化并不需要合并为一个步骤。
