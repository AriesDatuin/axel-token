/* -------------------------------------------------- */
/* CACHE SELECTORS
/* -------------------------------------------------- */

var	animIcon = $$("svg.anim"),

	animIconMagnifyingGlass = $$("#icon-magnifying-glass"),
	animIconHacker = $$("#icon-hacker"),
	animIconEye = $$("#icon-eye"),

	animIconAnonymity = $$("#icon-anonymity"),
	animIconReputation = $$("#icon-reputation"),
	animIconPublicDecentralization = $$("#icon-public-decentralization"),

	animIconDataCenters = $$("#icon-data-centers"),
	animIconGettingTokens = $$("#icon-getting-tokens"),
	animIconFullyProtected = $$("#icon-fully-protected"),

	animIconDualChainArchitecture = $$("#icon-dual-chain-architecture"),
	animIconWitnessPool = $$("#icon-witness-pool"),
	animIconWeightedReputationSystem = $$("#icon-weighted-reputation-system"),
	animIconUnification = $$("#icon-unification"),

	animIconMiddlemen = $$("#icon-middlemen"),
	animIconTransactions = $$("#icon-transactions")

	animIconSellAnything = $$("#icon-sell-anything"),
	animIconStartup = $$("#icon-startup"),
	animIconNoHostageSituations = $$("#icon-no-hostage-situations"),
	animIconGlobalDecentralizedSelling = $$("#icon-global-decentralized-selling"),
	animIconInvisibleTransactions = $$("#icon-invisible-transactions");


/* -------------------------------------------------- */
/* FUNCTIONS
/* -------------------------------------------------- */

var animIconComplete = function() {
	//console.log("Tween completed.");

	animIcon.removeClass("no-pointer");

}


/* -------------------------------------------------- */
/* PROPERTIES
/* -------------------------------------------------- */

TweenMax.set(animIcon, {transformOrigin: "center center"});


/* -------------------------------------------------- */
/* MAGNIFYING GLASS
/* -------------------------------------------------- */

var tlIconMagnifyingGlass = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconMagnifyingGlass.to(animIconMagnifyingGlass.find("#magnifying-glass"), 0.5, {autoAlpha: 0, scale: 0.5, rotation: 60, transformOrigin: "center center", ease: Back.easeOut})
						 .to(animIconMagnifyingGlass.find("#magnifying-glass"), 0.5, {autoAlpha: 1, scale: 1, rotation: 0, ease: Back.easeOut})
						 .staggerTo(animIconMagnifyingGlass.find("#people").children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.12, "-=1.5")
						 .staggerTo(animIconMagnifyingGlass.find("#people").children(), 1, {autoAlpha: 1, ease: Expo.easeOut}, -0.12);


/* -------------------------------------------------- */
/* HACKER
/* -------------------------------------------------- */

var tlIconHacker = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: 2, onComplete: animIconComplete});
	tlIconHacker.to(animIconHacker.find("#hacker-head"), 1, {y: 8, delay: 0, ease: Bounce.easeOut})
				.to(animIconHacker.find("#hacker-head"), 1, {y: 4, ease: Back.easeOut});


/* -------------------------------------------------- */
/* SAURON
/* -------------------------------------------------- */

var tlIconEye = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: 1, onComplete: animIconComplete});
	tlIconEye.to(animIconEye.find("#pupil"), 0.5, {rotation: -90, transformOrigin: "center center", ease: Expo.easeOut})
			 .to(animIconEye.find("#pupil"), 0.25, {rotation: 0, ease: Expo.easeOut})
			 .to(animIconEye, 0.15, {scaleY: 0.25, ease: Expo.easeIn})
			 .to(animIconEye, 0.15, {scaleY: 1, ease: Expo.easeIn});


/* -------------------------------------------------- */
/* ANONYMITY
/* -------------------------------------------------- */

var tlIconAnonymity = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconAnonymity.staggerFrom(animIconAnonymity.find("#doc").children(), 0.5, {autoAlpha: 0, ease: Back.easeOut}, 0.12)
				   .staggerFrom(animIconAnonymity.find("#profile").children(), 0.25, {autoAlpha: 0, scale: 0.5, transformOrigin: "top left", ease: Back.easeOut}, 0.12)
				   .staggerFrom(animIconAnonymity.find("#doc-lines").children(), 0.25, {autoAlpha: 0, scaleX: 0, transformOrigin: "left center", ease: Expo.easeOut}, -0.12, "-=0.75")
				   .set(animIconAnonymity.find("#padlock").find("#padlock-bar"), {y: -8})
				   .from(animIconAnonymity.find("#padlock"), 0.25, {autoAlpha: 0, scale: 0.75, transformOrigin: "center center", ease: Back.easeOut})
				   .to(animIconAnonymity.find("#padlock").find("#padlock-bar"), 0.25, {y: 0, ease: Back.easeOut});


