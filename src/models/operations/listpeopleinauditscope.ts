/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListPeopleInAuditScopeRequest = {
  auditId: string;
  pageSize?: number | undefined;
  pageCursor?: string | undefined;
  /**
   * Filter individuals by those whose tasksSummary status is any of the provided values.
   */
  tasksSummaryStatusMatchesAny?:
    | Array<components.TasksSummaryStatus>
    | undefined;
  /**
   * Requires taskStatusMatchesAny. Includes all people for whom any of the provided taskType values in taskTypeMatchesAny
   *
   * @remarks
   * is any of the provided taskStatus values in taskStatusMatchesAny.
   */
  taskTypeMatchesAny?: Array<components.TaskType> | undefined;
  /**
   * Requires taskTypeMatchesAny. Includes all people for whom any of the provided taskType values in taskTypeMatchesAny
   *
   * @remarks
   * is any of the provided taskStatus values in taskStatusMatchesAny.
   */
  taskStatusMatchesAny?: Array<components.TaskStatus> | undefined;
};

/** @internal */
export const ListPeopleInAuditScopeRequest$inboundSchema: z.ZodType<
  ListPeopleInAuditScopeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  auditId: z.string(),
  pageSize: z.number().int().default(10),
  pageCursor: z.string().optional(),
  tasksSummaryStatusMatchesAny: z.array(
    components.TasksSummaryStatus$inboundSchema,
  ).optional(),
  taskTypeMatchesAny: z.array(components.TaskType$inboundSchema).optional(),
  taskStatusMatchesAny: z.array(components.TaskStatus$inboundSchema).optional(),
});

/** @internal */
export type ListPeopleInAuditScopeRequest$Outbound = {
  auditId: string;
  pageSize: number;
  pageCursor?: string | undefined;
  tasksSummaryStatusMatchesAny?: Array<string> | undefined;
  taskTypeMatchesAny?: Array<string> | undefined;
  taskStatusMatchesAny?: Array<string> | undefined;
};

/** @internal */
export const ListPeopleInAuditScopeRequest$outboundSchema: z.ZodType<
  ListPeopleInAuditScopeRequest$Outbound,
  z.ZodTypeDef,
  ListPeopleInAuditScopeRequest
> = z.object({
  auditId: z.string(),
  pageSize: z.number().int().default(10),
  pageCursor: z.string().optional(),
  tasksSummaryStatusMatchesAny: z.array(
    components.TasksSummaryStatus$outboundSchema,
  ).optional(),
  taskTypeMatchesAny: z.array(components.TaskType$outboundSchema).optional(),
  taskStatusMatchesAny: z.array(components.TaskStatus$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPeopleInAuditScopeRequest$ {
  /** @deprecated use `ListPeopleInAuditScopeRequest$inboundSchema` instead. */
  export const inboundSchema = ListPeopleInAuditScopeRequest$inboundSchema;
  /** @deprecated use `ListPeopleInAuditScopeRequest$outboundSchema` instead. */
  export const outboundSchema = ListPeopleInAuditScopeRequest$outboundSchema;
  /** @deprecated use `ListPeopleInAuditScopeRequest$Outbound` instead. */
  export type Outbound = ListPeopleInAuditScopeRequest$Outbound;
}

export function listPeopleInAuditScopeRequestToJSON(
  listPeopleInAuditScopeRequest: ListPeopleInAuditScopeRequest,
): string {
  return JSON.stringify(
    ListPeopleInAuditScopeRequest$outboundSchema.parse(
      listPeopleInAuditScopeRequest,
    ),
  );
}

export function listPeopleInAuditScopeRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPeopleInAuditScopeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPeopleInAuditScopeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPeopleInAuditScopeRequest' from JSON`,
  );
}