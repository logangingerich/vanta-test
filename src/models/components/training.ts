/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A person's security training.
 */
export type Training = {
  name: string;
};

/** @internal */
export const Training$inboundSchema: z.ZodType<
  Training,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
});

/** @internal */
export type Training$Outbound = {
  name: string;
};

/** @internal */
export const Training$outboundSchema: z.ZodType<
  Training$Outbound,
  z.ZodTypeDef,
  Training
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Training$ {
  /** @deprecated use `Training$inboundSchema` instead. */
  export const inboundSchema = Training$inboundSchema;
  /** @deprecated use `Training$outboundSchema` instead. */
  export const outboundSchema = Training$outboundSchema;
  /** @deprecated use `Training$Outbound` instead. */
  export type Outbound = Training$Outbound;
}

export function trainingToJSON(training: Training): string {
  return JSON.stringify(Training$outboundSchema.parse(training));
}

export function trainingFromJSON(
  jsonString: string,
): SafeParseResult<Training, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Training$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Training' from JSON`,
  );
}
