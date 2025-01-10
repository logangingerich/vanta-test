# PageInfo

Provides information about the pagination of a dataset.

## Example Usage

```typescript
import { PageInfo } from "logan-vanta/models/components";

let value: PageInfo = {
  endCursor: "<value>",
  hasNextPage: false,
  hasPreviousPage: false,
  startCursor: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `endCursor`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The cursor that points to the end of the current page, or null if there is no such cursor.   |
| `hasNextPage`                                                                                | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Indicates if there is another page after the current page.                                   |
| `hasPreviousPage`                                                                            | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Indicates if there is a page before the current page.                                        |
| `startCursor`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | The cursor that points to the start of the current page, or null if there is no such cursor. |