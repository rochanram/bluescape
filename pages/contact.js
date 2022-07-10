const { I } = inject();

module.exports = {
  form: {
    email: '//*[@class="email"]',
    name: '//*[@class="name"]',
    url: '//*[@class="url"]',
    date: '//*[@id="g7-date"]'
  },
  submitButton: '.contact-submit button[type="submit"]',

  async fillFormsAndSubmit(value) {
    
    await I.fillField(this.form['name'], value['name'])
    await I.fillField(this.form['email'], value['email'])
    await I.fillField(this.form['url'], value['url'])
    await I.fillField(this.form['date'], value['date'])
    await I.click(this.submitButton)
  },

  async waitAndAssertContactPage(){
    await I.waitForText('Send Us a Message', 5)
    await I.see('Send Us a Message')
  },

  async verifyLandedInSuccessPage(){

    await I.waitForText('Get in Touch', 5)
    await I.see('Get in Touch')
  },
}
