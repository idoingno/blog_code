---
title: 常见算法
autoGroup-2: 数据结构与算法
---


## 反转字符串

```js
// 第一种方法
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// 第二种
function reverseString(str) {
  return str.split("").reverse().join("");
}
```

## 查找字符串中最长的单词

```js
/**
 * 1、获取字符串并将其转换为单词数组。
 * 2、声明一个变量来跟踪最大长度。
 * 3、通过将当前单词与前一个单词进行比较并存储新的最长单词来检查最长单词。
 */
function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

// 使用reduce
function findLongestWordLength(s) {
  return s.split(" ").reduce(function (longest, word) {
    return Math.max(longest, word.length);
  }, 0);
}

// 使用map
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

## 返回二维数组中的最大数

```js
/**
 * 1、创建一个变量以将结果存储为数组。
 * 2、创建一个外部循环以遍历外部数组。
 * 3、创建第二个变量来保存最大的数字并用第一个数字初始化它。这必须在内部循环之外，因此在我们找到更大的数字之前不会重新分配它。
 * 4、创建所述内部循环以使用子数组。
 * 5、检查子数组的元素是否大于当前存储的最大数。如果是这样，则更新变量中的数字。
 * 6、在内循环之后，将最大的数保存在results数组内部的对应位置。
 * 7、最后返回所述数组。
 */
function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

/**
 * 1、传递给 reduce 方法的回调函数获取前一个值和当前值并比较这两个值
 * 2、如果当前值高于前一个值，我们将其设置为新的前一个值，以便与数组中的下一项进行比较，如果是最后一项，则将其返回给 map 方法回调
 */

function largestOfFour(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}

/**
 * 1、首先映射主数组中的元素。表示每个内部数组。
 * 2、用一个回调函数来查找地图提供的每个内部数组的最大值。
 * 3、Function.prototype.apply将数组作为其参数的能力， null作为不需要任何上下文的方法的上下文传递
 */
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
// 解构出数组
function largestOfFour(arr) {
  return arr.map((item) => Math.max(...item));
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
```

## 确认结尾

```js
// 利用slice方法
function confirmEnding(str, target) {
  // return str.slice(str.length - target.length) === target;
  return str.slice(-target.length) === target;
}

// 利用正则匹配
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

confirmEnding("Bastian", "n");
```

## 重复输出字符串

```js
//  循环拼接
function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}

// 递归
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes("abc", 3);
```

## 截断字符串

如果传入的字符串（第一个参数）的长度大于传入的值（第二个参数），请在这个位置截断它， 并在后面加上 ...，然后返回结果。

```js
// 利用slice
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

## 按参数过滤数组

写一个函数来检查数组（第一个参数 arr）中的元素，并返回数组中第一个通过校验测试的元素。 其中，“通过校验测试”指的是对于数组中的一个元素 x，若 func(x) 返回的结果为 true，则校验测试通过。 如果没有元素通过测试，请返回 undefined。

```js
// 利用find方法
function findElement(arr, func) {
  return arr.find(func);
}

/**
 * 1、使用 .map() 方法查看第一个参数“arr”中给出的数组
 * 2、使用第二个参数中的函数作为 arr.map() 中的回调函数
 * 3、获取函数中第一个满足条件的数的索引。
 * 4、使用该索引显示满足条件的第一个可用数字。
 */
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
```

## 句中单词首字母大写

```js
/**
 * 1、将整个字符串设为小写，然后将其转换为数组。
 * 2、然后使用 map 函数将小写字符替换为大写。
 * 3、最后，使用join方法返回字符串。
 */

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

// 利用\s匹配空格， 利用\S匹配非空格
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot");
```

## 过滤数组中的假值

```js
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

// Array.prototype.filter 方法需要一个返回的函数Boolean值，只有一个参数, 因此传递了内置Boolean函数
function bouncer(arr) {
  return arr.filter(Boolean);
}
```

## 比较字符串

如果数组里的第一个字符串包含了第二个字符串中的所有字母，则返回 true。

```js
// Every会逐个字母地比较，indexOf在第一个字符串上使用。
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
```

## 分割数组

编写一个函数，该函数将一个数组（第一个参数）拆分成若干长度为 size（第二个参数）的子数组，并将它们作为二维数组返回。

```js
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let len = arr.length / size;
  for (let j = 0; j < len; j++) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
```

## 范围内的数字求和

