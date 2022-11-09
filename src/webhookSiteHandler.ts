import axios from 'axios';
import { collectWebhooksContent, collectEmailsContent } from './helper';

axios.defaults.baseURL = 'http://webhook.mgmt.kevin.internal';
axios.defaults.headers.post['Content-Type'] = 'application/json';

async function getToken(): Promise<string> {
  const response = await axios.post('/token');
  return response.data.uuid;
}

function deleteToken(tokenId: string): Promise<object> {
  return axios.delete(`token/${tokenId}`);
}

function sendWebhook(tokenId: string, payload: object): Promise<object> {
  return axios.post(`${tokenId}`, payload);
}

async function getLatesWebhookContent(tokenId: string): Promise<object> {
  const responce = await axios.get(`/token/${tokenId}/request/latest/raw`);
  return responce.data;
}

async function collectWebhooks(tokenId: string): Promise<object[]> {
  const response = await axios.get(`/token/${tokenId}/requests?query=method:POST`);
  return collectWebhooksContent(response.data.data);
}

async function collectEmails(tokenId: string): Promise<object[]> {
  const response = await axios.get(`/token/${tokenId}/requests?query=type:email`);
  return collectEmailsContent(response.data.data);
}

export { getToken, deleteToken, sendWebhook, getLatesWebhookContent, collectWebhooks, collectEmails };
