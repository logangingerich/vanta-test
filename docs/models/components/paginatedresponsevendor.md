# PaginatedResponseVendor

## Example Usage

```typescript
import { PaginatedResponseVendor } from "logan-vanta/models/components";

let value: PaginatedResponseVendor = {
  results: {
    data: [
      {
        id: "<id>",
        name: "<value>",
        websiteUrl: "https://ruddy-bandwidth.net/",
        accountManagerName: "<value>",
        accountManagerEmail: "<value>",
        servicesProvided: "<value>",
        additionalNotes: "<value>",
        securityOwnerUserId: "<id>",
        businessOwnerUserId: "<id>",
        contractStartDate: new Date("2025-01-05T00:27:30.681Z"),
        contractRenewalDate: new Date("2023-08-19T13:54:10.391Z"),
        contractTerminationDate: new Date("2023-05-22T07:16:38.400Z"),
        nextSecurityReviewDueDate: new Date("2023-12-12T17:01:38.434Z"),
        lastSecurityReviewCompletionDate: new Date("2024-02-03T15:02:53.228Z"),
        isVisibleToAuditors: false,
        isRiskAutoScored: false,
        riskAttributeIds: [
          "<value>",
        ],
        category: {
          displayName: "Keyon.Yundt20",
        },
        authDetails: {
          passwordMinimumLength: 6531.08,
          passwordRequiresSymbol: false,
          passwordRequiresNumber: false,
          passwordMFA: false,
          method: "GOOGLE_WORKSPACE",
        },
        status: "ARCHIVED",
        inherentRiskLevel: "HIGH",
        residualRiskLevel: "CRITICAL",
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
| `results`                                                                                              | [components.PaginatedResponseVendorResults](../../models/components/paginatedresponsevendorresults.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |