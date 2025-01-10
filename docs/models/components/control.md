# Control

## Example Usage

```typescript
import { Control } from "logan-vanta/models/components";

let value: Control = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  description: "bah hunt during up",
  source: "Custom",
  domains: [
    "<value>",
  ],
  owner: {
    id: "<id>",
    displayName: "Charley93",
    emailAddress: "Euna25@gmail.com",
  },
  customFields: [
    {
      label: "<value>",
      value: "<value>",
    },
  ],
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
| `owner`                                                                                         | [components.ControlOwner](../../models/components/controlowner.md)                              | :heavy_check_mark:                                                                              | The control's owner.                                                                            |
| `role`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The control's GDPR role, if the control is a GDPR control.                                      |
| `customFields`                                                                                  | [components.CustomField](../../models/components/customfield.md)[]                              | :heavy_check_mark:                                                                              | The control's custom field values, if control custom fields is included in your Vanta instance. |