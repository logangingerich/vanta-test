# Sources

The sources of the person's information.

## Example Usage

```typescript
import { Sources } from "logan-vanta/models/components";

let value: Sources = {
  employment: {
    endDate: {
      type: "SCIM",
    },
    startDate: {
      type: "SCIM",
    },
  },
  emailAddress: {
    integrationId: "<id>",
    resourceId: "<id>",
    type: "INTEGRATION",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `employment`                                                               | [components.PersonEmployment](../../models/components/personemployment.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `emailAddress`                                                             | *components.PersonInfoSource*                                              | :heavy_check_mark:                                                         | The source of the person's information.                                    |