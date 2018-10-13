'use strict';

module.exports = {


    go: function() {

		browser.ignoreSynchronization = true;
    browser.get('https://www.nationalsportsid.com/register?type=2&embed=0'); //overrides baseURL
		browser.driver.manage().window().maximize();
    },

    registration: function(first,last,birth) {


		browser.sleep(1000);
		element(by.css('#firstName')).click();
		browser.sleep(1000);
		element(by.css('#firstName')).sendKeys(first);
		browser.sleep(1000);
    element(by.css('#lastName')).click();
    browser.sleep(1000);
    element(by.css('#lastName')).sendKeys(last);
    browser.sleep(1000);
    this.datebirth();
    browser.sleep(5000);
    element(by.css('#submit-child')).click();
    browser.sleep(5000);
    element(by.css('#new-player')).click();
    browser.sleep(5000);
    expect(element(by.css('.remove-child')).isPresent()).toBeTruthy();
    element(by.css('#next-step')).click();
    browser.sleep(5000);

},

Parentregistration: function(first,last,address,town,state,zipcode,email,password,repassword,phone) {

var EC = protractor.ExpectedConditions;
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_firstName')).click();
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_firstName')).sendKeys(first);
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_lastName')).click();
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_lastName')).sendKeys(last);
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_address_addressLine')).click();
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_address_addressLine')).sendKeys(address);
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_address_city')).click();
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_address_city')).sendKeys(town);
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_address_state')).click();
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_address_state')).sendKeys(state);
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_address_zipCode')).click();
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_address_zipCode')).sendKeys(zipcode);
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_email')).click();
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_email')).sendKeys(email);
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_plainPassword_first')).click();
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_plainPassword_first')).sendKeys(password);
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_plainPassword_second')).click();
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_plainPassword_second')).sendKeys(repassword);
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_phoneNumbers_0_phoneNumber')).click();
browser.sleep(1000);
element(by.css('#hoopalert_user_parent_registration_phoneNumbers_0_phoneNumber')).sendKeys(phone);
browser.sleep(5000);

browser.getAllWindowHandles().then(function (handles) {
  var originalHandle = handles[0];
  browser.wait(EC.visibilityOf(element(by.tagName("iframe"))), 20000);
  browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
  element(by.xpath('//div[@class="recaptcha-checkbox-checkmark"]')).click();
  browser.switchTo().window(originalHandle);
  browser.sleep(9000);

  });

},

 datebirth:function(){

var picker = element(by.css('#birthDate'));

// get today's date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = mm+'/'+dd+'/'+yyyy;

picker.clear();
picker.sendKeys(today);
    }
};
