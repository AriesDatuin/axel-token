/* -------------------------------------------------- */
/* ACCORDION
/* -------------------------------------------------- */

//removeIf(production)
var comAccordion = function() {
	"use strict";
	
	$("li.accordion-item").find("a.accordion-title").on( "click", function(e) {
		e.preventDefault();
		
		//var self = $(this);
		
		TweenMax.delayedCall(0.25, accordionCheck);

	});

	
	var accordionCheck = function() {
		
		if ( $$("li.accordion-item").hasClass("is-active") ) {
			
			
			//TweenMax.to("li.accordion-item:not(.is-active)", 0.25, {autoAlpha: 0.75, ease: Power4.easeOut});
			//TweenMax.to("li.accordion-item.is-active", 0.25, {autoAlpha: 1, ease: Power4.easeOut});
			
						
			$("li.accordion-item:not(.is-active)").find("a.accordion-title").css({"background-color" : "#f4f4f4"});
			$("li.accordion-item.is-active").find("a.accordion-title").css({"background-color" : "#6400fa"});
			
		} else  {
			
			//TweenMax.to("li.accordion-item", 0.25, {autoAlpha: 1, ease: Power4.easeOut});
			
			$("li.accordion-item").find("a.accordion-title").css({"background-color" : "#fff"});
			
		}
		
	};

	
}; // END comAccordion
//endRemoveIf(production)


/* -------------------------------------------------- */
/* GRADIENTS
/* -------------------------------------------------- */

/*
var comAnimGradient() {

	var granimInstance = new Granim({
		element: "#background-gradient",
		name: "granim",
		direction: "radial", // diagonal, left-right, top-bottom, radial
		opacity: [1, 1],
		loop: true,
		stateTransitionSpeed: 500,
		isPausedWhenNotInView: true,
		scrollDebounceThreshold: 300,
		states : {

			"default-state": {
				gradients: [
					["#6400fa", "#fa6432"],
					["#32e14b", "#6400fa"]
				]
			},

			"gradient-charcoal": {
				gradients: [
					["#000", "#333"],
					["#333", "#000"]
				]
			}

		},
		onStart: function() {
			console.log('Granim: onStart');

		},
		onGradientChange: function(colorDetails) {
			console.log('Granim: onGradientChange, details: ');
			console.log(colorDetails);

		},
		onEnd: function() {
			console.log('Granim: onEnd');

		}

	});


	$$(pageContent).backgroundDefault = function() {
		granimInstance.changeState("default-state");
	};
	
	
}
*/ // END comAnimGradient


/* -------------------------------------------------- */
/* BLOG
/* -------------------------------------------------- */ 

