declare global {
  namespace Cypress {
    interface Chainable {
      getWebHookToken(): Cypress.Chainable<string>;
      deleteWebHookToken(token: string): Cypress.Chainable<object>;
      sendWebhook(token: string): Cypress.Chainable<object>;
      getLatesWebhookContent(): Cypress.Chainable<object>;
      collectWebhooksContent(): Cypress.Chainable<object[]>;
      collectEmailsContent(): Cypress.Chainable<object[]>;
    }
  }
}
