// Step 1: Function for Processing Application
export const bidaRegistrationStep1 = () => {
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/ul/li[1]/a").click();
  cy.wait(5000);
  cy.xpath(
    "/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a",
    { timeout: 15000 }
  )
    .should("be.visible")
    .eq(0)
    .click();
  cy.wait(5000);
  cy.get('[id="application_status"]').select("Verified");
  cy.wait(2000);
  cy.xpath(
    "/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]"
  ).click();
  cy.xpath("/html/body/span/span/span[2]/ul/li[6]").click();
  cy.wait(2000);
  cy.get('[id="mainInput"]').type(
    "All information are verified and found correct."
  );
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
};

// Step 2: Function for Processing Application
export const bidaRegistrationStep2 = () => {
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/ul/li[1]/a").click();
  cy.wait(5000);
  cy.xpath(
    "/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a",
    { timeout: 15000 }
  )
    .should("be.visible")
    .eq(0)
    .click();
  cy.wait(5000);
  cy.get('[id="application_status"]').select("Approved for Payment");
  cy.get('[id="mainInput"]').type(
    "All information are verified and found correct."
  );
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
};

// Step 3: Function for Processing Application
export const bidaRegistrationStep3 = () => {
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/ul/li[1]/a").click();
  cy.wait(5000);
  cy.xpath(
    "/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a",
    { timeout: 15000 }
  )
    .should("be.visible")
    .eq(0)
    .click();
  cy.wait(2000);
  cy.wait(5000);
  cy.get('[id="application_status"]').select("Approved");
  cy.wait(2000);
  cy.get('[id="approval_copy_remarks"]').type("Approved");
  cy.wait(2000);
  cy.get('[id="mainInput"]').type(
    "All information are verified and found correct."
  );
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
};

//bidaRegistrationAmendment.js
export const bidaRegistrationAmendmentStep1 = () => {
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/ul/li[2]/a").click();
  cy.wait(5000);
  cy.xpath(
    "/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a",
    { timeout: 15000 }
  )
    .should("be.visible")
    .eq(0)
    .click();
  cy.wait(2000);
  // cy.xpath(
  //   "/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[2]/select"
  // ).click();
  cy.wait(5000);
  cy.get('[id="application_status"]').select("Verified");
  cy.wait(2000);
  cy.xpath(
    "/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]"
  ).click();
  cy.xpath("/html/body/span/span/span[2]/ul/li[6]").click();
  cy.wait(2000);
  cy.get('[id="remarks"]').type(
    "All information are verified and found correct."
  );
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
};


// Step 2: Function for Processing Application
export const bidaRegistrationAmmendmentStep2 = () => {
   cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/ul/li[2]/a").click();
  cy.wait(5000);
  cy.xpath(
    "/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a",
    { timeout: 15000 }
  )
    .should("be.visible")
    .eq(0)
    .click();
  cy.wait(2000);
  // cy.xpath(
  //   "/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[2]/select"
  // ).click();
  cy.wait(5000);
  cy.get('[id="application_status"]').select("Approved for Payment");
  cy.wait(2000);
  // cy.xpath(
  //   "/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]"
  // ).click();
  // cy.xpath("/html/body/span/span/span[2]/ul/li[6]").click();
  // cy.wait(2000);
  cy.get('[id="remarks"]').type(
    "All information are verified and found correct."
  );
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
};

// Step 3: Function for Processing Application
export const bidaRegistrationAmmendmentStep3 = () => {
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[2]/ul/li[2]/a").click();
  cy.wait(5000);
  cy.xpath(
    "/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a",
    { timeout: 15000 }
  )
    .should("be.visible")
    .eq(0)
    .click();
  cy.wait(2000);
  // cy.xpath(
  //   "/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr/td[6]/a"
  // ).click();
  cy.wait(5000);
  cy.get('[id="application_status"]').select("Approved");
  cy.wait(2000);
  cy.get('[id="approval_copy_remarks"]').type("Approved");
  cy.wait(2000);
  cy.get('[id="remarks"]').type(
    "All information are verified and found correct."
  );
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
};



//visa recommendation New

export const visaRecommendationStep1 = () => 
{
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[4]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[4]/ul/li[1]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a",{ timeout: 15000 })
    .should("be.visible")
    .eq(0)
    .click();
  cy.wait(2000);  
  cy.get('[name="status_id"]').select("Verified");
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[6]').click();
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
}

export const visaRecommendationStep2 = () => 
{
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[4]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[4]/ul/li[1]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a",{ timeout: 15000 })
    .should("be.visible")
    .eq(0)
    .click();
  cy.wait(2000);  
  cy.get('[name="status_id"]').select("Approved");
  cy.get('[id="approval_copy_remarks"]').type("Approved");
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.xpath('/html/body/div[5]/div/div[3]/button[1]').click();
}


//visa recommendation amendment

export const visaRecommendationAmmendmentStep1 = () => 
{
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[4]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[4]/ul/li[2]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a",{ timeout: 15000 })
    .should("be.visible")
    .eq(0)
    .click();
  cy.wait(2000);  
  cy.get('[name="status_id"]').select("Verified");
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[6]').click();
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
}

export const visaRecommendationAmmendmentStep2 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[4]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[4]/ul/li[2]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a",{ timeout: 15000 })
    .should("be.visible")
    .eq(0)
    .click();
  cy.wait(2000);  
  cy.get('[name="status_id"]').select("Approved for Payment");
  // cy.get('[id="approval_copy_remarks"]').type("Approved");
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  // cy.xpath('/html/body/div[5]/div/div[3]/button[1]').click();
}

export const workPermitNewStep1 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[1]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
  cy.get('[name="status_id"]').select('Verified');
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[6]').click();
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
  cy.xpath('/html/body/span/span/span[2]/ul/li[6]').click();
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
}

export const workPermitNewStep2 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[1]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
 cy.get('[id="application_status"]').select('Approved for Payment');
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
}

export const workPermitNewStep3 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[1]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
 cy.get('[id="application_status"]').select('Issue Work Permit');
  cy.get('[id="approval_copy_remarks"]').type('Approved');
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.xpath('/html/body/div[5]/div/div[3]/button[1]').click();
}

export const workPermitExtensionStep1 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[2]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
  cy.get('[name="status_id"]').select('Verified');
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[6]').click();
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
}

export const workPermitExtensionStep2 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[2]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
  cy.get('[name="status_id"]').select('Approved for Payment');
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
}

export const workPermitExtensionStep3 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[2]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
  cy.get('[name="status_id"]').select('Issue Extension');
cy.get('[id="approval_copy_remarks"]').type('Approved');
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.xpath('/html/body/div[5]/div/div[3]/button[1]').click();
}

export const workPermitAmendmentStep1 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[3]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
  cy.get('[name="status_id"]').select('Verified');
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[6]').click();
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
}

export const workPermitAmendmentStep2 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[3]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
  cy.get('[name="status_id"]').select('Approved for Payment');
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
}

export const workPermitAmendmentStep3 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
  cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[3]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
  cy.get('[name="status_id"]').select('Issue Amendment');
cy.get('[id="approval_copy_remarks"]').type('Approved');
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.xpath('/html/body/div[5]/div/div[3]/button[1]').click();
}


export const workPermitCancellationStep1 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[4]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
  cy.get('[name="status_id"]').select('Verified');
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[6]').click();
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
}

export const workPermitCancellationStep2 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[4]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
  cy.get('[name="status_id"]').select('Approved');
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[7]').click();
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.wait(5000);
}


export const workPermitCancellationStep3 = () => 
{
 cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[6]/a").click();
 cy.xpath('/html/body/div[1]/nav/div[4]/div/ul/li[6]/ul/li[4]/a').click();
 cy.wait(2000);
 cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
 cy.wait(2000);  
  cy.get('[name="status_id"]').select('Issue Cancellation');
  cy.get('[id="approval_copy_remarks"]').type('Approved');
  cy.get('[id="remarks"]').type('All information are verified and found correct.');
  cy.get('[id="process_btn_id"]').click();
  cy.wait(2000);
   cy.xpath('/html/body/div[5]/div/div[3]/button[1]').click();
}

export const ircRecommendationStep1 = () => 
{
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[10]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[10]/ul/li[1]/a").click();
  cy.wait(10000);
  cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a', { timeout: 15000 }).should('be.visible').eq(0).click();
  cy.wait(10000);
  cy.get('[id="application_status"]').select('Assign Inspection Officer');
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[1]').click();
  cy.wait(2000);
  cy.get('[id="io_submission_deadline"]').should('exist').type('01-Apr-2025');
  cy.get('[id="remarks"]').type('lorem ipsum');
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
}

export const ircRecommendationStep2 = () => 
{
   cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[10]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[10]/ul/li[1]/a").click();
  cy.wait(10000);
  cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a', { timeout: 15000 }).should('be.visible').eq(0).click();
  cy.wait(10000);
  cy.get('[id="application_status"]').select('Field Visit');
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li').click();
  cy.wait(2000);
  cy.get('[id="remarks"]').type('lorem ipsum');
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();


}

export const ircRecommendationStep3 = () =>
{

  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[10]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[10]/ul/li[1]/a").click();
  cy.wait(10000);
  cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a', { timeout: 15000 }).should('be.visible').eq(0).click();
  cy.wait(10000);
  cy.get('[id="application_status"]').select('Report Submitted');
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[5]').click();
  cy.wait(2000);
  cy.get('[name="fixed_production[]"]').type('4');
  cy.wait(2000);
  cy.get('[name="half_yearly_import[]"]').type('4');
  cy.wait(2000);
  cy.get('[name="apc_half_yearly_import_total_in_word"]').type('four');
  cy.wait(2000);
  cy.get('[name="irc_remarks"]').type('lorem ipsum');
  cy.wait(2000);
  cy.get('[name="entitlement_remarks"]').type('lorem ipsum');
  cy.wait(2000);
  cy.get('[id="remarks"]').type('lorem ipsum');
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();

}

export const ircRecommendationStep4 = () =>
{

  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[10]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[10]/ul/li[1]/a").click();
  cy.wait(10000);
  cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a', { timeout: 15000 }).should('be.visible').eq(0).click();
  cy.wait(10000);
  cy.get('[id="application_status"]').select('Verified');
  cy.wait(2000);
  cy.xpath('/html/body/div[1]/div/div/div[3]/form/div/div/div[3]/div/div[4]/div[2]/span/span[1]/span/span[1]').click();
  cy.xpath('/html/body/span/span/span[2]/ul/li[6]').click();
  cy.wait(2000);
  cy.get('[id="remarks"]').type('lorem ipsum');
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();

}

export const ircRecommendationStep5 = () =>
{
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[10]/a").click();
  cy.wait(2000);
  cy.xpath("/html/body/div[1]/nav/div[4]/div/ul/li[10]/ul/li[1]/a").click();
  cy.wait(10000);
  cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a', { timeout: 15000 }).should('be.visible').eq(0).click();
  cy.wait(10000);
  cy.get('[id="application_status"]').select('Approved');
  cy.wait(2000);
  cy.get('[id="approval_copy_remarks"]').type('lorem ipsum');
  cy.wait(2000);
  cy.get('[id="remarks"]').type('lorem ipsum');
  cy.wait(2000);
  cy.get('[id="process_btn_id"]').click();
  cy.xpath('/html/body/div[5]/div/div[3]/button[1]').click();
}