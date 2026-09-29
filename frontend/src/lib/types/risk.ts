export interface TFIWeights {
  wSpatial: number;
  wRccms: number;
  wMutGap: number;
  wMortgage: number;
  wEntropy: number;
}

export interface TFIComponents {
  dSpatial: number;
  lRccms: number;
  mGap: number;
  eMortgage: number;
  jEntropy: number;
}

export interface DiffeomorphicDiscrepancy {
  revenueAreaHectares: number;
  droneSurveyAreaHectares: number;
  overlapMismatchPct: number;
  boundaryShiftMaxMeters: number;
  encroachmentDetectedAreaSqm: number;
}

export interface LitigationRecord {
  id: string;
  caseNumber: string;
  petitioner: string;
  respondent: string;
  courtName?: string;
  currentStatus: string;
  filingDate: string;
  hearingDate?: string;
  disputeType?: string;
  docketSummary?: string;
  forum: string;
}

export interface MutationRecord {
  id: string;
  mutationNumber: string;
  date: string;
  transactionType: string;
  status: string;
  partiesInvolved?: string;
  approvalAuthority?: string;
}

export interface ParcelRiskProfile {
  components: TFIComponents;
  recommendation: string;
  diffeomorphicDiscrepancy: DiffeomorphicDiscrepancy;
  litigationStream: LitigationRecord[];
  mutationHistory: MutationRecord[];
}
