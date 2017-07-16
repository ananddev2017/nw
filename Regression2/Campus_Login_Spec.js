/*Login into People Soft and verify Campus Community Link Functionality*/
var userData = require('../data/userData');


module.exports = {
  'People soft' : function (client) {
    var homePage = client.page.campusLogin()
    homePage.navigate()
    client.pause(5000)
    homePage.expect.element('@PsUsername').to.be.enabled
    homePage.setValue('@PsUsername', userData.testUser.username)
    homePage.setValue('@PsPassword', userData.testUser.password)
    homePage.waitForElementVisible('@PsLoginBtn', 3000)
    homePage.click('@PsLoginBtn')  
    var HomePage = client.page.PsLandingpage()
    HomePage.expect.element('@PsNavBar').to.be.enabled
    HomePage.click('@PsNavBar')	
	client.url('https://campus.tst.env.opendev.edu.au/psp/cs92tst/EMPLOYEE/SA/h/?tab=DEFAULT')
	client.pause(5000)
	var campushomepage = client.page.campusHomePage()
    campushomepage.waitForElementVisible('@PsRecords', 5000)
	campushomepage.click('@PsRecords')
    campushomepage.waitForElementVisible('@PsCampusCommunity', 5000) 
    campushomepage.click('@PsCampusCommunity')
    campushomepage.waitForElementVisible('@Psframe', 10000) 
    //Switch to Frame
    client.frame(0)
    client.pause(2000)
    client.waitForElementPresent("table[id=ptppscappnavtbl]", 5000)
    campushomepage.waitForElementVisible('@PsCcHeading', 5000) 
    campushomepage.assert.containsText('@PsCcHeading','Campus Community')
    client.frame(null);  
    campushomepage.waitForElementVisible('@PsStudenrF', 5000)
    campushomepage.click('@PsStudenrF')
    client.end()
		    
  }  
};
