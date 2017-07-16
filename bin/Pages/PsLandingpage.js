var PsLanding_po = {
  submit: function() {
   this.waitForElementVisible('@PsNavBar', 3000)
      this.api.pause(1000);
    return this; // Return page object for chaining
  }

};


module.exports = {
  commands: [PsLanding_po],
  elements: {
	  	PsNavBar: { selector: 'a[id=PT_NAVBAR]' },
	  	PsClassichome: { selector: 'img[id=PTNUI_CHP_ICN$3]',  
             
        }
  }

/*  getFrame : function(client){
	
	client.waitForElement('frame[name="psNavBarIFrame"]',5000);
return client.api.frame('psNavBarIFrame');
}*/

};
//*[@id="win1groupletPTNUI_DOCK_REC_GROUPLET$3"]