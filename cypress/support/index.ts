/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import { getWebhookToken } from 'src/webhookSiteHandler';

Cypress.Commands.add('getWebhookToken', getWebhookToken);

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to generate Webhook.site token
       * @example cy.getWebhookToken()
       */
      getWebhookToken(): Promise<string>;
    }
  }
}