//removeIf(production)
var comBlog = function() {
	
	if ( $$(".page").data("page") === "about" || $$(".page").data("page") === "team"  || $$(".page").data("page") === "press" || $$(".page").data("page") === "careers" ) {

		/* -------------------------------------------------- */
		/* CACHE SELECTORS
		/* -------------------------------------------------- */
		
		var blogData = "https://api.rss2json.com/v1/api.json",
			$blogSection = $$("#blog"),
			$blogContent = $$("#blog-content"),
			blogDataFeed = {
				rss_url: "https://medium.com/feed/@axelunlimited"
			};
	
			//TweenMax.set($$("#blog-content").find(".cell"), {autoAlpha: 0});
			//TweenMax.staggerFrom($$("#blog-content").find(".cell"), 1, {autoAlpha: 0, ease: Power4.easeOut, onComplete: function() { TweenMax.delayedCall(0, Foundation.reInit, ["equalizer"]); } }, 0.12);
		
			$.getJSON(blogData, blogDataFeed, function(response) {
				
				
				if (response.status === "ok") {
					
					var output = "";
					
					$.each(response.items, function (key, item) {
						
						// Attach a status message during profile image tile generation.
				   		//$blogContent.before('<p class="status-data position-absolute margin-sm padding-xs round-sm p10 text-charcoal background-white bring-to-front"><span class="fa fa-spinner fa-pulse margin-lr-xs" aria-hidden="true"></span></p>');
						
						var visibleSm;
						
						if ( key < 3 ) { // Set how many blog posts to display.
							
							visibleSm = "";
							
						 } else {
							 
							visibleSm = " visible-sm";
							 
						 }
						
						output += '<div class="cell padding-none' + visibleSm + '"><header>';
						output += '<span class="date">' + $.format.date(item.pubDate, "dd<br>MMM") + "</span>";
						
						var tagIndex = item.description.indexOf('<img'), // Find where the img tag starts.
							srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex, // Find where the src attribute starts.
							srcStart = srcIndex + 5, // Find where the actual image URL starts; 5 for the length of 'src="'.
							srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart, // Find where the URL ends.
							src = item.description.substring(srcStart, srcEnd); // Extract just the URL.
						
						//output += '<figure><img src="' + src + '" width="100%" height="auto"></figure></header>';
						
						output += '<figure><div class="post-image" style="background-image: url(' + src + ')"></div></figure></header>';




						output += '<div class="post-content" data-equalizer-watch><h4><a href="'+ item.link + '" target="_blank" rel="noopener" class="external">' + item.title + '</a></h4>';
						output += '<div class="post-meta"><span class="post-author">By ' + item.author + '</span></div>';
						
						
						var yourString = item.description.toString().replace(/<img[^>]*>/, ""), // Replace with your string.
							maxLength = 120, // Maximum number of characters to extract trim the string to the maximum length.
							trimmedString = yourString.substr(0, maxLength),
							url = item.link;
						
						
						trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))); // Re-trim if we are in the middle of a word.
						
						//output += '<p>' + trimmedString + '...</p>';
						//output += '<p>' + item.content + '...</p>';

						
						//output += '<div class="divider margin-top-xs border-solid border-bottom border-thin border-light-grey"></div>';
						
						
						output += '<a class="center-element p10 text-dar text-dark-grey text-accent-hover text-uppercase border-thin border-solid border-top border-light-grey button button-width-full background-transparent background-transparent-hover external" href="' + url + '" target="_blank" rel="noopener"><i class="fa fa-external-link margin-right-xs"></i>Read more</a>';
						
						
						output += '</div></div></div>';
						
						
						return key < 3;
						
					});
					
					$blogContent.html(output);
					
				}
				
				
			})

			.done(function(blogDataFeed) {

				console.log("Fetching Blog data...");

			})

			.fail(function(blogDataFeed) {

				console.log("Error: Unable to load Blog data.");

			})

			.always(function(blogDataFeed) {

				console.log("Blog data loaded.");

			});
	
	}

	
}; // END comBlog
//endRemoveIf(production)


/* -------------------------------------------------- */
/* COUNTER / ODOMETER
/* -------------------------------------------------- */

var comCounter = function() {
	
	// CACHE SELECTORS
	var counter01 = $$("#counter-01.anim"),
		counter02 = $$("#counter-02.anim");


	// OPTIONS
	window.counterOptions = {
		value: 0, // Set starting integer.
		//auto: true, // Don't automatically initialize everything with class 'odometer'.
		selector: ".odometer", // Change the selector used to automatically find things to be animated.
		format: "(,ddd)", // Formatting: (,ddd), (,ddd).dd, (.ddd),dd, ( ddd),dd, d
		duration: 5000, // Change how long the javascript expects the CSS animation to take.
		theme: "minimal", // Specify the theme: default, minimal, car, plaza, slot-machine, train-station, digital
		animation: "count" // Count is a simpler animation method which just increments the value, use it when you're looking for something more subtle.

	}; //od = new Odometer(counterOptions);


	// ANIMATION
	var tlCounter = new TimelineMax({paused: true});
	
		tlCounter.from(counter01, 0.75, {autoAlpha: 0, delay: 0, ease: Power4.easeOut, onStart: function() { counter01.html(200); } })
				 .from(counter02, 0.75, {autoAlpha: 0, delay: 0.25, ease: Power4.easeOut, onStart: function() { counter02.html(1300); } });
	

	// CONTROLLER
	var animCounterController = function() {

		if ( counter01.hasClass("anim-play") ) {

			tlCounter.play();

		}


	};


	$$(pageContent).on("scrollstop", animCounterController);

	TweenMax.delayedCall($delayInterval, animCounterController);


}; // END comOdometer


/* -------------------------------------------------- */
/* MODAL
/* -------------------------------------------------- */

var comModal = function() {
	
	/* -------------------------------------------------- */
	/* BLOCKER
	/* -------------------------------------------------- */

		/* -------------------------------------------------- */
		/* CONTENT
		/* -------------------------------------------------- */

		//$('<div class="blocker background-black z-02"></div>').appendTo( $$(body) );

		var uiBlockerContent = "";
			uiBlockerContent += "<div class='blocker'></div>";

		// Append content.
		$$(uiBlockerContent).appendTo( $$(body) );


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		var blocker = function() {

			if ( !$$(html).hasClass("blocker-active") ) {

				TweenMax.to( $$(".blocker"), 0.25, {display: "block", opacity: 1, ease: Power4.easeIn,
												   onStart: function() {
														  
													   disableContent();
													   $$(html).addClass("blocker-active");
													   $$(body).addClass("is-off-canvas-open");
													   $$(".blocker").addClass("no-pointer");
														  
												   },

												   onComplete: function() {
														  
													   $$(".blocker").removeClass("no-pointer");
														  
												   }
				});

			} else {

				TweenMax.to( $$(".blocker"), 1, {display: "none", opacity: 0, delay: 0.25, ease: Power4.easeOut,
												onStart: function() {
														 
													enableContent();
													$$(html).removeClass("blocker-active");
													$$(body).removeClass("is-off-canvas-open");
													$$(".blocker").addClass("no-pointer");
														 
												}
				});

			}

		};


		/* -------------------------------------------------- */
		/* ACTIONS
		/* -------------------------------------------------- */

		$$(".blocker").on("click", function(e) {
			e.preventDefault();

			//var self = $(this);

			blocker();
			modal();

		});


	/* -------------------------------------------------- */
	/* POPUP
	/* -------------------------------------------------- */

		//*Note: Same origin policy is in effect using this method. External or third-party links will not load into 'modal-container'.
		// Method: <a href="about.html" class="popup" data-content-selector="#articles" data-content-width="800"></a>

		/* -------------------------------------------------- */
		/* CACHE SELECTORS
		/* -------------------------------------------------- */

		var buttonModal = $$(".popup");


		/* -------------------------------------------------- */
		/* CONTENT
		/* -------------------------------------------------- */

		var uiModal = "";

			uiModal += "<div class='modal grid-x align-center align-middle'>"; // MODAL

				uiModal += "<div class='modal-close close dark margin-sm round-full'><span></span><span></span></div>"; // BUTTON: CLOSE

<<<<<<< HEAD
				uiModal += "<div id='modal-preloader' class='center-vh padding-xs round-sm text-secondary text-center background-white z-01'> <span class='fa fa-circle-o-notch fa-spin p4' aria-hidden='true'></span></div>" // PRELOADER
=======
				uiModal += "<div id='modal-preloader' class='center-vh padding-xs round-sm text-secondary text-center background-white box-shadow-xl z-01'> <span class='fa fa-circle-o-notch fa-spin p4' aria-hidden='true'></span> <p>Loading...</p> </div>" // PRELOADER
>>>>>>> 1263d2b31132ff57e30493ab1a60f84b3a8ebfd9

				uiModal += "<div class='modal-container cell align-self-top'></div>" // CONTAINER

				uiModal += "<a class='modal-close cell align-self-bottom padding-tb-md center-element p11 text-secondary text-charcoal-hover text-bold text-uppercase button button-width-full background-white background-white-hover no-touch-feedback prevent-default hide z-auto'><i class='fa fa-times-circle margin-right-xs'></i>Close</a>"; // BUTTON: CLOSE

			uiModal += "</div>"; // MODAL
	
		// Append content.
		$$(uiModal).appendTo( $$(body) );
	
		TweenMax.set( $$(".modal"), {display: "none", opacity: 0});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		var modal = function(modalContentURL, modalContentSelector) {

			var modalContentURL, // Variable for content's path / location.
				modalContentSelector, // Variable for loaded content's selector.
				modalContentWidth;

				blocker();

				if ( !$$(html).hasClass("blocker-active") ) {

					TweenMax.to( $$(".modal"), 0.25, {display: "block", opacity: 1, ease: Power4.easeInOut,

													   onStart: function() {

															
														   $$(html).addClass("no-pointer");
														   
														   
														   $$(".modal-container").load(modalContentURL + modalContentSelector, function ( response, status, xhr ) {

															   // PRELOADER
															   TweenMax.set( $$("#modal-preloader"), {display: "block", opacity: 1, scale: 1});


															   if ( status == "success" ) {

																   //utilAssetObserver();
																 
																   //console.log( modalContentURL + modalContentSelector);

																   //TweenMax.set( $$(".modal"), { maxWidth: $$(".modal-container").children().width() } );

																   TweenMax.to( $$("#modal-preloader"), 0.25, {display: "none", opacity: 0, scale: 0.75, delay: 0, ease: Expo.easeInOut});

																   $$(".modal-close").not(".close").removeClass("hide");

															   } else {

																   var msg = "Error: Unable to load " + modalContentURL + modalContentSelector;

																   //$(this).html( msg + xhr.status + " " + xhr.statusText );
																   $$(this).html( '<div class="center-vh text-charcoal text-center"> <span class="fa fa-exclamation-circle p4" aria-hidden="true"></span> <p>'+msg+'</p> </div>' );

																   TweenMax.to( $$("#modal-preloader"), 0.25, {display: "none", opacity: 0, scale: 0.75, delay: 0, ease: Expo.easeInOut});

																   $$(".modal-close").not(".close").addClass("hide");

															   }


														   });

													   },

													   onComplete: function() {

														   $$(".modal").addClass("open");
														   $$(html).removeClass("no-pointer");

													   }
					});

				} else {

					TweenMax.to( $$(".modal"), 0.25, {display: "none", opacity: 0, ease: Power4.easeInOut,

														onStart: function() {

															$$(".modal").removeClass("open");

														},


														onComplete: function() {
														   
															$$(".modal-container").html(""); // Clear 'modal-container' and free up some memory.

														 	TweenMax.set( $$(".modal"), {display: "none", opacity: 0});
													   }

					});

				}

		};


		/* -------------------------------------------------- */
		/* ACTIONS
		/* -------------------------------------------------- */

		buttonModal.on("click", function(e) {
			e.preventDefault();
			
			var self = $(this),
				dataContentURL = null, // self.attr("href"), // self.data("content-url"), //self.attr("href"), // Read 'data-content-url' of clicked element and store as a value for 'modal(modalContentURL)'.
				dataConentSelector = self.data("content-selector"), // Read 'data-content-selector' of clicked element and store as a value for 'modal(modalContentSelector)'.
				dataContentWidth = self.data("content-width"), // Read 'data-content-width' of clicked element and store as a value for 'modal(modalContentSelector)'.
				dataContentHeight = self.data("content-height"); // Read 'data-content-height' of clicked element and store as a value for 'modal(modalContentSelector)'.


			// Check if element has href or is a regular element, ex: div or span.
			if ( self.is( "a" ) ) {

				dataContentURL = self.attr("href");

				//console.log("Element has href: " + dataContentURL);

 			} else {

 				dataContentURL = self.data("content-url");

 				//console.log("Element does not have href: " + dataContentURL);

 			}


			console.log(dataContentURL + " #" + dataConentSelector);
			
			modal(dataContentURL, " #" + dataConentSelector, dataContentWidth, dataContentHeight);
			
			TweenMax.set( $$(".modal"), { maxWidth: dataContentWidth, height: dataContentHeight } );

		});


		$$(".modal-close").on("click", function(e) {
			e.preventDefault();

			modal();

		});

}; // END comModal


