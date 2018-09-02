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

		function heroIntro() {


	        var introParent = $$("#welcome"),
				introHeader = $$("#welcome header");
	        
			
	        // SET-UP
	        var heroHeaderSplitText = new SplitText(introHeader.find("h1"), {type: "words, chars, lines"}), 
	            $heroHeaderSplitText = heroHeaderSplitText.words;

	        var heroParagraphSplitText = new SplitText(introHeader.find("p"), {type: "words, chars, lines"}), 
	            $heroParagraphSplitText = heroParagraphSplitText.words;

			
	        // ANIMATION
	        var tlHeroHeader = new TimelineMax({paused: true});
				tlHeroHeader.staggerFrom($heroHeaderSplitText, 0.5, {autoAlpha: 0, y: 5, ease: Power4.easeInOut}, 0.1, "start-=0")
							.staggerFrom($heroParagraphSplitText, 0.25, {autoAlpha: 0, y: 5, ease: Power4.easeInOut}, 0.05, "-=0.25")

							.from(introHeader.find(".button"), 0.5, {autoAlpha: 0, ease: Power4.easeOut}, "-=1")
							.fromTo(introHeader.find("form"), 0.5, {autoAlpha: 0, ease: Power4.easeOut}, {autoAlpha: 1, ease: Power4.easeOut}, "-=0.75")

							.add( function() { introHeader.find("h1").addClass("header-accent header-accent-left header-accent-primary"); } );



			if ( !hero.hasClass("sticky") ) {
				
				tlHeroHeader.play().timeScale(1).delay($delayInterval);
	            
			} else {
				
				tlHeroHeader.seek("end", false);
				
	        }


		}

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
