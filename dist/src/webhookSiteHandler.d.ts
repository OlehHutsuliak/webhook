declare function getWebhookToken(): Promise<string>;
declare function deleteWebhookToken(tokenId: string): Promise<Record<string, unknown>>;
declare function sendWebhook(tokenId: string, payload: object): Promise<Record<string, unknown>>;
declare function fetchLatestWebhookContent(tokenId: string): Promise<object>;
declare function fetchWebhooksContent(tokenId: string): Promise<object[] | string>;
declare function fetchEmailsContent(tokenId: string): Promise<object[]>;
export { getWebhookToken, deleteWebhookToken, sendWebhook, fetchLatestWebhookContent, fetchWebhooksContent, fetchEmailsContent };
