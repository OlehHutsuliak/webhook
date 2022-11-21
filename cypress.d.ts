declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to generate Webhook.site token
       * @example cy.getWebhookToken()
       */
       getWebhookToken(): Promise<string>;
    }
  }