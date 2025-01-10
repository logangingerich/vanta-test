/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  VendorRiskLevel,
  VendorRiskLevel$inboundSchema,
  VendorRiskLevel$outboundSchema,
} from "./vendorrisklevel.js";
import {
  VendorStatus,
  VendorStatus$inboundSchema,
  VendorStatus$outboundSchema,
} from "./vendorstatus.js";

/**
 * The vendor's category.
 */
export type Category = {
  displayName: string;
};

/**
 * The vendor's authentication method.
 */
export const Method = {
  Auth0: "AUTH_0",
  AzureAd: "AZURE_AD",
  GoogleWorkspace: "GOOGLE_WORKSPACE",
  OAuth: "O_AUTH",
  O365: "O365",
  Okta: "OKTA",
  OneLogin: "ONE_LOGIN",
  Owa: "OWA",
  Sso: "SSO",
  UsernamePassword: "USERNAME_PASSWORD",
} as const;
/**
 * The vendor's authentication method.
 */
export type Method = ClosedEnum<typeof Method>;

/**
 * The vendor's authentication details.
 */
export type AuthDetails = {
  /**
   * Minimum number for chacters required for passwords for this vendor.
   */
  passwordMinimumLength: number | null;
  /**
   * Whether or not the vendor requires passwords to have a symbol.
   */
  passwordRequiresSymbol: boolean | null;
  /**
   * Whether or not the vendor requires passwords to have a number.
   */
  passwordRequiresNumber: boolean | null;
  /**
   * Whether or not the vendor requires passwords to have multi factor authentication.
   */
  passwordMFA: boolean | null;
  /**
   * The vendor's authentication method.
   */
  method: Method | null;
};

export type Vendor = {
  /**
   * The vendor's unique ID.
   */
  id: string;
  /**
   * The vendor's display name.
   */
  name: string;
  /**
   * The vendor's website URL.
   */
  websiteUrl: string | null;
  /**
   * The vendor's external account manager name.
   */
  accountManagerName: string | null;
  /**
   * The vendor's external account manager email.
   */
  accountManagerEmail: string | null;
  /**
   * Services provided by the vendor.
   */
  servicesProvided: string | null;
  /**
   * Any additional notes about the vendor
   */
  additionalNotes: string | null;
  /**
   * The vendor's security owner's Vanta user ID.
   */
  securityOwnerUserId: string | null;
  /**
   * The vendor's business owner's Vanta user ID.
   */
  businessOwnerUserId: string | null;
  /**
   * The date the contract with the vendor began.
   */
  contractStartDate: Date | null;
  /**
   * The date the contract with the vendor is up for renewal.
   */
  contractRenewalDate: Date | null;
  /**
   * The date the contract with the vendor was terminated.
   */
  contractTerminationDate: Date | null;
  /**
   * The next due date for a security review.
   */
  nextSecurityReviewDueDate: Date | null;
  /**
   * The most recent date a security review was completed.
   */
  lastSecurityReviewCompletionDate: Date | null;
  /**
   * Whether or not auditors can view this vendor.
   */
  isVisibleToAuditors: boolean | null;
  /**
   * Whether or not the vendor's risk is automatically scored.
   */
  isRiskAutoScored: boolean | null;
  /**
   * The list of risk attribute IDs the vendor has been assigned to.
   */
  riskAttributeIds: Array<string>;
  /**
   * The vendor's category.
   */
  category: Category | null;
  /**
   * The vendor's authentication details.
   */
  authDetails: AuthDetails;
  /**
   * The current state of a vendor:
   *
   * @remarks
   * - MANAGED: The vendor is actively managed.
   * - ARCHIVED: The vendor has been archived
   * - IN_PROCUREMENT: The vendor is in the procurement process
   */
  status: VendorStatus;
  /**
   * The risk level of a vendor:
   *
   * @remarks
   * - CRITICAL: The vendor has a critical security risk
   * - HIGH: The vendor has a high security risk
   * - MEDIUM: The vendor has a medium security risk
   * - LOW: The vendor has a low security risk
   * - UNSCORED: The vendor has not been given a risk level
   */
  inherentRiskLevel: VendorRiskLevel;
  /**
   * The risk level of a vendor:
   *
   * @remarks
   * - CRITICAL: The vendor has a critical security risk
   * - HIGH: The vendor has a high security risk
   * - MEDIUM: The vendor has a medium security risk
   * - LOW: The vendor has a low security risk
   * - UNSCORED: The vendor has not been given a risk level
   */
  residualRiskLevel: VendorRiskLevel;
};

