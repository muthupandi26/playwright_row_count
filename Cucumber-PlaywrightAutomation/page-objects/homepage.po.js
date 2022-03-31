const { assert, expect } = require('chai');
const { BaseAction } = require('../setup/baseAction');
const Mailosaur = require('mailosaur')


exports.Homepage = class Homepage extends BaseAction {

    constructor() {
        super();
    }

    /**
   * Creating element object for initializing required locators for home page.
   */
    elements = {
        USERNAME_INPUT: '#container-signin input[name="email"]',
        PASSWORD_INPUT: '#container-signin input[name="password"]',
        SignIn_Btn: "#btn-login",
        profile_DASHBOARD: "#profile-page-slideshow",
        profile_role: "#profile-role",
        ticketShowBtn: '//div[@id="tickets-show-btn"]',
        singleTicketSendBtn: "li#btnSingleTicketSend",
        emailSentNotificationText: "#divSmallBoxes span",
        channelButton: "#channel-tickets-connection-toggle",
        logoutBtn: '#main-logout a',
        confirmLogoutBtn: '#Msg1 .MessageBoxButtonSection button',

        // Form-details
        firstname : '#firstname',
        lastname : '#lastname',
        email : '#email',
        button : '#add-row',
        button_value : '#count_value',
        checkbox_click : '#table1 tr:nth-child(2) > td:nth-child(1) input',
        remove : '#remove-row',

    };

    validationText = {
        emailSentNotification: "Success",
    };

    /**
     * Function to open home page
     */
    async openBrowserWithURL() {
        await this.openBrowser(global.BASE_URL);
        await this.wait(2)
    }

    /**
     * Function to check if login is working okay
     */
    // async loginProcess(loginData) {
    //     await this.type(this.elements.USERNAME_INPUT, loginData.username);
    //     await this.type(this.elements.PASSWORD_INPUT, loginData.password);
    //     await this.click(this.elements.SignIn_Btn);
    // }

    async form_details(admin) {
        await this.type(this.elements.firstname, admin.firstname);
        await this.type(this.elements.lastname, admin.lastname);
        await this.type(this.elements.email, admin.email);
        await this.click(this.elements.button)
        await this.wait(3);
    }

    async check_inc() {
        const increased_value = 2;
        await this.shouldContainTextt(await this.getTextss(this.elements.button_value), increased_value)
    }

    async checkbox() {
        await this.wait(2);
        await this.checkToCheckbox(this.elements.checkbox_click);
    }

    async delete() {
        await this.click(this.elements.remove);
        await this.wait(2);
    }

    async check_dec() {
        const decreased_value = 1;
        await this.shouldContainTextt(await this.getTextss(this.elements.button_value), decreased_value);
    }

   
    /**
     * Function to check if requested element is displayed on page.
     */
    async verifyPageDisplayed(element) {
        switch (element) {
            case "dashboard":
                await this.shouldVisible(this.elements.profile_DASHBOARD);
                await this.wait(2);
                break;
        }
    }

    /**
     * Function to check if dashboard displayed role wise.
     */
    async verifyPageDisplayedRoleWise(role) {
        await this.wait(2);
        await this.shouldContainText(this.elements.profile_role, role);
    }

    clickNavBarButton() {
        this.wait(5)
        this.click(this.elements.ticketShowBtn);
    }

    clickSendEmailBtn() {
        this.wait(4);
        this.clickVisibleElementOnly(this.elements.singleTicketSendBtn);
    }

    emailSent() {
        this.shouldContainText(
            this.elements.emailSentNotificationText,
            this.validationText.emailSentNotification
        );
    }

    // Acces ticket channel
    navigateToTicketChannel() {
        this.wait(4);
        this.click(this.elements.channelButton);
    }

    logout() {
        this.click(this.elements.logoutBtn);
        cy.get(this.elements.confirmLogoutBtn).contains("Yes").click();
    }
}