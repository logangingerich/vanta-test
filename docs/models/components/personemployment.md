# PersonEmployment

## Example Usage

```typescript
import { PersonEmployment } from "logan-vanta/models/components";

let value: PersonEmployment = {
  endDate: {
    type: "VANTA",
  },
  startDate: {
    integrationId: "<id>",
    resourceId: "<id>",
    type: "INTEGRATION",
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `endDate`                               | *components.PersonInfoSource*           | :heavy_check_mark:                      | The source of the person's information. |
| `startDate`                             | *components.PersonInfoSource*           | :heavy_check_mark:                      | The source of the person's information. |