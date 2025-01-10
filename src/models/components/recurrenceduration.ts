/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const RecurrenceDuration = {
  P0D: "P0D",
  P1D: "P1D",
  P1W: "P1W",
  P1M: "P1M",
  P3M: "P3M",
  P6M: "P6M",
  P1Y: "P1Y",
} as const;
export type RecurrenceDuration = ClosedEnum<typeof RecurrenceDuration>;

/** @internal */
export const RecurrenceDuration$inboundSchema: z.ZodNativeEnum<
  typeof RecurrenceDuration
> = z.nativeEnum(RecurrenceDuration);

/** @internal */
export const RecurrenceDuration$outboundSchema: z.ZodNativeEnum<
  typeof RecurrenceDuration
> = RecurrenceDuration$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecurrenceDuration$ {
  /** @deprecated use `RecurrenceDuration$inboundSchema` instead. */
  export const inboundSchema = RecurrenceDuration$inboundSchema;
  /** @deprecated use `RecurrenceDuration$outboundSchema` instead. */
  export const outboundSchema = RecurrenceDuration$outboundSchema;
}