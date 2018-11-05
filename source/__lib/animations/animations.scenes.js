/* -------------------------------------------------- */
/* CACHE SELECTORS
/* -------------------------------------------------- */

var	animScene = $(".anim-scene"),
	animFloat = $(".anim-float"),
	animHorizontal = $(".anim-horizontal"),
	animRocket = $(".anim-rocket"),
	animStarWars = $(".anim-perspective-scroll");


/* -------------------------------------------------- */
/* FLOAT
/* -------------------------------------------------- */

function getRandomNum(min, max) {
	"use strict";
	
	return Math.floor(Math.random()*(max-min+1)+min);
    
}


animFloat.each(function(index, element) {

	var $randomNum = getRandomNum(1,5); 

	var tlFloat = new TimelineMax({paused: false, delay: $randomNum, yoyo: false, repeat: -1});
		tlFloat.to(element, $randomNum + 0.5, {y: 8, onComplete: getRandomNum, onCompleteParams: [1,5] })
			   .to(element, $randomNum + 0.5, {y: 0, onComplete: getRandomNum, onCompleteParams: [1,5] })
			   .add(animComplete);
	
});


/* -------------------------------------------------- */
/* HORIZONTAL SCROLL
/* -------------------------------------------------- */

animHorizontal.children().clone().insertBefore(animHorizontal.children());

//animHorizontal.find(":nth-child(2)").addClass("flip-x");

//animHorizontal.children().clone().append( animHorizontal.children() );

//$(this).children().css({"width" : $$(window).innerWidth + "px" })
//$(this).css({"width" : $$(window).innerWidth * 2 + "px" })

var tlScrollHorizontal = new TimelineMax({paused: true, repeat: -1});
	tlScrollHorizontal.to(animHorizontal.children(), 75, {x: "-100%", ease: Linear.easeNone, onComplete: function() { TweenMax.set(animHorizontal.children(), {x: 0}); } })
					  .add(animComplete);


// Create a function to recalculate the width on 'resize'.
var animHorizontalResize = function() {

	animHorizontal.children().css({"width" : $$(window).innerWidth + "px" });
	animHorizontal.css({"width" : $$(window).innerWidth * 2 + "px" });
	
	//TweenMax.from(animHorizontal, 0.5, {autoAlpha: 0, ease: Power4.easeInOut});
	
};

animHorizontalResize();

$$(window).on("resize", _.debounce(animHorizontalResize, $updateInterval));


/* -------------------------------------------------- */
/* ROCKET LAUNCH
/* -------------------------------------------------- */

var tlRocketRattle = new TimelineMax({paused: true, repeat: -1});
	tlRocketRattle.to(animRocket, 0.1, {x: 0.5})
				  .to(animRocket, 0.1, {x: - 0.5});


var tlRocket = new TimelineMax({paused: true});
	tlRocket.to(animRocket, 1, {y: - $$(window).height(), ease: Power4.easeOut})
			.set(animRocket, {y: $$(window).height() })
			.to(animRocket, 1, {autoAlpha: 1, y: 0, ease: Power4.easeOut})
			.to( $$(".chem-trail"), 0.5, {display: "none", opacity: 0}, "-=0.25")
			.add(animComplete);


$$(".scroll-to[href='#top']").on("mouseover", function() {
	"use strict";

	tlRocketRattle.play(0);

}).on("mouseout", function() {
	"use strict";

	tlRocketRattle.pause(0);

}).on("click", function() {
	"use strict";

	tlRocket.play(0);
	tlRocketRattle.pause(0);
	
	TweenMax.to( $$(".chem-trail") , 0, {display: "block", opacity: 0.5, ease: Power4.easeOut});

});


/* -------------------------------------------------- */
/* IN A GALAXY FAR, FAR AWAY
/* -------------------------------------------------- */

//animStarWars.css({ "height" : $$(window).height() })
//animStarWars.children().css({ "height" : $$(window).height() })

TweenMax.set(animStarWars, {scale: 1, force3D: true, perspective: 1000});

TweenMax.set(animStarWars.children(), {y: 0, rotationX: 25, force3D: true, autoRound: false});

var tlStarWars = new TimelineMax({paused: true, yoyo: true, repeat: -1});
	tlStarWars.to(animStarWars.children(), 50, {backgroundPosition: "0 -700px", ease: Linear.easeNone})
			  .add(animComplete);


/* -------------------------------------------------- */
/* ANIMATION OBSERVER
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	var animScenePlayAll = function() {
		"use strict";

		//tlFloat.play();
		tlScrollHorizontal.play();
		tlStarWars.play();

	};


	var animScenePauseAll = function() {
		"use strict";

		//tlFloat.pause();
		tlScrollHorizontal.pause();
		tlStarWars.pause();

	};


	/* -------------------------------------------------- */
	/* CONTROLLER
	/* -------------------------------------------------- */

	var animSceneController = function() {
		"use strict";
		//console.log("Playing animations in view.");

		if ( animFloat.hasClass("anim-float") ) {

			//console.log("Element is active.");
			//tlFloat.resume();

		} else {

			//tlFloat.pause(0);

		} if ( animFloat.hasClass("anim-interact") && animFloat.hasClass("no-pointer") && !tlFloat.isActive() ) {
			
			//tlFloat.resume().repeat(-1);

		}





		if ( animHorizontal.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlScrollHorizontal.resume();

		} else {

			tlScrollHorizontal.pause(0);

		} if ( animHorizontal.hasClass("anim-interact") && animHorizontal.hasClass("no-pointer") && !tlScrollHorizontal.isActive() ) {
			
			tlScrollHorizontal.restart().repeat(0);

		}





		if ( animStarWars.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlStarWars.resume();

		} else {

			tlStarWars.pause(0);

		} if ( animStarWars.hasClass("anim-interact") && animStarWars.hasClass("no-pointer") && !tlStarWars.isActive() ) {
			
			tlStarWars.restart().repeat(0);

		}





		if ( navPanel.hasClass("is-open") ) {

			animPauseAll();
			
		}


	};


/* -------------------------------------------------- */
/* ACTIONS
/* -------------------------------------------------- */

$$(window).on("scrollstart", { latency: $updateInterval }, animScenePauseAll);
$$(window).on("scrollstop", { latency: $updateInterval }, animSceneController);

animScenePauseAll();
