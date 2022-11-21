/* eslint-disable @typescript-eslint/no-namespace */
import './commands';
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to generate Webhook.site token
       * @example cy.getWebhookToken()
       */
       getWebhookToken(): Promise<string>
    }
  }
}