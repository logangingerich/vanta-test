/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Evidence,
  Evidence$inboundSchema,
  Evidence$Outbound,
  Evidence$outboundSchema,
} from "./evidence.js";
import {
  PageInfo,
  PageInfo$inboundSchema,
  PageInfo$Outbound,
  PageInfo$outboundSchema,
} from "./pageinfo.js";

export type PaginatedResponseEvidenceResults = {
  data: Array<Evidence>;
  /**
   * Provides information about the pagination of a dataset.
   */
  pageInfo: PageInfo;
};

export type PaginatedResponseEvidence = {
  results: PaginatedResponseEvidenceResults;
};

/** @internal */
export const PaginatedResponseEvidenceResults$inboundSchema: z.ZodType<
  PaginatedResponseEvidenceResults,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Evidence$inboundSchema),
  pageInfo: PageInfo$inboundSchema,
});

/** @internal */
export type PaginatedResponseEvidenceResults$Outbound = {
  data: Array<Evidence$Outbound>;
  pageInfo: PageInfo$Outbound;
};

/** @internal */
export const PaginatedResponseEvidenceResults$outboundSchema: z.ZodType<
  PaginatedResponseEvidenceResults$Outbound,
  z.ZodTypeDef,
  PaginatedResponseEvidenceResults
> = z.object({
  data: z.array(Evidence$outboundSchema),
  pageInfo: PageInfo$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaginatedResponseEvidenceResults$ {
  /** @deprecated use `PaginatedResponseEvidenceResults$inboundSchema` instead. */
  export const inboundSchema = PaginatedResponseEvidenceResults$inboundSchema;
  /** @deprecated use `PaginatedResponseEvidenceResults$outboundSchema` instead. */
  export const outboundSchema = PaginatedResponseEvidenceResults$outboundSchema;
  /** @deprecated use `PaginatedResponseEvidenceResults$Outbound` instead. */
  export type Outbound = PaginatedResponseEvidenceResults$Outbound;
}

export function paginatedResponseEvidenceResultsToJSON(
  paginatedResponseEvidenceResults: PaginatedResponseEvidenceResults,
): string {
  return JSON.stringify(
    PaginatedResponseEvidenceResults$outboundSchema.parse(
      paginatedResponseEvidenceResults,
    ),
  );
}

export function paginatedResponseEvidenceResultsFromJSON(
  jsonString: string,
): SafeParseResult<PaginatedResponseEvidenceResults, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaginatedResponseEvidenceResults$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaginatedResponseEvidenceResults' from JSON`,
  );
}

/** @internal */
export const PaginatedResponseEvidence$inboundSchema: z.ZodType<
  PaginatedResponseEvidence,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.lazy(() => PaginatedResponseEvidenceResults$inboundSchema),
});

/** @internal */
export type PaginatedResponseEvidence$Outbound = {
  results: PaginatedResponseEvidenceResults$Outbound;
};

/** @internal */
export const PaginatedResponseEvidence$outboundSchema: z.ZodType<
  PaginatedResponseEvidence$Outbound,
  z.ZodTypeDef,
  PaginatedResponseEvidence
> = z.object({
  results: z.lazy(() => PaginatedResponseEvidenceResults$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaginatedResponseEvidence$ {
  /** @deprecated use `PaginatedResponseEvidence$inboundSchema` instead. */
  export const inboundSchema = PaginatedResponseEvidence$inboundSchema;
  /** @deprecated use `PaginatedResponseEvidence$outboundSchema` instead. */
  export const outboundSchema = PaginatedResponseEvidence$outboundSchema;
  /** @deprecated use `PaginatedResponseEvidence$Outbound` instead. */
  export type Outbound = PaginatedResponseEvidence$Outbound;
}

export function paginatedResponseEvidenceToJSON(
  paginatedResponseEvidence: PaginatedResponseEvidence,
): string {
  return JSON.stringify(
    PaginatedResponseEvidence$outboundSchema.parse(paginatedResponseEvidence),
  );
}

export function paginatedResponseEvidenceFromJSON(
  jsonString: string,
): SafeParseResult<PaginatedResponseEvidence, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaginatedResponseEvidence$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaginatedResponseEvidence' from JSON`,
  );
}