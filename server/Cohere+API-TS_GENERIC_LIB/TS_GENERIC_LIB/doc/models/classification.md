
# Classification

## Structure

`Classification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `input` | `string \| undefined` | Optional | The input text that was classified |
| `prediction` | `string` | Required | The predicted label for the associated query |
| `confidence` | `number` | Required | The confidence score for the top predicted class |
| `labels` | [`Record<string, Labels>`](../../doc/models/labels.md) | Required | A map containing each label and its confidence score according to the classifier. All the confidence scores add up to 1. |
| `confidences` | `unknown[] \| undefined` | Optional | An array containing each label and its confidence score according to the classifier |

## Example (as JSON)

```json
{
  "id": "id0",
  "input": "input8",
  "prediction": "prediction6",
  "confidence": 33.06,
  "labels": {
    "key0": {
      "confidence": 94.28
    },
    "key1": {
      "confidence": 94.29
    }
  },
  "confidences": [
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    }
  ]
}
```

