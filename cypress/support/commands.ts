/* eslint-disable import/no-unresolved */
import { getWebhookToken } from 'src/webhookSiteHandler';

Cypress.Commands.add('getWebhookToken', getWebhookToken);
