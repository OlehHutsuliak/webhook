declare function collectWebhooksContent(array: object[]): object[];
declare function collectEmailsContent(array: object[]): object[];
declare function checkResponse(response: any): Promise<Record<string, unknown>>;
export { collectWebhooksContent, collectEmailsContent, checkResponse };
