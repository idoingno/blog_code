<template>
  <div class="wrap">
    <div v-for="(item,index) in typeData" class="item" :key="index">
      <p class="list">
        <a :href="item.href" target="_blank" :title="item.text">
          <img
            width="100"
            height="44"
            class="img-pic"
            :src="$withBase(item.imgSrc)"
            :alt="item.alt"
          />
        </a>
      </p>
      <p class="text">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "webUrlCard",
  data() {
    return {
      typeData: [
        {
          href: "https://developer.mozilla.org/zh-CN/docs/Web",
          imgSrc: "/imgs/tecDoc/css-mdn.svg",
          alt: "MDN-Web 开发技术",
          text: "MDN 面向 Web 开发者的文档",
        },

        {
          href: "https://cn.vuejs.org/",
          imgSrc: "/imgs/tecDoc/Vue.svg",
          alt: "Vue官方文档",
          text: "Vue官方文档",
        },

        {
          href: "https://zh-hans.reactjs.org/",
          imgSrc: "/imgs/tecDoc/react.svg",
          alt: "React官方文档",
          text: "React官方文档",
        },

        {
          href: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
          imgSrc: "/imgs/tecDoc/wechat.svg",
          alt: "微信小程序",
          text: "微信小程序",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width: 960px) {
  .wrap {
    display: flex;
    justify-content: start;
    text-align: center;
    flex-wrap: wrap;

    .item {
      margin: 0 20px;

      .list {
        width: 200px;
        height: 65px;

        a {
          display: block;
          margin: 0 auto;

          img {
            display: inline-block;
            vertical-align: center;
          }
        }
      }

      .text {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .wrap {
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-wrap: nowrap;
    overflow-x: auto;

    .item {
      .list {
        width: 160px;
        height: 65px;

        a {
          display: block;
          margin: 0 auto;

          img {
            display: inline-block;
            vertical-align: center;
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
          }
        }
      }

      .text {
        width: 160px;
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; // 需要显示的行数
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
