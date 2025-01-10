# TasksSummary

The person's tasks summary, which aggregates their current status across
all of their relevant tasks.

## Example Usage

```typescript
import { TasksSummary } from "logan-vanta/models/components";

let value: TasksSummary = {
  details: {
    completeTrainings: {
      taskType: "COMPLETE_TRAININGS",
      status: "NONE",
      dueDate: new Date("2023-08-26T17:15:29.799Z"),
      completionDate: new Date("2024-12-27T17:36:32.596Z"),
      disabled: {
        date: new Date("2023-10-16T14:25:54.471Z"),
        reason: "<value>",
      },
      incompleteTrainings: [
        {
          name: "<value>",
        },
      ],
      completedTrainings: [
        {
          name: "<value>",
        },
      ],
    },
    acceptPolicies: {
      taskType: "ACCEPT_POLICIES",
      status: "COMPLETE",
      dueDate: new Date("2025-04-11T04:23:31.598Z"),
      completionDate: new Date("2023-12-17T17:43:52.087Z"),
      disabled: {
        date: new Date("2024-02-25T06:38:03.380Z"),
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
    },
    completeCustomTasks: {
      taskType: "COMPLETE_CUSTOM_TASKS",
      status: "OVERDUE",
      dueDate: new Date("2025-06-29T19:53:54.840Z"),
      completionDate: new Date("2024-11-20T08:44:18.290Z"),
      disabled: {
        date: new Date("2025-08-14T10:12:10.228Z"),
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
    },
    completeOffboardingCustomTasks: {
      taskType: "COMPLETE_CUSTOM_OFFBOARDING_TASKS",
      status: "DUE_SOON",
      dueDate: new Date("2025-05-24T15:49:26.110Z"),
      completionDate: new Date("2023-07-23T10:58:04.364Z"),
      disabled: {
        date: new Date("2025-11-10T06:13:54.282Z"),
        reason: "<value>",
      },
      incompleteCustomOffboardingTasks: [
        {
          name: "<value>",
        },
      ],
      completedCustomOffboardingTasks: [
        {
          name: "<value>",
        },
      ],
    },
    installDeviceMonitoring: {
      taskType: "INSTALL_DEVICE_MONITORING",
      status: "OVERDUE",
      dueDate: new Date("2023-08-25T04:42:50.179Z"),
      completionDate: new Date("2025-11-04T07:38:09.644Z"),
      disabled: {
        date: new Date("2025-03-12T00:25:52.109Z"),
        reason: "<value>",
      },
    },
    completeBackgroundChecks: {
      taskType: "COMPLETE_BACKGROUND_CHECKS",
      status: "DUE_SOON",
      dueDate: new Date("2023-08-22T18:57:29.709Z"),
      completionDate: new Date("2024-07-21T22:45:05.685Z"),
      disabled: {
        date: new Date("2023-01-29T03:01:55.688Z"),
        reason: "<value>",
      },
    },
  },
  status: "DUE_SOON",
  dueDate: new Date("2024-04-10T10:55:35.652Z"),
  completionDate: new Date("2024-02-15T02:10:01.786Z"),
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | [components.TaskSummaryDetails](../../models/components/tasksummarydetails.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | All detailed information about a person's tasks, split across task categories.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `status`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | [components.TasksSummaryStatus](../../models/components/taskssummarystatus.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | The overall status of a person's outstanding tasks:<br/>- NONE: There are no tasks.<br/>- DUE_SOON: At least one task is due soon.<br/>- OVERDUE: At least one task is overdue. Has a higher priority than DUE_SOON.<br/>- COMPLETE: All tasks are complete.<br/>- PAUSED: All tasks are paused.<br/>- OFFBOARDING_DUE_SOON: At least one offboarding task is due soon.<br/>- OFFBOARDING_OVERDUE: At least one offboarding task is overdue. Has a higher priority than OFFBOARDING_DUE_SOON.<br/>- OFFBOARDING_COMPLETE: All offboarding tasks are complete. |
| `dueDate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | The due date of the person's earliest-due task.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `completionDate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | The date when person's tasks were completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |