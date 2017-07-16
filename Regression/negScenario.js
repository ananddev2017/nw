module.exports = {
  'Negative Scenario login ' : function (client) {
    var homePage = client.page.sf_Login();
    
    
    try {
    homePage.navigate();    
    homePage.expect.element('@sfUsername').to.be.enabled;
    homePage.setValue('@sfUsername', 'rearasani@open.edu.au.pa.tst')
    homePage.setValue('@sfPassword', 'Sorce@123!')
    homePage.waitForElementVisible('@sfLoginBtn', 3000)
    homePage.click('@sfLoginBtn') 
    homePage.waitForElementNotPresent('@sfLoginBtn',3000)
    
    
    } catch (ex) {
    	  console.log('There was an error');
    	}
    
  }
};