/** @internal */
export const Category$inboundSchema: z.ZodType<
  Category,
  z.ZodTypeDef,
  unknown
> = z.object({
  displayName: z.string(),
});

/** @internal */
export type Category$Outbound = {
  displayName: string;
};

/** @internal */
export const Category$outboundSchema: z.ZodType<
  Category$Outbound,
  z.ZodTypeDef,
  Category
> = z.object({
  displayName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Category$ {
  /** @deprecated use `Category$inboundSchema` instead. */
  export const inboundSchema = Category$inboundSchema;
  /** @deprecated use `Category$outboundSchema` instead. */
  export const outboundSchema = Category$outboundSchema;
  /** @deprecated use `Category$Outbound` instead. */
  export type Outbound = Category$Outbound;
}

export function categoryToJSON(category: Category): string {
  return JSON.stringify(Category$outboundSchema.parse(category));
}

export function categoryFromJSON(
  jsonString: string,
): SafeParseResult<Category, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Category$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Category' from JSON`,
  );
}

/** @internal */
export const Method$inboundSchema: z.ZodNativeEnum<typeof Method> = z
  .nativeEnum(Method);

/** @internal */
export const Method$outboundSchema: z.ZodNativeEnum<typeof Method> =
  Method$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Method$ {
  /** @deprecated use `Method$inboundSchema` instead. */
  export const inboundSchema = Method$inboundSchema;
  /** @deprecated use `Method$outboundSchema` instead. */
  export const outboundSchema = Method$outboundSchema;
}

/** @internal */
export const AuthDetails$inboundSchema: z.ZodType<
  AuthDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  passwordMinimumLength: z.nullable(z.number()),
  passwordRequiresSymbol: z.nullable(z.boolean()),
  passwordRequiresNumber: z.nullable(z.boolean()),
  passwordMFA: z.nullable(z.boolean()),
  method: z.nullable(Method$inboundSchema),
});

/** @internal */
export type AuthDetails$Outbound = {
  passwordMinimumLength: number | null;
  passwordRequiresSymbol: boolean | null;
  passwordRequiresNumber: boolean | null;
  passwordMFA: boolean | null;
  method: string | null;
};

/** @internal */
export const AuthDetails$outboundSchema: z.ZodType<
  AuthDetails$Outbound,
  z.ZodTypeDef,
  AuthDetails
> = z.object({
  passwordMinimumLength: z.nullable(z.number()),
  passwordRequiresSymbol: z.nullable(z.boolean()),
  passwordRequiresNumber: z.nullable(z.boolean()),
  passwordMFA: z.nullable(z.boolean()),
  method: z.nullable(Method$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthDetails$ {
  /** @deprecated use `AuthDetails$inboundSchema` instead. */
  export const inboundSchema = AuthDetails$inboundSchema;
  /** @deprecated use `AuthDetails$outboundSchema` instead. */
  export const outboundSchema = AuthDetails$outboundSchema;
  /** @deprecated use `AuthDetails$Outbound` instead. */
  export type Outbound = AuthDetails$Outbound;
}

export function authDetailsToJSON(authDetails: AuthDetails): string {
  return JSON.stringify(AuthDetails$outboundSchema.parse(authDetails));
}

export function authDetailsFromJSON(
  jsonString: string,
): SafeParseResult<AuthDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuthDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuthDetails' from JSON`,
  );
}

/** @internal */
export const Vendor$inboundSchema: z.ZodType<Vendor, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    name: z.string(),
    websiteUrl: z.nullable(z.string()),
    accountManagerName: z.nullable(z.string()),
    accountManagerEmail: z.nullable(z.string()),
    servicesProvided: z.nullable(z.string()),
    additionalNotes: z.nullable(z.string()),
    securityOwnerUserId: z.nullable(z.string()),
    businessOwnerUserId: z.nullable(z.string()),
    contractStartDate: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ),
    contractRenewalDate: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ),
    contractTerminationDate: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ),
    nextSecurityReviewDueDate: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ),
    lastSecurityReviewCompletionDate: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ),
    isVisibleToAuditors: z.nullable(z.boolean()),
    isRiskAutoScored: z.nullable(z.boolean()),
    riskAttributeIds: z.array(z.string()),
    category: z.nullable(z.lazy(() => Category$inboundSchema)),
    authDetails: z.lazy(() => AuthDetails$inboundSchema),
    status: VendorStatus$inboundSchema,
    inherentRiskLevel: VendorRiskLevel$inboundSchema,
    residualRiskLevel: VendorRiskLevel$inboundSchema,
  });

