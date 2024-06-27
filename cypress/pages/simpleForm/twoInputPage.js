///<reference types="cypress"/>

export class twoInputPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        inputA: () => cy.get('#value1'),
        inputB: () => cy.get('#value2'),
        getTotalBtn: () => cy.get('#gettotal > .btn'),
        result: () => cy.get('#displayvalue')
      };

    
      openSimpleFormPage(){
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click()
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Simple Form Demo').click()
        cy.contains('Two Input Field').should('exist')
        cy.contains('Enter Value for a').should('exist')
        cy.contains('Enter Value for b').should('exist')
    }

    enterValueA(A){
        this.elements.inputA().type(A)
    }

    enterValueB(B){
        this.elements.inputB().type(B)
    }

    clickTotalButton(){
        this.elements.getTotalBtn().click()
    }

    verifySumOfIntegers(A, B){
        var val = parseInt(A)+parseInt(B)
        //checks that the sum returned is correct
        this.elements.result().should('have.text', val)
        this.elements.result().should('not.be.NaN')

    }

    verifySumOfDecimals(A, B){
        var val = parseFloat(A)+parseFloat(B)
        //checks that the sum returned is correct
        this.elements.result().should('have.text', val)
        this.elements.result().should('not.be.NaN')
    }
}