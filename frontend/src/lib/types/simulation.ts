export type SimulationHorizon = 3 | 5 | 10 | 15;

export interface TransitionMatrixRow {
  fromCategory: string;
  toAgri: number;
  toForest: number;
  toUrban: number;
  toIndustrial: number;
  toBarren: number;
}

export interface LandUseShift {
  category: string;
  currentSqKm?: number;
  projectedSqKm?: number;
  deltaPercent: number;
  simulatedShare?: number;
  baselineShare?: number;
}

export interface EconometricProjectionPoint {
  year: number;
  baselineLitigationRate: number;
  simulatedLitigationRate: number;
  formalCreditVolumeCr: number;
  disputeResolutionSpeedDays: number;
}

export interface CausalEffect {
  metricName: string;
  economicInterpretation: string;
  tauEstimate: number;
  pVal: number;
  timeSeriesProjected: Array<{
    year: number | string;
    treated: number;
    baseline: number;
  }>;
}

export interface SimulationScenario {
  id: string;
  name: string;
  description: string;
  horizonYears: SimulationHorizon;
  landUseShifts: LandUseShift[];
  inertiaMatrix: TransitionMatrixRow[];
  projectedLitigationReductionPct: number;
  projectedCreditAccessIncreaseCr: number;
  projections: EconometricProjectionPoint[];
  causalEffects?: CausalEffect[];
}
