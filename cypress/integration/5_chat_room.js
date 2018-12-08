describe("Chat Rooms", () => {

  describe("Add a Chat Room to list", () => {
    it("Should add a Chat Room to the list of rooms", () => {
      cy.get('[href="/roomlist"] > .btn__content').click();
      cy.url().should('include', '/roomlist');
      cy.get("h2").should('contain', 'Room List');
      cy.get('h2 > .btn > .btn__content').click();
      cy.url().should('include', '/add-room');
      cy.get("h2").should('contain', 'Add Room');
      cy.get('#room_name').type('Experienced Drivers');
      cy.get('form > .btn').click();
      cy.visit("/");
    });
    describe("Verify the Chat Room in Room List", () => {
      it("Should verify that the Chat Room got added to the Room List", () => {
        cy.get('[href="/roomlist"] > .btn__content').click();
        cy.url().should('include', '/roomlist');
        cy.get("h2").should('contain', 'Room List');
        cy.get(':nth-child(3) > .text-black').should('contain', 'Experienced Drivers');
        cy.visit("/");
      });
    });
  });




});