/* -------------------------------------------------- */
/* REPUTATION
/* -------------------------------------------------- */

var tlIconReputation = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconReputation.from(animIconReputation.find("#cert"), 0.25, {autoAlpha: 0, scale: 0.75, transformOrigin: "center center", ease: Back.easeOut})
				    .staggerFrom(animIconReputation.find("#cert-lines").children(), 0.25, {autoAlpha: 0, scaleX: 0, transformOrigin: "left center", ease: Expo.easeOut}, -0.12, "-=0.25")
				    //.from(animIconReputation.find("#ribbon"), 1, {autoAlpha: 0, scale: 0.5, transformOrigin: "center center", ease: Elastic.easeOut})
				    .from(animIconReputation.find("#ribbon-outer"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut})
				    .from(animIconReputation.find("#ribbon-inner"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, "-=0.5")
				    .from(animIconReputation.find("#ribbon-taper-01"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "top center", ease: Back.easeOut}, "-=0.5")
				    .from(animIconReputation.find("#ribbon-taper-02"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "top center", ease: Back.easeOut}, "-=0.5");


/* -------------------------------------------------- */
/* PUBLIC DECENTRALIZATION
/* -------------------------------------------------- */

var tlIconPublicDecentralization = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconPublicDecentralization.staggerFrom(animIconPublicDecentralization.find("#segments").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, 0.12)
				    	  .staggerFrom(animIconPublicDecentralization.find("#nodes").children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.12, "-=0.75");


/* -------------------------------------------------- */
/* DATA CENTERS
/* -------------------------------------------------- */

var tlIconDataCenters = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconDataCenters.to(animIconDataCenters.find("#globe"), 0.5, {autoAlpha: 0, scale: 0.9, transformOrigin: "center center", ease: Back.easeOut}, "-=0.5")
					 .staggerTo(animIconDataCenters.find("#nodes").children(), 1, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, -0.12, "-=0.5")

					 .staggerTo(animIconDataCenters.find("#nodes").children(), 1, {autoAlpha: 1, scale: 1, transformOrigin: "center center", ease: Back.easeOut}, 0.12)
					 .to(animIconDataCenters.find("#globe"), 0.5, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, "-=0.5");


/* -------------------------------------------------- */
/* GETTING TOKENS
/* -------------------------------------------------- */

//TweenMax.set(animIconGettingTokens.find("#token"), {autoAlpha: 0, y: -8, scaleX: 0.25, scaleY: 1.25, transformOrigin: "bottom center"});

var tlIconGettingTokens = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconGettingTokens
					   ////.to(animIconGettingTokens.find("#token"), 1, {autoAlpha: 1, y: 0, directionalRotation: "0_cw", ease: Expo.easeOut})
					   ////.to(animIconGettingTokens.find("#hand"), 0.75, {rotation: -5, transformOrigin: "top left", ease: Expo.easeOut})
					   ////.to(animIconGettingTokens.find("#hand"), 0.25, {rotation: 0, ease: Expo.easeOut})
					   ////.to(animIconGettingTokens.find("#token"), 0.75, {y: 10, directionalRotation: "0_cw", ease: Expo.easeInOut}, "-=0.5")
					   

					   //.to(animIconGettingTokens.find("#token"), 0.25,{y: -8, scaleY: 1, ease: Back.easeInOut})

					   //.to(animIconGettingTokens.find("#hand"), 0.25, {rotation: -12, ease: Back.easeInOut}, "-=0.5")



					   //.to(animIconGettingTokens.find("#hand"), 0.25, {rotation: 8, ease: Expo.easeOut}, "-=0.25")


						.fromTo(animIconGettingTokens.find("#token"), 0.25, {autoAlpha: 0, y: -12, scaleX: 1, scaleY: 1, transformOrigin: "bottom center", ease: Back.easeInOut}, {autoAlpha: 1, y: 10, scaleX: 1, scaleY: 0.75, ease: Back.easeInOut})
						.fromTo(animIconGettingTokens.find("#hand"), 0.25, {rotation: 0, transformOrigin: "top left", ease: Back.easeInOut}, {rotation: 10, ease: Back.easeInOut}, "-=0.25")



						.to(animIconGettingTokens.find("#token"), 0.25, {y: -18, scaleX: 0.75, scaleY: 1, transformOrigin: "top center", ease: Back.easeInOut})
						.to(animIconGettingTokens.find("#token"), 0.25, {y: -5, scaleX: 1, scaleY: 1, transformOrigin: "bottom center", ease: Bounce.easeOut})

						.to(animIconGettingTokens.find("#hand"), 0.25, {rotation: -5, ease: Back.easeInOut}, "-=0.5")
						.to(animIconGettingTokens.find("#hand"), 0.25, {rotation: 5, ease: Back.easeInOut}, "-=0.25")



						//.fromTo(animIconGettingTokens.find("#hand"), 0.25, {rotation: 0, transformOrigin: "top left", ease: Back.easeInOut}, {rotation: 10, ease: Back.easeInOut}, "-=0.25")




						/*
					   .to(animIconGettingTokens.find("#token"), 0.5, {autoAlpha: 1, y: 10, scaleX: 1, scaleY: 0.75, transformOrigin: "bottom center", ease: Back.easeOut})

					   .to(animIconGettingTokens.find("#hand"), 0.5, {rotation: 12, ease: Back.easeOut}, "-=0.5")

					   .to(animIconGettingTokens.find("#token"), 0.25,{y: -15, scaleX: 1, scaleY: 1, ease: Back.easeInOut})
					   .to(animIconGettingTokens.find("#token"), 0.25,{y: 15, scaleX: 1, scaleY: 1, ease: Expo.easeOut}, "-=0")


					   .to(animIconGettingTokens.find("#hand"), 0.25, {rotation: -10, ease: Back.easeInOut}, "-=0.5")
					   .to(animIconGettingTokens.find("#hand"), 0.25, {rotation: 15, ease: Back.easeInOut}, "-=0.35")

					   .to(animIconGettingTokens.find("#token"), 0.25,{y: -15, scaleX: 1, scaleY: 0.75, transformOrigin: "top center", ease: Back.easeInOut})
					   .to(animIconGettingTokens.find("#token"), 0.25,{y: 8, scaleX: 1, scaleY: 1, transformOrigin: "bottom center", ease: Expo.easeOut}, "-=0")

					   .to(animIconGettingTokens.find("#hand"), 0.25, {rotation: 0, ease: Back.easeInOut}, "-=0.5")
					   */

					   ;


/* -------------------------------------------------- */
/* FULLY PROTECTED
/* -------------------------------------------------- */

var tlIconFullyProtected = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconFullyProtected.to(animIconFullyProtected.find("#check"), 0.5, {autoAlpha: 0, scale: 0, rotation: 90, transformOrigin: "center center", ease: Back.easeOut})
						.to(animIconFullyProtected.find("#radio"), 0.5, {autoAlpha: 0, rotation: 360, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, "-=0.25")
						.to(animIconFullyProtected.find("#shield-left-face"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Expo.easeOut}, "-=0.5")
						.to(animIconFullyProtected.find("#shield"), 0.5, {autoAlpha: 0, scale: 0.75, transformOrigin: "center center", ease: Back.easeOut}, "-=0.5")

						.to(animIconFullyProtected.find("#shield"), 0.5, {autoAlpha: 1, scale: 1, ease: Back.easeOut})
						.to(animIconFullyProtected.find("#shield-left-face"), 0.5, {autoAlpha: 1, scale: 1, ease: Expo.easeOut}, "-=0.25")
						.to(animIconFullyProtected.find("#radio"), 0.5, {autoAlpha: 1, rotation: 0, scale: 1, ease: Back.easeOut}, "-=0.25")
						.to(animIconFullyProtected.find("#check"), 0.5, {autoAlpha: 1, scale: 1, rotation: 0, ease: Back.easeOut}, "-=0.25");
						


/* -------------------------------------------------- */
/* DUAL-CHAIN ARCHITECTURE
/* -------------------------------------------------- */

var tlIconDualChainArchitecture = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete });
	tlIconDualChainArchitecture.to(animIconDualChainArchitecture.find("#chain-01"), 0.5, {autoAlpha: 0, x: 10, y: 10, scale: 0, transformOrigin: "center center", ease: Back.easeOut})
							   .to(animIconDualChainArchitecture.find("#chain-02"), 0.5, {autoAlpha: 0, x: -10, y: -10, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, "-=0.5")

							   .to(animIconDualChainArchitecture.find("#chain-01"), 0.5, {autoAlpha: 1, x: 0, y: 0, scale: 1, ease: Back.easeOut})
							   .to(animIconDualChainArchitecture.find("#chain-02"), 0.5, {autoAlpha: 1, x: 0, y: 0, scale: 1, ease: Back.easeOut}, "-=0.5");


/* -------------------------------------------------- */
/* WITNESS POOL
/* -------------------------------------------------- */

var tlIconWitnessPool = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconWitnessPool.staggerTo(animIconWitnessPool.children().children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.12)
					 .staggerTo(animIconWitnessPool.children().children(), 1, {autoAlpha: 1, ease: Expo.easeOut}, -0.12);


/* -------------------------------------------------- */
/* WEIGHTED REPUTATION SYSTEM
/* -------------------------------------------------- */

var tlIconWeightedReputationSystem = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: 0, onComplete: animIconComplete});
	tlIconWeightedReputationSystem.staggerTo(animIconWeightedReputationSystem.children(), 0.5, {autoAlpha: 0, scale: 0, rotation: 36, transformOrigin: "center center", ease: Back.easeOut}, -0.12)
								  .staggerTo(animIconWeightedReputationSystem.children(), 0.5, {autoAlpha: 1, scale: 1, rotation: 0, ease: Back.easeOut}, 0.12);


