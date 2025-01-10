# PaginatedResponseEvidenceUrl

## Example Usage

```typescript
import { PaginatedResponseEvidenceUrl } from "logan-vanta/models/components";

let value: PaginatedResponseEvidenceUrl = {
  results: {
    data: [
      {
        id: "<id>",
        url: "https://ajar-solvency.com",
        filename: "example.file",
        isDownloadable: false,
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                        | [components.PaginatedResponseEvidenceUrlResults](../../models/components/paginatedresponseevidenceurlresults.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |