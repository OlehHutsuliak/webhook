"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEmailsContent = exports.fetchWebhooksContent = exports.fetchLatestWebhookContent = exports.sendWebhook = exports.deleteWebhookToken = exports.getWebhookToken = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const helper_1 = require("./helper");
axios_1.default.defaults.baseURL = 'https://webhook.mgmt.aws.kevin.eu';
axios_1.default.defaults.headers.post['Content-Type'] = 'application/json';
(0, axios_retry_1.default)(axios_1.default, {
    retries: 5,
    retryDelay: () => 2000,
    retryCondition: () => true,
});
async function getWebhookToken() {
    const response = await axios_1.default.post('/token');
    return response.data.uuid;
}
exports.getWebhookToken = getWebhookToken;
function deleteWebhookToken(tokenId) {
    return axios_1.default.delete(`token/${tokenId}`);
}
exports.deleteWebhookToken = deleteWebhookToken;
function sendWebhook(tokenId, payload) {
    return axios_1.default.post(`${tokenId}`, payload);
}
exports.sendWebhook = sendWebhook;
async function fetchLatestWebhookContent(tokenId) {
    const response = await axios_1.default.get(`/token/${tokenId}/requests?query=method:POST`);
    const { content } = await response.data.data.slice(-1)[0];
    return content;
}
exports.fetchLatestWebhookContent = fetchLatestWebhookContent;
async function fetchWebhooksContent(tokenId) {
    const response = await axios_1.default.get(`/token/${tokenId}/requests?query=method:POST`);
    return (0, helper_1.collectWebhooksContent)(response.data[0].data);
}
exports.fetchWebhooksContent = fetchWebhooksContent;
async function fetchEmailsContent(tokenId) {
    const response = await axios_1.default.get(`/token/${tokenId}/requests?query=type:email`);
    return (0, helper_1.collectEmailsContent)(response.data.data);
}
exports.fetchEmailsContent = fetchEmailsContent;