/* -------------------------------------------------- */
/* UNIFICATION
/* -------------------------------------------------- */

var tlIconUnification = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconUnification.to(animIconUnification.find("#chain-01"), 0.25, {autoAlpha: 0, x: 10, scale: 0.75, rotation: 60, transformOrigin: "center center", ease: Back.easeOut})
					 .to(animIconUnification.find("#chain-02"), 0.25, {autoAlpha: 0, x: -10, scale: 0.75, rotation: -60, transformOrigin: "center center", ease: Back.easeOut}, "-=0.25")

					 .to(animIconUnification.find("#chain-01"), 0.5, {autoAlpha: 1, x: 0, scale: 1, rotation: 0, ease: Back.easeOut})
					 .to(animIconUnification.find("#chain-02"), 0.5, {autoAlpha: 1, x: 0, scale: 1, rotation: 0, ease: Back.easeOut}, "-=0.5");


/* -------------------------------------------------- */
/* MIDDLEMEN
/* -------------------------------------------------- */

TweenMax.set(animIconMiddlemen.find("#person"), {autoAlpha: 0})

var tlIconMiddlemen = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconMiddlemen.to(animIconMiddlemen.find("#middleman"), 1, {autoAlpha: 0, delay: 1, ease: Expo.easeOut})
				   .staggerTo(animIconMiddlemen.find("#people").children(), 0.5, {autoAlpha: 0, ease: Expo.easeOut}, 0.12, "-=1")
				   .staggerTo(animIconMiddlemen.find("#people").children(), 0.5, {autoAlpha: 1, ease: Expo.easeOut}, -0.12)
				   .to(animIconMiddlemen.find("#person"), 1, {autoAlpha: 1, ease: Expo.easeOut}, "-=0.5");


