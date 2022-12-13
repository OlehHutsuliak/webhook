"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEmailsContent = exports.fetchWebhooksContent = exports.fetchLatestWebhookContent = exports.sendWebhook = exports.deleteWebhookToken = exports.getWebhookToken = void 0;
const axiosConfig_1 = __importDefault(require("./axiosConfig"));
const helper_1 = require("./helper");
async function getWebhookToken() {
    const response = await axiosConfig_1.default.post('/token');
    return response.data.uuid;
}
exports.getWebhookToken = getWebhookToken;
function deleteWebhookToken(tokenId) {
    return axiosConfig_1.default.delete(`token/${tokenId}`);
}
exports.deleteWebhookToken = deleteWebhookToken;
function sendWebhook(tokenId, payload) {
    return axiosConfig_1.default.post(`${tokenId}`, payload);
}
exports.sendWebhook = sendWebhook;
async function fetchLatestWebhookContent(tokenId) {
    const response = await axiosConfig_1.default.get(`/token/${tokenId}/requests?query=method:POST`);
    return JSON.parse(response.data.data.slice(-1)[0].content);
}
exports.fetchLatestWebhookContent = fetchLatestWebhookContent;
async function fetchWebhooksContent(tokenId) {
    const response = await axiosConfig_1.default.get(`/token/${tokenId}/requests?query=method:POST`);
    return (0, helper_1.collectWebhooksContent)(response.data.data);
}
exports.fetchWebhooksContent = fetchWebhooksContent;
async function fetchEmailsContent(tokenId) {
    const response = await axiosConfig_1.default.get(`/token/${tokenId}/requests?query=type:email`);
    return (0, helper_1.collectEmailsContent)(response.data.data);
}
exports.fetchEmailsContent = fetchEmailsContent;
