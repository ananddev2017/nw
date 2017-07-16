var scLogin_po = {
  submit: function() {
   this.waitForElementVisible('@SubmitBtn', 3000)
      .api.pause(1000);
    return this; // Return page object for chaining
  }
};


module.exports = {
  url: 'http://sitecore-test.tools.opendev.edu.au/Catalog/Courses/Bachelor-of-Business',
  commands: [scLogin_po],
  elements: {
	Firstname: { selector: 'input[id=wffmc5d3dd63055f4169ba39419a3d614f09_Sections_0__Fields_0__Value]' },
	Mobilenumber: { selector: 'input[id=wffmc5d3dd63055f4169ba39419a3d614f09_Sections_0__Fields_1__Value]' },
	Email: { selector: 'input[id=wffmc5d3dd63055f4169ba39419a3d614f09_Sections_0__Fields_2__Value]' },  
	SubmitBtn : { selector: 'input[type=submit]' }, 
  }
};