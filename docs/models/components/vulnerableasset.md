# VulnerableAsset

## Example Usage

```typescript
import { VulnerableAsset } from "logan-vanta/models/components";

let value: VulnerableAsset = {
  id: "<id>",
  name: "<value>",
  assetType: "CONTAINER_REPOSITORY",
  hasBeenScanned: false,
  imageScanTag: "<value>",
  scanners: [
    {
      resourceId: "<id>",
      integrationId: "<id>",
      imageDigest: "<value>",
      imagePushedAtDate: new Date("2023-10-16T00:41:24.184Z"),
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
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Unique identifier for the vulnerable asset.                                                                                                                                |
| `name`                                                                                                                                                                     | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Display name of the vulnerable asset.                                                                                                                                      |
| `assetType`                                                                                                                                                                | [components.VulnerableAssetType](../../models/components/vulnerableassettype.md)                                                                                           | :heavy_check_mark:                                                                                                                                                         | VulnerableAssetType describes the types of assets a vulnerability is on.                                                                                                   |
| `hasBeenScanned`                                                                                                                                                           | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the vulnerable asset has been scanned.                                                                                                                             |
| `imageScanTag`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Only relevant for container repositories. This field sets the container image tag that vulnerabilities will be retrieved for. If null, the latest image will be retrieved. |
| `scanners`                                                                                                                                                                 | [components.VulnerableAssetScanner](../../models/components/vulnerableassetscanner.md)[]                                                                                   | :heavy_check_mark:                                                                                                                                                         | The integrations that are scanning this vulnerable asset.                                                                                                                  |