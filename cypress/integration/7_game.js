describe("Game Slider Puzzle", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[href="/signin"] > .btn__content').click();
    cy.url().should('include', '/signin');
    cy.get('#email').type('williamwalldeveloper@gmail.com');
    cy.get('#password').type('testpass');
    cy.get(':nth-child(3) > :nth-child(1) > .btn > .btn__content').click();
    cy.url().should('include', '/');
  });
  describe("Select Board Size", () => {
    it("Should allow the user to enter custom board size (min 2*2 - max 10*10) - default is 3*3", () => {
      cy.get('[href="/game"] > .btn__content').click();
      cy.url().should('include', '/game');
      cy.get("h1").should('contain', 'Auto Review Slider Puzzle');
      cy.get('header > :nth-child(3)').should('contain', 'Select a motor vehicle image from your device and play the game, have fun!');
      cy.get('header > :nth-child(5)').should('contain', 'Change the number of squares in the fields below for a more difficult experience!');
      cy.get('[name="width"]').clear().type('2');
      cy.get('[name="height"]').clear().type('2');
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
    it("Should pick image", () => {
      cy.get('[href="/game"] > .btn__content').click();
      cy.url().should('include', '/game');
      cy.get("h1").should('contain', 'Auto Review Slider Puzzle');
      cy.get('header > :nth-child(3)').should('contain', 'Select a motor vehicle image from your device and play the game, have fun!');
      cy.get('header > :nth-child(5)').should('contain', 'Change the number of squares in the fields below for a more difficult experience!');
      cy.get('h3').click();
      // const dropEvent = {
      //   dataTransfer: {
      //     files: [
      //     ],
      //   },
      // };
      //
      // cy.fixture('logo.png').then((picture) => {
      //   return Cypress.Blob.base64StringToBlob(picture, 'image/png').then((blob) => {
      //     dropEvent.dataTransfer.files.push(blob);
      //   });
      // });
      //
      // cy.get('#contentImg').trigger('drop', dropEvent);
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
  });
});
