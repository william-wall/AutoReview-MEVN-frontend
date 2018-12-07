describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Shows the AutoReview trademark", () => {
    cy.get("h1").should('contain','Welcome to © AutoReview 2k18');
  });
  it("Shows AutoReview logo", () => {
    cy.get(".router-link-exact-active").should('contain','AutoReview');
  });
  it("Shows Explore Gallery button", () => {
    cy.get(".text-sm-right > .info > .btn__content").should('contain','Explore Gallery');
  });
  it("Shows Submit Car button", () => {
    cy.get(".text-sm-left > .info > .btn__content").should('contain','Submit Car');
  });
});
