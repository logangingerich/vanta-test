# PaginatedResponseAuditorControlResults

## Example Usage

```typescript
import { PaginatedResponseAuditorControlResults } from "logan-vanta/models/components";

let value: PaginatedResponseAuditorControlResults = {
  data: [
    {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      description:
        "flustered against captain supposing fidget faithfully under",
      source: "Custom",
      domains: [
        "<value>",
      ],
      owner: {
        id: "<id>",
        displayName: "Theodore96",
        emailAddress: "Chandler16@gmail.com",
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.AuditorControl](../../models/components/auditorcontrol.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pageInfo`                                                               | [components.PageInfo](../../models/components/pageinfo.md)               | :heavy_check_mark:                                                       | Provides information about the pagination of a dataset.                  |