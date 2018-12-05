describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Shows the AutoReview trademark", () => {
    // cy.get("h1").should('contain','Welcome to © AutoReview 2018');
  });
  it("AutoReview logo", () => {
    // cy.get(".router-link-exact-active").should('contain','AutoReview');
  });
});
