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
    "revision": "c718642d938cecb0d8b104514d3f8a3f"
  },
  {
    "url": "about/index.html",
    "revision": "13418513829990fdb8bc173b317d470d"
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
    "url": "assets/js/13.fc0adab2.js",
    "revision": "b86dcf2f2008b8850e4e9a2ee46de03c"
  },
  {
    "url": "assets/js/14.8b19e72f.js",
    "revision": "cc1377e2fd42fcb2a3d3c2cbc5c69899"
  },
  {
    "url": "assets/js/15.0edf1210.js",
    "revision": "3fbeed367dc26a8ca1e082a1aa8802d9"
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
    "url": "assets/js/18.2bbb3b1d.js",
    "revision": "e5806a762b1a4c989167dbdae182ede2"
  },
  {
    "url": "assets/js/19.bead1fe4.js",
    "revision": "67c2d36bb6cad46bd90f1f848f5ceaf0"
  },
  {
    "url": "assets/js/20.3e2f8192.js",
    "revision": "09a6b9f7a60435946dd62b4abdb8b5fd"
  },
  {
    "url": "assets/js/21.02b9b705.js",
    "revision": "856ae23337521af36edc2ce4e0eed4ea"
  },
  {
    "url": "assets/js/22.bc5cceb9.js",
    "revision": "7b35c9ad8ca4eebff1732013988d9a49"
  },
  {
    "url": "assets/js/23.7222f47a.js",
    "revision": "cd5023e74d72a6980d09769bf8f489bf"
  },
  {
    "url": "assets/js/24.9754abf2.js",
    "revision": "3b0f6d29660d24b430399160fab94f82"
  },
  {
    "url": "assets/js/25.1205f468.js",
    "revision": "2cc654871e5840b1dc7b2fd64c02cff0"
  },
  {
    "url": "assets/js/26.8167fb06.js",
    "revision": "c0c030fa3d94e8add397befcc4595b30"
  },
  {
    "url": "assets/js/27.e79fb42c.js",
    "revision": "66605ccea077473716ce28d5c0ae55ef"
  },
  {
    "url": "assets/js/28.c75c5edb.js",
    "revision": "695a84e9a95629f8fbfceb188e16ec57"
  },
  {
    "url": "assets/js/29.d7104f76.js",
    "revision": "1bf272b2c2923df090f4f908e42fa74e"
  },
  {
    "url": "assets/js/3.a963b92e.js",
    "revision": "136bf378000bbaddb2b5aa60b414749e"
  },
  {
    "url": "assets/js/30.6bb3c71d.js",
    "revision": "0c2db4fcb4ff934e6d9b668c47e858a8"
  },
  {
    "url": "assets/js/31.d5dffae8.js",
    "revision": "e9dc6e9b44d01bd67b8586b2f08c0ada"
  },
  {
    "url": "assets/js/32.7bd55f74.js",
    "revision": "b0e34083cf3f749831c3fb1a65b9c723"
  },
  {
    "url": "assets/js/33.743ea126.js",
    "revision": "458847427a88c8547a527413fe1b4864"
  },
  {
    "url": "assets/js/34.19f7a687.js",
    "revision": "eb267b957cf75454667a6b6697d20718"
  },
  {
    "url": "assets/js/35.a1e00918.js",
    "revision": "1fd8e13572e458bc6fa82dbf01d8b33d"
  },
  {
    "url": "assets/js/36.b9ea89a4.js",
    "revision": "7615771aea93b8d0a26c3330c35a0e65"
  },
  {
    "url": "assets/js/37.193dd9d1.js",
    "revision": "66249a5c760412c4457a2946e0c2e570"
  },
  {
    "url": "assets/js/38.1964308a.js",
    "revision": "f7fb7dfd3ebf2ec9860a866067719b00"
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
    "url": "assets/js/app.1e12450d.js",
    "revision": "efd852dcd63145914355ef9dfc21f3ac"
  },
  {
    "url": "categories/index.html",
    "revision": "3abfbac876a082461614f2378255f9b9"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "ebbe3fc6789c85e46058f739c3da388d"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "3f04b3b9292b835cd79eeb4d10501830"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "73e9795e5a385e8728113c9ab6e445d2"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "39eaf74527c9f027ea5174cdfebf5c73"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "34edb3eda0f5e86f3dc636ebc92629d2"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "023910034e151713eeaa50531ad7c3ad"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "ad22359f22da4d0c13b0be09c4d01575"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "ee6a6baa0643245f693276b13a350483"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "d690f165ecb3cd5c49fb387e3b9cd19d"
  },
  {
    "url": "fontend/Js/ConditionalTypes-a/index.html",
    "revision": "57c0b8afbbec3304fd7919e67727d832"
  },
  {
    "url": "fontend/Js/Generics-b/index.html",
    "revision": "8d0b5d54972bb26dbbe1e6543e82f9f8"
  },
  {
    "url": "fontend/Js/index.html",
    "revision": "d15ae3e887b4d4522b63144ef72df39c"
  },
  {
    "url": "fontend/Js/js-algorithm-1/index.html",
    "revision": "3aedee350a2c0b3c6ae2460058c98a29"
  },
  {
    "url": "fontend/Js/js-algorithm-2/index.html",
    "revision": "e2cb7836c2ec25b2c1351041c8ca683e"
  },
  {
    "url": "fontend/Js/js-algorithm-3/index.html",
    "revision": "c790e69bcc98280f258808194b31723a"
  },
  {
    "url": "fontend/Js/js-basic-algorithm/index.html",
    "revision": "57ff9a6082f0cc94cfb72ace1e50f5da"
  },
  {
    "url": "fontend/Js/js-core-1/index.html",
    "revision": "b8ec5a086339c3420aef58e74541b097"
  },
  {
    "url": "fontend/Js/js-core-2/index.html",
    "revision": "e19470f235b078732f4dd21ae44b0bcf"
  },
  {
    "url": "fontend/Js/js-core-3/index.html",
    "revision": "d8597e15d369db163dddccb0f0236685"
  },
  {
    "url": "fontend/Js/js-core-4/index.html",
    "revision": "d524d735a5ed9125eb6eb72ab4006154"
  },
  {
    "url": "fontend/Js/js-core-5/index.html",
    "revision": "a18b9a8cac9af7ee5ef7e2fafe81063e"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "3191fe031ae83238451b3dfb2336ea6f"
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
    "revision": "ee0ce804ce083cf332060d13cb1354ab"
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
    "revision": "9846a9bb5368413cef3c231549112569"
  },
  {
    "url": "timeline/index.html",
    "revision": "4e715ae5bef15b92af4b920b93b018db"
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
