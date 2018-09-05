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
    "revision": "acec8932659bb4ad2290990180a5c491"
  },
  {
    "url": "assets/case-studies/emma.webp",
    "revision": "506757f8504473cf88542c1687e53b2d"
  },
  {
    "url": "assets/case-studies/josh.jpg",
    "revision": "bd21a7701fdd9741e598ecdca7b36323"
  },
  {
    "url": "assets/case-studies/josh.webp",
    "revision": "fcaa36e2a6f53e99cd4a16b13226fc4d"
  },
  {
    "url": "assets/case-studies/shera.jpg",
    "revision": "92cd29e021b8a8e56e22d1fb9301ee99"
  },
  {
    "url": "assets/case-studies/shera.webp",
    "revision": "86611d0c26603982fa0f45bdaf04f79a"
  },
  {
    "url": "assets/case-studies/tina.jpg",
    "revision": "c80ed84105192f3de8c0953bc2c4d566"
  },
  {
    "url": "assets/case-studies/tina.webp",
    "revision": "a273768aa958d2cbac49b0e6e66ab63d"
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
    "revision": "bc747d0b067b5ceb6669ac58bf75fbcb"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "d1b219cd8d45370eca8bd6be63e3785c"
  },
  {
    "url": "assets/icons/android-chrome-512x512.webp",
    "revision": "8299ad3c4e2ad2c26fa297788dab5f57"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "cfe3b394e8743230d891a109c6a0ca9a"
  },
  {
    "url": "assets/icons/apple-touch-icon.webp",
    "revision": "8839dce79e1b561570acbf1ba4c9bd24"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "94d86e03c8ded660a8f6be2d985464c9"
  },
  {
    "url": "assets/icons/favicon-16x16.webp",
    "revision": "56ef5f9d44bbf33f3fd0d44cad2cff13"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "4d2060a513398adec9128c6763d2d02f"
  },
  {
    "url": "assets/icons/favicon-32x32.webp",
    "revision": "3504bb25fd06b8e2a5750cddf2c4dad0"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "787c41b21cfebc0f8408b9670efbbad0"
  },
  {
    "url": "assets/icons/icon.webp",
    "revision": "7120f59dc9132c867d60f0cdc08f08bb"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "ff52fb93b4777d2f9413c4cf113b195a"
  },
  {
    "url": "assets/icons/mstile-150x150.webp",
    "revision": "13f9a1dccf812630abd714b58a1adf28"
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
    "revision": "58aa903a264c2e8443d936585a91af15"
  },
  {
    "url": "assets/index/network-01.png",
    "revision": "7a8e59caa26345fa6079bc28778de9df"
  },
  {
    "url": "assets/index/network-01.webp",
    "revision": "20a68ea447dd43900b2f372898c8087d"
  },
  {
    "url": "assets/index/network-02.png",
    "revision": "12f4f2be611659291287113be3492757"
  },
  {
    "url": "assets/index/network-02.webp",
    "revision": "9f1636bdc0075f82296bb70e88893482"
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
    "url": "assets/index/teamwork.png",
    "revision": "2aae6ceda29b94d4cbb389c865883244"
  },
  {
    "url": "assets/index/teamwork.webp",
    "revision": "788215528913c28e5efab0c10a170b53"
  },
  {
    "url": "assets/index/timeline-alt.png",
    "revision": "4f6a2146c1163cbb297daaf9a926e54f"
  },
  {
    "url": "assets/index/timeline-alt.webp",
    "revision": "b41b6065909bbf657acf275222f084a6"
  },
  {
    "url": "assets/index/timeline.svg",
    "revision": "f4ba4942646967de73e72eabdf54b5ee"
  },
  {
    "url": "assets/index/timeline.webp",
    "revision": "b449a3bfbc06c2c975906f702567e1ae"
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
    "revision": "e9a2c06f037620083a35f49dc57c31de"
  },
  {
    "url": "error.html",
    "revision": "f7a34b576b9d9dce4366f6ac73f136de"
  },
  {
    "url": "eula.html",
    "revision": "01e59666d3a60fc606088dbc29a095e2"
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
    "revision": "c4cdd6134638057ca0af92cd6f46eaa3"
  },
  {
    "url": "modals/press.html",
    "revision": "14e934ccaab7eba4a78ed350dea6fd47"
  },
  {
    "url": "modals/story-josh.html",
    "revision": "3040bf338b4ea0f7a08a13253971ed9e"
  },
  {
    "url": "modals/story-shera.html",
    "revision": "5d5d33f36aa73a756d7b89528002db02"
  },
  {
    "url": "modals/story-tina.html",
    "revision": "02ca906d1592b720c12243b852804c44"
  },
  {
    "url": "modals/whitepaper.html",
    "revision": "99f7f247fede9bb7557207360a889a80"
  },
  {
    "url": "privacy-bill-of-rights.html",
    "revision": "78e8e4e48a322f4b39cd783821352b03"
  },
  {
    "url": "privacy-policy.html",
    "revision": "8737fbcd3ab98bf2289c66d18e1a7a09"
  },
  {
    "url": "scripts/app.5c5607e1ed.min.js",
    "revision": "5c5607e1edace941dbf6032bfd41496c"
  },
  {
    "url": "scripts/app.bb1776b6f3.min.css",
    "revision": "bb1776b6f37425f72d97057c656eb239"
  },
  {
    "url": "scripts/vendor.ca6cbf53e8.min.js",
    "revision": "ca6cbf53e80af15afdd8fc7263bcaa6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
