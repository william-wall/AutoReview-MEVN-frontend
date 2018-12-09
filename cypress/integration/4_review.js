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

  describe("Add 3 unique Reviews", () => {

    describe("Review 1", () => {
      it("Should add first review to the application", () => {
        cy.get('[href="/reviews/add"] > .btn__content').click();
        cy.url().should('include', '/reviews/add');
        cy.get("h4").should('contain', 'Submit a Review');
        cy.get('#title').type('This is a cypress testing title first review');
        cy.get('#description').type('This is a cypress testing description first review');
        cy.get('.primary > .btn__content').click();
        cy.get("#swal2-content").should('contain', 'Your review has been added!');
        cy.get('.swal2-confirm').click();
        cy.get('.toolbar__items > button.btn > .btn__content').click();
      });
    });
    describe("Review 2", () => {
      it("Should add second review to the application", () => {
        cy.get('[href="/reviews/add"] > .btn__content').click();
        cy.url().should('include', '/reviews/add');
        cy.get("h4").should('contain', 'Submit a Review');
        cy.get('#title').type('This is a cypress testing title second review');
        cy.get('#description').type('This is a cypress testing description second review');
        cy.get('.primary > .btn__content').click();
        cy.get("#swal2-content").should('contain', 'Your review has been added!');
        cy.get('.swal2-confirm').click();
        cy.get('.toolbar__items > button.btn > .btn__content').click();
      });
    });
    describe("Review 3", () => {
      it("Should add third review to the application", () => {
        cy.get('[href="/reviews/add"] > .btn__content').click();
        cy.url().should('include', '/reviews/add');
        cy.get("h4").should('contain', 'Submit a Review');
        cy.get('#title').type('This is a cypress testing title third review');
        cy.get('#description').type('This is a cypress testing description third review');
        cy.get('.primary > .btn__content').click();
        cy.get("#swal2-content").should('contain', 'Your review has been added!');
        cy.get('.swal2-confirm').click();
        cy.get('.toolbar__items > button.btn > .btn__content').click();
      });
    });
    describe("Add Verifications", () => {

      describe("Verify Review 1", () => {
        it("Should verify the first review has been added to the reviews listings", () => {
          cy.get('[href="/reviewlist"] > .btn__content').click();
          cy.get(":nth-child(4) > .xs12 > .card > .container > #reviewTitle").should('contain', 'This is a cypress testing title first review');
          cy.get(":nth-child(4) > .xs12 > .card > .container > #comment").should('contain', 'This is a cypress testing description first review');
          cy.get('.toolbar__items > button.btn > .btn__content').click();
        });
      });
    });

    describe("Verify Review 2", () => {
      describe("Add Verification", () => {
        it("Should verify the second review has been added to the reviews listings", () => {
          cy.get('[href="/reviewlist"] > .btn__content').click();
          cy.get(":nth-child(3) > .xs12 > .card > .container > #reviewTitle").should('contain', 'This is a cypress testing title second review');
          cy.get(":nth-child(3) > .xs12 > .card > .container > #comment").should('contain', 'This is a cypress testing description second review');
          cy.get('.toolbar__items > button.btn > .btn__content').click();
        });
      });
    });

    describe("Verify Review 3", () => {
      describe("Add Verification", () => {
        it("Should verify the third review has been added to the reviews listings", () => {
          cy.get('[href="/reviewlist"] > .btn__content').click();
          cy.get(":nth-child(2) > .xs12 > .card > .container > #reviewTitle").should('contain', 'This is a cypress testing title third review');
          cy.get(":nth-child(2) > .xs12 > .card > .container > #comment").should('contain', 'This is a cypress testing description third review');
          cy.get('.toolbar__items > button.btn > .btn__content').click();
        });
      });
    });
  });

  describe("Edit Review", () => {
    it("Should edit review and verify by SweetAlert2", () => {
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
    describe("Edit Verification", () => {
      it("Should verify the review has been updated to the reviews listings", () => {
        cy.get('[href="/reviewlist"] > .btn__content').click();
        cy.get(":nth-child(2) > .xs12 > .card > .container > #reviewTitle").should('contain', 'This is a cypress testing title third review - Updating Title');
        cy.get(":nth-child(2) > .xs12 > .card > .container > #comment").should('contain', 'This is a cypress testing description third review - Updating Description');
        cy.get('.toolbar__items > button.btn > .btn__content').click();
      });
    });
    describe("Search for Review by Keyword in search bar and Edit", () => {
      it("Should edit a Review based on search by keyword", () => {
        cy.get('[href="/reviewlist"] > .btn__content').click();
        cy.url().should('include', '/reviewlist');
        cy.get('.form-control').click();
        cy.get('.form-control').type('second review');
        cy.get(":nth-child(2) > .xs12 > .card > .container > #reviewTitle").should('contain', 'second review');
        cy.get(':nth-child(2) > .xs12 > .card > .btn-warning').click();
        cy.get("h4").should('contain', 'Update a Review');
        cy.get('#title').type(' - Updating Second Title');
        cy.get('#description').type(' - Updating Second Description');
        cy.get('.primary > .btn__content').click();
        cy.get("#swal2-content").should('contain', 'Your review has been updated!');
        cy.get('.swal2-confirm').click();
        cy.get('.toolbar__items > button.btn > .btn__content').click();
      });
    });
  });

  describe("Fuzzy Search - Custom", () => {
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
    it("Should delete the last review from list and verify by SweetAlert2", () => {
      cy.get('[href="/reviewlist"] > .btn__content').click();
      cy.url().should('include', '/reviewlist');
      cy.get(':nth-child(2) > .xs12 > .card > .btn-danger').click();
      cy.get("#swal2-title").should('contain', 'Are you sure?');
      cy.get("#swal2-content").should('contain', 'You wont be able to revert this!');
      cy.get('.swal2-confirm').click();
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
  });

  describe("Custom Search and Delete by Keyword Entered in Search Bar", () => {
    it("Should find a review by typing keywords into the search bar and then delete that review", () => {
      cy.get('[href="/reviewlist"] > .btn__content').click();
      cy.url().should('include', '/reviewlist');
      cy.get('.form-control').click();
      cy.get('.form-control').type('title first review');
      cy.get(":nth-child(2) > .xs12 > .card > .container > #reviewTitle").should('contain', 'title first review');
      cy.get(':nth-child(2) > .xs12 > .card > .btn-danger').click();
      cy.get("#swal2-title").should('contain', 'Are you sure?');
      cy.get("#swal2-content").should('contain', 'You wont be able to revert this!');
      cy.get('.swal2-confirm').click();
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
  });

  describe("Verify the last remaining review and delete it", () => {
    it("Should verify the contents of the last review and delete", () => {
      cy.get('[href="/reviewlist"] > .btn__content').click();
      cy.url().should('include', '/reviewlist');
      cy.get(":nth-child(2) > .xs12 > .card > .container > #reviewTitle").should('contain', 'title second review');
      cy.get(':nth-child(2) > .xs12 > .card > .btn-danger').click();
      cy.get("#swal2-title").should('contain', 'Are you sure?');
      cy.get("#swal2-content").should('contain', 'You wont be able to revert this!');
      cy.get('.swal2-confirm').click();
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
  });
});


