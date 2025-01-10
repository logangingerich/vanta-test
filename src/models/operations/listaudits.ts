/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAuditsRequest = {
  pageSize?: number | undefined;
  pageCursor?: string | undefined;
  /**
   * Includes all audits that have changed since changedSinceDate.
   */
  changedSinceDate?: Date | undefined;
};

/** @internal */
export const ListAuditsRequest$inboundSchema: z.ZodType<
  ListAuditsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  pageSize: z.number().int().default(10),
  pageCursor: z.string().optional(),
  changedSinceDate: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
});

/** @internal */
export type ListAuditsRequest$Outbound = {
  pageSize: number;
  pageCursor?: string | undefined;
  changedSinceDate?: string | undefined;
};

/** @internal */
export const ListAuditsRequest$outboundSchema: z.ZodType<
  ListAuditsRequest$Outbound,
  z.ZodTypeDef,
  ListAuditsRequest
> = z.object({
  pageSize: z.number().int().default(10),
  pageCursor: z.string().optional(),
  changedSinceDate: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAuditsRequest$ {
  /** @deprecated use `ListAuditsRequest$inboundSchema` instead. */
  export const inboundSchema = ListAuditsRequest$inboundSchema;
  /** @deprecated use `ListAuditsRequest$outboundSchema` instead. */
  export const outboundSchema = ListAuditsRequest$outboundSchema;
  /** @deprecated use `ListAuditsRequest$Outbound` instead. */
  export type Outbound = ListAuditsRequest$Outbound;
}

export function listAuditsRequestToJSON(
  listAuditsRequest: ListAuditsRequest,
): string {
  return JSON.stringify(
    ListAuditsRequest$outboundSchema.parse(listAuditsRequest),
  );
}

export function listAuditsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAuditsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAuditsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAuditsRequest' from JSON`,
  );
}