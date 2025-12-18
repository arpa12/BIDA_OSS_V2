// login-test.cy.js

import login from "../pages/login";
import {bidaRegistrationNew} from "../pages/bidaRegistrationNew"
import { workPermitNewStep1, workPermitNewStep2, workPermitNewStep3 } from "../pages/applicationProcess";

import {workPermitNew, workPermitNewFinalPayment} from "../pages/workPermit/workPermitNew";

describe('Work Permit New', () => {
  it('Work Permit New', () => {
    cy.visit('/');  // Navigate to base URL

    // Perform login
    login.performLogin();
    cy.wait(5000);
    login.enterUsername('jahangir514789@gmail.com');
    cy.wait(5000);
    login.enterNextButton();
    cy.wait(5000);
    login.enterPassword('12567aA@');
    cy.wait(5000);
    login.clickLoginButton();
    cy.wait(5000);
    bidaRegistrationNew.selectCompanyModal()
    // cy.wait(3000)
    // bidaRegistrationNew.clickModalContinueButton()
    // cy.wait(3000)
    bidaRegistrationNew.dashboardInnerModal()


    workPermitNew();

  });

   it('Work Permit New Application Processing - Step 1', () => {
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
  
      workPermitNewStep1();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click(); 
    });
  
   it('Work Permit New Application Processing - Step 2', () => {
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
  
      workPermitNewStep2();
      cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

   it('Work Permit Final Payment', () => {
    cy.visit('/');  // Navigate to base URL

    // Perform login
    login.performLogin();
    cy.wait(5000);
    login.enterUsername('jahangir514789@gmail.com');
    cy.wait(5000);
    login.enterNextButton();
    cy.wait(5000);
    login.enterPassword('12567aA@');
    cy.wait(5000);
    login.clickLoginButton();
    cy.wait(5000);
    bidaRegistrationNew.selectCompanyModal()
    // cy.wait(3000)
    // bidaRegistrationNew.clickModalContinueButton()
    // cy.wait(3000)
    // bidaRegistrationNew.dashboardInnerModal()


    workPermitNewFinalPayment();

  });

  it('Work Permit New Application Processing - Step 3', () => {
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
  
      workPermitNewStep3();
      cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });
});

