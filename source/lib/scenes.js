/* -------------------------------------------------- */
/* CACHE SELECTORS
/* -------------------------------------------------- */

var	animIcon = $$("svg.anim"),

	animIconMagnifyingGlass = $$("#icon-magnifying-glass"),
	animIconHacker = $$("#icon-hacker"),
	animIconEye = $$("#icon-sauron"),

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


	//animAirdrop = $$(".airdrop");


/* -------------------------------------------------- */
/* FUNCTIONS
/* -------------------------------------------------- */

var animIconComplete = function() {
	//console.log("Tween completed.");

	animIcon.removeClass("no-pointer");

}


/* -------------------------------------------------- */
/* MAGNIFYING GLASS
/* -------------------------------------------------- */

var tlIconMagnifyingGlass = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconMagnifyingGlass.to(animIconMagnifyingGlass.find("#magnifying-glass"), 0.5, {autoAlpha: 0, scale: 0.5, rotation: 60, transformOrigin: "center center", ease: Back.easeOut})
						 .to(animIconMagnifyingGlass.find("#magnifying-glass"), 0.5, {autoAlpha: 1, scale: 1, rotation: 0, ease: Back.easeOut})
						 .staggerTo(animIconMagnifyingGlass.find("#magnifying-glass-people").children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.12, "-=1.5")
						 .staggerTo(animIconMagnifyingGlass.find("#magnifying-glass-people").children(), 1, {autoAlpha: 1, ease: Expo.easeOut}, -0.12);


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
	tlIconAnonymity.staggerFrom(animIconAnonymity.find("#doc").children(), 0.25, {autoAlpha: 0, ease: Back.easeOut}, 0.12)
				   .staggerFrom(animIconAnonymity.find("#profile").children(), 0.25, {autoAlpha: 0, scale: 0.5, transformOrigin: "top left", ease: Back.easeOut}, 0.12)
				   .staggerFrom(animIconAnonymity.find("#doc-lines").children(), 0.25, {autoAlpha: 0, scaleX: 0, transformOrigin: "left center", ease: Expo.easeOut}, -0.12, "-=0.75")
				   .set(animIconAnonymity.find("#padlock").find("#padlock-bar"), {y: -6}, "-=0.75")
				   .from(animIconAnonymity.find("#padlock"), 0.25, {autoAlpha: 0, scale: 0.5, transformOrigin: "center center", ease: Back.easeOut}, "-=0.75")
				   .to(animIconAnonymity.find("#padlock").find("#padlock-bar"), 0.25, {y: 0, ease: Back.easeOut}, "-=0.5");


/* -------------------------------------------------- */
/* REPUTATION
/* -------------------------------------------------- */

