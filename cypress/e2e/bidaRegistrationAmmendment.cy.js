// login-test.cy.js

import login from "../pages/login";
import {bidaRegistrationNew} from "../pages/bidaRegistrationNew"
import { bidaRegistrationAmendment } from "../pages/bidaRegistrationAmmendment";
import { bidaRegistrationAmendmentStep1, bidaRegistrationAmmendmentStep2, bidaRegistrationAmmendmentStep3 } from "../pages/applicationProcess";

describe('BIDA Registration Ammendment Full Process', () => {

  it.skip('BIDA Registration Ammendment Form Fillup', () => {
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
    login.enterUsername('jahangir514789@gmail.com')
    cy.wait(5000)
    login.enterNextButton()
    cy.wait(5000)
    login.enterPassword('12567aA@')
    cy.wait(5000)
    login.clickLoginButton()
    cy.wait(5000)
    // login.closeModal()


// Navigate to BIDA Registration and start a new application
    bidaRegistrationNew.selectCompanyModal()
    // cy.wait(3000)
    // bidaRegistrationNew.clickModalContinueButton()
    // cy.wait(3000)
    bidaRegistrationNew.dashboardInnerModal()
    cy.wait(3000)
    bidaRegistrationNew.bidaRegistrationDropdownMenuClick()
    // cy.wait(3000)
    bidaRegistrationNew.bidaRegistrationDropdownSubmenuClick()
    // cy.wait(3000)
    bidaRegistrationNew.bidaRegistrationOptionClick()
    cy.wait(3000)

    bidaRegistrationAmendment();
   

    
  })

  it('BIDA Registration Ammendment Application Processing - Step 1', () => {
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

    bidaRegistrationAmendmentStep1();
    // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click(); 
  });

  it('BIDA Registration Ammendment Application Processing - Step 2', () => {
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

    bidaRegistrationAmmendmentStep2();
    // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click();  
  });

  it('BIDA Registration Ammendment after Processing Application', () => {
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
      login.enterUsername('jahangir514789@gmail.com')
      cy.wait(5000)
      login.enterNextButton()
      cy.wait(5000)
      login.enterPassword('12567aA@')
      cy.wait(5000)
      login.clickLoginButton()
      cy.wait(5000)
      // login.closeModal()
  
  
      //after processing application
      // Navigate to BIDA Registration and start a new application
      bidaRegistrationNew.selectCompanyModal()
      // cy.wait(3000)
      // bidaRegistrationNew.clickModalContinueButton()
      // cy.wait(3000)
      bidaRegistrationNew.dashboardInnerModal()
      cy.wait(3000)
      bidaRegistrationNew.bidaRegistrationDropdownMenuClick()
      // cy.wait(3000)
      bidaRegistrationNew.bidaRegistrationDropdownSubmenuClick()
      // cy.wait(3000)
      bidaRegistrationNew.bidaRegistrationOptionClick()
      cy.wait(3000)

      cy.xpath('/html/body/div[1]/nav/ul/li[5]/ul/li[1]/ul/li[2]/ul/li[4]/a').click();
  
      cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[6]/a', { timeout: 10000 }).should('be.visible').eq(0).click();
      cy.wait(2000)
      // cy.xpath('/html/body/div[1]/div/div/section/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div/div[2]/div/table/tbody/tr/td[6]/a').click()
  
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
  
    })

  it('BIDA Registration Application Processing - Step 3', () => {
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

    bidaRegistrationAmmendmentStep3();
    // cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    // cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click(); 
  });


});
