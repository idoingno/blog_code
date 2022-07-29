---
title: 复杂度分析
autoGroup-2: 数据结构与算法
---


> 什么是数据结构？  
> **数据结构就是指一组数据的存储结构。**  
> 什么又是算法？  
> **算法就是操作数据的一组方法。**  
> 数据结构是为算法服务的，算法要作用在特定的数据结构之上。

## 常用数据结构与算法
10 个数据结构：数组、链表、栈、队列、散列表、二叉树、堆、跳表、图、Trie 树；  
10 个算法：递归、排序、二分查找、搜索、哈希算法、贪心算法、分治算法、回溯算法、动态规划、字符串匹配算法。

## 复杂度分析

首先要掌握一个数据结构与算法中最重要的概念——复杂度分析。  
数据结构和算法解决的是如何更省、更快地存储和处理数据的问题，因此，我们就需要一个考量效率和资源消耗的方法，这就是复杂度分析方法。

### 大 O 复杂度表示法

算法的执行效率，粗略地讲，就是算法代码执行的时间。  

**所有代码的执行时间 T(n) 与每行代码的执行次数 f(n) 成正比。**  

![](/imgs/js/O1.webp)

`T(n) `，它表示代码执行的时间；`n` 表示数据规模的大小；`f(n)` 表示每行代码执行的次数总和。因为这是一个公式，所以用 `f(n)` 来表示。公式中的 `O`，表示代码的执行时间 `T(n)` 与 `f(n)` 表达式成正比。  

> 大 O 时间复杂度实际上并不具体表示代码真正的执行时间，而是表示代码执行时间随数据规模增长的变化趋势，所以，也叫作渐进时间复杂度（asymptotic time complexity），简称时间复杂度。
 
![](/imgs/js/O2.webp)

### 时间复杂度分析

1. 只关注循环执行次数最多的一段代码
> 在分析一个算法、一段代码的时间复杂度的时候，也只关注循环执行次数最多的那一段代码就可以了

```C
// 总的时间复杂度就是 O(n)
int cal(int n) {
  int sum = 0;
  int i = 1;
  for (; i <= n; ++i) {
    sum = sum + i;
  }
  return sum;
}
```

2. 加法法则：总复杂度等于量级最大的那段代码的复杂度
```C
// 分别分析每一部分的时间复杂度，然后把它们放到一块儿，再取一个量级最大的作为整段代码的复杂度
// 第二段代码和第三段代码的时间复杂度是 O(n) 和 O(n^2)
int cal(int n) {
  int sum_1 = 0;
  int p = 1;
  for (; p < 100; ++p) {
    sum_1 = sum_1 + p;
  }

  int sum_2 = 0;
  int q = 1;
  for (; q < n; ++q) {
    sum_2 = sum_2 + q;
  }

  int sum_3 = 0;
  int i = 1;
  int j = 1;
  for (; i <= n; ++i) {
    j = 1; 
    for (; j <= n; ++j) {
      sum_3 = sum_3 +  i * j;
    }
  }

  return sum_1 + sum_2 + sum_3;
}
```
综合这三段代码的时间复杂度，我们取其中最大的量级。所以，整段代码的时间复杂度就为 <common-latexDisplay> O(n^2) </common-latexDisplay>。

如果 <common-latexDisplay> T1(n)=O(f(n)) </common-latexDisplay>，<common-latexDisplay> T2(n)=O(g(n)) </common-latexDisplay>；那么 <common-latexDisplay> T(n)=T1(n)+T2(n)=max(O(f(n)) </common-latexDisplay>, <common-latexDisplay> O(g(n))) =O(max(f(n), g(n))) </common-latexDisplay>.

3. 乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积

如果 <common-latexDisplay> T1(n)=O(f(n)) </common-latexDisplay>，<common-latexDisplay> T2(n)=O(g(n)) </common-latexDisplay>；那么 <common-latexDisplay> T(n)=T1(n)*T2(n)=O(f(n))*O(g(n))=O(f(n)*g(n)) </common-latexDisplay>.

```C
int cal(int n) {
   int ret = 0; 
   int i = 1;
   for (; i < n; ++i) {
     ret = ret + f(i);
   } 
 } 
 
int f(int n) {
  int sum = 0;
  int i = 1;
  for (; i < n; ++i) {
    sum = sum + i;
  } 
  return sum;
}
```

假设 <common-latexDisplay> T1(n) = O(n) </common-latexDisplay>，<common-latexDisplay> T2(n) = O(n^2) </common-latexDisplay>，则 <common-latexDisplay> T1(n) * T2(n) = O(n^3) </common-latexDisplay>


### 几种常见时间复杂度实例分析

