# PaginatedResponseVendorResults

## Example Usage

```typescript
import { PaginatedResponseVendorResults } from "logan-vanta/models/components";

let value: PaginatedResponseVendorResults = {
  data: [
    {
      id: "<id>",
      name: "<value>",
      websiteUrl: "https://leading-scaffold.com",
      accountManagerName: "<value>",
      accountManagerEmail: "<value>",
      servicesProvided: "<value>",
      additionalNotes: "<value>",
      securityOwnerUserId: "<id>",
      businessOwnerUserId: "<id>",
      contractStartDate: new Date("2024-12-02T08:28:57.162Z"),
      contractRenewalDate: new Date("2023-06-07T02:45:53.539Z"),
      contractTerminationDate: new Date("2025-11-01T08:34:16.299Z"),
      nextSecurityReviewDueDate: new Date("2024-07-25T22:41:53.719Z"),
      lastSecurityReviewCompletionDate: new Date("2024-03-30T11:16:03.610Z"),
      isVisibleToAuditors: false,
      isRiskAutoScored: false,
      riskAttributeIds: [
        "<value>",
      ],
      category: {
        displayName: "Diego_Klocko",
      },
      authDetails: {
        passwordMinimumLength: 6120.96,
        passwordRequiresSymbol: false,
        passwordRequiresNumber: false,
        passwordMFA: false,
        method: "ONE_LOGIN",
      },
      status: "IN_PROCUREMENT",
      inherentRiskLevel: "MEDIUM",
      residualRiskLevel: "HIGH",
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
| `data`                                                     | [components.Vendor](../../models/components/vendor.md)[]   | :heavy_check_mark:                                         | N/A                                                        |
| `pageInfo`                                                 | [components.PageInfo](../../models/components/pageinfo.md) | :heavy_check_mark:                                         | Provides information about the pagination of a dataset.    |