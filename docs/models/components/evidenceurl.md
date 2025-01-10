# EvidenceUrl

## Example Usage

```typescript
import { EvidenceUrl } from "logan-vanta/models/components";

let value: EvidenceUrl = {
  id: "<id>",
  url: "https://finished-receptor.org",
  filename: "example.file",
  isDownloadable: false,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | Vanta internal reference to evidence                                                        |
| `url`                                                                                       | *string*                                                                                    | :heavy_check_mark:                                                                          | Pre-signed S3 URL for evidence                                                              |
| `filename`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | File name of evidence                                                                       |
| `isDownloadable`                                                                            | *boolean*                                                                                   | :heavy_check_mark:                                                                          | Set to true if this is a presigned s3 url. Set to false if this is a customer uploaded link |