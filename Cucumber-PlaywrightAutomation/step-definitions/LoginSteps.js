const { Given, When, Then } = require('@cucumber/cucumber');
const { Homepage } = require('../page-objects/homepage.po');
const { userAccount, mail_details } = require('../fixtures/data.json');

const login = userAccount;
const mail = mail_details;
const homepageObj = new Homepage();

Given("User visit the form page", async() => {
    await homepageObj.openBrowserWithURL();
    
})

When("Enter the {string} details", async(role) => {
    await homepageObj.form_details(login[role])
    await homepageObj.form_details(login[role])
})

Then("verify that row value is increase or not", async() => {
    await homepageObj.check_inc();
})

When("Remove one rows", async() => {
    await homepageObj.checkbox();
    await homepageObj.delete();
})

Then("verify that rows value is decrease or not", async() => {
    await homepageObj.check_dec();
})