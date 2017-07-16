var browserstack = require('browserstack-local');


nightwatch_config = {
  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
    
  },
  /*
  specs: ["Regression/Campus_Login_Spec.js]," +*/
  src_folders : [ "Regression" ],
  test_settings: {
    default: {
      desiredCapabilities: {
        'browserstack.user': 'test13426',
        'browserstack.key': '27XtSpSY83en7D5TZyAh',
        'browser': 'chrome'
            'browserstack.debug': true,
            'browserstack.local': true,	
      }
    }
  }
};

// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;