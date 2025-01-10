# Role

The GDPR role of the control, which specifies whether the data is being "collected" or "processed". See the GdprRole enum for possible values.
This field should only be included for controls that are to be mapped to the GDPR framework.

## Example Usage

```typescript
import { Role } from "logan-vanta/models/components";

let value: Role = "PROCESSOR";
```

## Values

```typescript
"BOTH" | "CONTROLLER" | "PROCESSOR"
```