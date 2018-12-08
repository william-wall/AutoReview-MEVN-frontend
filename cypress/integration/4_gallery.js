describe("Gallery", () => {

  describe("Submit Vehicle to Gallery", () => {

    it("Should add a vehicle to the gallery with image and other attributes", () => {
      cy.get('.toolbar__items > [href="/gallery/new"] > .btn__content').click();
      cy.url().should('include', '/gallery/new');
      cy.get("h4").should('contain', 'Submit a Motor');
      cy.get('#title').type('Audi Quattro B2');
      cy.get('#location').type('1980–1991');
      cy.get('#image-url').type('http://i.wheelsage.org/pictures/a/audi/quattro/audi_quattro_15.jpeg');
      cy.get('#description').type('The Audi Quattro is a road and rally car, produced by the German automobile manufacturer Audi, part of the Volkswagen Group. It was first shown at the 1980 Geneva Motor Show on 3 March.[1][3] Production continued through 1991.');
      cy.get('.primary > .btn__content').click();
      cy.visit("/");
    });

  });
});

