# VendorRiskLevel

The risk level of a vendor:
- CRITICAL: The vendor has a critical security risk
- HIGH: The vendor has a high security risk
- MEDIUM: The vendor has a medium security risk
- LOW: The vendor has a low security risk
- UNSCORED: The vendor has not been given a risk level

## Example Usage

```typescript
import { VendorRiskLevel } from "logan-vanta/models/components";

let value: VendorRiskLevel = "HIGH";
```

## Values

```typescript
"CRITICAL" | "HIGH" | "LOW" | "MEDIUM" | "UNSCORED"
```