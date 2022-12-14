import axios from 'axios';
// eslint-disable-next-line prettier/prettier
import { getWebhookToken, fetchWebhooksContent, fetchLatestWebhookContent, fetchEmailsContent } from '../src/webhookSiteHandler';
import * as data from './testData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Tests', () => {
  afterEach(jest.clearAllMocks);

  test('getWebHookToken()', async () => {
    mockedAxios.post.mockResolvedValue(data.mocked_get_token_response);
    const result = await getWebhookToken();
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(result).toBe(data.getToken_expected_result);
  });

  test('fetchLatesWebhookContent()', async () => {
    mockedAxios.get.mockResolvedValue(data.mocked_get_latest_webhook_content_response);
    const result = await fetchLatestWebhookContent('tokenId');
    expect(result).toStrictEqual(data.get_latest_webhook_content_result);
  });

  test('fetchWebhooksContent()', async () => {
    mockedAxios.get.mockResolvedValue(data.mocked_collect_webhooks_response);
    const result = await fetchWebhooksContent('tokenId');
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(data.collect_webhooks_expected_result);
  });

  test('fetchEmailsContent()', async () => {
    mockedAxios.get.mockResolvedValue(data.mocked_collect_emails_response);
    const result = await fetchEmailsContent('tokenId');
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(data.collect_emails_result);
  });
});
