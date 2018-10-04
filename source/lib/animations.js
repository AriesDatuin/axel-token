/* -------------------------------------------------- */
/* CACHE SELECTORS
/* -------------------------------------------------- */

var	anim = $$(".anim"), // Helper class for all animations affixed with 'anim-'.
	animInteract = $$(".anim-interact"),
	animAppear = $$(".anim-appear"),
	animBeat = $$(".anim-beat"),
	animBounce = $$(".anim-bounce"),
	animCrowdWave = $$(".anim-crowd-wave"),
	animDance = $$(".anim-dance"),
	animFade = $$(".anim-fade"),
	animFloat = $$(".anim-float"),
	animHorizontal = $$(".anim-horizontal"),
	animMicroHint = $$(".anim-micro-hint"),
	animPop = $$(".anim-pop"),
	animRattle = $$(".anim-rattle"),
	animRocket = $$(".anim-rocket"),
	animShake = $$(".anim-shake"),
	animStarWars = $$(".anim-perspective-scroll");


/* -------------------------------------------------- */
/* FUNCTIONS
/* -------------------------------------------------- */

var animComplete = function() {
	//console.log("Tween completed.");

	anim.removeClass("no-pointer");

}


/* -------------------------------------------------- */
/* APPEAR
/* -------------------------------------------------- */

var tlAppear = new TimelineMax({paused: true, delay: 0, repeatDelay: 1, yoyo: true, repeat: -1, onComplete: animComplete});
	tlAppear.staggerFromTo(animAppear.children(), 1, {autoAlpha: 0, scale: 0.75, transformOrigin: "center center"},
													 {autoAlpha: 1, scale: 1, ease: Back.easeOut}, 0.12);


/* -------------------------------------------------- */
/* BEAT
/* -------------------------------------------------- */

var tlBeat = new TimelineMax({paused: true, delay: 0, repeatDelay: 1, yoyo: false, repeat: -1, onComplete: animComplete});
	tlBeat.to(animBeat, 0.25, {scale: 1.25, transformOrigin: "center center", ease: Power4.easeOut})
		  .to(animBeat, 1, {scale: 1, ease: Elastic.easeOut});


/* -------------------------------------------------- */
/* BOUNCE
/* -------------------------------------------------- */

var tlBounce = new TimelineMax({paused: true, delay: 0, repeatDelay: 1, yoyo: false, repeat: -1, onComplete: animComplete});
	tlBounce.to(animBounce, 0.25, {y: -10, ease: Back.easeOut})
			.to(animBounce, 0.5, {y: 0, ease: Bounce.easeOut});


/* -------------------------------------------------- */
/* CROWD WAVE
/* -------------------------------------------------- */

TweenMax.set(animCrowdWave.children(), {y: 0, transformOrigin: "bottom center"});

var tlCrowdWave = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: -1, onComplete: animComplete});
	tlCrowdWave.staggerTo(animCrowdWave.children(), 1, {y: -5, ease: Back.easeOut}, 0.12)
			   .staggerTo(animCrowdWave.children(), 0.75, {y: 0, ease: Back.easeIn}, -0.12);


/* -------------------------------------------------- */
/* DANCE
/* -------------------------------------------------- */

var tlDance = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: -1, onComplete: animComplete});
	tlDance.to(animDance, 1, {x: 5, rotation: 5, transformOrigin: "bottom center", ease: Elastic.easeOut})
		   .to(animDance, 1, {x: - 5, rotation: - 5, ease: Elastic.easeOut});


/* -------------------------------------------------- */
/* FADE
/* -------------------------------------------------- */

var tlFadeInOut = new TimelineMax({paused: true, delay: 0, repeatDelay: 0.25, yoyo: true, repeat: -1, onComplete: animComplete});
	tlFadeInOut.to(animFade, 0.5, {autoAlpha: 0, ease: Power4.easeOut});


/* -------------------------------------------------- */
/* FLOAT
/* -------------------------------------------------- */

function getRandomNum(min, max) {
	"use strict";
	
	return Math.floor(Math.random()*(max-min+1)+min);
    
}


animFloat.each(function(index) {

	var $randomNum = getRandomNum(1,5),
		self = $(this); 

	var tlFloat = new TimelineMax({paused: false, delay: $randomNum, repeatDelay: 0, yoyo: true, repeat: -1, onComplete: animComplete});
		tlFloat.to(self, $randomNum + 0.5, {y: 10, ease: Linear.easeNone, onComplete: getRandomNum, onCompleteParams: [1,5] });
	
});


