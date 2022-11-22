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
       * @example cy.deleteWebhookToken('11111111-1111-1111-1111-111111111111')
       */
      deleteWebhookToken(tokenId: string): Promise<Record<string, unknown>>;
      /**
       * Custom command to send payload to Webhook.site
       * @example cy.sendWebhook('11111111-1111-1111-1111-111111111111', { id: 1, name: 'Kevin' })
       */
      sendWebhook(tokenId: string, payload: object): Promise<Record<string, unknown>>;
      /**
       * Custom command that retrieves the latest webhook sent to the URL.
       * @example cy.fetchWebhooksContent('11111111-1111-1111-1111-111111111111')
       */
      fetchLatestWebhookContent(tokenId: string): Promise<object>;
      /**
       * Custom command that retrieves all webhooks sent to the URL.
       * @example cy.fetchWebhooksContent('11111111-1111-1111-1111-111111111111')
       */
      fetchWebhooksContent(tokenId: string): Promise<object[]>;
      /**
       * Custom command that retrieves all emails sent to the URL.
       * Command can be used only  with cloud verion of Webhook.side service
       * @example cy.fetchEmailsContent('11111111-1111-1111-1111-111111111111')
       */
      fetchEmailsContent(tokenId: string): Promise<object[]>;
    }
  }
}

export {};