var tlIconReputation = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconReputation.from(animIconReputation.find("#cert"), 0.25, {autoAlpha: 0, scale: 0.25, transformOrigin: "center center", ease: Back.easeOut})
				    .staggerFrom(animIconReputation.find("#cert-lines").children(), 0.25, {autoAlpha: 0, scaleX: 0, transformOrigin: "left center", ease: Expo.easeOut}, -0.12, "-=0.25")
				    //.from(animIconReputation.find("#ribbon"), 1, {autoAlpha: 0, scale: 0.5, transformOrigin: "center center", ease: Elastic.easeOut})
				    .from(animIconReputation.find("#ribbon-outer"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, "-=0.75")
				    .from(animIconReputation.find("#ribbon-inner"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, "-=0.75")
				    .from(animIconReputation.find("#ribbon-taper-01"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "top center", ease: Back.easeOut}, "-=0.5")
				    .from(animIconReputation.find("#ribbon-taper-02"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "top center", ease: Back.easeOut}, "-=0.25");


/* -------------------------------------------------- */
/* PUBLIC DECENTRALIZATION
/* -------------------------------------------------- */

var tlIconPublicDecentralization = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconPublicDecentralization.staggerFrom(animIconPublicDecentralization.find("#segments").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, 0.12)
				    	  		.staggerFrom(animIconPublicDecentralization.find("#public-decentralization-nodes").children(), 0.75, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, 0.12, "-=1");


/* -------------------------------------------------- */
/* DATA CENTERS
/* -------------------------------------------------- */

var tlIconDataCenters = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconDataCenters.to(animIconDataCenters.find("#globe"), 0.5, {autoAlpha: 0, scale: 0.9, transformOrigin: "center center", ease: Back.easeOut}, "group-01")
					 .staggerTo(animIconDataCenters.find("#data-center-nodes").children(), 1, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, -0.12, "group-01")

					 .staggerTo(animIconDataCenters.find("#data-center-nodes").children(), 1, {autoAlpha: 1, scale: 1, transformOrigin: "center center", ease: Back.easeOut}, 0.12)
					 .to(animIconDataCenters.find("#globe"), 0.5, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, "-=0.5");


/* -------------------------------------------------- */
/* GETTING TOKENS
/* -------------------------------------------------- */

var tlIconGettingTokens = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 1, onComplete: animIconComplete});
	tlIconGettingTokens
						//.fromTo(animIconGettingTokens.find("#token"), 0.25, {autoAlpha: 1, y: -12, scaleX: 1, scaleY: 1, transformOrigin: "bottom center", ease: Back.easeInOut}, {autoAlpha: 1, y: 10, scaleX: 1, scaleY: 0.75, ease: Back.easeInOut})
						//.fromTo(animIconGettingTokens.find("#hand"), 0.25, {rotation: 0, transformOrigin: "top left", ease: Back.easeInOut}, {rotation: 10, ease: Back.easeInOut}, "-=0.25")

						.to(animIconGettingTokens.find("#token"), 0.5, {y: 10, scaleX: 1, scaleY: 0.75, transformOrigin: "bottom center", ease: Back.easeOut})
						.to(animIconGettingTokens.find("#hand"), 0.5, {rotation: 10, transformOrigin: "left bottom", ease: Back.easeOut}, "-=0.5")

						.to(animIconGettingTokens.find("#token"), 0.5, {y: -18, scaleX: 0.75, scaleY: 1, transformOrigin: "center center", ease: Back.easeOut})
						.to(animIconGettingTokens.find("#hand"), 0.5, {rotation: 0, ease: Back.easeOut}, "-=0.5")

						.to(animIconGettingTokens.find("#hand"), 0.5, {rotation: 5, ease: Back.easeOut})
						.to(animIconGettingTokens.find("#token"), 0.25, {y: 0, scaleX: 1, scaleY: 1, ease: Back.easeOut.config(1.7) }, "-=0.5");


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
	tlIconDualChainArchitecture.to(animIconDualChainArchitecture.find("#dual-chain-01"), 0.5, {autoAlpha: 0, x: 10, y: 10, scale: 0, transformOrigin: "center center", ease: Back.easeOut})
							   .to(animIconDualChainArchitecture.find("#dual-chain-02"), 0.5, {autoAlpha: 0, x: -10, y: -10, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, "-=0.5")

							   .to(animIconDualChainArchitecture.find("#dual-chain-01"), 0.5, {autoAlpha: 1, x: 0, y: 0, scale: 1, ease: Back.easeOut})
							   .to(animIconDualChainArchitecture.find("#dual-chain-02"), 0.5, {autoAlpha: 1, x: 0, y: 0, scale: 1, ease: Back.easeOut}, "-=0.5");


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
	tlIconWeightedReputationSystem

									.to(animIconWeightedReputationSystem.find("#star-02"), 1, {scale: 1.25, transformOrigin: "bottom center", ease: Elastic.easeOut}, "group-01")
									.to(animIconWeightedReputationSystem.find("#scale"), 1, {rotation: 5, transformOrigin: "center center", ease: Bounce.easeOut}, "group-01")

									.to(animIconWeightedReputationSystem.find("#star-01"), 1, {scale: 1.5, transformOrigin: "bottom center", ease: Elastic.easeOut}, "group-02")
									.to(animIconWeightedReputationSystem.find("#scale"), 1, {rotation: -10, ease: Bounce.easeOut}, "group-02")

									.to(animIconWeightedReputationSystem.find("#star-02"), 1, {scale: 1.75, ease: Elastic.easeOut}, "group-03")
									.to(animIconWeightedReputationSystem.find("#scale"), 1, {rotation: 15, ease: Bounce.easeOut}, "group-03")

									.to(animIconWeightedReputationSystem.find("#star-01"), 1, {scale: 1, ease: Elastic.easeOut}, "group-04")
									.to(animIconWeightedReputationSystem.find("#star-02"), 1, {scale: 1, ease: Elastic.easeOut}, "group-04")
									.to(animIconWeightedReputationSystem.find("#scale"), 1, {rotation: 0, ease: Bounce.easeOut}, "group-04");


/*
var tlIconWeightedReputationSystem = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: 0, onComplete: animIconComplete});
	tlIconWeightedReputationSystem.staggerTo(animIconWeightedReputationSystem.children(), 0.5, {autoAlpha: 0, scale: 0, rotation: 36, transformOrigin: "center center", ease: Back.easeOut}, -0.12)
								  .staggerTo(animIconWeightedReputationSystem.children(), 0.5, {autoAlpha: 1, scale: 1, rotation: 0, ease: Back.easeOut}, 0.12);
*/


/* -------------------------------------------------- */
/* UNIFICATION
/* -------------------------------------------------- */

var tlIconUnification = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconUnification.to(animIconUnification.find("#unification-chain-01"), 0.25, {autoAlpha: 0, x: 10, scale: 0.75, rotation: 60, transformOrigin: "center center", ease: Back.easeOut})
					 .to(animIconUnification.find("#unification-chain-02"), 0.25, {autoAlpha: 0, x: -10, scale: 0.75, rotation: -60, transformOrigin: "center center", ease: Back.easeOut}, "-=0.25")

					 .to(animIconUnification.find("#unification-chain-01"), 0.5, {autoAlpha: 1, x: 0, scale: 1, rotation: 0, ease: Back.easeOut})
					 .to(animIconUnification.find("#unification-chain-02"), 0.5, {autoAlpha: 1, x: 0, scale: 1, rotation: 0, ease: Back.easeOut}, "-=0.5");


/* -------------------------------------------------- */
/* MIDDLEMEN
/* -------------------------------------------------- */

TweenMax.set(animIconMiddlemen.find("#person"), {autoAlpha: 1, scaleY: 0, transformOrigin: "bottom center"})
TweenMax.set(animIconMiddlemen.find("#middleman"), {autoAlpha: 0, scaleY: 0, transformOrigin: "bottom center"})

var tlIconMiddlemen = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconMiddlemen.to(animIconMiddlemen.find("#middleman"), 0.25, {autoAlpha: 1, scaleY: 1, ease: Back.easeOut})
				   //.staggerTo(animIconMiddlemen.find("#middlemen-people").children(), 0.5, {autoAlpha: 0, ease: Expo.easeOut}, 0.12)
				   .to(animIconMiddlemen.find("#middleman"), 0.5, {autoAlpha: 0, scaleY: 0, delay: 1, ease: Back.easeOut})
				   //.staggerTo(animIconMiddlemen.find("#middlemen-people").children(), 0.5, {autoAlpha: 1, ease: Expo.easeOut}, -0.12)
				   .to(animIconMiddlemen.find("#person"), 0.25, {autoAlpha: 1, scaleY: 1, delay: 0, ease: Back.easeOut});


/* -------------------------------------------------- */
/* TRANSACTIONS
/* -------------------------------------------------- */

var tlIconTransactions = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: 0, onComplete: animIconComplete});
	tlIconTransactions.staggerFromTo(animIconTransactions.find("#p2p-bars").children(), 0.25, {scaleY: 0, transformOrigin: "bottom center"}, {scale: 1, ease: Back.easeOut}, -0.12)
					  .fromTo(animIconTransactions.find("#p2p-person"), 0.25, {scaleY: 0, transformOrigin: "bottom center"}, {scale: 1, ease: Back.easeOut});


/* -------------------------------------------------- */
/* SELL ANYTHING
/* -------------------------------------------------- */

var tlIconSellAnything = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconSellAnything.to(animIconSellAnything.find("#content-dollar-sign"), 0.5, {autoAlpha: 0, scale: 0, rotation: -36, transformOrigin: "center center", delay: 0.5, ease: Back.easeOut})

					  .staggerFromTo(animIconSellAnything.find("#content-blog").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "left center", ease: Back.easeOut}, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, 0.12)
					  .to(animIconSellAnything.find("#content-blog"), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", delay: 0.75, ease: Back.easeOut})

					  .staggerFromTo(animIconSellAnything.find("#content-photo").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, -0.12)
					  .to(animIconSellAnything.find("#content-photo"), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", delay: 0.75, ease: Back.easeOut})

					  .staggerFromTo(animIconSellAnything.find("#content-video").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, -0.12)
					  .to(animIconSellAnything.find("#content-video"), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", delay: 0.75, ease: Back.easeOut})

					  .to(animIconSellAnything.find("#content-dollar-sign"), 0.25, {autoAlpha: 1, scale: 1, rotation: 0, delay: 0.25, ease: Back.easeOut});


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


// FLAMES LOOP
var tlIconStartupFlames = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: -1});
	tlIconStartupFlames.to(animIconStartup.find("#flames"), 0.2, {autoAlpha: 0.75, scaleX: -1, ease: Linear.easeNone});


// CLOUDS FOREGROUND LOOP
var tlIconStartupCloudsForeground = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: -1});
	tlIconStartupCloudsForeground.set(animIconStartup.find("#clouds-foreground"), {autoAlpha: 0.5, y: -100})
								 .to(animIconStartup.find("#clouds-foreground"), 2, {y: 100, ease: Linear.easeNone});


