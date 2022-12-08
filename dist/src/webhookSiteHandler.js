"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEmailsContent = exports.fetchWebhooksContent = exports.fetchLatestWebhookContent = exports.sendWebhook = exports.deleteWebhookToken = exports.getWebhookToken = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const helper_1 = require("./helper");
const client = axios_1.default.create({
    baseURL: 'https://webhook.site',
    headers: { 'Content-Type': 'application/json' },
});
(0, axios_retry_1.default)(client, {
    retries: 5,
    retryDelay: () => 2000,
    retryCondition: () => true,
});
async function getWebhookToken() {
    const response = await client.post('/token');
    return response.data.uuid;
}
exports.getWebhookToken = getWebhookToken;
function deleteWebhookToken(tokenId) {
    return client.delete(`token/${tokenId}`);
}
exports.deleteWebhookToken = deleteWebhookToken;
function sendWebhook(tokenId, payload) {
    try {
        return client.post(`${tokenId}`, payload);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            return `${error.code}\n${error.message}\n${error.stack}`;
        }
        return 'custom message';
    }
}
exports.sendWebhook = sendWebhook;
async function fetchLatestWebhookContent(tokenId) {
    const response = await client.get(`/token/${tokenId}/request/latest/raw`);
    return response.data;
}
exports.fetchLatestWebhookContent = fetchLatestWebhookContent;
async function fetchWebhooksContent(tokenId) {
    try {
        const response = await client.get(`/token/${tokenId}/requests?query=method:POST`);
        return (0, helper_1.collectWebhooksContent)(response.data.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            return `axios error__${error.code}\n${error.message}\n${error.stack}`;
        }
        return error;
    }
}
exports.fetchWebhooksContent = fetchWebhooksContent;
async function fetchEmailsContent(tokenId) {
    const response = await client.get(`/token/${tokenId}/requests?query=type:email`);
    return (0, helper_1.collectEmailsContent)(response.data.data);
}
exports.fetchEmailsContent = fetchEmailsContent;
//# sourceMappingURL=webhookSiteHandler.js.map