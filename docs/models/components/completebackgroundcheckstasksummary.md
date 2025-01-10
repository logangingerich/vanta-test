# CompleteBackgroundChecksTaskSummary

Task summary for completing background checks.

## Example Usage

```typescript
import { CompleteBackgroundChecksTaskSummary } from "logan-vanta/models/components";

let value: CompleteBackgroundChecksTaskSummary = {
  taskType: "COMPLETE_BACKGROUND_CHECKS",
  status: "COMPLETE",
  dueDate: new Date("2025-04-24T13:21:21.631Z"),
  completionDate: new Date("2023-06-11T01:17:04.418Z"),
  disabled: {
    date: new Date("2023-03-29T03:44:55.897Z"),
    reason: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskType`                                                                                                                                                         | [components.TaskTypeCOMPLETEBACKGROUNDCHECKS](../../models/components/tasktypecompletebackgroundchecks.md)                                                         | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `status`                                                                                                                                                           | [components.TaskStatus](../../models/components/taskstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                 | The status of a task.<br/>- COMPLETE: The task has been completed.<br/>- DUE_SOON: The task is due soon.<br/>- OVERDUE: The task is overdue.<br/>- NONE: The task is not assigned. |
| `dueDate`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The due date of the task.                                                                                                                                          |
| `completionDate`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The date the task was completed.                                                                                                                                   |
| `disabled`                                                                                                                                                         | [components.CompleteBackgroundChecksTaskSummaryDisabled](../../models/components/completebackgroundcheckstasksummarydisabled.md)                                   | :heavy_check_mark:                                                                                                                                                 | If the task is disabled, the reason and date when it was disabled.                                                                                                 |