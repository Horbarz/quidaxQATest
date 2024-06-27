import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { selectListPage } from "../../pages/index";

const multiSelectFunction = new selectListPage()

Given('users navigate to the app to test multiple list selection', ()=> {
    multiSelectFunction.elements.navigateToApp()
})

When('user opens the select list page', () => {
    multiSelectFunction.openDropdownListPage()
    multiSelectFunction.scrollToMultiSelectList()
})

When('user clicks on {string}', (state)=>{
    multiSelectFunction.selectOneOption(state)
})

When('user clicks on the following options', (selectedItems) => {
    const options = selectedItems.rawTable.map(row => row[0]);
    multiSelectFunction.selectMultipleOptions(options)
})

When('user clicks on the mutiple items', (selectedItems) => {
    const options = selectedItems.rawTable.map(row => row[0]);
    multiSelectFunction.selectMultipleItems(options)
})

When('user clicks on a selected item',(selectedItems)=>{
    const options = selectedItems.rawTable.map(row => row[0]);
    options.forEach(element => {
        multiSelectFunction.selectOneOption(element)
    });

})

When('user clicks on the get all selected button', ()=>{
    multiSelectFunction.clickAllSelectedButton()
})

When('users click on the first selected button', () => {
    multiSelectFunction.clickFirstSelectedButton()
})

When('user enters ctrl A', () => {
    multiSelectFunction.selectAllOptions()
})

Then('assert that the items are selected successfully',(selectedItems)=> {
    const options = selectedItems.rawTable.map(row => row[0]);
    multiSelectFunction.verifyItemSelected(options)
})

Then('assert selected options are displayed', (selectedItems) => {
    const options = selectedItems.rawTable.map(row => row[0]);
    multiSelectFunction.verifyAllSelectedResult(options)
})

Then('assert that first selected option is displayed', (selectedItems)=> {
    const options = selectedItems.rawTable.map(row => row[0]);
    multiSelectFunction.verifyFirstSelectedResult(options[0])
})

Then('assert that all items are selected', ()=>{
    multiSelectFunction.assertThatAllSelected()
})





