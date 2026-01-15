export const ircRecommendation3 = () =>
{
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[14]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[14]/ul/li[6]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[1]/div[2]/a/button').click();
    cy.wait(2000);
    cy.get('[id="irc_purpose_id"]').select('Import Of Raw Materials');
    cy.wait(2000);
    cy.get('[id="irc_type_3"]').click();
    cy.wait(2000);
    cy.get('[id="last_br_yes"]').click();
    cy.wait(2000);
    cy.get('[name="br_ref_app_tracking_no"]').type('BR-09Oct2025-00001')
    cy.wait(2000);
    cy.get('[id="searchBRinfo"]').click();
    cy.wait(2000);
    cy.get('[id="last_irc_yes"]').click();
    cy.wait(2000);
    cy.get('[name="irc_ref_app_tracking_no"]').type('IRC-2-11Jan2026-00002 ')
    cy.wait(2000);
    // cy.get('[name="irc_manually_approved_date"]').should('exist').type('01-Jan-2026')
    cy.get('[id="searchIRCinfo"]').click();
    cy.wait(2000);
    cy.get('[name="irc_ccie_no"]').type('CCIE-123456')
    cy.wait(2000);
    cy.get('[id="irc_ccie_brows_copy_id"]').attachFile('demo.pdf');
    cy.wait(2000);
    cy.get('[name="irc_ccie_approve_date"]').should('exist').type('01-Apr-2025')
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/div/form/div[2]/fieldset[1]/fieldset/div[1]/a[1]').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
    cy.get('[id="save_as_draft"]').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a', { timeout: 15000 }).should('be.visible').eq(0).click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
    // cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();
    // cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/div/form/div[2]/fieldset[2]/div[5]/div[2]/fieldset[7]/fieldset[2]/fieldset/div/div[2]/table/tbody/tr/td[8]/a[1]').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[3]/div[2]/div/div/form/div[2]/div[4]/table/tbody/tr[2]/td[7]/a').click();
    // cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
    cy.get('[id="percent0"]').clear().type('100');
    cy.wait(2000);
    cy.get('[id="machinery_create_btn"]').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();

    //Attachment
   cy.get('[id="file145"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/div/form/div[3]/ul/li[2]/a').click();

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