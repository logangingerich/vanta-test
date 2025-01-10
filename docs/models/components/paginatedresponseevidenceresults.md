# PaginatedResponseEvidenceResults

## Example Usage

```typescript
import { PaginatedResponseEvidenceResults } from "logan-vanta/models/components";

let value: PaginatedResponseEvidenceResults = {
  data: [
    {
      id: "<id>",
      externalId: "<id>",
      status: "Initialized",
      name: "<value>",
      deletionDate: new Date("2024-07-12T23:28:59.820Z"),
      creationDate: new Date("2024-08-10T15:36:46.154Z"),
      statusUpdatedDate: new Date("2025-01-16T19:20:54.956Z"),
      testStatus: "<value>",
      evidenceType: "Evidence Request",
      evidenceId: "<id>",
      relatedControls: [
        {
          name: "<value>",
          sectionNames: [
            "<value>",
          ],
        },
      ],
      description: "suffice good-natured jell untrue",
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [components.Evidence](../../models/components/evidence.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `pageInfo`                                                   | [components.PageInfo](../../models/components/pageinfo.md)   | :heavy_check_mark:                                           | Provides information about the pagination of a dataset.      |