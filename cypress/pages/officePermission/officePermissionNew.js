export const officePermissionNew = () =>
{
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/ul/li[2]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[1]/div[2]/a/button').click();
    cy.wait(2000);
    //Basic Information
    cy.get('[id="office_type"]').should('exist').select('1');
    //Information about the principal company
    cy.get('[id="c_company_name"]').should('be.visible').type('ABC Technologies Ltd');
    cy.get('[name="c_origin_country_id"]').should('exist').select('13');
    cy.get('[name="c_org_type"]').should('exist').select('1');
    cy.get('[name="c_flat_apart_floor"]').should('be.visible').type('6th Floor, Flat No. 602');
    cy.get('[name="c_house_plot_holding"]').should('be.visible').type('1069');
    cy.get('[name="c_street"]').should('be.visible').type('Road No. 2, Mirpur-DOHS');
    cy.get('[name="c_post_zip_code"]').should('be.visible').type('1216');
    cy.get('[name="c_city"]').should('be.visible').type('Dhaka');
    cy.get('[name="c_email"]').should('be.visible').type('assd@gmail.com');
    cy.get('[name="c_fax"]').should('be.visible').type('xxx-xxxxxxx');
    cy.xpath('/html/body/div[1]/div/div/div[4]/section/div/div/div/div/div[2]/form/div[2]/fieldset[1]/div[3]/div[2]/fieldset[1]/div[5]/div/div[2]/div/div/input[1]').should('be.visible').type('01712345678');
    cy.get('[name="c_city"]').should('be.visible').type('Dhaka');
    cy.get('[name="c_state_province"]').should('be.visible').type('Dhaka');
    cy.get('[name="c_major_activity_brief"]').should('be.visible').type('During the first half of May 2025, ABC Technologies Ltd.');
    //The capital of the principal company (in US $)
    cy.get('[name="authorized_capital"]').should('be.visible').type('1000000');
    cy.get('[name="paid_up_capital"]').should('be.visible').type('800000');
    cy.get('[href="#next"]').should('be.visible').click();

    
    //Office info.
    //Information about the proposed branch/ liaison/ representative office
    cy.get('[id="local_company_name"]').should('be.visible').type('ABC Commercial Private Ltd Company');
    cy.get('[id="local_company_name_bn"]').should('be.visible').type('এবিসি কমার্শিয়াল প্রাইভেট লিমিটেড কোম্পানি');
    //Local address of the principal company: (Bangladesh only)
    cy.get('[id="ex_office_division_id"]').should('exist').select('2');
    cy.wait(2000)
    cy.get('[id="ex_office_district_id"]').should('exist').select('26');
    cy.wait(2000)
    cy.get('[name="ex_office_thana_id"]').should('exist').select('238');
    cy.get('[name="ex_office_post_code"]').should('be.visible').type('1216');
    cy.get('[name="ex_office_address"]').should('be.visible').type('House No 1269, Road No 2, Mirpur-DOHS, Dhaka');
    cy.xpath('//*[@id="ex_office_mobile_no"]').should('be.visible').type('01712345678');
    cy.get('[name="ex_office_email"]').should('be.visible').type('abc@gmail.com')
    //Activities in Bangladesh
    cy.get('[placeholder="Write here"]').should('be.visible').type('The proposed office will focus on market research, client relationship management, and local sales support.');
    cy.get('[name="first_commencement_date"]').should('exist').clear().type('01-May-2024');
    cy.get('[name="operation_target_date"]').should('exist').clear().type('01-May-2026');
    //Period for which permission is sought for
    cy.get('[name="period_start_date"]').should('exist').clear().type('01-May-2024');
    cy.get('[name="period_end_date"]').should('exist').clear().type('01-May-2026');
    //Proposed organizational set up of the office with expatriate and local man power ratio
    cy.get('[name="local_executive"]').should('be.visible').type('20');
    cy.get('[name="local_stuff"]').should('be.visible').type('40');
    cy.get('[name="foreign_executive"]').should('be.visible').type('10');
    cy.get('[name="foreign_stuff"]').should('be.visible').type('20');
    cy.get('[href="#next"]').should('be.visible').click();
  
    //Attachment
   cy.get('[id="file40"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[id="file41"]').attachFile('demo.pdf')
   cy.wait(2000);
   cy.get('[href="#next"]').should('be.visible').click();

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



export const officePermissionNewFinalPayment = () =>
{
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/a').click();
    cy.wait(2000);
    cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/ul/li[2]/a').click();
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