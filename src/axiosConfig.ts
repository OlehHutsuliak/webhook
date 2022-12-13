import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axiosRetry from 'axios-retry';

let retries = 0;

interface CustomReguestConfig extends AxiosRequestConfig {
  retry?: number;
  retryDelay?: number;
}

interface CustomResponseConfig extends AxiosResponse {
  config: CustomReguestConfig;
}

axios.defaults.baseURL = 'https://webhook.mgmt.aws.kevin.eu';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults['axios-retry'] = {
  retries: 5,
  retryDelay: () => 3000,
  retryCondition: () => true,
};

axios.interceptors.response.use((response: CustomResponseConfig) => {
  const { config } = response;
  if (response.data.total !== 0) {
    return Promise.resolve(response);
  }

  if (config['axios-retry'].retries === 0) {
    return Promise.reject(
      Error(`After ${retries} attemps to fetch webhook content from Webhook.site service request failed.`)
    );
  }

  config['axios-retry'].retries -= 1;
  retries += 1;

  const delayRetryRequest = new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, config.retryDelay || 3000);
  });

  return delayRetryRequest.then(() => axios(config));
}, undefined);

export default axios;
