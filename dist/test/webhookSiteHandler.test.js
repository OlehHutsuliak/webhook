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
const axios_1 = __importDefault(require("axios"));
const webhookSiteHandler_1 = require("../src/webhookSiteHandler");
const data = __importStar(require("./testData"));
jest.mock('axios');
const mockedAxios = axios_1.default;
describe('Tests', () => {
    afterEach(jest.clearAllMocks);
    test('getWebHookToken()', async () => {
        mockedAxios.post.mockResolvedValue(data.mocked_get_token_response);
        const result = await (0, webhookSiteHandler_1.getWebHookToken)();
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
        expect(result).toBe(data.getToken_expected_result);
    });
    test('fetchLatesWebhookContent()', async () => {
        mockedAxios.get.mockResolvedValue(data.mocked_get_latest_webhook_content_response);
        const result = await (0, webhookSiteHandler_1.fetchLatesWebhookContent)('tokenId');
        expect(result).toStrictEqual(data.get_latest_webhook_content_result);
    });
    test('fetchWebhooksContent()', async () => {
        mockedAxios.get.mockResolvedValue(data.mocked_collect_webhooks_response);
        const result = await (0, webhookSiteHandler_1.fetchWebhooksContent)('tokenId');
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual(data.collect_webhooks_expected_result);
    });
    test('fetchEmailsContent()', async () => {
        mockedAxios.get.mockResolvedValue(data.mocked_collect_emails_response);
        const result = await (0, webhookSiteHandler_1.fetchEmailsContent)('tokenId');
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual(data.collect_emails_result);
    });
});
//# sourceMappingURL=webhookSiteHandler.test.js.map