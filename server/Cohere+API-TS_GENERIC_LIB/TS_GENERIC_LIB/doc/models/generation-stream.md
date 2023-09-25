
# Generation Stream

## Structure

`GenerationStream`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | A segment of text of the generation. |
| `index` | `number \| undefined` | Optional | Refers to the nth generation. Only present when `num_generations` is greater than zero. |
| `isFinished` | `boolean` | Required | - |

## Example (as JSON)

```json
{
  "text": "text0",
  "index": 44,
  "is_finished": false
}
```

