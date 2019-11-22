var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var webserver = require('gulp-webserver');

gulp.task('html', function(done){
	gulp.src('./src/*.html')
		.pipe(gulp.dest('./dest'))
	done();
});

gulp.task('img', function(done){
	gulp.src('./src/img/*.png')
		.pipe(imagemin())
		.pipe(gulp.dest('./dest/img'))
	done();
});

gulp.task('watch', function(done){
	gulp.watch('./src/*.html', gulp.task('html'))
	done();
});

gulp.task('webserver', function(done){
	gulp.src('./dest')
		.pipe(webserver({
			host:'192.168.34.10',
			port: 8000,
			livereload: true,
		}));
	done();
});

gulp.task('default', gulp.series('html','img','watch','webserver'));
