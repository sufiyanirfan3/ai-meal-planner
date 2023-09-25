# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`

## Methods

* [Detokenize](../../doc/controllers/api.md#detokenize)
* [Generate](../../doc/controllers/api.md#generate)
* [Detect-Language](../../doc/controllers/api.md#detect-language)
* [Tokenize](../../doc/controllers/api.md#tokenize)
* [Classify](../../doc/controllers/api.md#classify)
* [Summarize](../../doc/controllers/api.md#summarize)
* [Rerank](../../doc/controllers/api.md#rerank)


# Detokenize

This endpoint takes tokens using byte-pair encoding and returns their text representation. To learn more about tokenization and byte pair encoding, see the tokens page.

```ts
async detokenize(
  body?: DetokenizeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DetokenizeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DetokenizeRequest \| undefined`](../../doc/models/detokenize-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DetokenizeResponse`](../../doc/models/detokenize-response.md)

## Example Usage

```ts
const body: DetokenizeRequest = {
  tokens: [
    10104,
    12221,
    1315,
    34,
    1420,
    69
  ],
};

try {
  const { result, ...httpResponse } = await apiController.detokenize(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "text": " Anton Mun",
  "meta": {
    "api_version": {
      "version": "1"
    }
  }
}
```


# Generate

This endpoint generates realistic text conditioned on a given input.

```ts
async generate(
  body?: GenerateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Generation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GenerateRequest \| undefined`](../../doc/models/generate-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Generation`](../../doc/models/generation.md)

## Example Usage

```ts
const body: GenerateRequest = {
  prompt: 'Please explain to me how LLMs work',
};

try {
  const { result, ...httpResponse } = await apiController.generate(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "8c88b6dd-a818-493d-9960-103a85359625",
  "generations": [
    {
      "id": "e4ce17ca-f705-4740-a34e-e6f0d17d5c16",
      "text": " LLMs are large language models trained on massive amounts of text data, which enable them to generate human"
    }
  ],
  "prompt": "Please explain to me how LLMs work",
  "meta": {
    "api_version": {
      "version": "1"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 498 | Blocked Input or Output | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Detect-Language

This endpoint identifies which language each of the provided texts is written in.

```ts
async detectLanguage(
  body?: DetectLanguageRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DetectLanguageResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DetectLanguageRequest \| undefined`](../../doc/models/detect-language-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DetectLanguageResponse`](../../doc/models/detect-language-response.md)

## Example Usage

```ts
const body: DetectLanguageRequest = {
  texts: [
    'Hello world',
    'Здравствуй, Мир'
  ],
};

try {
  const { result, ...httpResponse } = await apiController.detectLanguage(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "e649e08d-f798-48e8-8e8f-1160852705f9",
  "results": [
    {
      "language_code": "en",
      "language_name": "English"
    },
    {
      "language_code": "ru",
      "language_name": "Russian"
    }
  ],
  "meta": {
    "api_version": {
      "version": "1"
    }
  }
}
```


# Tokenize

This endpoint splits input text into smaller units called tokens using byte-pair encoding (BPE). To learn more about tokenization and byte pair encoding, see the tokens page.

```ts
async tokenize(
  body?: TokenizeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TokenizeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TokenizeRequest \| undefined`](../../doc/models/tokenize-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TokenizeResponse`](../../doc/models/tokenize-response.md)

## Example Usage

```ts
const body: TokenizeRequest = {
  text: 'tokenize me! :D',
  model: 'command',
};

try {
  const { result, ...httpResponse } = await apiController.tokenize(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "tokens": [
    10002,
    2261,
    2012,
    8,
    2792,
    43
  ],
  "token_strings": [
    "token",
    "ize",
    " me",
    "!",
    " :",
    "D"
  ],
  "meta": {
    "api_version": {
      "version": "1"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Classify

This endpoint makes a prediction about which label fits the specified text inputs best. To make a prediction, Classify uses the provided `examples` of text + label pairs as a reference.

Note: [Custom Models](/training-representation-models) trained on classification examples don't require the `examples` parameter to be passed in explicitly.

```ts
async classify(
  body?: ClassifyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ClassifyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ClassifyRequest \| undefined`](../../doc/models/classify-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ClassifyResponse`](../../doc/models/classify-response.md)

## Example Usage

```ts
const body: ClassifyRequest = {
  inputs: [
    'Confirm your email address',
    'hey i need u to send some $'
  ],
  examples: [
    {
      text: 'Dermatologists don\'t like her!',
      label: 'Spam',
    },
    {
      text: 'Hello, open to this?',
      label: 'Spam',
    },
    {
      text: 'I need help please wire me $1000 right now',
      label: 'Spam',
    },
    {
      text: 'Nice to know you ;)',
      label: 'Spam',
    },
    {
      text: 'Please help me?',
      label: 'Spam',
    },
    {
      text: 'Your parcel will be delivered today',
      label: 'Not spam',
    },
    {
      text: 'Review changes to our Terms and Conditions',
      label: 'Not spam',
    },
    {
      text: 'Weekly sync notes',
      label: 'Not spam',
    },
    {
      text: 'Re: Follow up from today’s meeting',
      label: 'Not spam',
    },
    {
      text: 'Pre-read for tomorrow',
      label: 'Not spam',
    }
  ],
};

try {
  const { result, ...httpResponse } = await apiController.classify(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "5374ccb0-9b88-4647-b23c-f6166f8a5c46",
  "classifications": [
    {
      "id": "083f55cb-f37d-4400-b779-236d28bcfd81",
      "input": "Confirm your email address",
      "prediction": "Not spam",
      "confidence": 0.8082329,
      "labels": {
        "Not spam": {
          "confidence": 0.8082329
        },
        "Spam": {
          "confidence": 0.19176713
        }
      }
    },
    {
      "id": "28b62557-2777-485f-bb05-6bb3e7361074",
      "input": "hey i need u to send some $",
      "prediction": "Spam",
      "confidence": 0.9893421,
      "labels": {
        "Not spam": {
          "confidence": 0.01065793
        },
        "Spam": {
          "confidence": 0.9893421
        }
      }
    }
  ],
  "meta": {
    "api_version": {
      "version": "1"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Summarize

This endpoint generates a summary in English for a given text.

```ts
async summarize(
  body?: SummarizeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SummarizeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SummarizeRequest \| undefined`](../../doc/models/summarize-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SummarizeResponse`](../../doc/models/summarize-response.md)

## Example Usage

```ts
const body: SummarizeRequest = {
  text: 'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches. It can also be made by whisking a flavored cream base and liquid nitrogen together. Food coloring is sometimes added, in addition to stabilizers. The mixture is cooled below the freezing point of water and stirred to incorporate air spaces and to prevent detectable ice crystals from forming. The result is a smooth, semi-solid foam that is solid at very low temperatures (below 2 °C or 35 °F). It becomes more malleable as its temperature increases.\n\nThe meaning of the name "ice cream" varies from one country to another. In some countries, such as the United States, "ice cream" applies only to a specific variety, and most governments regulate the commercial use of the various terms according to the relative quantities of the main ingredients, notably the amount of cream. Products that do not meet the criteria to be called ice cream are sometimes labelled "frozen dairy dessert" instead. In other countries, such as Italy and Argentina, one word is used fo all variants. Analogues made from dairy alternatives, such as goat\'s or sheep\'s milk, or milk substitutes (e.g., soy, cashew, coconut, almond milk or tofu), are available for those who are lactose intolerant, allergic to dairy protein or vegan.',
};

try {
  const { result, ...httpResponse } = await apiController.summarize(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "64d38a49-f241-4158-b4b2-04ce7f7489bf",
  "summary": "Ice cream is a frozen dessert made from milk or cream and flavoured with a sweetener and a spice or fruit. It can also be made by whisking a flavoured cream base and liquid nitrogen together. It is cooled below the freezing point of water and stirred to incorporate air spaces and prevent ice crystals from forming. It is a smooth, semi-solid foam that is solid at very low temperatures. It can be made from dairy alternatives for those who are lactose intolerant, allergic to dairy protein or vegan. The meaning of the name \"ice cream\" varies from one country to another.",
  "meta": {
    "api_version": {
      "version": "1"
    }
  }
}
```


# Rerank

This endpoint takes in a query and a list of texts and produces an ordered array with each text assigned a relevance score.

```ts
async rerank(
  body?: RerankRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RerankResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RerankRequest \| undefined`](../../doc/models/rerank-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RerankResponse`](../../doc/models/rerank-response.md)

## Example Usage

```ts
const body: RerankRequest = {
  query: 'What is the capital of the United States?',
  documents: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  model: 'rerank-english-v2.0',
};

try {
  const { result, ...httpResponse } = await apiController.rerank(
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "d02f0979-e59c-4b19-9e0e-542ced2fd3b3",
  "results": [
    {
      "document": {
        "text": "Carson City is the capital city of the American state of Nevada. At the 2010 United States Census, Carson City had a population of 55,274.\",     \"The Commonwealth of the Northern Mariana Islands is a group of islands in the Pacific Ocean that are a political division controlled by the United States. Its capital is Saipan.\",     \"Charlotte Amalie is the capital and largest city of the United States Virgin Islands. It has about 20,000 people. The city is on the island of Saint Thomas.\",     \"Washington, D.C. (also known as simply Washington or D.C., and officially as the District of Columbia) is the capital of the United States. It is a federal district. The President of the USA and many major national government offices are in the territory. This makes it the political center of the United States of America.\",     \"Capital punishment (the death penalty) has existed in the United States since before the United States was a country. As of 2017, capital punishment is legal in 30 of the 50 states. The federal government (including the United States military) also uses capital punishment."
      },
      "index": 0,
      "relevance_score": 0.87059724
    }
  ],
  "meta": {
    "api_version": {
      "version": "1"
    }
  }
}
```

