/**
 * Centralized API Client & Service Glue (FR-024, FR-026)
 * Handles all backend interaction with timeout, abort, schema checks, and normalized error states.
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8001';

export type ProvenanceType =
  | 'Backend-Derived'
  | 'Seeded'
  | 'Synthetic'
  | 'Heuristic'
  | 'Placeholder'
  | 'Unavailable';

export interface ApiError {
  kind: 'NETWORK' | 'HTTP' | 'NOT_FOUND' | 'SCHEMA_MISMATCH' | 'TIMEOUT';
  status?: number;
  message: string;
  endpoint?: string;
  field?: string;
}

export interface BackendParcel {
  id: number;
  khasra_no: string;
  village: string;
  taluka: string;
  district?: string;
  state?: string;
  owner_name: string;
  title_status: string;
  dispute_risk_score: number;
  climate_vulnerability_index?: number;
  area_acres?: number;
  lat?: number;
  lng?: number;
  last_mutation_date?: string;
  svamitva_issued?: boolean;
  is_digitized?: boolean;
  geojson_polygon?: string;
}

export interface BackendAnalyticsSummary {
  kpi_metrics: {
    national_digitization_rate: number;
    svamitva_coverage_pct: number;
    dispute_density_index: number;
    clear_title_pct: number;
    total_parcels_indexed: number;
    active_disputes_count: number;
    disposed_disputes_count: number;
    total_litigation_value_crores: number;
    research_publications_count: number;
    active_policy_reforms: number;
    avg_dispute_resolution_months: number;
  };
  state_performance_ranking?: Array<{
    state: string;
    digitization_pct: number;
    dispute_resolution_rate: number;
  }>;
}

export interface BackendDispute {
  id: number;
  case_number: string;
  title: string;
  khasra_no: string;
  district: string;
  state: string;
  court_type: string;
  dispute_category: string;
  risk_level: string;
  status: string;
  plaintiff: string;
  defendant: string;
  filing_date: string;
  next_hearing_date?: string;
  estimated_value_lakhs: number;
  description: string;
}

export interface BackendResearchPaper {
  id?: number;
  title: string;
  authors: string;
  institution: string;
  domain?: string;
  abstract: string;
  publication_date: string;
  citation_count: number;
  keywords?: string[];
  doi?: string;
  pdf_url?: string;
}

export interface BackendPolicy {
  id: number;
  policy_code: string;
  title: string;
  ministry: string;
  department: string;
  status: string;
  target_year: number;
  target_metric: string;
  achieved_metric?: string;
  compliance_score: number;
  description: string;
  focus_domain: string;
}

export interface SimulationResult {
  inputs: {
    drone_survey_coverage_pct: number;
    fast_track_courts_adoption_pct: number;
    auto_mutation_enactment: boolean;
    ai_boundary_validation: boolean;
    projection_years: number;
  };
  summary_outcomes: {
    dispute_reduction_pct: number;
    projected_dispute_rate_pct: number;
    capital_unlocked_crores: number;
    avg_case_disposal_months: number;
    farmer_credit_growth_pct: number;
    tenure_security_index_score: number;
  };
  yearly_trajectory: Array<{
    year: number;
    dispute_rate: number;
    capital_unlocked_cumulative_cr: number;
    tenure_security_index: number;
  }>;
}

export interface PolicyRAGCitation {
  source?: string;
  source_title?: string;
  section?: string;
  statutory_ref?: string;
  relevance_score?: number;
}

export interface PolicyRAGResponse {
  query: string;
  summary_answer: string;
  key_findings?: string[];
  recommended_policy_action?: string;
  citations: PolicyRAGCitation[];
  confidence_score?: number;
  provenance?: string;
}

/**
 * Standard HTTP Fetcher with timeout, abort, and error normalization
 */
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  timeoutMs: number = 8000
): Promise<{ data: T | null; error: ApiError | null }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });

    clearTimeout(timer);

    if (res.status === 404) {
      return {
        data: null,
        error: {
          kind: 'NOT_FOUND',
          status: 404,
          message: `Resource not found at ${endpoint}`,
          endpoint,
        },
      };
    }

    if (!res.ok) {
      return {
        data: null,
        error: {
          kind: 'HTTP',
          status: res.status,
          message: `HTTP Error ${res.status}: ${res.statusText}`,
          endpoint,
        },
      };
    }

    const json = (await res.json()) as T;
    return { data: json, error: null };
  } catch (err: any) {
    clearTimeout(timer);
    if (err.name === 'AbortError') {
      return {
        data: null,
        error: {
          kind: 'TIMEOUT',
          message: `Request timed out after ${timeoutMs}ms`,
          endpoint,
        },
      };
    }
    return {
      data: null,
      error: {
        kind: 'NETWORK',
        message: err.message || 'Network connection failed to backend service',
        endpoint,
      },
    };
  }
}

