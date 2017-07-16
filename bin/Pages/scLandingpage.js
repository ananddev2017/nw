var scLanding_po = {
  submit: function() {
   this.useXpath();
   this.useCss();
   this.waitForElementVisible('@lnkHome', 10000)
      .api.pause(10000);
    return this; // Return page object for chaining
  }
};


module.exports = {
  url: 'http://sitecore-test.tools.opendev.edu.au/',
  commands: [scLanding_po],
  elements: {
	lnkHome : { selector : '//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[1]/a' },
	lnk_GettingStarted : { selector: '//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[2]/a' },
	lnk_Coursesunits : { selector: '//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[3]/a' },  
	lnk_Careers : { selector: '//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[4]/a' }, 
	lnk_Aboutus : { selector: '//*[@id="collapsefb1e4810-6d89-4f1e-a47b-70478fe32da7"]/div/ul/li[5]/a' }, 
	lmg_Facebook : { selector: '/html/body/footer/div[1]/div/div/div[1]/div/div/a[1]/i' }, 
	lmg_Twitter : { selector: '/html/body/footer/div[1]/div/div/div[1]/div/div/a[4]/i' }, 
	lmg_Linkedin : { selector: '/html/body/footer/div[1]/div/div/div[1]/div/div/a[3]/i' }, 
	lnk_CoursesBusiness : { selector: '//*[@id="collapseb4d87e66-d2c5-4c06-8f9a-08aeaf38055a"]/div/ul/li[4]/a' },
	lnk_OUA : { selector: '/html/body/header/nav/div/div[2]/nav/ul[1]/li[1]/a' },
	lnk_Carriers : { selector: '/html/body/header/nav/div/div[2]/nav/ul[1]/li[3]/a' },
	lnk_StudentBlog : { selector: '/html/body/header/nav/div/div[2]/nav/ul[1]/li[5]/a' },
	lnk_Help : { selector: '/html/body/header/nav/div/div[2]/nav/ul[1]/li[6]/a' },
  }
};
