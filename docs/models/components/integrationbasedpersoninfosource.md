# IntegrationBasedPersonInfoSource

The person's information comes from an integration.

## Example Usage

```typescript
import { IntegrationBasedPersonInfoSource } from "logan-vanta/models/components";

let value: IntegrationBasedPersonInfoSource = {
  integrationId: "<id>",
  resourceId: "<id>",
  type: "INTEGRATION",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `integrationId`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `resourceId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [components.PersonInfoSourceTypeINTEGRATION](../../models/components/personinfosourcetypeintegration.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |