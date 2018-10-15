/* -------------------------------------------------- */
/* SET COOKIES
/* -------------------------------------------------- */

var	cookiePrivacyPolicy = "privacy-policy",
	valuePrivacyPolicy = "accepted",

	cookieExpireDate = 30,
	cookiseSecure = false;


/* -------------------------------------------------- */
/* PRIVACY / COOKIE POLICY
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* CONTENT
	/* -------------------------------------------------- */

	if ( $showPrivacyPolicy ) {

		var uiModalPrivacyPolicy = "";

			uiModalPrivacyPolicy += "<div id='ui-modal-privacy-policy' class='opacity-00 position-fixed display-none bottom padding-sm width-full background-charcoal no-print hide-landscape-mobile' style='z-index: 98;'>";


				uiModalPrivacyPolicy += "<div class='grid-x align-center align-middle small-up-1 medium-up-2 large-up-2 center width-sm'>";


					uiModalPrivacyPolicy += "<p id='ui-privacy-policy-message' class='cell medium-auto text-white padding-bottom-sm-mobile'>This website uses cookies to ensure you get the best experience. <a href='modals/en/privacy-policy' rel='noopener' class='text-light-grey text-accent-hover text-bold popup prevent-default' data-content-selector='privacy-policy' data-content-width='600' data-content-height='800'>Read our privacy policy to learn more.</a></p>";

					uiModalPrivacyPolicy += "<a id='ui-modal-button-privacy-policy' href='#' class='cell round-full button button-md button-fx-secondary button-fx-flat button-fx-static width-full-mobile round-full text-white text-bold text-center background-secondary background-white-hover prevent-default'>Got it!</a>";


				uiModalPrivacyPolicy += "</div>";


			uiModalPrivacyPolicy += "</div>";

		// Append Content
		$$(uiModalPrivacyPolicy).appendTo(container);
		
	}


	/* -------------------------------------------------- */
	/* ACTIONS
	/* -------------------------------------------------- */

	$$("#ui-modal-button-privacy-policy").on("click", function(e) {
		//"use strict";
		e.preventDefault();

		var self = $(this);

		TweenMax.to($$("#ui-modal-privacy-policy"), 0.25, {opacity: 0, y: $(this).height() + "px", ease: Power2.easeInOut,

														onComplete:

															function() {
																
																console.log( Cookies.get(cookiePrivacyPolicy) + " cookie created for visitor.");
																Cookies.set(cookiePrivacyPolicy, valuePrivacyPolicy, { expires: cookieExpireDate, secure: cookiseSecure });

																$$("#ui-modal-privacy-policy").remove();
																
															},

														});

	});


/* -------------------------------------------------- */
/* RUN CHECK
/* -------------------------------------------------- */

var cookieCheck = function() {
	"use strict";

	/* -------------------------------------------------- */
	/* PRIVACY / COOKIE POLICY
	/* -------------------------------------------------- */
	
	if ( $showPrivacyPolicy && Cookies(cookiePrivacyPolicy) ) {	

		console.log( Cookies.get(cookiePrivacyPolicy) + " cookie found! Visitor has already accepted Privacy and Cookie Policy.");

		$$("#ui-modal-privacy-policy").remove();

	} else if ( $showPrivacyPolicy ) {

		console.log("First visit. User has not accepted Privacy / Cookie Policy yet.");

		TweenMax.to($$("#ui-modal-privacy-policy"), 0.5, {display: "block", y: 0, opacity: 1, ease: Power4.easeOut});

	} else if ( !$showPrivacyPolicy ) {
			   
		// Do nothing.
			   
	}

};

cookieCheck();


/* -------------------------------------------------- */
/* DEBUG / URL COMMANDS
/* -------------------------------------------------- */

if ( window.location.hash === "#delete" ) {
	
	console.log( Cookie.get(cookiePrivacyPolilcy) + " deleted.");
	Cookies.remove(cookiePrivacyPolicy);
	
}
