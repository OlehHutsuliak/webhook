"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectEmails = exports.collectWebhooks = exports.getLatesWebhookContent = exports.sendWebhook = exports.deleteToken = exports.getToken = void 0;
const axios_1 = __importDefault(require("axios"));
const helper_1 = require("./helper");
axios_1.default.defaults.baseURL = 'http://webhook.mgmt.kevin.internal';
axios_1.default.defaults.headers.post['Content-Type'] = 'application/json';
async function getToken() {
    const response = await axios_1.default.post('/token');
    return response.data.uuid;
}
exports.getToken = getToken;
function deleteToken(tokenId) {
    return axios_1.default.delete(`token/${tokenId}`);
}
exports.deleteToken = deleteToken;
function sendWebhook(tokenId, payload) {
    return axios_1.default.post(`${tokenId}`, payload);
}
exports.sendWebhook = sendWebhook;
async function getLatesWebhookContent(tokenId) {
    const responce = await axios_1.default.get(`/token/${tokenId}/request/latest/raw`);
    return responce.data;
}
exports.getLatesWebhookContent = getLatesWebhookContent;
async function collectWebhooks(tokenId) {
    const response = await axios_1.default.get(`/token/${tokenId}/requests?query=method:POST`);
    return (0, helper_1.collectWebhooksContent)(response.data.data);
}
exports.collectWebhooks = collectWebhooks;
async function collectEmails(tokenId) {
    const response = await axios_1.default.get(`/token/${tokenId}/requests?query=type:email`);
    return (0, helper_1.collectEmailsContent)(response.data.data);
}
exports.collectEmails = collectEmails;
//# sourceMappingURL=webhookSiteHandler.js.map