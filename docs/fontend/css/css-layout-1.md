---
title: Flex 容器
autoGroup-3: 布局
---

Flex 全称 Flexible box 布局模型，通常称为 flexbox 或 flex，也称为弹性盒子或弹性布局。[Flex MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

## justify-content

如果把 `flex` 容器设为一个行，它的子元素会从左到右逐个排列； 如果把 `flex` 容器设为一个列，它的子元素会从上到下逐个排列。 子元素排列的方向被称为 _main axis（主轴）_。 对于行，主轴水平贯穿每一个项目； 对于列，主轴垂直贯穿每一个项目。

对于如何沿主轴线排放 `flex` 项目，有几种选择。 很常用的一种是 `justify-content: center;` 即 `flex` 子元素在 `flex` 容器中居中排列。

其他选择包括：

- **flex-start**：从 flex 容器的起始位置开始排列项目。 对行来说是把项目移至左边， 对于列是把项目移至顶部。 如未设置 `justify-content` 的值，那么这就是默认值。
- **flex-end**：从 flex 容器的终止位置开始排列项目。 对行来说是把项目移至右边， 对于列是把项目移至底部。
- **space-between**：项目间保留一定间距地沿主轴居中排列。 第一个和最后一个项目被放置在容器边沿。 例如，在行中第一个项目会紧贴着容器左边，最后一个项目会紧贴着容器右边，然后其他项目均匀排布。
- **space-around**：与 `space-between` 相似，但头尾两个项目不会紧贴容器边缘，所有项目之间的空间均匀排布。
- **space-evenly**：头尾两个项目不会紧贴容器边缘，所有项目之间的空间均匀排布。

![图片](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

## align-items

CSS 中的 `align-items` 属性用来定义 `flex` 子元素沿交叉轴的对齐方式。 对行来说，定义的是元素的上下对齐方式； 对列来说，是定义元素的左右对齐方式。

`align-items` 的可选值包括：

- **flex-start**：从 `flex` 容器的起始位置开始对齐项目。 对行来说，把项目移至容器顶部； 对列来说，是把项目移至容器左边。
- **flex-end**：从 `flex` 容器的终止位置开始对齐项目。 对行来说，把项目移至容器底部； 对列来说，把项目移至容器右边。
- **center**：把项目居中放置。 对行来说，垂直居中（项目距离顶部和底部的距离相等）； 对列来说，水平居中（项目距离左边和右边的距离相等）。
- **stretch**：拉伸项目，填满 `flex` 容器。 例如，排成行的项目从容器顶部拉伸到底部。 如未设置`align-items`的值，那么这就是默认值。
- **baseline**：沿基线对齐。 基线是文本相关的概念，可以认为它是字母排列的下端基准线。

## flex-wrap

`CSS flexbox` 有一个把 flex 子元素拆分为多行（或多列）的特性。 默认情况下，`flex` 容器会调整项目大小，把它们都塞到一起。 对于行来说，所有项目都会在一条直线上。

不过，使用 `flex-wrap` 属性可以使项目换行展示。 这意味着多出来的子元素会被移到新的行或列。 换行发生的断点由子元素和容器的大小决定。

换行方向的可选值有这些：

- **nowrap**：默认值，不换行。
- **wrap**：如果排列以行为基准，就将行从上往下排列；如果排列以列为基准，就将列从左往右排列。
- **wrap-reverse**：如果排列以行为基准，就将行从下往上排列；如果排列以列为基准，就将列从右往左排列。

## flex-shrink

使用之后，如果 `flex` 容器太小，则子元素会自动缩小。 当容器的宽度小于里面所有子元素的宽度之和时，所有子元素都会自动压缩。

子元素的 `flex-shrink` 接受数值作为属性值。 数值越大，则该元素与其他元素相比会被压缩得更厉害。 比如，一个项目的 `flex-shrink` 属性值为 1，另一个项目的 `flex-shrink` 属性值为 3，那么后者相比前者会受到 3 倍压缩。

## flex-grow

与 `flex-shrink` 相对的是 `flex-grow`。 相应地，`flex-grow` 会在容器太大时对子元素作出调整。

## flex-basis

`flex-basis` 属性定义了在使用 _CSS_ 的 `flex-shrink` 或 `flex-grow` 属性对元素进行调整前，元素的初始大小。

`flex-basis` 属性的单位与其他表示尺寸的属性的单位一致（px、em、% 等）。 如果值为 _auto_，则项目的尺寸随内容调整。

## order

`order` 属性告诉 _CSS flex_ 容器里子元素的顺序。 默认情况下，项目排列顺序与源 _HTML_ 文件中顺序相同。 这个属性接受数字作为参数，可以使用负数。

## align-self

这个属性允许你调整单个子元素自己的对齐方式，而不会影响到全部子元素。 因为 _float、clear 和 vertical-align_ 等调整对齐方式的属性都不能应用于 `flex` 子元素，所以这个属性显得十分有用。

`align-self` 可设置的值与 `align-items` 的一样，并且它会覆盖 `align-items` 所设置的值。
