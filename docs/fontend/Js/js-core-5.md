---
title: 其它
autoGroup-1: JS 核心
---

## new 模拟实现

`new` **运算符** 创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

`new` 关键字会进行如下的操作：

- 创建一个空的简单 JavaScript 对象（即{}）；
- 为新创建的对象（{}）添加属性 **proto**，将该属性链接至构造函数的原型对象；
- 将新创建的对象（{}）作为 this 的上下文 ；
- 如果该函数没有返回对象，则返回 this。

```js
function Car() {}
var car1 = new Car();
var car2 = new Car();

console.log(car1.color); // undefined

Car.prototype.color = "original color";
console.log(car1.color); // original color

car1.color = "black";
console.log(car1.color); // black

console.log(car1.__proto__.color); //original color
console.log(car2.__proto__.color); //original color
console.log(car1.color); // black
console.log(car2.color); // original color
```

```js
function Car(name, color) {
  this.name = name;
  this.color = color;

  this.size = 99;
}

Car.prototype.strength = 60;

Car.prototype.drive = function () {
  console.log(this.name + " is Driving");
};

function Factory() {
  // 新建了一个对象 obj
  var obj = {};
  // 取出arguments 的第一个参数，这个就是要传入的构造函数
  var Constructor = [].shift.call(arguments);
  // 让obj 的原型指向构造函数，obj 就可以访问到构造函数原型中的属性
  obj.__proto__ = Constructor.prototype;
  // 改变构造函数 this 的指向到新建的对象，obj 就可以访问到构造函数中的属性
  var ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}

var car = Factory(Car, "sun", "red");

console.log(car.name); // sun
console.log(car.size); // 99
console.log(car.strength); // 60

car.drive(); // sun is Driving
```

## var 、let、const

- ES6 中引入了一个名为 let 的关键字，这是对 JavaScript 的一次重大更新，以解决与 var 关键字有关的潜在问题。同名的变量只能声明一次。
- const 关键字声明只读变量。始终使用 const 关键字命名不想重新分配的变量。
  > Tips：使用 `const` 分配给变量的对象（包括数组和函数）仍然是可变的, 使用 const 声明只能防止变量标识符的重新分配。

## 转义字符

```
代码 输出
\' 单引号
\" 双引号
\\ 反斜杠
\n 换行符
\r 回车符
\t 制表符
\b 退格
\f 换页符
```

## 全局作用域、局部作用域、函数

- 在 JavaScript 中，作用域涉及到变量的作用范围。 在函数外定义的变量具有`全局`作用域。 这意味着，具有全局作用域的变量可以在代码的任何地方被调用。
- 未使用 let 或 const 关键字声明的变量会在`global`范围内自动创建。 当在代码其他地方无意间定义了一个变量，刚好变量名与全局变量相同，这时会产生意想不到的后果。
- 在一个函数内声明的变量，以及该函数的参数都具有局部（local）作用域。

## hasOwnProperty 方法

可以用对象的 `.hasOwnProperty(propname)`方法来检查对象是否有指定的属性。 `.hasOwnProperty()` 找到该属性时返回 `true`，找不到该属性时返回 `false`。

## 生成范围内的随机整数

```
Math.floor(Math.random() * (max - min + 1)) + min
```

## 冻结函数

`Object.freeze` 任何更改对象的尝试都将被拒绝

## rest 操作符与函数参数

ES6 推出了用于函数参数的 rest 操作符帮助我们创建更加灵活的函数。 rest 操作符可以用于创建有一个变量来接受多个参数的函数。 这些参数被储存在一个可以在函数内部读取的数组中。

```js
const func = (...args) => {
  console.log(args.length);
};
```

## spread 运算符展开数组项

ES6 引入了展开操作符，可以展开数组以及需要多个参数或元素的表达式。

> `...arr` 返回一个解压的数组。展开操作符只能够在函数的参数中或者数组中使用。

## 解构赋值

解构赋值是 ES6 引入的新语法，用来从数组和对象中提取值，并优雅地对变量进行赋值。

```js
const user = { name: "John Doe", age: 34 };
const { name, age } = user;
const { name: userName, age: userAge } = user;
```

## class 语法定义构造函数

ES6 提供了一个新的创建对象的语法，使用关键字 `class`。`class` 只是一个语法糖，它并不像 `Java`、`Python` 或者 `Ruby` 这一类的语言一样，严格履行了面向对象的开发规范。