/* -------------------------------------------------- */
/* HORIZONTAL SCROLL
/* -------------------------------------------------- */

animHorizontal.children().clone().insertBefore(animHorizontal.children());

//animHorizontal.find(":nth-child(2)").addClass("flip-x");

//animHorizontal.children().clone().append( animHorizontal.children() );

//$(this).children().css({"width" : $$(pageContent).innerWidth + "px" })
//$(this).css({"width" : $$(pageContent).innerWidth * 2 + "px" })

var tlScrollHorizontal = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: -1, onComplete: animComplete});
	tlScrollHorizontal.to(animHorizontal.children(), 75, {x: "-100%", ease: Linear.easeNone, onComplete: function() { TweenMax.set(animHorizontal.children(), {x: 0}); } });


// Create a function to recalculate the width on 'resize'.
var animHorizontalResize = function() {

	animHorizontal.children().css({"width" : pageContent.innerWidth + "px" });
	animHorizontal.css({"width" : pageContent.innerWidth * 2 + "px" });
	
	//TweenMax.from(animHorizontal, 0.5, {autoAlpha: 0, ease: Power4.easeInOut});
	
};

animHorizontalResize();

$$(pageContent).on("resize", _.debounce(animHorizontalResize, $updateInterval));


/* -------------------------------------------------- */
/* MICRO HINT
/* -------------------------------------------------- */

animMicroHint.parent().on("mouseover touchdown", function() {
	"use strict";
	
	var self = $(this);
	
	var tlMicroHint = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animComplete});
		tlMicroHint.to(self.find(animMicroHint), 0.1, {x: 6, rotation: 6})
				   .to(self.find(animMicroHint), 0.1, {x: - 5, rotation: - 5})
				   .to(self.find(animMicroHint), 0.1, {x: 4, rotation: 4})
				   .to(self.find(animMicroHint), 0.1, {x: - 3, rotation: - 3})
				   .to(self.find(animMicroHint), 0.1, {x: 2, rotation: 2})
				   .to(self.find(animMicroHint), 0.1, {x: - 1, rotation: - 1})
				   .to(self.find(animMicroHint), 0.1, {x: 0, rotation: 0}, "end-=0");

	
	tlMicroHint.play(0).delay(0);

}).on("mouseout touchup", function() {
	"use strict";

	//tlMicroHint.seek("end", false);
	//tlMicroHint.stop(0);
	
});


/* -------------------------------------------------- */
/* POP
/* -------------------------------------------------- */

/*
var animPopComplete = function() {
	
	animPop.each(function() {
		
		var self = $(this);
		
		if ( self.is(":visible") ) {
			
			TweenMax.to(this, 0, {autoAlpha: 0});
			
		}
			
	});	
	
}
*/


animPop.children();

TweenMax.set(animPop.children().not(":first"), {autoAlpha: 1, y: 0, scaleY: 0, rotationX: 100, perspective: 400, transformOrigin: "bottom center"});

var tlPop = new TimelineMax({paused: true, delay: 2, repeatDelay: 5, yoyo: true, repeat: -1, onComplete: animComplete});
	tlPop.staggerTo(animPop.children().not(":first"), 0.5, {autoAlpha: 1, y: 0, scaleY: 1, rotationX: 0, ease: Back.easeOut}, 0.2);
	   //.to(animPop, 0.25, {autoAlpha: 0.5, ease: Power4.easeOut}, "-=1");
	   //.staggerFromTo(animPop, 1, {autoAlpha: 0, scale: 0.75}, {autoAlpha: 1, scale: 1}, "-=1");
	



/*
$$(pageContent).on("touchmove scrollstart", function(e) {

        //tlPop.time((e.pageX / 2000) * tlPop.duration());
		//tlPop.time((e.pageY / 2000) * tlPop.duration());
		tlPop.pause();    

}).on("touchend touchleave scrollstop", function() {

     tlPop.resume();

});



document.scroll(function (e) {
    
    var self = $(this),
		$scroll = self.scrollTop();
				 
    
    //tlPop.progress(( $scroll / self.height() * 0.25 ) * tlPop.duration() );
    //tlPop.time((e.pageY / 2000) * tlPop.duration());
    //tlPop.pause(); 
	
});
*/


