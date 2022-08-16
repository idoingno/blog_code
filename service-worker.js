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
    "revision": "e34cf13cf2a53f56216e3fc2fb83b765"
  },
  {
    "url": "about/index.html",
    "revision": "2b3e389fd61acba6728d3f0424187f80"
  },
  {
    "url": "algorithm/index.html",
    "revision": "fb5a0140d5443cdf59d27cbe9c5c61d3"
  },
  {
    "url": "algorithm/js-algorithm-1/index.html",
    "revision": "c69d0d58473b6e12981c5d7c6991e031"
  },
  {
    "url": "algorithm/js-algorithm-2/index.html",
    "revision": "7130fad525c8d34a47662857be8eada9"
  },
  {
    "url": "algorithm/js-algorithm-3/index.html",
    "revision": "e3a5eefff36cdb5eb7479c20de3c7c3d"
  },
  {
    "url": "algorithm/js-algorithm-4/index.html",
    "revision": "92372d64a5a122ec5e318ae811638830"
  },
  {
    "url": "algorithm/js-algorithm-5/index.html",
    "revision": "50eb3193e41607f4386518d12b5ae0f6"
  },
  {
    "url": "algorithm/js-algorithm-6/index.html",
    "revision": "fcb65bd5375f49b487de56bb59792f5c"
  },
  {
    "url": "algorithm/js-algorithm-7/index.html",
    "revision": "a631b35063636c44c09a2cb516eca06a"
  },
  {
    "url": "algorithm/js-basic-algorithm/index.html",
    "revision": "acf4fdd832672b2c7f32a127b40552ea"
  },
  {
    "url": "assets/css/0.styles.c7018490.css",
    "revision": "ccb8aa062a011a263885bb3d41435c26"
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
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/1.7ad3074d.js",
    "revision": "e8799587755356adf3d27bc1f92e563e"
  },
  {
    "url": "assets/js/10.3d0abb49.js",
    "revision": "57772f80e31975e0cfc79c18c6c94397"
  },
  {
    "url": "assets/js/11.866d1e2d.js",
    "revision": "2b393ff73bb34fcb6f8a76ce4ed935fd"
  },
  {
    "url": "assets/js/12.4942a9b7.js",
    "revision": "926bfb9b546f9cc21aa38f36ca99bdf0"
  },
  {
    "url": "assets/js/13.368c7145.js",
    "revision": "52abcc5accbf3b8f00a142a651e40c97"
  },
  {
    "url": "assets/js/14.8b19e72f.js",
    "revision": "cc1377e2fd42fcb2a3d3c2cbc5c69899"
  },
  {
    "url": "assets/js/15.cc524a73.js",
    "revision": "e7b88d936110139e880eda90c9911254"
  },
  {
    "url": "assets/js/16.353aeb5f.js",
    "revision": "e27d952092c3cfdc4d58938274043333"
  },
  {
    "url": "assets/js/17.308ffd61.js",
    "revision": "e407423ca5f473a29a53dfcd5c755c34"
  },
  {
    "url": "assets/js/18.25f4b96e.js",
    "revision": "af49462f2b9b3210ef4e5d9583295df4"
  },
  {
    "url": "assets/js/19.4955b142.js",
    "revision": "5ecdc8f62ce8751c5895218accf27bbf"
  },
  {
    "url": "assets/js/20.ea92abe7.js",
    "revision": "0ed50e9fced7e582756febb992055535"
  },
  {
    "url": "assets/js/21.0e4dd141.js",
    "revision": "e84e439c4ad06b2fa0525b31e09828e7"
  },
  {
    "url": "assets/js/22.fc25de52.js",
    "revision": "fdb9c8b3bf3d7593c106dac449707505"
  },
  {
    "url": "assets/js/23.0e7b9ea4.js",
    "revision": "6ad891af34bed8c99201a7641b2eed37"
  },
  {
    "url": "assets/js/24.d237cf74.js",
    "revision": "9482ad969b9a4a018a526563cf1f29b6"
  },
  {
    "url": "assets/js/25.653f78ff.js",
    "revision": "86e561604f880a5ffb60c042abf92a85"
  },
  {
    "url": "assets/js/26.532f34c2.js",
    "revision": "a1274c8b3e5627e72b8d992ddd0cd193"
  },
  {
    "url": "assets/js/27.ba426a83.js",
    "revision": "eaec26d714efe1b1cfe9bb068740ddaa"
  },
  {
    "url": "assets/js/28.596dae0f.js",
    "revision": "21e04d3273587388e65dddc32de3404c"
  },
  {
    "url": "assets/js/29.54f50486.js",
    "revision": "68e227e87e546c851f093f89610bada0"
  },
  {
    "url": "assets/js/3.a963b92e.js",
    "revision": "136bf378000bbaddb2b5aa60b414749e"
  },
  {
    "url": "assets/js/30.6cda175c.js",
    "revision": "afc113c0dc56602e5cf199ca8d12286c"
  },
  {
    "url": "assets/js/31.3ea4c0f4.js",
    "revision": "b8b3c8b5a38bdbc833bc8295268b43f0"
  },
  {
    "url": "assets/js/32.0bf8d74a.js",
    "revision": "faac07b7c332d7b2be281c4dedb3a405"
  },
  {
    "url": "assets/js/33.a7706579.js",
    "revision": "deac8825bc6d958b159a55cabe8fe92c"
  },
  {
    "url": "assets/js/34.6bf1d652.js",
    "revision": "48a82ca20926454b324b72805bf2a3b1"
  },
  {
    "url": "assets/js/35.d9831757.js",
    "revision": "d14ffd5959e08762bc43a6dafdb9057f"
  },
  {
    "url": "assets/js/36.0f9b72cb.js",
    "revision": "768296821a59707fa0dc6d201938ec88"
  },
  {
    "url": "assets/js/37.4ef0f39e.js",
    "revision": "7c27b75eca7f33255477743c3899d376"
  },
  {
    "url": "assets/js/38.920ffdcd.js",
    "revision": "18c2809328468217513b3bb6d33b4404"
  },
  {
    "url": "assets/js/39.34b7d6e8.js",
    "revision": "3094e2beef3158341a96220c3ed314e6"
  },
  {
    "url": "assets/js/4.618061b3.js",
    "revision": "c41eb9ce06f8d6b610770e6b3b480ec4"
  },
  {
    "url": "assets/js/40.10179419.js",
    "revision": "1527287f859ac7550018a9edc3a3dc13"
  },
  {
    "url": "assets/js/41.8a3a92ad.js",
    "revision": "148744964045ed079e62bf155b44684f"
  },
  {
    "url": "assets/js/42.63f8acf1.js",
    "revision": "33d4203acd44fc6b863970fa9b5b5740"
  },
  {
    "url": "assets/js/43.a03c68ad.js",
    "revision": "06fe001397803da2c4f1f3d8d8a2cdee"
  },
  {
    "url": "assets/js/5.43c8e185.js",
    "revision": "d5801a77a07d876a48c2dcdaabd5017e"
  },
  {
    "url": "assets/js/6.28aecf46.js",
    "revision": "0e9db42af845aa5c0085e79f88e4223f"
  },
  {
    "url": "assets/js/7.b37dc245.js",
    "revision": "0f92dfed09bf2c847b1a8b5d9941315a"
  },
  {
    "url": "assets/js/8.ffad93e5.js",
    "revision": "9ed24dddb97ddcb6cdd6830f98dd31c2"
  },
  {
    "url": "assets/js/9.3b3c12e3.js",
    "revision": "41cebf83f04a54491f40b7b314c886aa"
  },
  {
    "url": "assets/js/app.59a1ecc4.js",
    "revision": "1cb2c19b861511da792894fdd8f7772c"
  },
  {
    "url": "categories/index.html",
    "revision": "d580375a55c3f92b0dec06795bdf6fe3"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "683e96a3d5d4ff905cd5dac7390d259c"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "4be15433c18309e61b702e4f39423d93"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "f7b7e0f95fd963240332b70e056674dc"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "198f5a53d94d4e4217eb43efcdc7a5af"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "d33c182afb2ea6bc29e155e990b4afcb"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "8087f9f7a8b7bd7bdc30f5441a780a14"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "f2266baa8a724b0c6e5837b1b14346d0"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "1adda2105ed176b6ba7d2184035ed052"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "e256dd1a92a27dac82cf9f1c07e63b4d"
  },
  {
    "url": "fontend/javascript/ConditionalTypes-a/index.html",
    "revision": "c0b2d89e0fde116bf12d0cf36e29b641"
  },
  {
    "url": "fontend/javascript/Generics-b/index.html",
    "revision": "f91fb14f45d7fea87dec944f921c4380"
  },
  {
    "url": "fontend/javascript/index.html",
    "revision": "a65505e8ef5abc09089ad4e42085de15"
  },
  {
    "url": "fontend/javascript/js-core-1/index.html",
    "revision": "6e309b9368d8880f6033cb7357c8afb4"
  },
  {
    "url": "fontend/javascript/js-core-2/index.html",
    "revision": "9ea665445a1bc0f58526160c985ced71"
  },
  {
    "url": "fontend/javascript/js-core-3/index.html",
    "revision": "20736e21733e0b7167c4eb334488e282"
  },
  {
    "url": "fontend/javascript/js-core-4/index.html",
    "revision": "a1804d60113fe1c66ceb0acbcf4f7b1e"
  },
  {
    "url": "fontend/javascript/js-core-5/index.html",
    "revision": "cdca0843e219e4fe1594561565ddb35c"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "a2c19e94fe6419d3291f028de6580994"
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
    "revision": "e8aaec82edb229c64d9a34bcb589d3b7"
  },
  {
    "url": "js/pgmanor-self.js",
    "revision": "7d819b58ece5817ac4fe97cbbc96895a"
  },
  {
    "url": "logo.svg",
    "revision": "67234250cdc136dbb9650feef405f6dc"
  },
  {
    "url": "tag/index.html",
    "revision": "ed099e69bcdb33d9dc9bc0c47ff9437c"
  },
  {
    "url": "timeline/index.html",
    "revision": "e46ba836dfd6e7f8bf6994c1f2df91f8"
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
