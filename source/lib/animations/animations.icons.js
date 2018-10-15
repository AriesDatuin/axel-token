/* -------------------------------------------------- */
/* CACHE SELECTORS
/* -------------------------------------------------- */

var	animIcon = $("svg.anim"),

	//animIconMagnifyingGlass = $("#icon-magnifying-glass"),
	animIconFingerprint = $("#icon-fingerprint"),
	animIconHacker = $("#icon-hacker"),
	animIconEye = $("#icon-sauron"),

	animIconAnonymity = $("#icon-anonymity"),
	animIconReputation = $("#icon-reputation"),
	animIconPublicDecentralization = $("#icon-public-decentralization"),

	animIconDataCenters = $("#icon-data-centers"),
	animIconGettingTokens = $("#icon-getting-tokens"),
	animIconFullyProtected = $("#icon-fully-protected"),

	animIconDualChainArchitecture = $("#icon-dual-chain-architecture"),
	animIconWitnessPool = $("#icon-witness-pool"),
	animIconWeightedReputationSystem = $("#icon-weighted-reputation-system"),
	animIconUnification = $("#icon-unification"),

	animIconMiddlemen = $("#icon-middlemen"),
	animIconTransactions = $("#icon-transactions")

	animIconSellAnything = $("#icon-sell-anything"),
	animIconStartup = $("#icon-startup"),
	animIconNoHostageSituations = $("#icon-no-hostage-situations"),
	animIconGlobalDecentralizedSelling = $("#icon-global-decentralized-selling"),
	animIconInvisibleTransactions = $("#icon-invisible-transactions");


/* -------------------------------------------------- */
/* FINGERPRINT
/* -------------------------------------------------- */

var tlIconFingerprint = new TimelineMax({paused: true, yoyo: true});
	tlIconFingerprint.staggerTo(animIconFingerprint.children(), 0.25, {autoAlpha: 0, y: -10, scale: 0, transformOrigin: "center center", ease: Expo.easeIn}, 0.12)
					 .staggerTo(animIconFingerprint.children(), 0.75, {autoAlpha: 1, y: 0, scale: 1, ease: Expo.easeInOut}, -0.12)
					 .add(animComplete);


/* -------------------------------------------------- */
/* HACKER
/* -------------------------------------------------- */

var tlIconHacker = new TimelineMax({paused: true, yoyo: true, repeat: 2});
	tlIconHacker.to(animIconHacker.find("#hacker-head"), 1, {y: 8, delay: 0, ease: Bounce.easeOut})
				.to(animIconHacker.find("#hacker-head"), 1, {y: 4, ease: Back.easeOut})
				.add(animComplete);


/* -------------------------------------------------- */
/* SAURON
/* -------------------------------------------------- */

var tlIconEye = new TimelineMax({paused: true, yoyo: true, repeat: 2});
	tlIconEye.to(animIconEye.find("#pupil"), 0.5, {rotation: -90, transformOrigin: "center center", ease: Expo.easeOut})
			 .to(animIconEye.find("#pupil"), 0.25, {rotation: 0, ease: Expo.easeOut})
			 .to(animIconEye, 0.15, {scaleY: 0, ease: Expo.easeIn})
			 .to(animIconEye, 0.15, {scaleY: 1, ease: Expo.easeIn})
			 .to(animIconEye.find("#pupil"), 0.25, {rotation: 90, ease: Expo.easeOut})
			 .to(animIconEye.find("#pupil"), 0.25, {rotation: 60, ease: Expo.easeOut})
			 .to(animIconEye.find("#pupil"), 0.5, {rotation: -90, ease: Expo.easeOut})
			 .to(animIconEye, 0.15, {scaleY: 0, ease: Expo.easeIn})
			 .to(animIconEye, 0.15, {scaleY: 1, ease: Expo.easeIn})
			 .add(animComplete);


/* -------------------------------------------------- */
/* ANONYMITY
/* -------------------------------------------------- */

var tlIconAnonymity = new TimelineMax({paused: true});
	tlIconAnonymity.staggerFrom(animIconAnonymity.find("#doc").children(), 0.25, {autoAlpha: 0, ease: Back.easeOut}, 0.12)
				   .staggerFrom(animIconAnonymity.find("#profile").children(), 0.25, {autoAlpha: 0, scale: 0.5, transformOrigin: "top left", ease: Back.easeOut}, 0.12)
				   .staggerFrom(animIconAnonymity.find("#doc-lines").children(), 0.25, {autoAlpha: 0, scaleX: 0, transformOrigin: "left center", ease: Expo.easeOut}, -0.12, "-=0.75")
				   .set(animIconAnonymity.find("#padlock").find("#padlock-bar"), {y: -6}, "-=0.75")
				   .from(animIconAnonymity.find("#padlock"), 0.25, {autoAlpha: 0, scale: 0.5, transformOrigin: "center center", ease: Back.easeOut}, "-=0.75")
				   .to(animIconAnonymity.find("#padlock").find("#padlock-bar"), 0.25, {y: 0, ease: Back.easeOut}, "-=0.5")
				   .add(animComplete);


