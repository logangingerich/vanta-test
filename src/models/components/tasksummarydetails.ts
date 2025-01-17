/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AcceptPoliciesTaskSummary,
  AcceptPoliciesTaskSummary$inboundSchema,
  AcceptPoliciesTaskSummary$Outbound,
  AcceptPoliciesTaskSummary$outboundSchema,
} from "./acceptpoliciestasksummary.js";
import {
  CompleteBackgroundChecksTaskSummary,
  CompleteBackgroundChecksTaskSummary$inboundSchema,
  CompleteBackgroundChecksTaskSummary$Outbound,
  CompleteBackgroundChecksTaskSummary$outboundSchema,
} from "./completebackgroundcheckstasksummary.js";
import {
  CompleteCustomTasksTaskSummary,
  CompleteCustomTasksTaskSummary$inboundSchema,
  CompleteCustomTasksTaskSummary$Outbound,
  CompleteCustomTasksTaskSummary$outboundSchema,
} from "./completecustomtaskstasksummary.js";
import {
  CompleteOffboardingCustomTasksTaskSummary,
  CompleteOffboardingCustomTasksTaskSummary$inboundSchema,
  CompleteOffboardingCustomTasksTaskSummary$Outbound,
  CompleteOffboardingCustomTasksTaskSummary$outboundSchema,
} from "./completeoffboardingcustomtaskstasksummary.js";
import {
  CompleteTrainingsTaskSummary,
  CompleteTrainingsTaskSummary$inboundSchema,
  CompleteTrainingsTaskSummary$Outbound,
  CompleteTrainingsTaskSummary$outboundSchema,
} from "./completetrainingstasksummary.js";
import {
  InstallDeviceMonitoringTaskSummary,
  InstallDeviceMonitoringTaskSummary$inboundSchema,
  InstallDeviceMonitoringTaskSummary$Outbound,
  InstallDeviceMonitoringTaskSummary$outboundSchema,
} from "./installdevicemonitoringtasksummary.js";

/**
 * All detailed information about a person's tasks, split across task categories.
 */
export type TaskSummaryDetails = {
  /**
   * Task summary for completing all trainings.
   */
  completeTrainings: CompleteTrainingsTaskSummary;
  /**
   * Policy acceptance details for a person.
   */
  acceptPolicies: AcceptPoliciesTaskSummary;
  /**
   * Task summary for completing all custom tasks.
   */
  completeCustomTasks: CompleteCustomTasksTaskSummary;
  /**
   * Task summary for completing all offboarding custom tasks.
   */
  completeOffboardingCustomTasks: CompleteOffboardingCustomTasksTaskSummary;
  /**
   * Task summary for installing device monitoring.
   */
  installDeviceMonitoring: InstallDeviceMonitoringTaskSummary;
  /**
   * Task summary for completing background checks.
   */
  completeBackgroundChecks: CompleteBackgroundChecksTaskSummary;
};

/** @internal */
export const TaskSummaryDetails$inboundSchema: z.ZodType<
  TaskSummaryDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  completeTrainings: CompleteTrainingsTaskSummary$inboundSchema,
  acceptPolicies: AcceptPoliciesTaskSummary$inboundSchema,
  completeCustomTasks: CompleteCustomTasksTaskSummary$inboundSchema,
  completeOffboardingCustomTasks:
    CompleteOffboardingCustomTasksTaskSummary$inboundSchema,
  installDeviceMonitoring: InstallDeviceMonitoringTaskSummary$inboundSchema,
  completeBackgroundChecks: CompleteBackgroundChecksTaskSummary$inboundSchema,
});

/** @internal */
export type TaskSummaryDetails$Outbound = {
  completeTrainings: CompleteTrainingsTaskSummary$Outbound;
  acceptPolicies: AcceptPoliciesTaskSummary$Outbound;
  completeCustomTasks: CompleteCustomTasksTaskSummary$Outbound;
  completeOffboardingCustomTasks:
    CompleteOffboardingCustomTasksTaskSummary$Outbound;
  installDeviceMonitoring: InstallDeviceMonitoringTaskSummary$Outbound;
  completeBackgroundChecks: CompleteBackgroundChecksTaskSummary$Outbound;
};

/** @internal */
export const TaskSummaryDetails$outboundSchema: z.ZodType<
  TaskSummaryDetails$Outbound,
  z.ZodTypeDef,
  TaskSummaryDetails
> = z.object({
  completeTrainings: CompleteTrainingsTaskSummary$outboundSchema,
  acceptPolicies: AcceptPoliciesTaskSummary$outboundSchema,
  completeCustomTasks: CompleteCustomTasksTaskSummary$outboundSchema,
  completeOffboardingCustomTasks:
    CompleteOffboardingCustomTasksTaskSummary$outboundSchema,
  installDeviceMonitoring: InstallDeviceMonitoringTaskSummary$outboundSchema,
  completeBackgroundChecks: CompleteBackgroundChecksTaskSummary$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskSummaryDetails$ {
  /** @deprecated use `TaskSummaryDetails$inboundSchema` instead. */
  export const inboundSchema = TaskSummaryDetails$inboundSchema;
  /** @deprecated use `TaskSummaryDetails$outboundSchema` instead. */
  export const outboundSchema = TaskSummaryDetails$outboundSchema;
  /** @deprecated use `TaskSummaryDetails$Outbound` instead. */
  export type Outbound = TaskSummaryDetails$Outbound;
}

export function taskSummaryDetailsToJSON(
  taskSummaryDetails: TaskSummaryDetails,
): string {
  return JSON.stringify(
    TaskSummaryDetails$outboundSchema.parse(taskSummaryDetails),
  );
}

export function taskSummaryDetailsFromJSON(
  jsonString: string,
): SafeParseResult<TaskSummaryDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaskSummaryDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaskSummaryDetails' from JSON`,
  );
}
