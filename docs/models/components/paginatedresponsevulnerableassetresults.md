# PaginatedResponseVulnerableAssetResults

## Example Usage

```typescript
import { PaginatedResponseVulnerableAssetResults } from "logan-vanta/models/components";

let value: PaginatedResponseVulnerableAssetResults = {
  data: [
    {
      id: "<id>",
      name: "<value>",
      assetType: "SERVERLESS_FUNCTION",
      hasBeenScanned: false,
      imageScanTag: "<value>",
      scanners: [
        {
          resourceId: "<id>",
          integrationId: "<id>",
          imageDigest: "<value>",
          imagePushedAtDate: new Date("2024-04-09T06:02:57.106Z"),
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.VulnerableAsset](../../models/components/vulnerableasset.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageInfo`                                                                 | [components.PageInfo](../../models/components/pageinfo.md)                 | :heavy_check_mark:                                                         | Provides information about the pagination of a dataset.                    |