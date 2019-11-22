var gulp = require('gulp');

gulp.task('html', function(done){
	gulp.src('./src/index.html')
		.pipe(gulp.dest('./dest'));
	done();
});

gulp.task('msg', function(done){
	console.log('hello');
	done();
});

gulp.task('default', gulp.series('html','msg'));
