# Person

## Example Usage

```typescript
import { Person } from "logan-vanta/models/components";

let value: Person = {
  id: "<id>",
  emailAddress: "Drew.Stracke51@yahoo.com",
  employment: {
    status: "INACTIVE",
    startDate: new Date("2024-03-10T01:57:15.921Z"),
    jobTitle: "Global Directives Liaison",
    endDate: new Date("2024-06-18T21:49:56.662Z"),
  },
  leaveInfo: {
    startDate: new Date("2024-01-25T18:02:14.843Z"),
    endDate: new Date("2025-10-27T17:07:18.797Z"),
    status: "UPCOMING",
  },
  groupIds: [
    "<value>",
  ],
  name: {
    first: "<value>",
    last: "<value>",
    display: "<value>",
  },
  sources: {
    employment: {
      endDate: {
        integrationId: "<id>",
        resourceId: "<id>",
        type: "INTEGRATION",
      },
      startDate: {
        integrationId: "<id>",
        resourceId: "<id>",
        type: "INTEGRATION",
      },
    },
    emailAddress: {
      type: "VANTA",
    },
  },
  tasksSummary: {
    details: {
      completeTrainings: {
        taskType: "COMPLETE_TRAININGS",
        status: "OVERDUE",
        dueDate: new Date("2024-10-02T14:03:30.664Z"),
        completionDate: new Date("2025-11-20T06:46:28.205Z"),
        disabled: {
          date: new Date("2023-11-17T04:38:54.761Z"),
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
        dueDate: new Date("2023-04-20T22:07:54.686Z"),
        completionDate: new Date("2023-01-19T00:09:53.916Z"),
        disabled: {
          date: new Date("2025-10-15T18:20:20.936Z"),
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
        dueDate: new Date("2025-05-10T12:39:43.913Z"),
        completionDate: new Date("2023-11-05T18:37:43.326Z"),
        disabled: {
          date: new Date("2024-10-04T16:55:58.841Z"),
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
        dueDate: new Date("2024-06-16T05:56:53.820Z"),
        completionDate: new Date("2025-12-07T08:01:55.761Z"),
        disabled: {
          date: new Date("2025-08-18T15:35:38.302Z"),
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
        status: "DUE_SOON",
        dueDate: new Date("2025-11-19T21:08:28.843Z"),
        completionDate: new Date("2023-09-11T22:40:46.497Z"),
        disabled: {
          date: new Date("2025-11-06T10:52:56.298Z"),
          reason: "<value>",
        },
      },
      completeBackgroundChecks: {
        taskType: "COMPLETE_BACKGROUND_CHECKS",
        status: "NONE",
        dueDate: new Date("2025-05-25T22:13:29.488Z"),
        completionDate: new Date("2024-11-21T23:18:09.113Z"),
        disabled: {
          date: new Date("2025-08-16T05:16:14.427Z"),
          reason: "<value>",
        },
      },
    },
    status: "NONE",
    dueDate: new Date("2025-07-19T10:36:40.605Z"),
    completionDate: new Date("2024-11-08T04:37:42.615Z"),
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `emailAddress`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `employment`                                                                                                                                 | [components.Employment](../../models/components/employment.md)                                                                               | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `leaveInfo`                                                                                                                                  | [components.LeaveInfo](../../models/components/leaveinfo.md)                                                                                 | :heavy_check_mark:                                                                                                                           | If present, the user's active/upcoming leave. Empty if the user has no active/upcoming leave.                                                |
| `groupIds`                                                                                                                                   | *string*[]                                                                                                                                   | :heavy_check_mark:                                                                                                                           | The id of each group the user belongs to. This includes both manually created groups in Vanta and groups imported from an identity provider. |
| `name`                                                                                                                                       | [components.Name](../../models/components/name.md)                                                                                           | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `sources`                                                                                                                                    | [components.Sources](../../models/components/sources.md)                                                                                     | :heavy_check_mark:                                                                                                                           | The sources of the person's information.                                                                                                     |
| `tasksSummary`                                                                                                                               | [components.TasksSummary](../../models/components/taskssummary.md)                                                                           | :heavy_check_mark:                                                                                                                           | The person's tasks summary, which aggregates their current status across<br/>all of their relevant tasks.                                    |