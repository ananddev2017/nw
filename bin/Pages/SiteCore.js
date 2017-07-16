module.exports = {	  
  'Site Core Landing Page' : function (client) {
    client
      .url('http://sitecore-test.tools.opendev.edu.au/')
      .useXpath()
      .waitForElementVisible('/html/body/header/nav/div/div[2]/nav/ul[1]/li[1]/a', 10000)
      .click('/html/body/header/nav/div/div[2]/nav/ul[1]/li[4]/a')
      //.waitForElementVisible('//a[href("/en/Why-OUA")]', 8000)
  }
}