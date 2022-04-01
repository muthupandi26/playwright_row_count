//import { BaseElement } from './baseElement';
// const { expect } = require('chai');
// const chai = require('chai');
// const expect = chai.expect;
const { expect } = require('chai');
var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

// import 'cypress-file-upload';
// const dayjs = require('dayjs');

let defaultTimeout = 60000;


exports.BaseAction = class BaseAction {

    async shouldContainTextt(text1, text2) {
        expect(text1).to.contain(text2);
    }

    async getTextss(locator) {
         await page.locator(locator).isVisible({ timeout: defaultTimeout });
         const textString = await page.locator(locator).innerText();
        //  console.log(textString);
         return textString;
        }

    async rowIncrement(text1,count) {
        console.log(text1,count)
        if(text1 > count) {
            count = text1;
            console.log(text1,count)
        }
        console.log(count)
    }
      
    async rowDecrement(text1,count) {
        console.log(text1, count)
        if(text1 < count) {
            count = text1;
            console.log(count + "asf");
        }
    }

    async type(locator, value) {
        // console.log("hey")
        // await page.locator(locator).isVisible({ timeout: defaultTimeout })
        await page.fill(locator, value);
    }

    async click(locator, isForce = false, isMultiple = false, pageType = "") {
        // await page.locator(locator).isVisible.isEnabled;
        // isForce ?
        //     isMultiple ?
        //         await page.click({ force: true, multiple: true }) :
        //         await page.click({ force: true }) :
        //     isMultiple ?
        //         await page.locator(locator).isVisible.isEnabled.click({ multiple: true }) :
        //         await page.click();
        if (pageType == "newTab") {
            await global.pageNew.click(locator, { timeOut: defaultTimeout })
        } else {
            await page.click(locator, { timeout: defaultTimeout })
        }
    }

    async forceClick(locator) {
        await page.locator(locator).click({ force: true })
    }

    async userID_Alpha_Numeric() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    async dropdownOptionSelect(locator,option){
        await page.selectOption(locator, option)
    }

    async shouldContainSomeText(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        page.locator(locator).then(el => {
            // await expect(locator.text()).not.toBeEmpty(0);
        });
    }

    async getTexts(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        var textString = "";
        await page.invoke('text').then((text) => {
            textString = text;
        });
        return textString;
    }

    async getCurrentDate() {
        return dayjs().format('DD-MM-YYYY')
    }

    async clickFirstElement(locator, isForce = false) {
        await page.locator(locator).first().click({ force: isForce });
    }
    async clickLastElement(locator, isForce = false) {
        await page.locator(locator).last().click({ force: isForce });
    }

    async log(data) {
        await page.locator(locator).log(data);
        return true;
    }

    async clickVisibleElementOnly(locator, isForce = false) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.click(locator)
        // await page.each(($el) => {
        //     await page.log($el.length);
        //     if ($el.isVisible) {
        //         await page.log("Element is" + page.wrap($el));
        //         isForce ? page.wrap($el).click({ force: true }) : page.wrap($el).click();
        //     }
        // });
    }

    async leaveMouse(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.trigger('mouseleave');
    }

    async focusToTheElement(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.first().focus();
    }

    async clickWithoutTarget(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.isVisible().invoke('removeAttr', 'target').click();
    }

    async clickNotVisible({ locator, isForce = false }) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        isForce ?
            await page.isEnabled.click({ force: true }) : page.isEnabled.click();
    }

    async scrollIntoElement(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.scrollIntoView().isVisible();
    }
    async scroll(locator, side = 'bottom') {
        await page.locaotr(locator).scrollTo(side);
    }

    async doubleClick(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.dblclick();
    }

    // await page.check(locator)
    //     await this.wait(2);
    async checkToCheckbox(locator) {
        // await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.check(locator);
        // const come_on = page.locator(locator);
        // expect(come_on).to.be.checked(); 
        // await page.check(locator)
        // expect(await page.isChecked(locator)).toBeTruthy();
        // expect(come_on).to.contain("Row checking using Automation")
        // console.log("hey checkbox")
        // console.log(locator)
        // const locator2 = page.locator("afs");
        // console.log(locator2);
        // await page.check(locator);
        // await this.wait(3);
        // await expect(locator).to.be.checked;
        // await expect(locator).toBeChecked();

        // await page.locator(locator).isVisible({ timeout: defaultTimeout });
        // console.log(locator)
        // if (page.not('[value=false]')) {
        //     await page.check().expect(locator).toBeChecked();
        // } else {
        //     await expect(locator).toBeChecked();
        // }
    }

    async uncheckToCheckbox(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        if (page.not('[value=true]')) {
            await page.check().expect(locator).not.toBeChecked();
        } else {
            await expect(locator).not.toBeChecked();
        }
    }

    async checkToCheckboxByValues(locator, isChecked, ...values) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        if (isChecked) {
            await page.isEnabled().check(values).expect(locator).toBeChecked();
        } else {
            await page.isDisabled().uncheck(values).expect(locator).not.toBeChecked;
        }
    }

    async selectTheOption(locator, value) {
        await page.click(locator);
        const valueEl = 'xpath=//div[@class="visible menu transition"]//span[contains(.,"' + value + '")]';
        await page.click(valueEl);
    }

    async selectMultiOptions(locator, ...values) {
        await page.click(locator);
        // values.each(item => {
        //     await page.log(`${item}`);
        //     const valueEl = 'xpath=//div[@class="visible menu transition"]//span[contains(.,"' + item + '")]';
        //     await page.click(valueEl);
        // });
    }

    async shouldHasValue(locator, value, negative = true) {
        const should = negative ? 'have' : 'not.have';
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.should(`${should}.value`, value);
    }

    async shouldContainText(locator, text) {
        // await page.locator(locator).isVisible({ timeout: defaultTimeout });
        // await page.then(el => {
        //     await expect(el.text()).toHaveText(text);

        // });
    }

    async shouldHasText(locator, text, negative = true) {
        const should = negative ? 'have' : 'not.have';
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.should(`${should}.text`, text);
    }

    async shouldHasStyle(locator, style) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await expect(locator).toHaveAttribute('style', style);

    }

    async shouldVisible(locator, negative = true) {
        // const should = negative ? 'be' : 'not.be';
        // await page.locator(locator).isVisible({ timeout: defaultTimeout });
        // await page.should(`${should}.visible`);
    }

    async isVisible(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.then(($el) => {
            return $el.isVisible();
        })
    }

    async checkVisiblity(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.then($ele => {
            if ($ele.isVisible()) {
                return true;
            }
            else {
                return false;
            }
        })
    }

    async openBrowser(url) {
        await page.goto(url);
        await page.waitForLoadState()
    }

    async checkUrlContain(text) {
        await page.url().expect(locator).toContainText(text);
    }

    async timeInSecond(ms) {
        return ms * 1000;
    }

    async wait(s) {
        await page.waitForTimeout(s * 1000);
    }

    async getText(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        const text = await promisify(page.then($el => $el.text()));
        return text.toString();
    }

    async isControlExist(locator) {
        try {
            await page.locator(locator).isVisible({ timeout: defaultTimeout });
            const lengthOfElement = await promisify(page.then($el => $el.length));
            return lengthOfElement !== 0;
        } catch (e) {
            return false;
        }
    }

    async getAttributeElement(locator, attributeName) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        const attributeOfElement = await promisify(page.then($el => $el.attr(attributeName) || 'null'));
        return attributeOfElement.toString();
    }

    async countElement(locator) {
        let lengthOfElement = 0;
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        lengthOfElement = await promisify(page.then($el => $el.length));
        return lengthOfElement;
    }

    async getRandomString(string) {
        var characters = 'abcdefghijklmnopqrstuvwxyz';
        var result = ""
        var charactersLength = characters.length;
        for (var i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result += string;
    }

    async mouseOver(locator) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.trigger('mouseover');
    }

    async selectTheOptionFromDropdown(locator, value) {
        await page.locator(locator).expect(locator).toHaveValue(value).click();
    }

    async selectOption(locator, value) {
        await page.locator(locator).selectOption(value);
    }

    async uploadFile(locator, attachFileLocator, filePath) {
        await page.locator(locator).click();
        await page.locator(attachFileLocator).fileChooser.setFiles(filePath, { subjectType: 'drag-n-drop' });
        await page.wait(4)
    }

    async browsFile(locator, fileName) {
        // await page.fixture(fileName).then(fileContent => {
        //     await page.locaotr('input[type="file"]').attachFile({
        //         fileContent: fileContent.toString(),
        //         fileName: fileName,
        //     });
        // });

        await page.setInputFiles(locator, fileName)
    }

    async clickIndex(locator, index) {
        await page.locator(locator).nth(index).click()
    }

    async selectOption(locator, value) {
        await page.selectOption(locator, value)
    }

    async typeInHiddenTextBox(locator, value, isForce = false) {
        await page.locator(locator).last().focus().type(value, { force: isForce });
    }

    async dragAndDrop(sourceLocator, targetLocator, timeout = 5) {
        await page.locator(sourceLocator).trigger("mousedown", { which: 1 })
        await this.wait(timeout);
        await page.locator(targetLocator).trigger("mousemove").trigger("mouseup", { force: true });
        await this.wait(2);
    }

    async countElements(locator, element, length) {
        await page.locator(locator).find(element).should('have.length', length);
    }

    async isActive(locator, value) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.expect(locator).toHaveClass(value);
    }

    async verifyDownloadableFile(locator, fileName) {
        await page.locator(locator).isVisible({ timeout: defaultTimeout });
        await page.invoke('attr', 'href')
            .then(href => {
                page.downloadFile(href, 'downloads', fileName)
            });
        return true;
    }

    async createApiAlias(requestName, uri, aliasName) {
        await page.intercept(requestName, uri).as(aliasName);
    }

    async waitForAlias(alias) {
        await page.wait('@' + alias);
    }

    async openNewTab(url) {
        global.pageNew = await context.newPage();
        await pageNew.goto(url);
    }
    async pageEvaluate(pageType = "") {
        if (pageType == "newTab") {
            await pageNew.evaluate(() => window.FSWebChat || (function (d, s) {
                var fs = FSWebChat = function () { };
                fs._s = d.createElement(s);
                fs._h = d.getElementsByTagName(s)[0];
                fs._domain = '5355ebe4-ef0d-4ad2-a802-acf33331ce0a';
                fs._hashkey = '40a58b76d9d159f6e9d6a51241ef380639796076';
                fs._subfolder = '';
                fs._server = 'https://2021021-dev.finesource.org:443/poll';
                fs._service = '/new-webchat-service';
                fs._timestamp = +new Date;
                fs._s.setAttribute("charset", "utf-8");
                fs._s.src = fs._server + fs._service + "/startup/" + fs._domain + "/" + fs._hashkey;
                fs._s.type = 'text/javascript';
                fs._s.async = true;
                fs._h.parentNode.insertBefore(fs._s, fs._h);
            })(document, "script"));
        } else {
            await page.evaluate(() => window.FSWebChat || (function (d, s) {
                var fs = FSWebChat = function () { };
                fs._s = d.createElement(s);
                fs._h = d.getElementsByTagName(s)[0];
                fs._domain = '5355ebe4-ef0d-4ad2-a802-acf33331ce0a';
                fs._hashkey = '40a58b76d9d159f6e9d6a51241ef380639796076';
                fs._subfolder = '';
                fs._server = 'https://2021021-dev.finesource.org:443/poll';
                fs._service = '/new-webchat-service';
                fs._timestamp = +new Date;
                fs._s.setAttribute("charset", "utf-8");
                fs._s.src = fs._server + fs._service + "/startup/" + fs._domain + "/" + fs._hashkey;
                fs._s.type = 'text/javascript';
                fs._s.async = true;
                fs._h.parentNode.insertBefore(fs._s, fs._h);
            })(document, "script"));
        }
    }
    async waitForSelector(selector, pageType = "") {
        if (pageType == "newTab") {
            global.pageNew.waitForSelector(selector);
        }
        else {
            page.waitForSelector(selector);
        }
    }
    async switchTab(pageType = "") {
        if (pageType == "newTab") {
            global.pageNew.bringToFront();
        }
        else {
            page.bringToFront();
        }
    }
    async waitForTimeout(time, pageType = "") {
        if (pageType == "newTab") {
            global.pageNew.waitForTimeout(time);
        } else {
            page.waitForTimeout(time);
        }
    }
}