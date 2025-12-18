export const visaRecommendationNew = () => 
    {
        cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
        cy.wait(3000);
        cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
        cy.wait(3000);
        cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[6]/a').click();
        cy.wait(3000);
        cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[6]/ul/li[2]/a').click();
        cy.wait(3000);
        cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[1]/div[2]/a/button').click();
        cy.wait(3000);
        cy.get('[name="ref_app_tracking_no"]').select('BR-20Oct2025-00001')
        cy.wait(3000);
        cy.get('[id="searchBRinfo"]').click();
        cy.wait(5000);
        cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[2]/fieldset[1]/div[3]/div/a[1]').click();
        cy.get('[id="eTypeChecked_0"]').click();
        cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[3]/ul/li[2]/a').click();

        //Embassy/ High Commission Info
        cy.get('[id="mission_country_id"]').select('Afghanistan')
        cy.get('[id="high_commision_id"]').select('High Commission, Kabul')

        //Information of Expatriate/ Investor/ Employee
        cy.get('[name="emp_name"]').type('test')
        cy.get('[name="emp_designation"]').type('test designation')
        cy.get('[name="brief_job_description"]').type('testing purpose')
        cy.get('[id="investorPhotoUploadBtn"]').first().attachFile('profile.jpg')
        cy.get('[id="cropImageBtn"]').should('be.visible').click()


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

    //Compensation and Benefit
    cy.get('[name="basic_payment_type_id"]').select('Monthly')
    cy.wait(1000)
    cy.get('[name="basic_local_amount"]').should('be.visible').type('20000')
    cy.wait(1000)
    cy.get('[name="basic_local_currency_id"]').select('BDT')
    cy.wait(1000)

    //Contact address of the expatriate in Bangladesh
    cy.get('[id="ex_office_division_id"]').select('BARISHAL')
    cy.wait(1000)
    cy.get('[id="ex_office_district_id"]').select('BARISHAL')
    cy.wait(1000)
    cy.get('[id="ex_office_thana_id"]').select('Agailjhara')
    cy.wait(1000)
    cy.get('[name="ex_office_post_code"]').should('be.visible').type('1234')
    cy.get('[name="ex_office_post_office"]').should('be.visible').type('Agailjhara')
    cy.get('[name="ex_office_address"]').should('be.visible').type('Agailjhara Bazzar')
    cy.xpath('//*[@id="ex_office_mobile_no"]').should('exist').type('1945678930')
    cy.get('[name="ex_office_email"]').should('be.visible').type('xyz@gmail.com')
    cy.wait(500)
    cy.contains('Next').should('be.visible').click()

    //Travel Info
    //Manpower of the organization--page03
    cy.get('[id="travel_history_no"]').should('be.visible').check()
    cy.get('[id="local_executive"]').should('be.visible').type('45')
    cy.get('[id="local_stuff"]').should('be.visible').type('15')
    cy.get('[id="foreign_executive"]').should('be.visible').type('6')
    cy.get('[id="foreign_stuff"]').should('be.visible').type('10')
    cy.wait(500)
    cy.contains('Next').should('be.visible').click()

    //Attachments
    //Application for Visa Recommendation--page04
    cy.wait(3000)
    cy.get('[id="file6"]').attachFile('demo.pdf')
    cy.wait(500)
    cy.get('[id="file18"]').attachFile('demo.pdf')
    cy.wait(3000)
    cy.contains('Next').should('be.visible').click()
    //Declaration
    //Declaration And Undertaking--page05
    cy.get('[id="accept_terms"]').should('be.visible').check()
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