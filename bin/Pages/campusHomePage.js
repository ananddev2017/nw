var PsHome_po = {
  submit: function() {
   this.waitForElementVisible('@PsCampusCommunity', 3000)
      .api.pause(3000);
    return this; // Return page object for chaining
  }
};


module.exports = {
  commands: [PsHome_po],
  elements: {
    PsCampusCommunity: { selector: 'a[id=fldra_HCCC_BUILD_COMMUNITY]' },
    Psframe: { selector: 'iframe[id=ptifrmtgtframe]' },   
    pstable : { selector: 'table[id=ptppscappnavtbl]' },
    PsRecords: { selector: 'a[id=fldra_HCSR_RECORDS_AND_REGISTRATION]' },
    PsStudenrF: { selector: 'a[id=fldra_HCCC_MANAGE_STUDENT_FINANCIALS]' }, 
    PsCcHeading: { selector: 'h1[class=EOPP_SCPAGETITLESECTION]'}, 
    
  }
};