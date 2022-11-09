/* eslint-disable camelcase */
// getToken
export const mocked_get_token_response = { data: { uuid: '11111111-1111-1111-1111-111111111111' } };
export const getToken_expected_result = '11111111-1111-1111-1111-111111111111';

// collectWebhooks
export const mocked_collect_webhooks_response = {
  data: { data: [{ content: '{"object": 1}' }, { content: '{"object": 2}' }, { content: '{"object": 3}' }] },
};
export const collect_webhooks_expected_result = [{ object: 1 }, { object: 2 }, { object: 3 }];

// getLatesWebhookContent
export const mocked_get_latest_webhook_content_response = { data: { key: 'value' } };
export const get_latest_webhook_content_result = { key: 'value' };

// // collectEmails
export const mocked_collect_emails_response = {
  data: { data: [{ headers: { subject: ['subject_value,'] }, text_content: 'text_content_value' }] },
};
export const collect_emails_result = [{ subject: 'subject_value,', content: 'text_content_value' }];
