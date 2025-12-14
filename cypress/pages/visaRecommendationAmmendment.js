export const visaRecommendationAmmendment = () => {
  cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.wait(2000);
   cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[6]/a').click();
    cy.wait(2000);
   cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[6]/ul/li[4]/a').click();
    cy.wait(2000);

    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[1]/div[2]/a/button').click();
    cy.wait(2000);

    cy.get('[id="yes"]').click();
    cy.wait(2000);
    cy.get('[name="ref_app_tracking_no"]').type('VR-11Dec2025-00001');
    cy.get('[id="searchVRinfo"]').click();
    cy.wait(5000);
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').click();
    cy.wait(2000);
    // cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[2]/fieldset[2]/div[2]/div[2]/table/tbody/tr[5]/td[3]/div/span').click();
    cy.get('[id="n_office_post_code_check"]').click();
    cy.get('[id="n_office_post_code"]').type('1212');

    
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').click();

    //Attachments
    cy.wait(3000)
    cy.get('[id="file86"]').attachFile('demo.pdf')
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').click();


    //declaration
    cy.get('[id="accept_terms"]').click();
    cy.wait(500)
    cy.contains('Next').should('be.visible').click()

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

