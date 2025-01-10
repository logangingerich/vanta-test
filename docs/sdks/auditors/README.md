# Auditors
(*auditors*)

## Overview

### Available Operations

* [createAuditor](#createauditor) - Create an auditor

## createAuditor

Create an auditor in Vanta.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.auditors.createAuditor({
    email: "Cooper59@hotmail.com",
    givenName: "<value>",
    familyName: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LoganVantaCore } from "logan-vanta/core.js";
import { auditorsCreateAuditor } from "logan-vanta/funcs/auditorsCreateAuditor.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditorsCreateAuditor(loganVanta, {
    email: "Cooper59@hotmail.com",
    givenName: "<value>",
    familyName: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AddAuditorInput](../../models/components/addauditorinput.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Auditor](../../models/components/auditor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |