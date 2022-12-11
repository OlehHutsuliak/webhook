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
    while (response.data.total === 0) {
        response();
    }
    return JSON.parse(response.data.data.slice(-1)[0].content);
}
exports.checkResponse = checkResponse;
