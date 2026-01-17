// login-test.cy.js

import login from "../pages/login";
import {bidaRegistrationNew} from "../pages/bidaRegistration/bidaRegistrationNew"
import { securrityClearanceStep1 } from "../pages/applicationProcess";

import { vipCipLounge, vipCipLoungeFinalPayment } from "../pages/vip_cip_lounge/vip_cip_lounge";

describe('VIP CIP Lounge', () => {
  it.skip('VIP CIP Lounge Form Fillup & Submit Application with Payment', () => {
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


    vipCipLounge();

  });

   it.skip('VIP CIP Lounge Application Processing - Step 1', () => {
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
  
      securrityClearanceStep1();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/a').click();
    //   cy.xpath('/html/body/div[1]/nav/ul/li[4]/ul/li[5]/a').click(); 
    });

  })