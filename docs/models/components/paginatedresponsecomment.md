# PaginatedResponseComment

## Example Usage

```typescript
import { PaginatedResponseComment } from "logan-vanta/models/components";

let value: PaginatedResponseComment = {
  results: {
    data: [
      {
        id: "<id>",
        auditEvidenceId: "<id>",
        text: "<value>",
        creationDate: new Date("2024-08-28T01:52:01.164Z"),
        modificationDate: new Date("2023-10-25T17:33:15.837Z"),
        deletionDate: new Date("2024-05-14T04:00:10.466Z"),
        email: "Delmer52@yahoo.com",
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                | [components.PaginatedResponseCommentResults](../../models/components/paginatedresponsecommentresults.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |