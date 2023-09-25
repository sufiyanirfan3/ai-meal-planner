
# Generate Request

## Structure

`GenerateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prompt` | `string` | Required | Represents the prompt or text to be completed. Trailing whitespaces will be trimmed. If your use case requires trailing whitespaces, please contact ivan@cohere.ai. |
| `model` | `string \| undefined` | Optional | The identifier of the model to generate with. Currently available models are `command` (default), `command-nightly` (experimental), `command-light`, and `command-light-nightly` (experimental). Smaller, "light" models are faster, while larger models will perform better. [Custom models](/docs/training-custom-models) can also be supplied with their full ID. |
| `numGenerations` | `number \| undefined` | Optional | Defaults to `1`, min value of `1`, max value of `5`. Denotes the maximum number of generations that will be returned. |
| `maxTokens` | `number \| undefined` | Optional | Denotes the number of tokens to predict per generation, defaults to 20. See [BPE Tokens](/bpe-tokens-wiki) for more details.<br><br>Can only be set to `0` if `return_likelihoods` is set to `ALL` to get the likelihood of the prompt.<br>**Default**: `20` |
| `preset` | `string \| undefined` | Optional | The ID of a custom playground preset. You can create presets in the [playground](https://dashboard.cohere.ai/playground/generate?model=xlarge). If you use a preset, the `prompt` parameter becomes optional, and any included parameters will override the preset's parameters. |
| `temperature` | `number \| undefined` | Optional | Defaults to `0.75`, min value of `0.0`, max value of `5.0`. A non-negative float that tunes the degree of randomness in generation. Lower temperatures mean less random generations. See [Temperature](/temperature-wiki) for more details. |
| `k` | `number \| undefined` | Optional | Defaults to `0`(disabled), which is the minimum. Maximum value is `500`. Ensures only the top `k` most likely tokens are considered for generation at each step. |
| `p` | `number \| undefined` | Optional | Defaults to `0.75`. Set to `1.0` or `0` to disable. If set to a probability `0.0 < p < 1.0`, it ensures that only the most likely tokens, with total probability mass of `p`, are considered for generation at each step. If both `k` and `p` are enabled, `p` acts after `k`. |
| `frequencyPenalty` | `number \| undefined` | Optional | Defaults to `0.0`, min value of `0.0`, max value of `1.0`. Can be used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation. |
| `presencePenalty` | `number \| undefined` | Optional | Defaults to `0.0`, min value of `0.0`, max value of `1.0`. Can be used to reduce repetitiveness of generated tokens. Similar to `frequency_penalty`, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies. |
| `endSequences` | `string[] \| undefined` | Optional | The generated text will be cut at the beginning of the earliest occurence of an end sequence. The sequence will be excluded from the text. |
| `stopSequences` | `string[] \| undefined` | Optional | The generated text will be cut at the end of the earliest occurence of a stop sequence. The sequence will be included the text. |
| `returnLikelihoods` | [`ReturnLikelihoodsEnum \| undefined`](../../doc/models/return-likelihoods-enum.md) | Optional | - |
| `logitBias` | `Record<string, number> \| undefined` | Optional | Used to prevent the model from generating unwanted tokens or to incentivize it to include desired tokens. The format is `{token_id: bias}` where bias is a float between -10 and 10. Tokens can be obtained from text using [Tokenize](/reference/tokenize).<br><br>For example, if the value `{'11': -10}` is provided, the model will be very unlikely to include the token 11 (`"\n"`, the newline character) anywhere in the generated text. In contrast `{'11': 10}` will result in generations that nearly only contain that token. Values between -10 and 10 will proportionally affect the likelihood of the token appearing in the generated text.<br><br>Note: logit bias may not be supported for all custom models. |
| `truncate` | [`TruncateEnum \| undefined`](../../doc/models/truncate-enum.md) | Optional | - |
| `stream` | `boolean \| undefined` | Optional | When `true` the response will be streamed using JSON streaming. Default is `false`. |

## Example (as JSON)

```json
{
  "prompt": "Please explain to me how LLMs work",
  "max_tokens": 20,
  "preset": "my-preset-a58sbd",
  "model": "model2",
  "num_generations": 128,
  "temperature": 56.68
}
```

