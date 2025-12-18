export const workPermitAmendment = () => 
{
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[10]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[10]/ul/li[6]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[1]/div[2]/a/button').click();
    cy.get('[id="is_approval_online_yes"]').click();
    cy.get('[name="ref_app_tracking_no"]').type('WPN-10Dec2025-00001')
    cy.get('[id="searchWPNinfo"]').click();
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
    
    cy.get('[id="n_office_post_code_check"]').click();
    cy.get('[id="n_office_post_code"]').type('1213');
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
   //attachments
    cy.get('[id="file109"]').attachFile('demo.pdf')
    cy.wait(2000);
     cy.get('[id="file111"]').attachFile('demo.pdf')
    cy.wait(2000);
    cy.get('[id="file112"]').attachFile('demo.pdf')
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);


    //declaration
    cy.get('[id="accept_terms"]').should('exist');
    cy.wait(1000);
    cy.get('[id="accept_terms"]').scrollIntoView().click({force: true});
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);

    //Payment and Submit
    cy.get('[id="submitForm"]').click()
    cy.wait(5000)
    cy.get('[value="Account"]').click()
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


export const workPermitAmendmentFinalPayment = () => 
    {
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[10]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[10]/ul/li[6]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr/td[6]/a',{ timeout: 15000 }).should('be.visible').eq(0).click();
    cy.wait(2000);

    //Payment and Submit
    cy.get('[id="submitForm"]').click()
    cy.wait(5000)
    cy.get('[value="Account"]').click()
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