/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const AuditorEnabledStateTransition = {
  Accept: "ACCEPT",
  MarkApplicable: "MARK_APPLICABLE",
  Flag: "FLAG",
  MarkNa: "MARK_NA",
} as const;
export type AuditorEnabledStateTransition = ClosedEnum<
  typeof AuditorEnabledStateTransition
>;

/** @internal */
export const AuditorEnabledStateTransition$inboundSchema: z.ZodNativeEnum<
  typeof AuditorEnabledStateTransition
> = z.nativeEnum(AuditorEnabledStateTransition);

/** @internal */
export const AuditorEnabledStateTransition$outboundSchema: z.ZodNativeEnum<
  typeof AuditorEnabledStateTransition
> = AuditorEnabledStateTransition$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuditorEnabledStateTransition$ {
  /** @deprecated use `AuditorEnabledStateTransition$inboundSchema` instead. */
  export const inboundSchema = AuditorEnabledStateTransition$inboundSchema;
  /** @deprecated use `AuditorEnabledStateTransition$outboundSchema` instead. */
  export const outboundSchema = AuditorEnabledStateTransition$outboundSchema;
}