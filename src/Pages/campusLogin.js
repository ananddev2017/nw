var PsLogin_po = {
  submit: function() {
   this.waitForElementVisible('@PsLoginBtn', 3000)
      .api.pause(1000);
    return this; // Return page object for chaining
  }
};


module.exports = {
  url: 'https://campus.tst.env.opendev.edu.au/psp/cs92tst/?cmd=login',
  commands: [PsLogin_po],
  elements: {
    PsUsername: { selector: 'input[id=userid]' },
    PsPassword: { selector: 'input[id=pwd]' },
    PsLoginBtn: { selector: 'input[name=Submit]' },   
  }
};