import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { selectListPage } from "../../pages/index";

const singleSelectFunction = new selectListPage()

Given('users navigate to the app to test single list selection', ()=> {
    singleSelectFunction.elements.navigateToApp()
})

When('user opens the dropdown list page', () => {
    singleSelectFunction.openDropdownListPage()
})

When('users selects {string} as dropdown item', (day)=> {
    singleSelectFunction.selectDropdownItem(day)
})

Then('the selected {string} is displayed successfully', (day)=> {
    singleSelectFunction.verifyResult(day)
})