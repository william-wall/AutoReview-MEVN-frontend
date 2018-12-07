describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Sign up", () => {
    it("Should Sign up the user given an email, password and re-enter password", () => {
      cy.get('[href="/signup"] > .btn__content').click();
      cy.url().should('include', '/signup');
      cy.get('#email').type('cypresstesting@gmail.com');
      cy.get('#password').type('testpass');
      cy.get('#confirmPassword').type('testpass');
      cy.get('.flex > .btn > .btn__content').click();
      cy.url().should('include', '/');
    });
  });

  describe("Sign in", () => {
    it("Should login the user given an email and password", () => {
    });
  });

});