/** @internal */
export type Vendor$Outbound = {
  id: string;
  name: string;
  websiteUrl: string | null;
  accountManagerName: string | null;
  accountManagerEmail: string | null;
  servicesProvided: string | null;
  additionalNotes: string | null;
  securityOwnerUserId: string | null;
  businessOwnerUserId: string | null;
  contractStartDate: string | null;
  contractRenewalDate: string | null;
  contractTerminationDate: string | null;
  nextSecurityReviewDueDate: string | null;
  lastSecurityReviewCompletionDate: string | null;
  isVisibleToAuditors: boolean | null;
  isRiskAutoScored: boolean | null;
  riskAttributeIds: Array<string>;
  category: Category$Outbound | null;
  authDetails: AuthDetails$Outbound;
  status: string;
  inherentRiskLevel: string;
  residualRiskLevel: string;
};

/** @internal */
export const Vendor$outboundSchema: z.ZodType<
  Vendor$Outbound,
  z.ZodTypeDef,
  Vendor
> = z.object({
  id: z.string(),
  name: z.string(),
  websiteUrl: z.nullable(z.string()),
  accountManagerName: z.nullable(z.string()),
  accountManagerEmail: z.nullable(z.string()),
  servicesProvided: z.nullable(z.string()),
  additionalNotes: z.nullable(z.string()),
  securityOwnerUserId: z.nullable(z.string()),
  businessOwnerUserId: z.nullable(z.string()),
  contractStartDate: z.nullable(z.date().transform(v => v.toISOString())),
  contractRenewalDate: z.nullable(z.date().transform(v => v.toISOString())),
  contractTerminationDate: z.nullable(z.date().transform(v => v.toISOString())),
  nextSecurityReviewDueDate: z.nullable(
    z.date().transform(v => v.toISOString()),
  ),
  lastSecurityReviewCompletionDate: z.nullable(
    z.date().transform(v => v.toISOString()),
  ),
  isVisibleToAuditors: z.nullable(z.boolean()),
  isRiskAutoScored: z.nullable(z.boolean()),
  riskAttributeIds: z.array(z.string()),
  category: z.nullable(z.lazy(() => Category$outboundSchema)),
  authDetails: z.lazy(() => AuthDetails$outboundSchema),
  status: VendorStatus$outboundSchema,
  inherentRiskLevel: VendorRiskLevel$outboundSchema,
  residualRiskLevel: VendorRiskLevel$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Vendor$ {
  /** @deprecated use `Vendor$inboundSchema` instead. */
  export const inboundSchema = Vendor$inboundSchema;
  /** @deprecated use `Vendor$outboundSchema` instead. */
  export const outboundSchema = Vendor$outboundSchema;
  /** @deprecated use `Vendor$Outbound` instead. */
  export type Outbound = Vendor$Outbound;
}

export function vendorToJSON(vendor: Vendor): string {
  return JSON.stringify(Vendor$outboundSchema.parse(vendor));
}

export function vendorFromJSON(
  jsonString: string,
): SafeParseResult<Vendor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Vendor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Vendor' from JSON`,
  );
}
