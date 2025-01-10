# TasksSummaryStatus

The overall status of a person's outstanding tasks:
- NONE: There are no tasks.
- DUE_SOON: At least one task is due soon.
- OVERDUE: At least one task is overdue. Has a higher priority than DUE_SOON.
- COMPLETE: All tasks are complete.
- PAUSED: All tasks are paused.
- OFFBOARDING_DUE_SOON: At least one offboarding task is due soon.
- OFFBOARDING_OVERDUE: At least one offboarding task is overdue. Has a higher priority than OFFBOARDING_DUE_SOON.
- OFFBOARDING_COMPLETE: All offboarding tasks are complete.

## Example Usage

```typescript
import { TasksSummaryStatus } from "logan-vanta/models/components";

let value: TasksSummaryStatus = "COMPLETE";
```

## Values

```typescript
"COMPLETE" | "DUE_SOON" | "NONE" | "OFFBOARDING_COMPLETE" | "OFFBOARDING_DUE_SOON" | "OFFBOARDING_OVERDUE" | "OVERDUE" | "PAUSED"
```