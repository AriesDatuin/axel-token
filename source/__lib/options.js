/* -------------------------------------------------- */
/* CACHE SELECTORS
/* -------------------------------------------------- */

// BLOCKS
html = $("html"),
body = $("body"),
main = $("main"),
section = $("section"),
article = $("article"),
footer = $("footer"),


// ELEMENTS
preloader = $("#preloader"),


navbarToggle = $("#navbar-toggle"),
navPanelToggle = $("#nav-panel-toggle"),
navToggle = $(".nav-toggle"),
navToggleLabel = $(".nav-toggle-label"), // Set to false or leave blank to remove 'navbarCallout'.
navbarLabel = $("#navbar-label"),
navPanelLabel = $("#nav-panel-label"),


navbar = $("#navbar"),
navbarMenubar = $("#navbar .menubar"),
navbarContents = $("#navbar-contents"),
navbarItems = $("#navbar-items > ul > li"),
navbarLogo = $("#navbar-logo"),
navbarCallout = $("#navbar-callout"), // Set to false or leave blank to remove 'navbarCallout'.
navItems = $(".nav-items"),


toolbar = $("#toolbar"),
toolbarMenubar = $("#toolbar .menubar"),
toolbarContents = $("#toolbar-contents"),
toolbarItems = $("#toolbar-items nav > ul > li"),


navPanel = $("#nav-panel"),
navPanelMenubar = $("#nav-panel .menubar"),
navPanelContents = $("#nav-panel-contents"),
navPanelItems = $("#nav-panel-items > ul > li"),
navPanelLogo = $("#nav-panel-logo"),
navPanelCallout = $("#nav-panel-callout"), // Set to false or leave blank to remove 'navPanelCallout'.


panelOverlay = $(".js-off-canvas-overlay"),
navPanelString = "#nav-panel";
	
	
/* -------------------------------------------------- */
/* OPTIONS
/* -------------------------------------------------- */

// PRELOADER
var $usePreloader = false, // Setting to true will also allow transitions between pages. 


// PRIVACY / DATA / POPUPS
$showPrivacyPolicy = true,


// ELEMENT SIZING
$navbarHeight = "75px",
$navbarShrinkHeight = "60px",
$navbarShowOnPageEndHeight = "75px",

$toolbarHeight = "75px",
$toolbarShrinkHeight = "60px",
$toolbarShowOnPageEndHeight = "75px",
//$navPanelWidth = "100%",


// NAV / LOGO / LABEL / CALLOUT / SCROLL PROGRESS
$navbarOrder = "right", // Define order of elements: left (logo, navbar menu items/nav toggle), right (navbar menu items/nav toggle, logo).
$navbarItemsPosition = "right", // Define alignment: left, center, right.


//$showScrollProgress = false,


// BREAKPOINTS
$navbarBreakpoint = "1024px",
$toolbarBreakpoint = "1024px",
$toolbarMobileBreakpoint = "1024px",


// SCROLL BEHAVIOR
$allowScrollTo = true,
$scrollToSpeed = 1,
$scrollToOffsetY = 50,
$scrollToEase = Power4.easeInOut,


// THROTTLE / DEBOUNCE INTERVAL
$delayInterval = 1, // Set delay interval before function fires.
$updateInterval = 1000, // Set debounce / throttling interval. Increasing this value will limit events being fired every so often.
$throttleTrail = true,
$throttleLeading = true,


// STICKY
stickyAnchor = "",
$stickyAnchorTolerance = 0,
$navbarAllowSticky = false,
$navbarStickyClass = "sticky", // See 'app.css' for 'sticky' class.
$stickyOffset = 0,
$stickyScrollToleranceUp = 0,
$stickyScrollToleranceDown = 0,
 

// NAV TOGGLE
//useNavbarToggleColor = false,
//navbarToggleColor = "background-white",
//navPanelToggleColor = "background-white",	


// NAVBAR
$navbarShrinkSpeed = 0.25,
$navbarShrinkEase = Power4.easeInOut,
$navbarHideOnScrollUp = false,
$navbarHideOnScrollDown = true,
$navbarShowOnPageEnd = false,
$navbarHideSpeed = 0.25,
$navbarHideEase = Power4.easeIn,


// TOOLBAR
$toolbarShowOnMobileOnly = false,
$toolbarShrinkSpeed = 0.5,
$toolbarShrinkEase = Power4.easeOut,
$toolbarHideOnScrollUp = true,
$toolbarHideOnScrollDown = true,
$toolbarShowOnPageStart = false,
$toolbarShowOnPageEnd = true,
$toolbarHideSpeed = 0.25,
$toolbarHideEase = Power4.easeOut,


// NAV PANEL
$useNavPanelAnimation = true,
$navPanelPosition = "top",
$navPanelTransitionSpeed = "0.5s", // Define timing in seconds (ex: 1s).
$navPanelTransitionEase = "InOut", // Define easing Type 1 to 7: Quad, Cubic, Quart, Quint, Expo, Circ, InOut.
$navPanelCloseOnLinkClick = true,
$navPanelItemsClass = "",
$panelOverlayTransitionSpeed = 1,
//$panelOverlayOutSpeed = 1,
$panelOverlayDelay = 1, // Keep this number as low as possible.


// CONTENT ANIMATION
$contentOpacity = 1,
$contentScale = 1,
$contentSpeed = 0.2,
$contentEase = Power4.easeOut;
