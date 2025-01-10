/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const VulnSeverityType = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
  Critical: "CRITICAL",
} as const;
export type VulnSeverityType = ClosedEnum<typeof VulnSeverityType>;

/** @internal */
export const VulnSeverityType$inboundSchema: z.ZodNativeEnum<
  typeof VulnSeverityType
> = z.nativeEnum(VulnSeverityType);

/** @internal */
export const VulnSeverityType$outboundSchema: z.ZodNativeEnum<
  typeof VulnSeverityType
> = VulnSeverityType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VulnSeverityType$ {
  /** @deprecated use `VulnSeverityType$inboundSchema` instead. */
  export const inboundSchema = VulnSeverityType$inboundSchema;
  /** @deprecated use `VulnSeverityType$outboundSchema` instead. */
  export const outboundSchema = VulnSeverityType$outboundSchema;
}
