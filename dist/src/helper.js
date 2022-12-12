"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkResponse = exports.collectEmailsContent = exports.collectWebhooksContent = void 0;
function collectWebhooksContent(array) {
    return array.map((data) => JSON.parse(data.content));
}
exports.collectWebhooksContent = collectWebhooksContent;
function collectEmailsContent(array) {
    return array.map((data) => ({
        subject: data.headers.subject[0],
        content: data.text_content,
    }));
}
exports.collectEmailsContent = collectEmailsContent;
function checkResponse(response) {
    let attempts = 0;
    while (response.data.total === 0) {
        attempts += 1;
        if (attempts > 20) {
            throw new Error('After 20 attemps to fetch webhook content from Webhook.site service request failed.');
        }
        // eslint-disable-next-line no-unused-expressions
        response;
    }
    return response.data.data;
}
exports.checkResponse = checkResponse;
