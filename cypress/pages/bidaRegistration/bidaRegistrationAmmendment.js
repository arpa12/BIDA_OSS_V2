export const bidaRegistrationAmendment = () => 
    {
        cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/ul/li[4]/a').click();
        cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[1]/div[2]/a/button').click();
        cy.wait(5000);
        cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[2]/fieldset[1]/div[1]/div[2]/div[1]/div/div/div/label[1]/input').click();
        cy.get('[name="ref_app_tracking_no"]').type('BR-09Dec2025-00002')
        cy.wait(3000);
        cy.get('[id="searchBRinfo"]').click();
        cy.wait(5000);
        cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[2]/fieldset[1]/div[2]/div[2]/div[1]/div/div/div/label[2]/input').click();
        
        cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').scrollIntoView().click();

        cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').scrollIntoView().click();

        cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').scrollIntoView().click();

        cy.xpath('/html/body/div[8]/div/div[3]/button[1]').click();

        cy.get('[id="save_as_draft"]').click();
        cy.wait(5000);

        cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a', { timeout: 10000 }).should('be.visible').eq(0).click();

        cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/form/div[3]/ul/li[2]/a').scrollIntoView().click();
        cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/form/div[3]/ul/li[2]/a').scrollIntoView().click();
        cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/form/div[3]/ul/li[2]/a').scrollIntoView().click();
        cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/form/div[3]/ul/li[2]/a').scrollIntoView().click();

         //Attachments
         cy.get('#file170').first().attachFile('demo.pdf')

         cy.get('[id="accept_terms"]').click();
         cy.xpath('/html/body/div[1]/div/div/div[3]/section/div[2]/div/div/div/div[2]/form/div[3]/ul/li[2]/a').scrollIntoView().click();

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

    // cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    // cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[13]/a').click();


    }