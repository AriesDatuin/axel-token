/* -------------------------------------------------- */
/* CACHE SELECTORS
/* -------------------------------------------------- */

var	animIcon = $$("svg.anim"),

	animIconMagnifyingGlass = $$("#icon-magnifying-glass"),
	animIconHacker = $$("#icon-hacker"),
	animIconEye = $$("#icon-eye"),

	animIconAnonymity = $$("#icon-anonymity"),
	animIconReputation = $$("#icon-reputation"),
	animIconDecentralization = $$("#icon-decentralization"),

	animIconDataCenters = $$("#icon-data-centers"),
	animIconGettingTokens = $$("#icon-getting-tokens"),
	animIconFullyProtected = $$("#icon-fully-protected"),

	animIconDualChainArchitecture = $$("#icon-dual-chain-architecture"),
	animIconWitnessPool = $$("#icon-witness-pool"),
	animIconWeightedReputationSystem = $$("#icon-weighted-reputation-system"),
	animIconUnification = $$("#icon-unification");


/* -------------------------------------------------- */
/* FUNCTIONS
/* -------------------------------------------------- */

var animIconComplete = function() {
	console.log("Complete");

	//animIcon.removeClass("no-pointer");

}


/* -------------------------------------------------- */
/* PROPERTIES
/* -------------------------------------------------- */

TweenMax.set(animIcon, {transformOrigin: "center center"});


/* -------------------------------------------------- */
/* MAGNIFYING GLASS
/* -------------------------------------------------- */

var tlIconMagnifyingGlass = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconMagnifyingGlass.from(animIconMagnifyingGlass.find("#magnifying-glass"), 0.5, {autoAlpha: 0, scale: 0.5, rotation: 60, transformOrigin: "center center", delay: 1, ease: Back.easeOut})	
						 .staggerFrom(animIconMagnifyingGlass.find("#people").children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.12);


/* -------------------------------------------------- */
/* HACKER
/* -------------------------------------------------- */

var tlIconHacker = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: 5, onComplete: animIconComplete});
	tlIconHacker.to(animIconHacker.find("#hacker-head"), 1, {y: 8, delay: 0, ease: Bounce.easeOut})
				.to(animIconHacker.find("#hacker-head"), 1, {y: 4, ease: Back.easeOut});


/* -------------------------------------------------- */
/* SAURON
/* -------------------------------------------------- */

var tlIconEye = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: 1, onComplete: animIconComplete});
	tlIconEye.to(animIconEye.find("#pupil"), 0.5, {rotation: -90, transformOrigin: "center center", delay: 1, ease: Expo.easeOut})
			 .to(animIconEye.find("#pupil"), 0.25, {rotation: 0, ease: Expo.easeOut})
			 .to(animIconEye, 0.15, {scaleY: 0.25, ease: Expo.easeIn})
			 .to(animIconEye, 0.15, {scaleY: 1, ease: Expo.easeIn});


/* -------------------------------------------------- */
/* ANONYMITY
/* -------------------------------------------------- */

var tlIconAnonymity = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconAnonymity.staggerFrom(animIconAnonymity.find("#doc").children(), 0.5, {autoAlpha: 0, ease: Back.easeOut}, 0.12)
				   .staggerFrom(animIconAnonymity.find("#profile").children(), 0.25, {autoAlpha: 0, scale: 0.5, transformOrigin: "top left", ease: Back.easeOut}, 0.12)
				   .staggerFrom(animIconAnonymity.find("#lines").children(), 0.25, {autoAlpha: 0, scaleX: 0, transformOrigin: "left center", ease: Expo.easeOut}, -0.12, "-=0.75")
				   .set(animIconAnonymity.find("#padlock").find("#padlock-bar"), {y: -8})
				   .from(animIconAnonymity.find("#padlock"), 0.25, {autoAlpha: 0, scale: 0.75, transformOrigin: "center center", ease: Back.easeOut})
				   .to(animIconAnonymity.find("#padlock").find("#padlock-bar"), 0.25, {y: 0, ease: Back.easeOut});


/* -------------------------------------------------- */
/* REPUTATION
/* -------------------------------------------------- */

