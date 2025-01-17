/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PageInfo,
  PageInfo$inboundSchema,
  PageInfo$Outbound,
  PageInfo$outboundSchema,
} from "./pageinfo.js";
import {
  VulnerableAsset,
  VulnerableAsset$inboundSchema,
  VulnerableAsset$Outbound,
  VulnerableAsset$outboundSchema,
} from "./vulnerableasset.js";

export type PaginatedResponseVulnerableAssetResults = {
  data: Array<VulnerableAsset>;
  /**
   * Provides information about the pagination of a dataset.
   */
  pageInfo: PageInfo;
};

export type PaginatedResponseVulnerableAsset = {
  results: PaginatedResponseVulnerableAssetResults;
};

/** @internal */
export const PaginatedResponseVulnerableAssetResults$inboundSchema: z.ZodType<
  PaginatedResponseVulnerableAssetResults,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(VulnerableAsset$inboundSchema),
  pageInfo: PageInfo$inboundSchema,
});

/** @internal */
export type PaginatedResponseVulnerableAssetResults$Outbound = {
  data: Array<VulnerableAsset$Outbound>;
  pageInfo: PageInfo$Outbound;
};

/** @internal */
export const PaginatedResponseVulnerableAssetResults$outboundSchema: z.ZodType<
  PaginatedResponseVulnerableAssetResults$Outbound,
  z.ZodTypeDef,
  PaginatedResponseVulnerableAssetResults
> = z.object({
  data: z.array(VulnerableAsset$outboundSchema),
  pageInfo: PageInfo$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaginatedResponseVulnerableAssetResults$ {
  /** @deprecated use `PaginatedResponseVulnerableAssetResults$inboundSchema` instead. */
  export const inboundSchema =
    PaginatedResponseVulnerableAssetResults$inboundSchema;
  /** @deprecated use `PaginatedResponseVulnerableAssetResults$outboundSchema` instead. */
  export const outboundSchema =
    PaginatedResponseVulnerableAssetResults$outboundSchema;
  /** @deprecated use `PaginatedResponseVulnerableAssetResults$Outbound` instead. */
  export type Outbound = PaginatedResponseVulnerableAssetResults$Outbound;
}

export function paginatedResponseVulnerableAssetResultsToJSON(
  paginatedResponseVulnerableAssetResults:
    PaginatedResponseVulnerableAssetResults,
): string {
  return JSON.stringify(
    PaginatedResponseVulnerableAssetResults$outboundSchema.parse(
      paginatedResponseVulnerableAssetResults,
    ),
  );
}

export function paginatedResponseVulnerableAssetResultsFromJSON(
  jsonString: string,
): SafeParseResult<
  PaginatedResponseVulnerableAssetResults,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PaginatedResponseVulnerableAssetResults$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PaginatedResponseVulnerableAssetResults' from JSON`,
  );
}

/** @internal */
export const PaginatedResponseVulnerableAsset$inboundSchema: z.ZodType<
  PaginatedResponseVulnerableAsset,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.lazy(() => PaginatedResponseVulnerableAssetResults$inboundSchema),
});

/** @internal */
export type PaginatedResponseVulnerableAsset$Outbound = {
  results: PaginatedResponseVulnerableAssetResults$Outbound;
};

/** @internal */
export const PaginatedResponseVulnerableAsset$outboundSchema: z.ZodType<
  PaginatedResponseVulnerableAsset$Outbound,
  z.ZodTypeDef,
  PaginatedResponseVulnerableAsset
> = z.object({
  results: z.lazy(() => PaginatedResponseVulnerableAssetResults$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaginatedResponseVulnerableAsset$ {
  /** @deprecated use `PaginatedResponseVulnerableAsset$inboundSchema` instead. */
  export const inboundSchema = PaginatedResponseVulnerableAsset$inboundSchema;
  /** @deprecated use `PaginatedResponseVulnerableAsset$outboundSchema` instead. */
  export const outboundSchema = PaginatedResponseVulnerableAsset$outboundSchema;
  /** @deprecated use `PaginatedResponseVulnerableAsset$Outbound` instead. */
  export type Outbound = PaginatedResponseVulnerableAsset$Outbound;
}

export function paginatedResponseVulnerableAssetToJSON(
  paginatedResponseVulnerableAsset: PaginatedResponseVulnerableAsset,
): string {
  return JSON.stringify(
    PaginatedResponseVulnerableAsset$outboundSchema.parse(
      paginatedResponseVulnerableAsset,
    ),
  );
}

export function paginatedResponseVulnerableAssetFromJSON(
  jsonString: string,
): SafeParseResult<PaginatedResponseVulnerableAsset, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaginatedResponseVulnerableAsset$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaginatedResponseVulnerableAsset' from JSON`,
  );
}
