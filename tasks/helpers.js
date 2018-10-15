/* -------------------------------------------------- */
/* HELPERS
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


// CREATE FILE
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


// OPEN PROJECT FOLDER
export function openProject(done) {

	console.log("Opening " + root + " folder.");

	return gulp.src( "./" )
			   .pipe(open());

}


// OPEN SOURCE FOLDER
export function openSource(done) {

	console.log("Opening " + pathSource + " folder.");

	return gulp.src( pathSource )
			   .pipe(open());

}


// OPEN BUILD FOLDER
export function openBuild(done) {

	console.log("Opening " + pathBuild + " folder.");

	return gulp.src( pathBuild )
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
