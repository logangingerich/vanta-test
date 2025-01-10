# PaginatedResponseEvidence

## Example Usage

```typescript
import { PaginatedResponseEvidence } from "logan-vanta/models/components";

let value: PaginatedResponseEvidence = {
  results: {
    data: [
      {
        id: "<id>",
        externalId: "<id>",
        status: "Not ready for audit",
        name: "<value>",
        deletionDate: new Date("2023-06-24T17:14:16.967Z"),
        creationDate: new Date("2024-11-20T06:32:40.348Z"),
        statusUpdatedDate: new Date("2024-03-12T16:24:53.059Z"),
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
        description: "after drat afore octave wombat though",
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                  | [components.PaginatedResponseEvidenceResults](../../models/components/paginatedresponseevidenceresults.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |