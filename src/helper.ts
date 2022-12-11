type WebhookData = {
  content: string;
};

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

function checkResponse(response: any): Promise<Record<string, unknown>> {
  while (response.data.total === 0) {
    response();
  }
  return JSON.parse(response.data.data.slice(-1)[0].content);
}

export { collectWebhooksContent, collectEmailsContent, checkResponse };