var tlIconReputation = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconReputation.from(animIconReputation.find("#doc"), 0.25, {autoAlpha: 0, scale: 0.75, transformOrigin: "center center", ease: Back.easeOut})
				    .staggerFrom(animIconReputation.find("#lines").children(), 0.25, {autoAlpha: 0, scaleX: 0, transformOrigin: "left center", ease: Expo.easeOut}, -0.12, "-=0.25")
				    .from(animIconReputation.find("#ribbon"), 1, {autoAlpha: 0, scale: 0.5, transformOrigin: "center center", ease: Elastic.easeOut});


/* -------------------------------------------------- */
/* DECENTRALIZATION
/* -------------------------------------------------- */

var tlIconDecentralization = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconDecentralization.staggerFrom(animIconDecentralization.find("#segments").children(), 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, 0.12)
				    	  .staggerFrom(animIconDecentralization.find("#nodes").children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.12, "-=0.75");


/* -------------------------------------------------- */
/* DATA CENTERS
/* -------------------------------------------------- */

var tlIconDataCenters = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconDataCenters.staggerFrom(animIconDataCenters.find("#nodes").children(), 1, {autoAlpha: 0, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, 0.12)
					 .from(animIconDataCenters.find("#globe"), 2, {autoAlpha: 0, ease: Expo.easeOut}, "-=0.5");


/* -------------------------------------------------- */
/* GETTING TOKENS
/* -------------------------------------------------- */

TweenMax.set(animIconGettingTokens.find("#token"), {autoAlpha: 0, y: -20, scaleX: 0.5, scaleY: 1.25, transformOrigin: "bottom center"});

var tlIconGettingTokens = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconGettingTokens.to(animIconGettingTokens.find("#token"), 0.25, {autoAlpha: 1, y: 10, scaleX: 1, scaleY: 0.75, ease: Back.easeOut})
					   ////.to(animIconGettingTokens.find("#token"), 1, {autoAlpha: 1, y: 0, directionalRotation: "0_cw", ease: Expo.easeOut})
					   ////.to(animIconGettingTokens.find("#hand"), 0.75, {rotation: -5, transformOrigin: "top left", ease: Expo.easeOut})
					   ////.to(animIconGettingTokens.find("#hand"), 0.25, {rotation: 0, ease: Expo.easeOut})
					   ////.to(animIconGettingTokens.find("#token"), 0.75, {y: 10, directionalRotation: "0_cw", ease: Expo.easeInOut}, "-=0.5")
					   .to(animIconGettingTokens.find("#hand"), 0.5, {rotation: 12, ease: Back.easeOut}, "-=0.25")

					   .to(animIconGettingTokens.find("#token"), 0.25,{y: -8, scaleY: 1, ease: Back.easeInOut})
					   .to(animIconGettingTokens.find("#token"), 0.25,{y: 0, scaleY: 1, ease: Back.easeInOut})

					   //.to(animIconGettingTokens.find("#hand"), 0.25, {rotation: -12, ease: Back.easeInOut}, "-=0.5")
					   .to(animIconGettingTokens.find("#hand"), 0.25, {rotation: 0, ease: Back.easeInOut}, "-=0.5");


/* -------------------------------------------------- */
/* FULLY PROTECTED
/* -------------------------------------------------- */

var tlIconFullyProtected = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconFullyProtected.from(animIconFullyProtected.find("#shield"), 0.5, {autoAlpha: 0, scale: 0.75, transformOrigin: "center center", delay: 1, ease: Back.easeOut})
						.from(animIconFullyProtected.find("#shield-left-face"), 0.25, {autoAlpha: 0, ease: Expo.easeOut}, "-=0.5")
						.from(animIconFullyProtected.find("#radio"), 0.5, {autoAlpha: 0, rotation: 360, scale: 0, transformOrigin: "center center", ease: Back.easeOut})
						.from(animIconFullyProtected.find("#check"), 0.5, {autoAlpha: 0, scale: 0, rotation: 90, transformOrigin: "center center", ease: Back.easeOut}, "-=0.25");


/* -------------------------------------------------- */
/* DUAL-CHAIN ARCHITECTURE
/* -------------------------------------------------- */

var tlIconDualChainArchitecture = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconDualChainArchitecture.from(animIconDualChainArchitecture.find("#chain-01"), 0.25, {autoAlpha: 0, x: 10, y: 10, scale: 0, transformOrigin: "center center", ease: Back.easeOut})
							   .from(animIconDualChainArchitecture.find("#chain-02"), 0.25, {autoAlpha: 0, x: -10, y: -10, scale: 0, transformOrigin: "center center", ease: Back.easeOut}, "-=0.25");


/* -------------------------------------------------- */
/* WITNESS POOL
/* -------------------------------------------------- */

var tlIconWitnessPool = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconWitnessPool.staggerFrom(animIconWitnessPool.children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.25)
					 .staggerTo(animIconWitnessPool.children().children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.12)
					 .staggerTo(animIconWitnessPool.children().children(), 1, {autoAlpha: 1, ease: Expo.easeOut}, -0.12);


/* -------------------------------------------------- */
/* WEIGHTED REPUTATION SYSTEM
/* -------------------------------------------------- */

var tlIconWeightedReputationSystem = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconWeightedReputationSystem.staggerFrom(animIconWeightedReputationSystem.children(), 1.25, {autoAlpha: 0, scale: 0, rotation: 36, transformOrigin: "center center", ease: Elastic.easeOut}, 0.12);


/* -------------------------------------------------- */
/* UNIFICATION
/* -------------------------------------------------- */

var tlIconUnification = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animIconComplete});
	tlIconUnification.from(animIconUnification.find("#chain-01"), 0.5, {autoAlpha: 0, x: 10, scale: 0.75, rotation: 60, transformOrigin: "center center", ease: Back.easeOut})
					 .from(animIconUnification.find("#chain-02"), 0.5, {autoAlpha: 0, x: -10, scale: 0.75, rotation: -60, transformOrigin: "center center", ease: Back.easeOut}, "-=0.5");








