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
    "revision": "a1bf57efc799544f283641e0c407d1fa"
  },
  {
    "url": "about/index.html",
    "revision": "a915f75d5299d9e3797bf23e7908ad84"
  },
  {
    "url": "algorithm/index.html",
    "revision": "c43949b0dd6206c4187bebd9c1ca1c01"
  },
  {
    "url": "algorithm/js-algorithm-1/index.html",
    "revision": "115e59131d9e223825587429b2cb4b3e"
  },
  {
    "url": "algorithm/js-algorithm-2/index.html",
    "revision": "95310f0bfea52579622aceb41bc2b8ec"
  },
  {
    "url": "algorithm/js-algorithm-3/index.html",
    "revision": "b48a1306eb41758cfe93e856a3f7caf6"
  },
  {
    "url": "algorithm/js-algorithm-4/index.html",
    "revision": "ff4e23be8657c250d61069286103fbe1"
  },
  {
    "url": "algorithm/js-algorithm-5/index.html",
    "revision": "241126ec8a4734c6e13f0f1202c1396b"
  },
  {
    "url": "algorithm/js-basic-algorithm/index.html",
    "revision": "b230d3c105360ef14e3399584c2894e2"
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
    "url": "assets/js/13.c030d36c.js",
    "revision": "3eb653f3d901dfdc98ac8bee2be3387e"
  },
  {
    "url": "assets/js/14.8b19e72f.js",
    "revision": "cc1377e2fd42fcb2a3d3c2cbc5c69899"
  },
  {
    "url": "assets/js/15.76d72200.js",
    "revision": "099332ab2b23c59d9dc0e6e4ba497a50"
  },
  {
    "url": "assets/js/16.b24eb135.js",
    "revision": "16adf60abd02a3fe8cd3e9965828ba1c"
  },
  {
    "url": "assets/js/17.b15da7d1.js",
    "revision": "94448b9e943553f064ecacf27f177502"
  },
  {
    "url": "assets/js/18.0b426e3d.js",
    "revision": "48b345019e1b88400313ae7061039e9d"
  },
  {
    "url": "assets/js/19.2c77163b.js",
    "revision": "94d3408c01578511f945652810d6ecb7"
  },
  {
    "url": "assets/js/20.4036f6b8.js",
    "revision": "1ccb2093d30c57f23d010909b49f144f"
  },
  {
    "url": "assets/js/21.afa42591.js",
    "revision": "30f10011aa4cf41d8bb962c4f9a70bb8"
  },
  {
    "url": "assets/js/22.065d0d6b.js",
    "revision": "1633a37a52e0be892b3c090df7d4c3fd"
  },
  {
    "url": "assets/js/23.a8ac9ed1.js",
    "revision": "3e0b8e9ebebb9f7af02fcfc96b1df1a6"
  },
  {
    "url": "assets/js/24.3ce183d9.js",
    "revision": "1a63cacb78429817f096fd0a17575e96"
  },
  {
    "url": "assets/js/25.2ae011c9.js",
    "revision": "8fb02ad4c9ed24847f9ff2a9db7115aa"
  },
  {
    "url": "assets/js/26.4e014cb2.js",
    "revision": "7df7bd28f2ddfb631a452b12837f293e"
  },
  {
    "url": "assets/js/27.1fcc01ae.js",
    "revision": "2ac60671b420a2231c42b5a2261dfd49"
  },
  {
    "url": "assets/js/28.a5130788.js",
    "revision": "cf89f074762b9b0c306847816eb2e913"
  },
  {
    "url": "assets/js/29.1ff43ba9.js",
    "revision": "bd38868c3501e3bbf3acd04b8bb567e8"
  },
  {
    "url": "assets/js/3.a963b92e.js",
    "revision": "136bf378000bbaddb2b5aa60b414749e"
  },
  {
    "url": "assets/js/30.c573e8eb.js",
    "revision": "d840d35bd9e4ebf5e8a4ec764e96642c"
  },
  {
    "url": "assets/js/31.62d64d52.js",
    "revision": "8fde64eedfe5faee2fb0c6bf6772c786"
  },
  {
    "url": "assets/js/32.8d7040ee.js",
    "revision": "f7bea8377146c32e43d48d8ddce20e5f"
  },
  {
    "url": "assets/js/33.89a90ccb.js",
    "revision": "2d775304082e2de9000fe186171bdacc"
  },
  {
    "url": "assets/js/34.880589ee.js",
    "revision": "eb73e0d46df88ae746b3dc5663c5aa69"
  },
  {
    "url": "assets/js/35.68547a61.js",
    "revision": "eaa4fdb3baa4b64a6a47fd6ce8800087"
  },
  {
    "url": "assets/js/36.ada31b49.js",
    "revision": "4f35af0f419329b45c4e40bb1e35ca69"
  },
  {
    "url": "assets/js/37.684ad773.js",
    "revision": "767bb1527f93f7149a9033b2e3f325fb"
  },
  {
    "url": "assets/js/38.9baa7fa8.js",
    "revision": "d73d4a3bb580285894f9bbd416ce88ef"
  },
  {
    "url": "assets/js/39.3e3826a7.js",
    "revision": "0fd22e47a5a78974a3df0f9ad68c69a7"
  },
  {
    "url": "assets/js/4.618061b3.js",
    "revision": "c41eb9ce06f8d6b610770e6b3b480ec4"
  },
  {
    "url": "assets/js/40.34bc2c9e.js",
    "revision": "2a7ed8ab43630980f0cc8881051b351b"
  },
  {
    "url": "assets/js/41.ba0f6954.js",
    "revision": "f4097d3b37201edfcfa1bbe79191b673"
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
    "url": "assets/js/app.6bfb99ec.js",
    "revision": "3eb6622d8b34f0cafb2c07de76f37382"
  },
  {
    "url": "categories/index.html",
    "revision": "ea540e14bb84ae3b15bcdaf376f8e6a6"
  },
  {
    "url": "fontend/css/css-layout-1/index.html",
    "revision": "7ba2dd58c29128d46bcc8912a53475c5"
  },
  {
    "url": "fontend/css/css-layout-2/index.html",
    "revision": "cebd8d5537f6b288c8d37f29e2a27e78"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "fc89c42e7cda0effdc320fff869461fe"
  },
  {
    "url": "fontend/css/interesting-style-1/index.html",
    "revision": "c83862719b9d26c1cae8a1e64585e311"
  },
  {
    "url": "fontend/css/interesting-style-2/index.html",
    "revision": "54b46efac4e4e972297d9dde9144f54d"
  },
  {
    "url": "fontend/css/responsive/index.html",
    "revision": "6cce95c29629747010bb7f2e9e8f4e47"
  },
  {
    "url": "fontend/html/html-semantic-elements/index.html",
    "revision": "3e7884a5eacffe0a317c0b8dc9a6d07c"
  },
  {
    "url": "fontend/html/html-seo/index.html",
    "revision": "828fa81bac131412cca62a1ffdbb176d"
  },
  {
    "url": "fontend/html/index.html",
    "revision": "e48294ff2eac011aa5429cc568459f97"
  },
  {
    "url": "fontend/Js/ConditionalTypes-a/index.html",
    "revision": "7405623ff0c08b8ad10c8edada53fc19"
  },
  {
    "url": "fontend/Js/Generics-b/index.html",
    "revision": "e36d1e6b88de078a8c3d32c92f26014d"
  },
  {
    "url": "fontend/Js/index.html",
    "revision": "ecc9b8b3e9385f589d2669c4fc326a86"
  },
  {
    "url": "fontend/Js/js-core-1/index.html",
    "revision": "d6c5e834cf221b27446c659fc75391fd"
  },
  {
    "url": "fontend/Js/js-core-2/index.html",
    "revision": "bc0a569d6a32e20c10786120e40b92b2"
  },
  {
    "url": "fontend/Js/js-core-3/index.html",
    "revision": "e089d2321c1c346b33229642319b69ec"
  },
  {
    "url": "fontend/Js/js-core-4/index.html",
    "revision": "2bd8208a0e82886a67b767060d9ee617"
  },
  {
    "url": "fontend/Js/js-core-5/index.html",
    "revision": "63eae45cdbc662e1e3e79ba85e18aab6"
  },
  {
    "url": "fontend/websitecol/index.html",
    "revision": "c101997a2178e2884bb67ae8fcd56c3a"
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
    "revision": "362e6ba2e9008abe620c37f6f9178a3d"
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
    "revision": "cdb5010a79b878cdafb3f5da3c4c08bf"
  },
  {
    "url": "timeline/index.html",
    "revision": "056a9cf17a31abd5856489deb6ced201"
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
