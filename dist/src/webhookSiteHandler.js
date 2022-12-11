"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEmailsContent = exports.fetchWebhooksContent = exports.fetchLatestWebhookContent = exports.sendWebhook = exports.deleteWebhookToken = exports.getWebhookToken = void 0;
const rax = __importStar(require("retry-axios"));
const axios_1 = __importDefault(require("axios"));
// import axiosRetry from 'axios-retry';
const helper_1 = require("./helper");
axios_1.default.defaults.baseURL = 'https://webhook.mgmt.aws.kevin.eu';
axios_1.default.defaults.headers.post['Content-Type'] = 'application/json';
axios_1.default.defaults.raxConfig = {
    statusCodesToRetry: [[500]],
};
rax.attach(axios_1.default);
// axiosRetry(axios, {
//   retries: 5,
//   retryDelay: () => 2000,
//   retryCondition: () => true,
// });
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
    return response;
}
exports.fetchLatestWebhookContent = fetchLatestWebhookContent;
async function fetchWebhooksContent(tokenId) {
    const response = await axios_1.default.get(`/token/${tokenId}/requests?query=method:POST`);
    return (0, helper_1.collectWebhooksContent)(response.data.data);
}
exports.fetchWebhooksContent = fetchWebhooksContent;
async function fetchEmailsContent(tokenId) {
    const response = await axios_1.default.get(`/token/${tokenId}/requests?query=type:email`);
    return (0, helper_1.collectEmailsContent)(response.data.data);
}
exports.fetchEmailsContent = fetchEmailsContent;
