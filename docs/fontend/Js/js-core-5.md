---
title: 其它
autoGroup-1: JS 核心
---

## ES6+

JavaScript 标准的官方名称是“ECMAScript”（简称“ES”），直到最近都是用有序数字来标识版本的，例如“5”表示“第 5 版”。

下一个 JavaScript 版本（发布日期从 2013 年拖到 2014 年，然后又到 2015 年）标签，之前的共识显然是 ES6。但是，在 ES6 规范发展后期，出现了这样的方案：有人建议未来的版本应该改成基于年份，比如 ES2016（也就是 ES7）来标示在 2016 年结束之前敲定的任何版本的规范。尽管有异议，但比起后来提出的方案 ES2015，很可能保持统治地位的版本命名仍是 ES6。而 ES2016 可能会采用新的基于年份的命名方案。

### let、const

- ES6 中引入了一个名为 let 的关键字，这是对 JavaScript 的一次重大更新，以解决与 var 关键字有关的潜在问题。同名的变量只能声明一次。
- const 关键字声明只读变量。始终使用 const 关键字命名不想重新分配的变量。
  > Tips：使用 `const` 分配给变量的对象（包括数组和函数）仍然是可变的, 使用 const 声明只能防止变量标识符的重新分配。这个值并没有因为 `const` 被锁定或者不可变，只是赋值本身不可变。

```js
{
  const a = [1, 2, 3];
  a.push(4);
  console.log(a); // [1,2,3,4]
  a = 42; // TypeError!
}
```

### spread/rest

`ES6` 引入了一个新的运算符 `...`，通常称为 `spread` 或 `rest`（**展开或收集**）运算符，取决于它在哪 / 如何使用。

`spread` 展开操作符，可以展开数组以及需要多个参数或元素的表达式。

```js
var a = [2, 3, 4];
var b = [1, ...a, 5];
console.log(b); // [1,2,3,4,5]
```

> `...arr` 返回一个解压的数组。展开操作符只能够在函数的参数中或者数组中使用。

`rest` 操作符可以用于创建有一个变量来接受多个参数的函数。 这些参数被储存在一个可以在函数内部读取的数组中。

```js
// foo(..) 函数声明中的 ...args 通常称为“rest 参数”，因为这里是在收集其余的参数。
const func = (...args) => {
  console.log(args.length);
};

foo(1, 2, 3, 4, 5); // [1,2,3,4,5]
```

### 默认参数值

JavaScript 最常见的一个技巧就是关于设定函数参数默认值的。

```js
function foo(x = 11, y = 31) {
  console.log(x + y);
}
foo(); // 42
foo(5, 6); // 11
foo(0, 42); // 42
foo(5); // 36
foo(5, undefined); // 36 <-- 丢了undefined
foo(5, null); // 5 <-- null被强制转换为0
foo(undefined, 6); // 17 <-- 丢了undefined
foo(null, 6); // 6 <-- null被强制转换为0
```

### 解构赋值

解构赋值是 `ES6` 引入的新语法，用来从数组和对象中提取值，并优雅地对变量进行赋值。

```js
const user = { name: "John Doe", age: 34 };
const { name, age } = user;
// 这里的语法模式是 souce: target（或者说是 value:variable-alias)。
const { name: userName, age: userAge } = user;

var x = 10,
  y = 20;
[y, x] = [x, y];
console.log(x, y); // 20 10

// 嵌套解构
var a1 = [1, [2, 3, 4], 5];
var o1 = { x: { y: { z: 6 } } };
var [a, [b, c, d], e] = a1;
var {
  x: {
    y: { z: w },
  },
} = o1;
console.log(a, b, c, d, e); // 1 2 3 4 5
console.log(w); // 6
```

### 计算属性名

ES6 对对象字面定义新增了一个语法，用来支持指定一个要计算的表达式，其结果作为属性名。

```js
// 对象字面定义属性名位置的 [ .. ] 中可以放置任意合法表达式。
var prefix = "user_";
var o = {
 baz: function(..){ .. },
 [ prefix + "foo" ]: function(..){ .. },
 [ prefix + "bar" ]: function(..){ .. }

};

// 计算属性名最常见的用法可能就是和 Symbols 共同使用
var o = {
 [Symbol.toStringTag]: "really cool thing",
};

// Symbol.toStringTag 是一个特殊的内置值，用 [ .. ] 语法为其求值，所以可以把值 "really cool thing" 赋给这个特殊的属性名。

// 计算属性名也可以作为简洁方法或者简洁生成器的名称出现：
var o = {
 ["f" + "oo"]() { .. } // 计算出的简洁方法
 *["b" + "ar"]() { .. } // 计算出的简洁生成器
};
```

### 模板字面量

ES6 引入了一个新的字符串字面量，使用 **_`_** 作为界定符。这样的字符串字面值支持嵌入基本的字符串插入表达式，会被自动解析和求值。

```js
var name = "Kyle";
var greeting = `Hello ${name}!`;
console.log(greeting); // "Hello Kyle!"
console.log(typeof greeting); // "string"
```

### 箭头函数

箭头函数定义包括一个参数列表（零个或多个参数，如果参数个数不是一个的话要用 `( .. )`包围起来），然后是标识 `=>`，函数体放在最后

`=>` 箭头函数的主要设计目的就是以特定的方式改变 `this` 的行为特性

```js
var f1 = () => 12;
var f2 = (x) => x * 2;
var f3 = (x, y) => {
  var z = x * 2 + y;
  y++;
  x *= 3;
  return (x + y + z) / 2;
};
```

> 箭头函数支持普通函数参数的所有功能，包括默认值、解构、`rest` 参数，等等。

### for..of 循环

`for..of` 循环的值必须是一个 `iterable`，或者说它必须是可以转换 / 封箱到一个 `iterable` 对象的值。`iterable` 就是一个能够产生迭代器供循环使用的对象。

```js
// for..of 和 for..in 其中的区别
var a = ["a", "b", "c", "d", "e"];

for (var idx in a) {
  // 0 1 2 3 4
  console.log(idx);
}

for (var val of a) {
  // "a" "b" "c" "d" "e"
  console.log(val);
}
```

在底层，`for..of` 循环向 `iterable` 请求一个迭代器，然后反复调用这个迭代器把它产生的值赋给循环迭代变量。

`JavaScript` 中默认为（或提供）`iterable` 的标准内建值包括：

- Arrays
- Strings
- Generators
- Collections / TypedArrays

> 默认情况下平凡对象并不适用 `for..of` 循环。因为它们并没有默认的迭代器，这是有意设计的特性，而不是错误。

### 正则表达式

(1) **Unicode 标识**

ES6+ 正则表达式新的 `u` 标识，这个标识会为表达式打开 `Unicode` 匹配。

JavaScript 字符串通常被解释成 16 位字符序列，这些字符对应基本多语言平面中的字符。但还有很多 UTF-16 字符在这个范围之外，所以字符串中还可能包含这些多字节字符。

在 `ES6` 之前，正则表达式只能基于 `PMB` 字符匹配，这意味着那些扩展字符会被当作两个独立的字符来匹配。通常这不是理想的做法。所以，在 `ES6` 中，`u` 标识符表示正则表达式用 `Unicode（UTF-16）`字符来解释处理字符串，把这样的扩展字符当作单个实体来匹配。 [ES2015 中的 Unicode 正则表达式](https://mathiasbynens.be/notes/es6-unicode-regex)

```js
//  音乐符号 （高音符号）是 Unicode 码点为 U+1D11E（0x1D11E）
/𝄞/.test("𝄞-clef"); // true

/^.-clef/.test("𝄞-clef"); // false
/^.-clef/u.test("𝄞-clef"); // true
```

(2) **定点标识**

`ES6` 正则表达式中另外一个新增的标签模式是 `y`，通常称为“`定点（sticky）模式`”。定点主要是指在正则表达式的起点有一个虚拟的锚点，只从正则表达式的 `lastIndex` 属性指定的位置开始匹配。

- 没有定点模式的

```js
//
var re1 = /foo/,
  str = "++foo++";

re1.lastIndex; // 0
re1.test(str); // true
re1.lastIndex; // 0--没有更新

re1.lastIndex = 4;
re1.test(str); // true--被忽略的lastIndex
re1.lastIndex; // 4--没有更新

// test(..) 并不关心 lastIndex 的值，总是从输入字符串的起始处开始执行匹配。
// 模式并没有起始锚点 ^，对 "foo" 的搜索从整个字符串向前寻找匹配。
// test(..) 不更新 lastIndex。
```

- 定点模式正则表达式

```js
var re2 = /foo/y, // <-- 注意定点标识y
  str = "++foo++";
re2.lastIndex; // 0
re2.test(str); // false--0处没有找到"foo"
re2.lastIndex; // 0

re2.lastIndex = 2;
re2.test(str); // true
re2.lastIndex; // 5--更新到前次匹配之后位置
re2.test(str); // false
re2.lastIndex; // 0--前次匹配失败后重置

// test(..) 使用 lastIndex 作为 str 中精确而且唯一的位置寻找匹配。不会向前移动去寻找匹配——要么匹配位于 lastIndex 位置上，要么就没有匹配。
// 如果匹配成功，test(..) 会更新 lastIndex 指向紧跟匹配内容之后的那个字符。如果匹配失败，test(..) 会把 lastIndex 重置回 0。
```

一般的没有用 `^` 限制输入起始点匹配的非定点模式可以自由地在输入字符串中向前移动寻找匹配内容。而定点模式则限制了模式只能从 `lastIndex` 开始匹配。

(3) **正则表达式 flags**

在 `ES6` 之前，如果想要通过检查一个正则表达式对象来判断它应用了那些标识，需要把它从 `source` 属性的内容中解析出来

```js
// ES6 之前
var re = /foo/gi;
re.toString(); // "/foo/ig"
var flags = re.toString().match(/\/([gim]*)$/)[1];
flags; // "ig"

