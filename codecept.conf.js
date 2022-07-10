const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://bluescapeqainterview.wordpress.com',
      show: true,
      windowSize: '1200x900',
      restart: false,
      getPageTimeout: '300000',
    }
  },
  include: {
    I: './steps/steps_file.js',
    Contact: './pages/contact.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'bluespace',
  timeout: 300,
}