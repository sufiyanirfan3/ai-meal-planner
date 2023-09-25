
# Tokenize Response

## Structure

`TokenizeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokens` | `number[]` | Required | An array of tokens, where each token is an integer. |
| `tokenStrings` | `string[]` | Required | - |
| `meta` | [`Meta \| undefined`](../../doc/models/meta.md) | Optional | - |

## Example (as JSON)

```json
{
  "tokens": [
    219,
    220,
    221
  ],
  "token_strings": [
    "token_strings9"
  ],
  "meta": {
    "api_version": {
      "version": "version0"
    }
  }
}
```

