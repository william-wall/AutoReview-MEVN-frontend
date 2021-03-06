describe("Chat Rooms", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[href="/signin"] > .btn__content').click();
    cy.url().should('include', '/signin');
    cy.get('#email').type('williamwalldeveloper@gmail.com');
    cy.get('#password').type('testpass');
    cy.get(':nth-child(3) > :nth-child(1) > .btn > .btn__content').click();
    cy.url().should('include', '/');
  });
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
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });
    describe("Verify the Chat Room in Room List", () => {
      it("Should verify that the Chat Room got added to the Room List", () => {
        cy.get('[href="/roomlist"] > .btn__content').click();
        cy.url().should('include', '/roomlist');
        cy.get("h2").should('contain', 'Room List');
        cy.get(':nth-child(3) > .text-black').should('contain', 'Experienced Drivers');
        cy.get('.toolbar__items > button.btn > .btn__content').click();
      });
    });
  });

  describe("Join a Chat Room", () => {
    it("Should enter a Chat Room using a Nickname + verify that the User has entered the Chat Room", () => {
      cy.get('[href="/roomlist"] > .btn__content').click();
      cy.url().should('include', '/roomlist');
      cy.get("h2").should('contain', 'Room List');
      cy.get(':nth-child(3) > .text-black').should('contain', 'Experienced Drivers');
      cy.get(':nth-child(3) > [aria-colindex="3"] > .btn').click();
      cy.get('.toolbar__items > [href="/roomlist"] > .btn__content').click();
      cy.get(':nth-child(3) > [aria-colindex="3"] > .btn').click();
      cy.get("h2").should('contain', 'Join Room');
      cy.get('#fieldsetHorizontal__BV_label_').should('contain', 'Enter Nickname');
      cy.get('#nickname').type('Mr. Wall');
      cy.get('form > .btn').click();
      cy.url().should('include', '/chat-room');
      cy.get("h2").should('contain', 'Chat Room');
      cy.get('.primary-font').should('contain', 'Mr. Wall');
      cy.get('p').should('contain', 'Mr. Wall join the room');
      cy.get('.toolbar__items > button.btn > .btn__content').click();
    });

    describe("Add a Chat to the Chat Room", () => {
      it("Should allow the user to add a Chat to the Chat Room + verify that the Chat has been added to the Chat Room conversation", () => {
        cy.get('[href="/roomlist"] > .btn__content').click();
        cy.url().should('include', '/roomlist');
        cy.get("h2").should('contain', 'Room List');
        cy.get(':nth-child(3) > .text-black').should('contain', 'Experienced Drivers');
        cy.get(':nth-child(3) > [aria-colindex="3"] > .btn').click();
        cy.get('.toolbar__items > [href="/roomlist"] > .btn__content').click();
        cy.get(':nth-child(3) > [aria-colindex="3"] > .btn').click();
        cy.get("h2").should('contain', 'Join Room');
        cy.get('#fieldsetHorizontal__BV_label_').should('contain', 'Enter Nickname');
        cy.get('#nickname').type('Mr. Wall');
        cy.get('form > .btn').click();
        cy.url().should('include', '/chat-room');
        cy.get("h2").should('contain', 'Chat Room');
        cy.get('.primary-font').should('contain', 'Mr. Wall');
        cy.get('p').should('contain', 'Mr. Wall join the room');
        cy.get('#message').type('Hello Everyone, I am new to this group!!!');
        cy.get('.input-group-append > .btn').click();
        cy.url().should('include', '/chat-room');
        cy.get("h2").should('contain', 'Chat Room');
        cy.get(':nth-child(2) > .left > .chat-body > p').should('contain', 'Mr. Wall join the room');
        cy.get(':nth-child(3) > .left > .chat-body > .header > .primary-font').should('contain', 'Mr. Wall');
        cy.get(':nth-child(3) > .left > .chat-body > p').should('contain', 'Hello Everyone, I am new to this group!!!');
        cy.get('.toolbar__items > button.btn > .btn__content').click();
      });
    });

    describe("Logout of Chat Room", () => {
      it("Should allow the User to Logout of the specific Chat Room", () => {
        cy.get('[href="/roomlist"] > .btn__content').click();
        cy.url().should('include', '/roomlist');
        cy.get("h2").should('contain', 'Room List');
        cy.get(':nth-child(3) > .text-black').should('contain', 'Experienced Drivers');
        cy.get(':nth-child(3) > [aria-colindex="3"] > .btn').click();
        cy.get('.toolbar__items > [href="/roomlist"] > .btn__content').click();
        cy.get(':nth-child(3) > [aria-colindex="3"] > .btn').click();
        cy.get("h2").should('contain', 'Join Room');
        cy.get('#fieldsetHorizontal__BV_label_').should('contain', 'Enter Nickname');
        cy.get('#nickname').type('Mr. Wall');
        cy.get('form > .btn').click();
        cy.url().should('include', '/chat-room');
        cy.get("h2").should('contain', 'Chat Room');
        cy.get('.primary-font').should('contain', 'Mr. Wall');
        cy.get('p').should('contain', 'Mr. Wall join the room');
        cy.get('#message').type('Hello Everyone, I am new to this group!!!');
        cy.get('h2 > .btn').click();
        cy.get("h2").should('contain', 'Room List');
        cy.url().should('include', '/roomlist');
        cy.get(':nth-child(3) > .text-black').should('contain', 'Experienced Drivers');
        cy.get('.toolbar__items > button.btn > .btn__content').click();
      });
    });
  });
});
