/* -------------------------------------------------- */
/* SET-UP
/* -------------------------------------------------- */

var pages = function() {
	"use strict";

	// > = greatar than
	// < = less than
	
	
	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */
	
	var page = $$(".page").data("page"),
		
		linkHome = $$(".link-home"),

		linkAbout = $$(".link-about"),
		linkTeam = $$(".link-team"),

		linkPrivacyPolicy = $$(".link-privacy-policy"),
		linkEULA = $$(".link-eula");
	
	
	/* -------------------------------------------------- */
	/* HOME
	/* -------------------------------------------------- */

	if ( page === "index" ) {
		console.log("Home Page");
		
		linkHome.addClass("active");
		//navbar.addClass("dark");
		
		
		/* -------------------------------------------------- */
		/* HERO HEADER INTRO
		/* -------------------------------------------------- */

		var heroIntro = function() {


	        var introParent = $$("#welcome"),
				introHeader = $$("#welcome header");
	        
			
	        // SET-UP
	        var heroHeaderSplitText = new SplitText(introHeader.find("h1"), {type: "words, chars, lines"}), 
	            $heroHeaderSplitText = heroHeaderSplitText.words;

	        var heroParagraphSplitText = new SplitText(introHeader.find("p"), {type: "words, chars, lines"}), 
	            $heroParagraphSplitText = heroParagraphSplitText.words;


			TweenMax.set(introHeader.find(".button-group").children(), {autoAlpha: 0, scale: 0.95, rotationX: 0, transformOrigin: "center center", perspective: 100, y: 5});

			
	        // ANIMATION
	        var tlHeroHeader = new TimelineMax({paused: true});
				tlHeroHeader.staggerFrom($heroHeaderSplitText, 0.5, {autoAlpha: 0, y: 5, ease: Power4.easeInOut}, 0.1, "start-=0")
							.staggerFrom($heroParagraphSplitText, 0.25, {autoAlpha: 0, y: 5, ease: Power4.easeInOut}, 0.05, "-=0.25")

							.staggerTo(introHeader.find(".button-group").children(), 0.25, {autoAlpha: 1, scale: 1, rotationX: 0, transformOrigin: "center center", perspective: 100, y: 5, ease: Power4.easeInOut}, 0.2, "-=1");



			if ( !hero.hasClass("sticky") ) {
				
				tlHeroHeader.play().timeScale(1).delay($delayInterval);
	            
			} else {
				
				tlHeroHeader.seek("end", false);
				
	        }


		};

		heroIntro();


		if ( !$hasTouch ) {

			$$(pageContent).on("resize", _.debounce(heroIntro, $delayInterval));

		}

		
	}

	
    /* -------------------------------------------------- */
	/* ABOUT
	/* -------------------------------------------------- */

	else if ( page === "about" ) {
		console.log("About Page");

		linkAbout.addClass("active");
		//navbar.addClass("dark");
        
		var checkSectionHash = function() {
            
			if ( $("#team").hasClass("emergence-visible") ) {

				console.log("Team Section");
                
                linkAbout.removeClass("active");
				linkTeam.addClass("active");

			} else {

				console.log("About Section");

				linkAbout.addClass("active");
                linkTeam.removeClass("active");

			}
            
        };
		
		$$(pageContent).on("scrollstop", checkSectionHash);
		
	}
    
	
    /* -------------------------------------------------- */
	/* TEAM
	/* -------------------------------------------------- */

	else if ( page === "team" ) {
		console.log("Team Page");
		
		linkTeam.addClass("active");
		//navbar.addClass("dark");

		
	}
    
	
    /* -------------------------------------------------- */
	/* PRIVACY AND TERMS OF USE
	/* -------------------------------------------------- */

	else if ( page === "privacy-policy" ) {
		console.log("Privacy and Terms of Use Page");
		
		linkPrivacyPolicy.addClass("active");
		navbar.addClass("dark");
		body.addClass("background-white");
		body.addClass("background-image-none");
		
		$("#ui-privacy-policy-message a").hide();
		$("#ui-privacy-policy-message").addClass("text-center");

	}
    
	
    /* -------------------------------------------------- */
	/* EULA
	/* -------------------------------------------------- */

	else if ( page === "eula" ) {
		console.log("EULA Page");
		
		linkEULA.addClass("active");
		navbar.addClass("dark");
		body.addClass("background-white");
		body.addClass("background-image-none");

	}

	
	/* -------------------------------------------------- */
	/* ERROR
	/* -------------------------------------------------- */

	else {
		console.log("Error Page");
		
		navbar.addClass("dark");
		//body.addClass("background-wild");
		//body.addClass("background-image-none");
	}
	
};
