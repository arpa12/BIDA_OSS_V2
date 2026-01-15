// login-test.cy.js

import login from "../pages/login";
import {bidaRegistrationNew} from "../pages/bidaRegistration/bidaRegistrationNew"
import { ircRecommendation3Step1,ircRecommendation3Step2, ircRecommendation3Step3, ircRecommendation3Step4, ircRecommendation3Step5 } from "../pages/applicationProcess";

import { ircRecommendation3 } from "../pages/ircRecommendation/ircRecommendation3";

describe('IRC Recommendation 3rd Adhok', () => {
  it.skip('IRC Recommendation 3rd Adhok Form Fillup & Submit Application with Payment', () => {
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
    bidaRegistrationNew.selectCompanyModal()
    // cy.wait(3000)
    // bidaRegistrationNew.clickModalContinueButton()
    cy.wait(3000)
    bidaRegistrationNew.dashboardInnerModal()


    ircRecommendation3();

  });

   it.skip('IRC Recommendation Application Processing - Step 1', () => {
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
  
      ircRecommendation3Step1();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click(); 
    });
  
   it.skip('IRC Recommendation  Application Processing - Step 2', () => {
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
  
      ircRecommendation3Step2();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

    it.skip('IRC Recommendation Application Processing - Step 3', () => {
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
  
      ircRecommendation3Step3();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

    it.skip('IRC Recommendation Application Processing - Step 4', () => {
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
  
      ircRecommendation3Step4();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

     it('IRC Recommendation Application Processing - Step 5', () => {
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
  
      ircRecommendation3Step5();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

  })