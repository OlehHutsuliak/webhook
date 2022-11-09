"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectEmailsContent = exports.collectWebhooksContent = void 0;
function collectWebhooksContent(array) {
    const webhooksContent = [];
    array.forEach((data) => {
        const extractedWebhookContent = JSON.parse(data.content);
        webhooksContent.push(extractedWebhookContent);
    });
    return webhooksContent;
}
exports.collectWebhooksContent = collectWebhooksContent;
function collectEmailsContent(array) {
    const emailsContent = [];
    array.forEach((data) => {
        const extractedEmailSubject = data.headers.subject[0];
        const extractedEmailContent = data.text_content;
        emailsContent.push(Object.fromEntries([
            ['subject', extractedEmailSubject],
            ['content', extractedEmailContent],
        ]));
    });
    return emailsContent;
}
exports.collectEmailsContent = collectEmailsContent;
//# sourceMappingURL=helper.js.map