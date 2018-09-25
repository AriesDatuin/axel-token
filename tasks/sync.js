//sync.js


// Reference
/*	origin = https://github.com/username/your-repo.git
	branch = master
*/


// Create a Git repository
/*	cd desktop && cd YOUR PROJECT FOLDER
	git init
	git config --global user.name YOUR USERNAME
	git config --user.email YOUR EMAIL
	git remote add origin https://github.com/username/your-repo.git
*/


// pull (fetch, merge) and push to repository
/*	git pull
	git git add .
	git git commit -m "First commit."
	git push -u origin master
*/


// Create a new branch and push to repository
/*	git checkout -b YOUR NEW BRANCH NAME
	git push origin YOUR NEW BRANCH NAME
*/


// merge to master branch
/*	git pull master
	git merge YOUR OTHER BRANCH
	git branch -d DELETE OTHER BRANCH
	git status
	git push origin master
*/


//  pull with unset unrelated histories and push to repository
/*	git pull origin master --allow-unrelated-histories
	git add .
	git commit -m "Resolved merge conflicts."
	git push -u origin master
*/


// Check user or reset credentials
/*	git config --global --list
	git config --system --unset crediential.helper
*/


// Troubleshoot
/*	git branch --set-upstrean-to=origin/master master
	git reset --hard
	git status
*/


/* -------------------------------------------------- */
/* MODULES
/* -------------------------------------------------- */


/* -------------------------------------------------- */
/* CONFIG FILE
/* -------------------------------------------------- */

const configFile = "config.json",
	  revFile = "rev.json",
	  serverFile = "conn.json",
	  metadataFile = "metadata.json";


// CORE
import gulp from "gulp"; // Core Gulp module.
import fs from "fs";
import path from "path"; // Resolves pathing issues.



/* -------------------------------------------------- */
/* SOURCE PATHS
/* -------------------------------------------------- */

const config = JSON.parse(fs.readFileSync(configFile)),
	  //server = JSON.parse(fs.readFileSync(serverFile)),
	  dir = path.resolve, // path.join
	  root = dir(__dirname);


/* -------------------------------------------------- */
/* CONFIG FILE
/* -------------------------------------------------- */







	function task1(done) {

		console.log("Performing some task...");

		done();

	}



// JS
function task2() {

	return gulp.src( config.paths.source + "lib/*.js" ) 
			   .pipe(gulpif( config.js.lint, jshint() ))
			   .pipe(gulpif( config.js.lint, jshint.reporter() ));

}


gulp.task("testing", gulp.series(task2));

