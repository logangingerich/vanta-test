/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const AuditEvidenceType = {
  EvidenceRequest: "Evidence Request",
  Policy: "Policy",
  Test: "Test",
} as const;
export type AuditEvidenceType = ClosedEnum<typeof AuditEvidenceType>;

/** @internal */
export const AuditEvidenceType$inboundSchema: z.ZodNativeEnum<
  typeof AuditEvidenceType
> = z.nativeEnum(AuditEvidenceType);

/** @internal */
export const AuditEvidenceType$outboundSchema: z.ZodNativeEnum<
  typeof AuditEvidenceType
> = AuditEvidenceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuditEvidenceType$ {
  /** @deprecated use `AuditEvidenceType$inboundSchema` instead. */
  export const inboundSchema = AuditEvidenceType$inboundSchema;
  /** @deprecated use `AuditEvidenceType$outboundSchema` instead. */
  export const outboundSchema = AuditEvidenceType$outboundSchema;
}