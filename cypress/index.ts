require('./custom-commands');
// comment

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to generate Webhook.site token
       * @example cy.getWebhookToken()
       */
      getWebhookToken(): Promise<string>;
      /**
       * Custom command that allows to delete existing webhook token
       * @example cy.deleteWebhookToken(<tokenId>)
       */
      deleteWebhookToken(tokenId: string): Promise<Record<string, unknown>>;
      /**
       * Custom command to send payload to Webhook.site
       * @example cy.sendWebhook(<tokenId>, <payload>)
       */
      sendWebhook(tokenId: string, payload: object): Promise<Record<string, unknown>>;
      /**
       * Custom command to send payload to Webhook.site
       * @example cy.fetchLatestWebhookContent(<tokenId>)
       */
      fetchLatestWebhookContent(tokenId: string): Promise<object>;
      /**
       * Custom command to send payload to Webhook.site
       * @example cy.fetchWebhooksContent(<tokenId>)
       */
      fetchWebhooksContent(tokenId: string): Promise<object[]>;
      /**
       * Custom command to send payload to Webhook.site
       * @example cy.fetchEmailsContent(<tokenId>)
       */
      fetchEmailsContent(tokenId: string): Promise<object[]>;
    }
  }
}

export {};