/* -------------------------------------------------- */
/* ANIMATION OBSERVER
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	var animIconPlayAll = function() {
		"use strict";


	};

	/*
	var animIconPauseAll = function() {
		"use strict";

		tlIconEye.pause();

	};
	*/


	/* -------------------------------------------------- */
	/* CONTROLLER
	/* -------------------------------------------------- */

	var animIconController = function() {
		"use strict";
		//console.log("Playing animations in view.");


		if ( animIconEye.hasClass("anim-play") ) {

			tlIconEye.play();

		} else {

			tlIconEye.pause(0);

		}





		if ( animIconHacker.hasClass("anim-play") ) {

			tlIconHacker.play();

		} else {

			tlIconHacker.pause(0);

		}





		if ( animIconMagnifyingGlass.hasClass("anim-play") ) {

			tlIconMagnifyingGlass.play();

		} else {

			tlIconMagnifyingGlass.pause(0);

		}





		if ( animIconAnonymity.hasClass("anim-play") ) {

			tlIconAnonymity.play();

		} else {

			tlIconAnonymity.pause(0);

		}





		if ( animIconReputation.hasClass("anim-play") ) {

			tlIconReputation.play();

		} else {

			tlIconReputation.pause(0);

		}





		if ( animIconDecentralization.hasClass("anim-play") ) {

			tlIconDecentralization.play();

		} else {

			tlIconDecentralization.pause(0);

		}





		if ( animIconDataCenters.hasClass("anim-play") ) {

			tlIconDataCenters.play();

		} else {

			tlIconDataCenters.pause(0);

		}





		if ( animIconGettingTokens.hasClass("anim-play") ) {

			tlIconGettingTokens.play();

		} else {

			tlIconGettingTokens.pause(0);

		}





		if ( animIconFullyProtected.hasClass("anim-play") ) {

			tlIconFullyProtected.play();

		} else {

			tlIconFullyProtected.pause(0);

		}





		if ( animIconDualChainArchitecture.hasClass("anim-play") ) {

			tlIconDualChainArchitecture.play();

		} else {

			tlIconDualChainArchitecture.pause(0);

		}





		if ( animIconWitnessPool.hasClass("anim-play") ) {

			tlIconWitnessPool.play();

		} else {

			tlIconWitnessPool.pause(0);

		}





		if ( animIconWeightedReputationSystem.hasClass("anim-play") ) {

			tlIconWeightedReputationSystem.play();

		} else {

			tlIconWeightedReputationSystem.pause(0);

		}





		if ( animIconUnification.hasClass("anim-play") ) {

			tlIconUnification.play();

		} else {

			tlIconUnification.pause(0);

		}







	};
	

	/* -------------------------------------------------- */
	/* INTERACTIVE
	/* -------------------------------------------------- */

	animIcon.on("mouseover touchdown", function() {
		"use strict";

		var self = $(this);

		self.addClass("no-pointer");

		animIconController();

	});


	/* -------------------------------------------------- */
	/* RUN
	/* -------------------------------------------------- */

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