// ES6 之后
var re = /foo/gi;
re.flags; // "gi"
```

### 数字字面量扩展

新的 `ES6` 数字字面量形式

```js
var dec = 42,
  oct = 0o52, // 或者0O52 :(
  hex = 0x2a, // 或者0X2a :/
  bin = 0b101010; // 或者0B101010 :/

// 唯一合法的小数形式是十进制的。八进制、十六进制和二进制都是整数形式。
// 这些形式的字符串表示都可以强制类型转换 / 变换成相应的数字值：

Number("42"); // 42
Number("0o52"); // 42
Number("0x2a"); // 42

// 反向转换
var a = 42;
a.toString(); // "42"--也可以用a.toString( 10 )
a.toString(8); // "52"
a.toString(16); // "2a"
a.toString(2); // "101010
```

### 符号

`ES6` 为 `JavaScript` 引入了一个新的原生类型：`symbol`, 和其他原生类型不一样，`symbol` 没有字面量形式。

```js
var sym = Symbol("some optional description");
typeof sym; // "symbol"

sym.toString(); // "Symbol(some optional description)"

// 构造一个 symbol 值的装箱封装对象形式
sym instanceof Symbol; // false
var symObj = Object(sym);
symObj instanceof Symbol; // true
symObj.valueOf() === sym; // true
```

- 不能也不应该对 `Symbol(..)` 使用 `new`。它并不是一个构造器，也不会创建一个对象。
- 传给 `Symbol(..)` 的参数是可选的。如果传入了的话，应该是一个为这个 `symbol` 的用途给出用户友好描述的字符串。
- `typeof` 的输出是一个新的值 `("symbol")`，这是识别 `symbol` 的首选方法。

符号的主要意义是创建一个类 ( 似 ) 字符串的不会与其他任何值冲突的值。

```js
// 使用一个符号作为事件名的常量
const EVT_LOGIN = Symbol("event.login");

evthub.listen(EVT_LOGIN, function (data) {
  // ..
});

// 这里的好处是 EVT_LOGIN 持有一个不可能与其他值（有意或无意）重复的值，所以这里分发或处理的事件不会有任何混淆。
```

可以在对象中直接使用符号作为**属性名 / 键值**，比如用作一个特殊的想要作为隐藏或者元属性的属性。

```js
// 实现了单例（singleton）模式的模块，它只允许自己被创建一次
const INSTANCE = Symbol( "instance" );

function HappyFace() {
 if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];
 function smile() { .. }
 return HappyFace[INSTANCE] = {
    smile: smile
 };
}

var me = HappyFace(), you = HappyFace();

me === you; // true

me.smile()

// 这里的 INSTANCE 符号值是一个特殊的、几乎隐藏的、类似元属性的属性，静态保存在 HappeyFace() 函数对象中。
```

- 符号注册

符号注册为这些值提供了全局存储，可以通过全局符号注册（global symbol registry）创建这些符号值。

```js
const EVT_LOGIN = Symbol.for( "event.login" );
console.log( EVT_LOGIN ); // Symbol(event.login)

function HappyFace() {
 const INSTANCE = Symbol.for( "instance" );
 if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];
 // ..
 return HappyFace[INSTANCE] = { .. };
}
```

`Symbol.for(..)` 在全局符号注册表中搜索，来查看是否有描述文字相同的符号已经存在，如果有的话就返回它。如果没有的话，会新建一个并将其返回。换句话说，全局注册表把符号值本身根据其描述文字作为单例处理。

可以使用 `Symbol.keyFor(..)` 提取注册符号的描述文本（键值）：

```js
var s = Symbol.for("something cool");
var desc = Symbol.keyFor(s);
console.log(desc); // "something cool"

// 再次从注册中取得符号
var s2 = Symbol.for(desc);
s2 === s; // true
```

- 作为对象属性的符号

如果把符号用作对象的**属性 / 键值**，那么它会以一种特殊的方式存储，使得这个属性不出现在对这个对象的一般属性枚举中

```js
var o = {
  foo: 42,
  [Symbol("bar")]: "hello world",
  baz: true,
};
Object.getOwnPropertyNames(o); // [ "foo","baz" ]

// 要取得对象的符号属性：
Object.getOwnPropertySymbols(o); // [ Symbol(bar) ]
```

## 迭代器

迭代器（iterator）是一个结构化的模式，用于从源以一次一个的方式提取数据。`ES6` 实现的是为迭代器引入一个隐式的标准化接口。

### 接口

在 `JavaScript` 期望迭代器的位置 ( 比如 `for..of` 循环 ) 所提供的东西必须符合这些接口，否则代码会失败。

```js
Iterator [required]
 next() {method}: 取得下一个IteratorResult

// 有些迭代器还扩展支持两个可选成员：
Iterator [optional]
 return() {method}: 停止迭代器并返回IteratorResult
 throw() {method}: 报错并返回IteratorResult

// IteratorResult 接口指定如下：
IteratorResult
 value {property}: 当前迭代值或者最终返回值（如果undefined为可选的）
 done {property}: 布尔值，指示完成状态

还有一个 Iterable 接口，用来表述必需能够提供生成器的对象：
  Iterable
    @@iterator() {method}: 产生一个 Iterator

  @@iterator 是一个特殊的内置符号，表示可以为这个对象产生迭代器的方法。

IteratorResult
  IteratorResult 接口指定了从任何迭代器操作返回的值必须是下面这种形式的对象：{ value: .. , done: true / false }
```

内置迭代器总是返回这种形式的值，当然如果需要的话，返回值还可以有更多的属性。

### next() 迭代

```js
// 每次在这个 arr 值上调用位于 Symbol.iterator 的方法时，都会产生一个全新的迭代器。多数结构都是这么实现的，包括所有 JavaScript 内置数据结构。
var arr = [1, 2, 3];
var it = arr[Symbol.iterator]();
it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: undefined, done: true }
```

通用的惯例是，包括所有内置迭代器，在已经消耗完毕的迭代器上调用 `next(..)` 不会出错，而只是简单地继续返回结果 `{ value: undefined, done: true }`。

### 可选的 return(..) 和 throw(..)

多数内置迭代器都没有实现可选的迭代器接口 —— `return(..)` 和 `throw(..)`。

`return(..)` 被定义为向迭代器发送一个信号，表明消费者代码已经完毕，不会再从其中提取任何值。

如果迭代器存在 `return(..)`，并且出现了任何可以自动被解释为异常或者对迭代器消耗的提前终止的条件，就会自动调用 `return(..)`。也可以手动调用 `return(..)`。

`return(..)` 就像 `next(..)` 一样会返回一个 `IteratorResult` 对象。

`throw(..)` 用于向迭代器报告一个异常 / 错误，迭代器针对这个信号的反应可能不同于针对 `return(..)` 意味着的完成信号。

通过生成器迭代器，`throw(..)` 实际上向生成器的停滞执行上下文中插入了一个抛出的异常，这个异常可以用 `try..catch` 捕获。未捕获的 `throw(..)` 异常最终会异常终止生成器迭代器。

通用的惯例是，迭代器不应该在调用 `return(..)` 或者 `throw(..)` 之后再产生任何值。

### 迭代器循环

如果一个迭代器也是一个 `iterable`，那么它可以直接用于 `for..of` 循环。可以通过为迭代器提供一个 `Symbol.iterator` 方法简单返回这个迭代器本身使它成为 `iterable`：

```js
var it = {
 // 使迭代器it成为iterable
 [Symbol.iterator]() { return this; },
 next() { .. },
 ..
};
it[Symbol.iterator]() === it; // true


for (var v of it) {
 console.log( v );
}

// 等价 for 形式
for (var v, res; (res = it.next()) && !res.done; ) {
 v = res.value;
 console.log( v );
}
```

每次迭代之前都调用了 `it.next()`，然后查看一下 `res.done`。如果 `res.done` 为 `true`，表达式求值为 `false`，迭代就不会发生。

### 自定义迭代器

```js
// 构造一个迭代器来产生一个无限斐波纳契序列
var Fib = {
  [Symbol.iterator]() {
    var n1 = 1,
      n2 = 1;
    return {
      // 使迭代器成为iterable
      [Symbol.iterator]() {
        return this;
      },
      next() {
        var current = n2;
        n2 = n1;
        n1 = n1 + current;
        return { value: current, done: false };
      },
      return(v) {
        console.log("Fibonacci sequence abandoned.");
        return { value: v, done: true };
      },
    };
  },
};

for (var v of Fib) {
  console.log(v);
  if (v > 50) break;
}
// 1 1 2 3 5 8 13 21 34 55
// Fibonacci sequence abandoned.
```

```js
// 在一系列（也就是一个队列）动作上运行，一次一个条目：
var tasks = {
  [Symbol.iterator]() {
    var steps = this.actions.slice();
    return {
      // 使迭代器成为iterable
      [Symbol.iterator]() {
        return this;
      },
      next(...args) {
        if (steps.length > 0) {
          let res = steps.shift()(...args);
          return { value: res, done: false };
        } else {
          return { done: true };
        }
      },
      return(v) {
        steps.length = 0;
        return { value: v, done: true };
      },
    };
  },
  actions: [],
};

tasks.actions.push(
  function step1(x) {
    console.log("step 1:", x);
    return x * 2;
  },
  function step2(x, y) {
    console.log("step 2:", x, y);
    return x + y * 2;
  },
  function step3(x, y, z) {
    console.log("step 3:", x, y, z);
    return x * y + z;
  }
);

var it = tasks[Symbol.iterator]();
it.next(10); // step 1: 10
// { value: 20, done: false }
it.next(20, 50); // step 2: 20 50
// { value: 120, done: false }
it.next(20, 50, 120); // step 3: 20 50 120
// { value: 1120, done: false }
it.next(); // { done: true }
```

## 生成器

生成器可以在执行当中暂停自身，可以立即恢复执行也可以过一段时间之后恢复执行。

### 语法

```
// 声明生成器函数
function *foo() {
  // ..
}

从功能上来说，* 的位置无所谓。同样的声明可以写作

function *foo() { .. }
function* foo() { .. }
function * foo() { .. }
function*foo() { .. }
```

在对象字面量中有一种简洁生成器形式

```js

var a = {
 *foo() { .. }
};
```

1.  运行生成器

    尽管生成器用 `*` 声明，但执行起来还和普通函数一样 `foo()`;

    ```js
    function* foo(x, y) {
      // ..
    }

    foo(5, 10);

    // 主要的区别是，执行生成器，并不实际在生成器中运行代码。相反，它会产生一个迭代器控制这个生成器执行其代码。

    var it = foo();
    // 要启动/继续*foo()，调用it.next(..)
    ```

2.  yield

    生成器还有一个可以在其中使用的新关键字，用来标示暂停点：`yield`。

    ```js
    function* foo() {
      var x = 10;
      var y = 20;
      yield;
      var z = x + y;
    }
    ```

    `yield` 不只是一个暂停点。它是一个表达式，在暂停生成器的时候发出一个值。

    `yield..` 和像 `a = 3` 这样的赋值表达式有同样的 **“表达式优先级”** ——类似于运算符优先级的概念。

    ```js
    var a, b;
    a = 3; // 合法
    b = 2 + a = 3; // 不合法
    b = 2 + (a = 3); // 合法
    yield 3; // 合法
    a = 2 + yield 3; // 不合法
    a = 2 + (yield 3); // 合法
    ```

    因为 `yield` 关键字的优先级很低，几乎 `yield..` 之后的任何表达式都会首先计算，然后再通过 `yield` 发送。只有 `spread` 运算符 `...` 和逗号运算符, 拥有更低的优先级，也就是说它们会在 `yield` 已经被求值之后才会被绑定。

    ```js
    yield 2 + 3; // 等价于yield (2 + 3)
    (yield 2) + 3; // 首先yield 2，然后+ 3
    ```

3.  **yield\***

    `*` 使得一个 `function` 声明成了 `function*` 生成器声明， 类似地，`*` 使得 `yield` 成为了 `yield *`，这是一个完全不同的机制，称为 **yield 委托**（yield delegation）。

    `yield * ..` 需要一个 `iterable`；然后它会调用这个 `iterable` 的迭代器，把自己的生成器控制委托给这个迭代器，直到其耗尽。

    ```js
    function* foo() {
      yield* [1, 2, 3];
    }
    // 值 [1,2,3] 产生了一个迭代器，一步输出一个值，所以 *foo() 生成器会随着消耗这些值把它们 yield 出来。

    function* foo() {
      yield 1;
      yield 2;
      yield 3;
    }

    function* bar() {
      yield* foo();
    }

    var it = bar();
    it.next();  {value: 1, done: false}
    ```

    因为 `yield *` 可以调用另外一个生成器（通过委托到其迭代器），所以它也可以通过调用自身执行某种生成器递归：

    ```js
    function* foo(x) {
      debugger;
      if (x < 3) {
        x = yield* foo(x + 1);
      }
      return x * 2;
    }
    var it = foo(1);
    it.next(); // {value: 24, done: true}

    // foo(1) 以及之后的调用迭代器的 next() 来运行递归步骤的结果是 24。第一个 *foo(..) 运行 x 值为 1，满足 x < 3。x + 1 被递归地传给 *foo(..)，所以这一次 x 为 2。再次的递归调用使得 x 值为 3 。现在，因为不满足 x < 3，递归停止，返回 3 * 2 也就是 6 给前一个调用的 yield *.. 表达式，这个值被赋给 x。再次返回 6 * 2 的结果 12 给前一次调用的 x。最后是 12 * 2，也就是 24，返回给 *foo() 生成器的完成结果。
    // yield * 只是通过递归调用保存当前的迭代步骤。所以，只要一次调用迭代器的 next() 函数就运行了整个生成器。
    ```

## 模块

传统的模块模式基于一个带有内部变量和函数的外层函数，以及一个被返回的 **“public API”**，这个 **“public API”** 带有对内部数据和功能拥有闭包的方法。

```js
function Hello(name) {
  function greeting() {
    console.log("Hello " + name + "!");
  }
  // public API
  return {
    greeting: greeting,
  };
}
var me = Hello("Kyle");
me.greeting(); // Hello Kyle!
```

常用的是**异步模块定义**（Asynchronous Module Definition，AMD），还有一种是**通用模块定义**（Universal Module Definition，UMD）

支撑 `ES6` 模块的两个主要新关键字是 `import` 和 `export`

### 导出 API

`export` 关键字或者是放在声明的前面，或者是作为一个操作符（或类似的）与一个要导出的绑定列表一起使用。

```js
// 这些都称为命名导出（named export），因为导出变量 / 函数等的名称绑定。

export function foo() {
  // ..
}
export var awesome = 42;
var bar = [1, 2, 3];
export { bar };

function foo() {
  // ..
}
var awesome = 42;
var bar = [1, 2, 3];
export { foo, awesome, bar };
```

在命名导出时还可以“重命名”（也即别名）一个模块成员：

```js
function foo() { .. }
export { foo as bar };
```

尽管显然可以在模块定义内部多次使用 `export`，ES6 绝对倾向于一个模块使用一个`export`，称之为**默认导出**（default export）。每个模块定义只能有一个 `default`。

```js
function foo(..) {
 // ..
}
export default foo;

export { foo as default };
```

混用默认和命名导出

```js
export default function foo() { .. }
export function bar() { .. }
export function baz() { .. }

function foo() { .. }
function bar() { .. }
function baz() { .. }
export { foo as default, bar, baz, .. };

```

### 导入 API

使用 `import` 语句导入模块。如果想导入一个模块 `API` 的某个特定命名成员到你的顶层作用域，可以使用下面语法

```js
// 字符串 "foo" 称为模块指定符（module specifier）。因为整体目标是可静态分析的语法，模块指定符必须是字符串字面值，而不能是持有字符串值的变量。
import { foo, bar, baz } from "foo";

// 重命名
import { foo as theFooFunc } from "foo";

// 如果这个模块只有一个想要导入并绑定到一个标识符的默认导出，绑定时可以省略包围的 { .. } 语法。
import foo from "foo";
// 或者：
import { default as foo } from "foo";
```

`import` 语句有一种语法变体可以支持这种模块导入，称为**命名空间导入（namespace import）**。

```js
import * as foo from "foo";

foo.abc();
```

## 类

新的 `ES6` 类机制的核心是关键字 `class`，表示一个块，其内容定义了一个函数原型的成员。

```js
// class Foo 表明创建一个（具体的）名为 Foo 的函数
// constructor(..) 指定 Foo(..) 函数的签名以及函数体内容
class Foo {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }
  gimmeXY() {
    return this.x * this.y;
  }
}
```

ES6 类还通过面向类的常用术语 `extends` 提供了一个语法糖，用来在两个函数原型之间建立 `[[Prototype]]` 委托链接——通常被误称为 **“继承”** 或者令人迷惑地标识为 **“原型继承”**

```js
// 在构造器中，super 自动指向“父构造器”。在方法中，super 会指向“父对象”，这样就可以访问其属性 / 方法了，比如 super.gimmeXY()。
// Bar extends Foo 的意思当然就是把 Bar.prototype 的 [[Prototype]] 连接到 Foo.prototype。
class Bar extends Foo {
  constructor(a, b, c) {
    super(a, b);
    this.z = c;
  }
  gimmeXYZ() {
    return super.gimmeXY() * this.z;
  }
}
var b = new Bar(5, 15, 25);
b.x; // 5
b.y; // 15
b.z; // 25
b.gimmeXYZ(); // 1875
```

## 集合

### TypedArray

带类型的数组更多是为了使用类数组语义（索引访问等）结构化访问二进制数据。名称中的 **“type( 类型 )”** 是指看待一组位序列的“视图”，本质上就是一个映射。

### Map

对象是创建无序键 / 值对数据结构 [ 也称为映射（map）] 的主要机制。对象作为映射的主要缺点是不能使用非字符串值作为键。

```js
var m = new Map():
var x = { id: 1 },
 y = { id: 2 };

m.set( x, "foo" );
m.set( y, "bar" );
m.get( x ); // "foo"
m.get( y ); // "bar"

// 这里唯一的缺点就是不能使用方括号 [ ] 语法设置和获取值，但完全可以使用 get(..) 和 set(..) 方法完美代替
// 要从 map 中删除一个元素，不要使用 delete 运算符，而是要使用 delete() 方法

m.set( x, "foo" );
m.set( y, "bar" );

m.delete( y );

m.set( x, "foo" );
m.set( y, "bar" );

// 获取 map 的长度
m.size; // 2
// 通过 clear() 清除整个 map 的内容
m.clear();
m.size; // 0
```

`Map(..)` 构造器也可以接受一个 `iterable`，这个迭代器必须产生一列数组，每个数组的第一个元素是键，第二个元素是值。

```js
var m2 = new Map(m.entries());
// 等价于：
var m2 = new Map(m);
```

要从 map 中得到一列值，可以使用 `values(..)`，它会返回一个迭代器。

```js
var m = new Map();
var x = { id: 1 },
  y = { id: 2 };
m.set(x, "foo");
m.set(y, "bar");
var vals = [...m.values()];
vals; // ["foo","bar"]
Array.from(m.values()); // ["foo","bar"]
```

要得到一列键，可以使用 `keys()`，它会返回 `map` 中键上的迭代器

```js
var m = new Map();
var x = { id: 1 },
  y = { id: 2 };

m.set(x, "foo");
m.set(y, "bar");
var keys = [...m.keys()];
keys[0] === x; // true
keys[1] === y; // true

// 要确定一个 map 中是否有给定的键，可以使用 has(..) 方法
m.has(x); // true
m.has(y); // true
```

### WeakMap

`WeakMap` 是 `map` 的变体，二者的多数外部行为特性都是一样的，区别在于内部内存分配（特别是其 GC）的工作方式。

`WeakMap` （只）接受对象作为键。这些对象是被弱持有的，也就是说如果对象本身被垃圾回收的话，在 `WeakMap` 中的这个项目也会被移除。

```js
var m = new WeakMap();
var x = { id: 1 },
  y = { id: 2 };

m.set(x, "foo");
m.has(x); // true
m.has(y); // false
```

`WeakMap` 没有 `size` 属性或 `clear()` 方法，也不会暴露任何键、值或项目上的迭代器。

```js
// WeakMap 只是弱持有它的键，而不是值。
var m = new WeakMap();

var x = { id: 1 },
  y = { id: 2 },
  z = { id: 3 },
  w = { id: 4 };

m.set(x, y);

x = null; // { id: 1 } 可GC
y = null; // { id: 2 } 可GC
// 只因 { id: 1 } 可GC

m.set(z, w);

w = null;
```

### Set

`set` 是一个值的集合，其中的值唯一（重复会被忽略）

```js
var s = new Set();
var x = { id: 1 },
  y = { id: 2 };

s.add(x);
s.add(y);
s.add(x);

s.size; // 2

s.delete(y);
s.size; // 1

s.clear();
s.size; // 0
```

`Set(..)` 接受的是值（value）列表（值的数组）

```js
var x = { id: 1 },
  y = { id: 2 };
var s = new Set([x, y]);
```

`set` 不需要 `get(..)` 是因为不会从集合中取一个值，而是使用 `has(..)` 测试一个值是否存在

```js
var s = new Set();
var x = { id: 1 },
  y = { id: 2 };
s.add(x);
s.has(x); // true
s.has(y); // false
```

`set` 默认的迭代器是它的 `values()` 迭代器。`set` 固有的唯一性是它最有用的特性。

```js
var s = new Set();
var x = { id: 1 },
  y = { id: 2 };

s.add(x).add(y);

var keys = [...s.keys()],
  vals = [...s.values()],
  entries = [...s.entries()];

keys[0] === x;
keys[1] === y;
vals[0] === x;
vals[1] === y;
entries[0][0] === x;
entries[0][1] === x;
entries[1][0] === y;
entries[1][1] === y;

// set 的唯一性不允许强制转换，所以 1 和 "1" 被认为是不同的值。
var s = new Set([1, 2, 3, 4, "1", 2, 4, "5"]),
  uniques = [...s];
uniques; // [1,2,3,4,"1","5"]
```

### WeakSet

就像 `WeakMap` 弱持有它的键（对其值是强持有的）一样，`WeakSet` 对其值也是弱持有的（这里并没有键）

```js
// WeakSet 的值必须是对象，而并不像 set 一样可以是原生类型值。
var s = new WeakSet();
var x = { id: 1 },
  y = { id: 2 };

s.add(x);
s.add(y);
x = null; // x可GC
y = null; // y可GC
```

## 新增 API

### Array

#### 静态函数 `Array.of(..)`

`Array(..)` 构造器有一个众所周知的陷阱，就是如果只传入一个参数，并且这个参数是数字的话，那么不会构造一个值为这个数字的单个元素的数组，而是构造一个空数组，其 `length` 属性为这个数字。

`Array.of(..)` 取代了 `Array(..)` 成为数组的推荐函数形式构造器，因为 `Array.of(..)` 并没有这个特殊的单个数字参数的问题。

```js
var a = Array(3);
a.length; // 3
a[0]; // undefined

var b = Array.of(3);
b.length; // 1
b[0]; // 3

var c = Array.of(1, 2, 3);
c.length; // 3
c; // [1,2,3]
```

#### 静态函数 Array.from(..)

`JavaScript` 中的 **“类（似）数组对象”** 是指一个有 `length` 属性，具体说是大于等于 0 的整数值的对象。

`Array.from(..)` 检查第一个参数是否为 `iterable`，如果是的话，就使用迭代器来产生值并“复制”进入返回的数组。

```js
// 类数组对象
var arrLike = {
  length: 3,
  0: "foo",
  1: "bar",
};

var arr = Array.prototype.slice.call(arrLike);

// 复制产生一个真正的数组
var arr2 = arr.slice();

var arr = Array.from(arrLike);
var arrCopy = Array.from(arr);
```

初始化为某个长度，在每个槽位上都是真正的 undefined 值（不是空槽位！）的数组。

```js
var a = Array(4); // 4个空槽位！

var b = Array.apply(null, { length: 4 }); // 4个undefined值

var c = Array.from({ length: 4 }); // 4个undefined值
```

`Array.from(..)` 的第二个参数是一个映射回调，这个函数会被调用，来把来自于源的每个值映射 / 转换到返回值。

```js
var arrLike = {
  length: 4,
  2: "foo",
};
Array.from(arrLike, function mapper(val, idx) {
  if (typeof val == "string") {
    return val.toUpperCase();
  } else {
    return idx;
  }
});
// [ 0, 1, "FOO", 3 ]
```

#### 原型方法 copyWithin(..)

`Array#copyWithin(..)` 是一个新的修改器方法，所有数组都支持。`copyWithin(..)` 从一个数组中复制一部分到同一个数组的另一个位置，覆盖这个位置所有原来的值。

参数是 `target`（要复制到的索引）、`start`（开始复制的源索引，包括在内）以及可选的 `end`（复制结束的不包含索引）。如果任何一个参数是负数，就被当作是相对于数组结束的相对值。

```js
// copyWithin(..) 方法不会增加数组的长度。到达数组结尾复制就会停止。
[1, 2, 3, 4, 5].copyWithin(3, 0); // [1,2,3,1,2]
[1, 2, 3, 4, 5].copyWithin(3, 0, 1); // [1,2,3,1,5]
[1, 2, 3, 4, 5].copyWithin(0, -2); // [4,5,3,4,5]
[1, 2, 3, 4, 5].copyWithin(0, -2, -1); // [4,2,3,4,5]
```

#### 原型方法 fill(..)

`ES6` 原生支持的方法 `Array#fill(..)` 用指定值完全（或部分）填充已存在的数组

```js
var a = Array(4).fill(undefined);
a; // [undefined,undefined,undefined,undefined]

// fill(..) 可选地接收参数 start 和 end，它们指定了数组要填充的子集位置
var a = [null, null, null, null].fill(42, 1, 3);
a; // [null,42,42,null]
```

#### 原型方法 find(..)

在数组中搜索一个值的最常用方法一直是 `indexOf(..)` 方法，这个方法返回找到值的索引，如果没有找到就返回 `-1`

```js
var a = [1, 2, 3, 4, 5];

a.indexOf(3) != -1; // true
a.indexOf(7) != -1; // false
a.indexOf("2") != -1; // false
```

从 `ES5` 以来，控制匹配逻辑的最常用变通技术是使用 `some(..)` 方法。它的实现是通过为每个元素调用一个函数回调，直到某次调用返回 `true` / 真值时才会停止。

```js
//
var a = [1, 2, 3, 4, 5];

a.some(function matcher(v) {
  return v == "2";
}); // true

a.some(function matcher(v) {
  return v == 7;
}); // false
```

这种方式的缺点是如果找到匹配的值的时候，只能得到匹配的 `true/false` 指示，而无法得到真正的匹配值本身。

`ES6` 的 `find(..)` 解决了这个问题。基本上它和 `some(..)` 的工作方式一样，除了一旦回调返回 `true/ 真值`，会返回实际的数组值

```js
var a = [1, 2, 3, 4, 5];

a.find(function matcher(v) {
  return v == "2";
}); // 2

a.find(function matcher(v) {
  return v == 7; // undefined
});

// 也可以支持比较像对象这样的复杂值
var points = [
  { x: 10, y: 20 },
  { x: 20, y: 30 },
  { x: 30, y: 40 },
  { x: 40, y: 50 },
  { x: 50, y: 60 },
];
points.find(function matcher(point) {
  return point.x % 3 == 0 && point.y % 4 == 0;
}); // { x: 30, y: 40 }
```

#### 原型方法 findIndex(..)

`findIndex(..)`找到匹配值的位置索引。如果需要严格匹配的索引值，那么使用`indexOf(..)`；如果需要自定义匹配的索引值，那么使用 `findIndex(..)`

```js
var points = [
  { x: 10, y: 20 },
  { x: 20, y: 30 },
  { x: 30, y: 40 },
  { x: 40, y: 50 },
  { x: 50, y: 60 },
];
points.findIndex(function matcher(point) {
  return point.x % 3 == 0 && point.y % 4 == 0;
}); // 2
points.findIndex(function matcher(point) {
  return point.x % 6 == 0 && point.y % 7 == 0;
}); // -1
```

#### 原型方法 entries()、values()、keys()

迭代器方法 `entries()`、`values()` 和 `keys()`

```js
var a = [1, 2, 3];

[...a.values()]; // [1,2,3]
[...a.keys()]; // [0,1,2]
[...a.entries()]; // [ [0,1], [1,2], [2,3] ]
[...a[Symbol.iterator]()]; // [1,2,3]
```

### Object

#### 静态函数 Object.is(..)

静态函数 `Object.is(..)` 执行比 === 比较更严格的值比较。

`Object.is(..)` 调用底层 `SameValue` 算法（ES6 规范，7.2.9 节）。`SameValue` 算法基本上和 `===` 严格相等比较算法一样（ES6 规范，7.2.13 节），但有两个重要的区别。

```js
var x = NaN,
  y = 0,
  z = -0;

x === x; // false
y === z; // true

Object.is(x, x); // true
Object.is(y, z); // false
```

#### 静态函数 Object.getOwnPropertySymbols(..)

`Symbol` 很可能会成为对象最常用的特殊（ 元 ）属性。 所以引入了工具 `Object.getOwnPropertySymbols(..)`，它直接从对象上取得所有的符号属性

```js
var o = {
  foo: 42,
  [Symbol("bar")]: "hello world",
  baz: true,
};
Object.getOwnPropertySymbols(o); // [ Symbol(bar) ]
```

#### 静态函数 Object.setPrototypeOf(..)

