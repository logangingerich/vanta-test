# TaskSummaryDetails

All detailed information about a person's tasks, split across task categories.

## Example Usage

```typescript
import { TaskSummaryDetails } from "logan-vanta/models/components";

let value: TaskSummaryDetails = {
  completeTrainings: {
    taskType: "COMPLETE_TRAININGS",
    status: "DUE_SOON",
    dueDate: new Date("2023-06-12T08:41:49.943Z"),
    completionDate: new Date("2025-12-12T02:02:24.972Z"),
    disabled: {
      date: new Date("2024-06-08T07:03:09.203Z"),
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
    status: "DUE_SOON",
    dueDate: new Date("2024-12-01T20:41:06.257Z"),
    completionDate: new Date("2024-02-08T23:14:58.127Z"),
    disabled: {
      date: new Date("2023-05-31T01:01:29.087Z"),
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
    status: "NONE",
    dueDate: new Date("2023-07-28T01:45:34.109Z"),
    completionDate: new Date("2024-07-14T09:44:04.261Z"),
    disabled: {
      date: new Date("2023-09-03T20:26:06.468Z"),
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
    status: "COMPLETE",
    dueDate: new Date("2025-08-02T23:05:08.428Z"),
    completionDate: new Date("2025-12-02T07:40:27.262Z"),
    disabled: {
      date: new Date("2025-11-19T01:47:41.445Z"),
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
    status: "NONE",
    dueDate: new Date("2025-04-28T08:32:27.742Z"),
    completionDate: new Date("2024-01-01T03:03:00.284Z"),
    disabled: {
      date: new Date("2023-03-30T21:17:27.464Z"),
      reason: "<value>",
    },
  },
  completeBackgroundChecks: {
    taskType: "COMPLETE_BACKGROUND_CHECKS",
    status: "DUE_SOON",
    dueDate: new Date("2023-09-12T12:41:12.752Z"),
    completionDate: new Date("2023-05-26T04:57:17.080Z"),
    disabled: {
      date: new Date("2023-02-28T13:20:54.923Z"),
      reason: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `completeTrainings`                                                                                                          | [components.CompleteTrainingsTaskSummary](../../models/components/completetrainingstasksummary.md)                           | :heavy_check_mark:                                                                                                           | Task summary for completing all trainings.                                                                                   |
| `acceptPolicies`                                                                                                             | [components.AcceptPoliciesTaskSummary](../../models/components/acceptpoliciestasksummary.md)                                 | :heavy_check_mark:                                                                                                           | Policy acceptance details for a person.                                                                                      |
| `completeCustomTasks`                                                                                                        | [components.CompleteCustomTasksTaskSummary](../../models/components/completecustomtaskstasksummary.md)                       | :heavy_check_mark:                                                                                                           | Task summary for completing all custom tasks.                                                                                |
| `completeOffboardingCustomTasks`                                                                                             | [components.CompleteOffboardingCustomTasksTaskSummary](../../models/components/completeoffboardingcustomtaskstasksummary.md) | :heavy_check_mark:                                                                                                           | Task summary for completing all offboarding custom tasks.                                                                    |
| `installDeviceMonitoring`                                                                                                    | [components.InstallDeviceMonitoringTaskSummary](../../models/components/installdevicemonitoringtasksummary.md)               | :heavy_check_mark:                                                                                                           | Task summary for installing device monitoring.                                                                               |
| `completeBackgroundChecks`                                                                                                   | [components.CompleteBackgroundChecksTaskSummary](../../models/components/completebackgroundcheckstasksummary.md)             | :heavy_check_mark:                                                                                                           | Task summary for completing background checks.                                                                               |