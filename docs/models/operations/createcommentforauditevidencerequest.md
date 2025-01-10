# CreateCommentForAuditEvidenceRequest

## Example Usage

```typescript
import { CreateCommentForAuditEvidenceRequest } from "logan-vanta/models/operations";

let value: CreateCommentForAuditEvidenceRequest = {
  auditId: "<id>",
  auditEvidenceId: "<id>",
  addCommentInput: {
    text: "<value>",
    email: "Ernie_Goyette72@hotmail.com",
    creationDate: new Date("2025-05-17T18:29:32.722Z"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `auditId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `auditEvidenceId`                                                        | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `addCommentInput`                                                        | [components.AddCommentInput](../../models/components/addcommentinput.md) | :heavy_check_mark:                                                       | N/A                                                                      |