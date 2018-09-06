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
    "url": "assets/backgrounds/pattern-pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.webp",
    "revision": "926339f48e43301a3e6aec9d7052ef09"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.webp",
    "revision": "1dede19592d92f97ac0adf6c751c67f8"
  },
  {
    "url": "assets/case-studies/josh.png",
    "revision": "201b4e651bd97a5cedf6f766017de51f"
  },
  {
    "url": "assets/case-studies/josh.webp",
    "revision": "eda842b7975b2faab87c175149c476c8"
  },
  {
    "url": "assets/case-studies/shera.png",
    "revision": "e468ccf1fe60337108336b6273456e96"
  },
  {
    "url": "assets/case-studies/shera.webp",
    "revision": "8b94b22ba7230424a9081e6d23fafa80"
  },
  {
    "url": "assets/case-studies/tina.png",
    "revision": "c2fa10ea0e1ac21c2df05e7f8c45b4cf"
  },
  {
    "url": "assets/case-studies/tina.webp",
    "revision": "754d679228a22029eaf93578dabc4612"
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
    "revision": "f40b0098b437473c1a9afc8b7969766f"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "d1b219cd8d45370eca8bd6be63e3785c"
  },
  {
    "url": "assets/icons/android-chrome-512x512.webp",
    "revision": "d5f78d449aa501db9252c921cdecff20"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "cfe3b394e8743230d891a109c6a0ca9a"
  },
  {
    "url": "assets/icons/apple-touch-icon.webp",
    "revision": "c1b2a0ec7f3e9207a214bf43b331cade"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "94d86e03c8ded660a8f6be2d985464c9"
  },
  {
    "url": "assets/icons/favicon-16x16.webp",
    "revision": "8a94213d1af1ee92d60d74478b12bdb5"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "4d2060a513398adec9128c6763d2d02f"
  },
  {
    "url": "assets/icons/favicon-32x32.webp",
    "revision": "a115be365ff6dc5d535d19a3b641a45e"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "787c41b21cfebc0f8408b9670efbbad0"
  },
  {
    "url": "assets/icons/icon.webp",
    "revision": "e24529be8c7f2663a80ffa267f75a791"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "ff52fb93b4777d2f9413c4cf113b195a"
  },
  {
    "url": "assets/icons/mstile-150x150.webp",
    "revision": "77b093b358f5b32195c39cec441f13e7"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "57a22292eb8001bddef2c96d6b9e53be"
  },
  {
    "url": "assets/illustrations/scalable.svg",
    "revision": "50fab6639163a3b3c228d88e6adc43ab"
  },
  {
    "url": "assets/illustrations/shopping.svg",
    "revision": "55f57b4d34e6fb3981db8e8863ddd385"
  },
  {
    "url": "assets/illustrations/teamwork-alt.svg",
    "revision": "71a91d8eb1ccda667c0add682c182e73"
  },
  {
    "url": "assets/illustrations/teamwork.svg",
    "revision": "506548392c645cafa311d36e70b908bd"
  },
  {
    "url": "assets/index/blockchain.png",
    "revision": "213b8301a327fec2c8db6976b70bbf1d"
  },
  {
    "url": "assets/index/blockchain.webp",
    "revision": "c523053abdf517717832fb4c609de8c2"
  },
  {
    "url": "assets/index/data-01.png",
    "revision": "6e65d39e97e89337956d680e73ec76d4"
  },
  {
    "url": "assets/index/data-01.webp",
    "revision": "f19cfd8df9df6da3fe9a569cab61c947"
  },
  {
    "url": "assets/index/diagram-how-it-works.png",
    "revision": "eeabd1974d9a1489f47defdec9b36cdd"
  },
  {
    "url": "assets/index/diagram-how-it-works.webp",
    "revision": "d58d011db05caf9421cb47f5cf7e285f"
  },
  {
    "url": "assets/index/diagram-our-technology.png",
    "revision": "20728782cd34b112445cbe9738c55ecd"
  },
  {
    "url": "assets/index/diagram-our-technology.webp",
    "revision": "b061df7dcafa7d63eb8ee1e2c05d75b1"
  },
  {
    "url": "assets/index/network-01.png",
    "revision": "7a8e59caa26345fa6079bc28778de9df"
  },
  {
    "url": "assets/index/network-01.webp",
    "revision": "be6b8e8531efee2498518cc8adaaac72"
  },
  {
    "url": "assets/index/network-02.png",
    "revision": "12f4f2be611659291287113be3492757"
  },
  {
    "url": "assets/index/network-02.webp",
    "revision": "d8f7e86f9616209d7bd0c6fca4d30ea1"
  },
  {
    "url": "assets/index/network-03.png",
    "revision": "07b3ebf42330ef4b1f5fe35dfb39f6ef"
  },
  {
    "url": "assets/index/network-03.webp",
    "revision": "bbd924236a0487846d511f7ba62cae35"
  },
  {
    "url": "assets/index/network-04.png",
    "revision": "124ee15cc95cdbb9037afe6ba2821329"
  },
  {
    "url": "assets/index/network-04.webp",
    "revision": "a1ad7ca188809cba2da7bb290d68cc4d"
  },
  {
    "url": "assets/index/people.webp",
    "revision": "3be4786d4d293d8876962ec135cd73e4"
  },
  {
    "url": "assets/index/screenshot-paid-link.png",
    "revision": "0bedba04b0ad6748a1a84fb8eac114b8"
  },
  {
    "url": "assets/index/screenshot-paid-link.webp",
    "revision": "33fd94f4c2299864d081a3f8e901c19b"
  },
  {
    "url": "assets/index/teamwork.png",
    "revision": "2aae6ceda29b94d4cbb389c865883244"
  },
  {
    "url": "assets/index/teamwork.webp",
    "revision": "19fb21159e25ff3fe514e7e2acc7e470"
  },
  {
    "url": "assets/index/timeline-alt.png",
    "revision": "4f6a2146c1163cbb297daaf9a926e54f"
  },
  {
    "url": "assets/index/timeline-alt.webp",
    "revision": "0634fd2a3e308928e45edfa159e0fe8e"
  },
  {
    "url": "assets/index/timeline.svg",
    "revision": "f4ba4942646967de73e72eabdf54b5ee"
  },
  {
    "url": "assets/index/timeline.webp",
    "revision": "5b2ff3834419578c96d714d2669db578"
  },
  {
    "url": "assets/social/profile.png",
    "revision": "6a3889e53815d0aec8624bd7f55ac01c"
  },
  {
    "url": "assets/social/profile.webp",
    "revision": "fdeec2b450e1b42eabbb888da19b5ad4"
  },
  {
    "url": "assets/social/social.png",
    "revision": "7ba8125980e6a27cd3a3dc3978ecc9b2"
  },
  {
    "url": "assets/social/social.webp",
    "revision": "71ec369df2dec4db8107ea2ad5c9ac38"
  },
  {
    "url": "assets/team/large-ben-ow.jpg",
    "revision": "ed9fdbd0bd3cf1dd1b9f2bf84d8bf476"
  },
  {
    "url": "assets/team/large-ben-ow.webp",
    "revision": "e28596ffcd83efbf1b06ea798e639197"
  },
  {
    "url": "assets/team/large-dave-kaplan.jpg",
    "revision": "f249dad771842e4139ffc889253241e2"
  },
  {
    "url": "assets/team/large-dave-kaplan.webp",
    "revision": "75ddf197bc9aa201817ac1e821beeacd"
  },
  {
    "url": "assets/team/large-diana-zhang.jpg",
    "revision": "c60c315afb1ce574e4b395bd08128fcd"
  },
  {
    "url": "assets/team/large-diana-zhang.webp",
    "revision": "f9d07aeccbf0019b83c4e86f20330192"
  },
  {
    "url": "assets/team/large-dmitry-kogosov.jpg",
    "revision": "1a55e4f8b1f28cb93bb23caf163fa69f"
  },
  {
    "url": "assets/team/large-dmitry-kogosov.webp",
    "revision": "0f8937af1783fc4f46bb33cd567659f0"
  },
  {
    "url": "assets/team/large-dmytro-ashkinazi.jpg",
    "revision": "803d0e4bcb1298690dcd303a02d97d7d"
  },
  {
    "url": "assets/team/large-dmytro-ashkinazi.webp",
    "revision": "ad1dfbc94d792a2939fbe8ddc214ae09"
  },
  {
    "url": "assets/team/large-jeremy-forsberg.jpg",
    "revision": "64565e8576e662cb98b8d15b6b806e73"
  },
  {
    "url": "assets/team/large-jeremy-forsberg.webp",
    "revision": "31752799217348aaec58be7c8cfeb2ac"
  },
  {
    "url": "assets/team/large-michael-conn.jpg",
    "revision": "ad4012013444b3fa940dd9261ef8e981"
  },
  {
    "url": "assets/team/large-michael-conn.webp",
    "revision": "86d656fd0eb3011d30d8c4435df4df8f"
  },
  {
    "url": "assets/team/large-rick-stiles.jpg",
    "revision": "80257a873d4bed2c377c7304dfac96d7"
  },
  {
    "url": "assets/team/large-rick-stiles.webp",
    "revision": "838f6e7705e4394dd8961cfb637230df"
  },
  {
    "url": "assets/team/large-sandy-zhou.jpg",
    "revision": "e43e2085f99af4fca34f506557120ef6"
  },
  {
    "url": "assets/team/large-sandy-zhou.webp",
    "revision": "8562609e57c104ea5fb90cc75d860912"
  },
  {
    "url": "assets/team/large-tony-tan.jpg",
    "revision": "eea450d9d4c9c6544c9f21fe1a3f35b5"
  },
  {
    "url": "assets/team/large-tony-tan.webp",
    "revision": "d7596a6a44a26a96ba48e2eeca0f9969"
  },
  {
    "url": "assets/team/small-ben-ow.jpg",
    "revision": "4c2e1cdbdcfb14b1c76b6bbfd0edc3eb"
  },
  {
    "url": "assets/team/small-ben-ow.webp",
    "revision": "1e51a97d88ce3351dca2eb5bf1e179db"
  },
  {
    "url": "assets/team/small-dave-kaplan.jpg",
    "revision": "56dcca24dfb7b59a0f28202d141836ea"
  },
  {
    "url": "assets/team/small-dave-kaplan.webp",
    "revision": "2df79902eb2167dd774f5f33b3c1dfa8"
  },
  {
    "url": "assets/team/small-diana-zhang.jpg",
    "revision": "41887176cf263c04483bcfe6c39e2db7"
  },
  {
    "url": "assets/team/small-diana-zhang.webp",
    "revision": "af223c784d8e38f6016d9fe97a4950b6"
  },
  {
    "url": "assets/team/small-dmitry-kogosov.jpg",
    "revision": "47389980de83722078b2115ad54b75d0"
  },
  {
    "url": "assets/team/small-dmitry-kogosov.webp",
    "revision": "73de974161051452e96a39fb6588c6a3"
  },
  {
    "url": "assets/team/small-dmytro-ashkinazi.jpg",
    "revision": "2d90d84c498fa9ef75a3f317d8b0d0d4"
  },
  {
    "url": "assets/team/small-dmytro-ashkinazi.webp",
    "revision": "f70b1b37568467a6752c686c5f404504"
  },
  {
    "url": "assets/team/small-jeremy-forsberg.jpg",
    "revision": "006cebf1ed892f382d78830afa4e096e"
  },
  {
    "url": "assets/team/small-jeremy-forsberg.webp",
    "revision": "617838171870fcb8ced5fffe2a27ec59"
  },
  {
    "url": "assets/team/small-michael-conn.jpg",
    "revision": "c778a9c6e8536e3e09ad747ec0efaf4e"
  },
  {
    "url": "assets/team/small-michael-conn.webp",
    "revision": "7818a3e5c782a1950b41797ffc181393"
  },
  {
    "url": "assets/team/small-rick-stiles.jpg",
    "revision": "397d387c7dc2659770ced946ebba8691"
  },
  {
    "url": "assets/team/small-rick-stiles.webp",
    "revision": "a36183fd0d4b259a07b95938031f5b6d"
  },
  {
    "url": "assets/team/small-sandy-zhou.jpg",
    "revision": "49d499784a9237d4083b3fd651bedc29"
  },
  {
    "url": "assets/team/small-sandy-zhou.webp",
    "revision": "573d0ca1323d955149c2d1e19ec1505a"
  },
  {
    "url": "assets/team/small-tony-tan.jpg",
    "revision": "ad60e8ace3edd92a6f782f0e6b4251b1"
  },
  {
    "url": "assets/team/small-tony-tan.webp",
    "revision": "33204e7fb12b75033f026fa7be848279"
  },
  {
    "url": "copyright.html",
    "revision": "db45d8694dfe44091c3440f8233d5587"
  },
  {
    "url": "error.html",
    "revision": "3198380fdd02bd5a4f69de26d4a2e587"
  },
  {
    "url": "eula.html",
    "revision": "eddcb2622a510f9e8fce86f90f21c06d"
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
    "revision": "a58f855ef6e4297933a832b1e75037e5"
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
    "revision": "5ef45b306279c71a2d3a986541af19f5"
  },
  {
    "url": "privacy-policy.html",
    "revision": "21aabdb1de431cb937629994dd960872"
  },
  {
    "url": "scripts/app.4fa6e68e9f.min.js",
    "revision": "4fa6e68e9fc44ce6698c7cc98bd5a3af"
  },
  {
    "url": "scripts/app.9b301614f4.min.css",
    "revision": "9b301614f46bb71d249619547160495a"
  },
  {
    "url": "scripts/vendor.ca6cbf53e8.min.js",
    "revision": "ca6cbf53e80af15afdd8fc7263bcaa6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