- `class` 关键字声明了一个新的函数，里面添加了一个构造函数。 当用 `new` 创建一个新的对象时，构造函数会被调用。
- **注意：** 首字母大写驼峰命名法 UpperCamelCase 是 ES6 `class` 命名的惯例。
- `constructor` 方法是一个特殊方法，用于创建和初始化 `class` 创建的对象。

## getter 和 setter 来控制对象的访问

从对象中获得一个值，也可以给对象的属性赋值。这些操作通常被称为 `getters` 以及 `setters`。

- `Getter` 函数的作用是可以让对象返回一个私有变量，而不需要直接去访问私有变量。
- `Setter` 函数的作用是可以基于传进的参数来修改对象中私有变量。 这些修改可以是计算，或者是直接替换之前的值
- **注意：** 通常会在私有变量前添加下划线（\_）。 然而，这种做法本身并不是将变量变成私有的。

## 正则表达式 惰性匹配

- 使用加号 + 查找一个或多个字符，使用星号 \* 查找零个或多个字符
- 贪婪（**greedy**）匹配会匹配到符合正则表达式匹配模式的字符串的最长可能部分，并将其作为匹配项返回。
- 懒惰（**lazy**）匹配，它会匹配到满足正则表达式的字符串的最小可能部分。 使用 ? 字符来将其变成懒惰匹配。

```js
const str = "titanic";
const Regex = /t[a-z]*i/; // 贪婪（greedy）匹配  返回["titani"]
const Regex = /t[a-z]*?i/; // 懒惰（lazy）匹配   返回["ti"]

// 可以使用问号 ? 指定可能存在的元素。
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
```

## 正向先行断言和负向先行断言

先行断言 （Lookaheads）是告诉 JavaScript 在字符串中向前查找的匹配模式。 当想要在同一个字符串上搜寻多个匹配模式时，这可能非常有用。

有两种先行断言：正向先行断言（positive lookahead）和负向先行断言（negative lookahead）。

正向先行断言会查看并确保搜索匹配模式中的元素存在，但实际上并不匹配。 正向先行断言的用法是 `(?=...)`，其中 ... 就是需要存在但不会被匹配的部分。

另一方面，负向先行断言会查看并确保搜索匹配模式中的元素不存在。 负向先行断言的用法是 `(?!...)`，其中 ... 是希望不存在的匹配模式。 如果负向先行断言部分不存在，将返回匹配模式的其余部分。

```js
let password = "abc123";
// 3 到 6 个字符且至少包含一个数字
let checkPass = /(?=\w{3,6})(?=\D*\d)/;

// 先行断言以匹配大于 5 个字符且有两个连续数字的密码
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;

// 正则去除字符串开头和结尾空白字符
let Regex = /^\s+|\s+$/g;
```

## 最佳实践

- 使用驼峰命名法（_camelCase_）来书写一个 Javascript 变量。 在驼峰命名法（_camelCase_）中，变量名的第一个单词的首写字母小写，后面的单词的第一个字母大写。
- 命名常量的常见做法是全部使用大写字母，单词之间用下划线分隔。

## this 关键字

this 指向的就是与这个方法有关联的 对象

在绝大多数情况下，函数的调用方式决定了 this 的值（运行时绑定）。this 不能在执行期间被赋值，并且在每次函数被调用时 this 的值也可能会不同。ES5 引入了 bind 方法来设置函数的 this 值，而不用考虑函数如何被调用的。ES2015 引入了箭头函数，箭头函数不提供自身的 this 绑定（this 的值将保持为闭合词法上下文的值）。

凡是通过构造函数创建出的新对象，这个对象都叫做这个构造函数的 `instance`。
JavaScript 提供了一种很简便的方法来验证这个事实，那就是通过 `instanceof` 操作符。 `instanceof` 允许你将对象与构造函数之间进行比较，根据对象是否由这个构造函数创建的返回 true 或者 false。

两种属性: 自身属性和 `prototype` 属性。 自身属性是直接在对象上定义的。 而原型属性在 `prototype` 上定义。

创建的实例对象 都有一个特殊的 `constructor` 属性, 是对创建这个实例的构造函数的一个引用。 `constructor` 属性的一个好处是可以通过检查这个属性来找出它是一个什么对象。

手动设置一个新对象的原型有一个重要的副作用。 它清除了 `constructor` 属性！需要在原型对象中定义一个 `constructor` 属性。

JavaScript 中所有的对象（除了少数例外）都有自己的 `prototype`。而且，对象的 `prototype` 本身也是一个对象。

