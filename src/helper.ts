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
  const webhooksContent: object[] = [];
  array.forEach((data: WebhookData) => {
    const extractedWebhookContent: object = JSON.parse(data.content);
    webhooksContent.push(extractedWebhookContent);
  });
  return webhooksContent;
}

function collectEmailsContent(array: object[]): object[] {
  const emailsContent: object[] = [];
  array.forEach((data: EmailData) => {
    const extractedEmailSubject = data.headers.subject[0];
    const extractedEmailContent = data.text_content;
    emailsContent.push(
      Object.fromEntries([
        ['subject', extractedEmailSubject],
        ['content', extractedEmailContent],
      ])
    );
  });
  return emailsContent;
}

export { collectWebhooksContent, collectEmailsContent };
