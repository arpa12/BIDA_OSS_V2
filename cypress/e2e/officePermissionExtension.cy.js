// login-test.cy.js

import login from "../pages/login";
import {bidaRegistrationNew} from "../pages/bidaRegistration/bidaRegistrationNew"
// import { officePermissionStep1, officePermissionMeetingCreationStep2, officePermissionStep3, officePermissionStep4, officePermissionStep5 } from "../pages/applicationProcess";

import { officePermissionExtension, officePermissionExtensionFinalPayment } from "../pages/officePermission/officePermissionExtension";

describe('Office permission Extension', () => {
  it('Office permission Extension Form Fillup & Submit Application with Payment', () => {
    cy.visit('/');  // Navigate to base URL

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


    officePermissionExtension();

  });

   it.skip('Office Permission Application Processing - Step 1', () => {
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
  
      officePermissionStep1();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click(); 
    });
  
   it.skip('Office Permission  Application Processing - Step 2', () => {
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
  
      officePermissionMeetingCreationStep2();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

   it.skip('Office Permission Application Processing - Step 3', () => {
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
  
      officePermissionStep3();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

    it.skip('Office Permission Application Processing - Step 4', () => {
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
  
      officePermissionStep4();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

    it.skip('Office Permission Application Processing - Step 5', () => {
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

  
      officePermissionExtensionFinalPayment();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

    it.skip('Office Permission Application Processing - Step 6', () => {
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
  
      officePermissionStep5();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

  })