---
title: 栈
autoGroup-2: 数据结构与算法
---

## 栈结构【Stack】

**后进者先出，先进者后出，这就是典型的“栈”结构**

![](/imgs/js/S1.webp)

从栈的操作特性上来看，**栈是一种“操作受限”的线性表**，只允许在一端插入和删除数据。

栈主要包含两个操作，**入栈**和**出栈**，也就是在栈顶插入一个数据和从栈顶删除一个数据。实际上，栈既可以用数组来实现，也可以用链表来实现。用数组实现的栈，叫作顺序栈，用链表实现的栈，叫作链式栈。

![](/imgs/js/S2.webp)

因为在大部分情况下，入栈操作的时间复杂度 O 都是 O(1)，只有在个别时刻才会退化为 O(n)，所以把耗时多的入栈操作的时间均摊到其他入栈操作上，平均情况下的耗时就接近 O(1)。

## 函数调用栈

操作系统给每个线程分配了一块独立的内存空间，这块内存被组织成“栈”这种结构, 用来存储函数调用时的临时变量。每进入一个函数，就会将临时变量作为一个栈帧入栈，当被调用函数执行完成，返回之后，将这个函数对应的栈帧出栈。

```js
// 
int main() {
   int a = 1; 
   int ret = 0;
   int res = 0;
   ret = add(3, 5);
   res = a + ret;
   printf("%d", res);
   reuturn 0;
}

int add(int x, int y) {
   int sum = 0;
   sum = x + y;
   return sum;
}
```
![](/imgs/js/S3.webp)

## 表达式求值

实际上，编译器就是通过两个栈来实现的。其中一个保存操作数的栈，另一个是保存运算符的栈。从左向右遍历表达式，当遇到数字，我们就直接压入操作数栈；当遇到运算符，就与运算符栈的栈顶元素进行比较。

如果比运算符栈顶元素的优先级高，就将当前运算符压入栈；如果比运算符栈顶元素的优先级低或者相同，从运算符栈中取栈顶运算符，从操作数栈的栈顶取 `2` 个操作数，然后进行计算，再把计算完的结果压入操作数栈，继续比较。

![](/imgs/js/S4.webp)

## 括号匹配

假设表达式中只包含三种括号，圆括号 `()`、方括号`[]`和花括号`{}`，并且它们可以任意嵌套。比如，`{[] ()[{}]}`或`[{()}([])]`等都为合法格式，而`{[}()]`或`[({)]`为不合法的格式。

用栈来保存未匹配的左括号，从左到右依次扫描字符串。当扫描到左括号时，则将其压入栈中；当扫描到右括号时，从栈顶取出一个左括号。如果能够匹配，比如`“(”`跟“)”匹配，`“[”`跟`“]”`匹配，`“{”`跟`“}”`匹配，则继续扫描剩下的字符串。如果扫描的过程中，遇到不能配对的右括号，或者栈中没有数据，则说明为非法格式。

当所有的括号都扫描完成之后，如果栈为空，则说明字符串为合法格式；否则，说明有未匹配的左括号，为非法格式。

## 浏览器的前进、后退功能

使用两个栈，`X` 和 `Y`，把首次浏览的页面依次压入栈 `X`，当点击后退按钮时，再依次从栈 `X` 中出栈，并将出栈的数据依次放入栈 `Y`。当我们点击前进按钮时，我们依次从栈 `Y` 中取出数据，放入栈 `X` 中。当栈 `X` 中没有数据时，那就说明没有页面可以继续后退浏览了。当栈 `Y` 中没有数据，那就说明没有页面可以点击前进按钮浏览了。

比如你顺序查看了 `a，b，c` 三个页面，我们就依次把 `a，b，c` 压入栈，这个时候，两个栈的数据就是这个样子：
![](/imgs/js/S5.webp)
当你通过浏览器的后退按钮，从页面 `c` 后退到页面 `a` 之后，我们就依次把 `c` 和 `b` 从栈 `X` 中弹出，并且依次放入到栈 `Y`。这个时候，两个栈的数据就是这个样子：
![](/imgs/js/S6.webp)
这个时候你又想看页面 `b`，于是你又点击前进按钮回到 `b` 页面，我们就把 `b` 再从栈 `Y` 中出栈，放入栈 `X` 中。此时两个栈的数据是这个样子：
![](/imgs/js/S7.webp)
这个时候，你通过页面 `b` 又跳转到新的页面 `d` 了，页面 c 就无法再通过前进、后退按钮重复查看了，所以需要清空栈 `Y`。此时两个栈的数据这个样子：
![](/imgs/js/S8.webp)