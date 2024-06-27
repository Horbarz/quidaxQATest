import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { bootStrapModalPage } from "../../pages/index";

const modals = new bootStrapModalPage()

Given('users navigate to the app to test bootstrap modals', ()=> {
    modals.elements.navigateToApp()
})

When('users opens the bootstrap modal page', ()=> {
    modals.openModalPage()
})

When('users click on the launch modal button', ()=>{
    modals.launchSingleModal()
})

When('users click on the close button', () => {
    modals.clickCloseBtn()
})

When('users click on the cancel icon', () => {
    modals.clickCloseIcon()
})

When('users click on the save changes button', () => {
    modals.clickSaveChangesBtn()
})

When('users click on the first modal button', ()=>{
    modals.launchFirstModal()
})

When('users click on the first modal close button', ()=>{
    modals.clickModalOneClose()
})


When('users click on the first modal close icon', ()=>{
    modals.clickModalOneCloseIcon()
})

When('users click on the first modal save button', ()=>{
    modals.clickModalOneSave()
})

When('users click on the second modal button', ()=>{
    modals.launchSecondModal()
})

When('users click on the second modal close button', ()=>{
    modals.clickModalTwoClose()
})

When('users click on the second modal close icon', ()=>{
    modals.clickModalTwoCloseIcon()
})

When('users click on the second modal save button', ()=>{
    modals.clickModalTwoSave()
})

Then('assert that modal_one is launched successfully', ()=>{
    modals.verifyModalOneOpens()
})

Then('assert that modal_two is launched successfully', ()=>{
    modals.verifyModalTwoOpens()
})

Then('assert that modal is launched successfully', ()=>{
    modals.verifyModalOpens()
})

Then('assert that modal has an header', () => {
    modals.verifyModalHasHeader()
})

Then('assert that modal has a body', () => {
    modals.verifyModalHasBody()
})

Then('assert that modal has a close button', () => {
    modals.verifyCloseBtnExist()
})

Then('the modal becomes invisible', () => {
    modals.verifyModalInvisible()
})

Then('the modal one becomes invisible', () => {
    modals.verifyModalOneInvisible()
})

Then('the modal two becomes invisible', () => {
    modals.verifyModalTwoInvisible()
})

Then('verify the save changes button is clickable', () => {
    modals.verifySaveChangesBtn()
})



