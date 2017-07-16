module.exports = {
/*  'Site Core Login' : function (client) {
    client
      .url('http://sitecore-test.tools.opendev.edu.au/Catalog/Courses/Bachelor-of-Business')
      //.waitForElementVisible('#header h1', 8000)
	  .waitForElementVisible('input[type=submit]', 8000)
      .setValue('input[id=wffmc5d3dd63055f4169ba39419a3d614f09_Sections_0__Fields_0__Value]', 'esce')
      .pause(4000)
      //.sendKeys('input[id=wffmc5d3dd63055f4169ba39419a3d614f09_Sections_0__Fields_1__Value]',client.keys([client.Keys.TAB]))
	  .setValue('input[id=wffmc5d3dd63055f4169ba39419a3d614f09_Sections_0__Fields_1__Value]','  123476789')
	  .pause(8000)
      .setValue('input[id=wffmc5d3dd63055f4169ba39419a3d614f09_Sections_0__Fields_2__Value]','kthadisina@enhops.com')
      .pause(8000) 
      //assert
      .assert.elementPresent('input[type=submit]')
      .click('input[type=submit]')
      .pause(10000)  
      //Add wait for pop up visibility(assert contains text)
      .end();
  },
		  
  'Sales force login' : function (client) {
	client
	  .url('https://test.salesforce.com/')
	  .pause(5000)
	  .setValue('input[id=username]', 'rearasani@open.edu.au.pa.tst')
	  .setValue('input[id=password]', 'Salesforce@123!')
	  .click('input[id=Login]')
	  .end();
  },*/
		  
  'Site Core Landing Page' : function (client) {
    client
      .url('http://sitecore-test.tools.opendev.edu.au/')
      .waitForElementVisible('body', 1000)
      //.waitForElementVisible('input[type=submit]', 8000)
      .pause(5000)
      .useXpath()
      //.waitForElementVisible('a[contains(text(),"Education")]',5000)
      //.click('a[contains(text(),"Education")]')
      //.click("//*[contains(text(), 'Login')]")
     // .click('a[xpath=html/body/header/nav/div/div[2]/nav/ul[2]/li[2]/a]')
      //.assert.containsText('.list-unstyled>li>a','Home')
      //.click('//*[contains(.,Home)]')
       .waitForElementVisible('//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[1]/a',3000)
       .click('//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[1]/a')
      //.waitForElementVisible('//a[contains(OUA)]', 2000)
      //.assert.visible('//img[contains(@disablewebedit,'False')]')
      //.assert.elementPresent('//a[@href=/en/Why-OUA]')
    /*  .assert.visible('a[contains(.,'Find courses')]')
      .assert.visible('//a[contains(.,'Careers')]')
      .assert.visible('//a[contains(.,'Catalog')]'
      .assert.visible('//a[contains(.,'Student blog')]'
	  .assert.visible('//a[contains(.,'Help')]'
	  .waitForElementVisible('//i[@class='fa fa-facebook']', 3000)
	  .assert.visible('//i[@class='fa fa-instagram']')
      .assert.visible('//i[@class='fa fa-linkedin']')
	  .assert.visible('//i[@class='fa fa-twitter']')
	  .assert.visible('//i[@class='fa fa-youtube']')
	  .assert.visible('//a[contains(.,'Home')]')
	  .assert.visible('//h4[contains(.,' Courses and units ')]')	  
      .end();*/
  }
  
  
};			