export const importPermissionNew = () =>
{
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[8]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[8]/ul/li[2]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[1]/div[2]/a/button').click();
    cy.wait(2000);
    cy.get('[id="ref_app_tracking_no"]').select('BRA-02Dec2025-00001 - (Project Name: Stage Server Cross Check)');
    cy.wait(2000);
    cy.get('[id="searchBRinfo"]').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
     cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
     cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
    cy.get('[name="required_quantity[0]"]').type('1');
    cy.wait(2000);
    cy.get('[name="hs_code[0]"]').type('1');
    cy.wait(2000);
    cy.get('[name="bill_loading_no[0]"]').type('1');
    cy.wait(2000);
    cy.get('[name="bill_loading_date[0]"]').should('be.visible').type('01-May-2025')
    cy.wait(2000);
    cy.get('[name="invoice_no[0]"]').type('1');
    cy.wait(2000);
    cy.get('[name="invoice_date[0]"]').scrollIntoView().should('be.visible').type('01-May-2025')
    cy.wait(2000);
    cy.get('[name="total_value_equivalent_usd[0]"]').scrollIntoView().type('1');
    cy.wait(2000);
    cy.get('[name="total_value_as_per_invoice[0]"]').scrollIntoView().type('1');
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();

    //Attachment
   cy.get('[id="file178"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file176"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();

   //payment and submit
   cy.get('[id="accept_terms"]').click();
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