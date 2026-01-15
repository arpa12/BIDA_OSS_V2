export const officePermissionExtension = () =>
{
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/a').eq(0).click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[1]/div[2]/a/button').click();
    cy.wait(2000);


    //Basic Information
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[2]/fieldset[1]/div/div[2]/div[1]/div/div/div/label[1]/input').click();
    cy.wait(2000);
    cy.get('[name="ref_app_tracking_no"]').type('OPN-13Jan2026-00002');
    cy.wait(2000);
    cy.get('[id="searchOPNinfo"]').click();
    cy.wait(5000);
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[2]/fieldset[1]/div/div[2]/fieldset[1]/div[1]/div/div/div/label[1]/input').click();
    cy.wait(2000);
    cy.get('[name="desired_start_date"]').type('2024-07-01');
    cy.wait(2000);
    cy.get('[name="desired_end_date"]').type('2025-06-30');
    cy.wait(2000);
    cy.get('[id="last_remittance_year"]').select('2026');
    cy.wait(2000);
    cy.get('[id="inward_remittance"]').type('50000');
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
  
    //Attachment
   cy.get('[id="file44"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file45"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[href="#next"]').should('be.visible').click();

   //payment and submit
   cy.get('[id="accept_terms"]').click();
   cy.wait(2000);
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



export const officePermissionExtensionFinalPayment = () =>
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