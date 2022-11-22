export {};
declare global {
    namespace Cypress {
        interface Chainable {
            getWebhookToken(): Promise<string>;
        }
    }
}
