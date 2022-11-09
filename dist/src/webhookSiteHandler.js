"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEmailsContent = exports.fetchWebhooksContent = exports.fetchLatesWebhookContent = exports.sendWebhook = exports.deleteWebHookToken = exports.getWebHookToken = void 0;
const axios_1 = __importDefault(require("axios"));
const helper_1 = require("./helper");
axios_1.default.defaults.baseURL = Cypress.env('webhook-url');
axios_1.default.defaults.headers.post['Content-Type'] = 'application/json';
async function getWebHookToken() {
    const response = await axios_1.default.post('/token');
    return response.data.uuid;
}
exports.getWebHookToken = getWebHookToken;
function deleteWebHookToken(tokenId) {
    return axios_1.default.delete(`token/${tokenId}`);
}
exports.deleteWebHookToken = deleteWebHookToken;
function sendWebhook(tokenId, payload) {
    return axios_1.default.post(`${tokenId}`, payload);
}
exports.sendWebhook = sendWebhook;
async function fetchLatesWebhookContent(tokenId) {
    const responce = await axios_1.default.get(`/token/${tokenId}/request/latest/raw`);
    return responce.data;
}
exports.fetchLatesWebhookContent = fetchLatesWebhookContent;
async function fetchWebhooksContent(tokenId) {
    const response = await axios_1.default.get(`/token/${tokenId}/requests?query=method:POST`);
    return (0, helper_1.collectWebhooksContent)(response.data.data);
}
exports.fetchWebhooksContent = fetchWebhooksContent;
async function fetchEmailsContent(tokenId) {
    const response = await axios_1.default.get(`https://webhook.site/token/${tokenId}/requests?query=type:email`);
    return (0, helper_1.collectEmailsContent)(response.data.data);
}
exports.fetchEmailsContent = fetchEmailsContent;
//# sourceMappingURL=webhookSiteHandler.js.map