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

// function parseLatestWebhook(array: object[]): object[] {
//   const latestWebhook = array.slice(-1)[0];
//   return latestWebhook.map((data: WebhookData) => JSON.parse(data.content));
// }

export { collectWebhooksContent, collectEmailsContent };