```js
// 利用循环
// 利用数学公式
function sumAll(arr) {
  //   let min = Math.min(arr[0], arr[1]);
  //   let max = Math.max(arr[0], arr[1]);
  //   let sum = 0;
  //   for (let i = min; i <= max; i++) {
  //     sum += i;
  //   }
  //   return sum;

  return ((arr[1] + arr[0]) * (Math.abs(arr[0] - arr[1]) + 1)) / 2;
}

sumAll([1, 4]);
```

## 数组的对称差

取两个数组的交集

```js
// 拼接之后判断
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

## 过滤数组元素

```js
function destroyer(arr) {
  //  let valsToRemove = Object.values(arguments).slice(1);

  var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !valsToRemove.includes(val);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

## 找出包含特定键值对的对象

创建一个查看对象数组（第一个参数）的函数，并返回具有匹配的名称和值对的所有对象的数组（第二个参数）。 如果要包含在返回的数组中，则源对象的每个名称和值对都必须存在于集合中的对象中。

```js
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
```

## 短线连接格式

将字符串转换为短线连接格式。 短线连接格式是小写单词全部小写并以破折号分隔。

```js
// 利用正则匹配
function spinalCase(str) {
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");
```

## 求斐波那契数列中的奇数之和

斐波那契数列中，第一和第二个数字都是 1。 后面的每个数字由之前两数相加得出。 斐波那契数列的前六个数字分别为：1、1、2、3、5、8。 （求奇数之和）

```js
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

sumFibs(4);
```

## 数组扁平化

嵌套数组扁平化成一维数组。

```js
function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);
```

## 凯撒密码

凯撒密码（ **Caesar cipher**）是最简单且最广为人知的密码（ciphers），也被称为移位密码（shift cipher）。 在移位密码中，明文中的字母通过按照一个固定数目进行偏移后被替换成新的字母。

**ROT13** 是一个被广泛使用的加密技术，明文中的所有字母都被移动 13 位。 也就是， `A ↔ N`，`B ↔ O` 等等。

```js
function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, (L) =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}
rot13("SERR PBQR PNZC");
```


## 链表反转

假设链表 1 → 2 → 3 → 4 → ∅， 更改为 ∅ ← 1 ← 2 ← 3 ← 4 

遍历链表时，将当前节点的next指针指向前一个节点。在更改引用之前，需要存储后一个节点。最后返回新的引用头

```js
function Solution(head) {
  let prev = null;
  let curr = head;
  while(head) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev
}
```

复杂度分析

- 时间复杂度：<common-latexDisplay> O(n) </common-latexDisplay>，其中 `n` 是链表的长度。需要遍历链表一次。
- 空间复杂度：<common-latexDisplay> O(1) </common-latexDisplay>。


## 环形链表

**解法一**

1. 遍历所有节点，每次遍历到一个节点时，判断该节点此前是否被访问过。
2. 使用哈希表来存储所有已经访问过的节点。每次我们到达一个节点，如果该节点已经存在于哈希表中，则说明该链表是环形链表，否则就将该节点加入哈希表中。重复这一过程，直到我们遍历完整个链表即可。

**解法二**

1. 使用两个指针， `fast`和`slow`, 起始位置位于链表的头部
2. `slow` 指针每次向后移动一个位置，`fast`指针每次向后移动两个位置
3. 如果存在环，则`fast`指针最终将再次与`slow`指针在环中相遇

```js
// 解法一
var hasCycle = function(head) {
  const visited = new Set();

  while (head !== null) {
      if (visited.has(head)) {
          return head;
      }
      visited.add(head);
      head = head.next;
  }
  return null;
}

// 解法二
// 判断是否有环
var hasCycle = function(head) {
  //设置快慢指针
  let slow = head;
  let fast = head;
  //如果没有环，则快指针会抵达终点，否则继续移动双指针
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      //快慢指针相遇，说明含有环
      if (slow == fast) {
          return true;
      }
  }
  return false;
};
```

## 合并有序链表

**解法一 迭代**

用迭代的方法来实现上述算法。当 `list1` 和 `list2` 都不是空链表时，判断 `list1` 和 `list2` 哪一个链表的头节点的值更小，将较小值的节点添加到结果里，当一个节点被添加到结果里之后，将对应链表中的节点向后移一位。

**复杂度分析**

- 时间复杂度：<common-latexDisplay>O(n + m)</common-latexDisplay>，其中 `n` 和 `m` 分别为两个链表的长度。因为每次循环迭代中，`list1` 和 `list2` 只有一个元素会被放进合并链表中， 因此 `while` 循环的次数不会超过两个链表的长度之和。所有其他操作的时间复杂度都是常数级别的，因此总的时间复杂度为 <common-latexDisplay>O(n + m)</common-latexDisplay>。
- 空间复杂度：<common-latexDisplay>O(1)</common-latexDisplay>。我们只需要常数的空间存放若干变量。

**解法二 递归**

如果 `list1` 或者 `list2` 一开始就是空链表 ，那么没有任何操作需要合并，所以我们只需要返回非空链表。否则，我们要判断 `list1` 和 `list2` 哪一个链表的头节点的值更小，然后递归地决定下一个添加到结果里的节点。如果两个链表有一个为空，递归结束。

**复杂度分析**

- 时间复杂度：<common-latexDisplay>O(n + m)</common-latexDisplay>，其中 `n` 和 `m` 分别为两个链表的长度。因为每次调用递归都会去掉 `l1` 或者 `l2` 的头节点（直到至少有一个链表为空），函数 `mergeTwoList` 至多只会递归调用每个节点一次。因此，时间复杂度取决于合并后的链表长度，即 O(n+m)。
- 空间复杂度：<common-latexDisplay>O(n + m)</common-latexDisplay>，其中 `n` 和 `m` 分别为两个链表的长度。递归调用 `mergeTwoLists` 函数时需要消耗栈空间，栈空间的大小取决于递归调用的深度。结束递归调用时 `mergeTwoLists` 函数最多调用 `n+m` 次，因此空间复杂度为 O(n+m)。


```js
// 解法一
var mergeTwoLists = function(list1, list2) {
    const prehead = new ListNode(null);

    let prev = prehead;
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            prev.next = list1
            list1 = list1.next
        } else {
            prev.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }
    prev.next = list1 === null ? list2 : list1;
    return prehead.next
};

// 解法二
var mergeTwoLists = function(list1, list2) {
  if(!list1) return list2;
  if(!list2) return list1;

  if(list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
};
```


## 删除链表的倒数第N个结点

**解法一 快慢指针**

由于需要找到倒数第 `n` 个节点，因此可以使用两个指针 `fast` 和 `slow` 同时对链表进行遍历，并且 `fast` 比 `slow` 超前 `n` 个节点。当 `fast` 遍历到链表的末尾时，`slow` 就恰好处于倒数第 `n` 个节点。


```js
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head, fast = head;
    // 先让 fast 往后移 n 位
    while(n--) {
        fast = fast.next;
    }

    // 如果 n 和 链表中总结点个数相同，即要删除的是链表头结点时，fast 经过上一步已经到外面了
    if(!fast) {
        return head.next;
    }

    // 然后 快慢指针 一起往后遍历，当 fast 是链表最后一个结点时，此时 slow 下一个就是要删除的结点
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;

    return head;
};
```

**解法二 计算链表长度**

首先从头节点开始对链表进行一次遍历，得到链表的长度 `L`。随后再从头节点开始对链表进行一次遍历，当遍历到第 `L-n` 个节点时，它就是需要删除的节点。

```js
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const prehead = new ListNode(null);
    prehead.next = head;
    let curr = prehead;
    
    let index = 0;
    let glength = getLength(head)

    while(curr.next) {
        if(glength - n  === index) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
        index++
    }

    return prehead.next

    function getLength(head) {
        let length = 0
        while(head) {
            length++
            head = head.next
        }
        return length
    }
};
```

**复杂度分析(两个皆为)**

- 时间复杂度：<common-latexDisplay>O(L)</common-latexDisplay>，其中 `L` 是链表的长度。
- 空间复杂度：<common-latexDisplay>O(1)</common-latexDisplay>。


## 求链表的中间结点

**解法一 快慢指针法**

用两个指针 `slow` 与 `fast` 一起遍历链表。`slow` 一次走一步，`fast` 一次走两步。那么当 `fast` 到达链表的末尾时，`slow` 必然位于中间。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = fast = head;

  while(fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
  }
  return slow
```

**复杂度分析**

- 时间复杂度：<common-latexDisplay>O(N)</common-latexDisplay>，其中 `N` 是给定链表的结点数目。
- 空间复杂度：<common-latexDisplay>O(1)</common-latexDisplay>，只需要常数空间存放 `slow` 和 `fast` 两个指针。