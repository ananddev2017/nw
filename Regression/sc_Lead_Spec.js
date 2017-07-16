module.exports = {
  'Site Core Login' : function (client) {
    var schomePage = client.page.sc_Lead_Info();
    schomePage.navigate();  
    schomePage.waitForElementVisible('body', 1000)
    schomePage.expect.element('@Firstname').to.be.enabled;
    schomePage.setValue('@Firstname', 'gdfgfrgrf')
    client.keys([client.Keys.TAB]);
    schomePage.setValue('@Mobilenumber', '  123476789')
    schomePage.setValue('@Email', 'kthadisina@enhops.com')
    schomePage.waitForElementVisible('@SubmitBtn', 3000)
    schomePage.click('@SubmitBtn') 
   // schomepage.waitForElementNotPresent('@SubmitBtn',3000)
    client.end();
    
    //Add Verification(Thank you)
  }
};
