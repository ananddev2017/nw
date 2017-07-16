module.exports = {
 'Site Core Landing Page' : function (client) {
    client
      .url('http://sitecore-test.tools.opendev.edu.au/')
		.waitForElementVisible('body', 1000)
		.pause(000)
		.useXpath()
		.waitForElementVisible('//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[1]/a',200)
		.waitForElementVisible('//*[@id="collapseb4d87e66-d2c5-4c06-8f9a-08aeaf38055a"]/div/ul/li[1]/a',2000)
		.waitForElementVisible('//*[@id="collapseb4d87e66-d2c5-4c06-8f9a-08aeaf38055a"]/div/ul/li[2]/a',2000)
		.waitForElementVisible('//*[@id="collapseb4d87e66-d2c5-4c06-8f9a-08aeaf38055a"]/div/ul/li[3]/a',2000)
		.waitForElementVisible('//*[@id="collapseb4d87e66-d2c5-4c06-8f9a-08aeaf38055a"]/div/ul/li[4]/a',2000)
		.waitForElementVisible('//*[@id="collapseb4d87e66-d2c5-4c06-8f9a-08aeaf38055a"]/div/ul/li[5]/a',2000)
        .waitForElementVisible('//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[2]/a',2000)
        .waitForElementVisible('//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[3]/a',2000)
        .waitForElementVisible('//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[1]/a',3200)
		.click('//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[1]/a')	
		
 }
}