const { getToken, deleteToken, sendWebhook, getLatesWebhookContent, collectWebhooks, collectEmails} = require('./dist/src/webhookSiteHandler')

Cypress.Commands.add('getWebHookToken',  getToken);
Cypress.Commands.add('deleteWebHookToken', deleteToken);
Cypress.Commands.add('sendWebhook', sendWebhook);
Cypress.Commands.add('getLatesWebhookContent', getLatesWebhookContent);
Cypress.Commands.add('collectWebhooksContent', collectWebhooks);
Cypress.Commands.add('collectEmailsContent', collectEmails);