// CLOUDS BACKGROUND LOOP
var tlIconStartupCloudsBackground = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: -1});
	tlIconStartupCloudsBackground.set(animIconStartup.find("#clouds-background"), {autoAlpha: 0.25, y: -100})
								 .to(animIconStartup.find("#clouds-background"), 6, {y: 100, ease: Linear.easeNone});


// SCENE
var tlIconStartupLanding = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0});
	tlIconStartupLanding.to(animIconStartup.find("#clouds"), 1, {display: "none", opacity: 0, delay: 0, ease: Expo.easeOut})

						.to(animIconStartup.find("#rocket"), 2, {y: 25, scaleX: 1, scaleY: 1, ease: Expo.easeInOut})

						.set(animIconStartup.find("#exhaust"), {autoAlpha: 1, scaleX: 1, scaleY: 1}, "-=1")
						.to(animIconStartup.find("#exhaust"), 0.75, {autoAlpha: 0, scaleX: 2, scaleY: 0, ease: Expo.easeOut}, "-=1")


						.to(animIconStartup.find("#flames"), 0.25, {autoAlpha: 0, scaleY: 0, transformOrigin: "bottom center", ease: Expo.easeOut,

							onComplete: function() {

											tlIconStartupRocket.pause();
											tlIconStartupFlames.pause();
											tlIconStartupCloudsForeground.pause();
											tlIconStartupCloudsBackground.pause();

											//animIconStartup.removeClass("no-pointer");

										}

						}, "-=1");





var tlIconStartupLaunch = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0,

											onStart: function() {

														tlIconStartupRocket.resume();
														animIconStartup.addClass("no-pointer");

													}
											});

	tlIconStartupLaunch.to(animIconStartup.find("#rocket"), 0.25, {scaleX: 1, scaleY: 0.75, delay: 0, ease: Back.easeOut})
					   .to(animIconStartup.find("#rocket"), 0.25, {y: 0, scaleX: 0.75, scaleY: 1, ease: Back.easeOut})
					
					   .set(animIconStartup.find("#exhaust"), {autoAlpha: 1}, "-=0.25")
					   .to(animIconStartup.find("#exhaust"), 1, {autoAlpha: 0, scaleX: 2, scaleY: 0, ease: Expo.easeOut}, "-=0.25")

					   .to(animIconStartup.find("#flames"), 0.5, {autoAlpha: 1, scaleY: 1, ease: Expo.easeOut,
					   		
					   		onStart: function() {
					   				
								tlIconStartupFlames.resume()

					   		},

					   		onComplete: function() {

								TweenMax.to(animIconStartup.find("#clouds"), 0.5, {display: "block", opacity: 1, ease: Expo.easeOut})
								tlIconStartupCloudsForeground.resume();
								tlIconStartupCloudsBackground.resume();

					   		}

					   }, "-=1")



					   .addCallback( function() { tlIconStartupLanding.play(0) }, "+=1" );


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

var tlIconGlobalDecentralizedSelling = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: 0, onComplete: animIconComplete});
	tlIconGlobalDecentralizedSelling


									.fromTo(animIconGlobalDecentralizedSelling.children().find("#gds-mobile-left"), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center"},
																														  {autoAlpha: 1, scale: 1, ease: Back.easeOut})

									.staggerFromTo(animIconGlobalDecentralizedSelling.children().find("#gds-mobile-left").find("#gds-check-left").children(), 0.25, {autoAlpha: 0, scale: 0, rotation: -36, transformOrigin: "center center"},
																														  {autoAlpha: 1, scale: 1, rotation: 0, ease: Back.easeOut}, 0.15)
						  			

									.staggerFromTo(animIconGlobalDecentralizedSelling.children().find("#gds-dots-left").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center"},
																															   {autoAlpha: 1, scale: 1, ease: Back.easeOut}, 0.12)


									.to(animIconGlobalDecentralizedSelling.children(), 0.25, {x: -70, ease: Back.easeOut})

									.staggerFromTo(animIconGlobalDecentralizedSelling.children().find("#gds-padlock").children(), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "center center"},
																														  		 {autoAlpha: 1, scale: 1, ease: Back.easeInOut}, 0.12, "-=0.25")


									.staggerFromTo(animIconGlobalDecentralizedSelling.children().find("#gds-dots-right").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center"},
																															   {autoAlpha: 1, scale: 1, ease: Back.easeOut}, 0.12)

									.to(animIconGlobalDecentralizedSelling.children(), 0.25, {x: -141, ease: Back.easeOut})

									.fromTo(animIconGlobalDecentralizedSelling.children().find("#gds-mobile-right"), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center"},
																														  {autoAlpha: 1, scale: 1, ease: Back.easeOut})

									.staggerFromTo(animIconGlobalDecentralizedSelling.children().find("#gds-mobile-right").find("#gds-check-right").children(), 0.25, {autoAlpha: 0, scale: 0, rotation: -36, transformOrigin: "center center"},
																														  {autoAlpha: 1, scale: 1, rotation: 0, ease: Back.easeOut}, 0.15)

									.staggerTo(animIconGlobalDecentralizedSelling.children().find("#gds-dots-right").children(), 0.25, {autoAlpha: 0, scale: 0, ease: Back.easeOut}, 0.12)


									;


/* -------------------------------------------------- */
/* INVISIBLE TRANSACTIONS
/* -------------------------------------------------- */

TweenMax.set(animIconInvisibleTransactions.find("#blind-eye"), {autoAlpha: 0});
TweenMax.set(animIconInvisibleTransactions.find("#cross-out"), {autoAlpha: 1, scale: 0, transformOrigin: "top right"});

var tlIconInvisibleTransactions = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: 0, onComplete: animIconComplete});
	tlIconInvisibleTransactions.to(animIconInvisibleTransactions.find("#visible-pupil"), 0.5, {rotation: -90, transformOrigin: "center center", delay: 1, ease: Expo.easeOut})
							   .to(animIconInvisibleTransactions.find("#visible-pupil"), 0.25, {rotation: 0, ease: Expo.easeOut})

							   .set(animIconInvisibleTransactions.find("#creepy-eye"), {autoAlpha: 0})

							   .to(animIconInvisibleTransactions.find("#blind-eye"), 0.25, {autoAlpha: 1, ease: Expo.easeOut}, "-=0.25")
							   .to(animIconInvisibleTransactions.find("#cross-out"), 0.25, {autoAlpha: 1, scale: 1, ease: Expo.easeOut}, "-=0");









