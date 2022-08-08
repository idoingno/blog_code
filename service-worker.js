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
    "revision": "421fa0f152cd4c55b63c00019f0b9685"
  },
  {
    "url": "about/index.html",
    "revision": "4f911003ee774840474ded59902214d4"
  },
  {
    "url": "assets/css/0.styles.3b58bccc.css",
    "revision": "54423e4dc0938eec74af66563c2f1244"
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
    "url": "assets/js/13.3d4e8cd9.js",
    "revision": "0a72b31ea93d4b2d9a94a9b2c9ab695d"
  },
  {
    "url": "assets/js/14.8b19e72f.js",
    "revision": "cc1377e2fd42fcb2a3d3c2cbc5c69899"
  },
  {
    "url": "assets/js/15.89a973ff.js",
    "revision": "c6ebc1b9303b6d054c411b2a01371063"
  },
  {
    "url": "assets/js/16.c8b89fc1.js",
    "revision": "c5212381abf0fc31aea53f24d389fca3"
  },
  {
    "url": "assets/js/17.d869dd44.js",
    "revision": "56dc2db65814874b0d1246c41e97ecad"
  },
  {
    "url": "assets/js/18.eb5be774.js",
    "revision": "bb56e8ea1e07f391a61a578271447ada"
  },
  {
    "url": "assets/js/19.0010006f.js",
    "revision": "76e3d89c2e9621b152141d725c1240fa"
  },
  {
    "url": "assets/js/20.d27100c7.js",
    "revision": "0909475e84f78bba64a6ff36fe82ac07"
  },
  {
    "url": "assets/js/21.0993e999.js",
    "revision": "663cae88570ef8b8b69239a41434e964"
  },
  {
    "url": "assets/js/22.1df84c78.js",
    "revision": "7e3f687638d2f1b6dd6e173393f74fcb"
  },
  {
    "url": "assets/js/23.ae3c1985.js",
    "revision": "ac814fba962a0949ee04f7ed6cbde00f"
  },
  {
    "url": "assets/js/24.27569640.js",
    "revision": "4b0f060946a8283fe80d850e6c2f499d"
  },
  {
    "url": "assets/js/25.079a7ad2.js",
    "revision": "c5a5a8856e09fbaadaca3082b788bef3"
  },
  {
    "url": "assets/js/26.6cfae586.js",
    "revision": "33293fea73bb1744c2ad533c11a01a7d"
  },
  {
    "url": "assets/js/27.4914d310.js",
    "revision": "98c912c7e90db3d6f3e747c663b76ed7"
  },
  {
    "url": "assets/js/28.f739cb0b.js",
    "revision": "a86fd2fbca6f6421766824222afc8291"
  },
  {
    "url": "assets/js/29.6b799e58.js",
    "revision": "3da2a7d2a7946e85ae526cc7b1727e42"
  },
  {
    "url": "assets/js/3.a963b92e.js",
    "revision": "136bf378000bbaddb2b5aa60b414749e"
  },
  {
    "url": "assets/js/30.30905187.js",
    "revision": "9d9e455690e3df2726eaaaccfe9b8e15"
  },
  {
    "url": "assets/js/31.5b264bd1.js",
    "revision": "42bddf60d11a9fb11d3efdba34c3eafe"
  },
  {
    "url": "assets/js/32.905cb62c.js",
    "revision": "aa47b367003e184b91a4d3189d612f4b"
  },
  {
    "url": "assets/js/33.9127cff9.js",
    "revision": "91d6bb4ddb5a9d8949543ef0fff64ed0"
  },
  {
    "url": "assets/js/34.beff6088.js",
    "revision": "de376be79815ec1e1ab36bc2ffdfef56"
  },
  {
    "url": "assets/js/35.e2b524f4.js",
    "revision": "8c0d27d5168961b4b10e3c732c844827"
  },
  {
    "url": "assets/js/36.444c06cb.js",
    "revision": "3f4c341a2c906d58ec7c35ed02d6a312"
  },
  {
    "url": "assets/js/37.9f79c618.js",
    "revision": "34fdfd435a35e070e92cd355b412441e"
  },
  {
    "url": "assets/js/38.ad380a9e.js",
    "revision": "31f17fd35a207d6b4229bd7afd49c283"
  },
  {
    "url": "assets/js/39.ef967a71.js",
    "revision": "6bf0d12af74b623ff6150fb299614a4a"
  },
  {
    "url": "assets/js/4.618061b3.js",
    "revision": "c41eb9ce06f8d6b610770e6b3b480ec4"
  },
  {
    "url": "assets/js/40.49de2337.js",
    "revision": "54dfbf7b7820332ec03eb9ec7c90d5ff"
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
    "url": "assets/js/app.28dc402d.js",
    "revision": "9c46ae17eb8fcc68f3447781160c0463"
  },
  {
    "url": "categories/index.html",
    "revision": "61963ae6fe671a45097b76a1a54e0cbb"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "510373fb3b276615c5272e19dc250771"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "244c7ffafb663258a14e362381927afc"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "364ad5ebce7d8110f4531dc4139b49d6"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "f729b15ae988ee2550e6b766d9a5a072"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "c166a6c26146a21ded11d2d8ee5c7e4d"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "64af8649df6c4ac8c70911181b12d38d"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "73e91063cdf0f2e1b6468bf3f0cae9a6"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "f3c8e78f6d5b26b5809847ae5f4ea2eb"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "4e09604674dd67da5eb9ad5b60948874"
  },
  {
    "url": "fontend/Js/ConditionalTypes-a/index.html",
    "revision": "7632f38e9342a4f76476a228f693c2b8"
  },
  {
    "url": "fontend/Js/Generics-b/index.html",
    "revision": "c56c21d9fc3d66a0154b7db0f6091811"
  },
  {
    "url": "fontend/Js/index.html",
    "revision": "54afd2711a5f62d6da84c2bb36fe6b46"
  },
  {
    "url": "fontend/Js/js-algorithm-1/index.html",
    "revision": "6624fcd094294c9dd2af58890e2d4933"
  },
  {
    "url": "fontend/Js/js-algorithm-2/index.html",
    "revision": "17bc093581eb6ea7de0025337b30ebb3"
  },
  {
    "url": "fontend/Js/js-algorithm-3/index.html",
    "revision": "363493f67e3f2a29539c5d5920a7403f"
  },
  {
    "url": "fontend/Js/js-algorithm-4/index.html",
    "revision": "bb51d1180a4bdd381c50db95b8e2a613"
  },
  {
    "url": "fontend/Js/js-algorithm-5/index.html",
    "revision": "8a7c6915e0b25f394e81d021949f7c67"
  },
  {
    "url": "fontend/Js/js-basic-algorithm/index.html",
    "revision": "9cf8f2e512a59c7b8a28a7d1be4a7f63"
  },
  {
    "url": "fontend/Js/js-core-1/index.html",
    "revision": "d8dab86a87b583711f5c53e716a8163b"
  },
  {
    "url": "fontend/Js/js-core-2/index.html",
    "revision": "911d0ef5fafebc97ee0afa33ccef8b94"
  },
  {
    "url": "fontend/Js/js-core-3/index.html",
    "revision": "c8a181140a1bd82270a1abf4d20547d9"
  },
  {
    "url": "fontend/Js/js-core-4/index.html",
    "revision": "a36ca58b22b51568b855b6c3a345f133"
  },
  {
    "url": "fontend/Js/js-core-5/index.html",
    "revision": "5c093cb8a1ec4f69aeb49d28ea3ec412"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "010323f5f11bbf147654093b282d1f2d"
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
    "revision": "79520d83672b844aab4d53874e327e0e"
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
    "revision": "03b3de432033df426be4b63855ce48e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "9464a4e7dc4e02f8579c53bc2457ecb7"
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
