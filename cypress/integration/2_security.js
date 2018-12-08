describe("Security", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  describe("Denied Access to Review List - Unauthenticated", () => {
    it("Should not be allowed to navigate to Review List without Authentication", () => {
      cy.visit("/reviewlist");
      cy.url().should('include', '/signin');
    });
  });


});
