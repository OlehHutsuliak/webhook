declare function getToken(): Promise<string>;
declare function deleteToken(tokenId: string): Promise<object>;
declare function sendWebhook(tokenId: string, payload: object): Promise<object>;
declare function getLatesWebhookContent(tokenId: string): Promise<object>;
declare function collectWebhooks(tokenId: string): Promise<object[]>;
declare function collectEmails(tokenId: string): Promise<object[]>;
export { getToken, deleteToken, sendWebhook, getLatesWebhookContent, collectWebhooks, collectEmails };
