/// <reference types="cypress" />

describe('registration', () => {
  let registrationEmail;
  let registrationPassword;
  registrationEmail = 'roezo2006@gmail.com'; // Update with actual email
  registrationPassword = 'your-password';    // Update with actual password

  it('sign up page', () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/login");

    // Fill in registration details
    cy.get('#accountFrm > fieldset > .btn').click();
    cy.get('#AccountFrm_firstname').type('Anas');
    cy.get('#AccountFrm_lastname').type('Alnaser');
    cy.get('#AccountFrm_email').type('registrationEmail'); // Update with actual email
    cy.get('#AccountFrm_telephone').type('+962786800818');
    cy.get('#AccountFrm_fax').type('+965541');
    cy.get('#AccountFrm_company').type('BIGO');
    cy.get('#AccountFrm_address_1').type('Irbid');
    cy.get('#AccountFrm_address_2').type('Alnaser St.');
    cy.get('#AccountFrm_city').type('Alramtha');
    cy.get('#AccountFrm_zone_id').select('Angus')
    cy.get('#AccountFrm_postcode').type('11332');
    cy.get('#AccountFrm_country_id').select('Jordan')
    cy.get('#AccountFrm_zone_id').select('Irbid')
    cy.get('#AccountFrm_agree').click();

    // Capture the registration email and password
  });

  describe('login page', () => {
    it('should log in with registered user', () => {
      cy.visit("https://automationteststore.com/index.php?rt=account/login");

      // Use captured email and password for login
      cy.get('#loginFrm_loginname').type(registrationEmail);
      cy.get('#loginFrm_password').type(registrationPassword);
      cy.get('#loginFrm > fieldset > .btn').click();

      // ... add your login assertions or code here
    });
  });
});
