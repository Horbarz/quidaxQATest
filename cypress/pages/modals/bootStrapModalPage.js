///<reference types="cypress"/>

export class bootStrapModalPage{

    elements = {
        navigateToApp: () => cy.visit('/'),
        closeModalIcon:() => cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-header > .close'),
        closeModalBtn: () => cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]'),
        singleModal:() => cy.get('#myModal0 > .modal-dialog > .modal-content'),
        saveChangesBtn: ()=> cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        modalBody:() => cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-body'),
        modalHeader: () =>  cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-header > .modal-title'),
        modal_one:() => cy.get('#myModal > .modal-dialog > .modal-content'),
        modal_one_close: () => cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]'),
        modal_one_close_icon: () => cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .close'),
        modal_one_save: () => cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        modal_two: () => cy.get('#myModal2 > .modal-dialog > .modal-content'),
        modal_two_close: () => cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]'),
        modal_two_close_icon: ()=> cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .close'),
        modal_two_save: () => cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),


    };

    openModalPage(){
        cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Bootstrap Modals').click()
        cy.contains('Bootstrap Modal Example for Automation').should('be.visible')
    }

    launchSingleModal(){
        cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-heading').contains('Single Modal Example')
        cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').click()
       
    }

    launchFirstModal(){
        cy.get(':nth-child(3) > .col-md-4 > .panel > .panel-heading').contains('Multiple Modal Example')
        cy.get('[href="#myModal"]').click()
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .modal-title').contains('First Modal')
    }

    launchSecondModal(){
        cy.get('.modal-body > .btn').click()
        cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .modal-title').contains('Modal 2')
       
    }

    verifyModalHasHeader(){
       this.elements.modalHeader().contains('Modal Title').should('exist')
    }

    verifyModalHasBody(){
       this.elements.modalBody()
            .contains('This is the place where the content for the modal dialog displays')
            .should('be.visible')
    }

    verifyModalOpens(){
        this.elements.singleModal().should('exist')
    }

    verifyCloseBtnExist(){
        this.elements.closeModalBtn().contains('Close').should('exist')
    }

    clickCloseBtn(){
        this.elements.closeModalBtn().contains('Close').should('exist').click()
    }

    verifyModalInvisible(){
        this.elements.singleModal().should('not.be.visible')
    }

    verifyModalOneInvisible(){
        this.elements.modal_one().should('not.be.visible')
    }

    verifyModalTwoInvisible(){
        this.elements.modal_two().should('not.be.visible')
    }

    clickCloseIcon(){
        this.elements.closeModalIcon().should('exist').click()
    }

    verifySaveChangesBtn(){
        this.elements.saveChangesBtn().should('be.visible')
    }

    clickSaveChangesBtn(){
        this.elements.saveChangesBtn().click()
    }

    verifyModalOneOpens(){
        this.elements.modal_one().should('exist')
    }

    verifyModalTwoOpens(){
        this.elements.modal_two().should('exist')
    }

    clickModalOneSave(){
        this.elements.modal_one_save().click()
    }
    clickModalTwoSave(){
        this.elements.modal_two_save().click()
    }

    clickModalOneClose(){
        this.elements.modal_one_close().click()
    }
    clickModalTwoClose(){
        this.elements.modal_two_close().click()
    }
    clickModalTwoCloseIcon(){
        this.elements.modal_two_close_icon().click()
    }

    clickModalOneCloseIcon(){
        this.elements.modal_one_close_icon().click()
    }

}