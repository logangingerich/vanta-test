/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomTask,
  CustomTask$inboundSchema,
  CustomTask$Outbound,
  CustomTask$outboundSchema,
} from "./customtask.js";
import {
  TaskStatus,
  TaskStatus$inboundSchema,
  TaskStatus$outboundSchema,
} from "./taskstatus.js";
import {
  TaskTypeCOMPLETECUSTOMTASKS,
  TaskTypeCOMPLETECUSTOMTASKS$inboundSchema,
  TaskTypeCOMPLETECUSTOMTASKS$outboundSchema,
} from "./tasktypecompletecustomtasks.js";

/**
 * If the task is disabled, the reason and date when it was disabled.
 */
export type CompleteCustomTasksTaskSummaryDisabled = {
  date: Date;
  reason: string | null;
};

/**
 * Task summary for completing all custom tasks.
 */
export type CompleteCustomTasksTaskSummary = {
  taskType: TaskTypeCOMPLETECUSTOMTASKS;
  /**
   * The status of a task.
   *
   * @remarks
   * - COMPLETE: The task has been completed.
   * - DUE_SOON: The task is due soon.
   * - OVERDUE: The task is overdue.
   * - NONE: The task is not assigned.
   */
  status: TaskStatus;
  /**
   * The due date of the task.
   */
  dueDate: Date | null;
  /**
   * The date the task was completed.
   */
  completionDate: Date | null;
  /**
   * If the task is disabled, the reason and date when it was disabled.
   */
  disabled: CompleteCustomTasksTaskSummaryDisabled | null;
  /**
   * Incomplete custom tasks that are relevant given a person's requirements.
   */
  incompleteCustomTasks: Array<CustomTask>;
  /**
   * Custom tasks that have been completed and are relevant given a person's current requirements.
   */
  completedCustomTasks: Array<CustomTask>;
};

/** @internal */
export const CompleteCustomTasksTaskSummaryDisabled$inboundSchema: z.ZodType<
  CompleteCustomTasksTaskSummaryDisabled,
  z.ZodTypeDef,
  unknown
> = z.object({
  date: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  reason: z.nullable(z.string()),
});

/** @internal */
export type CompleteCustomTasksTaskSummaryDisabled$Outbound = {
  date: string;
  reason: string | null;
};

/** @internal */
export const CompleteCustomTasksTaskSummaryDisabled$outboundSchema: z.ZodType<
  CompleteCustomTasksTaskSummaryDisabled$Outbound,
  z.ZodTypeDef,
  CompleteCustomTasksTaskSummaryDisabled
> = z.object({
  date: z.date().transform(v => v.toISOString()),
  reason: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompleteCustomTasksTaskSummaryDisabled$ {
  /** @deprecated use `CompleteCustomTasksTaskSummaryDisabled$inboundSchema` instead. */
  export const inboundSchema =
    CompleteCustomTasksTaskSummaryDisabled$inboundSchema;
  /** @deprecated use `CompleteCustomTasksTaskSummaryDisabled$outboundSchema` instead. */
  export const outboundSchema =
    CompleteCustomTasksTaskSummaryDisabled$outboundSchema;
  /** @deprecated use `CompleteCustomTasksTaskSummaryDisabled$Outbound` instead. */
  export type Outbound = CompleteCustomTasksTaskSummaryDisabled$Outbound;
}

export function completeCustomTasksTaskSummaryDisabledToJSON(
  completeCustomTasksTaskSummaryDisabled:
    CompleteCustomTasksTaskSummaryDisabled,
): string {
  return JSON.stringify(
    CompleteCustomTasksTaskSummaryDisabled$outboundSchema.parse(
      completeCustomTasksTaskSummaryDisabled,
    ),
  );
}

export function completeCustomTasksTaskSummaryDisabledFromJSON(
  jsonString: string,
): SafeParseResult<CompleteCustomTasksTaskSummaryDisabled, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CompleteCustomTasksTaskSummaryDisabled$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompleteCustomTasksTaskSummaryDisabled' from JSON`,
  );
}

/** @internal */
export const CompleteCustomTasksTaskSummary$inboundSchema: z.ZodType<
  CompleteCustomTasksTaskSummary,
  z.ZodTypeDef,
  unknown
> = z.object({
  taskType: TaskTypeCOMPLETECUSTOMTASKS$inboundSchema,
  status: TaskStatus$inboundSchema,
  dueDate: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  completionDate: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  disabled: z.nullable(
    z.lazy(() => CompleteCustomTasksTaskSummaryDisabled$inboundSchema),
  ),
  incompleteCustomTasks: z.array(CustomTask$inboundSchema),
  completedCustomTasks: z.array(CustomTask$inboundSchema),
});

/** @internal */
export type CompleteCustomTasksTaskSummary$Outbound = {
  taskType: string;
  status: string;
  dueDate: string | null;
  completionDate: string | null;
  disabled: CompleteCustomTasksTaskSummaryDisabled$Outbound | null;
  incompleteCustomTasks: Array<CustomTask$Outbound>;
  completedCustomTasks: Array<CustomTask$Outbound>;
};

/** @internal */
export const CompleteCustomTasksTaskSummary$outboundSchema: z.ZodType<
  CompleteCustomTasksTaskSummary$Outbound,
  z.ZodTypeDef,
  CompleteCustomTasksTaskSummary
> = z.object({
  taskType: TaskTypeCOMPLETECUSTOMTASKS$outboundSchema,
  status: TaskStatus$outboundSchema,
  dueDate: z.nullable(z.date().transform(v => v.toISOString())),
  completionDate: z.nullable(z.date().transform(v => v.toISOString())),
  disabled: z.nullable(
    z.lazy(() => CompleteCustomTasksTaskSummaryDisabled$outboundSchema),
  ),
  incompleteCustomTasks: z.array(CustomTask$outboundSchema),
  completedCustomTasks: z.array(CustomTask$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompleteCustomTasksTaskSummary$ {
  /** @deprecated use `CompleteCustomTasksTaskSummary$inboundSchema` instead. */
  export const inboundSchema = CompleteCustomTasksTaskSummary$inboundSchema;
  /** @deprecated use `CompleteCustomTasksTaskSummary$outboundSchema` instead. */
  export const outboundSchema = CompleteCustomTasksTaskSummary$outboundSchema;
  /** @deprecated use `CompleteCustomTasksTaskSummary$Outbound` instead. */
  export type Outbound = CompleteCustomTasksTaskSummary$Outbound;
}

export function completeCustomTasksTaskSummaryToJSON(
  completeCustomTasksTaskSummary: CompleteCustomTasksTaskSummary,
): string {
  return JSON.stringify(
    CompleteCustomTasksTaskSummary$outboundSchema.parse(
      completeCustomTasksTaskSummary,
    ),
  );
}

export function completeCustomTasksTaskSummaryFromJSON(
  jsonString: string,
): SafeParseResult<CompleteCustomTasksTaskSummary, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompleteCustomTasksTaskSummary$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompleteCustomTasksTaskSummary' from JSON`,
  );
}
