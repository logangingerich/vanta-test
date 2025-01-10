# AddCommentInput

## Example Usage

```typescript
import { AddCommentInput } from "logan-vanta/models/components";

let value: AddCommentInput = {
  text: "<value>",
  email: "Alycia8@gmail.com",
  creationDate: new Date("2025-02-27T16:53:19.075Z"),
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Text value of the comment                                                                                                     |
| `email`                                                                                                                       | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Email of author. Must match an existing Vanta user and the user must exist under the Audit Firm who is making the API request |
| `creationDate`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | When the comment was created in the external system                                                                           |