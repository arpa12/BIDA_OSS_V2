export const securityClearance = () =>
{
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[15]/a').eq(0).click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[1]/div[2]/a/button').click();
    cy.wait(2000);


//Basic Information
cy.get('[name="ref_app_tracking_no"]').type('WPN-15Jan2026-00001')
cy.wait(2000);
cy.get('[id="searchWPNinfo"]').click();
cy.wait(3000);
cy.get('[href="#next"]').should('be.visible').click();
cy.wait(2000);
cy.get('[name="acc_holder_name"]').type('Test');
cy.wait(2000);
cy.get('[id="bank_id"]').select('Bank Asia Limited');
cy.wait(2000);
cy.get('[id="branch_id"]').select('Kushtia Branch');
cy.wait(2000);
cy.get('[name="bank_acc_number"]').type('1234567891011');
cy.wait(2000);
cy.get('[name="bank_statement"]').attachFile('demo.pdf');
cy.wait(2000);
cy.get('[href="#next"]').should('be.visible').click();
cy.wait(2000);
cy.get('[name="tin_no"]').type('123456789');
cy.wait(2000);
cy.get('[name="tin_certificate"]').attachFile('demo.pdf');
cy.wait(2000);
cy.get('[href="#next"]').should('be.visible').click();
cy.wait(2000);
cy.get('[id="country"]').select('Bangladesh');
cy.wait(2000);
cy.get('[name="state"]').type('Dhaka');
cy.wait(2000);
cy.get('[name="city"]').type('Dhaka');
cy.wait(2000);
cy.get('[name="postal_code"]').type('1207');
cy.wait(2000);
cy.get('[name="street_address"]').type('Dhaka,Bangladesh');
cy.wait(2000);
cy.get('[id="residential_type_company"]').click();
cy.wait(2000);
cy.get('[id="location_type_owned"]').click();
cy.wait(2000);
cy.get('[id="type_of_owned_within"]').click();
cy.wait(2000);
cy.get('[name="within_factory_district"]').select('Bagerhat');
cy.wait(2000);
cy.get('[id="within_factory_police_station"]').select('Dhaka');
cy.wait(2000);
cy.get('[name="within_factory_post_office"]').type('Dhaka Sadar');
cy.wait(2000);
cy.get('[name="within_factory_post_code"]').type('1207');
cy.wait(2000);
cy.get('[name="within_factory_house_address"]').type('Dhaka,Bangladesh');
cy.wait(2000);
cy.get('[id="within_factory_mobile"]').type('11111111111');
cy.wait(2000);
cy.get('[name="within_factory_email"]').type('nihanarpa64@gmail.com');
cy.get('[href="#next"]').should('be.visible').click();
cy.wait(2000);
cy.get('[id="has_previous_passport_no"]').click();
cy.wait(2000);
cy.get('[href="#next"]').should('be.visible').click();
cy.wait(2000);
cy.get('[href="#next"]').should('be.visible').click();


    //Attachment
   cy.get('[id="file215"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file214"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file213"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file212"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file211"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file210"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file209"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file208"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file207"]').attachFile('demo.pdf')
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



// export const securityClearanceFinalPayment = () =>
// {
//     cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
//     cy.wait(2000);
//     cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
//     cy.wait(2000);
//     cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/a').eq(0).click();
//     cy.wait(2000);
//     cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/ul/li[5]/a').click();
//     cy.wait(2000);
//     cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
//     cy.wait(2000);
    
//    //payment and submit
//    cy.get('[id="submitForm"]').scrollIntoView().click({force: true})
//     cy.wait(5000)
//     cy.get('[value="Account"]', { timeout: 15000 }).should('be.visible').click()
//     cy.wait(5000)
//     cy.xpath('/html/body/div[3]/div/div[6]/button[1]').click()
//     cy.wait(5000)
//     cy.get('[id="PayAccountNo"]').type('1234567891011')
//     cy.wait(3000)
//     cy.get('[id="PayAccountName"]').type('Jahangir Alam')
//     cy.wait(3000)
//     cy.get('[id="PayMobile"]').type('11111111111')
//     cy.wait(3000)
//     cy.xpath('/html/body/div[2]/form/div[2]/div/div[5]/div/div/button').click()
//     cy.wait(3000)
//     cy.get('[id="OTPVal"]').type('123456')
//     cy.wait(3000)
//     cy.get('[id="btnConfirm"]').click()
//     cy.wait(5000)

// }