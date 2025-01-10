# PaginatedResponsePersonResults

## Example Usage

```typescript
import { PaginatedResponsePersonResults } from "logan-vanta/models/components";

let value: PaginatedResponsePersonResults = {
  data: [
    {
      id: "<id>",
      emailAddress: "Kirk.Marquardt@gmail.com",
      employment: {
        status: "FORMER",
        startDate: new Date("2025-02-05T15:06:10.289Z"),
        jobTitle: "Product Creative Coordinator",
        endDate: new Date("2025-08-23T16:32:18.589Z"),
      },
      leaveInfo: {
        startDate: new Date("2024-09-29T01:48:05.911Z"),
        endDate: new Date("2025-08-24T09:10:01.050Z"),
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
            type: "SCIM",
          },
        },
        emailAddress: {
          integrationId: "<id>",
          resourceId: "<id>",
          type: "INTEGRATION",
        },
      },
      tasksSummary: {
        details: {
          completeTrainings: {
            taskType: "COMPLETE_TRAININGS",
            status: "OVERDUE",
            dueDate: new Date("2024-04-09T13:04:59.510Z"),
            completionDate: new Date("2024-10-26T14:34:01.576Z"),
            disabled: {
              date: new Date("2023-01-22T00:51:28.398Z"),
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
            dueDate: new Date("2024-12-24T13:12:17.029Z"),
            completionDate: new Date("2023-11-14T22:12:04.968Z"),
            disabled: {
              date: new Date("2024-11-08T08:16:40.240Z"),
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
            status: "DUE_SOON",
            dueDate: new Date("2023-05-29T11:30:35.227Z"),
            completionDate: new Date("2023-11-23T22:01:05.887Z"),
            disabled: {
              date: new Date("2024-09-16T16:21:25.240Z"),
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
            status: "OVERDUE",
            dueDate: new Date("2024-09-21T11:03:04.845Z"),
            completionDate: new Date("2024-12-16T21:47:39.716Z"),
            disabled: {
              date: new Date("2024-12-15T16:55:27.891Z"),
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
            dueDate: new Date("2025-09-09T14:45:41.967Z"),
            completionDate: new Date("2024-02-07T20:20:50.747Z"),
            disabled: {
              date: new Date("2024-04-22T16:59:27.579Z"),
              reason: "<value>",
            },
          },
          completeBackgroundChecks: {
            taskType: "COMPLETE_BACKGROUND_CHECKS",
            status: "NONE",
            dueDate: new Date("2025-06-02T14:07:36.077Z"),
            completionDate: new Date("2025-02-10T11:05:07.085Z"),
            disabled: {
              date: new Date("2023-04-20T20:22:04.958Z"),
              reason: "<value>",
            },
          },
        },
        status: "PAUSED",
        dueDate: new Date("2025-02-21T19:24:11.316Z"),
        completionDate: new Date("2025-12-30T17:40:17.979Z"),
      },
    },
  ],
  pageInfo: {
    endCursor: "<value>",
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Person](../../models/components/person.md)[]   | :heavy_check_mark:                                         | N/A                                                        |
| `pageInfo`                                                 | [components.PageInfo](../../models/components/pageinfo.md) | :heavy_check_mark:                                         | Provides information about the pagination of a dataset.    |