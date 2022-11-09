"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collect_emails_result = exports.mocked_collect_emails_response = exports.get_latest_webhook_content_result = exports.mocked_get_latest_webhook_content_response = exports.collect_webhooks_expected_result = exports.mocked_collect_webhooks_response = exports.getToken_expected_result = exports.mocked_get_token_response = void 0;
exports.mocked_get_token_response = { data: { uuid: '11111111-1111-1111-1111-111111111111' } };
exports.getToken_expected_result = '11111111-1111-1111-1111-111111111111';
exports.mocked_collect_webhooks_response = {
    data: { data: [{ content: '{"object": 1}' }, { content: '{"object": 2}' }, { content: '{"object": 3}' }] },
};
exports.collect_webhooks_expected_result = [{ object: 1 }, { object: 2 }, { object: 3 }];
exports.mocked_get_latest_webhook_content_response = { data: { key: 'value' } };
exports.get_latest_webhook_content_result = { key: 'value' };
exports.mocked_collect_emails_response = {
    data: { data: [{ headers: { subject: ['subject_value,'] }, text_content: 'text_content_value' }] },
};
exports.collect_emails_result = [{ subject: 'subject_value,', content: 'text_content_value' }];
//# sourceMappingURL=testData.js.map