/**
 * http://usejsdoc.org/
 */
var gulp = require('gulp');
var convert = require('gulp-convert');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('convertCsv', function() {
    console.log('converting');
    gulp.src('F://NightWatch_OUA//Reports//*.csv')
        .pipe(convert({from: 'csv', to:'json'}))
        .pipe(rename({extname: '.json'}))
        .pipe(gulp.dest('F://NightWatch_OUA//json/'));
    
});

gulp.task('csv', function () {
    console.log('watching');
    gulp.watch('F://NightWatch_OUA//Reports//*.csv', ['convertCsv']);
});


//To use the data:
module.exports = {
		'Data Driven' : function () {
		
//describe('LoginPage.', function() {
	    //var loginPage = require('../PageObjects/LoginPage.js');
	    var loginData = require('F://NightWatch_OUA//json//Data.json');

	    loginData.forEach(function (data) {
	        it(data.description, function () {
	        	document.write(data.UesrId);
	        	document.write(data.Password);
	        });
//	            loginPage.usernameField.sendKeys(data.username);
//	            loginPage.passwordField.sendKeys(data.password);
//	            loginPage.loginButton.click();                
	        });
	    }
	};
