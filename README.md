# webhook-site-plugin
### What is it?

Webhook.site is a developer tool that provides email and webhook testing. 
There are two separate editions of Webhook.site:
* The cloud version of Webhook.site at [https://webhook.site](https://webhook.site)
* Completely open-source, MIT-licensed version

In this project we use a second option. The cloud version of Webhook.site has been deployed
by DevOps Team and is reachable through VPN at the address -  [http://webhook.mgmt.kevin.internal](http://webhook.mgmt.kevin.internal)

To learn more about Webhook.site click [here](https://docs.webhook.site/index.html)

### Installation

```sh
npm install <repo link>
```

Once downloaded, you can import transpiled functions from ```'webhook-site-plugin/dist/src/webhookSiteHandler'``` into your Cypress project and add next commands:

```js
Cypress.Commands.add('getWebHookToken', getWebHookToken);
Cypress.Commands.add('deleteWebHookToken', deleteWebHookToken);
Cypress.Commands.add('sendWebhook', sendWebhook);
Cypress.Commands.add('fetchLatesWebhookContent', fetchLatesWebhookContent);
Cypress.Commands.add('fetchWebhooksContent', fetchWebhooksContent);
Cypress.Commands.add('fetchEmailsContent', fetchEmailsContent);
```

### Example Usage

```js
```
