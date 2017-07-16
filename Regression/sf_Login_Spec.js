module.exports = {
  'Sales force Login' : function (client) {
    var homePage = client.page.sf_Login();
    homePage.navigate();    
    homePage.expect.element('@sfUsername').to.be.enabled;
    homePage.setValue('@sfUsername', 'kthadisina@open.edu.au.pa.tst')
    homePage.setValue('@sfPassword', '@asdfgh1$')
    homePage.waitForElementVisible('@sfLoginBtn', 3000)
    homePage.click('@sfLoginBtn') 
    
    var LHomePage = client.page.sf_Landing();
    LHomePage.waitForElementVisible('@searchbar', 3000)
    LHomePage.setValue('@searchbar', 'hgdhwbd')
    
    
    
    client.end();
  }
};