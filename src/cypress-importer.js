require('Cypress');
import {getWebhookToken} from '../dist/src/webhookSiteHandler'

Cypress.add.Commands('getWebhookToken', getWebhookToken)