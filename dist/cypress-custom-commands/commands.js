"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webhookSiteHandler_1 = require("../src/webhookSiteHandler");
Cypress.Commands.add('getWebhookToken', webhookSiteHandler_1.getWebhookToken);
Cypress.Commands.add('deleteWebhookToken', webhookSiteHandler_1.deleteWebhookToken);
Cypress.Commands.add('sendWebhook', webhookSiteHandler_1.sendWebhook);
Cypress.Commands.add('fetchLatestWebhookContent', webhookSiteHandler_1.fetchLatestWebhookContent);
Cypress.Commands.add('fetchWebhooksContent', webhookSiteHandler_1.fetchWebhooksContent);
Cypress.Commands.add('fetchEmailsContent', webhookSiteHandler_1.fetchEmailsContent);
