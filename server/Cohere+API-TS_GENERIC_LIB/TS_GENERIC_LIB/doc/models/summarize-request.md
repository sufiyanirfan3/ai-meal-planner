
# Summarize Request

## Structure

`SummarizeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | The text to generate a summary for. Can be up to 100,000 characters long. Currently the only supported language is English.<br>**Constraints**: *Minimum Length*: `250`, *Maximum Length*: `50000` |
| `length` | [`LengthEnum \| undefined`](../../doc/models/length-enum.md) | Optional | - |
| `format` | [`FormatEnum \| undefined`](../../doc/models/format-enum.md) | Optional | - |
| `model` | [`ModelEnum \| undefined`](../../doc/models/model-enum.md) | Optional | - |
| `extractiveness` | [`ExtractivenessEnum \| undefined`](../../doc/models/extractiveness-enum.md) | Optional | - |
| `temperature` | `number \| undefined` | Optional | Ranges from 0 to 5. Controls the randomness of the output. Lower values tend to generate more “predictable” output, while higher values tend to generate more “creative” output. The sweet spot is typically between 0 and 1.<br>**Default**: `0.3`<br>**Constraints**: `>= 0`, `<= 5` |
| `additionalCommand` | `string \| undefined` | Optional | A free-form instruction for modifying how the summaries get generated. Should complete the sentence "Generate a summary _". Eg. "focusing on the next steps" or "written by Yoda" |

## Example (as JSON)

```json
{
  "text": "text0",
  "temperature": 0.3,
  "length": "short",
  "format": "paragraph",
  "model": "command",
  "extractiveness": "high"
}
```