1. `Ο(1)` 一般情况下，只要算法中不存在循环语句、递归语句，即使有成千上万行的代码，其时间复杂度也是`Ο(1)`  
```C
 int i = 8;
 int j = 6;
 int sum = i + j;
```
2. O(logn)、O(nlogn) 
```C
// 从代码中可以看出，变量 i 的值从 1 开始取，每循环一次就乘以 2。当大于 n 时，循环结束。
 i=1;
 while (i <= n)  {
   i = i * 2;
 }
```
![](/imgs/js/O3.webp)
通过 <common-latexDisplay> 2x=n </common-latexDisplay> 求解 `x` 。<common-latexDisplay> x=log2n </common-latexDisplay>，所以，这段代码的时间复杂度就是 <common-latexDisplay> O(log_2 n) </common-latexDisplay>。

```C
  i=1;
  while (i <= n)  {
    i = i * 3;
  }
```

这段代码的时间复杂度为 <common-latexDisplay> O(log_3 n) </common-latexDisplay>  
实际上，不管是以 `2` 为底、以 `3` 为底，还是以 `10` 为底，我们可以把所有对数阶的时间复杂度都记为 <common-latexDisplay> O(log n) </common-latexDisplay>  

对数之间是可以互相转换的，<common-latexDisplay> log_3 n </common-latexDisplay> 就等于 <common-latexDisplay> log_3 2 * log_2 n </common-latexDisplay>，所以 <common-latexDisplay> O(log_3 n) = O(C * log_2 n) </common-latexDisplay> ，其中 <common-latexDisplay> C = log_3 2 </common-latexDisplay> 是一个常量。基于我们前面的一个理论：在采用`大 O 标记复杂度`的时候，可以忽略系数，即 <common-latexDisplay> O(Cf(n)) = O(f(n)) </common-latexDisplay>。所以，<common-latexDisplay> O(log_2 n) </common-latexDisplay> 就等于 <common-latexDisplay> O(log_3 n) </common-latexDisplay>。因此，在对数阶时间复杂度的表示方法里，我们忽略对数的“底”，统一表示为 <common-latexDisplay> O(logn) </common-latexDisplay>。

如果一段代码的时间复杂度是 <common-latexDisplay> O(logn) </common-latexDisplay>，我们循环执行 `n` 遍，时间复杂度就是 <common-latexDisplay> O(nlogn) </common-latexDisplay>了。而且，<common-latexDisplay> O(nlogn) </common-latexDisplay>也是一种非常常见的算法时间复杂度。比如，归并排序、快速排序的时间复杂度都是 <common-latexDisplay> O(nlogn) </common-latexDisplay>。

3. O(m+n)、O(m*n)

```C
// 时间复杂度就是 O(m+n)
int cal(int m, int n) {
  int sum_1 = 0;
  int i = 1;
  for (; i < m; ++i) {
    sum_1 = sum_1 + i;
  }

  int sum_2 = 0;
  int j = 1;
  for (; j < n; ++j) {
    sum_2 = sum_2 + j;
  }

  return sum_1 + sum_2;
}
```

针对这种情况，原来的加法法则就不正确了，我们需要将加法规则改为：<common-latexDisplay> T1(m) + T2(n) = O(f(m) + g(n)) </common-latexDisplay>。但是乘法法则继续有效：<common-latexDisplay> T1(m)*T2(n) = O(f(m) * f(n)) </common-latexDisplay>。

### 空间复杂度分析

时间复杂度的全称是**渐进时间复杂度**，表示算法的执行时间与数据规模之间的增长关系。类比一下，空间复杂度全称就是**渐进空间复杂度**（asymptotic space complexity），表示算法的存储空间与数据规模之间的增长关系。

```C
// 第 2 行代码中，申请了一个空间存储变量 i，但是它是常量阶的，跟数据规模 n 没有关系，所以我们可以忽略。
// 第 3 行申请了一个大小为 n 的 int 类型数组，除此之外，剩下的代码都没有占用更多的空间，所以整段代码的空间复杂度就是 O(n)。
void print(int n) {
  int i = 0;
  int[] a = new int[n];
  for (i; i <n; ++i) {
    a[i] = i * i;
  }

  for (i = n-1; i >= 0; --i) {
    print out a[i]
  }
}
```

常见的空间复杂度就是 <common-latexDisplay> O(1) </common-latexDisplay>、<common-latexDisplay> O(n)</common-latexDisplay>、<common-latexDisplay> O(n^2) </common-latexDisplay>，像 <common-latexDisplay> O(logn) </common-latexDisplay>、<common-latexDisplay> O(nlogn) </common-latexDisplay> 这样的对数阶复杂度平时都用不到

常见的复杂度并不多，从低阶到高阶有：<common-latexDisplay> O(1) </common-latexDisplay>、<common-latexDisplay> O(logn) </common-latexDisplay>、<common-latexDisplay> O(n)</common-latexDisplay>、<common-latexDisplay> O(nlogn) </common-latexDisplay>、<common-latexDisplay> O(n^2) </common-latexDisplay>

