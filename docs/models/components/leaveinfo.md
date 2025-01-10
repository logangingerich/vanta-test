# LeaveInfo

If present, the user's active/upcoming leave. Empty if the user has no active/upcoming leave.

## Example Usage

```typescript
import { LeaveInfo } from "logan-vanta/models/components";

let value: LeaveInfo = {
  startDate: new Date("2024-02-19T00:23:03.771Z"),
  endDate: new Date("2023-07-16T20:17:42.484Z"),
  status: "ACTIVE",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The start of the person's leave.                                                              |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The end of the person's leave. Null endDate implies indefinite leave.                         |
| `status`                                                                                      | [components.LeaveStatus](../../models/components/leavestatus.md)                              | :heavy_check_mark:                                                                            | User can be active or upcoming leave period                                                   |