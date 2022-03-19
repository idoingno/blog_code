---
title: 异步及性能
autoGroup-1: JS 核心
---

## 事件循环

Javascript 是一门单线程语言，每一个消息完整地执行后，其它消息才会被执行。这为程序的分析提供了一些优秀的特性，包括：当一个函数执行时，它不会被抢占，只有在它运行完毕之后才会去运行任何其他的代码，才能修改这个函数操作的数据。

在`JavaScript`中，任务被分为两种，一种宏任务`（MacroTask）`也叫`Task`，一种叫微任务`（MicroTask）`。

- **MacroTask（宏任务）**：`script` 全部代码、`setTimeout`、`setInterval`、`setImmediate`（浏览器暂时不支持，只有 IE10 支持，具体可见 MDN）、I/O、UI Rendering。
- **MicroTask（微任务）**：`Process.nextTick`（Node 独有）、`Promise`、`Object.observe`(废弃)、`MutationObserver`

JS 调用栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行栈执行完成后，就会从栈顶移出，直到栈内被清空。

`Javascript` 有一个 `main thread` 主线程和 `call-stack` 调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行。

`Javascript`单线程任务被分为**同步任务**和**异步任务**，同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。

![](/imgs/js/event-loop.png)

执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务(`microTask`)队列是否为空，如果为空的话，就执行`Task`（宏任务），否则就一次性执行完所有微任务。

每次单个宏任务执行完毕后，检查微任务(`microTask`)队列是否为空，如果不为空的话，会按照**先入先出**的规则全部执行完微任务(`microTask`)后，设置微任务(`microTask`)队列为 `null`，然后再执行宏任务，如此循环。

程序通常分成了很多小块，在事件循环队列中一个接一个地执行。循环的每一轮称为一个 `tick`，对每个 tick 而言，如果在队列中有等待事件，那么就会从队列中摘下一个事件并执行。这些事件就是你的回调函数。

### 异步回调风格

为了更优雅地处理错误，有些 API 设计提供了分离回调（一个用于成功通知，一个用于出错通知）。ES6 Promise API 使用的就是这种分离回调设计。

```js
// 分离回调
function success(data) {
  console.log(data);
}
function failure(err) {
  console.error(err);
}
ajax("http://some.url.1", success, failure);
```

另一种常见的回调模式叫作“error-first 风格” （Node 风格）

```js
function timeoutify(fn, delay) {
  var intv = setTimeout(function () {
    intv = null;
    fn(new Error("Timeout!"));
  }, delay);
  return function () {
    // 还没有超时？
    if (intv) {
      clearTimeout(intv);
      fn.apply(this, arguments);
    }
  };
}

// 使用"error-first 风格" 回调设计
function foo(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
}
ajax("http://some.url.1", timeoutify(foo, 500));
```

## Promise

绝大多数 JavaScript/DOM 平台新增的异步 API 都是基于 Promise 构建的。Promise 规范化了异步，并封装了时间相关值的状态，使得能够把它们以这种有用的方式链接到一起。

- 调用 Promise 的 then(..) 会自动创建一个新的 Promise 从调用返回。
- 在完成或拒绝处理函数内部，如果返回一个值或抛出一个异常，新返回的（可链接的）Promise 就相应地决议。
- 如果完成或拒绝处理函数返回一个 Promise，它将会被展开，这样一来，不管它的决议
  值是什么，都会成为当前 then(..) 返回的链接 Promise 的决议值

```js
// 构造 Ajax 请求：
// 假定工具ajax( {url}, {callback} )存在
// Promise-aware ajax
function request(url) {
  return new Promise(function (resolve, reject) {
    // ajax(..)回调应该是我们这个promise的resolve(..)函数
    ajax(url, resolve);
  });
}
// 我们首先定义一个工具 request(..)，用来构造一个表示 ajax(..) 调用完成的 promise：
request("http://some.url.1/")
  .then(function (response1) {
    return request("http://some.url.2/?v=" + response1);
  })
  .then(function (response2) {
    console.log(response2);
  });
```

### 错误处理

错误处理最自然的形式就是同步的 `try..catch` 结构。但是，它只能是同步的，无法用于异步代码模式。

常见的一种用法是：Promsie 添加一个 `done(..)` 函数，从本质上标识 `Promsie` 链的结束

```js
var p = Promise.resolve(42);
p.then(function fulfilled(msg) {
  // 数字没有string函数，所以会抛出错误
  console.log(msg.toLowerCase());
}).done(null, handleErrors);
// 如果handleErrors(..)引发了自身的异常，会被全局抛出到这里
```

### Promise.all([ .. ])

在经典的编程术语中，门（gate）是这样一种机制要等待两个或更多并行 / 并发的任务都完成才能继续。它们的完成顺序并不重要，但是必须都要完成，门才能打开并让流程控制继续。在 `Promise API` 中，这种模式被称为 `all([ .. ])`

