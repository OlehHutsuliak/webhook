"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let retries = 0;
axios_1.default.defaults.baseURL = 'https://webhook.mgmt.aws.kevin.eu';
axios_1.default.defaults.headers.post['Content-Type'] = 'application/json';
axios_1.default.defaults['axios-retry'] = {
    retries: 5,
    retryDelay: () => 3000,
    retryCondition: () => true,
};
axios_1.default.interceptors.response.use((response) => {
    const { config } = response;
    if (response.data.total !== 0) {
        return Promise.resolve(response);
    }
    if (config['axios-retry'].retries === 0) {
        return Promise.reject(Error(`After ${retries} attemps to fetch webhook content from Webhook.site service request failed.`));
    }
    config['axios-retry'].retries -= 1;
    retries += 1;
    const delayRetryRequest = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, config.retryDelay || 3000);
    });
    return delayRetryRequest.then(() => (0, axios_1.default)(config));
}, undefined);
exports.default = axios_1.default;
