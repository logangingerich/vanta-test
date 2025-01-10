# Evidence

## Example Usage

```typescript
import { Evidence } from "logan-vanta/models/components";

let value: Evidence = {
  id: "<id>",
  externalId: "<id>",
  status: "NA",
  name: "<value>",
  deletionDate: new Date("2024-04-09T19:14:12.306Z"),
  creationDate: new Date("2024-08-30T22:30:29.229Z"),
  statusUpdatedDate: new Date("2023-11-11T14:36:11.448Z"),
  testStatus: "<value>",
  evidenceType: "Test",
  evidenceId: "<id>",
  relatedControls: [
    {
      name: "<value>",
      sectionNames: [
        "<value>",
      ],
    },
  ],
  description: "thoroughly boo dress gratefully wasteful however",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Vanta internal reference to evidence                                                          |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | This is a static UUID to map Audit Firm controls to Vanta controls                            |
| `status`                                                                                      | [components.AuditEvidenceState](../../models/components/auditevidencestate.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Mutable name for evidence. Not guaranteed to be unique.                                       |
| `deletionDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this Audit Evidence was deleted                                                      |
| `creationDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this Audit Evidence was created                                                      |
| `statusUpdatedDate`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Point in time that status was last updated                                                    |
| `testStatus`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The outcome of the automated test run, for Test-type evidence                                 |
| `evidenceType`                                                                                | [components.AuditEvidenceType](../../models/components/auditevidencetype.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evidenceId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for evidence                                                                |
| `relatedControls`                                                                             | [components.EvidenceControl](../../models/components/evidencecontrol.md)[]                    | :heavy_check_mark:                                                                            | The controls associated to this evidence                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description for the evidence. It will be set to null if the evidence is deleted           |