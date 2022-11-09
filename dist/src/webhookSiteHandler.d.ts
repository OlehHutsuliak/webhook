declare function getWebHookToken(): Promise<string>;
declare function deleteWebHookToken(tokenId: string): Promise<object>;
declare function sendWebhook(tokenId: string, payload: object): Promise<object>;
declare function fetchLatesWebhookContent(tokenId: string): Promise<object>;
declare function fetchWebhooksContent(tokenId: string): Promise<object[]>;
declare function fetchEmailsContent(tokenId: string): Promise<object[]>;
export { getWebHookToken, deleteWebHookToken, sendWebhook, fetchLatesWebhookContent, fetchWebhooksContent, fetchEmailsContent };
