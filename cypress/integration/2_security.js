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
  describe("Denied Access to Chat Rooms - Unauthenticated", () => {
    it("Should not be allowed to navigate to Chat Rooms without Authentication", () => {
      cy.visit("/roomlist");
      cy.url().should('include', '/signin');
    });
  });

});
