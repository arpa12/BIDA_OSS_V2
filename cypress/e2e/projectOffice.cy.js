import { projectOfficeStep1, projectOfficeMeetingCreationStep2, projectOfficeStep3, projectOfficePermissionStep4, projectOfficePermissionStep5 } from "../pages/applicationProcess";

describe('Recorded Test', () => {
  // Global handler to suppress third-party script errors
  Cypress.on('uncaught:exception', (err, runnable) => {
    const ignoredErrors = [
      'baseUrl', 'has already been declared', 'ResizeObserver loop',
      'Script error', 'NetworkError', 'Load failed', 'cancelled', 'ChunkLoadError'
    ];
    if (ignoredErrors.some(msg => err.message.includes(msg))) {
      console.log('Suppressed error:', err.message);
      return false;
    }
    return true;
  });

  // ═══════════════════════════════════════════════════════════════
  // PRE-CONFIGURE CROSS-ORIGIN ERROR HANDLERS
  // Must be set up BEFORE navigation to these OAuth/SSO domains
  // ═══════════════════════════════════════════════════════════════
  before(() => {
    cy.origin('https://uat-id.oss.net.bd', () => {
      Cypress.on('uncaught:exception', (err) => {
        console.log('Suppressed cross-origin error:', err.message);
        return false;
      });
    });
  });

  it.skip('should perform recorded actions of project office new', () => {
    cy.visit('https://staging-bida-g2.oss.net.bd/');

    // Close any open modals at start
    cy.get('body').then($body => {
      const modal = $body.find('.modal.fade.in, .modal.show, .modal[style*="display: block"]');
      if (modal.length > 0) {
        const closeBtn = modal.find('.close, button.close, [data-dismiss="modal"]');
        if (closeBtn.length > 0) {
          closeBtn.first().click();
          cy.wait(500);
        }
      }
    });

    // Note: cypress-xpath plugin required for XPath selectors
    // Install: npm install -D cypress-xpath
    // Add to support/e2e.js: require('cypress-xpath')

    cy.xpath('/html/body/div/section[3]/div/div[2]/div/div/div[2]/div[2]/div').first().click({ force: true });
    cy.wait(2000);
    cy.contains('a', 'Login/ Register in Classic Mode').click({ force: true });
    cy.wait(2000);
    // Handle cross-origin authentication on uat-id.oss.net.bd
    cy.origin('https://uat-id.oss.net.bd', () => {
      // Suppress uncaught exceptions from third-party OAuth pages
      // Common errors: 'baseUrl already declared', 'ResizeObserver loop', etc.
      cy.on('uncaught:exception', (err) => {
        // Return false to prevent Cypress from failing the test
        console.log('Cross-origin exception suppressed:', err.message);
        return false;
      });

      cy.get('[id=\"identifier\"]').type('corp.juisaha@gmail.com');
      cy.wait(2000);
      cy.get('[id=\"next_btn\"]').click({ force: true });
      cy.wait(2000);
      cy.get('[id=\"password\"]').type('123456A@');
      cy.wait(2000);
      cy.get('[id=\"login_btn\"]').click({ force: true });
      cy.wait(2000);
    });

    // WARNING: Unexpected selector format
    cy.get('body').then($body => {
      if ($body.find('[id="steps_modal"]').length > 0) {
        cy.get('[id=\"steps_modal\"]', { timeout: 15000 }).first().click({ force: true });
        cy.wait(2000);
      }
    });
    // WARNING: Unexpected selector format
    cy.get('body').then($body => {
      if ($body.find('[aria-label="Close"]').length > 0) {
        cy.get('[aria-label=\"Close\"]', { timeout: 15000 }).first().click({ force: true });
        cy.wait(2000);
      }
    });
    cy.contains('a', 'Md Jalal Shek').click({ force: true });
    cy.wait(2000);
    cy.contains('a', 'BIDA Services').click({ force: true });
    cy.wait(2000);
    cy.contains('a', 'Project Office').click({ force: true });
    cy.wait(2000);
    cy.xpath('/html/body/div/nav/ul/li[5]/ul/li/ul/li[4]/ul/li[2]/a').first().click({ force: true });
    cy.wait(2000);
    cy.contains('button', 'New Application').click({ force: true });
    cy.wait(2000);
    cy.get('[name=\"ceo_fax_no\"]').type('75675675');
    cy.wait(2000);
    cy.get('[name=\"ceo_spouse_name\"]').type('test');
    cy.wait(2000);
    cy.get('[id=\"project_name\"]').type('test');
    cy.wait(2000);
    cy.get('[id=\"project_major_activities\"]').type('test');
    cy.wait(2000);
    cy.get('[id=\"project_major_details\"]').type('test');
    cy.wait(2000);
    // WARNING: Unexpected selector format
    cy.get('body').then($body => {
      if ($body.find('[id="yes"]').length > 0) {
        cy.get('[id=\"yes\"]', { timeout: 15000 }).first().click({ force: true });
        cy.wait(2000);
      }
    });
    // WARNING: Unexpected selector format
    cy.get('body').then($body => {
      if ($body.find('[id="yes"]').length > 0) {
        cy.get('[id=\"yes\"]', { timeout: 15000 }).first().click({ force: true });
        cy.wait(2000);
      }
    });
    // WARNING: Unexpected selector format
    cy.get('body').then($body => {
      if ($body.find('[id="no"]').length > 0) {
        cy.get('[id=\"no\"]', { timeout: 15000 }).first().click({ force: true });
        cy.wait(2000);
      }
    });
    // WARNING: Unexpected selector format
    cy.get('body').then($body => {
      if ($body.find('[id="no"]').length > 0) {
        cy.get('[id=\"no\"]', { timeout: 15000 }).first().click({ force: true });
        cy.wait(2000);
      }
    });
    cy.get('[id=\"c_company_name_0\"]').type('test');
    cy.wait(2000);
    cy.get('[id=\"c_origin_country_id_0\"]').select('2');
    cy.wait(2000);
    cy.get('[id=\"c_org_type_0\"]').select('3');
    cy.wait(2000);
    cy.get('[id=\"c_flat_apart_floor_0\"]').type('test');
    cy.wait(2000);
    cy.get('[id=\"c_house_plot_holding_0\"]').type('test43');
    cy.wait(2000);
    cy.get('[id=\"c_post_zip_code_0\"]').type('1111');
    cy.wait(2000);
    cy.get('[id=\"c_street_0\"]').type('21');
    cy.wait(2000);
    cy.get('[id=\"c_email_0\"]').type('nihanarpa4@gmail.com');
    cy.wait(2000);
    cy.get('[id=\"c_city_0\"]').type('dhaka');
    cy.wait(2000);
    cy.get('[id=\"c_mobile_no_0\"]').type('1924456789');
    cy.wait(2000);
    cy.get('[id=\"c_state_province_0\"]').type('dhaka');
    cy.wait(2000);
    cy.get('[id=\"c_shareholder_percentage_0\"]').type('100');
    cy.wait(2000);
    cy.get('[id=\"c_major_activity_brief_0\"]').type('lorem ipsum');
    cy.wait(2000);
    cy.contains('a', 'Next').click({ force: true });
    cy.wait(2000);
    cy.get('[id=\"poa_co_division_id\"]').select('11');
    cy.wait(2000);
    cy.get('[id=\"poa_co_district_id\"]').select('9');
    cy.wait(2000);
    cy.get('[id=\"poa_co_thana_id\"]').select('128');
    cy.wait(2000);
    cy.get('[name=\"poa_co_post_office\"]').type('1111');
    cy.wait(2000);
    cy.get('[name=\"poa_co_post_office\"]').clear();
    cy.wait(500);
    cy.get('[name=\"poa_co_post_office\"]').clear();
    cy.wait(500);
    cy.get('[name=\"poa_co_post_office\"]').type('dhaka');
    cy.wait(2000);
    cy.get('[name=\"poa_co_post_code\"]').type('1111');
    cy.wait(2000);
    cy.get('[name=\"poa_co_address\"]').type('dhaka1230');
    cy.wait(2000);
    cy.get('[id=\"poa_co_mobile_no\"]').type('1924489215');
    cy.wait(2000);
    cy.get('[name=\"poa_co_email\"]').type('nihanarpa4@gmail.com');
    cy.wait(2000);
    //Project Office Address (site office)
    cy.get('[id="poa_so_division_id_0"]').should('exist').select('2');
    cy.wait(2000)
    cy.get('[id="poa_so_district_id_0"]').should('exist').select('26');
    cy.wait(2000)
    cy.get('[id="poa_so_thana_id_0"]').should('exist').select('238');
    cy.get('[name="poa_so_post_office[0]"]').should('be.visible').type('Mirpur-DOHS');
    cy.get('[name="poa_so_post_code[0]"]').should('be.visible').type('1216');
    cy.get('[name="poa_so_address[0]"]').should('be.visible').type('House No 1200, Road No 2, Mirpur-DOHS, Dhaka');
    cy.get('[name="poa_so_telephone_no[0]"]').should('be.visible').type('01710345678');
    cy.get('[name="poa_so_mobile_no[0]"]').should('be.visible').type('01712345678');
    cy.get('[name="poa_so_email[0]"]').should('be.visible').type('abc@gmail.com')
    ////Site Office Incharge Information
    cy.get('[name="site_office_name[0]"]').should('be.visible').type('John Doe');
    cy.get('[name="site_office_designation[0]"]').should('be.visible').type('Project Manager');
    cy.get('[name="site_office_mobile_no[0]"]').should('be.visible').type('01716345678');
    cy.get('[name="site_office_email[0]"]').should('be.visible').type('abc@gmail.com')
    cy.get('[name="site_office_authorize_letter[0]"]').attachFile('demo.pdf')
    //The contact Amount of the Project (in US $)
    cy.get('[name="project_amount"]').should('be.visible').type('100000');
    //Proposed Project Duration (as per contract)
    cy.get('[name="period_start_date"]').should('exist').clear().type('2024-11-06').blur();
    cy.get('[name="period_end_date"]').should('exist').clear().type('2026-11-06').blur();
    cy.get('[name="project_amount"]').should('be.visible').click();
    //Authorized Person of Procurement Entity
    cy.get('[name="authorized_name"]').should('be.visible').type('John Hossen');
    cy.get('[name="authorized_designation"]').should('be.visible').type(' Manager');
    cy.get('[name="authorized_org_dep"]').should('be.visible').type('Procurement Department');
    cy.get('[name="authorized_address"]').should('be.visible').type('House No 19, Road No 2, Mirpur-DOHS, Dhaka');
    cy.get('[name="authorized_mobile_no"]').should('be.visible').type('01712345678');
    cy.get('[name="authorized_email"]').should('be.visible').type('abc@gmail.com')
    cy.get('[id="authorized_letter"]').attachFile('demo.pdf')
    //Ministry/Department/Organization of the project to be implemented
    cy.get('[name="ministry_name"]').should('be.visible').type('Ministry of Power, Energy and Mineral Resources');
    cy.get('[name="ministry_address"]').should('be.visible').type('House No 1, Road No 2, Mirpur-DOHS, Dhaka');
    cy.get('[name="contract_signing_date"]').should('exist').clear().type('2024-11-06').blur();
    //Proposed organizational set up of the project Office with expatriate and local man power
    cy.get('[name="local_technical"]').should('be.visible').type('20');
    cy.get('[name="local_general"]').should('be.visible').type('400');
    cy.get('[name="foreign_technical"]').should('be.visible').type('10');
    cy.get('[name="foreign_general"]').should('be.visible').type('20');
    ///Foreign Technical & General Details:
    cy.get('[name="foreign_number[0]"]').should('be.visible').type('30');
    cy.get('[name="foreign_designation[0]"]').should('be.visible').type('Project Manager');
    cy.get('[name="foreign_duration[0]"]').should('be.visible').type('12');
    cy.get('[href="#next"]').should('be.visible').click();
    //3.Attachments
    cy.wait(3000)
    cy.get('[id="file190"]').attachFile('demo.pdf')
    cy.wait(3000)
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

  });
});
 it.skip('Project Office Application Processing - Step 1', () => {
         cy.visit('/')
      
      cy.origin('https://id.oss.net.bd', () => {
        cy.on('uncaught:exception', (err) => {
          if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
            return false
          }
          return true
        })
      })
      
      // login steps
      login.performLogin()
      cy.wait(5000)
      login.enterUsername('rd1@batworld.com')
      cy.wait(5000)
      login.enterNextButton()
      cy.wait(5000)
      login.enterPassword('Ossp@123')
      cy.wait(5000)
      login.clickLoginButton()
      cy.wait(5000)
      // login.closeModal()
  
      projectOfficeStep1();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click(); 
    });
  
   it.skip(' Project Office Application Processing - Step 2', () => {
         cy.visit('/')
      
      cy.origin('https://id.oss.net.bd', () => {
        cy.on('uncaught:exception', (err) => {
          if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
            return false
          }
          return true
        })
      })
      
      // login steps
      login.performLogin()
      cy.wait(5000)
      login.enterUsername('rd1@batworld.com')
      cy.wait(5000)
      login.enterNextButton()
      cy.wait(5000)
      login.enterPassword('Ossp@123')
      cy.wait(5000)
      login.clickLoginButton()
      cy.wait(5000)
      // login.closeModal()
  
      projectOfficeMeetingCreationStep2();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

   it.skip(' Project Office Application Processing - Step 3', () => {
         cy.visit('/')
      
      cy.origin('https://id.oss.net.bd', () => {
        cy.on('uncaught:exception', (err) => {
          if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
            return false
          }
          return true
        })
      })
      
      // login steps
      login.performLogin()
      cy.wait(5000)
      login.enterUsername('rd1@batworld.com')
      cy.wait(5000)
      login.enterNextButton()
      cy.wait(5000)
      login.enterPassword('Ossp@123')
      cy.wait(5000)
      login.clickLoginButton()
      cy.wait(5000)
      // login.closeModal()
  
      projectOfficeStep3();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

    it.skip('Project Office Application Processing - Step 4', () => {
         cy.visit('/')
      
      cy.origin('https://id.oss.net.bd', () => {
        cy.on('uncaught:exception', (err) => {
          if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
            return false
          }
          return true
        })
      })
      
      // login steps
      login.performLogin()
      cy.wait(5000)
      login.enterUsername('juisaha.ossp@gmail.com')
      cy.wait(5000)
      login.enterNextButton()
      cy.wait(5000)
      login.enterPassword('123456A@')
      cy.wait(5000)
      login.clickLoginButton()
      cy.wait(5000)
      // login.closeModal()
  
      projectOfficePermissionStep4();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

    it.skip('Project Office Application Processing - Step 5', () => {
         cy.visit('/')
      
      cy.origin('https://id.oss.net.bd', () => {
        cy.on('uncaught:exception', (err) => {
          if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
            return false
          }
          return true
        })
      })
      
      // Perform login
    login.performLogin();
    cy.wait(5000);
    login.enterUsername('corp.juisaha@gmail.com');
    cy.wait(5000);
    login.enterNextButton();
    cy.wait(5000);
    login.enterPassword('123456A@');
    cy.wait(5000);
    login.clickLoginButton();
    cy.wait(5000);
    
    cy.xpath('/html/body/div[1]/div/div/div[3]/div/div/div/div/form/div/div[1]/div/div/span/span[1]/span/span[1]').click();
    cy.wait(3000)
    cy.xpath('/html/body/span/span/span[2]/ul/li[2]').click();
    cy.wait(3000)
    cy.xpath('/html/body/div[1]/div/div/div[3]/div/div/div/div/form/div/div[3]/div/div/button').click();
    cy.wait(3000)
    bidaRegistrationNew.dashboardInnerModal()

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

    });

    it.skip('Project Office Application Processing - Step 6', () => {
         cy.visit('/')
      
      cy.origin('https://id.oss.net.bd', () => {
        cy.on('uncaught:exception', (err) => {
          if (err.message.includes('baseUrl') || err.message.includes('Identifier')) {
            return false
          }
          return true
        })
      })
      
      // login steps
      login.performLogin()
      cy.wait(5000)
      login.enterUsername('rd1@batworld.com')
      cy.wait(5000)
      login.enterNextButton()
      cy.wait(5000)
      login.enterPassword('Ossp@123')
      cy.wait(5000)
      login.clickLoginButton()
      cy.wait(5000)
      // login.closeModal()
  
      projectOfficePermissionStep5();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });
