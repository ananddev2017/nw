var sfLogin_po = {
  submit: function() {
   this.waitForElementVisible('@sfLoginBtn', 3000)
      .api.pause(1000);
    return this; // Return page object for chaining
  }
};


module.exports = {
  url: 'https://test.salesforce.com/',
  commands: [sfLogin_po],
  elements: {
    sfUsername: { selector: 'input[id=username]' },
    sfPassword: { selector: 'input[id=password]' },
    sfLoginBtn: { selector: 'input[id=Login]' },   
  }
};