```js
// request(..)是一个Promise-aware Ajax工具
var p1 = request("http://some.url.1/");
var p2 = request("http://some.url.2/");
Promise.all([p1, p2])
  .then(function (msgs) {
    // 这里，p1和p2完成并把它们的消息传入
    return request("http://some.url.3/?v=" + msgs.join(","));
  })
  .then(function (msg) {
    console.log(msg);
  });
```

Promise.all([ .. ]) 需要一个参数，是一个数组，通常由 Promise 实例组成。从 Promise.all([ .. ]) 调用返回的 promise 会收到一个完成消息（代码片段中的 msg）。这是一个由所有传入 promise 的完成消息组成的数组，与指定的顺序一致（与完成顺序无关）。

### Promise.race([ .. ])

**“只有第一个到达终点的才算胜利”** 这个比喻很好地描述了其行为特性，但这种模式传统上称为门闩，但在 `Promise` 中称为竞态。

`Promise.race([ .. ])` 也接受单个数组参数。这个数组由一个或多个 `Promise`、`thenable` 或立即值组成。立即值之间的竞争在实践中没有太大意义，因为显然列表中的第一个会获胜，就像赛跑中有一个选手是从终点开始比赛一样！

与 `Promise.all([ .. ])` 类似，一旦有任何一个 `Promise` 决议为完成，`Promise.race([ .. ])`就会完成；一旦有任何一个 `Promise` 决议为拒绝，它就会拒绝。

```js
// request(..)是一个支持Promise的Ajax工具
var p1 = request("http://some.url.1/");
var p2 = request("http://some.url.2/");
Promise.race([p1, p2])
  .then(function (msg) {
    // p1或者p2将赢得这场竞赛
    return request("http://some.url.3/?v=" + msg);
  })
  .then(function (msg) {
    console.log(msg);
  });
```

> 若向 `Promise.all([ .. ])` 传入空数组，它会立即完成，但 `Promise.race([ .. ])` 会挂住，且永远不会决议。

### new Promise(..) 构造器

有启示性的构造器 `Promise(..)` 必须和 `new` 一起使用，并且必须提供一个函数回调。这个回调是同步的或立即调用的。这个函数接受两个函数回调，用以支持 `promise` 的决议。通常我们把这两个函数称为 `resolve(..)` 和 `reject(..)`：

```js
var p = new Promise(function (resolve, reject) {
  // resolve(..)用于决议/完成这个promise
  // reject(..)用于拒绝这个promise
});
```

`reject(..)` 就是拒绝这个 `promise`；但 `resolve(..)` 既可能完成 `promise`，也可能拒绝，要根据传入参数而定。如果传给 resolve(..) 的是一个非 Promise、非 thenable 的立即值，这
个 promise 就会用这个值完成。但是，如果传给 `resolve(..)` 的是一个真正的 `Promise` 或 `thenable` 值，这个值就会被递归展开，并且（要构造的）`promise` 将取用其最终决议值或状态。

### Promise.resolve(..) 和 Promise.reject(..)

创建一个已被拒绝的 Promise 的快捷方式是使用 `Promise.reject(..)`。 `Promise.resolve(..)` 常用于创建一个已完成的 `Promise`

```js
// 下面两个promise等价
var p1 = new Promise(function (resolve, reject) {
  reject("Oops");
});
var p2 = Promise.reject("Oops");
```

如果传入的是真正的 `Promise`，`Promise.resolve(..)` 什么都不会做，只会直接把这个值返回。

```js
var fulfilledTh = {
  then: function (cb) {
    cb(42);
  },
};
var rejectedTh = {
  then: function (cb, errCb) {
    errCb("Oops");
  },
};
var p1 = Promise.resolve(fulfilledTh); // p1是完成的promise
var p2 = Promise.resolve(rejectedTh); // p2是拒绝的promise
```

### then(..) 和 catch(..)

这两个方法可以为这个 Promise 注册完成和拒绝处理函数。

`then(..)` 接受一个或两个参数：第一个用于完成回调，第二个用于拒绝回调。如果两者中的任何一个被省略或者作为非函数值传入的话，就会替换为相应的默认回调。默认完成回调只是把消息传递下去，而默认拒绝回调则只是重新抛出（传播）其接收到的出错原因。

`catch(..)` 只接受一个拒绝回调作为参数，并自动替换默认完成回调。

> 它等价于 `then(null,..)`：
>
> `p.then( fulfilled )`;
>
> `p.then( fulfilled, rejected )`;
>
> `p.catch( rejected )`; // 或者 `p.then( null, rejected )`

