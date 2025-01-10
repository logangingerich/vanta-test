# Comment

## Example Usage

```typescript
import { Comment } from "logan-vanta/models/components";

let value: Comment = {
  id: "<id>",
  auditEvidenceId: "<id>",
  text: "<value>",
  creationDate: new Date("2024-01-01T12:34:49.368Z"),
  modificationDate: new Date("2025-10-09T21:04:19.910Z"),
  deletionDate: new Date("2025-08-03T02:25:37.402Z"),
  email: "Deondre74@gmail.com",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique identifier for the comment                                                                              |
| `auditEvidenceId`                                                                                                  | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique identifier for the audit evidence related to the comment.                                               |
| `text`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The comment message                                                                                                |
| `creationDate`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the comment was created                                                                                       |
| `modificationDate`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the comment was updated                                                                                       |
| `deletionDate`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the comment was deleted                                                                                       |
| `email`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The email of the comment author. This acts as a unique identifier to map users between Vanta and external systems. |