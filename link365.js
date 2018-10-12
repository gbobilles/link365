var child = require('./libraries/link365.js');
var testData = require('./libraries/link365.json');




describe('National Sport ID Registation', function() {


  it('Go the base url', function() {
  child.go();
  expect(browser.getTitle()).toEqual('National Sports ID');

  });

  it('Adding Child ', function() {
	var EC = protractor.ExpectedConditions;
  var yourElement = element(by.css('#firstName'));
  browser.wait(EC.presenceOf(yourElement), 5000);
	child.registration(testData[0].playfirstname, testData[0].playlastname,testData[0].playbirthdate);
  expect(element(by.css('#hoopalert_user_parent_registration_firstName')).isPresent()).toBeTruthy();
  });

  it('Adding parent ', function() {
  var EC = protractor.ExpectedConditions;
  var yourElement = element(by.css('#hoopalert_user_parent_registration_firstName'));
  browser.wait(EC.presenceOf(yourElement), 5000);
  child.Parentregistration(testData[1].parentfirstname, testData[1].parentlastname,testData[1].parentAdderess,testData[1].parentCity,testData[1].parentState,testData[1].parentZipCode,
                              testData[1].parentEmail,testData[1].parentPassword,testData[1].parentRe_enter_Password,testData[1].parentPhone);

  });



});