/* -------------------------------------------------- */
/* PARALLAX
/* -------------------------------------------------- */

var comParallax = function() {

	dzsprx_init( ".dzsparallaxer", {

		direction: "reverse", // normal, reverse
		settings_mode: "scroll", // scroll, mouse, mouse_body
		mode_scroll: "normal", // normal, fromtop
		animation_duration: "5",
		easing: "easeIn" // easeIn, easeOutQuad, easeInOutSine

	});

};


/*
var comParallax = function() {
	
	var rellax = new Rellax(".rellax", {
		center: true,
		round: true,
		vertical: true,
		horizontal: false
  	});
	
	
}
*/ // END comParallax


/* -------------------------------------------------- */
/* PARTICLES
/* -------------------------------------------------- */

/*
var comParticles = function() {
	
	if ( $hasTouch && $isSmallScreen ) {

		disableParticles();

	} else {

		enableParticles();

	}
	
	
}
*/ // END comParticles


/* -------------------------------------------------- */
/* SLIDER
/* -------------------------------------------------- */

var comSlider = function() {
	"use strict";

	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */

	var sliderDefault = $$(".slider-default"),
		sliderDefaultAdapt = $$(".slider-default.adapt").flickity({});


    /* -------------------------------------------------- */
    /* SLIDER
    /* -------------------------------------------------- */

    //var sliderDefault = $$(".slider-default");
      
    TweenMax.set(sliderDefault, {autoAlpha: 0});
    TweenMax.to(sliderDefault, 0.5, {autoAlpha: 1, delay: 1});

    // Disable vertical touch scrolling when interacting with any slider.
	/*
    sliderDefault.on("touchmove", function(e) {
            e.preventDefault();
        
            return false;
        
        
    }).on("touchend touchleave", function(e) {
        

        
    });
	*/
    
    
    
    
    
    // Resize slider when content has loaded.
    var sliderResize = function() { 

	   sliderDefault.flickity("resize");
        
    };
	
    TweenMax.delayedCall($delayInterval, sliderResize);
    
    
	
	
    
	// SET-UP
    //var sliderDefaultAdapt = $$(".slider-default.adapt").flickity({});
    
    sliderDefault.has(".adapt").each(function() {
        
		
		var self = $(this);
		
        // Move '.flickity-page-dots' above slider.
		self.find("ol.flickity-page-dots").prependTo( $(this).find(".flickity-viewport") );
        
		// Bug fix: Flickity does not set correct 'height' for content other than images.
		self.find(".flickity-viewport").css("height", ''+$(this).find(".flickity-viewport .slider-item.is-selected .cell").height()+'' + "px" );
        
    });
    
	// Disable 'href' links when clicking.
	$(".slider-item a").on("click touchdown", function(e) {
        
		//e.preventDefault();
		//return false;
        
	});

	
	// SLIDER ADAPT
	sliderDefaultAdapt.on("select.flickity", function() {

		//var sliderItemIndex = $(this).data("flickity");
		//console.log(sliderItemIndex.selectedIndex);

		var self = $(this);
		
        self.each(function() {
			
			// Bug fix: Flickity does not set correct 'height' for content other than images.
           self.find(".flickity-viewport").css("height", ''+$(this).find(".flickity-viewport .slider-item.is-selected .cell").height()+'' + "px" );
		            
        });
		
		

	});

	
	/* -------------------------------------------------- */
	/* TESTIMONIALS
	/* -------------------------------------------------- */ 

	// SLIDER
	/*
	TweenMax.set("#slider-testimonials .slider-item:not(.is-selected)", {scale: 0.75, transformOrigin: "bottom center"});

	//var sliderTestimonials = $$("#slider-testimonials").flickity({});

	$$("#slider-testimonials").on("select.flickity", function() {

		TweenMax.to("#slider-testimonials .slider-item.is-selected", 0.75, {scale: 1, ease: Back.easeInOut});
		TweenMax.to("#slider-testimonials .slider-item:not(.is-selected)", 0.5, {scale: 0.75, ease: Back.easeOut});

	}).on("settle.flickity", function() {

		//TweenMax.to(".slider-item:not(.is-selected)", 0.5, {scale: 0.75, ease: Back.easeOut});

	});
	*/

	
	/* -------------------------------------------------- */
	/* PADE DOTS
	/* -------------------------------------------------- */ 

	if ( $$("ol.flickity-page-dots > li.dot").length > 8 && $isSmallScreen ) {

		$$("ol.flickity-page-dots > li.dot").remove();

	}


	/* -------------------------------------------------- */
	/* CONTROLLER
	/* -------------------------------------------------- */

	var animSliderController = function() {

		sliderDefault.each(function() {

			// Cache selectors.
			var self = $(this);

			if ( self.hasClass("anim-play") ) {

				$$(pageContent).on("scrollstart", function() { self.flickity("pausePlayer"); } );
				$$(pageContent).on("scrollstop", function() { self.flickity("unpausePlayer"); } );

				self.flickity("playPlayer");
				//self.flickity("unpausePlayer");

			} else {

				self.flickity("stopPlayer");

			}

		});

	};

	$$(pageContent).on("scrollstop", animSliderController);


}; // END comSlider


