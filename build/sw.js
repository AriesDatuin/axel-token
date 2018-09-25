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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "airdrop.html",
    "revision": "113266d7158fb6c966c6eaee57d9e1b1"
  },
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
    "url": "assets/blank.svg",
    "revision": "217160c942a535f9700be33623a75314"
  },
  {
    "url": "assets/error.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/icon-google.svg",
    "revision": "68bc46153c403136512d5a340fa6d5b8"
  },
  {
    "url": "assets/icons-nav.svg",
    "revision": "6160059cc76fc2d1774f844cf1add2a5"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "5acabf05159b37279dae5f40fc5e10e3"
  },
  {
    "url": "assets/icons/android-chrome-192x192.webp",
    "revision": "ee425ef03739fa59c953fc95cf519390"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "c4a45986991fda59797af8a415f888d0"
  },
  {
    "url": "assets/icons/android-chrome-512x512.webp",
    "revision": "e6f0fd6422e2edde989443a91197440c"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "e24d263988fd6d0d3f84b707b9fc59f4"
  },
  {
    "url": "assets/icons/apple-touch-icon.webp",
    "revision": "f94f2dc4b16e43cc85b18e4fd85a2dca"
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
    "revision": "ca51a917d07e5baef59b245183b4b502"
  },
  {
    "url": "assets/icons/mstile-150x150.webp",
    "revision": "7449b58589a56b1878023af0582f0759"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "68a8e083b9d26d045c7aaea94b4d23c1"
  },
  {
    "url": "assets/illustrations/big-ideas.svg",
    "revision": "252f77db27366a64ccb049dc7738186e"
  },
  {
    "url": "assets/illustrations/join-us.svg",
    "revision": "6ad67dbdceccb8423352c5a585f54ca1"
  },
  {
    "url": "assets/illustrations/scalable.svg",
    "revision": "5376b8a92177eb9e34f92d95d986fe37"
  },
  {
    "url": "assets/illustrations/shopping.svg",
    "revision": "66dd49a87885d2811838f164072628e7"
  },
  {
    "url": "assets/illustrations/teamwork.svg",
    "revision": "79654a5f94a95babea18718bd8c394e0"
  },
  {
    "url": "assets/illustrations/tokens.svg",
    "revision": "39ac3e43daf80f66c3eca7dc136f8c58"
  },
  {
    "url": "assets/index/data-01.png",
    "revision": "0f6ff4b6cd3bf8572242dbe7b11bb325"
  },
  {
    "url": "assets/index/data-01.webp",
    "revision": "35cc1d7101ffb9b36b85272d5bffd573"
  },
  {
    "url": "assets/index/diagram-how-it-works.png",
    "revision": "5a86dfdbedc552cdac3e375d5997c003"
  },
  {
    "url": "assets/index/diagram-how-it-works.webp",
    "revision": "a90689df2b0ea0b0a55a9e1059d23ee7"
  },
  {
    "url": "assets/index/diagram-our-technology.png",
    "revision": "e9069dbee80161b54a33ffcdb5eb2605"
  },
  {
    "url": "assets/index/diagram-our-technology.webp",
    "revision": "4658efd0b975ce60eeec95614d258652"
  },
  {
    "url": "assets/index/earth.png",
    "revision": "baa8c6fbf7907a7a131dd68d68e706a8"
  },
  {
    "url": "assets/index/earth.webp",
    "revision": "79f7186cfa0b9a1d3f313844b135ca31"
  },
  {
    "url": "assets/index/network-01.png",
    "revision": "b8b100448244d158b0d74a712bc4182a"
  },
  {
    "url": "assets/index/network-01.webp",
    "revision": "12c8099d762f8501d5134d96bb2bfea8"
  },
  {
    "url": "assets/index/network-02.png",
    "revision": "dda2ddeba5490beeb817915439e9650a"
  },
  {
    "url": "assets/index/network-02.webp",
    "revision": "12919bf925ba4eb7c4b1ea4e83391d75"
  },
  {
    "url": "assets/index/network-03.png",
    "revision": "e31a27722a2133bc32ba4f2855e75dcb"
  },
  {
    "url": "assets/index/network-03.webp",
    "revision": "d3954f9f58dd1d2666f65c1869c9e245"
  },
  {
    "url": "assets/index/network-04.png",
    "revision": "6a28e1ebfe8adcb2b99ef06c1cf48e05"
  },
  {
    "url": "assets/index/network-04.webp",
    "revision": "bccbd420048dae8a54cafe8f9f0da0cb"
  },
  {
    "url": "assets/index/people.png",
    "revision": "ce0718917a85d2cc02c0c21bf40fbd13"
  },
  {
    "url": "assets/index/people.webp",
    "revision": "85fbaf1f395e2a295d963c4018909161"
  },
  {
    "url": "assets/index/screenshot-laptop-paid-link.png",
    "revision": "17a2240025be21f2028d1217215aa9e8"
  },
  {
    "url": "assets/index/screenshot-laptop-paid-link.webp",
    "revision": "7884f4001396aa4246cf3d08a786ccd5"
  },
  {
    "url": "assets/index/screenshot-paid-link.png",
    "revision": "abd8a4d74d7e0d26dcfd93b56c342ca8"
  },
  {
    "url": "assets/index/screenshot-paid-link.webp",
    "revision": "cc618c62b7329ed52b7f26b6f6eb7c07"
  },
  {
    "url": "assets/index/teamwork-01.png",
    "revision": "dc73f6a652f91623980e9a0907332ed8"
  },
  {
    "url": "assets/index/teamwork-01.webp",
    "revision": "51e5e22f57c7780f582d9a225c3ddf1d"
  },
  {
    "url": "assets/index/teamwork-02.png",
    "revision": "5c3e19239fb22c1ad0fc0444757a40ec"
  },
  {
    "url": "assets/index/teamwork-02.webp",
    "revision": "49a28c728abb45a3f8de7c50cd4a96e2"
  },
  {
    "url": "assets/index/timeline.svg",
    "revision": "f9835bc650a2575ba6f0ecf8550c865a"
  },
  {
    "url": "assets/social/profile.png",
    "revision": "e664a96d29cb996a0debce5d9c61c293"
  },
  {
    "url": "assets/social/profile.webp",
    "revision": "45429878b05594382abd680188f60434"
  },
  {
    "url": "assets/social/social.png",
    "revision": "2dea79587f407f002730269dfe3e6be6"
  },
  {
    "url": "assets/social/social.webp",
    "revision": "3436c890b6e5397bb736a83a5495960f"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.svg",
    "revision": "18dd1eef4402d9bbaa7355ecc7965d90"
  },
  {
    "url": "assets/sprites/press/bitcoininst.svg",
    "revision": "a478c68f0bc25356647d03934ee9d73c"
  },
  {
    "url": "assets/sprites/press/ccn.svg",
    "revision": "7ebbbb31b8600134f48bd5e534619cee"
  },
  {
    "url": "assets/sprites/press/coin-announcer.svg",
    "revision": "f1b6c9d0831f7ef01833d85340ac1fa2"
  },
  {
    "url": "assets/sprites/press/crains.svg",
    "revision": "3733f8dc3774c1561dc79d856273e373"
  },
  {
    "url": "assets/sprites/press/e27.svg",
    "revision": "66fcfbf3bf0a4d6de7e4215aae0eeff6"
  },
  {
    "url": "assets/sprites/press/forbes.svg",
    "revision": "faec2e6f0abba9b724a5008f17efa056"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.svg",
    "revision": "401eff7442e04adf1aa218d2e890834e"
  },
  {
    "url": "assets/sprites/press/pcmag.svg",
    "revision": "40ce1b448d2140414d91d21450c8a993"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.svg",
    "revision": "4cfdbb8f093b02613d4560b656585a6e"
  },
  {
    "url": "assets/sprites/press/tech-bullion.svg",
    "revision": "6ac4c4b8f80fe9692d71230e0f969409"
  },
  {
    "url": "assets/sprites/press/techaeris.svg",
    "revision": "46d5a65c09f5a5739bb46eab84522238"
  },
  {
    "url": "assets/sprites/press/vegastech.svg",
    "revision": "9e9868ed1b0be53da83c58cc33a1c010"
  },
  {
    "url": "assets/sprites/sprite.css",
    "revision": "972c89309ca2de79bd55f2729016334a"
  },
  {
    "url": "assets/sprites/sprite.svg",
    "revision": "f7c64c31e14af84bc5dd3fad7f5c17d5"
  },
  {
    "url": "assets/stories/acoustic-guitar.svg",
    "revision": "a3851367efca76fb954d18b0aa9400be"
  },
  {
    "url": "assets/stories/camera.svg",
    "revision": "8b55bf79e1ffe22c98c0271767c8776d"
  },
  {
    "url": "assets/stories/gamepad.svg",
    "revision": "f3fe72239405dc77fa13f36f4efd7e31"
  },
  {
    "url": "assets/stories/large-josh.png",
    "revision": "9b9e536eee1f9f671a7b7fdef8a38579"
  },
  {
    "url": "assets/stories/large-josh.webp",
    "revision": "083404525b79930427c206138f4e41b1"
  },
  {
    "url": "assets/stories/large-shera.png",
    "revision": "f4e31d90005f7ee9008955bdf8e60d35"
  },
  {
    "url": "assets/stories/large-shera.webp",
    "revision": "0b46c9c5d3c6f7a051749e593adc0e4b"
  },
  {
    "url": "assets/stories/large-tina.png",
    "revision": "cfc39270c4634af6187895d1e7b9b4b3"
  },
  {
    "url": "assets/stories/large-tina.webp",
    "revision": "b5f9bc1eafb8af225091ad0b7fe5a81e"
  },
  {
    "url": "assets/stories/small-josh.png",
    "revision": "81cdabe844a717c63ed23d55c888613a"
  },
  {
    "url": "assets/stories/small-josh.webp",
    "revision": "e1cc23d88124b977102045e9e2706e31"
  },
  {
    "url": "assets/stories/small-shera.png",
    "revision": "667813a98731bac9bb2a830a7749da5e"
  },
  {
    "url": "assets/stories/small-shera.webp",
    "revision": "a2b11f211d46337ef777595b3ddec22d"
  },
  {
    "url": "assets/stories/small-tina.png",
    "revision": "62124c9464f750940f347e306c503eaf"
  },
  {
    "url": "assets/stories/small-tina.webp",
    "revision": "392c79a6b08109e06134a3d51647c418"
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
    "url": "assets/team/large-bruce-macdonald.jpg",
    "revision": "f0657b73500015cc2ee8cff868abc5cf"
  },
  {
    "url": "assets/team/large-bruce-macdonald.webp",
    "revision": "a7f3cf9c7ec83dc057b9f78154144d10"
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
    "url": "assets/team/large-jeff-maher.jpg",
    "revision": "23dedb540b06ecf7fa2c144e57f3d4e4"
  },
  {
    "url": "assets/team/large-jeff-maher.webp",
    "revision": "5c98e675e74709b45185d63e28881e38"
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
    "revision": "428e8a377c1f4f1078aacbc1cc7aa735"
  },
  {
    "url": "assets/team/large-michael-conn.webp",
    "revision": "4e8d947c234e0c709b7f5a57424b08d5"
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
    "url": "assets/team/small-bruce-macdonald.jpg",
    "revision": "192ddcc7f2eb6253a557f20311f15068"
  },
  {
    "url": "assets/team/small-bruce-macdonald.webp",
    "revision": "e259e6b71e507d1016b80b0c1cb48c97"
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
    "url": "assets/team/small-jeff-maher.jpg",
    "revision": "9db7f12d55159279e558885750fcd378"
  },
  {
    "url": "assets/team/small-jeff-maher.webp",
    "revision": "9c4860b7bc2f1ca7d21ab814708b47d6"
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
    "revision": "17a81eaf252dea7e3c11a67905095d3e"
  },
  {
    "url": "assets/team/small-michael-conn.webp",
    "revision": "d2b721bdf177249300fc261dddfad0ce"
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
    "url": "error.html",
    "revision": "5aae1492527472b3f05245cef5afc414"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "760bd83ee04dff470e0277f3eb7deebe"
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
    "revision": "bc475e82b8a88fdcc4b1f9f3a0bf8919"
  },
  {
    "url": "fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "index.html",
    "revision": "9a1d2b9d170bd91f95e723e94aaaf274"
  },
  {
    "url": "modals/press.html",
    "revision": "2280f2399abb213cfeb2a4802e4f89ac"
  },
  {
    "url": "modals/privacy-policy.html",
    "revision": "c311c08be43af9a9e2ab529b8dbf417e"
  },
  {
    "url": "modals/stories.html",
    "revision": "1828c39e86a0f9f294fbab90a0250a9f"
  },
  {
    "url": "modals/team.html",
    "revision": "cca672da26a62b73b877e1a9a8bff35a"
  },
  {
    "url": "modals/whitepaper.html",
    "revision": "eee44946103f4ca112b840d425211a5e"
  },
  {
    "url": "scripts/app.0ecb5a98d4.min.js",
    "revision": "0ecb5a98d41460e3fbeb4053d63dc6e7"
  },
  {
    "url": "scripts/app.a6a9e35904.min.css",
    "revision": "a6a9e359042c4314fb92482b57ae5af9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
