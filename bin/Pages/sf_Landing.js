var sfLanding_po = {
  submit: function() {
   this.waitForElementVisible('@searchbar', 8000)
      .api.pause(1000);
    return this; // Return page object for chaining
  }
};


module.exports = {
 // url: 'https://test.salesforce.com/',
  commands: [sfLanding_po],
  elements: {
    searchbar: { selector: 'input[id=221:0;p]' },
    sfPassword: { selector: 'input[id=password]' },
    sfLoginBtn: { selector: 'input[id=Login]' },   
  }
};