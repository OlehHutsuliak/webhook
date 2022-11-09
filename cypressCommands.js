const { getToken, deleteToken, sendWebhook, getLatesWebhookContent, collectWebhooks, collectEmails} = require('./dist/src/webhookSiteHandler')

Cypress.Commands.add('getToken',  getToken);
Cypress.Commands.add('deleteToken', deleteToken);
Cypress.Commands.add('sendWebhook', sendWebhook);
Cypress.Commands.add('getLatesWebhookContent', getLatesWebhookContent);
Cypress.Commands.add('collectWebhooks', collectWebhooks);
Cypress.Commands.add('collectEmails', collectEmails);