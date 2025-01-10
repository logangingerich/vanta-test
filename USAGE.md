<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->