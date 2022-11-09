# webhook-site-plugin

webhook-site-plugin allow for email and webhook testing through webhook.site

### What is it?

Webhook.site is a developer tool that provides email and webhook testing. This is a third party library and I have no affiliation to webhook.site or any of its partners.

### Installation

```sh
npm install 
```

Once downloaded, you can import transpiled functions from ```sh'webhook-site-plugin/dist/src/webhookSiteHandler'``` into your Cypress project and add next commands:

```js
Cypress.Commands.add('getWebHookToken', getWebHookToken);
Cypress.Commands.add('deleteWebHookToken', deleteWebHookToken);
Cypress.Commands.add('sendWebhook', sendWebhook);
Cypress.Commands.add('fetchLatesWebhookContent', fetchLatesWebhookContent);
Cypress.Commands.add('fetchWebhooksContent', fetchWebhooksContent);
Cypress.Commands.add('fetchEmailsContent', fetchEmailsContent);
```

### Example Usage

```js
cy.webhookGenerateToken({
  apikey: 'ff07eb99-ed12-4f55-8fa1-65c7567d41b9',
  password: 'Password1234',
}).then((token) => {
  cy.log(`Token: ${token}`);
  cy.webhookGetEmailAddress({
    token: token,
    apikey: 'ff07eb99-ed12-4f55-8fa1-65c7567d41b9',
    password: 'Password1234',
  }).then((emailAddress) => {
    console.log(emailAddress);
    cy.log(`Email Address: ${emailAddress}`);
  });
  cy.webhookGetURI({
    token: token,
    apikey: 'ff07eb99-ed12-4f55-8fa1-65c7567d41b9',
    password: 'Password1234',
  }).then((webHookURI) => {
    console.log(webHookURI);
    cy.log(`WebHook URI: ${webHookURI}`);
    cy.request(webHookURI);
  });
  cy.webhookGetAllRequests({
    token: token,
    apikey: 'ff07eb99-ed12-4f55-8fa1-65c7567d41b9',
    password: 'Password1234',
  }).then((responses) => {
    console.log(responses);
    responses.forEach((response) => {
      cy.log(`Response: ${response.ip}`);
    });
  });
});
```
