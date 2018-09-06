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
    "url": "assets/backgrounds/pattern-cubes-dark.svg",
    "revision": "75b89fecf3ca46117983d6f9f4e358c9"
  },
  {
    "url": "assets/backgrounds/pattern-cubes-light.svg",
    "revision": "ba263a4473ccb68db10892f275c38fc1"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.webp",
    "revision": "c1eabcce53115ab886c71eabf5789754"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.webp",
    "revision": "304bb58a9b12c9dca970619bf2f3eab8"
  },
  {
    "url": "assets/case-studies/emma.jpg",
    "revision": "acec8932659bb4ad2290990180a5c491"
  },
  {
    "url": "assets/case-studies/emma.webp",
    "revision": "f596f37dc69d90f75c3089df3cfc9bfe"
  },
  {
    "url": "assets/case-studies/josh.jpg",
    "revision": "bd21a7701fdd9741e598ecdca7b36323"
  },
  {
    "url": "assets/case-studies/josh.png",
    "revision": "201b4e651bd97a5cedf6f766017de51f"
  },
  {
    "url": "assets/case-studies/josh.webp",
    "revision": "064e526ab36f59040225c59dbfaed25d"
  },
  {
    "url": "assets/case-studies/shera.jpg",
    "revision": "92cd29e021b8a8e56e22d1fb9301ee99"
  },
  {
    "url": "assets/case-studies/shera.png",
    "revision": "e468ccf1fe60337108336b6273456e96"
  },
  {
    "url": "assets/case-studies/shera.webp",
    "revision": "07e974f92235a39ede66f9dee0059f60"
  },
  {
    "url": "assets/case-studies/tina.jpg",
    "revision": "c80ed84105192f3de8c0953bc2c4d566"
  },
  {
    "url": "assets/case-studies/tina.png",
    "revision": "c2fa10ea0e1ac21c2df05e7f8c45b4cf"
  },
  {
    "url": "assets/case-studies/tina.webp",
    "revision": "d8d1516e524ceb9ec3448e87334d97d3"
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
    "revision": "c1b3bd7ef3e7649d021d4ed7d63357a4"
  },
  {
    "url": "assets/icons/android-chrome-192x192.webp",
    "revision": "a092492a4a940975f09576102e111f57"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "d1b219cd8d45370eca8bd6be63e3785c"
  },
  {
    "url": "assets/icons/android-chrome-512x512.webp",
    "revision": "81a8c0f898cca159754696b14c93ea78"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "cfe3b394e8743230d891a109c6a0ca9a"
  },
  {
    "url": "assets/icons/apple-touch-icon.webp",
    "revision": "83f5ec4e7a4dc434f561b5510a1f5460"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "94d86e03c8ded660a8f6be2d985464c9"
  },
  {
    "url": "assets/icons/favicon-16x16.webp",
    "revision": "e0bb2dabf468927227ff290d30e646f4"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "4d2060a513398adec9128c6763d2d02f"
  },
  {
    "url": "assets/icons/favicon-32x32.webp",
    "revision": "6a61a416b8ba809cdbe38f44e86b07b0"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "787c41b21cfebc0f8408b9670efbbad0"
  },
  {
    "url": "assets/icons/icon.webp",
    "revision": "6686e982f9838087628b702b368511e3"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "ff52fb93b4777d2f9413c4cf113b195a"
  },
  {
    "url": "assets/icons/mstile-150x150.webp",
    "revision": "f794f36ec70b0c2fb1eb1b560ef45a52"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "57a22292eb8001bddef2c96d6b9e53be"
  },
  {
    "url": "assets/illustrations/data.svg",
    "revision": "f799cad79f9869061f70dd2f50dffd19"
  },
  {
    "url": "assets/illustrations/hacker.svg",
    "revision": "3fdb0464a9def4da0213523e064033a9"
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
    "url": "assets/index/blockchain.png",
    "revision": "213b8301a327fec2c8db6976b70bbf1d"
  },
  {
    "url": "assets/index/blockchain.webp",
    "revision": "788bf872896957571f6a864655c03ba3"
  },
  {
    "url": "assets/index/data-01.png",
    "revision": "6e65d39e97e89337956d680e73ec76d4"
  },
  {
    "url": "assets/index/data-01.webp",
    "revision": "af2cebfbf5ae08ef2864e281f41b17de"
  },
  {
    "url": "assets/index/diagram-how-it-works.png",
    "revision": "374d9f3c9024e1f0f94d38de517358d7"
  },
  {
    "url": "assets/index/diagram-how-it-works.webp",
    "revision": "685555fc9c32a59bf692eebb77c6912c"
  },
  {
    "url": "assets/index/network-01.png",
    "revision": "7a8e59caa26345fa6079bc28778de9df"
  },
  {
    "url": "assets/index/network-01.webp",
    "revision": "eb68c49111fcbc902907517d30b8c974"
  },
  {
    "url": "assets/index/network-02.png",
    "revision": "12f4f2be611659291287113be3492757"
  },
  {
    "url": "assets/index/network-02.webp",
    "revision": "db68dd4aebc2f41ea1f14e25573a3a7e"
  },
  {
    "url": "assets/index/network-03.png",
    "revision": "07b3ebf42330ef4b1f5fe35dfb39f6ef"
  },
  {
    "url": "assets/index/network-03.webp",
    "revision": "05ab8cb502e6bdcc6942383b778cf1b4"
  },
  {
    "url": "assets/index/network-04.png",
    "revision": "124ee15cc95cdbb9037afe6ba2821329"
  },
  {
    "url": "assets/index/network-04.webp",
    "revision": "32de44375bd8a6a55c63fc1b4ddced38"
  },
  {
    "url": "assets/index/people.webp",
    "revision": "dd448187a234986b48eef99139c5e42e"
  },
  {
    "url": "assets/index/privacy-01.png",
    "revision": "08f50eea42daf9c475aa6381eea84ce5"
  },
  {
    "url": "assets/index/privacy-01.webp",
    "revision": "c1d4266d34afbea56652df873cc2df88"
  },
  {
    "url": "assets/index/privacy-02.png",
    "revision": "bb49218d8dc428035815a25bab1d6ce6"
  },
  {
    "url": "assets/index/privacy-02.webp",
    "revision": "3b296fd3d1164f2b001b7785eb1a6ca6"
  },
  {
    "url": "assets/index/screenshot-paid-link.png",
    "revision": "0bedba04b0ad6748a1a84fb8eac114b8"
  },
  {
    "url": "assets/index/screenshot-paid-link.webp",
    "revision": "25b6f6e6b5c1bd7fa09734669fcd7a2d"
  },
  {
    "url": "assets/index/teamwork.png",
    "revision": "2aae6ceda29b94d4cbb389c865883244"
  },
  {
    "url": "assets/index/teamwork.webp",
    "revision": "3355c4f3ec1689fee57fca8fd700ba97"
  },
  {
    "url": "assets/index/timeline-alt.png",
    "revision": "4f6a2146c1163cbb297daaf9a926e54f"
  },
  {
    "url": "assets/index/timeline-alt.webp",
    "revision": "ad004a54893e96ea88bef71cae1a88b9"
  },
  {
    "url": "assets/index/timeline.svg",
    "revision": "f4ba4942646967de73e72eabdf54b5ee"
  },
  {
    "url": "assets/index/timeline.webp",
    "revision": "7d7da4f786badf9bdc9b111dc9c86cd7"
  },
  {
    "url": "assets/social/profile.png",
    "revision": "6a3889e53815d0aec8624bd7f55ac01c"
  },
  {
    "url": "assets/social/profile.webp",
    "revision": "4b046b775d8731de3aa7290cabfa06dd"
  },
  {
    "url": "assets/social/social.png",
    "revision": "7ba8125980e6a27cd3a3dc3978ecc9b2"
  },
  {
    "url": "assets/social/social.webp",
    "revision": "e00eef5ac7f11003e2d93d6f1c6e218a"
  },
  {
    "url": "assets/team/large-ben-ow.jpg",
    "revision": "ed9fdbd0bd3cf1dd1b9f2bf84d8bf476"
  },
  {
    "url": "assets/team/large-ben-ow.webp",
    "revision": "fe9f02bef0d71c5e471fbe1faa570e74"
  },
  {
    "url": "assets/team/large-dave-kaplan.jpg",
    "revision": "f249dad771842e4139ffc889253241e2"
  },
  {
    "url": "assets/team/large-dave-kaplan.webp",
    "revision": "dc4d7472ac00dcee0d025fc6669b18c5"
  },
  {
    "url": "assets/team/large-diana-zhang.jpg",
    "revision": "c60c315afb1ce574e4b395bd08128fcd"
  },
  {
    "url": "assets/team/large-diana-zhang.webp",
    "revision": "6cddac9a3956a102bc224a53fc87fba6"
  },
  {
    "url": "assets/team/large-dmitry-kogosov.jpg",
    "revision": "1a55e4f8b1f28cb93bb23caf163fa69f"
  },
  {
    "url": "assets/team/large-dmitry-kogosov.webp",
    "revision": "15d9d79ac1cfc94abee0f8053bcbb3b2"
  },
  {
    "url": "assets/team/large-dmytro-ashkinazi.jpg",
    "revision": "803d0e4bcb1298690dcd303a02d97d7d"
  },
  {
    "url": "assets/team/large-dmytro-ashkinazi.webp",
    "revision": "332d39e3251bf24544adcc09365bbe20"
  },
  {
    "url": "assets/team/large-jeremy-forsberg.jpg",
    "revision": "64565e8576e662cb98b8d15b6b806e73"
  },
  {
    "url": "assets/team/large-jeremy-forsberg.webp",
    "revision": "1e347a8a0045e07a6fb3e6d58b855926"
  },
  {
    "url": "assets/team/large-michael-conn.jpg",
    "revision": "ad4012013444b3fa940dd9261ef8e981"
  },
  {
    "url": "assets/team/large-michael-conn.webp",
    "revision": "8876a268221a07e4794811ec4db1be98"
  },
  {
    "url": "assets/team/large-rick-stiles.jpg",
    "revision": "80257a873d4bed2c377c7304dfac96d7"
  },
  {
    "url": "assets/team/large-rick-stiles.webp",
    "revision": "fad0d44d399dad2e095f995185a765d2"
  },
  {
    "url": "assets/team/large-sandy-zhou.jpg",
    "revision": "e43e2085f99af4fca34f506557120ef6"
  },
  {
    "url": "assets/team/large-sandy-zhou.webp",
    "revision": "5312508ce1e41f078f3f52773069ea03"
  },
  {
    "url": "assets/team/large-tony-tan.jpg",
    "revision": "eea450d9d4c9c6544c9f21fe1a3f35b5"
  },
  {
    "url": "assets/team/large-tony-tan.webp",
    "revision": "db100e617df05f4fe5481fed7e44f535"
  },
  {
    "url": "assets/team/small-ben-ow.jpg",
    "revision": "4c2e1cdbdcfb14b1c76b6bbfd0edc3eb"
  },
  {
    "url": "assets/team/small-ben-ow.webp",
    "revision": "ea29ff443acb427e555d02513336e7dc"
  },
  {
    "url": "assets/team/small-dave-kaplan.jpg",
    "revision": "56dcca24dfb7b59a0f28202d141836ea"
  },
  {
    "url": "assets/team/small-dave-kaplan.webp",
    "revision": "dd0beb0dea4383855495234c09b0afde"
  },
  {
    "url": "assets/team/small-diana-zhang.jpg",
    "revision": "41887176cf263c04483bcfe6c39e2db7"
  },
  {
    "url": "assets/team/small-diana-zhang.webp",
    "revision": "f38f1db6d47b8fe41e4fd9fa216505a7"
  },
  {
    "url": "assets/team/small-dmitry-kogosov.jpg",
    "revision": "47389980de83722078b2115ad54b75d0"
  },
  {
    "url": "assets/team/small-dmitry-kogosov.webp",
    "revision": "a8820f2bc32978dacdc51a1090fdf067"
  },
  {
    "url": "assets/team/small-dmytro-ashkinazi.jpg",
    "revision": "2d90d84c498fa9ef75a3f317d8b0d0d4"
  },
  {
    "url": "assets/team/small-dmytro-ashkinazi.webp",
    "revision": "e8a04a141c43aff2180d9cb323c3bf12"
  },
  {
    "url": "assets/team/small-jeremy-forsberg.jpg",
    "revision": "006cebf1ed892f382d78830afa4e096e"
  },
  {
    "url": "assets/team/small-jeremy-forsberg.webp",
    "revision": "68fefb0d7daf0dab1fd2237f2206597b"
  },
  {
    "url": "assets/team/small-michael-conn.jpg",
    "revision": "c778a9c6e8536e3e09ad747ec0efaf4e"
  },
  {
    "url": "assets/team/small-michael-conn.webp",
    "revision": "fbd4ad7cf574b141b206223ce1b98d88"
  },
  {
    "url": "assets/team/small-rick-stiles.jpg",
    "revision": "397d387c7dc2659770ced946ebba8691"
  },
  {
    "url": "assets/team/small-rick-stiles.webp",
    "revision": "098a7838858ef68d309633ec84f39e5e"
  },
  {
    "url": "assets/team/small-sandy-zhou.jpg",
    "revision": "49d499784a9237d4083b3fd651bedc29"
  },
  {
    "url": "assets/team/small-sandy-zhou.webp",
    "revision": "c994ff045306613586d74f15c79f5e4f"
  },
  {
    "url": "assets/team/small-tony-tan.jpg",
    "revision": "ad60e8ace3edd92a6f782f0e6b4251b1"
  },
  {
    "url": "assets/team/small-tony-tan.webp",
    "revision": "95fd26eb031e7d97210ccb836a2f8f44"
  },
  {
    "url": "copyright.html",
    "revision": "259b034052cd7748c3c83d0c2e057106"
  },
  {
    "url": "error.html",
    "revision": "22df36bf36a93063ee0ffc6716b808c6"
  },
  {
    "url": "eula.html",
    "revision": "5294d29bd292e073ea3fb2ea7d51ee6b"
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
    "revision": "425f06f54e79eba7c035c9c68f7b8fe9"
  },
  {
    "url": "fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "index.html",
    "revision": "932362fa838937a96154f0c8d1a4d3f5"
  },
  {
    "url": "modals/press.html",
    "revision": "14e934ccaab7eba4a78ed350dea6fd47"
  },
  {
    "url": "modals/story-josh.html",
    "revision": "da8f9a69dead5bb5675638f1d3a8ea1f"
  },
  {
    "url": "modals/story-shera.html",
    "revision": "ae626da688ad89db1cd62f03db1923c7"
  },
  {
    "url": "modals/story-tina.html",
    "revision": "048d578676aef768832d82eeab6e84ac"
  },
  {
    "url": "modals/whitepaper.html",
    "revision": "99f7f247fede9bb7557207360a889a80"
  },
  {
    "url": "privacy-bill-of-rights.html",
    "revision": "418bde1aa84686f66c469e68b2194f0b"
  },
  {
    "url": "privacy-policy.html",
    "revision": "b88a35a2b0ceb37b8ddf433142093705"
  },
  {
    "url": "scripts/app.39211fe4f3.min.css",
    "revision": "39211fe4f35269a17ab6e2169fe90439"
  },
  {
    "url": "scripts/app.65272f205e.min.js",
    "revision": "65272f205ea2d5c456e291ec37a98178"
  },
  {
    "url": "scripts/vendor.ca6cbf53e8.min.js",
    "revision": "ca6cbf53e80af15afdd8fc7263bcaa6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
