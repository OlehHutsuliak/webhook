/// <reference types="cypress" />

import {
  getWebhookToken,
  deleteWebhookToken,
  sendWebhook,
  fetchLatestWebhookContent,
  fetchWebhooksContent,
  fetchEmailsContent,
} from '../src/webhookSiteHandler';

Cypress.Commands.add('getWebhookToken', getWebhookToken);
Cypress.Commands.add('deleteWebhookToken', deleteWebhookToken);
Cypress.Commands.add('sendWebhook', sendWebhook);
Cypress.Commands.add('fetchLatestWebhookContent', fetchLatestWebhookContent);
Cypress.Commands.add('fetchWebhooksContent', fetchWebhooksContent);
Cypress.Commands.add('fetchEmailsContent', fetchEmailsContent);
