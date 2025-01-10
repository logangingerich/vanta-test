# PaginatedResponseVulnerableAsset

## Example Usage

```typescript
import { PaginatedResponseVulnerableAsset } from "logan-vanta/models/components";

let value: PaginatedResponseVulnerableAsset = {
  results: {
    data: [
      {
        id: "<id>",
        name: "<value>",
        assetType: "CONTAINER",
        hasBeenScanned: false,
        imageScanTag: "<value>",
        scanners: [
          {
            resourceId: "<id>",
            integrationId: "<id>",
            imageDigest: "<value>",
            imagePushedAtDate: new Date("2023-06-29T09:33:02.899Z"),
            imageTags: [
              "<value>",
            ],
            assetTags: [
              {
                key: "<key>",
                value: "<value>",
              },
            ],
            parentAccountOrOrganization: "<value>",
            biosUuid: "<id>",
            ipv4s: [
              "<value>",
            ],
            ipv6s: [
              "<value>",
            ],
            macAddresses: [
              "<value>",
            ],
            hostnames: [
              "<value>",
            ],
            fqdns: [
              "<value>",
            ],
            operatingSystems: [
              "<value>",
            ],
            targetId: "<id>",
          },
        ],
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                                | [components.PaginatedResponseVulnerableAssetResults](../../models/components/paginatedresponsevulnerableassetresults.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |