describe("Reviews", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[href="/signin"] > .btn__content').click();
    cy.url().should('include', '/signin');
    cy.get('#email').type('williamwalldeveloper@gmail.com');
    cy.get('#password').type('testpass');
    cy.get(':nth-child(3) > :nth-child(1) > .btn > .btn__content').click();
    cy.url().should('include', '/');
  });

  describe("Add Review", () => {
    it("Should add a review to the application", () => {
      cy.get('[href="/reviews/add"] > .btn__content').click();
      cy.url().should('include', '/reviews/add');
      cy.get("h4").should('contain', 'Submit a Review');
      cy.get('#title').type('This is a cypress testing title review');
      cy.get('#description').type('This is a cypress testing description review');
      cy.get('.primary > .btn__content').click();
      cy.get("#swal2-content").should('contain', 'Your review has been added!');
      cy.get('.swal2-confirm').click();
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
    it("Should verify the review has been added to the reviews listings", () => {
      cy.get('[href="/reviewlist"] > .btn__content').click();
      cy.get(":nth-child(2) > .xs12 > .card > .container > #reviewTitle").should('contain', 'This is a cypress testing title review');
      cy.get(":nth-child(2) > .xs12 > .card > .container > #comment").should('contain', 'This is a cypress testing description review');
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
  });

  describe("Edit Review", () => {
    it("Should edit review and verify its contents", () => {
      cy.get('[href="/reviewlist"] > .btn__content').click();
      cy.url().should('include', '/reviewlist');
      cy.get(':nth-child(2) > .xs12 > .card > .btn-warning').click();
      cy.get("h4").should('contain', 'Update a Review');
      cy.get('#title').type(' - Updating Title');
      cy.get('#description').type(' - Updating Description');
      cy.get('.primary > .btn__content').click();
      cy.get("#swal2-content").should('contain', 'Your review has been updated!');
      cy.get('.swal2-confirm').click();
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
    it("Should verify the review has been updated to the reviews listings", () => {
      cy.get('[href="/reviewlist"] > .btn__content').click();
      cy.get(":nth-child(2) > .xs12 > .card > .container > #reviewTitle").should('contain', 'This is a cypress testing title review - Updating Title');
      cy.get(":nth-child(2) > .xs12 > .card > .container > #comment").should('contain', 'This is a cypress testing description review - Updating Description');
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
  });

  describe("Fuzzy Search", () => {
    it("Should find a review by typing keywords into the search bar and matching to a review", () => {
      cy.get('[href="/reviewlist"] > .btn__content').click();
      cy.url().should('include', '/reviewlist');
      cy.get('.form-control').click();
      cy.get('.form-control').type(' - Updating Title');
      cy.get(":nth-child(2) > .xs12 > .card > .container > #reviewTitle").should('contain', ' - Updating Title');
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
  });

  describe("Delete Review", () => {
    it("Should delete review from list and verify by SweetAlert2", () => {
      cy.get('[href="/reviewlist"] > .btn__content').click();
      cy.url().should('include', '/reviewlist');
      cy.get(':nth-child(2) > .xs12 > .card > .btn-danger').click();
      cy.get("#swal2-title").should('contain', 'Are you sure?');
      cy.get("#swal2-content").should('contain', 'You wont be able to revert this!');
      cy.get('.swal2-confirm').click();
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
  });

});


