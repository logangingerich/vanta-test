# DeactivateMetadata

Metadata for the deactivation of the vulnerability.

## Example Usage

```typescript
import { DeactivateMetadata } from "logan-vanta/models/components";

let value: DeactivateMetadata = {
  isVulnDeactivatedIndefinitely: false,
  deactivatedUntilDate: new Date("2024-11-11T01:37:45.757Z"),
  deactivationReason: "<value>",
  deactivatedOnDate: new Date("2024-12-02T00:37:24.524Z"),
  deactivatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `isVulnDeactivatedIndefinitely`                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the vulnerability is deactivated indefinitely.                                        |
| `deactivatedUntilDate`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Date when the vulnerability will be reactivated.                                              |
| `deactivationReason`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Reason for deactivating the vulnerability.                                                    |
| `deactivatedOnDate`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Date when the vulnerability was deactivated.                                                  |
| `deactivatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the user who deactivated the vulnerability.                                     |