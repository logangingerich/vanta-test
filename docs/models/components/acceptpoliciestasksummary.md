# AcceptPoliciesTaskSummary

Policy acceptance details for a person.

## Example Usage

```typescript
import { AcceptPoliciesTaskSummary } from "logan-vanta/models/components";

let value: AcceptPoliciesTaskSummary = {
  taskType: "ACCEPT_POLICIES",
  status: "COMPLETE",
  dueDate: new Date("2025-05-14T05:54:04.161Z"),
  completionDate: new Date("2023-03-04T07:19:54.489Z"),
  disabled: {
    date: new Date("2025-02-02T21:48:55.607Z"),
    reason: "<value>",
  },
  unacceptedPolicies: [
    {
      name: "<value>",
    },
  ],
  acceptedPolicies: [
    {
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskType`                                                                                                                                                         | [components.TaskTypeACCEPTPOLICIES](../../models/components/tasktypeacceptpolicies.md)                                                                             | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `status`                                                                                                                                                           | [components.TaskStatus](../../models/components/taskstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                 | The status of a task.<br/>- COMPLETE: The task has been completed.<br/>- DUE_SOON: The task is due soon.<br/>- OVERDUE: The task is overdue.<br/>- NONE: The task is not assigned. |
| `dueDate`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The due date of the task.                                                                                                                                          |
| `completionDate`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The date the task was completed.                                                                                                                                   |
| `disabled`                                                                                                                                                         | [components.AcceptPoliciesTaskSummaryDisabled](../../models/components/acceptpoliciestasksummarydisabled.md)                                                       | :heavy_check_mark:                                                                                                                                                 | If the task is disabled, the reason and date when it was disabled.                                                                                                 |
| `unacceptedPolicies`                                                                                                                                               | [components.UnacceptedPolicies](../../models/components/unacceptedpolicies.md)[]                                                                                   | :heavy_check_mark:                                                                                                                                                 | Unaccepted policies that are relevant to the person.                                                                                                               |
| `acceptedPolicies`                                                                                                                                                 | [components.AcceptedPolicies](../../models/components/acceptedpolicies.md)[]                                                                                       | :heavy_check_mark:                                                                                                                                                 | Accepted policies that are relevant to the person.                                                                                                                 |