这个工具设置对象的 `[[Prototype]]` 用于**行为委托**

```js
var o1 = {
  foo() {
    console.log("foo");
  },
};

var o2 = {
  // .. o2的定义 ..
};

Object.setPrototypeOf(o2, o1); // 委托给o1.foo()
o2.foo(); // foo

// 或者
var o2 = Object.setPrototypeOf( {   console.log("o2") }, o1); // 委托给o1.foo()

o2.foo(); // foo
```

#### 静态函数 Object.assign(..)

`ES6` 新增了 `Object.assign(..)`，用于把一个对象的属性复制 / 混合到另一个对象中的工具

第一个参数是 `target`，其他传入的参数都是源，它们将按照列出的顺序依次被处理。

```js
var target = {},
  o1 = { a: 1 },
  o2 = { b: 2 },
  o3 = { c: 3 },
  o4 = { d: 4 };

// 设定只读属性
Object.defineProperty(o3, "e", {
  value: 5,
  enumerable: true,
  writable: false,
  configurable: false,
});

// 设定不可枚举属性
Object.defineProperty(o3, "f", {
  value: 6,
  enumerable: false,
});
o3[Symbol("g")] = 7;

// 设定不可枚举符号
Object.defineProperty(o3, Symbol("h"), {
  value: 8,
  enumerable: false,
});

Object.setPrototypeOf(o3, o4);

// 只有属性 a、b、c、e 以及 Symbol("g") 会被复制到 target 中

Object.assign(target, o1, o2, o3);

target.a; // 1
target.b; // 2
target.c; // 3

// 复制过程会忽略属性 d、f 和 Symbol("h")；不可枚举的属性和非自有的属性都被排除在赋值过程之外。另外，e 作为一个普通属性赋值被复制，而不是作为只读属性复制。
Object.getOwnPropertyDescriptor(target, "e"); // { value: 5, writable: true, enumerable: true,  configurable: true }
Object.getOwnPropertySymbols(target); // [Symbol("g")]

// 另外一种应用
var o1 = {
  foo() {
    console.log("foo");
  },
};

var o2 = Object.assign(Object.create(o1), {
  // .. o2的定义 ..
});

// 委托给o1.foo()
o2.foo(); // foo
```

### Math

ES6 增加了几个新的数学工具，填补了常用计算方面的空白。

三角函数：

- `cosh(..)` 双曲余弦函数
- `acosh(..)` 双曲反余弦函数
- `sinh(..)` 双曲正弦函数
- `asinh(..)` 双曲反正弦函数
- `tanh(..)` 双曲正切函数
- `atanh(..)` 双曲反正切函数
- `hypot(..)` 平方和的平方根（也即：广义勾股定理）

算术：

- `cbrt(..)` 立方根
- `clz32(..)` 计算 32 位二进制表示的前导 0 个数
- `expm1(..)` 等价于 exp(x) - 1
- `log2(..)` 二进制对数（以 2 为底的对数）
- `log10(..)` 以 10 为底的对数
- `log1p(..)` 等价于 log(x + 1)
- `imul(..)` 两个数字的 32 位整数乘法

元工具：

- `sign(..)` 返回数字符号
- `trunc(..)` 返回数字的整数部分
- `fround(..)` 向最接近的 32 位（单精度）浮点值取整

### Number

`ES6` 新增了额外的属性和函数来提供常用数字运算。

对 `Number` 的两个新增内容就是指向已有的全局函数的引用：`Number.parseInt(..)` 和 `Number.parseFloat(..)`。

#### 静态属性

ES6 新增了一些作为静态属性的辅助数字常量：

- `Number.EPSILON`
  - 任意两个值之间的最小差：2^-52
- `Number.MAX_SAFE_INTEGER`
  - `JavaScript` 可以用数字值无歧义 **“安全”** 表达的最大整数：`2^53 - 1`
- `Number.MIN_SAFE_INTEGER`
  - `JavaScript` 可以用数字值无歧义 **“安全”** 表达的最小整数：`-(2^53 - 1)` 或 `(-2)^53 + 1`

#### 静态函数 Number.isNaN(..)

ES6 增加了一个修正工具 Number.isNaN(..)

```js
var a = NaN,
  b = "NaN",
  c = 42;

isNaN(a); // true
isNaN(b); // true--oops!
isNaN(c); // false

Number.isNaN(a); // true
Number.isNaN(b); // false--修正了!
Number.isNaN(c); // false
```

#### 静态函数 Number.isFinite(..)

标准的全局 `isFinite(..)` 会对参数进行强制类型转换，但是 `Number.isFinite(..)` 会略去这种强制行为

```js
var a = NaN,
  b = Infinity,
  c = 42;

Number.isFinite(a); // false
Number.isFinite(b); // false
Number.isFinite(c); // true

var a = "42";

isFinite(a); // true
Number.isFinite(a); // false
```

如果需要类型转换，这种情况下全局 `isFinite(..)` 是一个有效的选择。另外，也许是更合理的，可以使用 `Number.isFinite(+x)`，它会在传入之前显式地把 `x` 强制转换为数字

#### 整型相关静态函数

`JavaScript` 的数字值永远都是浮点数（IEE-754）。所以确定数字是否为“整型”的概念并不是检查其类型，因为 `JavaScript` 并没有这样区分。

需要检查这个值的小数部分是否非 `0`。最简单的实现方法通常是:

```js
x === Math.floor(x);
```

S6 新增了一个辅助工具 `Number.isInteger(..)` ，这个工具可能会更有效地确定这个性质

```js
Number.isInteger(4); // true
Number.isInteger(4.2); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
```

> 在 JavaScript 中，`4、4`.、`4.0` 或者 `4.0000` 之间并没有区别。所有这些都会被当作“整型”并且从 `Number.isInteger(..)` 中返回 `true`。

基于 `Number.isInteger(..)` 对 `NaN` 和 `Infinity` 值的处理方式，要定义一个 `isFloat(..)` 工具并不像 `!Number.isInteger(..)` 那么简单。

```js
function isFloat(x) {
  return Number.isFinite(x) && !Number.isInteger(x);
}
// Infinity 既不应该被当作整型又不应该被当作浮点型??
isFloat(4.2); // true
isFloat(4); // false
isFloat(NaN); // false
isFloat(Infinity); // false
```

`ES6` 还定义了一个工具 `Number.isSafeInteger(..)`，这个工具检查一个值以确保其为整数并且在 `Number.MIN_SAFE_INTEGER-Number.MAX_SAFE_INTEGER` 范围之内（全包含）

```js
var x = Math.pow(2, 53),
  y = Math.pow(-2, 53);

Number.isSafeInteger(x - 1); // true
Number.isSafeInteger(y + 1); // true
Number.isSafeInteger(x); // false
Number.isSafeInteger(y); // false
```

### 字符串

#### Unicode 函数

```js
// fromCodePoint 返回使用指定的代码点序列创建的字符串
// codePointAt 返回 一个 Unicode 编码点值的非负整数
String.fromCodePoint(0x1d49e); // '𝒞'
"ab𝒞d".codePointAt(2).toString(16); // '1d49e'
```

字符串原型方法 `normalize(..)` 用于执行 `Unicode` 规范化，或者把字符用 **“合并符”** 连接起来或者把合并的字符解开。

一般来说，规范化不会对字符串的内容造成可见的效果，但是会改变字符串的内容，这可能会影响像 `length` 属性的结果，以及通过位置访问字符的方式

`normalize(..)` 接受一个可选的参数，来指定要使用的规范化形式。这个参数必须是这几个值之一："NFC" ( 默认 )、"NFD"、"NFKC" 或者 "NFKD"

```js
var s1 = "e\u0301";
s1.length; // 2

var s2 = s1.normalize();
s2.length; // 1
s2 === "\xE9"; // true
```

#### 静态函数 String.raw(..)

`String.raw(..)` 工具作为内置标签函数提供，与模板字符串字面值一起使用，用于获得不应用任何转义序列的原始字符串。

```js
var str = "bc";
String.raw`\ta${str}d\xE9`; // '\\tabcd\\xE9', 而不是" abcdé"
```

#### 原型函数 repeat(..)

像 Python 和 Ruby 这样的语言中，可以这样重复字符串：

```python
"foo" * 3; // "foofoofoo"
```

`JavaScript` 不支持这种形式，因为乘法 `*` 只对数字有定义，因此 `"foo"` 被强制转换成了数字 `NaN`。

```js
"foo".repeat(3); // "foofoofoo"
```

#### 字符串检查函数

除了 `ES6` 之前的 `String#indexOf(..)` 和 `String#lastIndexOf(..)`，又新增了 3 个用于搜索 / 检查的新方法：`startsWith(..)`、`endsWidth(..)` 和 `includes(..)`。

```js
var palindrome = "step on no pets";

palindrome.startsWith("step on"); // true
palindrome.startsWith("on", 5); // true

palindrome.endsWith("no pets"); // true
palindrome.endsWith("no", 10); // true

palindrome.includes("on"); // true
palindrome.includes("on", 6); // false
```

对于所有的字符串搜索 / 检查方法，如果寻找空字符串 `""`，总是会在字符串的开头或结尾找到。

## 元编程

元编程是指操作目标是程序本身的行为特性的编程。

`for..in` 循环枚举对象的键，或者检查一个对象是否是某个 **“类构造器”** 的实例，也都是常见的元编程例子。

元编程的目标是利用语言自身的内省能力使代码的其余部分更具描述性、表达性和灵活性。

### Symbol.iterator

`Symbol.iterator` 表示任意对象上的一个专门位置（属性），语言机制自动在这个位置上寻找一个方法，这个方法构造一个迭代器来消耗这个对象的值。很多对象定义有这个符号的默认值。也可以通过定义 `Symbol.iterator` 属性为任意对象值定义自己的迭代器逻辑，即使这会覆盖默认的迭代器。