/* -------------------------------------------------- */
/* TRANSACTIONS
/* -------------------------------------------------- */

var tlIconTransactions = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconTransactions.from(animIconTransactions.find("#card-01"), 0.5, {autoAlpha: 0, rotation: -36, transformOrigin: "left bottom", ease: Back.easeOut})
					  .from(animIconTransactions.find("#card-02"), 0.5, {autoAlpha: 0, rotation: 36, transformOrigin: "right bottom", ease: Back.easeOut});


/* -------------------------------------------------- */
/* SELL ANYTHING
/* -------------------------------------------------- */

var tlIconSellAnything = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconSellAnything.to(animIconSellAnything.children(), 0.5, {autoAlpha: 0, rotation: -28, transformOrigin: "left bottom", ease: Back.easeOut})
					  .to(animIconSellAnything.children(), 0.25, {autoAlpha: 1, rotation: 0, ease: Back.easeOut})

					  .to(animIconSellAnything.children(), 0.5, {y: -10, transformOrigin: "center center", ease: Back.easeOut})
					  .to(animIconSellAnything.children(), 0.25, {y: 0, ease: Back.easeOut})

					  .to(animIconSellAnything.children(), 0.5, {y: -10, ease: Back.easeOut})
					  .to(animIconSellAnything.children(), 0.25, {y: 0, ease: Back.easeOut});


/* -------------------------------------------------- */
/* STARTUP IS FREE
/* -------------------------------------------------- */

