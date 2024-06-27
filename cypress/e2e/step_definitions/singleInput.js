import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { singleInputPage } from "../../pages/index";

const singleInputForm = new singleInputPage()

Given('users navigate to the selenium demo app', () => {
    singleInputForm.elements.navigateToApp()
})

When('users open the simple form page', () => {
    singleInputForm.openSimpleFormPage()
})

When('users enter {string} into the input field', (random_text) => {
    singleInputForm.enterMessage(random_text)
})

When('users click the show message button', () => {
    singleInputForm.clickShowMessageButton()
})

Then('input field is enabled', () => {
    singleInputForm.verifyInputFieldEnabled()
})

Then('input field accepts {string}', (random_text) => {
    singleInputForm.verifyInputFieldAcceptsString(random_text)
})

Then('inputed message {string} should appear below the input field', (random_text)=> {
    singleInputForm.verifyExactMessageDisplays(random_text)
})