/* -------------------------------------------------- */
/* CASE STUDIES
/* -------------------------------------------------- */

var comStories = function() {

	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */

    var $caseStudyUser = $$("#stories .profiles .cell"),
    	$caseStudies = $$("#stories .profiles"),
        $caseStudyJosh = $$("#josh"),
        $caseStudyShera = $$("#shera"),
        $caseStudyTina = $$("#tina");


	/*
	window.onresize = function () {


			TweenMax.delayedCall(1, function() { 


				caseStudiesHeight = $$("#user-stories .profiles").height(); // Store original 'height' of parent section.
				console.log("Height: " + caseStudiesHeight);
				TweenMax.to($caseStudies, 0.25, {height: caseStudiesHeight + 50, ease: Expo.easeIn});



			});
			

	}
	*/


	/* -------------------------------------------------- */
	/* TRIM TEXT
	/* -------------------------------------------------- */
	
	/*
	var $textTrim = $$(".text-trim"),
		maxCharCount = 100;    

	$textTrim.each( function() {  
		
		var $self = $$(this).text();
		
		if( $self.length < maxCharCount ) return;

		
		
		$(this).html( $self.slice( 0, maxCharCount ) + '<span>... </span><a href="#" class="more">More</a>' +
					  '<span style="display:none;">' + $self.slice( maxCharCount, $self.length ) + ' <a href="#" class="less">Less</a></span>'
		);
		
		
		
	}); 


	$('a.more', $textTrim).click(function(event){
		event.preventDefault();
		$(this).hide().prev().hide();
		$(this).next().show();        
	});


	$('a.less', $textTrim).click(function(event){
		event.preventDefault();
		$(this).parent().hide().prev().show().prev().show();    
	});
	*/


	/* -------------------------------------------------- */
	/* PROFILES
	/* -------------------------------------------------- */

		/* -------------------------------------------------- */
		/* TILES
		/* -------------------------------------------------- */

		TweenMax.set($caseStudyUser.find("[data-image]"), {autoAlpha: 0, scale: 1.25});

		// JOSH
		$caseStudyJosh.on("mouseover touchstart", function() {
			
			var $self = $(this);
			
			$self.addClass("overflow-hidden");
			
			TweenMax.to($self.find("svg"), 1, {autoAlpha: 0, ease: Expo.easeOut});
			TweenMax.to($self.find(".text-container"), 1, {autoAlpha: 0, ease: Expo.easeOut});
			TweenMax.to($self.find("a.button"), 1, {autoAlpha: 0, ease: Expo.easeOut});
			TweenMax.to($self.find("[data-image]"), 0.5, {autoAlpha: 1, scale: 1, ease: Expo.easeOut});
			
			
		}).on("mouseout touchend touchleave", function() {
			
			var $self = $(this);
			
			TweenMax.to($self.find(".text-container"), 0.75, {autoAlpha: 1, ease: Expo.easeOut});
			TweenMax.to($self.find("a.button"), 0.75, {autoAlpha: 1, ease: Expo.easeOut});
			TweenMax.to($self.find("[data-image]"), 0.25, {autoAlpha: 0, scale: 1.5, ease: Expo.easeIn,
														   onComplete: function() { 
															   $self.removeClass("overflow-hidden");
															   TweenMax.to($self.find("svg"), 0.75, {autoAlpha: 1, ease: Expo.easeOut});
				
														   } });
			
		});





		// SHERA
		$caseStudyShera.on("mouseover touchstart", function() {
			
			var $self = $(this);
			
			$self.addClass("overflow-hidden");
			
			TweenMax.to($self.find("svg"), 1, {autoAlpha: 0, ease: Expo.easeOut});
			TweenMax.to($self.find(".text-container"), 1, {autoAlpha: 0, ease: Expo.easeOut});
			TweenMax.to($self.find("a.button"), 1, {autoAlpha: 0, ease: Expo.easeOut});
			TweenMax.to($self.find("[data-image]"), 0.5, {autoAlpha: 1, scale: 1, ease: Expo.easeOut});
			
			
		}).on("mouseout touchend touchleave", function() {
			
			var $self = $(this);
			
			TweenMax.to($self.find(".text-container"), 0.75, {autoAlpha: 1, ease: Expo.easeOut});
			TweenMax.to($self.find("a.button"), 0.75, {autoAlpha: 1, ease: Expo.easeOut});
			TweenMax.to($self.find("[data-image]"), 0.25, {autoAlpha: 0, scale: 1.5, ease: Expo.easeIn,
														   onComplete: function() { 
															   $self.removeClass("overflow-hidden");
															   TweenMax.to($self.find("svg"), 0.75, {autoAlpha: 1, ease: Expo.easeOut});
				
														   } });
			
		});





		// TINA
		$caseStudyTina.on("mouseover touchstart", function() {
			
			var $self = $(this);
			
			$self.addClass("overflow-hidden");
			
			TweenMax.to($self.find("svg"), 1, {autoAlpha: 0, ease: Expo.easeOut});
			TweenMax.to($self.find(".text-container"), 1, {autoAlpha: 0, ease: Expo.easeOut});
			TweenMax.to($self.find("a.button"), 1, {autoAlpha: 0, ease: Expo.easeOut});
			TweenMax.to($self.find("[data-image]"), 0.5, {autoAlpha: 1, scale: 1, ease: Expo.easeOut});
			
			
		}).on("mouseout touchend touchleave", function() {
			
			var $self = $(this);
			
			TweenMax.to($self.find(".text-container"), 0.75, {autoAlpha: 1, ease: Expo.easeOut});
			TweenMax.to($self.find("a.button"), 0.75, {autoAlpha: 1, ease: Expo.easeOut});
			TweenMax.to($self.find("[data-image]"), 0.25, {autoAlpha: 0, scale: 1.5, ease: Expo.easeIn,
														   onComplete: function() { 
															   $self.removeClass("overflow-hidden");
															   TweenMax.to($self.find("svg"), 0.75, {autoAlpha: 1, ease: Expo.easeOut});
				
														   } });
			
		});


}; // END comCaseStudies


/* -------------------------------------------------- */
/* TILT
/* -------------------------------------------------- */

/*
var comTilt = function() {
	
	if ( !$hasTouch && anyElement.hasClass("tilt") ) {
		
        var tilt = ".tilt";
        
		$(tilt).tilt({
			maxTilt: 25,
			speed: 800,
            transition: true,
			easing: "cubic-bezier(0.86, 0, 0.07, 1)",
			perspective: 500,
			axis: null,
			glare: true,
			maxGlare: 1,
			scale: 1.12,
			reset: true
		});
		
	}
	
	
	$(".tilt").on("click touchend mouseup mouseleave", function() {
		
		var self = $(this)
		
		self.tilt.destroy.call(self);
		
	}).on("click touchend mouseup mouseleave", function() {
		
		var self = $(this)
		
		self.tilt();
		
	});
    
	var tilt = $(".tilt").tilt();
	
    if ( $hasTouch ) {
        tilt.methods.destroy.call(tilt);
	}
	
	
}
*/ // END comTilt
