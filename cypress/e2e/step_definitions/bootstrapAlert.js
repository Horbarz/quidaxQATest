import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { bootStrapAlertPage } from "../../pages/index";

const alerts = new bootStrapAlertPage()

Given('users navigate to the app to test bootstrap alerts', () => {
    alerts.elements.navigateToApp()
})

When('user opens the bootstrap alert page', () => {
   alerts.openAlertPage()
})

When('users click on the Autocloseable {string} message button', (status) => {
    alerts.clickAutoclosablesBtn(status)
})

When('user waits for {int} seconds', (timeout)=>{
    alerts.waitFor(timeout)
})

When('users click on the normal {string} message button', (status) => {
    alerts.clickNormalBtn(status)
})

When('users click the normal close {string} button', (status)=>{
    alerts.closeNormalBtn(status)
})

Then('{string} auto message is displayed', (status) => {
    alerts.displayAutoMessage(status)
})

Then('assert that the auto {string} message is closed', (status)=> {
    alerts.verifyAutoMessageClosed(status)
})

Then('assert that the normal {string} message is closed', (status)=> {
    alerts.verifyNormalMessageClosed(status)
})

Then('{string} normal message is displayed', (status) => {
    alerts.displayNormalMessage(status)
})