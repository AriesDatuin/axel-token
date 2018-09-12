"use strict";

/* -------------------------------------------------- */
/* CONFIG FILE
/* -------------------------------------------------- */

const configFile = "config.json",
	  revFile = "rev.json",
	  serverFile = "config-server.json",
	  metadataFile = "metadata.json";

/* -------------------------------------------------- */
/* MODULES
/* -------------------------------------------------- */

// CORE
import gulp from "gulp"; // Core Gulp module.
import hubRegistry from "gulp-hub"; // Register tasks.


// MODULES
import autoprefixer from "gulp-autoprefixer"; // Include vedor-specific CSS prefixes in style sheet files.
import awsPublish from "gulp-awspublish"; // Push files to AWS S3 Bucket.
import awsSDK from "aws-sdk"; // Official AWS SDK for JavaScript, available for browsers and mobile devices, or Node.js backends.
import babel from "gulp-babel"; // JavaScript converter and compiler.
import browserSync from "browser-sync"; browserSync.create(); // Sync and update changes for local development.
import browserSyncHTMLInjector from "bs-html-injector"; // Plugin to update (inject) HTML changes similar to CSS injection.
import csslint from "gulp-csslint"; // Detect errors and potential problems in CSS syntax.
import cleanCSS from "gulp-clean-css"; // Minify CSS files.
import concat from "gulp-concat"; // Bundle JS or CSS files.
import cssDeclarationSorter from "css-declaration-sorter"; // Sort CSS declarations.
import defer from "gulp-defer"; // Moves render blocking JavaScript and CSS files into a deferred loading section.
import del from "del"; // Delete files and directories.
import deleteEmpty from "delete-empty"; // Delete empty directories.
import ftp from "vinyl-ftp"; // Deploy to server.
import fs from "fs"; // Read, sync and parse.
import ga from "gulp-ga"; // Include Google Analytics tracker.
import generateSitemap from "gulp-sitemap"; // Generate a sitemap.
import git from "gulp-git"; // Push files to Github.
import gulpif from "gulp-if"; // Allows for conditional operators (if, &&, ||, ==, ===, <, >) in pipe streams.
import gutil from "gulp-util"; // For logging tasks and process streams.
import htmlmin from "gulp-htmlmin"; // Minify HTML files.
import htmlreplace from "gulp-html-replace"; // Replace build blocks in HTML files.
import imagemin from "gulp-imagemin"; // Compress raster image assets.
import jsonReplace from "gulp-json-replace"; // Replaces strings from JSON data.
import jshint from "gulp-jshint"; // Detect errors and potential problems in JavaScript code.
import modernizr from "gulp-modernizr"; // Detect browser and device specific features.
import noopener from "gulp-noopener"; // Inserts 'rel=noopener' to links that open in a new window.
import open from "gulp-open"; // Access and open files in a browser.
import path from "path"; // Resolves pathing issues.
import panini from "panini"; // Foundation Handlebars templating engine.
import postcss from "gulp-postcss"; // CSS Pre and post processer.
import postcssvariables from "postcss-css-variables"; // Plugin to process CSS variables.
import prompt from "gulp-prompt"; // Allow user inputs.
import purgecss from "gulp-purgecss"; // Removes unused CSS in production files. *Note: This will enable ':hover' states on touch devices.
import purgeHtml from "purgecss-from-html" // Removes unused CSS in production files. *Note: This will enable ':hover' states on touch devices.
import removeCode from "gulp-remove-code"; // Remove sections of code from files based on conditions.
import rename from "gulp-rename"; // Rename directories and file names.
import rev from "gulp-rev"; // File revisioning.
import revRewrite from "gulp-rev-rewrite"; // Rewrite occurrences of file names which have been renamed by gulp-rev.
import revDelete from "gulp-rev-delete-original"; // Delete the original file rewritten by gulp-rev or gulp-rev-all.
import revFormat from "gulp-rev-format"; // Formatting options for revisioned files.
import robots from "gulp-robots"; // Generate robots.txt.
import sourcemaps from "gulp-sourcemaps"; // Generate JS or CSS sourcemaps.
import svg2png from "gulp-svg2png"; // Convert SVG files to PNG files.
import svgmin from "gulp-svgmin"; //Compress SVG assets.
import svgSprite from "gulp-svg-sprites"; // Generate an SVG sprite sheet.
import uglify from "gulp-uglify"; // Minify JS files.
import webp from "gulp-webp"; // Convert image assets to WebP format.
import workbox from "workbox-build"; // Integrate Service Worker to leverage precache features.


/* -------------------------------------------------- */
/* SOURCE PATHS
/* -------------------------------------------------- */

const config = JSON.parse(fs.readFileSync(configFile)),
	  server = JSON.parse(fs.readFileSync(serverFile)), // Defined in deploy task.
	  dir = path.resolve, // path.join
	  root = dir(__dirname);


/* -------------------------------------------------- */
/* OPTIONS
/* -------------------------------------------------- */

let production = config.options.production;


/* -------------------------------------------------- */
/* REGISTER TASKS
/* -------------------------------------------------- */

//const hub = new hubRegistry(["tasks/sync.js"]);
//gulp.registry(hub);


/* -------------------------------------------------- */
/* GOOGLE ANALYTICS
/* -------------------------------------------------- */

export function analytics(done) {

	if ( config.ga.track ) {

		console.log("Injecting GA tracker...");
	
		return gulp.src( config.paths.build + "**/*.{html,php}" )
				   .pipe(ga({
							  url: config.ga.url,
							  uid: config.ga.uid,
							  anonymizeIp: config.ga.anonymizeIp,
							  bounceTime: config.ga.bounceTime,
							  demographics: config.ga.demographics,
							  linkAttribution: config.ga.linkAttribution,
							  minify: config.ga.minify,
							  nonceTag: config.ga.nonceTag,
							  require: config.ga.require,
							  sendPageView: config.ga.sendPageView,
							  tag: config.ga.tagPlacement
							}))
				   .pipe(gulp.dest( config.paths.build ));

	} else {

		return done();

	}

}


/* -------------------------------------------------- */
/* META TAGS
/* -------------------------------------------------- */