// HIDE CLOUDS
TweenMax.set(animIconStartup.find("#rocket"), {y: 25, transformOrigin: "bottom center"});
TweenMax.set(animIconStartup.find("#flames"), {autoAlpha: 0, scaleY: 0, transformOrigin: "top center"});
TweenMax.set(animIconStartup.find("#exhaust"), {autoAlpha: 0, y: 10, scaleY: 2, transformOrigin: "bottom center"});

TweenMax.set(animIconStartup.find("#clouds"), {display: "block", opacity: 1});
TweenMax.set(animIconStartup.find("#clouds-foreground"), {autoAlpha: 0});
TweenMax.set(animIconStartup.find("#clouds-background"), {autoAlpha: 0});


// ROCKETSHIP LOOP
var tlIconStartupRocket = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: -1});
	tlIconStartupRocket.to(animIconStartup.find("#rocket"), 0.12, {x: - 1, rotation: - 2, ease: Linear.easeNone});


// CLOUDS FOREGROUND LOOP
var tlIconStartupCloudsForeground = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: -1});
	tlIconStartupCloudsForeground.set(animIconStartup.find("#clouds-foreground"), {autoAlpha: 0.5, y: -100})
								 .to(animIconStartup.find("#clouds-foreground"), 2, {y: 100, ease: Linear.easeNone});


// CLOUDS BACKGROUND LOOP
var tlIconStartupCloudsBackground = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: -1});
	tlIconStartupCloudsBackground.set(animIconStartup.find("#clouds-background"), {autoAlpha: 0.25, y: -100})
								 .to(animIconStartup.find("#clouds-background"), 6, {y: 100, ease: Linear.easeNone});


// FLAMES LOOP
var tlIconStartupFlames = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: -1});
	tlIconStartupFlames.to(animIconStartup.find("#flames"), 0.2, {autoAlpha: 0.75, scaleX: -1, ease: Linear.easeNone});





// SCENE
var tlIconStartupLanding = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0});
	tlIconStartupLanding.to(animIconStartup.find("#clouds"), 1, {display: "none", opacity: 0, delay: 0, ease: Expo.easeOut})

						.to(animIconStartup.find("#rocket"), 2, {y: 25, scaleX: 1, scaleY: 1, ease: Expo.easeInOut})

						.set(animIconStartup.find("#exhaust"), {autoAlpha: 1, scaleX: 1, scaleY: 1}, "-=1")
						.to(animIconStartup.find("#exhaust"), 0.75, {autoAlpha: 0, scaleX: 2, scaleY: 0, ease: Expo.easeOut}, "-=1")


						.to(animIconStartup.find("#flames"), 0.25, {autoAlpha: 0, scaleY: 0, transformOrigin: "bottom center", ease: Expo.easeOut,

							onComplete: function() {

											tlIconStartupRocket.pause();
											tlIconStartupCloudsForeground.pause();
											tlIconStartupCloudsBackground.pause();

											animIconStartup.removeClass("no-pointer");

										}

						}, "-=1");





var tlIconStartupLaunch = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0,

											onStart: function() {

														tlIconStartupRocket.play(0);
														animIconStartup.addClass("no-pointer");

													}
											});

	tlIconStartupLaunch.to(animIconStartup.find("#rocket"), 0.25, {scaleY: 0.75, delay: 1, ease: Back.easeOut})
					   .to(animIconStartup.find("#rocket"), 0.25, {y: 0, scaleX: 0.75, scaleY: 1, ease: Back.easeOut})
					
					   .set(animIconStartup.find("#exhaust"), {autoAlpha: 1}, "-=0.25")
					   .to(animIconStartup.find("#exhaust"), 1, {autoAlpha: 0, scaleX: 2, scaleY: 0, ease: Expo.easeOut}, "-=0.25")

					   .to(animIconStartup.find("#flames"), 0.5, {autoAlpha: 1, scaleY: 1, ease: Expo.easeOut,
					   		
					   		onStart: function() {
					   				
								tlIconStartupFlames.play()

					   		},

					   		onComplete: function() {

								TweenMax.to(animIconStartup.find("#clouds"), 0.5, {display: "block", opacity: 1, ease: Expo.easeOut})
								tlIconStartupCloudsForeground.play(0);
								tlIconStartupCloudsBackground.play(0);



					   		}


					   }, "-=1")



					   .addCallback( function() { tlIconStartupLanding.play(0) }, "+=2" );


/* -------------------------------------------------- */
/* NO HOSTAGE SITUATIONS
/* -------------------------------------------------- */

