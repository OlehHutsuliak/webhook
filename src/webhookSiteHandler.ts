import axios, { AxiosError } from 'axios';
import axiosRetry from 'axios-retry';
import { collectWebhooksContent, collectEmailsContent } from './helper';

const client = axios.create({
  baseURL: 'https://webhook.site',
  headers: { 'Content-Type': 'application/json' },
});

axiosRetry(client, {
  retries: 5,
  retryDelay: () => 2000,
  retryCondition: () => true,
});

async function getWebhookToken(): Promise<string> {
  const response = await client.post('/token');
  return response.data.uuid;
}

function deleteWebhookToken(tokenId: string): Promise<Record<string, unknown>> {
  return client.delete(`token/${tokenId}`);
}

function sendWebhook(tokenId: string, payload: object): Promise<Record<string, unknown>> | string {
  try {
    return client.post(`${tokenId}`, payload);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return `${error.code}\n${error.message}\n${error.stack}`;
    }
    return 'custom message';
  }
}

async function fetchLatestWebhookContent(tokenId: string): Promise<object | string> {
  const response = await client.get(`/token/${tokenId}/request/latest/raw`);
  return response.data;
}

async function fetchWebhooksContent(tokenId: string): Promise<object[] | string> {
  try {
    const response = await client.get(`/token/${tokenId}/requests?query=method:POST`);
    return collectWebhooksContent(response.data.data);
  } catch (err) {
    return JSON.stringify(err);
  }
}

async function fetchEmailsContent(tokenId: string): Promise<object[]> {
  const response = await client.get(`/token/${tokenId}/requests?query=type:email`);
  return collectEmailsContent(response.data.data);
}

// eslint-disable-next-line prettier/prettier
export { getWebhookToken, deleteWebhookToken, sendWebhook, fetchLatestWebhookContent, fetchWebhooksContent, fetchEmailsContent };