`then(..)` 和 `catch(..)` 也会创建并返回一个新的 `promise`，这个 `promise` 可以用于实现`Promise` 链式流程控制。如果完成或拒绝回调中抛出异常，返回的 `promise` 是被拒绝的。如果任意一个回调返回非 `Promise`、非 `thenable` 的立即值，这个值会被用作返回 `promise` 的完成值。如果完成处理函数返回一个 `promise` 或 `thenable`，那么这个值会被展开，并作为返回`promise` 的决议值。

### Promise 的源码实现

```js
// 符合Promise/A+规范
const isFunction = (obj) => typeof obj === "function";
const isObject = (obj) => !!(obj && typeof obj === "object");
const isThenable = (obj) => (isFunction(obj) || isObject(obj)) && "then" in obj;
const isPromise = (promise) => promise instanceof Promise;

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise(f) {
  this.result = null;
  this.state = PENDING;
  this.callbacks = [];

  let onFulfilled = (value) => transition(this, FULFILLED, value);
  let onRejected = (reason) => transition(this, REJECTED, reason);

  let ignore = false;
  let resolve = (value) => {
    if (ignore) return;
    ignore = true;
    resolvePromise(this, value, onFulfilled, onRejected);
  };
  let reject = (reason) => {
    if (ignore) return;
    ignore = true;
    onRejected(reason);
  };

  try {
    f(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  return new Promise((resolve, reject) => {
    let callback = { onFulfilled, onRejected, resolve, reject };

    if (this.state === PENDING) {
      this.callbacks.push(callback);
    } else {
      setTimeout(() => handleCallback(callback, this.state, this.result), 0);
    }
  });
};

const handleCallback = (callback, state, result) => {
  let { onFulfilled, onRejected, resolve, reject } = callback;
  try {
    if (state === FULFILLED) {
      isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result);
    } else if (state === REJECTED) {
      isFunction(onRejected) ? resolve(onRejected(result)) : reject(result);
    }
  } catch (error) {
    reject(error);
  }
};

const handleCallbacks = (callbacks, state, result) => {
  while (callbacks.length) handleCallback(callbacks.shift(), state, result);
};

const transition = (promise, state, result) => {
  if (promise.state !== PENDING) return;
  promise.state = state;
  promise.result = result;
  setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0);
};

const resolvePromise = (promise, result, resolve, reject) => {
  if (result === promise) {
    let reason = new TypeError("Can not fufill promise with itself");
    return reject(reason);
  }

  if (isPromise(result)) {
    return result.then(resolve, reject);
  }

  if (isThenable(result)) {
    try {
      let then = result.then;
      if (isFunction(then)) {
        return new Promise(then.bind(result)).then(resolve, reject);
      }
    } catch (error) {
      return reject(error);
    }
  }

  resolve(result);
};

module.exports = Promise;
```

## 生成器函数

生成器就是一类特殊的函数，可以一次或多次启动和停止，并不一定非得要完成。 `ES6` 代码中指示暂停点的语法是 `yield`

```js
var x = 1;
function* foo() {
  x++;
  yield; // 暂停！
  console.log("x:", x);
}
function bar() {
  x++;
}

// 如何运行起来呢？
// 构造一个迭代器it来控制这个生成器
var it = foo();
// 这里启动foo()！
it.next();
x; // 2
bar();
x; // 3
it.next(); // x: 3
```

1. `it = foo()` 运算并没有执行生成器 `*foo()`，而只是构造了一个**迭代器（iterator）**，这个迭代器会控制它的执行。后面会介绍迭代器。
2. 第一个 `it.next()` 启动了生成器 `*foo()`，并运行了 `*foo()` 第一行的 `x++`。
3. `*foo()` 在 `yield` 语句处暂停，在这一点上第一个 `it.next()` 调用结束。此时 `*foo()` 仍在运行并且是活跃的，但处于暂停状态。
4. 我们查看 `x` 的值，此时为 `2`。
5. 我们调用 `bar()`，它通过 `x++` 再次递增 `x`。
6. 我们再次查看 `x` 的值，此时为 `3`。
7. 最后的 `it.next()` 调用从暂停处恢复了生成器 `*foo()` 的执行，并运行 `console.log(..)`语句，这条语句使用当前 `x` 的值 `3`

### 迭代器

迭代器是一个定义良好的接口，用于从一个生产者一步步得到一系列值。

```js
// 直接使用函数闭包
var gimmeSomething = (function () {
  var nextVal;
  return function () {
    if (nextVal === undefined) {
      nextVal = 1;
    } else {
      nextVal = 3 * nextVal + 6;
    }
    return nextVal;
  };
})();
gimmeSomething(); // 1
gimmeSomething(); // 9
gimmeSomething(); // 33
gimmeSomething(); // 105

// 使用迭代器
var something = (function () {
  var nextVal;
  return {
    // for..of循环需要
    [Symbol.iterator]: function () {
      return this;
    },
    // 标准迭代器接口方法
    next: function () {
      if (nextVal === undefined) {
        nextVal = 1;
      } else {
        nextVal = 3 * nextVal + 6;
      }
      return { done: false, value: nextVal };
    },
  };
})();
something.next().value; // 1
something.next().value; // 9
something.next().value; // 33
something.next().value; // 105
```

