/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AddAuditorInput = {
  /**
   * Email of the new user.
   */
  email: string;
  /**
   * First name of the new user.
   */
  givenName: string;
  /**
   * Last name of the new user.
   */
  familyName: string;
};

/** @internal */
export const AddAuditorInput$inboundSchema: z.ZodType<
  AddAuditorInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string(),
  givenName: z.string(),
  familyName: z.string(),
});

/** @internal */
export type AddAuditorInput$Outbound = {
  email: string;
  givenName: string;
  familyName: string;
};

/** @internal */
export const AddAuditorInput$outboundSchema: z.ZodType<
  AddAuditorInput$Outbound,
  z.ZodTypeDef,
  AddAuditorInput
> = z.object({
  email: z.string(),
  givenName: z.string(),
  familyName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddAuditorInput$ {
  /** @deprecated use `AddAuditorInput$inboundSchema` instead. */
  export const inboundSchema = AddAuditorInput$inboundSchema;
  /** @deprecated use `AddAuditorInput$outboundSchema` instead. */
  export const outboundSchema = AddAuditorInput$outboundSchema;
  /** @deprecated use `AddAuditorInput$Outbound` instead. */
  export type Outbound = AddAuditorInput$Outbound;
}

export function addAuditorInputToJSON(
  addAuditorInput: AddAuditorInput,
): string {
  return JSON.stringify(AddAuditorInput$outboundSchema.parse(addAuditorInput));
}

export function addAuditorInputFromJSON(
  jsonString: string,
): SafeParseResult<AddAuditorInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddAuditorInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddAuditorInput' from JSON`,
  );
}