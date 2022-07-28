/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4fad0d7fde582766a53a9092d696b781"
  },
  {
    "url": "about/index.html",
    "revision": "fcd52b04617e485bedc64bb35999a424"
  },
  {
    "url": "assets/css/0.styles.39ef5b7c.css",
    "revision": "a1af20cf54fa7062b0dc29142a4e840d"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.65986e61.js",
    "revision": "1d7467b744cf415b31f9b1186d668fd7"
  },
  {
    "url": "assets/js/10.da8603bb.js",
    "revision": "a8d290e40aee3d13b330bb1bc7488603"
  },
  {
    "url": "assets/js/11.077953af.js",
    "revision": "eed9a5fa3f01c27a19ad47528e4dfebc"
  },
  {
    "url": "assets/js/12.365a2581.js",
    "revision": "c4b3bf7d4d731ca0148b13cc37cc80a3"
  },
  {
    "url": "assets/js/13.f82ef9f8.js",
    "revision": "fec5136653b30320eba08482fdb4f360"
  },
  {
    "url": "assets/js/14.3fbea0d5.js",
    "revision": "440326469fad4410e1b990f319e7d1c4"
  },
  {
    "url": "assets/js/15.c2d75f52.js",
    "revision": "099448e44874aabd62fea13360822c69"
  },
  {
    "url": "assets/js/16.60c42bdd.js",
    "revision": "f28921f74ea3ffb62e0c6ca1c022725a"
  },
  {
    "url": "assets/js/17.2207185d.js",
    "revision": "072d4a233a013ffeded27d88c9fd3d9d"
  },
  {
    "url": "assets/js/18.1d7d1506.js",
    "revision": "f7ed30a45888a46557d2a6455afe1ed8"
  },
  {
    "url": "assets/js/19.3132bc49.js",
    "revision": "f9f4298bcd4c9ad98734e53e29c28829"
  },
  {
    "url": "assets/js/20.15cf9058.js",
    "revision": "0c7ac9ca19d328df199d55c3d9dbf614"
  },
  {
    "url": "assets/js/21.777c3a2d.js",
    "revision": "959831671b860d7364e65b5d8ef729cd"
  },
  {
    "url": "assets/js/22.4e0ce88c.js",
    "revision": "478734c74b969c3214389a985689864a"
  },
  {
    "url": "assets/js/23.ce128cbe.js",
    "revision": "a0778c424172a1f0b6b8554e8580e9e7"
  },
  {
    "url": "assets/js/24.2be4fe55.js",
    "revision": "5b4145241086084c559952a4bbd4a039"
  },
  {
    "url": "assets/js/25.65e917b4.js",
    "revision": "335fde3bad6eb704d16b2372dd7190a8"
  },
  {
    "url": "assets/js/26.7a304f6e.js",
    "revision": "1b2a991259e39899751455ed048ed1cd"
  },
  {
    "url": "assets/js/27.474ec2ef.js",
    "revision": "1b2c7971764e41080289ea9ff81df161"
  },
  {
    "url": "assets/js/28.9dbbf8a2.js",
    "revision": "c665fba5d383122bccbef1b84c69c6b6"
  },
  {
    "url": "assets/js/29.c6a7dae2.js",
    "revision": "d88ae37fa6ee4d65965f3a57a4b0111b"
  },
  {
    "url": "assets/js/3.c9e955a4.js",
    "revision": "2c8a24f2175f212a75968971d9a27f4e"
  },
  {
    "url": "assets/js/30.c848274a.js",
    "revision": "81b1eebabc0530da1e37b42bd628c001"
  },
  {
    "url": "assets/js/31.8f5a276a.js",
    "revision": "770d29471a9bb36536f88122bb1dfab6"
  },
  {
    "url": "assets/js/32.e13a9672.js",
    "revision": "da566e12f01ceeb2aae7ca2d1cb3c1eb"
  },
  {
    "url": "assets/js/33.95713ebc.js",
    "revision": "ebfc765529da328932a99d2648f6e587"
  },
  {
    "url": "assets/js/4.7d71af62.js",
    "revision": "24cb2fdb30bb9f8f14c84c9f4554bd75"
  },
  {
    "url": "assets/js/5.ed838285.js",
    "revision": "22bcd207db61b6a25d0197f74e99eeb4"
  },
  {
    "url": "assets/js/6.d9c8d63b.js",
    "revision": "9224e332c8b69ca342a17d14008f8957"
  },
  {
    "url": "assets/js/7.4ebfa788.js",
    "revision": "59e50046490bcfcdf9a0b8796a17fe04"
  },
  {
    "url": "assets/js/8.9206f87b.js",
    "revision": "ad62b5a2397b789a962e14d2370b669b"
  },
  {
    "url": "assets/js/9.49e6020e.js",
    "revision": "627f6dca1948a1d648bb4c6a19ebc57a"
  },
  {
    "url": "assets/js/app.e1880f2d.js",
    "revision": "9dc19be592a509c7137faf01f6035362"
  },
  {
    "url": "categories/index.html",
    "revision": "385d6d5891b1a1eaab24c5893f660c7e"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "030e1a58a929c8d4e2223837d72d9da0"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "aa49fae2046f7235edb4dc93bf401192"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "a362b64f9fd31ee9bcab32ebc9b013d4"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "6d5facefe0ce083ec40976b88f039864"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "594edc7f9aec5e0f74bc8e906cfd08c9"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "c7dbbbdd763013d4c8b0fce689d84b6d"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "09d51db2288bb11b851899c35f4e4477"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "1c4a5382e1721e0649afb1fb7b911b89"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "100e3638eff1ffd1823e076e256e58b5"
  },
  {
    "url": "fontend/Js/ConditionalTypes-a/index.html",
    "revision": "d78fedc12df52dfe8a34f314c976626c"
  },
  {
    "url": "fontend/Js/Generics-b/index.html",
    "revision": "4e6e344e738c8538cd5c4e4bbfbfed3f"
  },
  {
    "url": "fontend/Js/index.html",
    "revision": "4ad152bebccb389e6bb5c6d97cb8b1e7"
  },
  {
    "url": "fontend/Js/js-basic-algorithm/index.html",
    "revision": "c460784de6283a27b22541d57b2e4f79"
  },
  {
    "url": "fontend/Js/js-core-1/index.html",
    "revision": "67ebed605623a2fb3f9fdd857a43dcff"
  },
  {
    "url": "fontend/Js/js-core-2/index.html",
    "revision": "86313f79e9c5d7469724773b9f03fed4"
  },
  {
    "url": "fontend/Js/js-core-3/index.html",
    "revision": "f710adbbd1c9c8cec59ac3a1b22bc981"
  },
  {
    "url": "fontend/Js/js-core-4/index.html",
    "revision": "4b1940d50d7f27ad802d96b905949d1d"
  },
  {
    "url": "fontend/Js/js-core-5/index.html",
    "revision": "c33deb72709b9bf0cf80042b51b5d0b7"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "a325c7e520f83919e635f62642862f9e"
  },
  {
    "url": "imgs/0210302175705.jpg",
    "revision": "b9324a2c0abcdc2b3c8e11de8c31d118"
  },
  {
    "url": "imgs/css/grid-1.png",
    "revision": "babdb6b01688f561109fb696f2b186b8"
  },
  {
    "url": "imgs/css/heart.png",
    "revision": "4f53945806d2e9c4b7953187c2724b6a"
  },
  {
    "url": "imgs/css/penguin.png",
    "revision": "9f5a6afa46c2d291b6d100517a0da444"
  },
  {
    "url": "imgs/js/event-loop.png",
    "revision": "b3eee6c22df110783731992fbdb3fae9"
  },
  {
    "url": "imgs/js/object-1.png",
    "revision": "6d298f83d3ab39a859c70d39028dc912"
  },
  {
    "url": "imgs/js/object-2.png",
    "revision": "e5a2175441450b21f463972428ade25f"
  },
  {
    "url": "imgs/js/scope-1.png",
    "revision": "c0010460fd7505239c3e010305b95800"
  },
  {
    "url": "imgs/tecDoc/ant-design.svg",
    "revision": "bd8dd5a2f71f266119f6ac759b8f1dd7"
  },
  {
    "url": "imgs/tecDoc/css-mdn.svg",
    "revision": "870c138799add28b634d00af76607a83"
  },
  {
    "url": "imgs/tecDoc/elements.svg",
    "revision": "128736e192298cd8acfbe45c2db187ec"
  },
  {
    "url": "imgs/tecDoc/event.svg",
    "revision": "38effeca48c65e29bab961c32ef5c6a2"
  },
  {
    "url": "imgs/tecDoc/react.svg",
    "revision": "c72b01e788d5e84d2e626a1d5b8e92d4"
  },
  {
    "url": "imgs/tecDoc/Vue.svg",
    "revision": "c0af479c4f5053e998ef5b1ce1783914"
  },
  {
    "url": "imgs/tecDoc/vuepress-doc.svg",
    "revision": "d3b6418cc7968ce1603e587304b47136"
  },
  {
    "url": "imgs/tecDoc/web-api.svg",
    "revision": "776c80fb58e1187dda6b382ce7e07343"
  },
  {
    "url": "imgs/tecDoc/wechat.svg",
    "revision": "c0c7a6be69710e6cb305f35d80037bcc"
  },
  {
    "url": "index.html",
    "revision": "0208a09233e810adfe28634bd7c449b4"
  },
  {
    "url": "logo.svg",
    "revision": "67234250cdc136dbb9650feef405f6dc"
  },
  {
    "url": "tag/index.html",
    "revision": "0b2ab4cb5314c3edb6b6e9c72740af69"
  },
  {
    "url": "timeline/index.html",
    "revision": "5f037f4253a283b99e2278dadb9227d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
