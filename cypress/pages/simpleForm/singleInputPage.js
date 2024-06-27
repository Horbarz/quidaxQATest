///<reference types="cypress"/>

export class singleInputPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        messageInput: () => cy.get("#user-message"),
        showMessageBtn: () => cy.get('#get-input > .btn'),
        result: () => cy.get('#display')
      };

    
    
    openSimpleFormPage(){
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click()
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Simple Form Demo').click()
        cy.contains('Single Input Field').should('exist')
    }

    enterMessage(message){
        this.elements.messageInput().type(message)
    }

    verifyInputFieldEnabled(){
        this.elements.messageInput().should('be.enabled')
    }

    verifyInputFieldAcceptsString(message){
        this.elements.messageInput().should('have.value', message)
    }

    clickShowMessageButton(){
        this.elements.showMessageBtn().click()
    }

    verifyExactMessageDisplays(message){
        this.elements.result().should('have.text',message)
    }

}