```js
var arr = [4, 5, 6, 7, 8, 9];

// 4 5 6 7 8 9
for (var v of arr) {
  console.log(v);
}

// 定义一个只在奇数索引值产生值的迭代器
arr[Symbol.iterator] = function* () {
  var idx = 1;
  do {
    yield this[idx];
  } while ((idx += 2) < this.length);
};

// 5 7 9
for (var v of arr) {
  console.log(v);
}
```

### Symbol.toStringTag 与 Symbol.hasInstance

最常见的一个元编程任务，就是在一个值上进行内省来找出它是什么种类，这通常是为了确定其上适合执行何种运算。对于对象来说，最常用的内省技术是 `toString()` 和 `instanceof`。

```js
function Foo() {}
var a = new Foo();

a.toString(); // [object Object]
a instanceof Foo; // true
```

在 `ES6` 中，可以控制这些操作的行为特性

```js
// 原型（或实例本身）的 @@toStringTag 符号指定了在 [object ___] 字符串化时使用的字符串值。
// @@hasInstance 符号是在构造器函数上的一个方法，接受实例对象值，通过返回 true 或false 来指示这个值是否可以被认为是一个实例。

function Foo(greeting) {
  this.greeting = greeting;
}

Foo.prototype[Symbol.toStringTag] = "Foo";

Object.defineProperty(Foo, Symbol.hasInstance, {
  value: function (inst) {
    return inst.greeting == "hello";
  },
});

var a = new Foo("hello"),
  b = new Foo("world");

b[Symbol.toStringTag] = "cool";

a.toString(); // [object Foo]
String(b); // [object cool]

a instanceof Foo; // true
b instanceof Foo; // fals
```

### Symbol.species

`@@species`，这个符号控制要生成新实例时，类的内置方法使用哪一个构造器。

常见的例子是，在创建 `Array` 的子类并想要定义继承的方法（比如 `slice(..)`）时使用哪一个构造器（是 `Array(..)` 还是自定义的子类）

```js
class Cool {
  // 把@@species推迟到子类
  static get [Symbol.species]() {
    return this;
  }
  again() {
    return new this.constructor[Symbol.species]();
  }
}

class Fun extends Cool {}

class Awesome extends Cool {
  // 强制指定@@species为父构造器
  static get [Symbol.species]() {
    return Cool;
  }
}

var a = new Fun(),
  b = new Awesome(),
  c = a.again(),
  d = b.again();

c instanceof Fun; // true
d instanceof Awesome; // false
```

### Symbol.toPrimitive

抽象类型转换运算 ToPrimitive，它用在对象为了某个操作（比如比较 == 或者相加 +）必须被强制转换为一个原生类型值的时候。

在 `ES6` 中，在任意对象值上作为属性的符号 `@@toPrimitivesymbol` 都可以通过指定一个方法来定制这个 `ToPrimitive` 强制转换。

```js
// Symbol.toPrimitive 方法根据调用 ToPrimitive 的运算期望的类型，会提供一个提示（hint）指定 "string"、"number" 或 "default"（这应该被解释为 "number"）。
var arr = [1, 2, 3, 4, 5];

arr + 10; // 1,2,3,4,510

arr[Symbol.toPrimitive] = function (hint) {
  if (hint == "default" || hint == "number") {
    // 求所有数字之和
    return this.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  }
};

arr + 10; // 2
```

### Symbol.isConcatSpreadable

符号 `@@isConcatSpreadable` 可以被定义为任意对象（比如数组或其他可迭代对象）的布尔型属性`（Symbol.isConcatSpreadable）`，用来指示如果把它传给一个数组的 `concat(..)` 是否应该将其展开。

```js
var a = [1, 2, 3],
  b = [4, 5, 6];

b[Symbol.isConcatSpreadable] = false;
[].concat(a, b); // [1,2,3,[4,5,6]]
```

## 代理

代理是一种由你创建的特殊的对象，它 **“封装”** 另一个普通对象——或者说挡在这个普通对象的前面。你可以在代理对象上注册特殊的处理函数（也就是 trap），代理上执行各种操作的时候会调用这个程序。这些处理函数除了把操作转发给原始目标 / 被封装对象之外，还有机会执行额外的逻辑。

在代理上定义的 `trap` 处理函数的一个例子是 `get`，当试图访问对象属性的时候，它拦截 `[[Get]]` 运算。

```js
var obj = { a: 1 },
  handlers = {
    get(target, key, context) {
      // 注意：target === obj,
      // context === pobj
      console.log("accessing: ", key);
      return Reflect.get(target, key, context);
    },
  },
  pobj = new Proxy(obj, handlers);

obj.a; // 1
pobj.a; // accessing: a  // 1
```

在 `handlers`（Proxy(..) 的第二个参数）对象上声明了一个 `get(..)` 处理函数命名方法，它接受一个 `target` 对象的引用（obj）、key 属性名 ("a") 以及 `self` / `接收者` / `代理（pobj）`

下面所列出的是在目标对象 / 函数代理上可以定义的处理函数，以及它们如何 / 何时被触发。

- `get(..)`
  - 通过 `[[Get]]`，在代理上访问一个属性（`Reflect.get(..)`、. 属性运算符或 `[ .. ]` 属性运算符）
- `set(..)`
  - 通过 `[[Set]]`，在代理上设置一个属性值（`Reflect.set(..)`、赋值运算符 = 或目标为对象属性的解构赋值）
- `deleteProperty(..)`
  - 通 过 `[[Delete]]`， 从代理对象上删除一个属性（`Reflect.deleteProperty(..)` 或 `delete`）
- `apply(..)`（**如果目标为函数**）
  - 通 过 `[[Call]]`，将代理作为普通函数 / 方 法 调 用（`Reflect.apply(..)`、`call(..)`、`apply(..)` 或 `(..)` 调用运算符）
- `construct(..)`（如果目标为构造函数）
  - 通过 `[[Construct]]`，将代理作为构造函数调用（`Reflect.construct(..)` 或 `new`）
- `getOwnPropertyDescriptor(..)`
  - 通过 `[[GetOwnProperty]]`，从代理中提取一个属性描述符（`Object.getOwnPropertyDescriptor(..)`或 `Reflect.getOwnPropertyDescriptor(..)`）
- `defineProperty(..)`
  - 通过 `[[DefineOwnProperty]]`，在代理上设置一个属性描述符（`Object.defineProperty(..)` 或 `Reflect.defineProperty(..)`）
- `getPrototypeOf(..)`
  - 通过 `[[GetPrototypeOf]]`，得到代理的 `[[Prototype]]`（`Object.getPrototypeOf(..)`、`Reflect.getPrototypeOf(..)`、`__proto__`、`Object#isPrototypeOf(..)` 或 `instanceof`）
- `setPrototypeOf(..)`
  - 通过 `[[SetPrototypeOf]]`，设置代理的 `[[Prototype]]`（`Object.setPrototypeOf(..)`、`Reflect.setPrototypeOf(..)` 或 `__proto__`）
- `preventExtensions(..)`
  - 通过 `[[PreventExtensions]]`，使得代理变成不可扩展的（`Object.prevent Extensions(..)` 或 `Reflect.preventExtensions(..)`）
- `isExtensible(..)`
  - 通过 `[[IsExtensible]]`，检测代理是否可扩展（`Object.isExtensible(..)` 或 `Reflect.isExtensible(..)`）
- `ownKeys(..)`
  - 通过 `[[OwnPropertyKeys]]`，提取代理自己的属性和 / 或符号属性（`Object.keys(..)`、`Object.getOwnPropertyNames(..)`、`Object.getOwnSymbolProperties(..)`、`Reflect.ownKeys(..)` 或 `JSON.stringify(..)`）
- `enumerate(..)`
  - 通过 `[[Enumerate]]`，取得代理拥有的和“继承来的”可枚举属性的迭代器（`Reflect.enumerate(..)` 或 `for..in`）
- `has(..)`
  - 通过 `[[HasProperty]]`，检查代理是否拥有或者 **“继承了”** 某个属性（`Reflect.has(..)`、`Object#hasOwnProperty(..)` 或 `"prop" in obj`）

某些 trap 是由其他 trap 的默认动作间接触发的。

```js
// getOwnPropertyDescriptor(..) 和 defineProperty(..) 处理函数是在设定属性值时由默认 set(..) 处理函数的步骤触发的。
var handlers = {
    getOwnPropertyDescriptor(target, prop) {
      console.log("getOwnPropertyDescriptor");
      return Object.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(target, prop, desc) {
      console.log("defineProperty");
      return Object.defineProperty(target, prop, desc);
    },
  },
  proxy = new Proxy({}, handlers);
proxy.a = 2; // getOwnPropertyDescriptor  // defineProperty
```

### 可取消代理

普通代理总是陷入到目标对象，并且在创建之后不能修改 —— 只要还保持着对这个代理的引用，代理的机制就将维持下去。如果想要创建一个在想要停止它作为代理时便可以被停用的代理。解决方案是创建 **可取消代理（revocable proxy）**

```js
var obj = { a: 1 },
  handlers = {
    get(target, key, context) {
      // 注意：target === obj,
      // context === pobj
      console.log("accessing: ", key);
      return target[key];
    },
  },
  { proxy: pobj, revoke: prevoke } = Proxy.revocable(obj, handlers);

pobj.a;
// accessing: a
// 1

// 然后：
prevoke();

pobj.a; // TypeError
```

可取消代理用 `Proxy.revocable(..)` 创建，这是一个普通函数，而不像 `Proxy(..)` 一样是构造器。

和 `new Proxy(..)` 不一样，`Proxy.revocable(..)` 的返回值不是代理本身。而是一个有两个属性——proxy 和 revode 的对象, 使用对象解构把这两个属性分别赋给变量 `pobj` 和 `prevoke()`

一旦可取消代理被取消，任何对它的访问（触发它的任意 trap）都会抛出 `TypeError`。