/* -------------------------------------------------- */
/* AIRDROP 
/* -------------------------------------------------- */

//removeIf(production)
var randomNumber;

var generateNumber = function (min, max) {

	randomNumber = Math.floor( Math.random() * ( 1 + max - min ) + min )﻿;﻿

	console.log(randomNumber);

}


/*
function randomNumber(min, max) {

	return Math.floor(Math.random() * (1 + max - min) + min)﻿;

}
*/


// PURPLE
var tlAirdrop = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: -1,


	onStart: function() {


		generateNumber( 1, 10 );
		
		//TweenMax.to(animAirdrop, 1, {opacity: 1, ease: Expo.easeOut});
		tlAirdropSway.resume();
		tlAirdropBoxSway.resume();

	},


	onRepeat: function() {

		generateNumber( 1, 10 );

	}


});


	tlAirdrop.to(animAirdrop.children(), 1, {opacity: 1, ease: Expo.easeOut})

			 .to(animAirdrop.children(), 25, {y: window.innerHeight, ease: Linear.easeNone}, "-=1")

			 .set(animAirdrop.children(), {opacity: 0});









var tlAirdropSway = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: -1});
	tlAirdropSway.to(animAirdrop.children(), 5, {x: 25, rotation: -10, transformOrigin: "top center", ease: Linear.easeNone})
			 	 .to(animAirdrop.children(), 5, {x: 0, rotation: 10, ease: Linear.easeNone});






var tlAirdropBoxSway = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: -1});
	tlAirdropBoxSway.to(animAirdrop.children().find(".box"), 5, {rotation: 5, transformOrigin: "top center", ease: Linear.easeNone})
			 	 	.to(animAirdrop.children().find(".box"), 5, {rotation: -5, ease: Linear.easeNone});
//endRemoveIf(production)









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


		if ( tlIconStartupLaunch.isActive() ) {

			tlIconStartupLaunch.pause();

			if ( tlIconStartupLaunch.paused() ) {

				tlIconStartupRocket.pause();
				tlIconStartupFlames.pause();
				tlIconStartupCloudsForeground.pause();
				tlIconStartupCloudsBackground.pause();
				
			}

		}


		tlIconNoHostageSituations.pause();
		tlIconGlobalDecentralizedSelling.pause();
		tlIconInvisibleTransactions.pause();


		//tlAirdrop.pause();

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
			
			if ( !tlIconStartupLaunch.paused() && tlIconStartupLaunch.isActive() ) {

				tlIconStartupRocket.resume();
				tlIconStartupFlames.resume();
				tlIconStartupCloudsForeground.resume();
				tlIconStartupCloudsBackground.resume();

			}

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





		if ( animIconInvisibleTransactions.hasClass("anim-play") ) {

			tlIconInvisibleTransactions.resume();

		} else {

			tlIconInvisibleTransactions.pause(0);

		} if ( animIconInvisibleTransactions.hasClass("no-pointer") && !tlIconInvisibleTransactions.isActive() ) {
			
			tlIconInvisibleTransactions.restart();

		}




		//removeIf(production)
		if ( animAirdrop.hasClass("anim-play") ) {

			tlAirdrop.resume();
			tlAirdropSway.resume();
			tlAirdropBoxSway.resume();

		} else {

			tlAirdrop.pause(0);
			tlAirdropSway.pause(0);
			tlAirdropBoxSway.pause(0);

		}
		//endRemoveIf(production)


	};
	

	/* -------------------------------------------------- */
	/* INTERACTIVE
	/* -------------------------------------------------- */

	animIcon.on("mouseover touchstart touchmove", function() {
		"use strict";

		var self = $(this);

		self.addClass("no-pointer");

		animIconController();

	});


	/* -------------------------------------------------- */
	/* RUN
	/* -------------------------------------------------- */

	$$(pageContent).on("scrollstart", { latency: $updateInterval }, animIconPauseAll);
	$$(pageContent).on("scrollstop", { latency: $updateInterval }, animIconController);

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
