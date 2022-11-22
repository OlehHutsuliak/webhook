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
             * @example cy.deleteWebhookToken(<tokenId>)
             */
            deleteWebhookToken(tokenId: string): Promise<Record<string, unknown>>;
            /**
             * Custom command to send payload to Webhook.site
             * @example cy.sendWebhook(<tokenId>, <payload>)
             */
            sendWebhook(tokenId: string, payload: object): Promise<Record<string, unknown>>;
            /**
             * Custom command that retrieves the latest webhook sent to the URL.
             * @example cy.fetchWebhooksContent(<tokenId>)
             */
            fetchLatestWebhookContent(tokenId: string): Promise<object>;
            /**
             * Custom command that retrieves all webhooks sent to the URL.
             * @example cy.fetchWebhooksContent(<tokenId>)
             */
            fetchWebhooksContent(tokenId: string): Promise<object[]>;
            /**
             * Custom command that retrieves all emails sent to the URL.
             * Command can be used only  with cloud verion of Webhook.side service
             * @example cy.fetchEmailsContent(<tokenId>)
             */
            fetchEmailsContent(tokenId: string): Promise<object[]>;
        }
    }
}
export {};
