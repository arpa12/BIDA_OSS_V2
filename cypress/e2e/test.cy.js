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

  it('should perform recorded actions', () => {
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

      cy.get('[id=\"identifier\"]').type('sysadmin2@batworld.com');
      cy.wait(2000);
      cy.get('[id=\"next_btn\"]').click({ force: true });
      cy.wait(2000);
      cy.get('[id=\"password\"]').type('password');
      cy.wait(2000);
      cy.get('[id=\"login_btn\"]').click({ force: true });
      cy.wait(2000);
      // TODO: XPath not supported in cy.origin() - please replace with CSS selector
      // Original XPath: /html/body/div/form/div[2]/div[2]/div/div/div[2]/span
      cy.get('REPLACE_WITH_CSS_SELECTOR').click({ force: true });
      cy.wait(2000);
      cy.get('[id=\"password\"]').type('Ossp@123');
      cy.wait(2000);
    });

  });
});
