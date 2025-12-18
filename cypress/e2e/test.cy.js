describe('Recorded Test', () => {
  it('should perform recorded actions', () => {
    cy.visit('https://staging-bida-g2.oss.net.bd/');
    cy.get('.ossServ-tabText-item.nav-link.public-service-item-click').eq(1).click({force: true});
    cy.contains('a', 'Login /Registration').eq(1).click({force: true});
    cy.visit('https://id-test.oss.net.bd/osspid-client/openid/v2/authorize?scope=openid&state=KMK9bqhRuWg7Xcslk45bZSfUc6HVG_vfh4OPrfxQ93c.ro_pwT4H3no.udROXK1NQeiXs6dWXwqJPg&response_type=code&client_id=63ed0bc6a0e08e100bf07e47c902b98c36aa1e64&redirect_uri=https%3A%2F%2Fidpg2.bidaquickserv.org%2Frealms%2FBIDA-STAGING%2Fbroker%2Fosspid-test%2Fendpoint&nonce=dA9qsA_jkmhFmBSsIa-h4A');
    cy.get('#identifier').clear().type('samiulossp+3@gmail.com');
    cy.get('#next_btn').click({force: true});
    cy.get('#password').clear().type('123456a@');
    cy.get('#login_btn').click({force: true});
    cy.visit('https://staging-bida-g2.oss.net.bd/keycloak/callback?state=6277b1e14246ed39901e372db2ea6f27&session_state=343ff160-ec7b-444b-be70-6a910491dd96&code=0e634875-3186-4bf8-9b91-5339f9781d38.343ff160-ec7b-444b-be70-6a910491dd96.b9d44e5c-ad4d-41e8-97b3-a7565f0a893e');
    cy.get('#myModalBtn').click({force: true});
    cy.get('#steps_modal').click({force: true});
    cy.visit('https://staging-bida-g2.oss.net.bd/dashboard');
    cy.get('.close > span').click({force: true});
    cy.get('.flex-column > h6').click({force: true});
    cy.contains('a', 'Logout').first().click({force: true});
    cy.visit('https://staging-bida-g2.oss.net.bd/');
    cy.get('.ossServ-tabText-item.nav-link.public-service-item-click').eq(1).click({force: true});
  });
});
