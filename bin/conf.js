
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

		  framework: 'jasmine2',
		// The address of a running selenium server.
		  seleniumAddress: 'http://localhost:4444/wd/hub',
		  specs: ['Suite.js'],
		  //specs: ['AddUser.js','UpdateUser.js','DeleteUser.js'],


		  // Capabilities to be passed to the webdriver instance.
		  capabilities: {
			    'browserName': 'chrome',
			    shardTestFiles: true,
			    'chromeOptions': {
			    	'args': ['disable-extensions'],
			        'extensions': [],
			    }
			},


		//configure junit xml and Html report
		  onPrepare: function() {
			        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			            savePath: './Reports/HTMLReports/' ,
			            screenshotsFolder:'images',
		        	  filePrefix: 'htmloutput'+ Date.now()
			        }));
		        	  var jasmineReporters = require('jasmine-reporters');
				    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
				        consolidateAll: true,
				        filePrefix: 'xmloutput'+ Date.now(),
				        savePath: 'Reports/XMLReports'

			        }));
			},


			  // Options to be passed to Jasmine-node.
		   jasmineNodeOpts: {
			   isVerbose: false,
			   showColors: true,
			   includeStackTrace: false,
			   defaultTimeoutInterval: 70000
			 }

};