var tlIconNoHostageSituations = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: 0, onComplete: animIconComplete});
	tlIconNoHostageSituations.to(animIconNoHostageSituations.find("#hand-01"), 0.5, {autoAlpha: 0, x: -5, y: -2, scale: 1, rotation: -4, transformOrigin: "top left", ease: Back.easeOut})
							 .to(animIconNoHostageSituations.find("#hand-02"), 0.5, {autoAlpha: 0, x: 5, y: -2, scale: 1, rotation: 4, transformOrigin: "top right", ease: Back.easeOut}, "-=0.5")

							 .to(animIconNoHostageSituations.find("#hand-01"), 0.5, {autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: 0, ease: Back.easeOut})
							 .to(animIconNoHostageSituations.find("#hand-02"), 0.5, {autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: 0, ease: Back.easeOut}, "-=0.5")

							 .to(animIconNoHostageSituations.find("#handshake"), 0.25, {y: 5, ease: Expo.easeOut})
							 .to(animIconNoHostageSituations.find("#handshake"), 0.25, {y: 0, ease: Back.easeOut})
							 .to(animIconNoHostageSituations.find("#handshake"), 0.25, {y: 5, ease: Expo.easeOut})
							 .to(animIconNoHostageSituations.find("#handshake"), 0.25, {y: 0, ease: Back.easeOut})
							 .to(animIconNoHostageSituations.find("#handshake"), 0.25, {y: 5, ease: Expo.easeOut})
							 .to(animIconNoHostageSituations.find("#handshake"), 0.25, {y: 0, ease: Back.easeOut})
							 .to(animIconNoHostageSituations.find("#handshake"), 0.25, {y: 5, ease: Expo.easeOut})
							 .to(animIconNoHostageSituations.find("#handshake"), 0.25, {y: 0, ease: Back.easeOut});


/* -------------------------------------------------- */
/* GLOBAL DECENTRALIZED SELLING
/* -------------------------------------------------- */
/*
TweenMax.set(animIconGlobalDecentralizedSelling.find("#awning").children(), {autoAlpha: 0, scaleY: 0, transformOrigin: "top center"});
TweenMax.set(animIconGlobalDecentralizedSelling.find("#storefront"), {autoAlpha: 0, scaleY: 0, transformOrigin: "top center"});
TweenMax.set(animIconGlobalDecentralizedSelling.find("#door"), {autoAlpha: 0, scaleX: 0, transformOrigin: "left center"});
TweenMax.set(animIconGlobalDecentralizedSelling.find("#window"), {autoAlpha: 0, scale: 0, transformOrigin: "center center"});
*/

var tlIconGlobalDecentralizedSelling = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconGlobalDecentralizedSelling.staggerTo(animIconGlobalDecentralizedSelling.find("#awning").children(), 0.25, {autoAlpha: 0, scaleY: 0, delay: 0, ease: Back.easeOut}, 0.12)
						  			.to(animIconGlobalDecentralizedSelling.find("#door"), 0.25, {autoAlpha: 0, scaleX: 0, ease: Back.easeOut}, "-=0.25")
					  				.to(animIconGlobalDecentralizedSelling.find("#window"), 0.25, {autoAlpha: 0, scaleY: 0, transformOrigin: "top center", ease: Back.easeOut}, "-=0")
									.to(animIconGlobalDecentralizedSelling.find("#storefront"), 0.25, {autoAlpha: 0, scaleY: 0, transformOrigin: "top center", ease: Back.easeOut}, "-=0")


									.staggerTo(animIconGlobalDecentralizedSelling.find("#awning").children(), 0.25, {autoAlpha: 1, scaleY: 1, ease: Expo.easeOut}, 0.12)
									.to(animIconGlobalDecentralizedSelling.find("#storefront"), 0.25, {autoAlpha: 1, scaleY: 1, ease: Back.easeOut}, "-=0")
					  				.to(animIconGlobalDecentralizedSelling.find("#door"), 0.25, {autoAlpha: 1, scaleX: 1, ease: Expo.easeOut})
					  				.to(animIconGlobalDecentralizedSelling.find("#window"), 0.25, {autoAlpha: 1, scaleY: 1, ease: Expo.easeOut});










