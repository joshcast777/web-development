// ! Every gulp function must have the done() function - a callback

// To identify a file is src, to store the result is dest
const { src, dest, watch, parallel } = require("gulp");

// ! CSS
// Import functionability from node_modules/gulp-sass, is only a connector - sass is to compile SASS
const sass = require("gulp-sass")(require("sass"));
// Plumber is to not stop the workflow when there are small errors
const plumber = require("gulp-plumber");
// Ensure CSS works in any browser and any version
const autoprefixer = require("autoprefixer");
// Compress the CSS file
const cssnano = require("cssnano");
// Transform the CSS file with the other tow
const postcss = require("gulp-postcss");
// The sourcemap
const sourcemaps = require("gulp-sourcemaps");

// ! Images
// To keep th eimages in cache
const cache = require("gulp-cache");
// To compress the images
const imagemin = require("gulp-imagemin");
// To convert images to webp
const webp = require("gulp-webp");
// To convert images to avif
const avif = require("gulp-avif");

// JavaScript
// To Compress the JS file
const terser = require("gulp-terser-js");

// * For compile SASS
function css(done) {
	src("src/scss/**/*.scss") // ! Identify the .scss file to compile
		.pipe(sourcemaps.init()) // Initialize with the stylesheet and save the reference
		.pipe(plumber()) // To not stop the workflow
		.pipe(sass()) // Compile
		.pipe(postcss([autoprefixer(), cssnano()])) // To make changes with postcss
		.pipe(sourcemaps.write(".")) // To save de sourcemap file - point (.) to save it in the same place where the compiled CSS saves
		.pipe(dest("build/css")); // Save the result

	done();
}

// To convert all images to webp
function webpVersion(done) {
	// Options for dest
	const op = {
		quality: 50
	};

	src("src/img/**/*.{png,jpg}")
		.pipe(webp(op)) // Convert images to webp
		.pipe(dest("build/img"));

	done();
}

// To convert all images to avif
function avifVersion(done) {
	// Options for dest
	const op = {
		quality: 50
	};

	src("src/img/**/*.{png,jpg}")
		.pipe(avif(op)) // Convert images to webp
		.pipe(dest("build/img"));

	done();
}

// To compress images
function images(done) {
	// Level optimization
	const op = {
		optimizationLevel: 3
	};

	src("src/img/**/*.{png,jpg}")
		.pipe(cache(imagemin(op)))
		.pipe(dest("build/img"));

	done();
}

// JavaScript
function javascript(done) {
	src("src/js/**/*.js")
		.pipe(sourcemaps.init()) // Same sourcemaps in CSS
		.pipe(terser())
		.pipe(sourcemaps.write(".")) // To save sourcemaps in the same place with the JS file
		.pipe(dest("build/js"));

	done();
}

// A watch
function dev(done) {
	watch("src/scss/**/*.scss", css); // Identify the file and then what funciton - the * is for all folders and files
	watch("src/js/**/*.js", javascript);

	done();
}

/**
 * * exports makes the functions can be executed by gulp
 * * exports.name_function_as_it_will_be_executed = name_function_defined_in_file
 */
exports.css = css;
exports.javascript = javascript;
exports.images = images;
exports.webpVersion = webpVersion;
exports.avifVersion = avifVersion;
// parallel for executing several functions parallelly - serial for executing several functions one after one
exports.dev = parallel(images, webpVersion, avifVersion, javascript, dev);