![](/imgs/js/O4.webp)

### 最好、最坏情况时间复杂度

```C
// n表示数组array的长度
// 复杂度为O(n)
int find(int[] array, int n, int x) {
  int i = 0;
  int pos = -1;
  for (; i < n; ++i) {
    if (array[i] == x) pos = i;
  }
  return pos;
}

// 优化一下代码
// n表示数组array的长度
int find(int[] array, int n, int x) {
  int i = 0;
  int pos = -1;
  for (; i < n; ++i) {
    if (array[i] == x) {
       pos = i;
       break;
    }
  }
  return pos;
}
```

这个时候就发现，这段代码的时间复杂度是不一样的。

为了表示代码在不同情况下的不同时间复杂度，需要引入三个概念：最好情况时间复杂度、最坏情况时间复杂度和平均情况时间复杂度。

最好情况时间复杂度就是，在最理想的情况下，执行这段代码的时间复杂度。(时间复杂度就是 <common-latexDisplay> O(1)</common-latexDisplay>)

最坏情况时间复杂度就是，在最糟糕的情况下，执行这段代码的时间复杂度。(时间复杂度就是 <common-latexDisplay> O(n)</common-latexDisplay>)

### 平均情况时间复杂度

最好情况时间复杂度和最坏情况时间复杂度对应的都是极端情况下的代码复杂度，发生的概率其实并不大。为了更好地表示平均情况下的复杂度，需要引入另一个概念：平均情况时间复杂度，简称为平均时间复杂度。

要查找的变量 `x` 在数组中的位置，有 `n+1` 种情况：在数组的 `0～n-1 `位置中和不在数组中。我们把每种情况下，查找需要遍历的元素个数累加起来，然后再除以` n+1`，就可以得到需要遍历的元素个数的平均值，即：
![](/imgs/js/O5.webp)
公式简化之后，得到的平均时间复杂度就是 <common-latexDisplay> O(n) </common-latexDisplay>

要查找的变量 `x`，要么在数组里，要么就不在数组里。这两种情况对应的概率统计起来很麻烦，为了方便，假设在数组中与不在数组中的概率都为 <common-latexDisplay> \frac{1}{2} </common-latexDisplay>。另外，要查找的数据出现在 `0～n-1` 这 `n` 个位置的概率也是一样的，为 <common-latexDisplay> \frac{1}{n} </common-latexDisplay>。所以，根据概率乘法法则，要查找的数据出现在 `0～n-1` 中任意位置的概率就是 <common-latexDisplay> \frac{1}{(2n)} </common-latexDisplay>。

如果我们把每种情况发生的概率也考虑进去，那平均时间复杂度的计算过程就变成了这样
![](/imgs/js/O6.webp)

这个值就是概率论中的**加权平均值**，也叫作**期望值**，所以平均时间复杂度的全称应该叫**加权平均时间复杂度**或者**期望时间复杂度**。

用大 O 表示法来表示，去掉系数和常量，这段代码的加权平均时间复杂度仍然是 O(n)。

### 均摊时间复杂度

平均复杂度只在某些特殊情况下才会用到，而**均摊时间复杂度**应用的场景比它更加特殊、更加有限。

```C
// array表示一个长度为n的数组
// 代码中的array.length就等于n
// 这段代码实现了一个往数组中插入数据的功能。当数组满了之后，也就是代码中的 count == array.length 时，用 for 循环遍历数组求和，并清空数组，
// 将求和之后的 sum 值放到数组的第一个位置，然后再将新的数据插入。但如果数组一开始就有空闲空间，则直接将数据插入数组。
int[] array = new int[n];
int count = 0;

void insert(int val) {
  if (count == array.length) {
      int sum = 0;
      for (int i = 0; i < array.length; ++i) {
        sum = sum + array[i];
      }
      array[0] = sum;
      count = 1;
  }

  array[count] = val;
  ++count;
}
```
最理想的情况下，数组中有空闲空间，我们只需要将数据插入到数组下标为 count 的位置就可以了，所以最好情况时间复杂度为 <common-latexDisplay> O(1) </common-latexDisplay>。最坏的情况下，数组中没有空闲空间了，我们需要先做一次数组的遍历求和，然后再将数据插入，所以最坏情况时间复杂度为 <common-latexDisplay> O(n) </common-latexDisplay>。

平均时间复杂度是 <common-latexDisplay> O(1) </common-latexDisplay>

每一次 <common-latexDisplay> O(n) </common-latexDisplay> 的插入操作，都会跟着 `n-1` 次 <common-latexDisplay> O(1) </common-latexDisplay> 的插入操作，所以把耗时多的那次操作均摊到接下来的 `n-1` 次耗时少的操作上，均摊下来，这一组连续的操作的均摊时间复杂度就是 <common-latexDisplay> O(1) </common-latexDisplay>。这就是均摊分析的大致思路。

