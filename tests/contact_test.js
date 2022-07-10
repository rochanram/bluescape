Feature('contact us page');


Before(({ I }) => {
    I.amOnPage('/contact')
  }); 

const valuesToFill = {
    name: 'test',
    email: 'test',
    url: 'https://test.com',
    date: '01/01/2023'
  };
Scenario('name is required', async ({ I, Contact }) => {
    await Contact.waitAndAssertContactPage()
    const emptyName = Object.assign({}, valuesToFill)
    emptyName.name = ''
    await Contact.fillFormsAndSubmit(emptyName)
    await Contact.waitAndAssertContactPage()
});

Scenario('email is required', async ({ I, Contact }) => {
    await Contact.waitAndAssertContactPage()
    const emptyEmail = Object.assign({}, valuesToFill)
    emptyEmail.email = ''
    await Contact.fillFormsAndSubmit(emptyEmail)
    await Contact.waitAndAssertContactPage()
});

Scenario('website should only allow url', async ({ I, Contact }) => {
    await Contact.waitAndAssertContactPage()
    const wrongUrl = Object.assign({}, valuesToFill)
    wrongUrl.url = 'faesdas.com'
    await Contact.fillFormsAndSubmit(wrongUrl)
    await Contact.waitAndAssertContactPage()
});

Scenario('happy path', async ({ I, Contact }) => {
    await Contact.waitAndAssertContactPage()
    await Contact.fillFormsAndSubmit(valuesToFill)
    await Contact.verifyLandedInSuccessPage()
});