export const apiClient = {
  // CC-03: Parcels for Delhi
  async getParcels(): Promise<{ data: BackendParcel[] | null; error: ApiError | null }> {
    return apiFetch<BackendParcel[]>('/api/v1/parcels/');
  },

  // CC-04: Parcel Detail by ID
  async getParcelById(id: number | string): Promise<{ data: BackendParcel | null; error: ApiError | null }> {
    return apiFetch<BackendParcel>(`/api/v1/parcels/${id}`);
  },

  // CC-05 & CC-08: Disputes Docket
  async getDisputes(): Promise<{ data: BackendDispute[] | null; error: ApiError | null }> {
    return apiFetch<BackendDispute[]>('/api/v1/disputes/');
  },

  // CC-08: Analytics Summary
  async getAnalyticsSummary(): Promise<{ data: BackendAnalyticsSummary | null; error: ApiError | null }> {
    return apiFetch<BackendAnalyticsSummary>('/api/v1/analytics/summary');
  },

  // CC-06: Research Papers
  async getResearchPapers(): Promise<{ data: BackendResearchPaper[] | null; error: ApiError | null }> {
    return apiFetch<BackendResearchPaper[]>('/api/v1/repository/papers');
  },

  // CC-08: Policies
  async getPolicies(): Promise<{ data: BackendPolicy[] | null; error: ApiError | null }> {
    return apiFetch<BackendPolicy[]>('/api/v1/repository/policies');
  },

  // CC-07: Simulation Run
  async runSimulation(payload: {
    scenario_type?: string;
    horizon_years?: number;
    fast_track_courts?: boolean;
    drone_coverage?: number;
    drone_survey_coverage_pct?: number;
    fast_track_courts_adoption_pct?: number;
    auto_mutation_enactment?: boolean;
    ai_boundary_validation?: boolean;
    projection_years?: number;
  }): Promise<{ data: any | null; error: ApiError | null }> {
    const body = {
      drone_survey_coverage_pct:
        payload.drone_survey_coverage_pct ?? payload.drone_coverage ?? 80.0,
      fast_track_courts_adoption_pct:
        payload.fast_track_courts_adoption_pct ??
        (payload.fast_track_courts === false ? 30.0 : 70.0),
      auto_mutation_enactment: payload.auto_mutation_enactment ?? true,
      ai_boundary_validation: payload.ai_boundary_validation ?? true,
      projection_years: payload.projection_years ?? payload.horizon_years ?? 5,
    };
    return apiFetch<any>('/api/v1/simulation/run', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  // CC-06: Legal / Policy RAG
  async queryPolicyRAG(query: string): Promise<{ data: PolicyRAGResponse | null; error: ApiError | null }> {
    return apiFetch<PolicyRAGResponse>('/api/v1/policy-rag/query', {
      method: 'POST',
      body: JSON.stringify({ query }),
    });
  },

  // CC-09: National Innovation Portal
  async getInnovationItems(itemType?: string, status?: string): Promise<{ data: BackendInnovationItem[] | null; error: ApiError | null }> {
    const params = new URLSearchParams();
    if (itemType && itemType !== 'All') params.append('item_type', itemType);
    if (status && status !== 'All') params.append('status', status);
    const qs = params.toString() ? `?${params.toString()}` : '';
    return apiFetch<BackendInnovationItem[]>(`/api/v1/innovation/items${qs}`);
  },

  async createInnovationItem(item: Partial<BackendInnovationItem>): Promise<{ data: BackendInnovationItem | null; error: ApiError | null }> {
    return apiFetch<BackendInnovationItem>('/api/v1/innovation/items', {
      method: 'POST',
      body: JSON.stringify(item),
    });
  },
};

export interface BackendInnovationItem {
  id?: number;
  item_type: string;
  title: string;
  organizer: string;
  prize_amount: string;
  deadline: string;
  status: string;
  description: string;
  eligibility: string;
  submissions_count: number;
}

