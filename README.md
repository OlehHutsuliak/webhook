# webhook-site-plugin
### What is it?

Webhook.site is a developer tool that provides email and webhook testing. 
There are two separate editions of Webhook.site:
* The cloud version of Webhook.site at [https://webhook.site](https://webhook.site)
* Completely open-source, MIT-licensed version

In this project we use a second option. The cloud version of Webhook.site has been deployed
by DevOps Team and is reachable through VPN at the address -  [https://webhook.mgmt.aws.kevin.eu](https://webhook.mgmt.aws.kevin.eu/)

To learn more about Webhook.site click [here](https://docs.webhook.site/index.html)

### Installation

```sh
npm install <repo link>
```

For those who use Cypress, all you need is to add one single line ```require('webhook-site-plugin/dist/cypress-custom-commands')``` into **cypress/support/index file**. So then all custom commands are accessible as global cypress commands. 

### Examples

```js
```
