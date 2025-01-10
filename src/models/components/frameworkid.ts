/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const FrameworkId = {
  AuE8: "AU_E_8",
  AwsFtr: "AWS_FTR",
  Ccpa: "CCPA",
  CisV8: "CIS_V8",
  Cps234: "CPS_234",
  Dora: "DORA",
  Fedramp: "FEDRAMP",
  Gdpr: "GDPR",
  Hipaa: "HIPAA",
  HitrustE1: "HITRUST_E1",
  Iso27001: "ISO_27001",
  Iso270012022: "ISO_27001_2022",
  Iso27017: "ISO_27017",
  Iso27018: "ISO_27018",
  Iso27701: "ISO_27701",
  Iso42001: "ISO_42001",
  Iso9001: "ISO_9001",
  MsftSspa: "MSFT_SSPA",
  Mvsp: "MVSP",
  Nis2D: "NIS_2D",
  Nist171: "NIST_171",
  Nist53: "NIST_53",
  NistAiRmf: "NIST_AI_RMF",
  NistCsf: "NIST_CSF",
  NistCsf2: "NIST_CSF_2",
  Ofdss: "OFDSS",
  PciSaqA: "PCI_SAQ_A",
  PciSaqAEp: "PCI_SAQ_A_EP",
  PciSaqDMerchant: "PCI_SAQ_D_MERCHANT",
  PciSaqDSp: "PCI_SAQ_D_SP",
  PciDds4: "PCI_DDS_4",
  Soc2: "SOC_2",
  SoxItgc: "SOX_ITGC",
  UkCyberEssentials: "UK_CYBER_ESSENTIALS",
  UsDataPrivacy: "US_DATA_PRIVACY",
} as const;
export type FrameworkId = ClosedEnum<typeof FrameworkId>;

/** @internal */
export const FrameworkId$inboundSchema: z.ZodNativeEnum<typeof FrameworkId> = z
  .nativeEnum(FrameworkId);

/** @internal */
export const FrameworkId$outboundSchema: z.ZodNativeEnum<typeof FrameworkId> =
  FrameworkId$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FrameworkId$ {
  /** @deprecated use `FrameworkId$inboundSchema` instead. */
  export const inboundSchema = FrameworkId$inboundSchema;
  /** @deprecated use `FrameworkId$outboundSchema` instead. */
  export const outboundSchema = FrameworkId$outboundSchema;
}