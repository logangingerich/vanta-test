# Audits
(*audits*)

## Overview

### Available Operations

* [listAudits](#listaudits) - List audits
* [listVendors](#listvendors) - List of vendors who are in scope for this audit
* [listAuditEvidenceUrls](#listauditevidenceurls) - List audit evidence url
* [listPeopleInAuditScope](#listpeopleinauditscope) - List of people who are in scope for this audit
* [listVulnerabilityRemediationsInAuditScope](#listvulnerabilityremediationsinauditscope) - List vulnerability remediations that are in scope for this audit
* [listAuditEvidence](#listauditevidence) - List audit evidence
* [listAuditComments](#listauditcomments) - List audit comments
* [listAuditControls](#listauditcontrols) - List audit controls
* [createCommentForAuditEvidence](#createcommentforauditevidence) - Create a comment for audit evidence
* [updateAuditEvidence](#updateauditevidence) - Update audit evidence
* [createCustomEvidenceRequest](#createcustomevidencerequest) - Create a custom evidence request for an audit
* [createCustomControl](#createcustomcontrol) - Create a custom control for an audit
* [listVulnerabilities](#listvulnerabilities) - List vulnerabilities within the scope of a given audit
* [getVulnerableAssets](#getvulnerableassets) - List assets associated with vulnerabilities

## listAudits

Returns a paginated list of audits scoped to the audit firm.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.listAudits({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LoganVantaCore } from "logan-vanta/core.js";
import { auditsListAudits } from "logan-vanta/funcs/auditsListAudits.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListAudits(loganVanta, {});

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
| `request`                                                                                                                                                                      | [operations.ListAuditsRequest](../../models/operations/listauditsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAudit](../../models/components/paginatedresponseaudit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listVendors

Returns a list of vendors who are in scope for this audit.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.listVendors({
    auditId: "<id>",
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
import { auditsListVendors } from "logan-vanta/funcs/auditsListVendors.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListVendors(loganVanta, {
    auditId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListVendorsRequest](../../models/operations/listvendorsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseVendor](../../models/components/paginatedresponsevendor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listAuditEvidenceUrls

Returns a paginated list of evidence urls for an audit.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.listAuditEvidenceUrls({
    auditId: "<id>",
    auditEvidenceId: "<id>",
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
import { auditsListAuditEvidenceUrls } from "logan-vanta/funcs/auditsListAuditEvidenceUrls.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListAuditEvidenceUrls(loganVanta, {
    auditId: "<id>",
    auditEvidenceId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListAuditEvidenceUrlsRequest](../../models/operations/listauditevidenceurlsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseEvidenceUrl](../../models/components/paginatedresponseevidenceurl.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listPeopleInAuditScope

Returns a list of people who are in scope for this audit.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.listPeopleInAuditScope({
    auditId: "<id>",
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
import { auditsListPeopleInAuditScope } from "logan-vanta/funcs/auditsListPeopleInAuditScope.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListPeopleInAuditScope(loganVanta, {
    auditId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListPeopleInAuditScopeRequest](../../models/operations/listpeopleinauditscoperequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponsePerson](../../models/components/paginatedresponseperson.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listVulnerabilityRemediationsInAuditScope

List all vulnerability remediations based on selected filters that are in scope for this audit.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.listVulnerabilityRemediationsInAuditScope({
    auditId: "<id>",
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
import { auditsListVulnerabilityRemediationsInAuditScope } from "logan-vanta/funcs/auditsListVulnerabilityRemediationsInAuditScope.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListVulnerabilityRemediationsInAuditScope(loganVanta, {
    auditId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListVulnerabilityRemediationsInAuditScopeRequest](../../models/operations/listvulnerabilityremediationsinauditscoperequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseVulnerabilityRemediation](../../models/components/paginatedresponsevulnerabilityremediation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listAuditEvidence

Returns a paginated list of evidence for an audit.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.listAuditEvidence({
    auditId: "<id>",
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
import { auditsListAuditEvidence } from "logan-vanta/funcs/auditsListAuditEvidence.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListAuditEvidence(loganVanta, {
    auditId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListAuditEvidenceRequest](../../models/operations/listauditevidencerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseEvidence](../../models/components/paginatedresponseevidence.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listAuditComments

Returns a paginated list of comments for an audit.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.listAuditComments({
    auditId: "<id>",
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
import { auditsListAuditComments } from "logan-vanta/funcs/auditsListAuditComments.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListAuditComments(loganVanta, {
    auditId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListAuditCommentsRequest](../../models/operations/listauditcommentsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseComment](../../models/components/paginatedresponsecomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listAuditControls

Returns a paginated list of controls for an audit.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.listAuditControls({
    auditId: "<id>",
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
import { auditsListAuditControls } from "logan-vanta/funcs/auditsListAuditControls.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListAuditControls(loganVanta, {
    auditId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListAuditControlsRequest](../../models/operations/listauditcontrolsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAuditorControl](../../models/components/paginatedresponseauditorcontrol.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCommentForAuditEvidence

Create a comment in Vanta for a piece of evidence.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.createCommentForAuditEvidence({
    auditId: "<id>",
    auditEvidenceId: "<id>",
    addCommentInput: {
      text: "<value>",
      email: "Earnestine28@yahoo.com",
      creationDate: new Date("2024-11-28T04:59:12.710Z"),
    },
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
import { auditsCreateCommentForAuditEvidence } from "logan-vanta/funcs/auditsCreateCommentForAuditEvidence.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsCreateCommentForAuditEvidence(loganVanta, {
    auditId: "<id>",
    auditEvidenceId: "<id>",
    addCommentInput: {
      text: "<value>",
      email: "Earnestine28@yahoo.com",
      creationDate: new Date("2024-11-28T04:59:12.710Z"),
    },
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
| `request`                                                                                                                                                                      | [operations.CreateCommentForAuditEvidenceRequest](../../models/operations/createcommentforauditevidencerequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Comment](../../models/components/comment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateAuditEvidence

Update audit evidence.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.updateAuditEvidence({
    auditId: "<id>",
    auditEvidenceId: "<id>",
    auditEvidenceUpdateInput: {},
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
import { auditsUpdateAuditEvidence } from "logan-vanta/funcs/auditsUpdateAuditEvidence.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsUpdateAuditEvidence(loganVanta, {
    auditId: "<id>",
    auditEvidenceId: "<id>",
    auditEvidenceUpdateInput: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateAuditEvidenceRequest](../../models/operations/updateauditevidencerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Evidence](../../models/components/evidence.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCustomEvidenceRequest

Create a custom evidence request for an audit.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.createCustomEvidenceRequest({
    auditId: "<id>",
    createCustomEvidenceRequestInput: {
      controlIds: [
        "<value>",
      ],
      title: "<value>",
      description: "now whoa while",
      cadence: "P3M",
      reminderWindow: "P0D",
      isRestricted: true,
      auditorEmail: "<value>",
    },
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
import { auditsCreateCustomEvidenceRequest } from "logan-vanta/funcs/auditsCreateCustomEvidenceRequest.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsCreateCustomEvidenceRequest(loganVanta, {
    auditId: "<id>",
    createCustomEvidenceRequestInput: {
      controlIds: [
        "<value>",
      ],
      title: "<value>",
      description: "now whoa while",
      cadence: "P3M",
      reminderWindow: "P0D",
      isRestricted: true,
      auditorEmail: "<value>",
    },
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
| `request`                                                                                                                                                                      | [operations.CreateCustomEvidenceRequestRequest](../../models/operations/createcustomevidencerequestrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomEvidenceRequest](../../models/components/customevidencerequest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCustomControl

Create a custom control for an audit.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.createCustomControl({
    auditId: "<id>",
    createCustomControlInput: {
      externalId: "<id>",
      name: "<value>",
      description: "even keenly afore mmm yearningly ouch tough yearly intent",
      effectiveDate: new Date("2024-07-08T11:52:30.590Z"),
      category: "THREAT_MANAGEMENT",
    },
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
import { auditsCreateCustomControl } from "logan-vanta/funcs/auditsCreateCustomControl.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsCreateCustomControl(loganVanta, {
    auditId: "<id>",
    createCustomControlInput: {
      externalId: "<id>",
      name: "<value>",
      description: "even keenly afore mmm yearningly ouch tough yearly intent",
      effectiveDate: new Date("2024-07-08T11:52:30.590Z"),
      category: "THREAT_MANAGEMENT",
    },
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
| `request`                                                                                                                                                                      | [operations.CreateCustomControlRequest](../../models/operations/createcustomcontrolrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Control](../../models/components/control.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listVulnerabilities

List all vulnerabilities based on selected filters.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.listVulnerabilities({
    auditId: "<id>",
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
import { auditsListVulnerabilities } from "logan-vanta/funcs/auditsListVulnerabilities.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListVulnerabilities(loganVanta, {
    auditId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListVulnerabilitiesRequest](../../models/operations/listvulnerabilitiesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseVulnerability](../../models/components/paginatedresponsevulnerability.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getVulnerableAssets

List assets that Vanta monitors that are associated with vulnerabilities.

### Example Usage

```typescript
import { LoganVanta } from "logan-vanta";

const loganVanta = new LoganVanta({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await loganVanta.audits.getVulnerableAssets({
    auditId: "<id>",
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
import { auditsGetVulnerableAssets } from "logan-vanta/funcs/auditsGetVulnerableAssets.js";

// Use `LoganVantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const loganVanta = new LoganVantaCore({
  bearerAuth: process.env["LOGANVANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetVulnerableAssets(loganVanta, {
    auditId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetVulnerableAssetsRequest](../../models/operations/getvulnerableassetsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseVulnerableAsset](../../models/components/paginatedresponsevulnerableasset.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |