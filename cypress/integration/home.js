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

  describe("Navigation Bar - Unauthenticated", () => {
    it("Shows the Navigation Drawer button", () => {
      cy.get(".toolbar__side-icon > .btn__content").should('contain','menu');
    });
    it("Shows the Navigation Drawer Sign up button", () => {
      cy.get(":nth-child(1) > .list__tile > .list__tile__content").should('contain','Sign up');
    });
    it("Shows the Navigation Drawer Sign up button", () => {
      cy.get(":nth-child(2) > .list__tile > .list__tile__content").should('contain','Sign in');
    });
    it("Shows the Sign up button", () => {
      cy.get("[href=\"/signup\"] > .btn__content").should('contain','Sign up');
    });
    it("Shows the Sign in button", () => {
      cy.get("[href=\"/signin\"] > .btn__content").should('contain','Sign in');
    });
  });

});