可取消代理的一个可能应用场景是，在你的应用中把代理分发到第三方，其中管理你的模型数据，而不是给出真实模型本身的引用。如果你的模型对象改变或者被替换，就可以使分发出去的代理失效，这样第三方能够（通过错误！）知晓变化并请求更新到这个模型的引用。

### 使用代理

通常可以把代理看作是对目标对象的“包装”。在这种意义上，代理成为了代码交互的主要对象，而实际目标对象保持隐藏 / 被保护的状态。

```js
// 代理在先（proxy first）设计，因为首先（主要、完全）与代理交互
var messages = [],
  handlers = {
    get(target, key) {
      // 字符串值？
      if (typeof target[key] == "string") {
        // 过滤掉标点符号
        return target[key].replace(/[^\w]/g, "");
      }
      // 所有其他的传递下去
      return target[key];
    },
    set(target, key, val) {
      // 设定唯一字符串，改为小写
      if (typeof val == "string") {
        val = val.toLowerCase();
        // 去重
        if (target.indexOf(val) == -1) {
          target.push(val.toLowerCase());
        }
      }
      return true;
    },
  },
  messages_proxy = new Proxy(messages, handlers);

// 通过与 messages_proxy 交互来增加某些特殊的规则，这些是 messages 本身没有的。
// 其他某处：
messages_proxy.push("heLLo...", 42, "wOrlD!!", "WoRld!!");

messages_proxy.forEach(function (val) {
  console.log(val);
});
// hello world

messages.forEach(function (val) {
  console.log(val);
});
// hello... world!!
```

```js
// 代理在后（proxy last），因为在这里代理只作为最后的保障
// 是把 proxy 对象放到主对象的[[Prototype]] 链中
var handlers = {
    get(target, key, context) {
      return function () {
        context.speak(key + "!");
      };
    },
  },
  catchall = new Proxy({}, handlers),
  greeter = {
    speak(who = "someone") {
      console.log("hello", who);
    },
  };

// 这里直接与 greeter 而不是 catchall 交流。当调用 speak(..) 的时候，它在 greeter上被找到并直接使用。但是当试图访问像 everyone() 这样的方法的时候，这个函数在greeter 上并不存在。
// 默认的对象属性行为是检查 [[Prototype]] 链，所以会查看 catchall 是否有 everyone 属性。然后代理的 get() 处理函数介入并返回一个用访问的属性名（"everyone"）调用 speak(..) 的函数。
// 设定greeter回退到catchall
Object.setPrototypeOf(greeter, catchall);

greeter.speak(); // hello someone
greeter.speak("world"); // hello world

greeter.everyone(); // hello everyone!
```

希望预先定义好一个对象的所有属性 / 方法之后，访问不存在的属性名时能够抛出一个错误。

```js
// 代理在前
var obj = {
    a: 1,
    foo() {
      console.log("a:", this.a);
    },
  },
  handlers = {
    get(target, key, context) {
      if (Reflect.has(target, key)) {
        return Reflect.get(target, key, context);
      } else {
        throw "No such property/method!";
      }
    },
    set(target, key, val, context) {
      if (Reflect.has(target, key)) {
        return Reflect.set(target, key, val, context);
      } else {
        throw "No such property/method!";
      }
    },
  },
  pobj = new Proxy(obj, handlers);

// 对于 get(..) 和 set(..)，都只在目标对象的属性存在的时候才转发这个操作；否则抛出错误。主对象代码应该与代理对象（pobj）交流，因为它截获这些动作以提供保护。
pobj.a = 3;
pobj.foo(); // a: 3

pobj.b = 4; // Error: No such property/method!
pobj.bar(); // Error: No such property/method!
```

```js
// 代理在后
var handlers = {
    get() {
      throw "No such property/method!";
    },
    set() {
      throw "No such property/method!";
    },
  },
  pobj = new Proxy({}, handlers),
  obj = {
    a: 1,
    foo() {
      console.log("a:", this.a);
    },
  };

// 如果 [[Get]] 或[[Set]] 进入我们的 pobj 回退，此时这个动作已经遍历了整个 [[Prototype]] 链并且没有发现匹配的属性。这时候我们可以自由抛出错误。
// 设定obj回退到pobj
Object.setPrototypeOf(obj, pobj);

obj.a = 3;
obj.foo(); // a: 3

obj.b = 4; // Error: No such property/method!
obj.bar(); // Error: No such property/method!
```

`[[Prototype]]` 机制运作的主要通道是 `[[Get]]` 运算。当直接对象中没有找到一个属性的时候，`[[Get]]` 会自动把这个运算转给 `[[Prototype]]` 对象处理。这意味着可以使用代理的 `get(..) trap` 来模拟或扩展这个 `[[Prototype]] `机制的概念

```js
var handlers = {
    get(target, key, context) {
      if (Reflect.has(target, key)) {
        return Reflect.get(target, key, context);
      } else {
        return Reflect.get(target[Symbol.for("[[Prototype]]")], key, context);
      }
    },
  },
  obj1 = new Proxy(
    {
      name: "obj-1",
      foo() {
        console.log("foo:", this.name);
      },
    },
    handlers
  ),
  //  },
  obj2 = Object.assign(Object.create(obj1), {
    name: "obj-2",
    bar() {
      console.log("bar:", this.name);
      this.foo();
    },
  });

// 伪环状[[Prototype]]链接
obj1[Symbol.for("[[Prototype]]")] = obj2;
obj1.bar();
// bar: obj-1 <-- 通过代理伪装[[Prototype]]
// foo: obj-1 <-- this上下文依然保留着
obj2.foo();
// foo: obj-2 <-- 通过[[Prototype]]
```

通过 `Object.create(..)` 语句 `obj2` `[[Prototype]]` 链接到了 `obj1`。而为了创建反向（环）的链接，我们在 `obj1` 符号位置 `Symbol.for("[[Prototype]]")`处创建了属性。这个符号可能看起来有点特殊 / 神奇，但实际上并非如此。它只是给我提供了一个方便的与我正在执行的任务关联的命名钩子，以便语义上引用。

然后，代理的 `get(..)` 处理函数首先查看这个代理上是否有请求的 `key`。如果没有，就手动把这个运算转发给保存在 `target` 的 `Symbol.for("[[Prototype]]")` 位置中的对象引用。

这种模式的一个重要优点是，obj1 和 obj2 的定义几乎不会受到在它们之间建立的这种环状关系的影响。尽管为了简洁的缘故，前面代码把所有的代码都纠缠到了一起，但是仔细观察可以看到，代理处理函数的逻辑完全是通用的。所以，这段逻辑可提取出来封装为一个单独的辅助函数，比如 `setCircularPrototypeOf(..)`。

```js
var obj1 = {
    name: "obj-1",
    foo() {
      console.log("obj1.foo:", this.name);
    },
  },
  obj2 = {
    name: "obj-2",
    foo() {
      console.log("obj2.foo:", this.name);
    },
    bar() {
      console.log("obj2.bar:", this.name);
    },
  },
  handlers = {
    get(target, key, context) {
      if (Reflect.has(target, key)) {
        return Reflect.get(target, key, context);
      }
      // 伪装多个[[Prototype]]
      else {
        for (var P of target[Symbol.for("[[Prototype]]")]) {
          if (Reflect.has(P, key)) {
            return Reflect.get(P, key, context);
          }
        }
      }
    },
  },
  obj3 = new Proxy(
    {
      name: "obj-3",
      baz() {
        this.foo();
        this.bar();
      },
    },
    handlers
  );

// 伪装多个[[Prototype]]链接
obj3[Symbol.for("[[Prototype]]")] = [obj1, obj2];
obj3.baz();
// obj1.foo: obj-3
// obj2.bar: obj-3
```

`obj3` 建立了多委托到 `obj1` 和 `obj2`。在 `obj3.baz()` 中，`this.foo()` 调用最后从 `obj1` 中提出 `foo()`（先到先得，虽然 `obj2` 上也有一个 `foo()`）。如果我们把链接重新排序为 `obj2`、`obj1`，就会找到并使用 `obj2.foo()`。

而现在 `this.bar()` 调用不会在 `obj1` 上找到 `bar()`，所以它会陷入检查 `obj2`，在其中找到匹配。

`obj1` 和 `obj2` 表示 `obj3` 的两条平行的 `[[Prototype]]` `链。obj1` 和 / 或 `obj2` 本身也可以有普通的 `[[Prototype]]` 委托到其他对象，或者本身也可以是一个多委托的代理（就像`obj3` 一样）。

就像前面的环状 `[[Prototype]]` 链例子一样，`obj1`、`obj2` 和 `obj3` 的定义与通用的处理多委托代理的逻辑几乎是完全分离的。要定义一个像 `setPrototypesOf(..)`（注意这个表示复数的 **“s”**）这样的工具接收一个主对象和一个对象列表来模拟多 `[[Prototype]]` 链接是很简单的。

## Reflect API

`Reflect` 对象是一个平凡对象（就像 `Math`），不像其他内置原生值一样是函数 / 构造器。

它持有对应于各种可控的元编程任务的静态函数。这些函数一对一对应着代理可以定义的处理函数方法（`trap`）

一般来说这些工具和 `Object.*` 的对应工具行为方式类似。但是，有一个区别是如果第一个参数（目标对象）不是对象的话，`Object.*` 相应工具会试图把它类型转换为一个对象。而这种情况下 `Reflect.*` 方法只会抛出一个错误。

可以使用这些工具访问 / 查看一个对象键：

- **`Reflect.ownKeys(..)`**
  - 返回所有“拥有”的（不是“继承”的）键的列表，就像 `Object.getOwnPropertyNames (..)` 和 `Object.getOwnPropertySymbols(..)` 返回的一样。
- **`Reflect.enumerate(..)`**
  - 返回一个产生所有（拥有的和“继承的”）可枚举的（`enumerable`）非符号键集合的迭代器。本质上说，这个键的集合和 `foo..in` 循环处理的那个键的集合是一样的。
- **`Reflect.has(..)`**
  - 实质上和 `in` 运算符一样，用于检查某个属性是否在某个对象上或者在它的`[[Prototype]]` 链上。比如，`Reflect.has(o, "foo")` 实质上就是执行 `"foo" in o`。

