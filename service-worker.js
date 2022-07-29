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
    "revision": "9ba5f9bfa351005e239acf5e41eac3cc"
  },
  {
    "url": "about/index.html",
    "revision": "bf651b3307fe7093ea2309ba4b1677da"
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
    "url": "assets/js/1.c4b7b084.js",
    "revision": "f62a1410217e8acadfecfcce98bf8d34"
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
    "url": "assets/js/12.e521a267.js",
    "revision": "1177fffe12d9b4cfc89eb3c05f924e2b"
  },
  {
    "url": "assets/js/13.4617e2f5.js",
    "revision": "3e248cf4b5fa9c4884b8f772ffac2033"
  },
  {
    "url": "assets/js/14.cf0fb9a0.js",
    "revision": "48845531ea018182b46319d57ac7586b"
  },
  {
    "url": "assets/js/15.224ae094.js",
    "revision": "96b49fbc619a8b3b7d77f4e041931f9f"
  },
  {
    "url": "assets/js/16.19a2bb52.js",
    "revision": "a9576d7d347b2c66244dd1b3cf722b05"
  },
  {
    "url": "assets/js/17.38aae7b0.js",
    "revision": "230bee72728aaccd0cd4fbc9486594f3"
  },
  {
    "url": "assets/js/18.441fe23d.js",
    "revision": "185dcb23ab0dcc0a4cbbee9f49c3c691"
  },
  {
    "url": "assets/js/19.ea43ca33.js",
    "revision": "31607ee4fcbdd2fe6e93a785c9212266"
  },
  {
    "url": "assets/js/20.c5361c5e.js",
    "revision": "92cb0b33391a73c9cc63ea4e21c4ae6a"
  },
  {
    "url": "assets/js/21.82f02a78.js",
    "revision": "131b739070c22fcea747050e7dfc6e7a"
  },
  {
    "url": "assets/js/22.bc6b4a8a.js",
    "revision": "dc1647e6bb293295da037aedb2940168"
  },
  {
    "url": "assets/js/23.faeaa6aa.js",
    "revision": "ee416bb17e9d3183e6dd08d59ad4b43e"
  },
  {
    "url": "assets/js/24.e05d6d66.js",
    "revision": "2abc69c6d367062e38c9b9395bd72f80"
  },
  {
    "url": "assets/js/25.8da4b4c2.js",
    "revision": "73a6ed3daaecca0bb1d5dc49651e83b6"
  },
  {
    "url": "assets/js/26.ed68adbf.js",
    "revision": "193f0a0b791b1c152cf6641d1c80ef39"
  },
  {
    "url": "assets/js/27.a63716ce.js",
    "revision": "9cb965ba787b48a945ae23a2e784e321"
  },
  {
    "url": "assets/js/28.1e6d79ce.js",
    "revision": "02ba57b62eaf8a813f29f26e4021075b"
  },
  {
    "url": "assets/js/29.a0ac2a85.js",
    "revision": "ea10341ec64cacc5799fbec06bfc46be"
  },
  {
    "url": "assets/js/3.950a5839.js",
    "revision": "5968d81f15209af39ab56e41454b2b26"
  },
  {
    "url": "assets/js/30.fe70bab5.js",
    "revision": "8689da83906d399f12637d3a010d94d9"
  },
  {
    "url": "assets/js/31.f3c67c5a.js",
    "revision": "e8e043e08bdb92538688612ef20d995d"
  },
  {
    "url": "assets/js/32.58fa9d76.js",
    "revision": "a1ccc9f0f8b686d4597e09f97384e397"
  },
  {
    "url": "assets/js/33.933ef457.js",
    "revision": "53e4fd6ce1bd6530198cf29b6691d2ed"
  },
  {
    "url": "assets/js/34.4c18e937.js",
    "revision": "119f81374a9db207f6fbb379570c1e5b"
  },
  {
    "url": "assets/js/35.35932d76.js",
    "revision": "cd3972e35fbced3254184200f7a68dce"
  },
  {
    "url": "assets/js/36.2c9ab104.js",
    "revision": "c52a7ab96bb777be4063f159e40ba8a5"
  },
  {
    "url": "assets/js/37.9a82b71a.js",
    "revision": "ff5a75340aec2f0146daacc60ce0a054"
  },
  {
    "url": "assets/js/38.46f310b2.js",
    "revision": "260a6ef1653956ec2b7afc651c858580"
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
    "url": "assets/js/app.c8aeadff.js",
    "revision": "146c720e3a2956ec6c237da843b0e2ae"
  },
  {
    "url": "categories/index.html",
    "revision": "21928416aa31dcdf4bdd68ef93dc8a8a"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "07a68878051705cd72405ecfaf87f62a"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "b345ff76147dd6796097f6ddfdfa9eaf"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "55b653271a16f180cffd9aa99b7a7ceb"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "12058706ceb5e13908e7ee48bd1e83b3"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "4e8826bd1c5e858923bfe366824f4820"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "4f36065e30c9bd2fc9ef69fed6b43634"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "412183d78292063809b1409701499c3f"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "73dff6bc86b676d2097a33175eecb8a5"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "9aba52316ccce0e76883fbd93114d6f0"
  },
  {
    "url": "fontend/Js/ConditionalTypes-a/index.html",
    "revision": "e9b1e7da62dd03061a3be27aa6740daa"
  },
  {
    "url": "fontend/Js/Generics-b/index.html",
    "revision": "195d177e69ff58221a96c146a8364c0c"
  },
  {
    "url": "fontend/Js/index.html",
    "revision": "384fc57171d6512b7b693d079e212593"
  },
  {
    "url": "fontend/Js/js-algorithm-1/index.html",
    "revision": "76a9b121ac7d88669649830be0aa968b"
  },
  {
    "url": "fontend/Js/js-algorithm-2/index.html",
    "revision": "1cfee7a9bbb77f5275daa50413f77eed"
  },
  {
    "url": "fontend/Js/js-algorithm-3/index.html",
    "revision": "7e209cdc66d2618d32a30257e6435a0d"
  },
  {
    "url": "fontend/Js/js-basic-algorithm/index.html",
    "revision": "381401b616dc2596e6875040dae41b75"
  },
  {
    "url": "fontend/Js/js-core-1/index.html",
    "revision": "506c63c1bedd6261f16899e98ffbbe25"
  },
  {
    "url": "fontend/Js/js-core-2/index.html",
    "revision": "f567ef75b2e96eb874eef9f6b6a60c2c"
  },
  {
    "url": "fontend/Js/js-core-3/index.html",
    "revision": "4f09d53894163b5d70f0ebc78a010474"
  },
  {
    "url": "fontend/Js/js-core-4/index.html",
    "revision": "66b0483c2dd92a1808c057b92154110e"
  },
  {
    "url": "fontend/Js/js-core-5/index.html",
    "revision": "778819d4f2bc543b8d017704de8fe264"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "b754c7fa7ed86e27f3eaf38302188ec9"
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
    "revision": "9e01dd9eb70062f45143c8f41e81d5e1"
  },
  {
    "url": "logo.svg",
    "revision": "67234250cdc136dbb9650feef405f6dc"
  },
  {
    "url": "tag/index.html",
    "revision": "a59573d56934f9160d867ed30195d5de"
  },
  {
    "url": "timeline/index.html",
    "revision": "7689d94962f5ec2ede47cf994d0c171f"
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
