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
    "revision": "892fdfdd8a34337a3e67efb244e3dfa6"
  },
  {
    "url": "about/index.html",
    "revision": "176326e0b8fc181249f11af877693f57"
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
    "url": "assets/js/1.16920cfb.js",
    "revision": "9dae2bc2bc6ef8c5f9b461f90c656e21"
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
    "url": "assets/js/12.35348a6d.js",
    "revision": "45c8296a9c883c5158c1ab202410befc"
  },
  {
    "url": "assets/js/13.431c7987.js",
    "revision": "f289dc0ae166353232c5a6b9b3e2f6c6"
  },
  {
    "url": "assets/js/14.8b19e72f.js",
    "revision": "cc1377e2fd42fcb2a3d3c2cbc5c69899"
  },
  {
    "url": "assets/js/15.1c39ab99.js",
    "revision": "51effa98ce81a04697c3f1a2a32446d7"
  },
  {
    "url": "assets/js/16.27c23f6f.js",
    "revision": "b0f7f4049e256de6c01b8b5065aadfcb"
  },
  {
    "url": "assets/js/17.ffc53a7a.js",
    "revision": "9bfa653da1381ecb59b6e2583dcd3f3c"
  },
  {
    "url": "assets/js/18.1a5a931f.js",
    "revision": "d24e974d7d6327b5b74fc24ec7f5520b"
  },
  {
    "url": "assets/js/19.a35ddb4b.js",
    "revision": "30d9128fa2df62a0961f3c5d62edb7be"
  },
  {
    "url": "assets/js/20.9c6cc652.js",
    "revision": "5c204014e7a5bcfd1e429c039f88c112"
  },
  {
    "url": "assets/js/21.dee58ef7.js",
    "revision": "68a5f7129edc098d4196a4c7d4430072"
  },
  {
    "url": "assets/js/22.2150dc1d.js",
    "revision": "4ba86a94ea2051b7a435ad861bf74bcf"
  },
  {
    "url": "assets/js/23.347719bb.js",
    "revision": "a241be08ad31a1a38139d119a472e4f1"
  },
  {
    "url": "assets/js/24.bc7915a9.js",
    "revision": "c6918ac1969d77ff9f812b98b7869aa5"
  },
  {
    "url": "assets/js/25.2f86ac38.js",
    "revision": "914182a5870eccf40a396149a8f966fc"
  },
  {
    "url": "assets/js/26.47556458.js",
    "revision": "7d9a79b3354a119793cf98f42d7edf9e"
  },
  {
    "url": "assets/js/27.afd70a00.js",
    "revision": "bc47a805ba200e3416efa55aeb44600a"
  },
  {
    "url": "assets/js/28.8d95fc2b.js",
    "revision": "327736c67d1e2277f8bdb138d365029b"
  },
  {
    "url": "assets/js/29.16f1814b.js",
    "revision": "24cf0ec4bfe6f34fedcc677c88f1e8e3"
  },
  {
    "url": "assets/js/3.a963b92e.js",
    "revision": "136bf378000bbaddb2b5aa60b414749e"
  },
  {
    "url": "assets/js/30.c1fe3d95.js",
    "revision": "36432654ae38a336fb8c2cdd016c7368"
  },
  {
    "url": "assets/js/31.c06201c5.js",
    "revision": "b756ab344a8c3aea41c1e33dc13288a8"
  },
  {
    "url": "assets/js/32.93510808.js",
    "revision": "595b9133f99d5a0f375a9aed2e1340cc"
  },
  {
    "url": "assets/js/33.555d9357.js",
    "revision": "ec14852dcada7f9aebdec8b11a219f62"
  },
  {
    "url": "assets/js/34.fc933cc7.js",
    "revision": "6addba2061e416ca1f9de6110d6d3da8"
  },
  {
    "url": "assets/js/35.80028918.js",
    "revision": "d0e1a1145b7f3c8a4f26d2bc9f3002e9"
  },
  {
    "url": "assets/js/36.4ad22fac.js",
    "revision": "e62b006db435c070b0488f02e4fbb17d"
  },
  {
    "url": "assets/js/37.893286b0.js",
    "revision": "91bf0ed4d59e3c2c52f4c37a3195e308"
  },
  {
    "url": "assets/js/38.35f5554a.js",
    "revision": "d795cc21daab174860fc3ff028e252f2"
  },
  {
    "url": "assets/js/39.68a3200c.js",
    "revision": "85eb269fe7cf1dcf2e0c16f336279dee"
  },
  {
    "url": "assets/js/4.618061b3.js",
    "revision": "c41eb9ce06f8d6b610770e6b3b480ec4"
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
    "url": "assets/js/app.66ddd310.js",
    "revision": "29ec1f50d1c8c0618751decf1e021629"
  },
  {
    "url": "categories/index.html",
    "revision": "8c77efe3b24e7bb3aeabb79752ade2de"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "2b8c745e0f6951a25f867813b17dde91"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "f50346a3bcfa048c0cb66bb2511a7f47"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "b96965899f3603adce5c6d391c747cdb"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "af8069f435940aa1bf8cd605798a9d65"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "543e8d004d6c6c44c95e354f1ff302b1"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "e34223eb4eba47dba236808777f096f0"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "47e90fda5d46da8b0bda9b6ebb3903af"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "3a551fe1859a4f61dfe7f0df9bbcd28c"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "1bade6646f5474343b75eace8723391d"
  },
  {
    "url": "fontend/Js/ConditionalTypes-a/index.html",
    "revision": "c71ba17b5d539c669711df9ae8e4021b"
  },
  {
    "url": "fontend/Js/Generics-b/index.html",
    "revision": "c4487ac5d1eb741634d9eb302c7235d4"
  },
  {
    "url": "fontend/Js/index.html",
    "revision": "6305ecc25a4847a6412a66a7909052d0"
  },
  {
    "url": "fontend/Js/js-algorithm-1/index.html",
    "revision": "37310ffed670198e2f2f41c348f9fdba"
  },
  {
    "url": "fontend/Js/js-algorithm-2/index.html",
    "revision": "3227113c749d220630fe54ed1e214e2e"
  },
  {
    "url": "fontend/Js/js-algorithm-3/index.html",
    "revision": "e3ed02b6d0de03e699961138328ee166"
  },
  {
    "url": "fontend/Js/js-algorithm-4/index.html",
    "revision": "ceeef1c999abb787411bf7f623eaf503"
  },
  {
    "url": "fontend/Js/js-basic-algorithm/index.html",
    "revision": "aedd6af0128c0d741c180a99e102c832"
  },
  {
    "url": "fontend/Js/js-core-1/index.html",
    "revision": "170bd3dc99390510d82c6aa2ac2200dc"
  },
  {
    "url": "fontend/Js/js-core-2/index.html",
    "revision": "6f36b215c25daea8706c6b86859f9908"
  },
  {
    "url": "fontend/Js/js-core-3/index.html",
    "revision": "54d726954c934d1293601c8700240e05"
  },
  {
    "url": "fontend/Js/js-core-4/index.html",
    "revision": "11f4d13b92bb1d15f6f2851f0c596bff"
  },
  {
    "url": "fontend/Js/js-core-5/index.html",
    "revision": "84967d616cb39b70d0d76c4ee93523dd"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "3e8785cf788090c5aa0aa9b7516e5f00"
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
    "revision": "fef848235df854607788dece786e8c0d"
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
    "revision": "f6e22c972e3cf37e652a0ad738ab84fc"
  },
  {
    "url": "timeline/index.html",
    "revision": "b07e5ba9e8cb2d4bf250c9dc816a09d9"
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