函数调用和构造器调用可以通过使用这些工具手动执行，与普通的语法（比如，`(..)`和 `new`）分开：

- **`Reflect.apply(..)`**
  - 举例来说，`Reflect.apply(foo,thisObj,[42,"bar"])` 以 `thisObj` 作为 `this` 调用 `foo(..)`函数，传入参数 `42` 和 `"bar"`。
- **`Reflect.construct(..)`**
  - 举例来说，`Reflect.construct(foo,[42,"bar"])` 实质上就是调用 `new foo(42,"bar")`。可以使用下面这些工具来手动执行对象属性访问、设置和删除。
- **`Reflect.get(..)`**
  - 举例来说，`Reflect.get(o,"foo")` 提取 `o.foo`
- **`Reflect.set(..)`**
  - 举例来说，`Reflect.set(o,"foo",42)` 实质上就是执行 `o.foo = 42`
- **`Reflect.deleteProperty(..)`**
  - 举例来说，`Reflect.deleteProperty(o,"foo")` 实质上就是执行 `delete o.foo`

`Reflect` 的元编程能力提供了模拟各种语法特性的编程等价物，把之前隐藏的抽象操作暴露出来。

### 属性排序

在 `ES6` 之前，一个对象键 / 属性的列出顺序是依赖于具体实现，并未在规范中定义。一般来说，多数引擎按照创建的顺序进行枚举。

对于 `ES6` 来说，拥有属性的列出顺序是由 `[[OwnPropertyKeys]]` 算法定义的，这个算法产生所有拥有的属性（字符串或符号），不管是否可枚举。

其顺序为：

(1) 首先，按照数字上升排序，枚举所有整数索引拥有的属性；

(2) 然后，按照创建顺序枚举其余的拥有的字符串属性名；

(3) 最后，按照创建顺序枚举拥有的符号属性。

```js
var o = {};

o[Symbol("c")] = "yay";
o[2] = true;
o[1] = true;
o.b = "awesome";
o.a = "cool";

Reflect.ownKeys(o); // [1,2,"b","a",Symbol(c)]
Object.getOwnPropertyNames(o); // [1,2,"b","a"]
Object.getOwnPropertySymbols(o); // [Symbol(c)]
```

`Reflect.enumerate(..)`、`Object.keys(..)` 和 `for..in`（以及扩展的 `JSON.stringification(..)`）还像过去一样，可观察的顺序是相同的。但是这个顺序不再必须与 `Reflect.ownKeys(..)` 相同。

```js
var o = { a: 1, b: 2 };
var p = Object.create(o);
p.c = 3;
p.d = 4;

for (var prop of Reflect.enumerate(p)) {
  console.log(prop);
}
// c d a b

for (var prop in p) {
  console.log(prop);
}
// c d a b

JSON.stringify(p); // {"c":3,"d":4}
Object.keys(p); // ["c","d"]
```

对 于 `ES6` 来 说，`Reflect.ownKeys(..)`、`Object.getOwnPropertyNames(..)` 和 `Object.getOwnPropertySymbols(..)` 的顺序都是可预测且可靠的，这由规范保证。所以依赖于这个顺序的代码是安全的。

## 尾递归调用（TCO）

通常，在一个函数内部调用另一个函数的时候，会分配第二个栈帧来独立管理第二个函数调用的变量 / 状态。这个分配不但消耗处理时间，也消耗了额外的内存。

当考虑到递归编程的时候（一个函数重复调用自身）——或者两个或多个函数彼此调用形成递归——调用栈的深度很容易达到成百上千，甚至更多。如果内存的使用无限制地增长下去，可能会出现它将导致的问题。

`JavaScript` 引擎不得不设置一个武断的限制来防止这种编程技术引起浏览器和设备内存耗尽而崩溃。 **（“RangeError: Maximum call stack size exceeded”）**

> 调用栈深度限制不由规范控制。它是依赖于具体实现的，并且根据浏览器和设备不同而有所不同。

有一些称为尾调用（Tail Call）的函数调用模式，可以以避免额外栈帧分配的方式进行优化。如果可以避免额外的分配，就没有理由任意限制调用栈深度，所以引擎就可以不设置这个限制。

**尾调用** 是一个 `return` 函数调用的语句，除了调用后返回其返回值之外没有任何其他动作。

```js
{
  // 非尾调用
  ("use strict");
  function foo(x) {
    return x * 2;
  }

  // foo(x) 调用完毕后还得执行 1 + ..，所以 bar(..) 调用的状态需要被保留。
  function bar(x) {
    // 这不是尾调用
    return 1 + foo(x);
  }
  bar(10); // 21
}

{
  ("use strict");
  function foo(x) {
    return x * 2;
  }

  // 函数调用都处于合适的尾位置（proper tail position）
  function bar(x) {
    x = x + 1;
    if (x > 10) {
      return foo(x);
    } else {
      return bar(x + 1);
    }
  }

  bar(5); // 24
  bar(15); // 32
}
```

这些形式的正确尾调用（Proper Tail Call，PTC）是可以被优化的——称为 **尾调用优化**（Tail Call Optimization，TCO）—— 于是额外的栈帧分配是不需要的。

**TCO** 意味着对调用栈的允许深度没有任何限度。对于一般程序中的普通函数调用，这个技巧有些许优化，但更重要的是打开了在程序表达中使用递归的大门，甚至是调用栈的调用深度可能达到成千上万的时候。

### 尾调用重写

只有 **PTC** 可以被优化；非 **PTC** 当然仍然可以工作，但会像以前一样触发栈帧分配。如果希望这个优化介入的话，需要认真设计函数结构支持 **PTC**

```js
"use strict";
// 调用 foo(x-1) 不是 PTC，因为它的结果每次在 return 之前要加上 (x / 2)
function foo(x) {
  if (x <= 1) return 1;
  return x / 2 + foo(x - 1);
}

foo(123456); // RangeError
```

要想使这段代码适合 `ES6` 引擎 **TCO**，可以这样重写

```js
// 如果在实现了 TCO 的 ES6 引擎中运行这段代码，会得到显示的 3810376848.5。然而，它在非 TCO 引擎里仍然会因 RangeError 而失败。
"use strict";
var foo = (function () {
  function _foo(acc, x) {
    if (x <= 1) return acc;
    return _foo(x / 2 + acc, x - 1);
  }
  return function (x) {
    return _foo(1, x);
  };
})();

foo(123456); // 3810376848.5
```

### 非 TCO 优化

还有几种其他技术可以用来重写代码，使得不需要每次调用时都增长栈。

其中一种这样的技术叫作 trampolining，它相当于把每个部分结果用一个函数表示，这些函数或者返回另外一个部分结果函数，或者返回最终结果。然后就只需要循环直到得到的结果不是函数，得到的就是最终结果。

```js
"use strict";
function trampoline(res) {
  while (typeof res == "function") {
    res = res();
  }
  return res;
}

var foo = (function () {
  function _foo(acc, x) {
    if (x <= 1) return acc;
    return function partial() {
      return _foo(x / 2 + acc, x - 1);
    };
  }
  return function (x) {
    return trampoline(_foo(1, x));
  };
})();

foo(123456); // 3810376848.5
```

这个重写需要最小的改动来把递归转化为 `trampoline(..)` 中的循环。

(1) 首先，把 `return _foo ..` 一行封装在` return partial() { ..` 函数表达式中。

(2) 然后，把 `_foo(1,x)` 调用封装在 `trampoline(..)` 调用中。

这个技术不限制调用栈的原因是，每个内部的 `partial(..)` 函数只是返回到`trampoline(..)` 的 `while` 循环中，`trampolining` 运行函数并进行下一次的循环迭代。也就是说 `partial(..)` 不会递归调用自身，它只是返回另一个函数。栈深度保持不变，所以可以运行任意长的时间。

如果真的需要深度优化（不需考虑可复用性），那么可以丢弃闭包状态，用一个循环把 `acc` 信息的状态追踪在线化放在一个函数作用域内。这种技术一般称为递归展开。

```js
"use strict";

function foo(x) {
  var acc = 1;
  while (x > 1) {
    acc = x / 2 + acc;
    x = x - 1;
  }
  return acc;
}

foo(123456); // 3810376848.5
```

递归的最主要优势，即使是 PTC 形式，就是它保留了算法的可读性，并将性能优化的担子扔给引擎。

如果以 **PTC** 的形式编写算法，`ES6` 引擎就会应用 **TCO**，代码就会以常数栈深度（通过重用栈帧）运行。你在得到递归的可读性的同时，也得到了几乎没有损失的性能以及不受限制的运行长度。

## Array#includes(..)

`JavaScript` 开发者需要执行的一个极其常见的任务就是在值数组中搜索一个值。

```js
var vals = ["foo", "bar", 42, "baz"];
// 是在布尔值上下文中使用返回索引的函数。因为 -1为真而不是假，所以需要更多的手动检查。
if (vals.indexOf(42) >= 0) {
  // 找到了!
}

// ~ 运算符把 indexOf(..) 返回值规范为更适合强制转换为布尔型的值范围。-1 产生 0( 假 )，所有其他值产生非 0 值 ( 真），这正是判断是否找到这个值所需的。
if (~vals.indexOf(42)) {
  // 找到了!
}

// 新语法
if (vals.includes( 42 )) { 
 // 找到了! 
}
```

## new 模拟实现

`new` **运算符** 创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

`new` 关键字会进行如下的操作：

- 创建一个空的简单 `JavaScript` 对象（即`{}`）；
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
  };
}
const tenPercentDiscount = discount(0.1);
tenPercentDiscount(500);
```

用于多参数函数的“高级”柯里化实现

```js
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6，仍然可以被正常调用
console.log(curriedSum(1)(2, 3)); // 6，对第一个参数的柯里化
console.log(curriedSum(1)(2)(3)); // 6，全柯里化
```
