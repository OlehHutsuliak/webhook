import axios, { AxiosResponse } from 'axios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axiosRetry from 'axios-retry';

axios.defaults.baseURL = 'https://webhook.mgmt.aws.kevin.eu';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults['axios-retry'] = {
  retries: 5,
  retryDelay: () => 3000,
  retryCondition: () => true,
};

axios.interceptors.response.use((response: AxiosResponse) => {
  const { config } = response;
  if (response.data.total !== 0) {
    return Promise.resolve(response);
  }

  if (config['axios-retry'].retries === 0) {
    return Promise.reject(
      Error(
        `After ${axios.defaults['axios-retry'].retries} attemps to fetch webhook content from Webhook.site service request failed.`
      )
    );
  }

  config['axios-retry'].retries -= 1;

  const delayRetryRequest = new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, config['axios-retry'].retryDelay(undefined, undefined) || 3000);
  });

  return delayRetryRequest.then(() => axios(config));
}, undefined);

export default axios;
