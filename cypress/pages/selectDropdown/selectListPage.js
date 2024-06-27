///<reference types="cypress"/>

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const states = ['California', 'Florida', 'New Jersey','New York','Ohio','Texas','Pennsylvania','Washington']

export class selectListPage{

    getIndex(day){
        for(let i=0; i<days.length;i++){
            if(day===days[i]){
                return i+1
            }
        }
        return
    }

    getStateIndex(state){
        for(let i=0; i<states.length;i++){
            if(state===states[i]){
                return i
            }
        }
        return
    }


    elements = {
        navigateToApp: () => cy.visit('/'),
        result: () => cy.get('.selected-value'),
        firstSelectedBtn: () => cy.get('#printMe'),
        allSelectedBtn: () => cy.get('#printAll'),
        getAllSelectedMessage: () => cy.get('.getall-selected'),
        multiSelect:() => cy.get('#multi-select')
      };

    openDropdownListPage(){
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click()
        cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Select Dropdown List').click()
        cy.contains('Select List Demo')
        cy.contains('Selected value from the list will display below the dropdown')
    }

    selectDropdownItem(selectedDay){
        cy.get('#select-demo').select(this.getIndex(selectedDay))
    }

    verifyResult(selectedDay){
        this.elements.result().contains(selectedDay)
    }

    scrollToMultiSelectList(){
        cy.contains('Multi Select List Demo')
        cy.contains('By clicking on the buttons, you can get value from the list which will display just below the buttons')

    }

    selectOneOption(state){
        var index = this.getStateIndex(state)
        cy.get('#multi-select').select(index,{force: true})
    }

    selectMultipleOptions(itemsToSelect){
        console.log(itemsToSelect)
        // cy.get('#multi-select').select(itemsToSelect,{force: true})
        //     .invoke('val')
        //     .should('deep.equal',itemsToSelect)
        itemsToSelect.forEach(element => {
            cy.get('#multi-select').contains(element)
                .then($option => {
                    cy.wrap($option).invoke('prop', 'selected', true).click({ force: true });
                })
        });
        this.elements.multiSelect().trigger('change')
        
    }

    selectMultipleItems(itemsToSelect){
        cy.get('#multi-select').select(itemsToSelect,{force: true})
        this.elements.allSelectedBtn().click({force:true})
        const message = "Options selected are : "+itemsToSelect
        this.elements.getAllSelectedMessage().should('deep.equal',message)
    }

    verifyItemSelected(selectedItems){
        selectedItems.forEach(element => {
            cy.get('#multi-select').contains(element).should('be.selected')
        });
    }

    verifyItemDeselected(selectedItems){
        selectedItems.forEach(element => {
            cy.get('#multi-select').contains(element).should('not.be.selected')
        });
    }

    clickAllSelectedButton(){
        this.elements.allSelectedBtn().click()
    }

    clickFirstSelectedButton(){
        this.elements.firstSelectedBtn().click()
    }

    verifyAllSelectedResult(selectedItems){
        console.log(selectedItems)
        const message = "Options selected are : "+selectedItems
        this.elements.getAllSelectedMessage().then(($el)=>{
            const text = $el.text()
            expect(text).to.eql(message)
        })
    }

    verifyFirstSelectedResult(firstSelected){
        const message = "First selected option is : "+firstSelected
        this.elements.getAllSelectedMessage().then(($el) => {
            const text = $el.text()
            expect(text).to.eql(message)
        })
    }

    selectAllOptions(){
        states.forEach(element => {
            this.elements.multiSelect().contains(element)
                .then($option => {
                    cy.wrap($option).invoke('prop', 'selected', true).click({ force: true });
                })
        });
        this.elements.multiSelect().trigger('change')
    }

    assertThatAllSelected(){
        states.forEach(option => {
            this.elements.multiSelect()
              .contains('option', option)
              .should('be.selected');
          });
    }
}