/* -------------------------------------------------- */
/* REPUTATION
/* -------------------------------------------------- */

var tlIconReputation = new TimelineMax({paused: true});
	tlIconReputation.from(animIconReputation.find("#cert"), 0.25, {autoAlpha: 0, scale: 0.25, transformOrigin: "center center", ease: Back.easeOut})
				    .staggerFrom(animIconReputation.find("#cert-lines").children(), 0.25, {autoAlpha: 0, scaleX: 0, transformOrigin: "left center", ease: Expo.easeOut}, -0.12, "-=0.25")
				    .from(animIconReputation.find("#ribbon-outer"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, "-=0.75")
				    .from(animIconReputation.find("#ribbon-inner"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, "-=0.75")
				    .from(animIconReputation.find("#ribbon-taper-01"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "top center", ease: Back.easeOut}, "-=0.5")
				    .from(animIconReputation.find("#ribbon-taper-02"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "top center", ease: Back.easeOut}, "-=0.25")
				    .add(animComplete);


/* -------------------------------------------------- */
/* PUBLIC DECENTRALIZATION
/* -------------------------------------------------- */

var tlIconPublicDecentralization = new TimelineMax({paused: true});
	tlIconPublicDecentralization.staggerFrom(animIconPublicDecentralization.find("#segments").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, 0.12)
				    	  		.staggerFrom(animIconPublicDecentralization.find("#public-decentralization-nodes").children(), 0.75, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, 0.12, "-=1")
				    	  		.add(animComplete);


/* -------------------------------------------------- */
/* DATA CENTERS
/* -------------------------------------------------- */

var tlIconDataCenters = new TimelineMax({paused: true});
	tlIconDataCenters.to(animIconDataCenters.find("#globe"), 0.5, {autoAlpha: 0, scale: 0.9, transformOrigin: "center center", ease: Back.easeOut}, "group-01")
					 .staggerTo(animIconDataCenters.find("#data-center-nodes").children(), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, -0.12, "group-01")

					 .staggerTo(animIconDataCenters.find("#data-center-nodes").children(), 0.5, {autoAlpha: 1, scale: 1, transformOrigin: "center center", ease: Back.easeOut}, 0.12)
					 .to(animIconDataCenters.find("#globe"), 0.5, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, "-=0.5")
					 .add(animComplete);


/* -------------------------------------------------- */
/* GETTING TOKENS
/* -------------------------------------------------- */

var tlIconGettingTokens = new TimelineMax({paused: true, repeat: 1});
	tlIconGettingTokens.to(animIconGettingTokens.find("#token"), 0.5, {y: 10, scaleX: 1, scaleY: 0.75, transformOrigin: "bottom center", ease: Back.easeOut})
					   .to(animIconGettingTokens.find("#hand"), 0.5, {rotation: 10, transformOrigin: "left bottom", ease: Back.easeOut}, "-=0.5")

					   .to(animIconGettingTokens.find("#token"), 0.5, {y: -18, scaleX: 0.75, scaleY: 1, transformOrigin: "center center", ease: Back.easeOut})
					   .to(animIconGettingTokens.find("#hand"), 0.5, {rotation: 0, ease: Back.easeOut}, "-=0.5")

					   .to(animIconGettingTokens.find("#hand"), 0.5, {rotation: 5, ease: Back.easeOut})
					   .to(animIconGettingTokens.find("#token"), 0.25, {y: 0, scaleX: 1, scaleY: 1, ease: Back.easeOut.config(1.7) }, "-=0.5")
					   .add(animComplete);


/* -------------------------------------------------- */
/* FULLY PROTECTED
/* -------------------------------------------------- */

var tlIconFullyProtected = new TimelineMax({paused: true});
	tlIconFullyProtected.to(animIconFullyProtected.find("#check"), 0.5, {autoAlpha: 0, scale: 0, rotation: 90, transformOrigin: "center center", ease: Back.easeOut})
						.to(animIconFullyProtected.find("#radio"), 0.5, {autoAlpha: 0, rotation: 360, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, "-=0.25")
						.to(animIconFullyProtected.find("#shield-left-face"), 0.5, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Expo.easeOut}, "-=0.5")
						.to(animIconFullyProtected.find("#shield"), 0.5, {autoAlpha: 0, scale: 0.75, transformOrigin: "center center", ease: Back.easeOut}, "-=0.5")

						.to(animIconFullyProtected.find("#shield"), 0.5, {autoAlpha: 1, scale: 1, ease: Back.easeOut})
						.to(animIconFullyProtected.find("#shield-left-face"), 0.5, {autoAlpha: 1, scale: 1, ease: Expo.easeOut}, "-=0.25")
						.to(animIconFullyProtected.find("#radio"), 0.5, {autoAlpha: 1, rotation: 0, scale: 1, ease: Back.easeOut}, "-=0.25")
						.to(animIconFullyProtected.find("#check"), 0.5, {autoAlpha: 1, scale: 1, rotation: 0, ease: Back.easeOut}, "-=0.25")
						.add(animComplete);
						

/* -------------------------------------------------- */
/* DUAL-CHAIN ARCHITECTURE
/* -------------------------------------------------- */

var tlIconDualChainArchitecture = new TimelineMax({paused: true});
	tlIconDualChainArchitecture.staggerFromTo(animIconDualChainArchitecture.find("#cube-top-side").children(), 1, {autoAlpha: 0, y: -10},
																												  {autoAlpha: 1, y: 0, ease: Expo.easeInOut}, 0.15, "group-01")

							   .staggerFromTo(animIconDualChainArchitecture.find("#cube-left-side").children(), 1, {autoAlpha: 0, x: -10},
																												   {autoAlpha: 1, x: 0, ease: Expo.easeInOut}, 0.15, "group-01")

							   .staggerFromTo(animIconDualChainArchitecture.find("#cube-right-side").children(), 1, {autoAlpha: 0, x: 10, y: 10},
																													{autoAlpha: 1, x: 0, y: 0, ease: Expo.easeInOut}, 0.15, "group-01")
							   .add(animComplete);


/* -------------------------------------------------- */
/* WITNESS POOL
/* -------------------------------------------------- */

var tlIconWitnessPool = new TimelineMax({paused: true});
	tlIconWitnessPool.staggerTo(animIconWitnessPool.children().children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.12)
					 .staggerTo(animIconWitnessPool.children().children(), 1, {autoAlpha: 1, ease: Expo.easeOut}, -0.12)
					 .add(animComplete);


/* -------------------------------------------------- */
/* WEIGHTED REPUTATION SYSTEM
/* -------------------------------------------------- */

var tlIconWeightedReputationSystem = new TimelineMax({paused: true});
	tlIconWeightedReputationSystem.to(animIconWeightedReputationSystem.find("#star-02"), 1, {scale: 1.25, transformOrigin: "bottom center", ease: Elastic.easeOut}, "group-01")
								  .to(animIconWeightedReputationSystem.find("#scale"), 1, {rotation: 5, transformOrigin: "center center", ease: Bounce.easeOut}, "group-01")

								  .to(animIconWeightedReputationSystem.find("#star-01"), 1, {scale: 1.5, transformOrigin: "bottom center", ease: Elastic.easeOut}, "group-02")
								  .to(animIconWeightedReputationSystem.find("#scale"), 1, {rotation: -10, ease: Bounce.easeOut}, "group-02")

								  .to(animIconWeightedReputationSystem.find("#star-02"), 1, {scale: 1.75, ease: Elastic.easeOut}, "group-03")
								  .to(animIconWeightedReputationSystem.find("#scale"), 1, {rotation: 15, ease: Bounce.easeOut}, "group-03")

								  .to(animIconWeightedReputationSystem.find("#star-01"), 1, {scale: 1, ease: Elastic.easeOut}, "group-04")
								  .to(animIconWeightedReputationSystem.find("#star-02"), 1, {scale: 1, ease: Elastic.easeOut}, "group-04")
								  .to(animIconWeightedReputationSystem.find("#scale"), 1, {rotation: 0, ease: Bounce.easeOut}, "group-04")
								  .add(animComplete);


/* -------------------------------------------------- */
/* UNIFICATION
/* -------------------------------------------------- */

var tlIconUnification = new TimelineMax({paused: true});
	tlIconUnification.fromTo(animIconUnification.find("#piece-tl"), 0.5, {autoAlpha: 0, x: -25, y: -25, rotation: -36, delay: 2, transformOrigin: "center center"},
																	  	 {autoAlpha: 1, x: 0, y: 0, rotation: 0, ease: Expo.easeOut}, "-=0.12")

					 .fromTo(animIconUnification.find("#piece-bl"), 0.5, {autoAlpha: 0, x: -25, y: 25, rotation: 36, transformOrigin: "center center"},
																	   	 {autoAlpha: 1, x: 0, y: 0, rotation: 0, ease: Expo.easeOut}, "-=0.12")

					 .fromTo(animIconUnification.find("#piece-br"), 0.5, {autoAlpha: 0, x: 25, y: 25, rotation: -36, transformOrigin: "center center"},
																		 {autoAlpha: 1, x: 0, y: 0, rotation: 0, ease: Expo.easeOut}, "-=0.12")

					 .fromTo(animIconUnification.find("#piece-tr"), 0.5, {autoAlpha: 0, x: 25, y: -25, rotation: 36, transformOrigin: "center center"},
																		 {autoAlpha: 1, x: 0, y: 0, rotation: 0, ease: Expo.easeOut}, "-=0.12")
					 .add(animComplete);


/* -------------------------------------------------- */
/* MIDDLEMEN
/* -------------------------------------------------- */

TweenMax.set(animIconMiddlemen.find("#person"), {autoAlpha: 1, scaleY: 0, transformOrigin: "bottom center"})
TweenMax.set(animIconMiddlemen.find("#middleman"), {autoAlpha: 0, scaleY: 0, transformOrigin: "bottom center"})

var tlIconMiddlemen = new TimelineMax({paused: true});
	tlIconMiddlemen.to(animIconMiddlemen.find("#middleman"), 0.25, {autoAlpha: 1, scaleY: 1, ease: Back.easeOut})
				   .to(animIconMiddlemen.find("#middleman"), 0.5, {autoAlpha: 0, scaleY: 0, delay: 1, ease: Back.easeOut})
				   .to(animIconMiddlemen.find("#person"), 0.25, {autoAlpha: 1, scaleY: 1, delay: 0, ease: Back.easeOut})
				   .add(animComplete);


/* -------------------------------------------------- */
/* TRANSACTIONS
/* -------------------------------------------------- */

var tlIconTransactions = new TimelineMax({paused: true});
	tlIconTransactions.staggerFromTo(animIconTransactions.find("#p2p-bars").children(), 0.25, {scaleY: 0, transformOrigin: "bottom center"}, {scale: 1, ease: Back.easeOut}, -0.12)
					  .fromTo(animIconTransactions.find("#p2p-person"), 0.25, {scaleY: 0, transformOrigin: "bottom center"}, {scale: 1, ease: Back.easeOut})
					  .add(animComplete);


/* -------------------------------------------------- */
/* SELL ANYTHING
/* -------------------------------------------------- */

var tlIconSellAnything = new TimelineMax({paused: true});
	tlIconSellAnything.to(animIconSellAnything.find("#content-dollar-sign"), 0.5, {autoAlpha: 0, scale: 0, rotation: -36, transformOrigin: "center center", delay: 0.5, ease: Back.easeOut})

					  .staggerFromTo(animIconSellAnything.find("#content-blog").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "left center", ease: Back.easeOut}, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, 0.12)
					  .to(animIconSellAnything.find("#content-blog"), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", delay: 0.75, ease: Back.easeOut})

					  .staggerFromTo(animIconSellAnything.find("#content-video").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, -0.12)
					  .to(animIconSellAnything.find("#content-video"), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", delay: 0.75, ease: Back.easeOut})

					  .staggerFromTo(animIconSellAnything.find("#content-photo").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, 0.12)
					  .to(animIconSellAnything.find("#content-photo"), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", delay: 0.75, ease: Back.easeOut})

					  .to(animIconSellAnything.find("#content-dollar-sign"), 0.25, {autoAlpha: 1, scale: 1, rotation: 0, delay: 0.25, ease: Back.easeOut})
					  .add(animComplete);


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
var tlIconStartupRocket = new TimelineMax({paused: true, yoyo: true, repeat: -1});
	tlIconStartupRocket.to(animIconStartup.find("#rocket"), 0.12, {x: - 1, rotation: - 2, ease: Linear.easeNone});


// FLAMES LOOP
var tlIconStartupFlames = new TimelineMax({paused: true, yoyo: true, repeat: -1});
	tlIconStartupFlames.to(animIconStartup.find("#flames"), 0.2, {autoAlpha: 0.75, scaleX: -1, ease: Linear.easeNone});


// CLOUDS FOREGROUND LOOP
var tlIconStartupCloudsForeground = new TimelineMax({paused: true, repeat: -1});
	tlIconStartupCloudsForeground.set(animIconStartup.find("#clouds-foreground"), {autoAlpha: 0.5, y: -100})
								 .to(animIconStartup.find("#clouds-foreground"), 2, {y: 100, ease: Linear.easeNone});


// CLOUDS BACKGROUND LOOP
var tlIconStartupCloudsBackground = new TimelineMax({paused: true, repeat: -1});
	tlIconStartupCloudsBackground.set(animIconStartup.find("#clouds-background"), {autoAlpha: 0.25, y: -100})
								 .to(animIconStartup.find("#clouds-background"), 6, {y: 100, ease: Linear.easeNone});


// SCENE
var tlIconStartupLanding = new TimelineMax({paused: true});
	tlIconStartupLanding.to(animIconStartup.find("#clouds"), 1, {display: "none", opacity: 0, delay: 0, ease: Expo.easeOut}, "anim-icon-landing")

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

						}, "-=1")

						.add(animComplete);


var tlIconStartup = new TimelineMax({paused: true, onStart: function() { tlIconStartupRocket.resume(); } });
	tlIconStartup.to(animIconStartup.find("#rocket"), 0.25, {scaleX: 1, scaleY: 0.75, ease: Back.easeOut}, "anim-icon-launch")
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



				 .to(animIconStartup.find("#clouds"), 0.5, {display: "none", opacity: 0, delay: 3, ease: Expo.easeOut}, "anim-icon-landing")
				 .to(animIconStartup.find("#rocket"), 2, {y: 25, scaleX: 1, scaleY: 1, ease: Expo.easeInOut})
				 .set(animIconStartup.find("#exhaust"), {autoAlpha: 1, scaleX: 1, scaleY: 1}, "-=1")
				 .to(animIconStartup.find("#exhaust"), 0.75, {autoAlpha: 0, scaleX: 2, scaleY: 0, ease: Expo.easeOut}, "-=1")
				 .to(animIconStartup.find("#flames"), 0.25, {autoAlpha: 0, scaleY: 0, transformOrigin: "bottom center", ease: Expo.easeOut,

																onComplete: function() {

																	tlIconStartupRocket.pause(0);
																	tlIconStartupFlames.pause(0);
																	tlIconStartupCloudsForeground.pause(0);
																	tlIconStartupCloudsBackground.pause(0);

																}

				 }, "-=1");


/* -------------------------------------------------- */
/* NO HOSTAGE SITUATIONS
/* -------------------------------------------------- */

var tlIconNoHostageSituations = new TimelineMax({paused: true, yoyo: true});
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
							 .to(animIconNoHostageSituations.find("#handshake"), 0.25, {y: 0, ease: Back.easeOut})
							 .add(animComplete);


/* -------------------------------------------------- */
/* GLOBAL DECENTRALIZED SELLING
/* -------------------------------------------------- */

var tlIconGlobalDecentralizedSelling = new TimelineMax({paused: true, yoyo: true});
	tlIconGlobalDecentralizedSelling.fromTo(animIconGlobalDecentralizedSelling.children().find("#gds-mobile-left"), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center"},
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
									.add(animComplete);


/* -------------------------------------------------- */
/* INVISIBLE TRANSACTIONS
/* -------------------------------------------------- */

var tlIconInvisibleTransactions = new TimelineMax({paused: true, yoyo: true});
	tlIconInvisibleTransactions.to(animIconInvisibleTransactions.find("#visible-pupil"), 0.5, {rotation: -90, transformOrigin: "center center", delay: 1, ease: Expo.easeOut})
							   .to(animIconInvisibleTransactions.find("#visible-pupil"), 0.25, {rotation: 0, ease: Expo.easeOut})

							   .to(animIconInvisibleTransactions.find("#visible-pupil"), 0.5, {rotation: 90, transformOrigin: "center center", ease: Expo.easeOut})
							   .to(animIconInvisibleTransactions.find("#visible-pupil"), 0.25, {rotation: 0, ease: Expo.easeOut})

							   .to(animIconInvisibleTransactions.find("#visible-pupil"), 0.5, {rotation: -90, transformOrigin: "center center", delay: 1, ease: Expo.easeOut})
							   .to(animIconInvisibleTransactions.find("#visible-pupil"), 0.25, {rotation: 0, ease: Expo.easeOut})

							   .set(animIconInvisibleTransactions.find("#creepy-eye"), {autoAlpha: 0})

							   .fromTo(animIconInvisibleTransactions.find("#blind-eye"), 0.25, {autoAlpha: 0},
							   								   								   {autoAlpha: 1, ease: Expo.easeOut}, "-=0.25")

							   .fromTo(animIconInvisibleTransactions.find("#cross-out"), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "top right"},
																						   	   {autoAlpha: 1, scale: 1, ease: Expo.easeOut})
							   .add(animComplete);


/* -------------------------------------------------- */
/* MASTER TIMELINE
/* -------------------------------------------------- */

/*
var tlMasterTimelineScenes = new TimelineMax();
	tlMasterTimelineScenes.add( tlIconFingerprint )
						  .add( tlIconHacker )
						  .add( tlIconEye )

						  .add( tlIconAnonymity )
						  .add( tlIconReputation )
						  .add( tlIconPublicDecentralization )

						  .add( tlIconDataCenters )
						  .add( tlIconGettingTokens )
						  .add( tlIconFullyProtected )

						  .add( tlIconDualChainArchitecture )
						  .add( tlIconWitnessPool )
						  .add( tlIconWeightedReputationSystem )
						  .add( tlIconUnification )

						  .add( tlIconMiddlemen )
						  .add( tlIconTransactions )

						  .add( tlIconSellAnything )
						  .add( tlIconStartupLaunch )
						  .add( tlIconNoHostageSituations )
						  .add( tlIconGlobalDecentralizedSelling )
						  .add( tlIconInvisibleTransactions );

*/


/* -------------------------------------------------- */
/* ANIMATION OBSERVER
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	/*
	function animIconPlayAll() {
		"use strict";

		//tlMasterTimelineScenes.pause();

		tlIconFingerprint.play();
		tlIconHacker.play();
		tlIconEye.play();
		tlIconAnonymity.play();
		tlIconReputation.play();
		tlIconPublicDecentralization.play();
		tlIconDataCenters.play();
		tlIconGettingTokens.play();
		tlIconFullyProtected.play();
		tlIconDualChainArchitecture.play();
		tlIconWitnessPool.pause();
		tlIconWeightedReputationSystem.play();
		tlIconUnification.play();
		tlIconMiddlemen.play();
		tlIconTransactions.play();
		tlIconSellAnything.play();


		if ( !tlIconStartupLaunch.isActive() ) {

			tlIconStartupLaunch.play();

			if ( !tlIconStartupLaunch.paused() ) {

				tlIconStartupRocket.play();
				tlIconStartupFlames.play();
				tlIconStartupCloudsForeground.play();
				tlIconStartupCloudsBackground.play();
				
			}

		}


		tlIconNoHostageSituations.play();
		tlIconGlobalDecentralizedSelling.play();
		tlIconInvisibleTransactions.play();

	};
	*/

	
	function animIconPauseAll() {
		"use strict";

		//tlMasterTimelineScenes.pause();

		tlIconFingerprint.pause();
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


		if ( tlIconStartup.isActive() ) {

			tlIconStartup.pause();

			if ( tlIconStartup.paused() ) {

				tlIconStartupRocket.pause();
				tlIconStartupFlames.pause();
				tlIconStartupCloudsForeground.pause();
				tlIconStartupCloudsBackground.pause();
				
			}

		}


		tlIconNoHostageSituations.pause();
		tlIconGlobalDecentralizedSelling.pause();
		tlIconInvisibleTransactions.pause();

	};


	/* -------------------------------------------------- */
	/* CONTROLLER
	/* -------------------------------------------------- */

	function animIconController() {
		"use strict";
		//console.log("Playing animations in view.");

		if ( animIconFingerprint.hasClass("anim-play") ) {
			
			tlIconFingerprint.resume();

		} else {

			tlIconFingerprint.pause(0);

		} if ( animIconFingerprint.hasClass("anim-interact") && animIconFingerprint.hasClass("no-pointer") && !tlIconFingerprint.isActive() ) {
			
			tlIconFingerprint.restart();

		}





		if ( animIconHacker.hasClass("anim-play") ) {

			tlIconHacker.resume();

		} else {

			tlIconHacker.pause(0);

		} if ( animIconHacker.hasClass("anim-interact") && animIconHacker.hasClass("no-pointer") && !tlIconHacker.isActive() ) {
			
			tlIconHacker.restart();

		}





		if ( animIconEye.hasClass("anim-play") ) {

			tlIconEye.resume();

		} else {

			tlIconEye.pause(0);

		} if ( animIconEye.hasClass("anim-interact") && animIconEye.hasClass("no-pointer") && !tlIconEye.isActive() ) {
			
			tlIconEye.restart();

		}





		if ( animIconAnonymity.hasClass("anim-play") ) {

			tlIconAnonymity.resume();

		} else {

			tlIconAnonymity.pause(0);

		} if ( animIconAnonymity.hasClass("anim-interact") && animIconAnonymity.hasClass("no-pointer") && !tlIconAnonymity.isActive() ) {
			
			tlIconAnonymity.restart();

		}





		if ( animIconReputation.hasClass("anim-play") ) {

			tlIconReputation.resume();

		} else {

			tlIconReputation.pause(0);

		} if ( animIconReputation.hasClass("anim-interact") && animIconReputation.hasClass("no-pointer") && !tlIconReputation.isActive() ) {
			
			tlIconReputation.restart();

		}





		if ( animIconPublicDecentralization.hasClass("anim-play") ) {

			tlIconPublicDecentralization.resume();

		} else {

			tlIconPublicDecentralization.pause(0);

		} if ( animIconPublicDecentralization.hasClass("anim-interact") && animIconPublicDecentralization.hasClass("no-pointer") && !tlIconPublicDecentralization.isActive() ) {
			
			tlIconPublicDecentralization.restart();

		}





		if ( animIconDataCenters.hasClass("anim-play") ) {

			tlIconDataCenters.resume();

		} else {

			tlIconDataCenters.pause(0);

		} if ( animIconDataCenters.hasClass("anim-interact") && animIconDataCenters.hasClass("no-pointer") && !tlIconDataCenters.isActive() ) {
			
			tlIconDataCenters.restart();

		}





		if ( animIconGettingTokens.hasClass("anim-play") ) {

			tlIconGettingTokens.resume();

		} else {

			tlIconGettingTokens.pause(0);

		} if ( animIconGettingTokens.hasClass("anim-interact") && animIconGettingTokens.hasClass("no-pointer") && !tlIconGettingTokens.isActive() ) {
			
			tlIconGettingTokens.restart();

		}





		if ( animIconFullyProtected.hasClass("anim-play") ) {

			tlIconFullyProtected.resume();

		} else {

			tlIconFullyProtected.pause(0);

		} if ( animIconFullyProtected.hasClass("anim-interact") && animIconFullyProtected.hasClass("no-pointer") && !tlIconFullyProtected.isActive() ) {
			
			tlIconFullyProtected.restart();

		}





		if ( animIconDualChainArchitecture.hasClass("anim-play") ) {

			tlIconDualChainArchitecture.resume();

		} else {

			tlIconDualChainArchitecture.pause(0);

		} if ( animIconDualChainArchitecture.hasClass("anim-interact") && animIconDualChainArchitecture.hasClass("no-pointer") && !tlIconDualChainArchitecture.isActive() ) {

 			//tlIconDualChainArchitecture.reversed() ? tlIconDualChainArchitecture.play() : tlIconDualChainArchitecture.reverse();
			
			tlIconDualChainArchitecture.restart();


		}





		if ( animIconWitnessPool.hasClass("anim-play") ) {

			tlIconWitnessPool.resume();

		} else {

			tlIconWitnessPool.pause(0);

		} if ( animIconWitnessPool.hasClass("anim-interact") && animIconWitnessPool.hasClass("no-pointer") && !tlIconWitnessPool.isActive() ) {
			
			tlIconWitnessPool.restart();

		}





		if ( animIconWeightedReputationSystem.hasClass("anim-play") ) {

			tlIconWeightedReputationSystem.resume();

		} else {

			tlIconWeightedReputationSystem.pause(0);

		} if ( animIconWeightedReputationSystem.hasClass("anim-interact") && animIconWeightedReputationSystem.hasClass("no-pointer") && !tlIconWeightedReputationSystem.isActive() ) {
			
			tlIconWeightedReputationSystem.restart();

		}





		if ( animIconUnification.hasClass("anim-play") ) {

			tlIconUnification.resume();

		} else {

			tlIconUnification.pause(0);

		} if ( animIconUnification.hasClass("anim-interact") && animIconUnification.hasClass("no-pointer") && !tlIconUnification.isActive() ) {
			
			tlIconUnification.restart();

		}





		if ( animIconMiddlemen.hasClass("anim-play") ) {

			tlIconMiddlemen.resume();

		} else {

			tlIconMiddlemen.pause(0);

		} if ( animIconMiddlemen.hasClass("anim-interact") && animIconMiddlemen.hasClass("no-pointer") && !tlIconMiddlemen.isActive() ) {
			
			tlIconMiddlemen.restart();

		}





		if ( animIconTransactions.hasClass("anim-play") ) {

			tlIconTransactions.resume();

		} else {

			tlIconTransactions.pause(0);

		} if ( animIconTransactions.hasClass("anim-interact") && animIconTransactions.hasClass("no-pointer") && !tlIconTransactions.isActive() ) {
			
			tlIconTransactions.restart();

		}





		if ( animIconSellAnything.hasClass("anim-play") ) {

			tlIconSellAnything.resume();

		} else {

			tlIconSellAnything.pause(0);

		} if ( animIconSellAnything.hasClass("anim-interact") && animIconSellAnything.hasClass("no-pointer") && !tlIconSellAnything.isActive() ) {
			
			tlIconSellAnything.restart();

		}





		if ( animIconStartup.hasClass("anim-play") ) {

			tlIconStartup.resume();
			
			if ( !tlIconStartup.paused() && tlIconStartup.isActive() ) {

				tlIconStartupRocket.resume();
				tlIconStartupFlames.resume();
				tlIconStartupCloudsForeground.resume();
				tlIconStartupCloudsBackground.resume();

			}

		} else {

			tlIconStartup.pause(0);

		} if ( animIconStartup.hasClass("anim-interact") && animIconStartup.hasClass("no-pointer") && !tlIconStartup.isActive() ) {
			
			tlIconStartup.restart();

		}





		if ( animIconNoHostageSituations.hasClass("anim-play") ) {

			tlIconNoHostageSituations.resume();

		} else {

			tlIconNoHostageSituations.pause(0);

		} if ( animIconNoHostageSituations.hasClass("anim-interact") && animIconNoHostageSituations.hasClass("no-pointer") && !tlIconNoHostageSituations.isActive() ) {
			
			tlIconNoHostageSituations.restart();

		}





		if ( animIconGlobalDecentralizedSelling.hasClass("anim-play") ) {

			tlIconGlobalDecentralizedSelling.resume();

		} else {

			tlIconGlobalDecentralizedSelling.pause(0);

		} if ( animIconGlobalDecentralizedSelling.hasClass("anim-interact") && animIconGlobalDecentralizedSelling.hasClass("no-pointer") && !tlIconGlobalDecentralizedSelling.isActive() ) {
			
			tlIconGlobalDecentralizedSelling.restart();

		}





		if ( animIconInvisibleTransactions.hasClass("anim-play") ) {

			tlIconInvisibleTransactions.resume();

		} else {

			tlIconInvisibleTransactions.pause(0);

		} if ( animIconInvisibleTransactions.hasClass("anim-interact") && animIconInvisibleTransactions.hasClass("no-pointer") && !tlIconInvisibleTransactions.isActive() ) {
			
			tlIconInvisibleTransactions.restart();

		}


	};
	

	/* -------------------------------------------------- */
	/* RUN
	/* -------------------------------------------------- */

	if ( !$isExplorer ) {

		var animIcons = document.querySelectorAll("svg.anim");


		var animIconOptions = {
			root: null,
			rootMargin: "0px",
			threshold: [1.0, 1.0, 1.0, 1.0]
		}


		animIconObserver = new IntersectionObserver(function (entries) {

			entries.forEach(function (entry) {

				if (entry.intersectionRatio > 0) {

					//observer.unobserve(entry.target);
					entry.target.classList.add("anim-play");

					$$(pageContent).on("scrollstart", { latency: $updateInterval }, animIconPauseAll);
					$$(pageContent).on("scrollstop", { latency: $updateInterval }, animIconController);

					//animIconController();

				} else {

					entry.target.classList.remove("anim-play");
					animIconController();

				}
			}, animIconOptions);
		});

		animIcons.forEach(function (element) {

			animIconObserver.observe(element);

		});


		/* ES6
		animIconObserver = new IntersectionObserver(entries => {

			entries.forEach(entry => {

				if (entry.intersectionRatio > 0) {

					console.log("IN VIEW");
					observer.unobserve(entry.target);

					entry.target.classList.add("no-pointer");

					animIconController();

				} else {

					console.log("NOT IN VIEW");

					entry.target.classList.remove("no-pointer");

				}

			});

		});


		animIcons.forEach(element => {

			animIconObserver.observe(element);

		});
		*/

	} else {

		$$(pageContent).on("scrollstart", { latency: $updateInterval }, animIconPauseAll);
		$$(pageContent).on("scrollstop", { latency: $updateInterval }, animIconController);

		TweenMax.delayedCall($delayInterval + 2, animIconController);

	}
