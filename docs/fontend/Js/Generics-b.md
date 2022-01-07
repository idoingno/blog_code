---
title: 泛型
author: Q
autoGroup-1: Dom
date: "2021-12-12"
---

#### arguments 对象

看起来像一个数组，可是并不是标准 Array 类型的实例，所以不能直接调用数组的方法。
但是可以通过 call 方法，从数组种提取。

```javascript
function callMethod(obj, method) {
  var args = [].slice.call(arguments, 2);
  return obj[method].apply(obj, args);
}

var obj = {
  add: function (x, y) {
    return x + y;
  },
};

callMethod(obj, "add", 1, 2); // 3
```

<!-- more -->

#### 使用变量保存 arguments 的引用

> 迭代器(iterator)
> 是一个可以顺序存取数据集合的对象。

```javascript
function values() {
  var i = 0;
  (n = arguments.length), (a = arguments);
  return {
    hasNext: function () {
      return i > n;
    },
    next: function () {
      if (i >= n) {
        throw new Error("end of iteration");
      }
      return a[i++];
    },
  };
}

var it = values(1, 2, 3, 4, 5);
it.next(); // 1
it.next(); // 2
```

> 绑定一个明确作用域的引用到 arguments 变量， 从而可以在嵌套的函数种引用她。

#### bind 方法提取具有确定接收者的方法

> 提取对象的方法并将提取到的函数作为回调函数直接传递给高阶函数。

```javascript
var buffer = {
  entries: [],
  add: function (s) {
    this.entries.push(s);
  },
  concat: function () {
    return this.entries.join("");
  },
};

// 提取buffer对象的add方法，并使用ES5的forEach方法在一个源数组元素上重复地调用add方法，就可以复制字符串数组到buffer对象。
var source = ["123", "-", "456"];
// 函数的接收者取决于它是如何被调用的，这里并没有调用它。把它传递给了forEach方法，但是并不知道forEach在哪里调用了它。
// forEach 方法的实现使用全局对象作为默认的接收者，由于全局对象没有entries属性，所以会报错。

//source.forEach(buffer.add);  // error: entries is undefined

source.forEach(buffer.add, buffer);
buffer.join(); // "123-456"

// 并非所有高阶函数都会提供其回调函数的接收者，那么可以创建使用适当的方法调用语法来调用buffer.add的一个局部函数。
source.forEach(function (s) {
  buffer.add(s);
});
buffer.join(); // "123-456"

// 创建一个函数用于实现绑定其接收者到一个指定的对象，函数对象的bind方法需要一个接收者对象，并产生一个以该接收者对象的方法调用的方式调用原来的函数的封装函数。
source.forEach(buffer.add.bind(buffer));
buffer.join(); // "123-456"
// buffer.add.bind(buffer) 创建了一个新函数而不是修改了buffer.add函数，新函数的行为就像原来函数的行为，但它的接收者绑定到了buffer对象，而原有函数的接收者保持不变。
buffer.add === buffer.add.bind(buffer); // false
```

#### 函数柯里化（bind 方法实现）

> 将函数与其参数的一个子集绑定的技术称为函数柯里化，以逻辑学家 Haskell Curry 的名字命名。
>
> 使用 bind 方法实现函数柯里化，即创建一个固定需求参数子集的委托函数。
>
> 传入 null 或 undefined 作为接收者的参数来实现函数柯里化，从而忽略其接收者。

```javascript
function simpleURL(protocol, domain, path) {
  return protocol + "://" + domain + "/" + path;
}

var urls = paths.map(function(path)) {
	return simpleURL("http", siteDomain, path);
}
// 对simpleURL.bind的调用产生了一个委托到simpleURL的新函数，由于simpleURL不需要引用this变量，所以第一个参数可以使用任何值。
var urls = paths.map(simpleURL.bind(null, "http", siteDomain))
```

#### 理解 prototype、getPrototypeOf 和 \_\_proto\_\_ 之间得区别

> C.prototype 用于建立由 new C() 创建的对象的原型
>
> Object.getPrototypeOf(obj) ES5 中用来获取 obj 对象的原型对象的标准方法
>
> obj.\_\_proto\_\_ 是获取 obj 对象的原型对象的非标准方法

```javascript
function User(name, passwordHash) {
  this.name = name;
  this.passwordHash = passwordHash;
}

User.prototype.toString = function () {
  return "[User " + this.name + "]";
};

User.prototype.checkPassword = function (password) {
  return hash(password) === this.passwordHash;
};

var u = new User("sara", "0ef311ekjl1j2d8fd98fsdfs0");

Object.getPrototypeOf(u) === User.prototype; // true

u.__proto__ === User.prototype; // true
```

<img src="/imgs/0210302175705.jpg" width="80%">

#### hasOwnProperty 方法

```javascript
function Dict(elements) {
	this.elements = elements || {};
  this.hasSpecialProto = false;
  this.specialProto = undefined;
}

Dict.prototype.has = function(key) {
	if(key === "__proto__") {
		return this.hasSpecialProto;
  }
  return {}.hasOwnProperty.call(this.elements, key);
}

Dict.prototype.get = function(key) {
  if(key === "__proto__") {
    return this.specialProto;
  }
  return this.has(key) ? this.elements[key] : undefined;
}

Dict.prototype.set = function(key, val) {
  if(key === "__proto__") {
    this.hasSpecialProto = true;

    this.specialProto = val;
  } else {
    this.elements[key] = val;
  }
}

Dict.prototype.remove = function(key) {
  if(key === "__proto__") {
    this.hasSpecialProto = false;

    this.specialProto = undefined;
  } else {
    delete this.elements[key] = val;
  }
}

// 使用
var dict = new Dict()
dict.has("__proto__");  // false
```

#### 类数组对象

> 可以通过提取方法对象并使用其 call 方法来复用通用的 Array 方法
>
> 任意一个具有索引属性和恰当 length 属性的对象都可以使用通用的 Array 方法

```javascript
var arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
var result = Array.prototype.map.call(arrayLike, function (s) {
  return s.toUpperCase();
}); // ["A", "B", "C"]
var result = Array.prototype.map.call("abc", function (s) {
  return s.toUpperCase();
}); // ["A", "B", "C"]

// concat 类方法
function nameColumn() {
  return ["Names"].concat(arguments);
}
nameColumn("Alice", "Bob", "Chris"); // ["Names", {0: "Alice", 1: "Bob", 2: "Chris"}]

function nameColumn() {
  return ["Names"].concat([].slice.call(arguments));
}
nameColumn("Alice", "Bob", "Chris"); // ["Names", "Alice", "Bob", "Chris"]
```
