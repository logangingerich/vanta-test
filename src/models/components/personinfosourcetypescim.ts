/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const PersonInfoSourceTypeSCIM = {
  Scim: "SCIM",
} as const;
export type PersonInfoSourceTypeSCIM = ClosedEnum<
  typeof PersonInfoSourceTypeSCIM
>;

/** @internal */
export const PersonInfoSourceTypeSCIM$inboundSchema: z.ZodNativeEnum<
  typeof PersonInfoSourceTypeSCIM
> = z.nativeEnum(PersonInfoSourceTypeSCIM);

/** @internal */
export const PersonInfoSourceTypeSCIM$outboundSchema: z.ZodNativeEnum<
  typeof PersonInfoSourceTypeSCIM
> = PersonInfoSourceTypeSCIM$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PersonInfoSourceTypeSCIM$ {
  /** @deprecated use `PersonInfoSourceTypeSCIM$inboundSchema` instead. */
  export const inboundSchema = PersonInfoSourceTypeSCIM$inboundSchema;
  /** @deprecated use `PersonInfoSourceTypeSCIM$outboundSchema` instead. */
  export const outboundSchema = PersonInfoSourceTypeSCIM$outboundSchema;
}