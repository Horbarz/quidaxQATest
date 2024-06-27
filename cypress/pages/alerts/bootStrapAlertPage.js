///<reference types="cypress"/>

export class bootStrapAlertPage{

    elements = {
        navigateToApp: () => cy.visit('/')
    };

    openAlertPage(){
        cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click()
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap Alerts').click()
        cy.contains('Bootstrap Alert messages').should('be.visible')
        cy.contains('An alert dialog box is mostly used to give a message to the users. It can be just an information/warning').should('be.visible')
    }

    clickAutoclosablesBtn(status){
        cy.get('#autoclosable-btn-'+status).should('exist').click()

    }

    displayAutoMessage(status){
        cy.get('.alert-autocloseable-'+status).should('exist').contains(status+" message");
    }

    waitFor(timeout){
        cy.wait(timeout*1000)
    }

    verifyAutoMessageClosed(status){
        cy.get('.alert-autocloseable-'+status).should('not.be.visible')
    }


    clickNormalBtn(status){
        cy.get('#normal-btn-'+status).should('exist').click()

    }

    displayNormalMessage(status){
        cy.get('.alert-normal-'+status).should('exist').contains("normal "+status+" message");
    }

    closeNormalBtn(status){
        cy.get('.alert-normal-'+status+' > .close').should('exist').click()
    }

    verifyNormalMessageClosed(status){
        cy.get('.alert-normal-'+status).should('not.be.visible')
    }


}