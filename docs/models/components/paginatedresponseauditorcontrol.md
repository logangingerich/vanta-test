# PaginatedResponseAuditorControl

## Example Usage

```typescript
import { PaginatedResponseAuditorControl } from "logan-vanta/models/components";

let value: PaginatedResponseAuditorControl = {
  results: {
    data: [
      {
        id: "<id>",
        externalId: "<id>",
        name: "<value>",
        description:
          "arraign into defenseless geez burgeon pupil great vice without brace",
        source: "Vanta",
        domains: [
          "<value>",
        ],
        owner: {
          id: "<id>",
          displayName: "Kristian_Cummings",
          emailAddress: "Jacques.Kassulke-Stiedemann@gmail.com",
        },
        customFields: [
          {
            label: "<value>",
            value: "<value>",
          },
        ],
        framework: "<value>",
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                              | [components.PaginatedResponseAuditorControlResults](../../models/components/paginatedresponseauditorcontrolresults.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |