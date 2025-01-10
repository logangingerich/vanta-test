# AuditorControl

## Example Usage

```typescript
import { AuditorControl } from "logan-vanta/models/components";

let value: AuditorControl = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  description: "ha lest gloss bide daintily vast",
  source: "Vanta",
  domains: [
    "<value>",
  ],
  owner: {
    id: "<id>",
    displayName: "Sonny98",
    emailAddress: "Jewel49@yahoo.com",
  },
  customFields: [
    {
      label: "<value>",
      value: "<value>",
    },
  ],
  framework: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | The control's unique ID.                                                                        |
| `externalId`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | The control's external ID.                                                                      |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | The control's name.                                                                             |
| `description`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | The control's description.                                                                      |
| `source`                                                                                        | [components.ControlSource](../../models/components/controlsource.md)                            | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `domains`                                                                                       | *string*[]                                                                                      | :heavy_check_mark:                                                                              | The security domains that the control belongs to.                                               |
| `owner`                                                                                         | [components.Owner](../../models/components/owner.md)                                            | :heavy_check_mark:                                                                              | The control's owner.                                                                            |
| `role`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The control's GDPR role, if the control is a GDPR control.                                      |
| `customFields`                                                                                  | [components.CustomField](../../models/components/customfield.md)[]                              | :heavy_check_mark:                                                                              | The control's custom field values, if control custom fields is included in your Vanta instance. |
| `framework`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | The report standard framework fulfilled by the control.                                         |