/*
var $lastScrollTop = 0;

$$(pageContent).scroll(function(event) {

    var self = $(this),
		$scroll = self.scrollTop();
    
   if ( $scroll > $lastScrollTo) {
       
       console.log("scrolling down");
       tlPop.time(( $scroll / $$(pageContent).height() ) * tlPop.duration());
       
   } else {
       
       console.log("scrolling up");
	   
       tlPop.time(( $scroll / $$(pageContent).height() ) * tlPop.duration());
       
   }
    
   $lastScrollTop = $scroll;
    
});
*/

/* -------------------------------------------------- */
/* RATTLE
/* -------------------------------------------------- */

var tlRattle = new TimelineMax({paused: true, delay: 0, repeatDelay: 0.5, yoyo: false, repeat: -1});
	tlRattle.to(animRattle, 0.1, {x: 4, rotation: 4})
			.to(animRattle, 0.1, {x: - 3, rotation: - 3})
			.to(animRattle, 0.1, {x: 2, rotation: 2})
			.to(animRattle, 0.1, {x: - 1, rotation: - 1})
			.to(animRattle, 0.1, {x: 0, rotation: 0});


/* -------------------------------------------------- */
/* ROCKET LAUNCH
/* -------------------------------------------------- */

$$("<span id='chem-trail' class='position-absolute bring-to-front' style='display:none; opacity: 0; left: -255px; bottom: -238px; width: 5px; height: 500px; background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%); transform: rotate(-270deg);'></span>").appendTo(animRocket);


var tlRocket = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: false, repeat: 0, onComplete: animComplete});
	tlRocket.to(animRocket, 1, {y: - $$(pageContent).height(), ease: Power4.easeOut})
			//.to(animRocket, 0.5, {autoAlpha: 0, ease: Power4.easeOut}, "-=1.5")
			//.set(animRocket, {y: 0})
			.set(animRocket, {y: $$(pageContent).height() })
			.to(animRocket, 1, {autoAlpha: 1, y: 0, ease: Power4.easeOut})
			.to( $$("#chem-trail"), 0.5, {display: "none", opacity: 0}, "-=0.25");


$$('a[href$="#top"]').on("click", function() {
	"use strict";

	tlRocket.play(0).delay(0);
	
	TweenMax.to( $$("#chem-trail") , 0, {display: "block", opacity: 0.5, ease: Power4.easeOut});

});


/* -------------------------------------------------- */
/* SHAKE
/* -------------------------------------------------- */

var tlShake = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: -1, onComplete: animComplete});
	tlShake.to(animShake, 0.1, {x: 0.5})
		   .to(animShake, 0.1, {x: - 0.5});


animInteract.on("mouseover touchdown", function() {
	"use strict";
	
	tlShake.play(0).delay(0);

}).on("mouseout touchup", function() {
	"use strict";

	tlShake.stop();
	
});


/* -------------------------------------------------- */
/* IN A GALAXY FAR, FAR AWAY
/* -------------------------------------------------- */

//animStarWars.css({ "height" : $$(pageContent).height() })
//animStarWars.children().css({ "height" : $$(pageContent).height() })

TweenMax.set(animStarWars, {scale: 1, force3D: true, perspective: 1000});

TweenMax.set(animStarWars.children(), {y: 0, rotationX: 25, force3D: true, autoRound: false});

var tlStarWars = new TimelineMax({paused: true, delay: 0, repeatDelay: 0, yoyo: true, repeat: -1, onComplete: animComplete});
	tlStarWars.to(animStarWars.children(), 50, {backgroundPosition: "0 -700px", ease: Linear.easeNone});


