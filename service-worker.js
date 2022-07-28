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
    "revision": "791f4d87afd72767c6f014c44ec99c40"
  },
  {
    "url": "about/index.html",
    "revision": "3b66ec85dfb0971f3d5cb1c7d9ba265c"
  },
  {
    "url": "assets/css/0.styles.9f613b25.css",
    "revision": "2d29ad694269855e20152d683b3351b6"
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
    "url": "assets/js/1.a5b39708.js",
    "revision": "1c4a9b7d827de4b55973d55a4b3aa4bb"
  },
  {
    "url": "assets/js/10.1f211326.js",
    "revision": "6ef9388e1efceddca15199e14f097279"
  },
  {
    "url": "assets/js/11.7d51fcc4.js",
    "revision": "26fd931e9bc41896c8f3b0bb8c0e08e2"
  },
  {
    "url": "assets/js/12.f96314ae.js",
    "revision": "715361237c28bc77d649208c3549595d"
  },
  {
    "url": "assets/js/13.a81fffc3.js",
    "revision": "b13e064fd56206af596d945bec01d252"
  },
  {
    "url": "assets/js/14.cf0fb9a0.js",
    "revision": "48845531ea018182b46319d57ac7586b"
  },
  {
    "url": "assets/js/15.69906abd.js",
    "revision": "ff81f7be68244c820b3f055cd51b6e65"
  },
  {
    "url": "assets/js/16.bda3fb29.js",
    "revision": "2b8b234203d2125027c642c59116389c"
  },
  {
    "url": "assets/js/17.5746576c.js",
    "revision": "531b75ddc5561e0eea38845d59c3a2a6"
  },
  {
    "url": "assets/js/18.8e6fbbae.js",
    "revision": "50acf9b033fb084b7e3c97eb9a8434aa"
  },
  {
    "url": "assets/js/19.27edb5c1.js",
    "revision": "3cecd894b385a2a6126a87db50b7923c"
  },
  {
    "url": "assets/js/20.c0ad3619.js",
    "revision": "25d93b007dc0236cd1a727ae8a5200ad"
  },
  {
    "url": "assets/js/21.c34dd385.js",
    "revision": "27b4e5f13e83855a8a95630915edf396"
  },
  {
    "url": "assets/js/22.4fd747d5.js",
    "revision": "6167ee2cd98c01fbd61c09408461fb18"
  },
  {
    "url": "assets/js/23.1601c802.js",
    "revision": "db052bac37c1b276f1c56ea02c26dd59"
  },
  {
    "url": "assets/js/24.3f60e3a9.js",
    "revision": "10f4ccc8ceaeedada26f645f78c7110e"
  },
  {
    "url": "assets/js/25.0b2921c4.js",
    "revision": "2443cb959c8148af9a4e5707fc2213e2"
  },
  {
    "url": "assets/js/26.7123435b.js",
    "revision": "4f08dd432b0ba8e4521b3ae2f78c60d0"
  },
  {
    "url": "assets/js/27.966bec50.js",
    "revision": "18a693bdc7720a5b2db94ef725ba4a2b"
  },
  {
    "url": "assets/js/28.bb59b2b7.js",
    "revision": "279a97650ce853d6e5d4fa7c83101ffa"
  },
  {
    "url": "assets/js/29.31ce97d4.js",
    "revision": "ccc3b287f60d47e34cd08f8725220b2a"
  },
  {
    "url": "assets/js/3.950a5839.js",
    "revision": "5968d81f15209af39ab56e41454b2b26"
  },
  {
    "url": "assets/js/30.1e72a9eb.js",
    "revision": "1e98eed768d504c4a4cf0df6dc8250de"
  },
  {
    "url": "assets/js/31.c76ba7bc.js",
    "revision": "236195d248139dbf5ea2c2a1c75ba1d4"
  },
  {
    "url": "assets/js/32.a2db0ce0.js",
    "revision": "eef995a0605c0518d1c301c627ba1306"
  },
  {
    "url": "assets/js/33.652755bc.js",
    "revision": "f5303367f3ac3cae7c0c1c5a9ff56de9"
  },
  {
    "url": "assets/js/34.2f9a22fe.js",
    "revision": "36dc0da1f282aca27f81474c1ceb0e5c"
  },
  {
    "url": "assets/js/35.ea680ca9.js",
    "revision": "fe95408b071e63c45578795617683743"
  },
  {
    "url": "assets/js/4.03abf129.js",
    "revision": "bf1081a2baca4c5f6c2901a6b0583ba3"
  },
  {
    "url": "assets/js/5.d9fea62e.js",
    "revision": "f300ca7342e4dc008760b96b841f53f0"
  },
  {
    "url": "assets/js/6.5f86bf4f.js",
    "revision": "1969395888572e10cddecfe875249b79"
  },
  {
    "url": "assets/js/7.630d5f8e.js",
    "revision": "d12d7953d2292e5292d7130d5018fe39"
  },
  {
    "url": "assets/js/8.c3ec8ca1.js",
    "revision": "ec9143eed377f8a89c2871eb9fab71f4"
  },
  {
    "url": "assets/js/9.3d686787.js",
    "revision": "a8ebc6756445e88fdf9b57d1196a7280"
  },
  {
    "url": "assets/js/app.43732489.js",
    "revision": "11527e729511296c1ed5f179364971ff"
  },
  {
    "url": "categories/index.html",
    "revision": "515c5d26b388d9cc7f50ebde8d13b00f"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "f18613432ccf2b1f70c018410319c6d0"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "bfc315787cf8da6c67a1b74dd9abad45"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "bc1d5b92349d29112a864082518dcdc6"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "4306a29cc059c7722fa46f81e4143b47"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "170f8522b02affbfcd2b85ed6ad4632a"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "82a4733df4cbe2053d7b6aa85339f71c"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "0aafc84bc56f937cd6246161db9c7f71"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "63c942bbb434d6e5871093898b5cd485"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "5036b7457dfe85f0564def393aed9a76"
  },
  {
    "url": "fontend/Js/ConditionalTypes-a/index.html",
    "revision": "c8c25fef566d4b7dbec6d81e2550763b"
  },
  {
    "url": "fontend/Js/Generics-b/index.html",
    "revision": "23f2733b19cc5ad4883d937675b99eca"
  },
  {
    "url": "fontend/Js/index.html",
    "revision": "c05e3af9c260538a620dbdad1a405a80"
  },
  {
    "url": "fontend/Js/js-basic-algorithm/index.html",
    "revision": "d5a05f43622786f20f3e5efeb5920901"
  },
  {
    "url": "fontend/Js/js-core-1/index.html",
    "revision": "25b2b4e95d6a4d86ed7bc85516819222"
  },
  {
    "url": "fontend/Js/js-core-2/index.html",
    "revision": "cd387b47baee571615805dfdf260339b"
  },
  {
    "url": "fontend/Js/js-core-3/index.html",
    "revision": "27f5568e3d2fa5838e39003d5e153c9e"
  },
  {
    "url": "fontend/Js/js-core-4/index.html",
    "revision": "5aeb5d1a9558c4ddffddb59cb971d9c0"
  },
  {
    "url": "fontend/Js/js-core-5/index.html",
    "revision": "54c2c3e3a3889a50dad043ba91d75177"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "360d79cf4d0170132207654de9e63cd9"
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
    "revision": "7a518c475ccd50bf3c61bd1674838369"
  },
  {
    "url": "logo.svg",
    "revision": "67234250cdc136dbb9650feef405f6dc"
  },
  {
    "url": "tag/index.html",
    "revision": "d3b10771d4420c58a601244480175138"
  },
  {
    "url": "timeline/index.html",
    "revision": "e43713d4ce68db115ded783893ee3851"
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
