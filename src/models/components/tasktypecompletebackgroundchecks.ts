/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const TaskTypeCOMPLETEBACKGROUNDCHECKS = {
  CompleteBackgroundChecks: "COMPLETE_BACKGROUND_CHECKS",
} as const;
export type TaskTypeCOMPLETEBACKGROUNDCHECKS = ClosedEnum<
  typeof TaskTypeCOMPLETEBACKGROUNDCHECKS
>;

/** @internal */
export const TaskTypeCOMPLETEBACKGROUNDCHECKS$inboundSchema: z.ZodNativeEnum<
  typeof TaskTypeCOMPLETEBACKGROUNDCHECKS
> = z.nativeEnum(TaskTypeCOMPLETEBACKGROUNDCHECKS);

/** @internal */
export const TaskTypeCOMPLETEBACKGROUNDCHECKS$outboundSchema: z.ZodNativeEnum<
  typeof TaskTypeCOMPLETEBACKGROUNDCHECKS
> = TaskTypeCOMPLETEBACKGROUNDCHECKS$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskTypeCOMPLETEBACKGROUNDCHECKS$ {
  /** @deprecated use `TaskTypeCOMPLETEBACKGROUNDCHECKS$inboundSchema` instead. */
  export const inboundSchema = TaskTypeCOMPLETEBACKGROUNDCHECKS$inboundSchema;
  /** @deprecated use `TaskTypeCOMPLETEBACKGROUNDCHECKS$outboundSchema` instead. */
  export const outboundSchema = TaskTypeCOMPLETEBACKGROUNDCHECKS$outboundSchema;
}
