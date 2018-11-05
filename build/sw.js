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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_temp/sprites/sprite.css",
    "revision": "f1f9ce1c36b4259038e2ef7e2aa683df"
  },
  {
    "url": "_temp/sprites/sprite.png",
    "revision": "7983515c465f991053f824c55ef34449"
  },
  {
    "url": "_temp/sprites/sprite.svg",
    "revision": "cad98b64ee7952ec7e7f14ec706bb010"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/blank.png",
    "revision": "da3bf8b8d321911850ba3a847ad67812"
  },
  {
    "url": "assets/blank.svg",
    "revision": "ce4e1da1f24283b19f1c62c9d91a376f"
  },
  {
    "url": "assets/common/big-ideas.png",
    "revision": "9b2446fe34142dd9eb118eb8e88466b4"
  },
  {
    "url": "assets/common/big-ideas.svg",
    "revision": "f5ee8eead73fa9894e364798b289a3e9"
  },
  {
    "url": "assets/common/data-01.png",
    "revision": "0f6ff4b6cd3bf8572242dbe7b11bb325"
  },
  {
    "url": "assets/common/earth.png",
    "revision": "baa8c6fbf7907a7a131dd68d68e706a8"
  },
  {
    "url": "assets/common/icon-dark.png",
    "revision": "fe1355bfd20bae85040238507c082885"
  },
  {
    "url": "assets/common/icon-dark.svg",
    "revision": "ed4af9ae17f85f0fed1f7a5ce0d9984c"
  },
  {
    "url": "assets/common/icon-light.png",
    "revision": "d26bfb4f2c61df1e9b27f157e95d8373"
  },
  {
    "url": "assets/common/icon-light.svg",
    "revision": "27c5a9ac22335bd2874261ff984ecd61"
  },
  {
    "url": "assets/common/icon-primary.png",
    "revision": "b639f5f6d1bada426c707177cc4bd2c4"
  },
  {
    "url": "assets/common/icon-primary.svg",
    "revision": "b73f04234a8e3997202c1e793908b708"
  },
  {
    "url": "assets/common/icon-secondary.png",
    "revision": "3bd147c12e4e992fdeb80183db008bfb"
  },
  {
    "url": "assets/common/icon-secondary.svg",
    "revision": "90450000e357fcf6a19884f69c404729"
  },
  {
    "url": "assets/common/join-us.png",
    "revision": "9c504ecfdb4e7ee7379be9ad12e38d8a"
  },
  {
    "url": "assets/common/join-us.svg",
    "revision": "b222a7eaf9225a280d73ad29047ee7ab"
  },
  {
    "url": "assets/common/logo-dark.png",
    "revision": "f4d13cc36201459d879bef283865a46d"
  },
  {
    "url": "assets/common/logo-dark.svg",
    "revision": "563a50633e4e23f489866e661475ac5e"
  },
  {
    "url": "assets/common/logo-light.png",
    "revision": "23971065a18ba283800d9d0faa5f48a4"
  },
  {
    "url": "assets/common/logo-light.svg",
    "revision": "8b6726f118340e87200d82e5148b4d37"
  },
  {
    "url": "assets/common/logo-primary.png",
    "revision": "f4dee0c33ecceb527d01543939c28f24"
  },
  {
    "url": "assets/common/logo-primary.svg",
    "revision": "a0ee516096295b2ebfeb3bb8e35ddced"
  },
  {
    "url": "assets/common/logo-secondary.png",
    "revision": "d8af62962c8a9da9b2c82d9ed437a2ec"
  },
  {
    "url": "assets/common/logo-secondary.svg",
    "revision": "380ef183bbfd7247ab1454bf686800ab"
  },
  {
    "url": "assets/common/network-01.png",
    "revision": "b8b100448244d158b0d74a712bc4182a"
  },
  {
    "url": "assets/common/network-02.png",
    "revision": "dda2ddeba5490beeb817915439e9650a"
  },
  {
    "url": "assets/common/network-03.png",
    "revision": "e31a27722a2133bc32ba4f2855e75dcb"
  },
  {
    "url": "assets/common/network-04.png",
    "revision": "6a28e1ebfe8adcb2b99ef06c1cf48e05"
  },
  {
    "url": "assets/common/people.png",
    "revision": "ce0718917a85d2cc02c0c21bf40fbd13"
  },
  {
    "url": "assets/common/scalable.png",
    "revision": "802067c118cc2f1ea898c34ea577b1c8"
  },
  {
    "url": "assets/common/scalable.svg",
    "revision": "16e3a847b73288490690f7a05eb53bb9"
  },
  {
    "url": "assets/common/shopping.png",
    "revision": "9d8bd05c944ddbe920e4e28640990280"
  },
  {
    "url": "assets/common/shopping.svg",
    "revision": "e5f22e831f97bca408543da788b200b2"
  },
  {
    "url": "assets/common/teamwork-01.png",
    "revision": "dc73f6a652f91623980e9a0907332ed8"
  },
  {
    "url": "assets/common/teamwork-02.png",
    "revision": "5c3e19239fb22c1ad0fc0444757a40ec"
  },
  {
    "url": "assets/common/teamwork.png",
    "revision": "dbc22788ce3643386143f9742ad4c468"
  },
  {
    "url": "assets/common/teamwork.svg",
    "revision": "849ca8a68c1026799f2c1b9b5524097b"
  },
  {
    "url": "assets/common/tokens.png",
    "revision": "02e860a169317bd6dc7ee751fd193654"
  },
  {
    "url": "assets/common/tokens.svg",
    "revision": "fe3ea07fb81036e625f339c94c5d19f6"
  },
  {
    "url": "assets/error.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/icon-google.png",
    "revision": "ae457f3041bfb992267fa0218fcc516e"
  },
  {
    "url": "assets/icon-google.svg",
    "revision": "f16ad52d955fc63de49886ff657e88cd"
  },
  {
    "url": "assets/icons-nav.png",
    "revision": "18d63ff72b01bedb635efaa3c5edc82e"
  },
  {
    "url": "assets/icons-nav.svg",
    "revision": "54c5e42c9b101ef67753192ca9862933"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "5acabf05159b37279dae5f40fc5e10e3"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "c4a45986991fda59797af8a415f888d0"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "e24d263988fd6d0d3f84b707b9fc59f4"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "94d86e03c8ded660a8f6be2d985464c9"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "4d2060a513398adec9128c6763d2d02f"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "787c41b21cfebc0f8408b9670efbbad0"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "ca51a917d07e5baef59b245183b4b502"
  },
  {
    "url": "assets/icons/safari-pinned-tab.png",
    "revision": "6f8a479668fdb6a0cf028459541f7908"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "4e4288245e34e0ebbba58a7bb7faaddd"
  },
  {
    "url": "assets/index/diagram-how-it-works-ch.png",
    "revision": "4d80d9580bbdb40bfd674bb95abf7b77"
  },
  {
    "url": "assets/index/diagram-how-it-works.png",
    "revision": "c550721c515840318d28b82b2c6da6d5"
  },
  {
    "url": "assets/index/diagram-our-technology-ch.png",
    "revision": "995b82c541e2d6950824d35ea3cacc9f"
  },
  {
    "url": "assets/index/diagram-our-technology.png",
    "revision": "fe5dd1b527741971833626f25e8dec9c"
  },
  {
    "url": "assets/index/screenshot-laptop-paid-link.png",
    "revision": "17a2240025be21f2028d1217215aa9e8"
  },
  {
    "url": "assets/index/screenshot-paid-link.png",
    "revision": "abd8a4d74d7e0d26dcfd93b56c342ca8"
  },
  {
    "url": "assets/social/profile.png",
    "revision": "e664a96d29cb996a0debce5d9c61c293"
  },
  {
    "url": "assets/social/social.png",
    "revision": "2dea79587f407f002730269dfe3e6be6"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.png",
    "revision": "17a095ed580e49e5c920c45bba059fd1"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.svg",
    "revision": "74ff8527c203d6bedc49fe6b82dbcdad"
  },
  {
    "url": "assets/sprites/press/bitcoininst.png",
    "revision": "569c40f4af8f14d92ed028b740dbd2a3"
  },
  {
    "url": "assets/sprites/press/bitcoininst.svg",
    "revision": "f46faa0b2d9697cba95239c355ffff3d"
  },
  {
    "url": "assets/sprites/press/business-insider.png",
    "revision": "fd13da60bce79abb3722d6b5bba5afb5"
  },
  {
    "url": "assets/sprites/press/business-insider.svg",
    "revision": "93f02a47909f5e12efed45929013f97b"
  },
  {
    "url": "assets/sprites/press/ccn.png",
    "revision": "04dfd2d298fca9fffea8b7d3d864abda"
  },
  {
    "url": "assets/sprites/press/ccn.svg",
    "revision": "4dc7e24d8152a44eb40dfd10c5d0cbe3"
  },
  {
    "url": "assets/sprites/press/coin-announcer.png",
    "revision": "fc90ec514356fd19e2d7be90193d06eb"
  },
  {
    "url": "assets/sprites/press/coin-announcer.svg",
    "revision": "34b7c3a5b1204096ad4ef3d11267f7f8"
  },
  {
    "url": "assets/sprites/press/coinmercenary.png",
    "revision": "863cc8aa8b780e8bdef81e948c871b47"
  },
  {
    "url": "assets/sprites/press/coinmercenary.svg",
    "revision": "7961bdf3238b0f52eafe8d4be7f903f2"
  },
  {
    "url": "assets/sprites/press/crains.png",
    "revision": "f67e6bbf645d37cfc63d544defc72ac1"
  },
  {
    "url": "assets/sprites/press/crains.svg",
    "revision": "a2be08b93013c1860e4382fbb30bc131"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.png",
    "revision": "d7be1a94eed76773b1b90e3d5e736745"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.svg",
    "revision": "5bc25a35ce772a5eb5b123b345573867"
  },
  {
    "url": "assets/sprites/press/e27.png",
    "revision": "5b95e5d23ebaa05d102daf5aadcd5722"
  },
  {
    "url": "assets/sprites/press/e27.svg",
    "revision": "186fcf7064f1135c927b4b04d642bdb3"
  },
  {
    "url": "assets/sprites/press/forbes.png",
    "revision": "1b3c402e46926cad808163ad0b24450b"
  },
  {
    "url": "assets/sprites/press/forbes.svg",
    "revision": "165047da2ec728088532786ea9fb176d"
  },
  {
    "url": "assets/sprites/press/kabn.png",
    "revision": "7b3af6acd00f3d5f5b281f42b185004b"
  },
  {
    "url": "assets/sprites/press/kabn.svg",
    "revision": "110e242484a61e2ed78dfea3c6aa25a6"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.png",
    "revision": "fa935c24e56f5c98cd351d1b63ec682b"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.svg",
    "revision": "c5df8cc8416bbbfa35c9a899e8d410fc"
  },
  {
    "url": "assets/sprites/press/pcmag.png",
    "revision": "b2b487b919dfa4ead6780ba90b5fd36a"
  },
  {
    "url": "assets/sprites/press/pcmag.svg",
    "revision": "0a3ed284676eae7d96492184cc5be55f"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.png",
    "revision": "b957a9dc84b1d35cc71f2cc0e9c7974d"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.svg",
    "revision": "356f294d785552a5bf3791a0f7cea6e3"
  },
  {
    "url": "assets/sprites/press/tech-bullion.png",
    "revision": "776e87e1896c40ead24a4404473f2292"
  },
  {
    "url": "assets/sprites/press/tech-bullion.svg",
    "revision": "b4cfab08633b2137de3db2cb2c4e04b4"
  },
  {
    "url": "assets/sprites/press/techaeris.png",
    "revision": "f517246ced856f98bf197dca9f532a10"
  },
  {
    "url": "assets/sprites/press/techaeris.svg",
    "revision": "286a38902b3590b6306331855262e606"
  },
  {
    "url": "assets/sprites/press/vegastech.png",
    "revision": "582011dbb0cdb39f205b2c2224fe1d8c"
  },
  {
    "url": "assets/sprites/press/vegastech.svg",
    "revision": "9da63b2d5cfda73cda850ae0fb808d16"
  },
  {
    "url": "assets/sprites/press/zcorum.png",
    "revision": "642faf74ed0e1e7ac79c68aa7a6dd7cb"
  },
  {
    "url": "assets/sprites/press/zcorum.svg",
    "revision": "97f337920fbcd0051c12da18bf4488dd"
  },
  {
    "url": "assets/sprites/sprite.png",
    "revision": "7983515c465f991053f824c55ef34449"
  },
  {
    "url": "assets/sprites/sprite.svg",
    "revision": "bade42f931c47a354500441a0ea79571"
  },
  {
    "url": "assets/stories/acoustic-guitar.png",
    "revision": "179ab900df589c26a513a1fda289d6d4"
  },
  {
    "url": "assets/stories/acoustic-guitar.svg",
    "revision": "7d4b404819982b814e4365ba8bc1faa1"
  },
  {
    "url": "assets/stories/camera.png",
    "revision": "59f2552d7995f92c70a57fae451f7882"
  },
  {
    "url": "assets/stories/camera.svg",
    "revision": "ce9ce86cedc94dbdae85388bb896191e"
  },
  {
    "url": "assets/stories/gamepad.png",
    "revision": "bbadcfa84e146456af7ed2de54252379"
  },
  {
    "url": "assets/stories/gamepad.svg",
    "revision": "233ad0451e609d4964a0e7cd338075ed"
  },
  {
    "url": "assets/stories/large-josh.png",
    "revision": "9b9e536eee1f9f671a7b7fdef8a38579"
  },
  {
    "url": "assets/stories/large-shera.png",
    "revision": "f4e31d90005f7ee9008955bdf8e60d35"
  },
  {
    "url": "assets/stories/large-tina.png",
    "revision": "cfc39270c4634af6187895d1e7b9b4b3"
  },
  {
    "url": "assets/stories/small-josh.png",
    "revision": "81cdabe844a717c63ed23d55c888613a"
  },
  {
    "url": "assets/stories/small-shera.png",
    "revision": "667813a98731bac9bb2a830a7749da5e"
  },
  {
    "url": "assets/stories/small-tina.png",
    "revision": "62124c9464f750940f347e306c503eaf"
  },
  {
    "url": "assets/styleguide/hero.png",
    "revision": "e30a0ba8a7120cd90be50d3a08525e1b"
  },
  {
    "url": "assets/styleguide/hero.svg",
    "revision": "a1aaea5c7ed6df6c80b5c5a9ccba687e"
  },
  {
    "url": "assets/team/large-ben-ow.jpg",
    "revision": "ed9fdbd0bd3cf1dd1b9f2bf84d8bf476"
  },
  {
    "url": "assets/team/large-bruce-macdonald.jpg",
    "revision": "f0657b73500015cc2ee8cff868abc5cf"
  },
  {
    "url": "assets/team/large-dave-kaplan.jpg",
    "revision": "f249dad771842e4139ffc889253241e2"
  },
  {
    "url": "assets/team/large-diana-zhang.jpg",
    "revision": "c60c315afb1ce574e4b395bd08128fcd"
  },
  {
    "url": "assets/team/large-dmitry-kogosov.jpg",
    "revision": "1a55e4f8b1f28cb93bb23caf163fa69f"
  },
  {
    "url": "assets/team/large-dmytro-ashkinazi.jpg",
    "revision": "803d0e4bcb1298690dcd303a02d97d7d"
  },
  {
    "url": "assets/team/large-jeff-maher.jpg",
    "revision": "23dedb540b06ecf7fa2c144e57f3d4e4"
  },
  {
    "url": "assets/team/large-jeremy-forsberg.jpg",
    "revision": "64565e8576e662cb98b8d15b6b806e73"
  },
  {
    "url": "assets/team/large-michael-conn.jpg",
    "revision": "428e8a377c1f4f1078aacbc1cc7aa735"
  },
  {
    "url": "assets/team/large-rick-stiles.jpg",
    "revision": "80257a873d4bed2c377c7304dfac96d7"
  },
  {
    "url": "assets/team/large-sandy-zhou.jpg",
    "revision": "e43e2085f99af4fca34f506557120ef6"
  },
  {
    "url": "assets/team/large-tony-tan.jpg",
    "revision": "eea450d9d4c9c6544c9f21fe1a3f35b5"
  },
  {
    "url": "assets/team/small-ben-ow.jpg",
    "revision": "4c2e1cdbdcfb14b1c76b6bbfd0edc3eb"
  },
  {
    "url": "assets/team/small-bruce-macdonald.jpg",
    "revision": "192ddcc7f2eb6253a557f20311f15068"
  },
  {
    "url": "assets/team/small-dave-kaplan.jpg",
    "revision": "56dcca24dfb7b59a0f28202d141836ea"
  },
  {
    "url": "assets/team/small-diana-zhang.jpg",
    "revision": "41887176cf263c04483bcfe6c39e2db7"
  },
  {
    "url": "assets/team/small-dmitry-kogosov.jpg",
    "revision": "47389980de83722078b2115ad54b75d0"
  },
  {
    "url": "assets/team/small-dmytro-ashkinazi.jpg",
    "revision": "2d90d84c498fa9ef75a3f317d8b0d0d4"
  },
  {
    "url": "assets/team/small-jeff-maher.jpg",
    "revision": "9db7f12d55159279e558885750fcd378"
  },
  {
    "url": "assets/team/small-jeremy-forsberg.jpg",
    "revision": "006cebf1ed892f382d78830afa4e096e"
  },
  {
    "url": "assets/team/small-michael-conn.jpg",
    "revision": "17a81eaf252dea7e3c11a67905095d3e"
  },
  {
    "url": "assets/team/small-rick-stiles.jpg",
    "revision": "397d387c7dc2659770ced946ebba8691"
  },
  {
    "url": "assets/team/small-sandy-zhou.jpg",
    "revision": "49d499784a9237d4083b3fd651bedc29"
  },
  {
    "url": "assets/team/small-tony-tan.jpg",
    "revision": "ad60e8ace3edd92a6f782f0e6b4251b1"
  },
  {
    "url": "ch.html",
    "revision": "f1bdd36acf6035ccae73545458dd2836"
  },
  {
    "url": "dialog/ch/stories.html",
    "revision": "c8e2896b9fab5afa8b9929d562a08898"
  },
  {
    "url": "dialog/ch/team.html",
    "revision": "3eae024915d3ce5f91648b2f4ddfd1dd"
  },
  {
    "url": "dialog/en/press.html",
    "revision": "230a84f5355244d91e3528cd19f2c35b"
  },
  {
    "url": "dialog/en/privacy-policy.html",
    "revision": "69545a1524bcee260da802bc58d93939"
  },
  {
    "url": "dialog/en/sample.html",
    "revision": "b7aaa640ee3721a777f7193d361d43e9"
  },
  {
    "url": "dialog/en/stories.html",
    "revision": "9baf710f448de5b067e47032e1eac78a"
  },
  {
    "url": "dialog/en/team.html",
    "revision": "1107954ec5f046e7404c24cc52dcefe9"
  },
  {
    "url": "dialog/en/whitepaper.html",
    "revision": "f48cc8ddfbe344615ee678591acba100"
  },
  {
    "url": "error.html",
    "revision": "da392fe8b10af09754d70af7ec92a912"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fonts/fontawesome-webfont.png",
    "revision": "da3bf8b8d321911850ba3a847ad67812"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "acf3dcb7ff752b5296ca23ba2c7c2606"
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
    "revision": "1660063b9e8adeaf6206076523d6b989"
  },
  {
    "url": "sample.html",
    "revision": "dcc0e271f706232d8b95a79e756b0b0c"
  },
  {
    "url": "scripts/app.0229aee257.min.js",
    "revision": "0229aee257d6c404bb343706f30acdbe"
  },
  {
    "url": "scripts/app.aff79c6b8a.min.css",
    "revision": "aff79c6b8a828622e9a05c5dfed1c404"
  },
  {
    "url": "scripts/styleguide.40f6fdc4f1.min.js",
    "revision": "40f6fdc4f1e17e0aa2e841eb87668560"
  },
  {
    "url": "scripts/styleguide.b0833db3ec.min.css",
    "revision": "b0833db3ec1d67b0ff97373313873d39"
  },
  {
    "url": "styleguide.html",
    "revision": "92c6f636d492cf3caf3f2974c559d964"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
