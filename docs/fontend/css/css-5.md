---
title: Grid 容器
autoGroup-3: 布局
---

在 CSS 网格中，父元素称为容器（`container`），它的子元素称为项（`items`）。

## grid-template-columns

**grid-template-columns** 属性值的个数表示网格的列数，每个值表示相应的列宽度（添加多列）

## grid-template-rows

**grid-template-rows** 属性值的个数表示网格的列数，每个值表示相应的行宽度（添加多行）

> **Tips：** 在 CSS 网格中，可以使用绝对单位（如 px）或相对单位（如 em）来定义行或列的大小。 下面的单位也可以使用：
>
> - fr：设置列或行占剩余空间的比例，
> - auto：设置列宽或行高自动等于它的内容的宽度或高度，
> - %：将列或行调整为它的容器宽度或高度的百分比，

## grid-column-gap

**grid-column-gap** 创建多列之间的间距

## grid-row-gap

**grid-row-gap** 创建行之间的间距

## grid-gap

**grid-gap** `grid-row-gap` 和 `grid-column-gap` 的简写属性, 如果 `grid-gap` 只有一个值，那么这个值表示行与行之间、列与列之间的间距均为这个值。 如果有两个值，那么第一个值表示行间距，第二个值表示列间距。

## grid-column

**grid-column** （网格项本身的属性）网格中，假想的水平线和垂直线被称为线（lines）。 这些线在网格的左上角从 1 开始编号，垂直线向右、水平线向下累加计数。

这是一个 3x3 网格的线条：

![](/imgs/css/grid-1.png)

要设置一个网格项占据几列，你可以使用 `grid-column` 属性加上网格线条的编号来定义网格项开始和结束的位置.

## grid-row

要设置一个网格项占据几行，你可以使用 `grid-row` 属性来定义一个网格项开始和结束的水平线。.

## justify-self

在 _CSS_ 网格中，每个网格项的内容分别位于被称为单元格（_cell_）的框内。 你可以使用网格项的 `justify-self` 属性，设置其内容的位置在单元格内沿水平轴的对齐方式。 默认情况下，这个属性的值是 `stretch`，这将使内容占满整个单元格的宽度。 该 _CSS_ 网格属性也可以使用其他的值：

- start：使内容在单元格左侧对齐，
- center：使内容在单元格居中对齐，
- end：使内容在单元格右侧对齐，

## align-self

设置网格项沿竖直方向的对齐方式.（`justify-self`属性的属性值同样也可用于这个属性）

## justify-items

对网格容器使用 `justify-items` 使它们一次性沿水平轴对齐, 它会将网格中**所有**的网格项按所设置的方式对齐。

## align-items

对网格容器使用 `align-items` 属性可以让网格中所有的网格项沿竖直方向对齐。

## 区域模板

可以将网格中的一些单元格组合成一个区域（`area`），并为该区域指定一个自定义名称。 通过给容器加上 `grid-template-areas` 来实现。

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

> 每个单词代表一个单元格，每对引号代表一行。

### grid-area

为网格添加区域模板后，可以通过引用你所定义的区域的名称，将元素放入相应的区域。

```css
grid-area: footer;
// 如果网格中没有定义区域模板，也可以为它添加一个模板
grid-area: 1/1/2/4;
```

> grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;

## repeat

使用 repeat 方法指定行或列的重复次数，后面加上逗号以及需要重复的值。

```css
grid-template-columns: repeat(3, 1fr);
```

## minmax

内置函数 `minmax` 可用于设置 `grid-template-columns` 和 `grid-template-rows` 的值。 它的作用是在网格容器改变大小时限制网格项的大小。 需要指定网格项允许的尺寸范围。

```css
grid-template-columns: 100px minmax(50px, 200px);
```

## auto-fill

repeat 方法带有一个名为自动填充（`auto-fill`）的功能。 它的功能是根据容器的大小，尽可能多地放入指定大小的行或列。 可以通过结合 `auto-fill` 和 `minmax` 来更灵活地布局。

```css
// 列的宽度会随容器大小改变。其次，只要容器宽度不足以插入一个宽为 60px 的列，当前行的所有列就都会一直拉伸。
grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
```

## auto-fit

`auto-fit` 效果几乎和 `auto-fill` 一样。 不同点仅在于，当容器的大小大于各网格项之和时，`auto-fill` 会持续地在一端放入空行或空列，这样就会使所有网格项挤到另一边；而` auto-fit` 则不会在一端放入空行或空列，而是会将所有网格项拉伸至合适的大小。

```css
// 列的宽度会随容器大小改变。其次，只要容器宽度不足以插入一个宽为 60px 的列，当前行的所有列就都会一直拉伸。
grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
```

## 媒体查询创建响应式布局

将 **CSS** 网格与使用媒体查询结合使用，如使用媒体查询重新排列网格区域、更改网格尺寸以及重新排列网格项位置，可以让制作出的网站更具响应性。

```html
<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px) {
    .container {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px) {
    .container {
      grid-template-areas:
        "header header"
        "advert content"
        "footer footer";
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>
```
