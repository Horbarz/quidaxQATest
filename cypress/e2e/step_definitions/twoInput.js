import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { twoInputPage } from "../../pages/index";

const twoInputForm = new twoInputPage()

Given('users navigate to the app', () => {
    twoInputForm.elements.navigateToApp()
})

When('users open the simple form page and scroll to the two input fields card', () => {
    twoInputForm.openSimpleFormPage()
})

When('users enter a value for {string} and {string}', (A,B) => {
    twoInputForm.enterValueA(A)
    twoInputForm.enterValueB(B)
})

When('users click on the get total button', () => {
    twoInputForm.clickTotalButton()
})

Then('sum for integer {string} and {string} is calculated and displayed', (A,B) => {
    twoInputForm.verifySumOfIntegers(A,B)
})

Then('sum for decimal {string} and {string} is calculated and displayed', (A,B) => {
    twoInputForm.verifySumOfDecimals(A,B)
})