/* -------------------------------------------------- */
/* ANIMATION OBSERVER
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	var animIconPlayAll = function() {
		"use strict";


	};

	
	var animIconPauseAll = function() {
		"use strict";

		tlIconMagnifyingGlass.pause();
		tlIconHacker.pause();
		tlIconEye.pause();
		tlIconAnonymity.pause();
		tlIconReputation.pause();
		tlIconPublicDecentralization.pause();
		tlIconDataCenters.pause();
		tlIconGettingTokens.pause();
		tlIconFullyProtected.pause();
		tlIconDualChainArchitecture.pause();
		tlIconWitnessPool.pause();
		tlIconWeightedReputationSystem.pause();
		tlIconUnification.pause();
		tlIconMiddlemen.pause();
		tlIconTransactions.pause();
		tlIconSellAnything.pause();


		tlIconStartupLaunch.pause();

		if ( tlIconStartupLaunch.paused(true) ) {

			tlIconStartupRocket.pause();
			tlIconStartupFlames.pause();
			tlIconStartupCloudsForeground.pause();
			tlIconStartupCloudsBackground.pause();
			
		}


		tlIconGlobalDecentralizedSelling.pause();

	};


	/* -------------------------------------------------- */
	/* CONTROLLER
	/* -------------------------------------------------- */

	var animIconController = function() {
		"use strict";
		//console.log("Playing animations in view.");

		if ( animIconMagnifyingGlass.hasClass("anim-play") ) {
			
			tlIconMagnifyingGlass.resume();

		} else {

			tlIconMagnifyingGlass.pause(0);

		} if ( animIconMagnifyingGlass.hasClass("no-pointer") && !tlIconMagnifyingGlass.isActive() ) {
			
			tlIconMagnifyingGlass.restart();

		}





		if ( animIconHacker.hasClass("anim-play") ) {

			tlIconHacker.resume();

		} else {

			tlIconHacker.pause(0);

		} if ( animIconHacker.hasClass("no-pointer") && !tlIconHacker.isActive() ) {
			
			tlIconHacker.restart();

		}





		if ( animIconEye.hasClass("anim-play") ) {

			tlIconEye.resume();

		} else {

			tlIconEye.pause(0);

		} if ( animIconEye.hasClass("no-pointer") && !tlIconEye.isActive() ) {
			
			tlIconEye.restart();

		}





		if ( animIconAnonymity.hasClass("anim-play") ) {

			tlIconAnonymity.resume();

		} else {

			tlIconAnonymity.pause(0);

		} if ( animIconAnonymity.hasClass("no-pointer") && !tlIconAnonymity.isActive() ) {
			
			tlIconAnonymity.restart();

		}





		if ( animIconReputation.hasClass("anim-play") ) {

			tlIconReputation.resume();

		} else {

			tlIconReputation.pause(0);

		} if ( animIconReputation.hasClass("no-pointer") && !tlIconReputation.isActive() ) {
			
			tlIconReputation.restart();

		}





		if ( animIconPublicDecentralization.hasClass("anim-play") ) {

			tlIconPublicDecentralization.resume();

		} else {

			tlIconPublicDecentralization.pause(0);

		} if ( animIconPublicDecentralization.hasClass("no-pointer") && !tlIconPublicDecentralization.isActive() ) {
			
			tlIconPublicDecentralization.restart();

		}





		if ( animIconDataCenters.hasClass("anim-play") ) {

			tlIconDataCenters.resume();

		} else {

			tlIconDataCenters.pause(0);

		} if ( animIconDataCenters.hasClass("no-pointer") && !tlIconDataCenters.isActive() ) {
			
			tlIconDataCenters.restart();

		}





		if ( animIconGettingTokens.hasClass("anim-play") ) {

			tlIconGettingTokens.resume();

		} else {

			tlIconGettingTokens.pause(0);

		} if ( animIconGettingTokens.hasClass("no-pointer") && !tlIconGettingTokens.isActive() ) {
			
			tlIconGettingTokens.restart();

		}





		if ( animIconFullyProtected.hasClass("anim-play") ) {

			tlIconFullyProtected.resume();

		} else {

			tlIconFullyProtected.pause(0);

		} if ( animIconFullyProtected.hasClass("no-pointer") && !tlIconFullyProtected.isActive() ) {
			
			tlIconFullyProtected.restart();

		}





		if ( animIconDualChainArchitecture.hasClass("anim-play") ) {

			tlIconDualChainArchitecture.resume();

		} else {

			tlIconDualChainArchitecture.pause(0);

		} if ( animIconDualChainArchitecture.hasClass("no-pointer") && !tlIconDualChainArchitecture.isActive() ) {

 			//tlIconDualChainArchitecture.reversed() ? tlIconDualChainArchitecture.play() : tlIconDualChainArchitecture.reverse();
			
			tlIconDualChainArchitecture.restart();


		}





		if ( animIconWitnessPool.hasClass("anim-play") ) {

			tlIconWitnessPool.resume();

		} else {

			tlIconWitnessPool.pause(0);

		} if ( animIconWitnessPool.hasClass("no-pointer") && !tlIconWitnessPool.isActive() ) {
			
			tlIconWitnessPool.restart();

		}





		if ( animIconWeightedReputationSystem.hasClass("anim-play") ) {

			tlIconWeightedReputationSystem.resume();

		} else {

			tlIconWeightedReputationSystem.pause(0);

		} if ( animIconWeightedReputationSystem.hasClass("no-pointer") && !tlIconWeightedReputationSystem.isActive() ) {
			
			tlIconWeightedReputationSystem.restart();

		}





		if ( animIconUnification.hasClass("anim-play") ) {

			tlIconUnification.resume();

		} else {

			tlIconUnification.pause(0);

		} if ( animIconUnification.hasClass("no-pointer") && !tlIconUnification.isActive() ) {
			
			tlIconUnification.restart();

		}





		if ( animIconMiddlemen.hasClass("anim-play") ) {

			tlIconMiddlemen.resume();

		} else {

			tlIconMiddlemen.pause(0);

		} if ( animIconMiddlemen.hasClass("no-pointer") && !tlIconMiddlemen.isActive() ) {
			
			tlIconMiddlemen.restart();

		}





		if ( animIconTransactions.hasClass("anim-play") ) {

			tlIconTransactions.resume();

		} else {

			tlIconTransactions.pause(0);

		} if ( animIconTransactions.hasClass("no-pointer") && !tlIconTransactions.isActive() ) {
			
			tlIconTransactions.restart();

		}





		if ( animIconSellAnything.hasClass("anim-play") ) {

			tlIconSellAnything.resume();

		} else {

			tlIconSellAnything.pause(0);

		} if ( animIconSellAnything.hasClass("no-pointer") && !tlIconSellAnything.isActive() ) {
			
			tlIconSellAnything.restart();

		}





		if ( animIconStartup.hasClass("anim-play") ) {

			tlIconStartupLaunch.resume();

			/*
			if ( tlIconStartupLaunch.paused(false) ) {

				tlIconStartupRocket.resume();
				tlIconStartupFlames.resume();
				tlIconStartupCloudsForeground.resume();
				tlIconStartupCloudsBackground.resume();

			}
			*/


		} else {

			tlIconStartupLaunch.pause(0);

		} if ( animIconStartup.hasClass("no-pointer") && !tlIconStartupLaunch.isActive() ) {
			
			tlIconStartupLaunch.restart();

		}





		if ( animIconNoHostageSituations.hasClass("anim-play") ) {

			tlIconNoHostageSituations.resume();

		} else {

			tlIconNoHostageSituations.pause(0);

		} if ( animIconNoHostageSituations.hasClass("no-pointer") && !tlIconNoHostageSituations.isActive() ) {
			
			tlIconNoHostageSituations.restart();

		}





		if ( animIconGlobalDecentralizedSelling.hasClass("anim-play") ) {

			tlIconGlobalDecentralizedSelling.resume();

		} else {

			tlIconGlobalDecentralizedSelling.pause(0);

		} if ( animIconGlobalDecentralizedSelling.hasClass("no-pointer") && !tlIconGlobalDecentralizedSelling.isActive() ) {
			
			tlIconGlobalDecentralizedSelling.restart();

		}






	};
	

	/* -------------------------------------------------- */
	/* INTERACTIVE
	/* -------------------------------------------------- */

	animIcon.on("mouseover touchmove touchstart", function() {
		"use strict";

		var self = $(this);

		self.addClass("no-pointer");

		TweenMax.delayedCall(0, animIconController);

		//animIconController();

	});


	/* -------------------------------------------------- */
	/* RUN
	/* -------------------------------------------------- */

	$$(pageContent).on("scrollstart", animIconPauseAll);
	$$(pageContent).on("scrollstop", animIconController);

	TweenMax.delayedCall($delayInterval + 2, animIconController);

	//animIconController();

	/*
	if ( $microAnimationsPauseOnScroll ) {

		$$(pageContent).on("scrollstart", animIconPauseAll);
		$$(pageContent).on("scrollstop", animIconController);

		animIconPauseAll();

	} else {

		animIconPlayAll();

	}
	*/