export function meta() {
	
	console.log("Injecting data from: " + metadataFile);
	
	return gulp.src([config.paths.build + "browserconfig.xml",
					 config.paths.build + "manifest.json",
					 config.paths.build + "**/*.{html,php}"])
			   .pipe(jsonReplace( {src: metadataFile, identify: "--"} ))
			   .pipe(gulp.dest( config.paths.build ));
	
}


/* -------------------------------------------------- */
/* ROBOTS
/* -------------------------------------------------- */

export function robotstxt() {

	console.log("Generating robots.txt...");

	return gulp.src([config.paths.build + "**/*.html",
					 "!" + config.paths.build + "modals/*"])
			   .pipe(robots({useragent: config.robots.useragent,
			   				 //allow: config.robots.allow,
			   				 disallow: config.robots.disallow,
			   				 sitemap: config.options.site + "/sitemap.xml"
			   }))
			   .pipe(gulp.dest(config.paths.build));
}


/* -------------------------------------------------- */
/* SITEMAP
/* -------------------------------------------------- */

export function sitemap() {

	console.log("Generating sitemap...");

	return gulp.src([config.paths.build + "**/*.html",
					 "!" + config.paths.build + "modals/*"])
			   .pipe(generateSitemap( {siteUrl: config.options.site} ))
			   .pipe(gulp.dest( config.paths.build ));

}


//, data = JSON.stringify(json, null, "\t")


/* -------------------------------------------------- */
/* SERVICE WORKER
/* -------------------------------------------------- */

export function sw(done) {

	if ( config.options.serviceworker && production ) {

		console.log("Generating Service Worker...");

		return workbox.generateSW({
								   globDirectory: config.paths.build,
								   globPatterns: ["**/*.{css,eot,gif,html,jp2,jpg,jpeg,js,jxr,mp4,mpeg,ogg,ogv,otf,php,png,svg,tiff,ttf,webm,webp,woff,woff2}"],
			
								   runtimeCaching: [{
													 urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
													 handler: "cacheFirst",
													 options: {
														 cacheName: "font-cache",
														 expiration: {
															 maxEntries: 10,
														 },
													 },
								   					}],
								   swDest: `${config.paths.build}/sw.js`,
								   clientsClaim: true,
								   skipWaiting: true
								  })
					  .then(({warnings}) => {

						for (const warning of warnings) {

							console.warn(warning);

						}

						console.info("Service worker generation completed.");

					  }).catch((error) => {

						console.warn("Service worker generation failed:", error);

					  });

	} else {

		console.log("Service Worker not in use.");

		return done();

	}

}


/* -------------------------------------------------- */
/* ERROR REPORTING
/* -------------------------------------------------- */

// JS
export function checkjs() {

	return gulp.src(config.paths.source + config.js.paths + "*.js")
			   .pipe(gulpif( config.js.lint, jshint() ))
			   .pipe(gulpif( config.js.lint, jshint.reporter() ));

}


// CSS
export function checkcss() {

	return gulp.src( config.paths.source + config.css.paths + "*.css" )
			   .pipe(gulpif( config.css.lint, csslint.formatter() ))
			   .pipe(gulpif( config.css.lint, csslint() ));

}


/* -------------------------------------------------- */
/* VERSIONING / CACHE BUST
/* -------------------------------------------------- */

//*Note: In order for cache-bust to work production in config.json must be set to true.

// JS
export function hashscripts(done) {
<<<<<<< HEAD

	if ( config.versioning.scripts.allow && production ) {

		console.log("Hashing script files...");

		// TASK
		return gulp.src( config.paths.build + config.scripts.output + "**/*" )
				   .pipe(rev())
				   .pipe(revFormat({prefix: config.versioning.scripts.prefix,
									suffix: config.versioning.scripts.suffix,
									lastExt: false
					}))
				   .pipe(gulp.dest( config.paths.build + config.scripts.output ))
				   .pipe(revDelete())
				   .pipe(revRewrite())

				   .pipe(rev.manifest( revFile, { base: config.paths.build + config.scripts.output, merge: true } )) 
				   .pipe(gulp.dest( config.paths.build + config.scripts.output ))

				   .on("end", function () {

									console.log("Injecting revisioned script files...");

									const manifest = gulp.src( revFile );

									return gulp.src([config.paths.build + "**/*"])
											   .pipe(revRewrite({ manifest }))
											   .pipe(gulp.dest( config.paths.build ));

											   });

	} else {

		return done();

	}

}


