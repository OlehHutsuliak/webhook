import axios from 'axios';
import { collectWebhooksContent, collectEmailsContent } from './helper';

axios.defaults.baseURL = 'http://webhook.mgmt.kevin.internal';
axios.defaults.headers.post['Content-Type'] = 'application/json';

async function getWebhookToken(): Promise<string> {
  const response = await axios.post('/token');
  return response.data.uuid;
}

function deleteWebhookToken(tokenId: string): Promise<Record<string, unknown>> {
  return axios.delete(`token/${tokenId}`);
}

function sendWebhook(tokenId: string, payload: object): Promise<Record<string, unknown>> {
  return axios.post(`${tokenId}`, payload);
}

async function fetchLatestWebhookContent(tokenId: string): Promise<object> {
  const response = await axios.get(`/token/${tokenId}/request/latest/raw`);
  return response.data;
}

async function fetchWebhooksContent(tokenId: string): Promise<object[]> {
  const response = await axios.get(`/token/${tokenId}/requests?query=method:POST`);
  return collectWebhooksContent(response.data.data);
}

async function fetchEmailsContent(tokenId: string): Promise<object[]> {
  const response = await axios.get(`/token/${tokenId}/requests?query=type:email`);
  return collectEmailsContent(response.data.data);
}

// eslint-disable-next-line prettier/prettier
export { getWebhookToken, deleteWebhookToken, sendWebhook, fetchLatestWebhookContent, fetchWebhooksContent, fetchEmailsContent };
