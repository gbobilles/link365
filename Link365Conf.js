
exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['link365.js'],

  multiCapabilities: [{
    browserName: 'chrome',
    chromeOptions: {
                args: [ "--incognito", "--disable-gpu","--start-maximized"]
                //args: ["--headless", "--incognito", "--disable-gpu","--window-size=1600, 1268"]

            }
  }],


     jasmineNodeOpts: {
    realtimeFailure: true,
	defaultTimeoutInterval: 2500000
},

plugins: [{
        package: 'protractor-screenshoter-plugin',
        screenshotPath: './REPORTS/Link365/report',
        screenshotOnExpect: 'failure+success',
        screenshotOnSpec: 'none',
        withLogs: true,
        writeReportFreq: 'asap',
        imageToAscii: 'none',
        clearFoldersBeforeTest: true
    }]
}
