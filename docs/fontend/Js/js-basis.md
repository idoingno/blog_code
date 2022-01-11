---
title: JS 基础
---

## 数据类型

JavaScript 提供七种不同的数据类型，它们是`undefined`（未定义）、`null`（空）、`boolean`（布尔型）、`string`（字符串）、`symbol`、`number`（数字）、`bigint`（可以表示任意大的整数）和 `object`（对象）。

> Tips：当 JavaScript 中的变量被声明的时候，程序内部会给它一个初始值 `undefined`。 当你对一个值为 `undefined` 的变量进行运算操作的时候，算出来的结果将会是 `NaN`，它的意思是 "Not a Number"。 当你用一个值是 `undefined` 的变量来做字符串拼接操作的时候，它会转换成字符串（string）`undefined`。

## var 、let、const

- ES6 中引入了一个名为 let 的关键字，这是对 JavaScript 的一次重大更新，以解决与 var 关键字有关的潜在问题。同名的变量只能声明一次。
- const 关键字声明只读变量。始终使用 const 关键字命名不想重新分配的变量。
  > Tips：使用 `const` 分配给变量的对象（包括数组和函数）仍然是可变的, 使用 const 声明只能防止变量标识符的重新分配。

## 转义字符

```
代码 输出
\'	单引号
\"	双引号
\\	反斜杠
\n	换行符
\r	回车符
\t	制表符
\b	退格
\f	换页符
```

## 全局作用域、局部作用域、函数

- 在 JavaScript 中，作用域涉及到变量的作用范围。 在函数外定义的变量具有`全局`作用域。 这意味着，具有全局作用域的变量可以在代码的任何地方被调用。
- 未使用 let 或 const 关键字声明的变量会在`global`范围内自动创建。 当在代码其他地方无意间定义了一个变量，刚好变量名与全局变量相同，这时会产生意想不到的后果。
- 在一个函数内声明的变量，以及该函数的参数都具有局部（local）作用域。

## hasOwnProperty 方法

可以用对象的 `.hasOwnProperty(propname) `方法来检查对象是否有指定的属性。 `.hasOwnProperty()` 找到该属性时返回 `true`，找不到该属性时返回 `false`。

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

```
const user = { name: 'John Doe', age: 34 };
const { name, age } = user;
```

## 最佳实践

- 使用驼峰命名法（_camelCase_）来书写一个 Javascript 变量。 在驼峰命名法（_camelCase_）中，变量名的第一个单词的首写字母小写，后面的单词的第一个字母大写。
- 命名常量的常见做法是全部使用大写字母，单词之间用下划线分隔。
