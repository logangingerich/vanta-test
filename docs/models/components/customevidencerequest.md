# CustomEvidenceRequest

## Example Usage

```typescript
import { CustomEvidenceRequest } from "logan-vanta/models/components";

let value: CustomEvidenceRequest = {
  id: "<id>",
  controlIds: [
    "<value>",
  ],
  title: "<value>",
  description: "abscond which exhausted whenever dearly",
  cadence: "P1W",
  reminderWindow: "P0D",
  isRestricted: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Internal id of the custom evidence request within Vanta                              |
| `controlIds`                                                                         | *string*[]                                                                           | :heavy_check_mark:                                                                   | A set of controls, referenced by id, to map the evidence to                          |
| `title`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Title for the evidence request                                                       |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | Description for the evidence request                                                 |
| `cadence`                                                                            | [components.RecurrenceDuration](../../models/components/recurrenceduration.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `reminderWindow`                                                                     | [components.RecurrenceDuration](../../models/components/recurrenceduration.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `isRestricted`                                                                       | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether this document contains sensitive data and needs more restrictive read access |