declare type ResposeData = [
    {
        content: string;
    }
];
declare function collectWebhooksContent(array: object[]): object[];
declare function collectEmailsContent(array: object[]): object[];
declare function checkResponse(response: any): ResposeData;
export { collectWebhooksContent, collectEmailsContent, checkResponse, ResposeData };
