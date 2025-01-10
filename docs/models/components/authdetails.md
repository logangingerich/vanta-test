# AuthDetails

The vendor's authentication details.

## Example Usage

```typescript
import { AuthDetails } from "logan-vanta/models/components";

let value: AuthDetails = {
  passwordMinimumLength: 8379.45,
  passwordRequiresSymbol: false,
  passwordRequiresNumber: false,
  passwordMFA: false,
  method: "AUTH_0",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `passwordMinimumLength`                                                           | *number*                                                                          | :heavy_check_mark:                                                                | Minimum number for chacters required for passwords for this vendor.               |
| `passwordRequiresSymbol`                                                          | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether or not the vendor requires passwords to have a symbol.                    |
| `passwordRequiresNumber`                                                          | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether or not the vendor requires passwords to have a number.                    |
| `passwordMFA`                                                                     | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether or not the vendor requires passwords to have multi factor authentication. |
| `method`                                                                          | [components.Method](../../models/components/method.md)                            | :heavy_check_mark:                                                                | The vendor's authentication method.                                               |