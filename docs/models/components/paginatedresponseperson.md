# PaginatedResponsePerson

## Example Usage

```typescript
import { PaginatedResponsePerson } from "logan-vanta/models/components";

let value: PaginatedResponsePerson = {
  results: {
    data: [
      {
        id: "<id>",
        emailAddress: "Sanford84@gmail.com",
        employment: {
          status: "ON_LEAVE",
          startDate: new Date("2024-03-22T06:32:58.021Z"),
          jobTitle: "Senior Quality Architect",
          endDate: new Date("2025-03-02T08:57:01.759Z"),
        },
        leaveInfo: {
          startDate: new Date("2025-08-07T13:19:14.525Z"),
          endDate: new Date("2025-12-05T04:07:03.604Z"),
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
              type: "VANTA",
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
              status: "COMPLETE",
              dueDate: new Date("2024-07-25T01:20:48.803Z"),
              completionDate: new Date("2023-03-01T13:18:23.203Z"),
              disabled: {
                date: new Date("2023-08-08T04:42:30.927Z"),
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
              dueDate: new Date("2025-05-19T21:25:27.801Z"),
              completionDate: new Date("2023-09-03T10:06:53.981Z"),
              disabled: {
                date: new Date("2024-01-14T12:07:50.192Z"),
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
              dueDate: new Date("2025-02-11T00:54:59.142Z"),
              completionDate: new Date("2023-02-04T21:29:28.328Z"),
              disabled: {
                date: new Date("2023-06-30T12:06:54.333Z"),
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
              dueDate: new Date("2024-09-24T15:25:14.861Z"),
              completionDate: new Date("2023-09-18T17:31:57.984Z"),
              disabled: {
                date: new Date("2025-10-20T21:33:54.006Z"),
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
              dueDate: new Date("2024-08-10T01:17:06.903Z"),
              completionDate: new Date("2024-10-08T12:59:31.265Z"),
              disabled: {
                date: new Date("2025-03-11T05:07:47.512Z"),
                reason: "<value>",
              },
            },
            completeBackgroundChecks: {
              taskType: "COMPLETE_BACKGROUND_CHECKS",
              status: "DUE_SOON",
              dueDate: new Date("2024-03-12T10:48:24.554Z"),
              completionDate: new Date("2023-08-18T23:43:47.903Z"),
              disabled: {
                date: new Date("2023-07-24T01:37:14.976Z"),
                reason: "<value>",
              },
            },
          },
          status: "PAUSED",
          dueDate: new Date("2025-03-21T13:08:38.807Z"),
          completionDate: new Date("2024-06-21T13:01:42.607Z"),
        },
      },
    ],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `results`                                                                                              | [components.PaginatedResponsePersonResults](../../models/components/paginatedresponsepersonresults.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |