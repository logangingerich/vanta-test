/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { auditsCreateCommentForAuditEvidence } from "../funcs/auditsCreateCommentForAuditEvidence.js";
import { auditsCreateCustomControl } from "../funcs/auditsCreateCustomControl.js";
import { auditsCreateCustomEvidenceRequest } from "../funcs/auditsCreateCustomEvidenceRequest.js";
import { auditsGetVulnerableAssets } from "../funcs/auditsGetVulnerableAssets.js";
import { auditsListAuditComments } from "../funcs/auditsListAuditComments.js";
import { auditsListAuditControls } from "../funcs/auditsListAuditControls.js";
import { auditsListAuditEvidence } from "../funcs/auditsListAuditEvidence.js";
import { auditsListAuditEvidenceUrls } from "../funcs/auditsListAuditEvidenceUrls.js";
import { auditsListAudits } from "../funcs/auditsListAudits.js";
import { auditsListPeopleInAuditScope } from "../funcs/auditsListPeopleInAuditScope.js";
import { auditsListVendors } from "../funcs/auditsListVendors.js";
import { auditsListVulnerabilities } from "../funcs/auditsListVulnerabilities.js";
import { auditsListVulnerabilityRemediationsInAuditScope } from "../funcs/auditsListVulnerabilityRemediationsInAuditScope.js";
import { auditsUpdateAuditEvidence } from "../funcs/auditsUpdateAuditEvidence.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Audits extends ClientSDK {
  /**
   * List audits
   *
   * @remarks
   * Returns a paginated list of audits scoped to the audit firm.
   */
  async listAudits(
    request: operations.ListAuditsRequest,
    options?: RequestOptions,
  ): Promise<components.PaginatedResponseAudit> {
    return unwrapAsync(auditsListAudits(
      this,
      request,
      options,
    ));
  }

  /**
   * List of vendors who are in scope for this audit
   *
   * @remarks
   * Returns a list of vendors who are in scope for this audit.
   */
  async listVendors(
    request: operations.ListVendorsRequest,
    options?: RequestOptions,
  ): Promise<components.PaginatedResponseVendor> {
    return unwrapAsync(auditsListVendors(
      this,
      request,
      options,
    ));
  }

  /**
   * List audit evidence url
   *
   * @remarks
   * Returns a paginated list of evidence urls for an audit.
   */
  async listAuditEvidenceUrls(
    request: operations.ListAuditEvidenceUrlsRequest,
    options?: RequestOptions,
  ): Promise<components.PaginatedResponseEvidenceUrl> {
    return unwrapAsync(auditsListAuditEvidenceUrls(
      this,
      request,
      options,
    ));
  }

  /**
   * List of people who are in scope for this audit
   *
   * @remarks
   * Returns a list of people who are in scope for this audit.
   */
  async listPeopleInAuditScope(
    request: operations.ListPeopleInAuditScopeRequest,
    options?: RequestOptions,
  ): Promise<components.PaginatedResponsePerson> {
    return unwrapAsync(auditsListPeopleInAuditScope(
      this,
      request,
      options,
    ));
  }

  /**
   * List vulnerability remediations that are in scope for this audit
   *
   * @remarks
   * List all vulnerability remediations based on selected filters that are in scope for this audit.
   */
  async listVulnerabilityRemediationsInAuditScope(
    request: operations.ListVulnerabilityRemediationsInAuditScopeRequest,
    options?: RequestOptions,
  ): Promise<components.PaginatedResponseVulnerabilityRemediation> {
    return unwrapAsync(auditsListVulnerabilityRemediationsInAuditScope(
      this,
      request,
      options,
    ));
  }

  /**
   * List audit evidence
   *
   * @remarks
   * Returns a paginated list of evidence for an audit.
   */
  async listAuditEvidence(
    request: operations.ListAuditEvidenceRequest,
    options?: RequestOptions,
  ): Promise<components.PaginatedResponseEvidence> {
    return unwrapAsync(auditsListAuditEvidence(
      this,
      request,
      options,
    ));
  }

  /**
   * List audit comments
   *
   * @remarks
   * Returns a paginated list of comments for an audit.
   */
  async listAuditComments(
    request: operations.ListAuditCommentsRequest,
    options?: RequestOptions,
  ): Promise<components.PaginatedResponseComment> {
    return unwrapAsync(auditsListAuditComments(
      this,
      request,
      options,
    ));
  }

  /**
   * List audit controls
   *
   * @remarks
   * Returns a paginated list of controls for an audit.
   */
  async listAuditControls(
    request: operations.ListAuditControlsRequest,
    options?: RequestOptions,
  ): Promise<components.PaginatedResponseAuditorControl> {
    return unwrapAsync(auditsListAuditControls(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a comment for audit evidence
   *
   * @remarks
   * Create a comment in Vanta for a piece of evidence.
   */
  async createCommentForAuditEvidence(
    request: operations.CreateCommentForAuditEvidenceRequest,
    options?: RequestOptions,
  ): Promise<components.Comment> {
    return unwrapAsync(auditsCreateCommentForAuditEvidence(
      this,
      request,
      options,
    ));
  }

  /**
   * Update audit evidence
   *
   * @remarks
   * Update audit evidence.
   */
  async updateAuditEvidence(
    request: operations.UpdateAuditEvidenceRequest,
    options?: RequestOptions,
  ): Promise<components.Evidence> {
    return unwrapAsync(auditsUpdateAuditEvidence(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a custom evidence request for an audit
   *
   * @remarks
   * Create a custom evidence request for an audit.
   */
  async createCustomEvidenceRequest(
    request: operations.CreateCustomEvidenceRequestRequest,
    options?: RequestOptions,
  ): Promise<components.CustomEvidenceRequest> {
    return unwrapAsync(auditsCreateCustomEvidenceRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a custom control for an audit
   *
   * @remarks
   * Create a custom control for an audit.
   */
  async createCustomControl(
    request: operations.CreateCustomControlRequest,
    options?: RequestOptions,
  ): Promise<components.Control> {
    return unwrapAsync(auditsCreateCustomControl(
      this,
      request,
      options,
    ));
  }

  /**
   * List vulnerabilities within the scope of a given audit
   *
   * @remarks
   * List all vulnerabilities based on selected filters.
   */
  async listVulnerabilities(
    request: operations.ListVulnerabilitiesRequest,
    options?: RequestOptions,
  ): Promise<components.PaginatedResponseVulnerability> {
    return unwrapAsync(auditsListVulnerabilities(
      this,
      request,
      options,
    ));
  }

  /**
   * List assets associated with vulnerabilities
   *
   * @remarks
   * List assets that Vanta monitors that are associated with vulnerabilities.
   */
  async getVulnerableAssets(
    request: operations.GetVulnerableAssetsRequest,
    options?: RequestOptions,
  ): Promise<components.PaginatedResponseVulnerableAsset> {
    return unwrapAsync(auditsGetVulnerableAssets(
      this,
      request,
      options,
    ));
  }
}