Object 是 JavaScript 中所有对象的 `supertype`，也就是原型链的最顶层。 因此，所有对象都可以访问 `hasOwnProperty` 方法。

Object.create(obj) 创建了一个新对象，并指定了 obj 作为新对象的 prototype。

当一个对象从另一个对象那里继承了其 prototype 时，那它也继承了父类的 constructor 属性。

## 使用 Mixin 在不相关对象之间添加共同行为

## 使用闭包保护对象内的属性不被外部修改

- 使属性私有化最简单的方法就是在构造函数中创建变量。 可以将该变量范围限定在构造函数中，而不是全局可用。 这样，属性只能由构造函数中的方法访问和更改。

```js
function Bird() {
  let age = 10;

  this.getAge = function () {
    return age;
  };
}
```

## 函数式编程

函数式编程是一种方案简单、功能独立、对作用域外没有任何副作用的编程范式：INPUT -> PROCESS -> OUTPUT。

函数式编程：

1）功能独立——不依赖于程序的状态（比如可能发生变化的全局变量）；

2）纯函数——同一个输入永远能得到同一个输出；

3）有限的副作用——可以严格地限制函数外部对状态的更改。

## 函数式编程术语

- 函数就像其他正常值一样，可以赋值给变量、传递给另一个函数，或从其它函数返回，这种函数叫做头等 _first class_ 函数。 在 `JavaScript` 中，所有函数都是头等函数。
- 将函数为参数或返回值的函数叫做高阶 ( _higher order_) 函数。
- 当函数被传递给另一个函数或从另一个函数返回时，那些传入或返回的函数可以叫做 _lambda_。

## 原型上实现 map 方法

`map` 是一个纯函数，它的输出仅取决于输入的数组和作为参数传入的回调函数。 此外，它接收另一个函数作为它的参数。

```js
// 使用参数解构，标题和评级被提取并返回到一个对象中。需要括号来返回一个对象。
List.map(({ Title: title, imdbName: name }) => ({ title, name }));
```

```js
// 全局变量
const s = [23, 65, 98, 5];
// 利用 for
Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

// 利用foreach
Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Add your code below this lineF
  this.forEach((a) => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});
```

## 原型上实现 filter 方法

```js
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});
```

## ~ 运算符

`~` 运算符即字位操作“非”，作为强制类型转换。 `~x` 大致等于`-(x+1)`

```js
~42; // -(42+1) ===> -43
```

在`-(x+1)` 中唯一能够得到 0（或者严格说是-0）的`x`值是-1。-1 是一个“哨位值”， 赋予特殊含义。
**JavaScript** 中字符串的`indexOf(..)`方法也遵守这一惯例，在字符串中搜索指定的子字符串，如果找到就返回子字符串所在的位置（从 0 开始），否则返回`-1`

```js
var a = "Hello World";
// true
if (a.indexOf("lo") > 0) {
  // 找到匹配
}

// true
if (a.indexOf("lo") != -1) {
  // 找到匹配
}

~a.indexOf("lo"); // -4  <=== 真值
~a.indexOf("ol"); // 0  <=== 假值

// 如果返回-1 ~将其转化为假值0.其他区情况一律转为真值
```

## + 运算符

`+` 运算符会将操作数显式强制类型转化为数字。也可以显式将日期转化为数字。

```js
var a = "3.14";
console.log(+a);

var d = new Date();
console.log(+d);
```

## !! 运算符

`!!` 运算符显式强制类型转化为布尔值。

```js
var a = "0";
var b = [];
var c = {};
var d = "";
var e = 0;
var f = null;
var g;

!!a; // true
!!b; // true
!!c; // true

!!d; // false
!!e; // false
!!f; // false
!!g; // false
```

## || 运算符 和 && 运算符

它们的返回值是两个操作数中的一个（且仅一个）。即选择两个操作数中的一个，然后返回它的值。

```js
var a = 42;
var b = "abc";
var c = null;

a || b; // 42
a && b; // "abc"

c || b; // "abc"
c && b; // null
```

## 柯里化

柯里化就是将接收多个参数的函数转换成接收一个参数的函数。将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)。

```js
function discount(discount) {
    return (price) => {
        return price * discount;
    }
}
const tenPercentDiscount = discount(0.1);
tenPercentDiscount(500)
```

用于多参数函数的“高级”柯里化实现

```js
function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log( curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
console.log( curriedSum(1)(2,3) ); // 6，对第一个参数的柯里化
console.log( curriedSum(1)(2)(3) ); // 6，全柯里化
```
