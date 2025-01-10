# PaginatedResponseCommentResults

## Example Usage

```typescript
import { PaginatedResponseCommentResults } from "logan-vanta/models/components";

let value: PaginatedResponseCommentResults = {
  data: [
    {
      id: "<id>",
      auditEvidenceId: "<id>",
      text: "<value>",
      creationDate: new Date("2023-05-24T21:26:04.186Z"),
      modificationDate: new Date("2024-10-24T02:42:52.981Z"),
      deletionDate: new Date("2024-02-24T13:22:59.477Z"),
      email: "Viviane_Goodwin@hotmail.com",
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
| `data`                                                     | [components.Comment](../../models/components/comment.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `pageInfo`                                                 | [components.PageInfo](../../models/components/pageinfo.md) | :heavy_check_mark:                                         | Provides information about the pagination of a dataset.    |