`next()` 调用返回一个对象。这个对象有两个属性：`done` 是一个 `boolean` 值，标识迭代器的完成状态；`value` 中放置迭代值。

`ES6` 还新增了一个 `for..of` 循环，这意味着可以通过原生循环语法自动迭代标准迭代器.

```js
for (var v of something) {
  console.log(v);
  // 不要死循环！
  if (v > 500) {
    break;
  }
}
// 1 9 33 105 321 969
```

`for..of` 循环在每次迭代中自动调用 `next()`，它不会向 `next()` 传入任何值，并且会在接收到 `done:true` 之后自动停止。

> **[Symbol.iterator]** iterable（可迭代），即指一个包含可以在其值上迭代的迭代器的对象。从 ES6 开始，从一个 iterable 中提取迭代器的方法是：iterable 必须支持一个函数，其名称是专门的 ES6 符号值 Symbol.iterator。调用这个函数时，它会返回一个迭代器。

### 异步迭代生成器

```js
// 解决回调问题
function foo(x, y) {
  ajax("http://some.url.1/?x=" + x + "&y=" + y, function (err, data) {
    if (err) {
      // 向*main()抛出一个错误
      it.throw(err);
    } else {
      // 用收到的data恢复*main()
      it.next(data);
    }
  });
}
function* main() {
  try {
    var text = yield foo(11, 31);
    console.log(text);
  } catch (err) {
    console.error(err);
  }
}
var it = main();
// 这里启动！
it.next();
```

调用了一个普通函数 `foo(..)`，而且显然能够从 `Ajax` 调用中得到 `text`，即使它是异步的。看似阻塞同步的代码，实际上并不会阻塞整个程序，它只是暂停或阻塞了生成器本身的代码。在 `yield foo(11,31)` 中，首先调用 `foo(11,31)`，它没有返回值（即返回 `undefined`），所以发出了一个调用来请求数据，但实际上之后做的是 `yield undefined`。如果这个 `Ajax` 请求成功，我们调用：`it.next( data )`; 这会用响应数据恢复生成器，意味着暂停的 `yield` 表达式直接接收到了这个值。然后随着生成器代码继续运行，这个值被赋给局部变量 `text`。

### 生成器 + Promise

`ES6` 中最完美的世界就是生成器（看似同步的异步代码）和`Promise`（可信任可组合）的结合。获得 `Promise` 和生成器最大效用的最自然的方法就是 `yield` 出来一个 `Promise`，然后通过这个 `Promise` 来控制生成器的迭代器。

```js
function foo(x, y) {
  return request("http://some.url.1/?x=" + x + "&y=" + y);
}
function* main() {
  try {
    var text = yield foo(11, 31);
    console.log(text);
  } catch (err) {
    console.error(err);
  }
}

var it = main();
var p = it.next().value;
// 等待promise p决议
p.then(
  function (text) {
    it.next(text);
  },
  function (err) {
    it.throw(err);
  }
);
```

```js
// Promise-yielding 生成器的工具
function run(gen) {
  var args = [].slice.call(arguments, 1),
    it;
  // 在当前上下文中初始化生成器
  it = gen.apply(this, args);
  // 返回一个promise用于生成器完成
  return Promise.resolve().then(function handleNext(value) {
    // 对下一个yield出的值运行
    var next = it.next(value);
    return (function handleResult(next) {
      // 生成器运行完毕了吗？
      if (next.done) {
        return next.value;
      }
      // 否则继续运行
      else {
        return Promise.resolve(next.value).then(
          // 成功就恢复异步循环，把决议的值发回生成器
          handleNext,
          // 如果value是被拒绝的 promise，
          // 就把错误传回生成器进行出错处理
          function handleErr(err) {
            return Promise.resolve(it.throw(err)).then(handleResult);
          }
        );
      }
    })(next);
  });
}

function* main() {
  // ..
}
run(main); // 它会自动异步运行你传给它的生成器，直到结束。
```

当 `await` 了一个 `Promise`，`async` 函数就会自动获知要做什么，它会暂停这个函数（就像生成器一样），直到 `Promise` 决议。

```js
function foo(x, y) {
  return request("http://some.url.1/?x=" + x + "&y=" + y);
}
async function main() {
  try {
    var text = await foo(11, 31);
    console.log(text);
  } catch (err) {
    console.error(err);
  }
}
main();
```

## 文档

【1】 [事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

【2】 [Promises/A+ 规范](https://promisesaplus.com/)

【3】 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
