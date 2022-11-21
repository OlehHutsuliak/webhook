"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectEmailsContent = exports.collectWebhooksContent = void 0;
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
//# sourceMappingURL=helper.js.map