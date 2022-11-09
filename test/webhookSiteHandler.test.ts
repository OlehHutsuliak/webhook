import axios from 'axios';
import { getToken, collectWebhooks, getLatesWebhookContent, collectEmails } from '../src/webhookSiteHandler';
import * as data from './testData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Tests', () => {
  afterEach(jest.clearAllMocks);

  test('getToken()', async () => {
    mockedAxios.post.mockResolvedValue(data.mocked_get_token_response);
    const result = await getToken();
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(result).toBe(data.getToken_expected_result);
  });

  test('getLatesWebhookContent()', async () => {
    mockedAxios.get.mockResolvedValue(data.mocked_get_latest_webhook_content_response);
    const result = await getLatesWebhookContent('tokenId');
    expect(result).toStrictEqual(data.get_latest_webhook_content_result);
  });

  test('collectWebhooks()', async () => {
    mockedAxios.get.mockResolvedValue(data.mocked_collect_webhooks_response);
    const result = await collectWebhooks('tokenId');
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(data.collect_webhooks_expected_result);
  });

  test('collectEmails()', async () => {
    mockedAxios.get.mockResolvedValue(data.mocked_collect_emails_response);
    const result = await collectEmails('tokenId');
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(data.collect_emails_result);
  });
});
