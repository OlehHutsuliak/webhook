type WebhookData = {
  content: string;
};

type ResposeData = [
  {
    content: string;
  }
];

type EmailData = {
  text_content: string;
  headers: {
    subject: string[];
  };
};

function collectWebhooksContent(array: object[]): object[] {
  return array.map((data: WebhookData) => JSON.parse(data.content));
}

function collectEmailsContent(array: object[]): object[] {
  return array.map((data: EmailData) => ({
    subject: data.headers.subject[0],
    content: data.text_content,
  }));
}

function checkResponse(response: any): ResposeData {
  let attempts = 0;
  while (response.data.total === 0) {
    attempts += 1;
    if (attempts > 20) {
      throw new Error('After 20 attemps to fetch webhook content from Webhook.site service request failed.');
    }
    // eslint-disable-next-line no-unused-expressions
    response;
  }
  return response.data.data;
}

export { collectWebhooksContent, collectEmailsContent, checkResponse, ResposeData };
