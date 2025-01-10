# StatusUpdate

## Example Usage

```typescript
import { StatusUpdate } from "logan-vanta/models/components";

let value: StatusUpdate = {
  auditorEmail: "<value>",
  stateTransition: "MARK_NA",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `auditorEmail`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | Email of the auditor who changed the state                                                           |
| `stateTransition`                                                                                    | [components.AuditorEnabledStateTransition](../../models/components/auditorenabledstatetransition.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |