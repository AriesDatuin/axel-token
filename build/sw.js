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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/backgrounds/pattern-01.svg",
    "revision": "66e3d2a96d5bdd28dc7f0da6ab7c56c7"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.webp",
    "revision": "fb7090b866e9c51ee5aca28676a297ff"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.webp",
    "revision": "57169d5bed279262c744e93203362e6e"
  },
  {
    "url": "assets/case-studies/emma.jpg",
    "revision": "47d1bb5aa4a8e81618ec3c2f2584f174"
  },
  {
    "url": "assets/case-studies/emma.webp",
    "revision": "b0405dca92f7e3a1a02622d9f5734d22"
  },
  {
    "url": "assets/case-studies/josh.jpg",
    "revision": "8cd1c290df3f433a38ad4eb4c69a42a3"
  },
  {
    "url": "assets/case-studies/josh.webp",
    "revision": "89b4f273e90fda0df3e09b4d4a20919b"
  },
  {
    "url": "assets/case-studies/shera.jpg",
    "revision": "4cd233641dc0fe42a6d5ae8a13ef78f9"
  },
  {
    "url": "assets/case-studies/shera.webp",
    "revision": "9ff403a921727deda8c311d778d93c8e"
  },
  {
    "url": "assets/case-studies/tina.jpg",
    "revision": "2f8b8b5adfb84b19a8bfa4c812fb7ab5"
  },
  {
    "url": "assets/case-studies/tina.webp",
    "revision": "4b28b6aa899102c99cdb360eaa294c4b"
  },
  {
    "url": "assets/error.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/icon-google.svg",
    "revision": "f16ad52d955fc63de49886ff657e88cd"
  },
  {
    "url": "assets/icons-nav.svg",
    "revision": "54c5e42c9b101ef67753192ca9862933"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "e5e16031c8be61dd9149d196c65ed711"
  },
  {
    "url": "assets/icons/android-chrome-192x192.webp",
    "revision": "6eceef8d0811526b7014a17b8a1bce23"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "30b7c01f8186ef4dec71f6ce37cc7418"
  },
  {
    "url": "assets/icons/android-chrome-512x512.webp",
    "revision": "377c855b59820b243b180c58218c85da"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "dba53c6c2f8c77922d284f21b901d9da"
  },
  {
    "url": "assets/icons/apple-touch-icon.webp",
    "revision": "8839dce79e1b561570acbf1ba4c9bd24"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "5e4ac1fb1a9bfd5537541fa647518451"
  },
  {
    "url": "assets/icons/favicon-16x16.webp",
    "revision": "2d483e3d3d228364e7a2dc46ebec69d4"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "420471408cdb1e2edf26b46342c51d56"
  },
  {
    "url": "assets/icons/favicon-32x32.webp",
    "revision": "e9d057c7749344a01d4e58951fd694b2"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "23fa1877b186c2d2ed476fedf18ac357"
  },
  {
    "url": "assets/icons/icon.webp",
    "revision": "7120f59dc9132c867d60f0cdc08f08bb"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "1518f0782bbbc89915f2c6fd2efea735"
  },
  {
    "url": "assets/icons/mstile-150x150.webp",
    "revision": "351585c085906531884c9f4dd86b0bb3"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "57a22292eb8001bddef2c96d6b9e53be"
  },
  {
    "url": "assets/illustrations/data.svg",
    "revision": "8296f1a91d236b57ea0c1f9be59b947d"
  },
  {
    "url": "assets/illustrations/jacob-alt.svg",
    "revision": "bc046f941f8e9346ee3f6a40806c337a"
  },
  {
    "url": "assets/illustrations/puzzles.svg",
    "revision": "136613a204ed0f25194cc5ea5de5f82e"
  },
  {
    "url": "assets/illustrations/rocket.svg",
    "revision": "2c7120524d18e3bfc0a9a393fba2fe8b"
  },
  {
    "url": "assets/illustrations/shopping.svg",
    "revision": "0e4f5e424aff1439b1f63bec7584dea9"
  },
  {
    "url": "assets/illustrations/teamwork-alt.svg",
    "revision": "9446ffac98d9715e144a484a17e1d907"
  },
  {
    "url": "assets/illustrations/teamwork.svg",
    "revision": "3842f3e8e6cbef674a286578bcd88f4f"
  },
  {
    "url": "assets/index/people-alt.jpg",
    "revision": "c95d09165bb6101283884609272cbbed"
  },
  {
    "url": "assets/index/people-alt.webp",
    "revision": "ce90c6c44820d526f36393f6de7c32bd"
  },
  {
    "url": "assets/index/people.jpg",
    "revision": "a34fabb18852bafc68721c078cc36eb9"
  },
  {
    "url": "assets/index/people.webp",
    "revision": "4f70ea6c8f0dfa74966340925232d904"
  },
  {
    "url": "assets/index/timeline.png",
    "revision": "7e78604952ad7dad60c9972a0438edc3"
  },
  {
    "url": "assets/index/timeline.svg",
    "revision": "f4ba4942646967de73e72eabdf54b5ee"
  },
  {
    "url": "assets/index/timeline.webp",
    "revision": "78a8b9988cbd76c501991d805cc0ced1"
  },
  {
    "url": "assets/social/profile.png",
    "revision": "6a3889e53815d0aec8624bd7f55ac01c"
  },
  {
    "url": "assets/social/profile.webp",
    "revision": "2a3136c2dd3fb9c67c804dfa69961cdb"
  },
  {
    "url": "assets/social/social.png",
    "revision": "7ba8125980e6a27cd3a3dc3978ecc9b2"
  },
  {
    "url": "assets/social/social.webp",
    "revision": "8a543b55a6afb2d804351af521fbc5fc"
  },
  {
    "url": "assets/team/large-ben-ow.jpg",
    "revision": "ed9fdbd0bd3cf1dd1b9f2bf84d8bf476"
  },
  {
    "url": "assets/team/large-ben-ow.webp",
    "revision": "ec4da7978ddfa50f458cdaeeeeb3327c"
  },
  {
    "url": "assets/team/large-dave-kaplan.jpg",
    "revision": "f249dad771842e4139ffc889253241e2"
  },
  {
    "url": "assets/team/large-dave-kaplan.webp",
    "revision": "efc254f6828262afd90f8938ae8471e0"
  },
  {
    "url": "assets/team/large-diana-zhang.jpg",
    "revision": "c60c315afb1ce574e4b395bd08128fcd"
  },
  {
    "url": "assets/team/large-diana-zhang.webp",
    "revision": "d7da9b2c776d381abb1eca2922dbe611"
  },
  {
    "url": "assets/team/large-dmitry-kogosov.jpg",
    "revision": "1a55e4f8b1f28cb93bb23caf163fa69f"
  },
  {
    "url": "assets/team/large-dmitry-kogosov.webp",
    "revision": "2106563bd42f5605effc930c7bc996e3"
  },
  {
    "url": "assets/team/large-dmytro-ashkinazi.jpg",
    "revision": "803d0e4bcb1298690dcd303a02d97d7d"
  },
  {
    "url": "assets/team/large-dmytro-ashkinazi.webp",
    "revision": "8e0ced5d3d86f535d29123678a2cf27e"
  },
  {
    "url": "assets/team/large-jeremy-forsberg.jpg",
    "revision": "64565e8576e662cb98b8d15b6b806e73"
  },
  {
    "url": "assets/team/large-jeremy-forsberg.webp",
    "revision": "24b345f5da19c4071809fdeb95792ac2"
  },
  {
    "url": "assets/team/large-michael-conn.jpg",
    "revision": "ad4012013444b3fa940dd9261ef8e981"
  },
  {
    "url": "assets/team/large-michael-conn.webp",
    "revision": "c81d04aa47f17d602a4dfe2d585fd5b9"
  },
  {
    "url": "assets/team/large-rick-stiles.jpg",
    "revision": "80257a873d4bed2c377c7304dfac96d7"
  },
  {
    "url": "assets/team/large-rick-stiles.webp",
    "revision": "a6e664522b1b8c6ecd39f5a3c25fef2c"
  },
  {
    "url": "assets/team/large-sandy-zhou.jpg",
    "revision": "e43e2085f99af4fca34f506557120ef6"
  },
  {
    "url": "assets/team/large-sandy-zhou.webp",
    "revision": "6435406cc86f5dfe97d0c298e19f4f57"
  },
  {
    "url": "assets/team/large-tony-tan.jpg",
    "revision": "eea450d9d4c9c6544c9f21fe1a3f35b5"
  },
  {
    "url": "assets/team/large-tony-tan.webp",
    "revision": "e29d044fe80a3486dcf9a6ebe527e903"
  },
  {
    "url": "assets/team/small-ben-ow.jpg",
    "revision": "4c2e1cdbdcfb14b1c76b6bbfd0edc3eb"
  },
  {
    "url": "assets/team/small-ben-ow.webp",
    "revision": "ebc739c7a4a4c987bd93b7f2cb904c73"
  },
  {
    "url": "assets/team/small-dave-kaplan.jpg",
    "revision": "56dcca24dfb7b59a0f28202d141836ea"
  },
  {
    "url": "assets/team/small-dave-kaplan.webp",
    "revision": "0dddc01e6ea13b085dde5cd162166009"
  },
  {
    "url": "assets/team/small-diana-zhang.jpg",
    "revision": "41887176cf263c04483bcfe6c39e2db7"
  },
  {
    "url": "assets/team/small-diana-zhang.webp",
    "revision": "5e3aa9f3ac13c1b0644efa1728a28603"
  },
  {
    "url": "assets/team/small-dmitry-kogosov.jpg",
    "revision": "47389980de83722078b2115ad54b75d0"
  },
  {
    "url": "assets/team/small-dmitry-kogosov.webp",
    "revision": "102b158a3196bf4474885977961665f5"
  },
  {
    "url": "assets/team/small-dmytro-ashkinazi.jpg",
    "revision": "2d90d84c498fa9ef75a3f317d8b0d0d4"
  },
  {
    "url": "assets/team/small-dmytro-ashkinazi.webp",
    "revision": "ccacaf8c794df6c196ce2e23a07ca812"
  },
  {
    "url": "assets/team/small-jeremy-forsberg.jpg",
    "revision": "006cebf1ed892f382d78830afa4e096e"
  },
  {
    "url": "assets/team/small-jeremy-forsberg.webp",
    "revision": "b96fd9345f6b9c8a9b92d518d75efaaf"
  },
  {
    "url": "assets/team/small-michael-conn.jpg",
    "revision": "c778a9c6e8536e3e09ad747ec0efaf4e"
  },
  {
    "url": "assets/team/small-michael-conn.webp",
    "revision": "ac3c99c35dc699b43286c7b0e72133e1"
  },
  {
    "url": "assets/team/small-rick-stiles.jpg",
    "revision": "397d387c7dc2659770ced946ebba8691"
  },
  {
    "url": "assets/team/small-rick-stiles.webp",
    "revision": "39714a977fcb80ce51b166d0bdc9c8b2"
  },
  {
    "url": "assets/team/small-sandy-zhou.jpg",
    "revision": "49d499784a9237d4083b3fd651bedc29"
  },
  {
    "url": "assets/team/small-sandy-zhou.webp",
    "revision": "bb796e75211bbc12aadede2d395394cb"
  },
  {
    "url": "assets/team/small-tony-tan.jpg",
    "revision": "ad60e8ace3edd92a6f782f0e6b4251b1"
  },
  {
    "url": "assets/team/small-tony-tan.webp",
    "revision": "aec1a453a517b3f8dee4577d1d3cb834"
  },
  {
    "url": "copyright.html",
    "revision": "909067e625c5583d30b7893f7793d7be"
  },
  {
    "url": "error.html",
    "revision": "6662cee236fbb5975a147a847b1cad55"
  },
  {
    "url": "eula.html",
    "revision": "6b5e20be972d486d8fed7dac150bea3c"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "fonts/fontawesome.css",
    "revision": "77b5c0c7719ad4093de5eaa95de4c882"
  },
  {
    "url": "fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "index.html",
    "revision": "356f2fc554c56a7d5a351b7489815ef9"
  },
  {
    "url": "modals/press.html",
    "revision": "14e934ccaab7eba4a78ed350dea6fd47"
  },
  {
    "url": "modals/story-josh.html",
    "revision": "b62da3ac9ced7b4e472c4e8ef7ded4dc"
  },
  {
    "url": "modals/story-shera.html",
    "revision": "0ab0034e94dd4e08d0db1123d7d55a5d"
  },
  {
    "url": "modals/story-tina.html",
    "revision": "5ccdefa8476bba30ce729d7bd1b22e13"
  },
  {
    "url": "modals/whitepaper.html",
    "revision": "99f7f247fede9bb7557207360a889a80"
  },
  {
    "url": "privacy-bill-of-rights.html",
    "revision": "2d2eed77a0dd1ebad29dc7a74e7a32b5"
  },
  {
    "url": "privacy-policy.html",
    "revision": "c25329b529d2182cc9410f720382f7f3"
  },
  {
    "url": "scripts/app.a2c787b0b2.min.css",
    "revision": "a2c787b0b2b1241ce67159dc965485e5"
  },
  {
    "url": "scripts/app.ebd92fa1a3.min.js",
    "revision": "ebd92fa1a3acba0fda59bfd364971ca6"
  },
  {
    "url": "scripts/vendor.ca6cbf53e8.min.js",
    "revision": "ca6cbf53e80af15afdd8fc7263bcaa6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
