# CompleteCustomTasksTaskSummary

Task summary for completing all custom tasks.

## Example Usage

```typescript
import { CompleteCustomTasksTaskSummary } from "logan-vanta/models/components";

let value: CompleteCustomTasksTaskSummary = {
  taskType: "COMPLETE_CUSTOM_TASKS",
  status: "DUE_SOON",
  dueDate: new Date("2025-01-18T21:01:56.101Z"),
  completionDate: new Date("2025-02-01T09:43:54.200Z"),
  disabled: {
    date: new Date("2023-11-07T17:40:47.066Z"),
    reason: "<value>",
  },
  incompleteCustomTasks: [
    {
      name: "<value>",
    },
  ],
  completedCustomTasks: [
    {
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskType`                                                                                                                                                         | [components.TaskTypeCOMPLETECUSTOMTASKS](../../models/components/tasktypecompletecustomtasks.md)                                                                   | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `status`                                                                                                                                                           | [components.TaskStatus](../../models/components/taskstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                 | The status of a task.<br/>- COMPLETE: The task has been completed.<br/>- DUE_SOON: The task is due soon.<br/>- OVERDUE: The task is overdue.<br/>- NONE: The task is not assigned. |
| `dueDate`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The due date of the task.                                                                                                                                          |
| `completionDate`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The date the task was completed.                                                                                                                                   |
| `disabled`                                                                                                                                                         | [components.CompleteCustomTasksTaskSummaryDisabled](../../models/components/completecustomtaskstasksummarydisabled.md)                                             | :heavy_check_mark:                                                                                                                                                 | If the task is disabled, the reason and date when it was disabled.                                                                                                 |
| `incompleteCustomTasks`                                                                                                                                            | [components.CustomTask](../../models/components/customtask.md)[]                                                                                                   | :heavy_check_mark:                                                                                                                                                 | Incomplete custom tasks that are relevant given a person's requirements.                                                                                           |
| `completedCustomTasks`                                                                                                                                             | [components.CustomTask](../../models/components/customtask.md)[]                                                                                                   | :heavy_check_mark:                                                                                                                                                 | Custom tasks that have been completed and are relevant given a person's current requirements.                                                                      |