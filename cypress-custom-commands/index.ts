require('./commands');

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to generate webhook token.
       * After creating a token, the URL at https://webhook.mgmt.aws.kevin.eu/{token.uuid} becomes accessible
       * @example cy.getWebhookToken()
       */
      getWebhookToken(): Promise<string>;
      /**
       * Custom command to delete existing webhook token
       * @example cy.deleteWebhookToken('bacbef2c-c2d7-4e0c-9a2d-b1e4e6a75b7b')
       */
      deleteWebhookToken(tokenId: string): Promise<Record<string, unknown>>;
      /**
       * Custom command to send payload to Webhook.site
       * @example cy.sendWebhook('0e18c600-bbf6-4db9-b6db-2ec0625ac1cd', { id: 1, name: 'Kevin' })
       */
      sendWebhook(tokenId: string, payload: object): Promise<Record<string, unknown>>;
      /**
       * Custom command that retrieves the latest webhook sent to the URL.
       * @example cy.fetchWebhooksContent('e3ea5c4c-f0ab-419e-952e-7358b74422e2')
       */
      fetchLatestWebhookContent(tokenId: string): Promise<object | string>;
      /**
       * Custom command that retrieves all webhooks sent to the URL.
       * @example cy.fetchWebhooksContent('a4932e68-84e0-4adf-bbff-cb165cf257c8')
       */
      fetchWebhooksContent(tokenId: string): Promise<object[] | string>;
      /**
       * Custom command that retrieves all emails sent to the URL.
       * Command can be used only  with cloud verion of Webhook.side service
       * @example cy.fetchEmailsContent('86c9f1c3-064d-4ab1-9934-7f3320545f8d')
       */
      fetchEmailsContent(tokenId: string): Promise<object[]>;
    }
  }
}

export {};
