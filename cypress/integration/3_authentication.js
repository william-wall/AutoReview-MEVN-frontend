describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Sign up", () => {
    it("Should Sign up the user given an email, password and re-enter password", () => {
      // cy.get('[href="/signup"] > .btn__content').click();
      // cy.url().should('include', '/signup');
      // cy.get('#email').type('williamwalldeveloper@gmail.com');
      // cy.get('#password').type('testpass');
      // cy.get('#confirmPassword').type('testpass');
      // cy.get('.flex > .btn > .btn__content').click();
      // cy.url().should('include', '/');
    });
    describe("Error Handling - Verify Non-Duplication Email", () => {
      it("Should give an error message to the user when signing up with an email already in use", () => {
        // cy.get('[href="/signup"] > .btn__content').click();
        // cy.url().should('include', '/signup');
        // cy.get('#email').type('williamwalldeveloper@gmail.com');
        // cy.get('#password').type('testpass');
        // cy.get('#confirmPassword').type('testpass');
        // cy.get('.flex > .btn > .btn__content').click();
        // cy.get(".alert > div").should('contain', 'The email address is already in use by another account.');
      });
    });
  });

  describe("Reset password", () => {
    it("Should send the user an email to reset their password via a reset link", () => {
      // cy.get('[href="/signin"] > .btn__content').click();
      // cy.url().should('include', '/signin');
      // cy.get(':nth-child(2) > .btn > .btn__content').click();
      // cy.url().should('include', '/reset');
      // cy.get('#email').type('williamwalldeveloper@gmail.com');
      // cy.get('.flex > .btn > .btn__content').click();
      // cy.url().should('include', '/');
    });
  });

  describe("Sign in - Error Handling - Incorrect password", () => {
    it("Should give an error message to the user when signing in with an incorrect password", () => {
      // cy.get('[href="/signin"] > .btn__content').click();
      // cy.url().should('include', '/signin');
      // cy.get('#email').type('williamwalldeveloper@gmail.com');
      // cy.get('#password').type('incorrectPassword');
      // cy.get(':nth-child(3) > :nth-child(1) > .btn > .btn__content').click();
      // cy.get(".alert > div").should('contain', 'The password is invalid or the user does not have a password.');
    });
    describe("Sign in - Error Handling - No corresponding account", () => {
      it("Should give an error message to the user when signing in with an email already in use", () => {
        // cy.get('[href="/signin"] > .btn__content').click();
        // cy.url().should('include', '/signin');
        // cy.get('#email').type('unrecognisedAccount@gmail.com');
        // cy.get('#password').type('noAccountPassword');
        // cy.get(':nth-child(3) > :nth-child(1) > .btn > .btn__content').click();
        // cy.get(".alert > div").should('contain', 'There is no user record corresponding to this identifier. The user may have been deleted.');
      });
    });

  });
  describe("Sign in - Success", () => {
    it("Should login the user given an email and password", () => {
      cy.get('[href="/signin"] > .btn__content').click();
      cy.url().should('include', '/signin');
      cy.get('#email').type('williamwalldeveloper@gmail.com');
      cy.get('#password').type('testpass');
      cy.get(':nth-child(3) > :nth-child(1) > .btn > .btn__content').click();
      cy.url().should('include', '/');
    });
  });
});
