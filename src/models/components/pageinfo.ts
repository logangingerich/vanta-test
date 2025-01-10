/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Provides information about the pagination of a dataset.
 */
export type PageInfo = {
  /**
   * The cursor that points to the end of the current page, or null if there is no such cursor.
   */
  endCursor: string | null;
  /**
   * Indicates if there is another page after the current page.
   */
  hasNextPage: boolean;
  /**
   * Indicates if there is a page before the current page.
   */
  hasPreviousPage: boolean;
  /**
   * The cursor that points to the start of the current page, or null if there is no such cursor.
   */
  startCursor: string | null;
};

/** @internal */
export const PageInfo$inboundSchema: z.ZodType<
  PageInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  endCursor: z.nullable(z.string()),
  hasNextPage: z.boolean(),
  hasPreviousPage: z.boolean(),
  startCursor: z.nullable(z.string()),
});

/** @internal */
export type PageInfo$Outbound = {
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
};

/** @internal */
export const PageInfo$outboundSchema: z.ZodType<
  PageInfo$Outbound,
  z.ZodTypeDef,
  PageInfo
> = z.object({
  endCursor: z.nullable(z.string()),
  hasNextPage: z.boolean(),
  hasPreviousPage: z.boolean(),
  startCursor: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PageInfo$ {
  /** @deprecated use `PageInfo$inboundSchema` instead. */
  export const inboundSchema = PageInfo$inboundSchema;
  /** @deprecated use `PageInfo$outboundSchema` instead. */
  export const outboundSchema = PageInfo$outboundSchema;
  /** @deprecated use `PageInfo$Outbound` instead. */
  export type Outbound = PageInfo$Outbound;
}

export function pageInfoToJSON(pageInfo: PageInfo): string {
  return JSON.stringify(PageInfo$outboundSchema.parse(pageInfo));
}

export function pageInfoFromJSON(
  jsonString: string,
): SafeParseResult<PageInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PageInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PageInfo' from JSON`,
  );
}