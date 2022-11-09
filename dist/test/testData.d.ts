export declare const mocked_get_token_response: {
    data: {
        uuid: string;
    };
};
export declare const getToken_expected_result = "11111111-1111-1111-1111-111111111111";
export declare const mocked_collect_webhooks_response: {
    data: {
        data: {
            content: string;
        }[];
    };
};
export declare const collect_webhooks_expected_result: {
    object: number;
}[];
export declare const mocked_get_latest_webhook_content_response: {
    data: {
        key: string;
    };
};
export declare const get_latest_webhook_content_result: {
    key: string;
};
export declare const mocked_collect_emails_response: {
    data: {
        data: {
            headers: {
                subject: string[];
            };
            text_content: string;
        }[];
    };
};
export declare const collect_emails_result: {
    subject: string;
    content: string;
}[];