/* -------------------------------------------------- */
/* ANIMATION OBSERVER
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	var animPlayAll = function() {
		"use strict";

		tlAppear.play();
		tlBeat.play();
		tlBounce.play();
		tlCrowdWave.play();
		tlDance.play();
		tlFadeInOut.play();
		//tlFloat.play();
		tlScrollHorizontal.play();
		tlPop.play();
		tlRattle.play();
		tlShake.play();
		tlStarWars.play();

	};


	var animPauseAll = function() {
		"use strict";

		tlAppear.pause();
		tlBeat.pause();
		tlBounce.pause();
		tlCrowdWave.pause();
		tlDance.pause();
		tlFadeInOut.pause();
		//tlFloat.pause();
		tlScrollHorizontal.pause();
		tlPop.pause();
		tlRattle.pause();
		tlShake.pause();
		tlStarWars.pause();

	};


	/* -------------------------------------------------- */
	/* CONTROLLER
	/* -------------------------------------------------- */

	var animController = function() {
		"use strict";
		//console.log("Playing animations in view.");

		if ( animAppear.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlAppear.resume();

		} else {

			tlAppear.pause(0);

		} if ( animAppear.hasClass("anim-interact") && !tlAppear.isActive() ) {
			
			tlAppear.restart().repeat(0);

		}





		if ( animBeat.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlBeat.resume();

		} else {

			tlBeat.pause(0);

		} if ( animBeat.hasClass("anim-interact") && !tlBeat.isActive() ) {
			
			tlBeat.restart().repeat(0);

		}





		if ( animBounce.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlBounce.resume();

		} else {

			tlBounce.pause(0);

		} if ( animBounce.hasClass("anim-interact") && !tlBounce.isActive() ) {
			
			tlBounce.restart().repeat(0);

		}






		if ( animCrowdWave.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlCrowdWave.resume();

		} else {

			tlCrowdWave.pause(0);

		} if ( animCrowdWave.hasClass("anim-interact") && !tlCrowdWave.isActive() ) {
			
			tlCrowdWave.restart().repeat(0);

		}





		if ( animDance.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlDance.resume();

		} else {

			tlDance.pause(0);

		} if ( animDance.hasClass("anim-interact") && !tlDance.isActive() ) {
			
			tlDance.restart().repeat(0);

		}






		if ( animFade.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlFadeInOut.resume();

		} else {

			tlFadeInOut.pause(0);

		} if ( animFade.hasClass("anim-interact") && !tlFadeInOut.isActive() ) {
			
			tlFadeInOut.restart().repeat(0);

		}





		if ( animFloat.hasClass("anim-float") ) {

			//console.log("Element is active.");
			//tlFloat.resume();

		} else {

			//tlFloat.pause(0);

		} if ( animFloat.hasClass("anim-interact") && !tlFloat.isActive() ) {
			
			//tlFloat.restart().repeat(0);

		}





		if ( animHorizontal.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlScrollHorizontal.resume();

		} else {

			tlScrollHorizontal.pause(0);

		} if ( animHorizontal.hasClass("anim-interact") && !tlScrollHorizontal.isActive() ) {
			
			tlScrollHorizontal.restart().repeat(0);

		}






		if ( animPop.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlPop.resume();

		} else {

			tlPop.pause(0);

		} if ( animPop.hasClass("anim-interact") && !tlPop.isActive() ) {
			
			tlPop.restart().repeat(0);

		}





		if ( animRattle.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlRattle.resume();

		} else {

			tlRattle.pause(0);

		} if ( animRattle.hasClass("anim-interact") && !tlRattle.isActive() ) {
			
			tlRattle.restart().repeat(0);

		}





		if ( animShake.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlShake.resume();

		} else {

			tlShake.pause(0);

		} if ( animShake.hasClass("anim-interact") && !tlShake.isActive() ) {
			
			tlShake.restart().repeat(0);

		}





		if ( animStarWars.hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlStarWars.resume();

		} else {

			tlStarWars.pause(0);

		} if ( animStarWars.hasClass("anim-interact") && !tlStarWars.isActive() ) {
			
			tlStarWars.restart().repeat(0);

		}





		if ( navPanel.hasClass("is-open") ) {

			animPauseAll();
			
		}


	};
	

	/* -------------------------------------------------- */
	/* INTERACTIVE
	/* -------------------------------------------------- */

	animInteract.on("mouseover touchstart touchmove", function() {
		"use strict";

		var self = $(this);

		self.addClass("no-pointer");

		animController();

	});


	/* -------------------------------------------------- */
	/* RUN
	/* -------------------------------------------------- */

	if ( $microAnimationsPauseOnScroll ) {

		$$(pageContent).on("scrollstart", { latency: $updateInterval }, animPauseAll);
		$$(pageContent).on("scrollstop", { latency: $updateInterval }, animController);

		animPauseAll();

	} else {

		animPlayAll();

	}


//TweenMax.delayedCall($delayInterval, animController);
//animController();


/*
anim.watch({

	properties: "attr_class", // Specify CSS styles or attribute names to monitor: top, left, opacity, attr_class, prop_innerHTML.
    interval: 100, // Interval for 'manual polling' (IE 10 and older).
    id: "in-view", // A unique id for this watcher instance.
    watchChildren: false, // Flag to determine whether child elements are watched.
	
    callback: function(data, i) { // Callback function when a change is detected.
		"use strict";
		
		
		
		
	}
	
});
*/


/*
$$(pageContent).on("touchstart", function() {

     TweenMax.pauseAll();

}).on("touchend touchleave", function() {

     TweenMax.resumeAll()

});
*/
