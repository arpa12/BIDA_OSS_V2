// login-test.cy.js

import login from "../pages/login";
import {bidaRegistrationNew} from "../pages/bidaRegistration/bidaRegistrationNew"
import { ircRecommendationStep1, ircRecommendationStep2, ircRecommendationStep3, ircRecommendationStep4, ircRecommendationStep5 } from "../pages/applicationProcess";

import { ircRecommendation1 } from "../pages/ircRecommendation/IrcRecommendation1";

describe('IRC Recommendation 1st Adhok', () => {
  it('IRC Recommendation 1st Adhok Form Fillup & Submit Application with Payment', () => {
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


    ircRecommendation1();

  });

   it('IRC Recommendation 1st Adhok Application Processing - Step 1', () => {
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
  
      ircRecommendationStep1();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click(); 
    });
  
   it('IRC Recommendation 1st Adhok Application Processing - Step 2', () => {
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
  
      ircRecommendationStep2();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

    it('IRC Recommendation 1st Adhok Application Processing - Step 3', () => {
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
  
      ircRecommendationStep3();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

     it('IRC Recommendation 1st Adhok Application Processing - Step 4', () => {
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
  
      ircRecommendationStep4();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

     it('IRC Recommendation 1st Adhok Application Processing - Step 5', () => {
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
  
      ircRecommendationStep5();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
      // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
    });

  })