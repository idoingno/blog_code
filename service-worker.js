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
    "revision": "4c38f4b32ce8fd16d61b57e1121f51db"
  },
  {
    "url": "about/index.html",
    "revision": "e33f04b3566dc4d0c6d8b8489874d286"
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
    "url": "assets/js/13.08350081.js",
    "revision": "6c7e10e2d9b465af1045a73a5fbeed86"
  },
  {
    "url": "assets/js/14.2214968f.js",
    "revision": "1ada762e750021614f95c18d5dc1faf9"
  },
  {
    "url": "assets/js/15.c2d75f52.js",
    "revision": "099448e44874aabd62fea13360822c69"
  },
  {
    "url": "assets/js/16.1cd570db.js",
    "revision": "3ed3af670eb60024519c029f4764b4b2"
  },
  {
    "url": "assets/js/17.2bd9ce97.js",
    "revision": "826adfe90f647a8cb00864013032f20d"
  },
  {
    "url": "assets/js/18.0387c8f2.js",
    "revision": "d76640bee5c70403cc881f0253f6f267"
  },
  {
    "url": "assets/js/19.63770149.js",
    "revision": "004f8b0a9cf73988892a681634edef3f"
  },
  {
    "url": "assets/js/20.a1d52220.js",
    "revision": "8d8174afaf43cf5f0f91db68ffb03586"
  },
  {
    "url": "assets/js/21.e2a5fa38.js",
    "revision": "fab1985fa98ac7a35a738b83ae2991fa"
  },
  {
    "url": "assets/js/22.182ba27d.js",
    "revision": "09926c7e0a239e1cc6bf674d70506bca"
  },
  {
    "url": "assets/js/23.e7e9dd8d.js",
    "revision": "32fe55d361626066d574c72901b77cb6"
  },
  {
    "url": "assets/js/24.2571187e.js",
    "revision": "95b3ffff9e864fd895d329774e78f3ee"
  },
  {
    "url": "assets/js/25.1fe9bd77.js",
    "revision": "003531c5bc962a3818e15113d80de1b1"
  },
  {
    "url": "assets/js/26.8f5e59ad.js",
    "revision": "c0532a303bcc78408db94dd4b4577b31"
  },
  {
    "url": "assets/js/27.0c0e6566.js",
    "revision": "15715fa6749c8f42b7b2b7aa81157a9c"
  },
  {
    "url": "assets/js/28.a45e27ba.js",
    "revision": "762eebc8b015af9e8f1a6130b1818d20"
  },
  {
    "url": "assets/js/29.c003836f.js",
    "revision": "123d876af682ed3584adc1451b9be7bd"
  },
  {
    "url": "assets/js/3.c9e955a4.js",
    "revision": "2c8a24f2175f212a75968971d9a27f4e"
  },
  {
    "url": "assets/js/30.a5119be9.js",
    "revision": "1e5c6f07b37f1bdf1b4ef577a8efce89"
  },
  {
    "url": "assets/js/31.5f658b15.js",
    "revision": "3e6348a9b70214510645430f27dce5a4"
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
    "url": "assets/js/app.9dfefd6a.js",
    "revision": "0442da21ed3428dea8ed7351e23ab59e"
  },
  {
    "url": "categories/index.html",
    "revision": "f3f2e1cd56f4999e430944283fc561dd"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "adb256d8d539556441a8433a9c5bd408"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "47cda12e49c5a15b2b71771f9453ce3f"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "0ebb1d2565c7027a4c36f1ab28aab7ad"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "98ae5147e7892c342fb656722aba69cc"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "49ca5be35d1639da0788d33a187454ba"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "8e395f42bda097e85a5828ddf3963868"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "61a67af8d2b74d449206f4669dcaec96"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "915cb53adbf4e780087beef43a18f32a"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "35e815de849c17c3f4d8b35f5520bd0c"
  },
  {
    "url": "fontend/Js/ConditionalTypes-a/index.html",
    "revision": "6d3270367730eab1236de89e3d55772a"
  },
  {
    "url": "fontend/Js/Generics-b/index.html",
    "revision": "b3b31fa322b17e6ef8fdce7f41fec7f6"
  },
  {
    "url": "fontend/Js/index.html",
    "revision": "4a8477ec87dc39a1e59586d413167d9b"
  },
  {
    "url": "fontend/Js/js-basic-algorithm/index.html",
    "revision": "0a49e95ff288c75c6febf62fbc5f7ccd"
  },
  {
    "url": "fontend/Js/js-core-1/index.html",
    "revision": "42c476c05b607a2421a09e9023732878"
  },
  {
    "url": "fontend/Js/js-core-2/index.html",
    "revision": "14e6a0207df18c40d23ee07d45f7e3f8"
  },
  {
    "url": "fontend/Js/js-core-3/index.html",
    "revision": "207c40aad75cf2a64b87a7806a764bfc"
  },
  {
    "url": "fontend/Js/js-core-4/index.html",
    "revision": "b064c3f81c7512305a49a71d91ebbab3"
  },
  {
    "url": "fontend/Js/js-core-5/index.html",
    "revision": "3dee6602c978e4cac2725344b5ab0f7e"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "818ad2c95585cffecdb510c8ed988d67"
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
    "revision": "f75c02f933413e20d9c23e2ead645552"
  },
  {
    "url": "logo.svg",
    "revision": "67234250cdc136dbb9650feef405f6dc"
  },
  {
    "url": "tag/index.html",
    "revision": "e40c1473660ee4ee9ebbd3b09b241779"
  },
  {
    "url": "timeline/index.html",
    "revision": "85ec7b7784c831d7449756092b988b2c"
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
