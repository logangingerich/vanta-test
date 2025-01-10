# CreateCustomControlRequest

## Example Usage

```typescript
import { CreateCustomControlRequest } from "logan-vanta/models/operations";

let value: CreateCustomControlRequest = {
  auditId: "<id>",
  createCustomControlInput: {
    externalId: "<id>",
    name: "<value>",
    description: "joyously versus hm",
    effectiveDate: new Date("2025-02-13T17:33:21.870Z"),
    category: "SECURE_ENGINEERING_&_ARCHITECTURE",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `auditId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createCustomControlInput`                                                                 | [components.CreateCustomControlInput](../../models/components/createcustomcontrolinput.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |