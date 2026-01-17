export const vipCipLounge = () =>
{
   cy.xpath('/html/body/div[1]/nav/ul/li[6]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[6]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[6]/ul/li[1]/ul/li[6]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[6]/ul/li[1]/ul/li[6]/ul/li[2]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[1]/div[2]/a/button/b').click();
    cy.wait(2000);
    

//Basic Information
cy.get('[id="vip_longue_purpose_id"]').select('Arrival in Bangladesh');
cy.wait(2000);
 cy.get('[href="#next"]').should('be.visible').click();

//Expatriate Information
   cy.get('[name="airport_id"]').should('exist').select('3')
    cy.get('[name="visa_purpose"]').should('be.visible').type('xxx-visa')

     //General Information
    cy.get('[name="emp_name"]').should('be.visible').type('Anisul Islam')
    cy.get('[name="emp_designation"]').should('be.visible').type('Manager')
    cy.get('[name="brief_job_description"]').should('be.visible').type('Manage Everything')
    cy.get('[type="file"]').attachFile('profile.jpg')
    cy.wait(1000);

    //Passport Information
    cy.get('[name="emp_passport_no"]').should('be.visible').type('1234567891')
    cy.get('[name="emp_surname"]').should('be.visible').type('Islam')
    cy.get('[name="emp_given_name"]').should('be.visible').type('Anisul Islam')
    cy.get('[id="cropImageBtn"]').should('be.visible').click()
    cy.wait(1000)
    cy.get('[name="emp_date_of_birth"]').should('be.visible').type('02/02/1989').click()
    cy.get('[name="place_of_issue"]').should('be.visible').click()
    cy.wait(500)
    cy.get('[name="pass_issue_date"]').should('be.visible').type('02/02/2024').click()
    cy.get('[name="place_of_issue"]').should('be.visible').click()
    cy.wait(500)
    cy.get('[name="emp_personal_no"]').should('be.visible').type('01782673456')
    cy.get('[name="place_of_issue"]').should('be.visible').type('Bangladesh Road Transport Authority (BRTA)')
    cy.get('[name="emp_nationality_id"]').select('Australian')
    cy.get('[name="emp_place_of_birth"]').should('be.visible').type('Australian')
    cy.get('[name="pass_expiry_date"]').should('be.visible').type('02/02/2030').click()
    cy.wait(1000)
    //Spouse/child Information
    cy.get('[name="spouse_child_type[]"]').select('Child')
    cy.get('[name="spouse_child_name[]"]').should('be.visible').type('Mahir Rohim')
    cy.get('[name="spouse_child_passport_per_no[]"]').should('be.visible').type('123456')
    cy.get('[name="spouse_child_remarks[]"]').should('be.visible').type('Remark')
    //To whom, the p- pass will be issued
    cy.get('[id="passport_holder_attachment"]').attachFile('demo.pdf')
    cy.get('[name="passport_holder_name[]"]').should('be.visible').type('Firoj Afrin')
    cy.get('[name="passport_holder_designation[]"]').should('be.visible').type('QA')
    cy.get('[name="passport_holder_mobile[]"]').should('be.visible').type('1234561234')
    cy.get('[name="passport_holder_passport_no[]"]').should('be.visible').type('1234567890')
    cy.get('[href="#next"]').should('be.visible').click()
    //Expatriate info
    cy.get('[name="arrival_date"]').should('be.visible').click()
    cy.get('[name="arrival_time"]').should('be.visible').click()
    cy.get('[name                                                                                                                 ="arrival_flight_no"]').should('be.visible').type('1234')
    cy.get('[href="#next"]').should('be.visible').click()

    //Attachment
   cy.get('[id="file155"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file156"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[href="#next"]').should('be.visible').click();

   //payment and submit
   cy.get('[id="accept_terms"]').click();
   cy.wait(2000);
   cy.get('[id="submitForm"]').scrollIntoView().click({force: true})
    cy.wait(5000)
    cy.get('[value="Account"]', { timeout: 15000 }).should('be.visible').click()
    cy.wait(10000)
    cy.xpath('/html/body/div[3]/div/div[6]/button[1]').click()
    cy.wait(10000)
    cy.get('[id="PayAccountNo"]').type('1234567891011')
    cy.wait(3000)
    cy.get('[id="PayAccountName"]').type('Jahangir Alam')
    cy.wait(3000)
    cy.get('[id="PayMobile"]').type('11111111111')
    cy.wait(3000)
    cy.xpath('/html/body/div[2]/form/div[2]/div/div[5]/div/div/button').click()
    cy.wait(3000)
    cy.get('[id="OTPVal"]').type('123456')
    cy.wait(3000)
    cy.get('[id="btnConfirm"]').click()
    cy.wait(5000)

}



export const vipCipLoungeFinalPayment = () =>
{
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/a').eq(0).click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
    cy.wait(2000);
    
   //payment and submit
   cy.get('[id="submitForm"]').scrollIntoView().click({force: true})
    cy.wait(5000)
    cy.get('[value="Account"]', { timeout: 15000 }).should('be.visible').click()
    cy.wait(5000)
    cy.xpath('/html/body/div[3]/div/div[6]/button[1]').click()
    cy.wait(5000)
    cy.get('[id="PayAccountNo"]').type('1234567891011')
    cy.wait(3000)
    cy.get('[id="PayAccountName"]').type('Jahangir Alam')
    cy.wait(3000)
    cy.get('[id="PayMobile"]').type('11111111111')
    cy.wait(3000)
    cy.xpath('/html/body/div[2]/form/div[2]/div/div[5]/div/div/button').click()
    cy.wait(3000)
    cy.get('[id="OTPVal"]').type('123456')
    cy.wait(3000)
    cy.get('[id="btnConfirm"]').click()
    cy.wait(5000)

}