// ASSETS
export function hashassets(done) {

	if ( config.versioning.images.allow && production ) {

		console.log("Hashing asset files...");

		// TASK
		return gulp.src([config.paths.build + config.images.paths + "**/*",
						 "!" + config.paths.build + config.images.paths + "icons/*",
						 "!" + config.paths.build + config.images.paths + "social/*"])
				   .pipe(rev())
				   .pipe(revFormat({prefix: config.versioning.images.prefix,
									suffix: config.versioning.images.suffix,
									lastExt: false
					}))
				   .pipe(gulp.dest( config.paths.build + config.images.paths ))
				   .pipe(revDelete())
				   .pipe(revRewrite())

				   .pipe(rev.manifest( revFile, { base: config.paths.build + config.images.paths, merge: true } )) 
				   .pipe(gulp.dest( config.paths.build + config.images.paths ))

				   .on("end", function () {

=======

	if ( config.versioning.scripts.allow && production ) {

		console.log("Hashing script files...");

		// TASK
		return gulp.src( config.paths.build + config.scripts.output + "**/*" )
				   .pipe(rev())
				   .pipe(revFormat({prefix: config.versioning.scripts.prefix,
									suffix: config.versioning.scripts.suffix,
									lastExt: false
					}))
				   .pipe(gulp.dest( config.paths.build + config.scripts.output ))
				   .pipe(revDelete())
				   .pipe(revRewrite())

				   .pipe(rev.manifest( revFile, { base: config.paths.build + config.scripts.output, merge: true } )) 
				   .pipe(gulp.dest( config.paths.build + config.scripts.output ))

				   .on("end", function () {

									console.log("Injecting revisioned script files...");

									const manifest = gulp.src( revFile );

									return gulp.src([config.paths.build + "**/*"])
											   .pipe(revRewrite({ manifest }))
											   .pipe(gulp.dest( config.paths.build ));

											   });

	} else {

		return done();

	}

}


// ASSETS
export function hashassets(done) {

	if ( config.versioning.images.allow && production ) {

		console.log("Hashing asset files...");

		// TASK
		return gulp.src([config.paths.build + config.images.paths + "**/*",
						 "!" + config.paths.build + config.images.paths + "icons/*",
						 "!" + config.paths.build + config.images.paths + "social/*"])
				   .pipe(rev())
				   .pipe(revFormat({prefix: config.versioning.images.prefix,
									suffix: config.versioning.images.suffix,
									lastExt: false
					}))
				   .pipe(gulp.dest( config.paths.build + config.images.paths ))
				   .pipe(revDelete())
				   .pipe(revRewrite())

				   .pipe(rev.manifest( revFile, { base: config.paths.build + config.images.paths, merge: true } )) 
				   .pipe(gulp.dest( config.paths.build + config.images.paths ))

				   .on("end", function () {

>>>>>>> 1263d2b31132ff57e30493ab1a60f84b3a8ebfd9
									console.log("Injecting revisioned asset files...");

									const manifest = gulp.src( revFile );

									return gulp.src([config.paths.build + "**/*"])
											   .pipe(revRewrite({ manifest }))
											   .pipe(gulp.dest( config.paths.build ));

											   });

	} else {

		return done();

	}

}


// INJECT
export function inject(done) {

	if ( config.versioning.scripts && production ) {

		console.log("Injecting hashed files...");

		const manifest = gulp.src( revFile );

		return gulp.src([config.paths.build + "**/*"])
				   .pipe(revRewrite({ manifest }))
				   .pipe(gulp.dest( config.paths.build ));

	} else {

		return done();

	}

}


/* -------------------------------------------------- */
/* JS
/* -------------------------------------------------- */

// OPTIONS *Note: Leave as-is. These are the recommended values.
const uglifyJSOptions = {
		compress: {
				   dead_code: true,
				   drop_console: true,
		},
		ie8: false,
		keep_fnames: false,
		mangle: true,
		toplevel: false
};


// MAIN
export function js() {

	console.log("Compiling " + config.js.bundle);


	return gulp.src(config.js.paths.map( function(base) { return config.paths.source + base } ), {allowEmpty: true} )
			   .pipe(gulpif( config.options.sourcemaps, sourcemaps.init() ))
			   //.pipe(modernizr())
			   //.pipe(babel())
			   .pipe(removeCode({production: true}))
			   .pipe(gulpif( production, uglify(uglifyJSOptions).on("error", gutil.log) ))
			   .pipe(concat(config.js.bundle))
			   .pipe(gulpif( config.options.sourcemaps, sourcemaps.write("maps") ))
			   .pipe(gulp.dest( config.paths.build + config.scripts.output ));

}


// VENDORS
export function vendors() {

	console.log("Compiling " + config.vendors.bundle);


	return gulp.src(config.vendors.paths.map( function(base) { return config.paths.source + base } ), {allowEmpty: true} )
			   .pipe(gulpif( config.vendors.lint, jshint() ))
			   .pipe(gulpif( config.vendors.lint, jshint.reporter() ))
			   .pipe(gulpif( config.options.sourcemaps, sourcemaps.init() ))
			   //.pipe(modernizr())
			   //.pipe(babel())
			   .pipe(removeCode({production: true}))
			   .pipe(gulpif( production, uglify(uglifyJSOptions).on("error", gutil.log) ))
			   .pipe(concat(config.vendors.bundle))
			   .pipe(gulpif( config.options.sourcemaps, sourcemaps.write("maps") ))
			   .pipe(gulp.dest( config.paths.build + config.scripts.output ));

}


/* -------------------------------------------------- */
/* CSS
/* -------------------------------------------------- */

// OPTIONS *Note: Leave as-is. These are the recommended values.
const plugins = [//autoprefixer({browsers: ['last 1 version']}),
				 postcssvariables({preserve: false, preserveInjectedVariables: false})
				];


const purgeCSSOptions = {
						 content: [config.paths.build + "**/*.{html,php}",
								   config.paths.build + "**/*.js"],
						 css: [config.paths.build + "**/*.css"]
	  },
	  autoPrefixCSSOptions = {
	  						  cascade: false,
							  browsers: config.optimizations.support,
							  flexbox: config.optimizations.flexbox,
							  grid: config.optimizations.grid
	  };


const cleanCSSOptions = {
		compatibility: "*",
		level: {
				1: {
					all: true,
					specialComments: false
				},
				2: {
					mergeAdjacentRules: true, // Controls adjacent rules merging; defaults to true.
					mergeIntoShorthands: false, // Controls merging properties into shorthands; defaults to true. *Note: Might cause unusual results. 
					mergeMedia: true, // Controls '@media' merging; defaults to true. *Note: Might cause unusual results.
					mergeNonAdjacentRules: true, // Controls non-adjacent rule merging; defaults to true.
					mergeSemantically: false, // Controls semantic merging; defaults to false.
					overrideProperties: true, // Controls property overriding based on understandability; defaults to true.
					removeEmpty: true, // Controls removing empty rules and nested blocks; defaults to true.
					reduceNonAdjacentRules: true, // Controls non-adjacent rule reducing; defaults to true.
					removeDuplicateFontRules: true, // Controls duplicate '@font-face' removing; defaults to true.
					removeDuplicateMediaBlocks: true, // Controls duplicate '@media' removing; defaults to true.
					removeDuplicateRules: true, // Controls duplicate rules removing; defaults to true.
					removeUnusedAtRules: false, // Controls unused at rule removing; defaults to false (available since 4.1.0).
					restructureRules: false, // Controls rule restructuring; defaults to false.
					skipProperties: [] // Controls which properties won't be optimized, defaults to '[]' which means all will be optimized (since 4.1.0).
				}
		}
};


// MAIN
export function css() {

	console.log("Compiling " + config.css.bundle);


	return gulp.src(config.css.paths.map( function(base) { return config.paths.source + base } ), {allowEmpty: true} )
			   .pipe(gulpif( config.options.sourcemaps, sourcemaps.init() ))
			   .pipe(concat(config.css.bundle, {rebaseUrls: false}))
			   .pipe(postcss(plugins))
			   .pipe(gulpif( production, purgecss(purgeCSSOptions) ))
			   .pipe(gulpif( config.optimizations.autoprefix, autoprefixer(autoPrefixCSSOptions) ))
			   .pipe(gulpif( production, cleanCSS(cleanCSSOptions) ))
			   .pipe(gulpif( config.options.sourcemaps, sourcemaps.write("maps") ))
			   .pipe(gulp.dest( config.paths.build + config.scripts.output ))
			   .pipe(browserSync.stream());

}


/* -------------------------------------------------- */
/* HTML
/* -------------------------------------------------- */

// OPTIONS *Note: Leave as-is. These are the recommended values.
const htmlminOptions = {
	  collapseWhitespace: true,
	  minifyCSS: true,
	  minifyJS: true,
	  removeComments: true,
	  useShortDoctype: true
};


// MAIN
export function html() {

	console.log("Compiling HTML...");

	const stylesheet = "'stylesheet'";


	// TASK
	return gulp.src( config.paths.source + config.html.paths )
			   .pipe(panini({
							 data: config.paths.source + config.html.data,
							 helpers: config.paths.source + config.html.helpers,
							 layouts: config.paths.source + config.html.layouts,
							 partials: config.paths.source + config.html.partials,
							 root: config.paths.source + config.html.root
							})
			   )
			   .pipe(htmlreplace({
								  base: {
										 src: "https://" + "s3-" + server.aws.region + ".amazonaws.com/" + server.aws.bucket + "/",
										 tpl: '<base href="%s">'
								  },

								  scripts: {
										   src: gulp.src( config.paths.source + config.html.inlineScripts.js ),
										   tpl: "<script>%s</script>"
										  },

								  vendors: {
										   src: config.scripts.output + config.vendors.bundle,
										   tpl: '<script src="%s" '+config.vendors.jsAttribute+'></script>'
										  },

								  critical: {
											 src: gulp.src( config.paths.source + config.html.inlineScripts.css ),
											 tpl: "<style>%s</style>"
								  },

								  css: {
										src: config.scripts.output + config.css.bundle,
										tpl: '<link rel="preload" href="%s" as="style" onload="this.onload=null;this.rel='+stylesheet+'">'
								  },

								  js: {
									   src: config.scripts.output + config.js.bundle,
									   tpl: '<script src="%s" '+config.js.jsAttribute+'></script>'
								  }
								  //css: cssApp,
								  //js: jsApp

			   }, {keepUnassigned: true, keepBlockTags: true, resolvePaths: true} ))
			   //.pipe(defer())	
			   .pipe(removeCode({production: true}) )
			   .pipe(gulpif( !server.aws.upload, removeCode({removeBase: true}) ))
			   .pipe(gulpif( !config.options.serviceworker || !config.options.serviceworker && !production, removeCode({removeSW: true}) ))
			   .pipe(gulpif( !config.options.appBanner, removeCode({removeAppBanner: true}) ))
			   .pipe(gulpif( !config.vendors.useVendorScripts, removeCode({removeVendor: true}) ))
			   .pipe(noopener.overwrite())
			   .pipe(gulpif( production, htmlmin(htmlminOptions) ))
			   .pipe(gulp.dest( config.paths.build ));

}


// MODALS
export function modals() {

	console.log("Compiling modals...");

	return gulp.src( config.paths.source + config.html.modals.paths )
			   .pipe(panini({
							 data: config.paths.source + config.html.data,
							 helpers: config.paths.source + config.html.helpers,
							 layouts: config.paths.source + config.html.layouts,
							 partials: config.paths.source + config.html.partials,
							 root: config.paths.source + config.html.modals.paths
							})
			   )
			   .pipe(gulpif( production, htmlmin(htmlminOptions) ))
			   .pipe(noopener.overwrite())
			   .pipe(gulp.dest( config.paths.build + config.html.modals.output ));

}


/* -------------------------------------------------- */
/* MOVE FOLDERS AND ASSETS
/* -------------------------------------------------- */

export function move(done) {

	console.log("Copying directories and files...");

	return gulp.src([config.paths.source + "**/.htaccess",
					 config.paths.source + "**/*",
					 "!" + config.paths.source + "**/_*/*",
					 "!" + config.paths.source + "**/*.html",
					 "!" + config.paths.source + "**/*.php"], {base: config.paths.source})
				.pipe(gulp.dest( config.paths.build ))

				.on("end", function () {

					console.log("Deleting unnecessary directories...");

					del([config.paths.build + "css/",
						 config.paths.build + "lib/"]);

					deleteEmpty.sync( config.paths.build );
				
					return done();

				});

}


/* -------------------------------------------------- */
/* ASSET PATHS
/* -------------------------------------------------- */

export function assets() {

	console.log("Copying image assets...");

	return gulp.src( config.paths.source + "**/*.{gif,jpg,jpeg,png,svg}" )
			   .pipe(rename({
							 dirname: config.images.paths,
							 //basename: "",
							 //prefix: "",
							 //suffix: "",
							 //extname: ""
							}))
			   .pipe(gulp.dest( config.paths.build ));


}


/* -------------------------------------------------- */
/* ASSET COMPRESSION
/* -------------------------------------------------- */

// RASTER IMAGES (GIF, JPG, PNG)
export function raster() {

	console.log("Compressing images assets...");

	return gulp.src( config.paths.build + "**/*.{gif,jpg,jpeg,png,svg}", {base: config.paths.build} )
			   .pipe(gulpif( production, imagemin([imagemin.optipng({optimizationLevel: config.images.raster.level}),
							   imagemin.gifsicle({interlaced: config.images.raster.interlaced}),
							   imagemin.jpegtran({progressive: config.images.raster.progressive}),
							  ], {verbose: true}) )
			   )
			   .pipe(gulpif( config.images.webp.convert, webp({method: config.images.webp.level,
														   	   quality: config.images.webp.quality,
														   	   alphaQuality: config.images.webp.alphaQuality,
														   	   sharpness: config.images.webp.sharpness,
														   	   filter: 0,
														   	   autoFilter: false,
														   	   lossless: false,
														   	   nearLossless: 100,
														   	   sns: 80})
			   ))
			   
			   .pipe(gulp.dest( config.paths.build ));

}


// VECTOR (SVG)
// OPTIONS *Note: Leave as-is. These are the recommended values.
const svgminOptions = {
	  addAttributesToSVGElement: true, // Adds attributes to an outer <svg> element (disabled by default).
	  addClassesToSVGElement: true, // Add classnames to an outer <svg> element (disabled by default).
	  cleanupAttrs: config.images.svg.cleanup, // Cleanup attributes from newlines, trailing, and repeating spaces.
	  cleanupEnableBackground: config.images.svg.cleanup, // Remove or cleanup enable-background attribute when possible.
	  cleanupIDs: config.images.svg.cleanup, // Remove unused and minify used IDs.
	  cleanupListOfValues: config.images.svg.cleanup, // Round numeric values in attributes that take a list of numbers (like viewBox or enable-background).
	  cleanupNumericValues: config.images.svg.cleanup, // Round numeric values to the fixed precision, remove default px units.
	  collapseGroups: config.images.svg.minify, // Collapse useless groups.
	  convertColors: true, // Convert colors (from rgb() to #rrggbb, from #rrggbb to #rgb).
	  convertPathData: config.images.svg.minify, // Convert Path data to relative or absolute (whichever is shorter), convert one segment to another, trim useless delimiters, smart rounding, and much more.
	  convertShapeToPath: config.images.svg.minify, // Convert some basic shapes to <path>.
	  convertStyleToAttrs: true, // Convert styles into attributes.
	  convertTransform: config.images.svg.minify, // Collapse multiple transforms into one, convert matrices to the short aliases, and much more.

	  inlineStyles: true, // Move and merge styles from <style> elements to element style attributes.
	  
	  mergePaths: config.images.svg.minify, // Merge multiple Paths into one.
	  minifyStyles: config.images.svg.minify, // Minify <style> elements content with CSSO.
	  moveElemsAttrsToGroup: true, // Move elements' attributes to their enclosing group.
	  moveGroupAttrsToElems: true, // Move some group attributes to the contained elements.

	  removeAttrs: true, // Remove attributes by pattern (disabled by default).
	  removeComments: config.images.svg.minify, // Remove comments.
	  removeDimensions: true, // Remove width/height attributes if viewBox is present (opposite to removeViewBox, disable it first) (disabled by default).
	  removeDoctype: config.images.svg.cleanup, // Remove doctype declaration.
	  removeDesc: config.images.svg.cleanup, // Remove <desc>.
	  removeEditorsNSData: config.images.svg.minify, // Remove editors namespaces, elements, and attributes.
	  removeElementsByAttr: config.images.svg.minify, // Remove arbitrary elements by ID or className (disabled by default).

	  removeEmptyAttrs: config.images.svg.cleanup, // Remove empty attributes.
	  removeEmptyContainers: config.images.svg.cleanup, // Remove empty Container elements.
	  removeEmptyText: config.images.svg.removeEmptyText, // Remove empty Text elements.
	  removeTitle: config.images.svg.removeTitle, // Remove <title>.
	  removeHiddenElems: config.images.svg.cleanup, // Remove hidden elements.
	  removeMetadata: config.images.svg.removeMetadata, // Remove <metadata>.
	  removeNonInheritableGroupAttrs: config.images.svg.minify, // Remove non-inheritable group's "presentation" attributes.
	  removeRasterImages: config.images.svg.removeRaster, // Remove raster images (disabled by default).
	  removeScriptElement: config.images.svg.removeScript, // Remove <script> elements (disabled by default).
	  removeStyleElement: config.images.svg.removeStyle, // Remove <style> elements (disabled by default).
	  removeUnknownsAndDefaults: config.images.svg.minify, // Remove unknown elements content and attributes, remove attrs with default values.
	  removeUnusedNS: config.images.svg.cleanup, // Remove unused namespaces declaration.
	  removeUselessDefs: config.images.svg.cleanup, // Remove elements of <defs> without id.
	  removeUselessStrokeAndFill: config.images.svg.cleanup, // Remove useless stroke and fill attrs.
	  removeViewBox: config.images.svg.removeViewBox, // Remove viewBox attribute when possible.
	  removeXMLNS: false, // Removes xmlns attribute (for inline svg, disabled by default).
	  removeXMLProcInst: true, // Remove XML processing instructions.

	  sortAttrs: true // Sort element attributes for epic readability (disabled by default).
};


export function svg() {

	console.log("Compressing svg assets...");

	return gulp.src( config.paths.build + "**/*.svg", {base: config.paths.build} )
			   .pipe(svgmin(svgminOptions))
			   .pipe(gulpif( config.images.svg.convert, svg2png() ))
			   .pipe(gulp.dest(config.paths.build));

}


// SPRITE GENERATOR
export function sprite() {

	console.log("Generating svg sprite sheet...");

	return gulp.src( config.paths.build + config.images.paths + config.images.sprite.paths + "**/*.svg", {base: config.paths.build} )
			   .pipe(svgSprite({mode: config.images.sprite.mode,
			   					layout: config.images.sprite.layout,
			   					common: config.images.sprite.class,
			   					selector: config.images.sprite.selector + "-%f",

			   					cssFile: config.images.sprite.css,
			   					svgPath: config.paths.build + config.images.sprite.paths,
			   					pngPath: config.paths.build + config.images.sprite.paths,

			   					preview: config.images.sprite.preview.allow
			   				   }
			   	))
			   .pipe(gulpif( config.images.sprite.convert, svg2png() ))
			   .pipe(gulp.dest(config.paths.build + config.images.paths + config.images.sprite.paths));

}



/* -------------------------------------------------- */
/* CLEAN BUILD FOLDER
/* -------------------------------------------------- */

// DO NOT EDIT THESE CODE BLOCKS! YOU WILL END UP DELETING THE PROJECT'S ROOT FOLDER.

export function clear() {

	console.log("Cleaning " + config.paths.build + " folder...");
	
	return del([revFile,
				config.paths.source + "css/sorted",
				config.paths.build + "**/*",
				config.paths.build + ".htaccess"]);

	//return deleteEmpty.sync( config.paths.build );

}


export function clean() {

	console.log("Cleaning " + config.paths.build + " folder...");

	return del([revFile,
		 		config.paths.build + "fonts/**/*.css",
		 		config.paths.build + "fonts/fonts.list"]);

	//return deleteEmpty.sync( config.paths.build );

}


/* -------------------------------------------------- */
/* BROWSERSYNC
/* -------------------------------------------------- */

export function sync() {

	console.log("Syncing...");


	// CONNECT TO LOCALHOST / DEV SERVER
	browserSync.use(browserSyncHTMLInjector);

	browserSync.init({
					  //files: config.sync.files,
					  server: {
							   baseDir: config.paths.build,
							   serveStaticOptions: {
													extensions: ["html", "php"],
							   middleware: function (req, res, next) {
											   res.setHeader("Access-Control-Allow-Origin:", "*");
											   next();
										   }
							   }
					  },
					  notify: config.sync.notify,

					  browser: config.sync.browsers, // chrome, firefox, IE, opera, safari
					  host: config.sync.host,
					  https: config.sync.https,
					  localOnly: config.sync.localOnly,
					  online: config.sync.online,
					  port: config.sync.port,

					  cors: config.sync.cors,
					  open: config.sync.open, // external, local, tunnel, ui, false
					  tunnel: config.sync.tunnel,
					  xip: config.sync.xip, // .xip.io

					  codeSync: config.sync.codeSync,
					  injectChanges: config.sync.injectChanges,
					  watch: config.sync.watch,

					  ghostMode: config.sync.ghostMode,

					  reloadDebounce: config.sync.reloadDebounce,
					  reloadDelay: config.sync.reloadDelay,
					  reloadThrottle: config.sync.reloadThrottle,

					  scrollElements: config.sync.scrollElements,
					  scrollElementMapping: config.sync.scrollElementMapping,
					  scrollProportionally: config.sync.scrollProportionally,
					  scrollRestoreTechnique: config.sync.scrollRestoreTechnique,
					  scrollThrottle: config.sync.scrollThrottle,

					  logConnections: config.sync.logConnections,
					  logFileChanges: config.sync.logFileChanges,
					  logLevel: config.sync.logLevel,
					  logPrefix: config.options.site,
					  timestamps: config.sync.timestamps,
					  plugins: [],

					  callbacks: {

							ready: function(err, bs) {

								console.log(config.options.site + " connected!");
								//openNewTab = false;

							}

					  }

	});


	// WATCH
	gulp.watch(config.paths.source + "**/*.js").on("all", js, reload);

	//gulp.watch(config.paths.source + config.vendors.path + "**/*.js").on("all", vendors, reload);

	gulp.watch(config.paths.source + "**/*.css").on("all", css);

	gulp.watch(config.paths.source + "**/*.{app,avi,dmg,doc,eot,exe,gif,jp2,jpg,jpeg,jxr,mid,midi,mp3,mp4,mpeg,mov,ogg,ogv,otf,pdf,png,rar,svg,tiff,ttf,txt,webm,webp,woff,woff2,zip}", gulp.series(move, reload));

	gulp.watch([metadataFile,
				config.paths.source + config.html.paths
			   ]).on("all", gulp.series(html, modals, meta, refresh));


	gulp.watch([configFile,
				//credentialsFile,
				metadataFile,
				config.paths.source + "{_data,_helpers,_layouts,_modals,_partials}/**/*.{html,hbs,handlebars,json,yml}",
				config.paths.source + "**/critical.css",
				config.paths.source + "**/browserconfig.xml",
				config.paths.source + "**/manifest.json",
			   ]).on("all", gulp.series(refresh, html, modals, meta, reload));
	
	
	//gulp.watch([config.paths.source + "{_modals}/**/*.{html,hbs,handlebars}"]).on("all", gulp.series(modals, reload));

}


/* -------------------------------------------------- */
/* SERVER SETTINGS
/* -------------------------------------------------- */

//const server = JSON.parse(fs.readFileSync(serverFile)); // Note: Need to move this to deploy task.


// Create a variable for serverOn.
let serverOn = false;


// Check if server is on.
if ( serverOn ) {

	console.log("Connection successful!");

	const server = JSON.parse(fs.readFileSync(serverFile));

} else {

	console.log("Connection severed.");

}


if( fs.existsSync(serverFile) ) {

	console.log("FILE EXISTS!");
	const server = JSON.parse(fs.readFileSync(serverFile));

} else {

	console.log("FILE DOES NOT EXIST.");
	deployinit();

}


// INIT
export function deployinit(done) {

	/* -------------------------------------------------- */
	/* WATCH
	/* -------------------------------------------------- */

	// WATCH OBJECT
	//let watcher = gulp.watch(serverFile, launch);


	// EVENT
	/*
	watcher.on("all",

				function() {

					// Check if configuration file exists.
					if ( !serverOn ) {

						console.log("Waiting...");

					} else {

						console.log("Waiting...");

						watcher.close();

					}

					//return done();

				}

	);
	*/


	// FUNCTIONS
	function launch() {

		serverOn = true;	

		setTimeout(function() { 

					console.log("Server is: " + serverOn + ", Successfully loaded " + serverFile + ".")

					//gitdeploy();

		}, 1000 );

	}


	/* -------------------------------------------------- */
	/* DATA
	/* -------------------------------------------------- */

	// Create data object to write to json settings file.
	let json = {

				"aws": {
					"upload": false,
					"dist": ["./your-production-folder"],
					"region": "us-west-1",
					"bucket": "your.bucket.com",
					"accessKeyId": "",
					"secretAccessKey": "",
					"cachecontrol": "max-age=315360000, no-transform, public",
					"cache": false,
					"sync": true,
					"gzip": true,
					"signatureVersion": "v3",
					"confirm": true
				},

				"git": {
					"upload": true,
					"dist": ["./your-production-folder"],
					"promise": "github.com/username/repo",
					"repo": "https://github.com/username/repo.git",
					"origin": "origin",
					"branch": "master",
					"user": "Username",
					"password": "Password",
					"message": ["Initial commit."],
					"timeOffset": 1000,
					"quiet": false,
					"confirm": true
				},

				"ftp": {
					"upload": false,
					"dist": ["./your-production-folder"],
					"host": "",
					"path": "./remote-path",
					"path": "dev/build",
					"user": "Username",
					"password": "Password",
					"secure": false,
					"parallel": 10,
					"maxConnections": 5,
					"timeOffset": 0,
					"idleTimeout": 100,
					"reload": true,
					"confirm": true
				}

	}, data = JSON.stringify(json, null, "\t");


	// Check if configuration file exists.
	if ( !fs.existsSync(serverFile) ) {

		console.log("Cound not find a server configuration file. One will be created for you.\nFile generated and saved to: " + root + "\\" + serverFile);

		fs.writeFile(serverFile, data, "utf8", function() {

			console.log("Use this file for your server info and run gulp deploy.");

			return gulp.src( serverFile )
					   .pipe(open());

		});



	} else {

		console.log("Found an existing server configuration file.");

		return done();

		//launch();
		//watcher.close();

	}

}


/* -------------------------------------------------- */
/* AWS
/* -------------------------------------------------- */

export function awsdeploy(done) {

	if ( server.aws.upload ) {

		console.log("Using AWS.");

		// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
		const publisher = awsPublish.create({
											 region: server.aws.region,
											 params: { Bucket: server.aws.bucket },
											 accessKeyId: server.aws.accessKeyId,
											 secretAccessKey: server.aws.secretAccessKey,
											 //credentials: new awsSDK.SharedIniFileCredentials({ profile: "aws-profile" }),
						}, {
							cacheFileName: "aws-cache"
						});

		// Define custom headers
		const headers = { "Cache-Control": server.aws.cachecontrol };

		return gulp.src( dir(server.aws.dist + "**/*"), { base: dir(server.aws.dist) } )
				   .pipe(gulpif( server.aws.gzip, awsPublish.gzip({ ext: ".gz" }) )) // GZIP, Set Content-Encoding headers and add .gz extension.
				   .pipe(publisher.publish(headers)) // Publisher will add Content-Length, Content-Type and headers specified above. If not specified it will set x-amz-acl to public-read by default
				   .pipe(gulpif( server.aws.cache, publisher.cache() )) // Create a cache file to speed up consecutive uploads.
				   .pipe(gulpif( server.aws.sync, publisher.sync() )) // This will publish and sync bucket files with the one in your public directory.
				   .pipe(awsPublish.reporter( {states: ["cache", "create", "delete", "skip", "update"]} )) // Print upload updates to console.

				   .on("end", function() {

				   		console.log("Production files will be pushed to: " + server.aws.bucket);

				   });

	} else {

		console.log("Bypassing AWS...");
		return done();

	}

}


/* -------------------------------------------------- */
/* GIT
/* -------------------------------------------------- */

//const remote = `https://${server.git.user}:${server.git.password}@${server.git.promise}`;

/* - repository = origin
		- branch = master		
*/


// INIT
export function gitdeploy(done) {

	// WATCH OBJECT
	let watcher = gulp.watch("README.md", gulp.parallel(gitupload));


	// FUNCTIONS
	function gitupload() {

		console.log("Using Git.");

		// Stop watching README.md.
		watcher.close()

		return gulp.src(server.git.dist)
					.pipe(git.add( {args: "", quiet: server.git.quiet} ))
					.pipe(git.commit(server.git.message, {args: '-m "initial commit"', quiet: server.git.quiet, disableMessageRequirement: false, disableAppendPaths: false, multiline: false} ))

					.on("end", function() {

						console.log("Production files will be pushed to: " + server.git.repo + "/" + server.git.branch);

						git.push(server.git.origin, [server.git.branch] );

					});

	}


	function watching() {

		return watcher.on("all", function() {
			console.log("Watching...");
		});

	}


	if ( server.git.upload ) {

		// INIT
		if ( fs.existsSync(".git") ) {

			console.log("Found an existing .git directory.\nPulling remote repository to local working folder.");


			// Checkout remote repository.
			setTimeout(function(){ git.checkout([server.git.branch], {args: ""}, function (err) { if (err) throw err; }); }, server.git.timeOffset);


			// Push changes from local directory to repository.
			gitupload();

		} else  {

			//console.log(err.code);
			console.log("Cound not find a .git directory. One will be created for you at: " + root);


			// Create a .git directory and required files.
			git.init({args: ""}, function (err) { if (err) throw err; });


			// Add repository to .git/config.
			setTimeout(function(){ git.addRemote(server.git.origin, server.git.repo, {args: "", quiet: server.git.quiet}, function (err) { if (err) throw err; }); }, server.git.timeOffset);


			// Pull remote repository.
			setTimeout(function(){ git.pull(server.git.origin, [server.git.branch], {args: "--allow-unrelated-histories"}, function (err) { if (err) throw err; }); }, server.git.timeOffset);


			// Check for a README.md file before running gitupload().
			watching();

		}


	} else {

		console.log("Bypassing Git...");

		// Stop watching README.md.
		watcher.close()

	}

	return done();

}


// COMMANDS
export function gitinit(done) {

	git.init({args: ""}, function (err) { if (err) throw err; });

	return done();

}


export function gitadd(done) {

	gulp.src(server.git.dist)
		.pipe(git.add( {args: "", quiet: server.git.quiet} ));

	return done();

}


export function gitaddremote(done) {

	git.addRemote(server.git.origin, server.git.repo, {args: "", quiet: server.git.quiet}, function (err) { if (err) throw err; });

	return done();

}


export function gitbranch(done) {

	git.branch("newbranch", function (err) { if (err) throw err; });

	return done();

}


export function gitcheckout(done) {

	git.checkout([server.git.branch], {args: ""}, function (err) { if (err) throw err; });

	return done();

}


export function gitclean(done) {

	git.clean({ args: "-dfx --dry-run" }, function (err) { if(err) throw err; });

	return done();

}


export function gitclone(done) {

	git.clone(server.git.repo, {args: "../sub"}, function (err) { if (err) throw err; });

	return done();

}


export function gitcommit(done) {

	gulp.src(server.git.dist)
		.pipe(git.commit(["Initial commit."], {args: '-m "initial commit"', quiet: server.git.quiet, disableMessageRequirement: false, disableAppendPaths: false, multiline: false} ));

	return done();

}


export function gitcurrent(done) {

	git.revParse({ args: "--abbrev-ref HEAD" }, function (err, branch) {

		console.log("current git branch: " + branch);

	});

	return done();

}


export function gitfetch(done) {

	setTimeout(function(){ git.fetch(server.git.repo, [server.git.branch], function (err) { if (err) throw err; }); }, server.git.timeOffset);

	return done();
}


export function gitmerge(done) {

	//git.merge("origin origin/master")
	
	git.merge(server.git.origin + " " + server.git.origin + "/" + server.git.branch)

	return done();

}


export function gitpull(done) {

	git.pull(server.git.origin, [server.git.branch], {args: "--allow-unrelated-histories"}, function (err) { if (err) throw err; });

	return done();

}


export function gitpush(done) {

	console.log("Using Git.\nProduction files will be pushed to: " + server.git.repo + "/" + server.git.branch);
	
	git.push(server.git.origin, [server.git.branch], function (err) { if (err) throw err; });

	return done();

}


export function gitreset(done) {

	console.log("Resetting...");

	git.reset("origin/master", {args: "--hard"}, function (err) { if(err) throw err; });

	return done();

}


export function gitstatus(done) {

	git.status({args: "--porcelain"}, function (err, stdout) { if (err) throw err; });

	return done();

}


gulp.task("gitresolve", gulp.series(gitpull, gitfetch, gitmerge, gitdeploy));


/* -------------------------------------------------- */
/* SERVER
/* -------------------------------------------------- */

export function ftpdeploy(done) {

	if ( server.ftp.upload ) {

		console.log("Using ftp server.");

		const conn = ftp.create({
								 host: server.ftp.host,
								 //port: server.ftp.port,
								 user: server.ftp.user,
								 password: server.ftp.password,
								 //secure: server.ftp.secure,
								 parallel: server.ftp.parallel,
								 maxConnections: server.ftp.maxConnections,
								 timeOffset: server.ftp.timeOffset,
								 idleTimeout: server.ftp.idleTimeout,
								 reload: server.ftp.reload,

								 log: gutil.log
		});

		const globs = [config.paths.build + ".htaccess",
					   config.paths.build + "**/*"];

		// Using base = '.' will transfer everything to /public_html correctly.
		// Turn off buffering in gulp.src for best performance.

		return gulp.src(globs, {base: dir(config.ftp.dist), buffer: false})
				   //.pipe(conn.newer( config.paths.build )) // Only upload newer files.
				   .pipe(conn.dest( server.ftp.path ))

				   .on("end", function() {

				   		console.log("Production files will be pushed to: " + server.ftp.host + "/" + server.ftp.path);

				   });

	} else {

		console.log("Bypassing FTP.");
		return done();

	}

}


/* -------------------------------------------------- */
/* ACTIONS / HELPERS
/* -------------------------------------------------- */		

// CHECK FILE
export function checkfile(done) {

	fs.access("file.txt", (err) => {

		if (err) {

			console.log("File found!");
			//console.log(err.code);
			//console.log(err.message);

		} else {

			console.log("File not found!");

		}

	});

	return done();

}


export function createfile(done) {

	fs.stat("file.txt", function(err, stat) {

		if (err == null) {

			console.log("Passed!");

		} else {

			console.log(err.code);

		}

	});

	return done();

}


// REFRESH
function refresh(done) {

	console.log("Refreshing...");

	panini.refresh();
	return done();

}


// RELOAD
export function reload(done) {

	console.log("Reloading...");

	browserSync.reload();
	return done();

}


// PRODUCTION SWITCH
function mode(done) {

	console.log("Build Mode: Development");

	production = false;
	return done();

}


// SORT CSS DECLARATIONS
export function sort() {

	const sortOutput = config.paths.source + "smacss",
		  sortOrder = "smacss"; // alphabetically, concentric-css, smacss

	console.log("Sorting CSS declarations using: " + sortOrder);
	console.log("Sorted CSS files saved to: " + sortOutput)

	return gulp.src(config.css.paths.map( function(base) { return config.paths.source + base } ), {base: config.paths.source, allowEmpty: true} )
			   .pipe(postcss( [cssDeclarationSorter({order: sortOrder})] )) 
			   .pipe(gulp.dest( sortOutput ));

}


// OPEN / PREVIEW PRODUCTION
export function preview(done) {

	if ( config.options.previewURL ) {

		//console.log("Opening preview: " + config.options.previewURL);

		return gulp.src( config.paths.build + config.options.previewURL )
				   .pipe(open());

	} else if ( config.options.previewURL != null ) {

		console.log("Preview file not specified in " + configFile + ". Bypassing preview.");

		return done();

	} else {

		return done();

	}

}


// OPEN PROJECT FOLDER
export function openProject(done) {

	console.log("Opening " + root + " folder.");

	return gulp.src( "./" )
			   .pipe(open());

}


// OPEN SOURCE FOLDER
export function openSource(done) {

	console.log("Opening " + config.paths.source + " folder.");

	return gulp.src( config.paths.source )
			   .pipe(open());

}


// OPEN BUILD FOLDER
export function openBuild(done) {

	console.log("Opening " + config.paths.build + " folder.");

	return gulp.src( config.paths.build )
			   .pipe(open());

}

// VERSION
export function ver(done) {

	console.log("//////////////////////////////");
	console.log("//////// BUILD ENGINE ////////");
	console.log("////////   VER. 2.0   ////////");
	console.log("//////////////////////////////");
	
	return done();

}


// COMPLETED
function completed(done) {

	console.log("///////////////////////////////");
	console.log("////// TASK(S) COMPLETED //////");
	console.log("///////////////////////////////");

	return done();

}


/* -------------------------------------------------- */
/* TEST / BUILD / DEPLOY
/* -------------------------------------------------- */

// TEST
gulp.task("test", gulp.series(mode, clear, html, modals, vendors, js, css, move, meta, svg, raster, clean, sync));


// BUILD
<<<<<<< HEAD
gulp.task("build", gulp.series(clear, checkjs, checkcss, html, modals, vendors, js, css, hashscripts, move, meta, hashassets, svg, raster, analytics, robotstxt, sitemap, sw, clean, preview));
=======
gulp.task("build", gulp.series(clear, checkjs, checkcss, html, modals, vendors, js, css, hashscripts, move, meta, hashassets, raster, svg, analytics, robotstxt, sitemap, sw, clean, preview));
>>>>>>> 1263d2b31132ff57e30493ab1a60f84b3a8ebfd9


// DEPLOY
gulp.task("deploy", gulp.series("build", deployinit, awsdeploy, gitdeploy, ftpdeploy));


/* -------------------------------------------------- */
/* TASKS
/* -------------------------------------------------- */

// ASSETS
gulp.task("images", gulp.series(move, assets, svg, raster, clean));


// HTML / CSS / JS
gulp.task("htmlscripts", gulp.series(checkjs, checkcss, html, modals, vendors, js, css, hashscripts, move, meta, analytics, sitemap, sw, clean, preview));
