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
    "revision": "7d042caaa640be9e991bc505063cd250"
  },
  {
    "url": "about/index.html",
    "revision": "217c2798eb60500bd684276cc991db00"
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
    "url": "assets/js/15.07d224fd.js",
    "revision": "004413aaada9ab9e47fb27823db215cf"
  },
  {
    "url": "assets/js/16.ce49057c.js",
    "revision": "8fa680a6d6a4f6bfeb811f31969e32d4"
  },
  {
    "url": "assets/js/17.6feaa505.js",
    "revision": "084b01884ad708a320b9b1792914c5d9"
  },
  {
    "url": "assets/js/18.742ba6d5.js",
    "revision": "2f7aac76058187d0d948898bde363258"
  },
  {
    "url": "assets/js/19.d14ef850.js",
    "revision": "254224f19bc05caab25965ca7d3ffaf9"
  },
  {
    "url": "assets/js/20.26d6b42b.js",
    "revision": "1618ba3f41bd755c5473bbb6c656f8ee"
  },
  {
    "url": "assets/js/21.6f7ee64c.js",
    "revision": "c6d2a3e836c5c0f7f85d955023cb86b5"
  },
  {
    "url": "assets/js/22.9c68135a.js",
    "revision": "92bcc90f6ee5c9858ba48d07791f17f1"
  },
  {
    "url": "assets/js/23.521dd6ab.js",
    "revision": "8296b8760abb4f7f0a24969edd4b16c5"
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
    "url": "assets/js/26.0a469b6c.js",
    "revision": "f23e7e5cd4b742479ad4504500c158b6"
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
    "url": "assets/js/29.0b8518ea.js",
    "revision": "03d4e831d2bf87d6af6c7ef14790d444"
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
    "url": "assets/js/32.31e86926.js",
    "revision": "c99e7ee57cc8c514aacda6e010544adc"
  },
  {
    "url": "assets/js/33.dcf869e4.js",
    "revision": "1ede45e9c8ce2047f409273818136e86"
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
    "url": "assets/js/app.8d3340c6.js",
    "revision": "efaee671667a37db9dbbc2ea94a48b19"
  },
  {
    "url": "categories/index.html",
    "revision": "d91fcbd03b71053dfe635b03e7f17127"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "361e12174a894de8d179d7f5a37e6a76"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "c39fa11e59c45baaecc522bb7c19efb7"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "ae40c7f8bc3781f01f42283d35d6af96"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "c36cf5fa44a1370ae83413bda817c436"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "1bc62c0c298375622896868dc5382c27"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "d5446e60e8073d8378e79f06649ded17"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "ec439e1f3a2967bb6c1bf1c15d97c345"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "c19e665b2ccadf126bbdf07a2d343f53"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "c4be2f6cd57123cd45d0374e96ed1d3e"
  },
  {
    "url": "fontend/Js/ConditionalTypes-a/index.html",
    "revision": "213962642d66692ba2e707e315dff5cb"
  },
  {
    "url": "fontend/Js/Generics-b/index.html",
    "revision": "8f8efdf2dc020f1813b2d4bdc94e87ad"
  },
  {
    "url": "fontend/Js/index.html",
    "revision": "7a555831f4076ad0239d44df65423c79"
  },
  {
    "url": "fontend/Js/js-basic-algorithm/index.html",
    "revision": "37e2963fe82d441aa3c367f00d08ec96"
  },
  {
    "url": "fontend/Js/js-core-1/index.html",
    "revision": "0d7700927b69060c84a5c5c17db7a805"
  },
  {
    "url": "fontend/Js/js-core-2/index.html",
    "revision": "5fa65e775741664209f0f617d70acc1f"
  },
  {
    "url": "fontend/Js/js-core-3/index.html",
    "revision": "b1ed0146dab57d08dc776d95753e7801"
  },
  {
    "url": "fontend/Js/js-core-4/index.html",
    "revision": "4904d20471612dbfade721f04de1e868"
  },
  {
    "url": "fontend/Js/js-core-5/index.html",
    "revision": "0a6301004ad4116a2a7229ac4a6770b7"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "d4f68ba7521329ab29f7ca9b05770569"
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
    "revision": "587c2b8eec017334c9ec8865759503ed"
  },
  {
    "url": "logo.svg",
    "revision": "67234250cdc136dbb9650feef405f6dc"
  },
  {
    "url": "tag/index.html",
    "revision": "c6bff03b42d5b474f80ce50d000b31ca"
  },
  {
    "url": "timeline/index.html",
    "revision": "70d075915d4b007269ca389f2164c2f2"
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
