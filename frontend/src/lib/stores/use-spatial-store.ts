import { create } from 'zustand';
import { ParcelRiskProfile } from '../types/risk';
import { apiClient, BackendParcel } from '../api-client';

export interface ActiveLayerConfig {
  cadastreVector: boolean;
  droneOrtho: boolean;
  rccmsDisputeHeatmap: boolean;
  encroachmentOverlay: boolean;
  zoningMasterPlan: boolean;
}

export interface LAParty {
  id: string;
  name: string;
  role: string;
  sharePercentage?: number;
  nationalIdMasked: string;
  jurisdiction: string;
}

export interface LARRR {
  id: string;
  type: 'Right' | 'Restriction' | 'Responsibility';
  code: string;
  description: string;
  statutoryReference?: string;
  encumbranceAmount?: string;
  timeSpec?: {
    startDate: string;
  };
}

export interface SpatialUnit {
  surveyNumber: string;
  declaredAreaSqM: number;
  gisCalculatedAreaSqM: number;
  areaDiscrepancyPercentage: number;
  coordinates: [number, number][];
  disputeZones?: [number, number][][];
}

export interface Parcel {
  ulpin: string;
  name: string;
  revenueVillage: string;
  tehsil: string;
  district: string;
  state: string;
  titleStatus: string;
  lastMutationNumber: string;
  tfiScore: number;
  parties: LAParty[];
  rrrs: LARRR[];
  spatialUnits: SpatialUnit[];
  riskProfile: ParcelRiskProfile;
}

export const MOCK_PARCELS: Parcel[] = [
  {
    ulpin: 'DL0701041A0001',
    name: 'Mehrauli Khasra 104/1A',
    revenueVillage: 'Mehrauli',
    tehsil: 'Mehrauli',
    district: 'South Delhi',
    state: 'Delhi (NCT)',
    titleStatus: 'Clear',
    lastMutationNumber: 'DL-MUT-2024-0315',
    tfiScore: 0.125,
    parties: [
      {
        id: 'p-1',
        name: 'Rameshwar Prasad & Brothers',
        role: 'Primary Khatedar (Agricultural)',
        sharePercentage: 100.0,
        nationalIdMasked: 'XXXX-XXXX-4912',
        jurisdiction: 'South Delhi Revenue Tehsil',
      },
    ],
    rrrs: [
      {
        id: 'rrr-1',
        type: 'Right',
        code: 'OWN-FREEHOLD',
        description: 'Bhumidhar with Transferable Rights under Delhi Land Reforms Act 1954.',
        statutoryReference: 'DLRA Sec. 4',
        timeSpec: { startDate: '1992-06-15' },
      },
      {
        id: 'rrr-2',
        type: 'Responsibility',
        code: 'DRAINAGE-SERVITUDE',
        description: 'Maintain unimpeded drainage servitude connecting to Mehrauli storm channel.',
        statutoryReference: 'MCD Drainage By-law 12',
      },
    ],
    spatialUnits: [
      {
        surveyNumber: '104/1A',
        declaredAreaSqM: 19627,
        gisCalculatedAreaSqM: 19600,
        areaDiscrepancyPercentage: 0.14,
        coordinates: [
          [28.523, 77.184],
          [28.523, 77.187],
          [28.526, 77.186],
          [28.525, 77.183],
        ],
      },
    ],
    riskProfile: {
      components: {
        dSpatial: 0.08,
        lRccms: 0.0,
        mGap: 0.12,
        eMortgage: 0.0,
        jEntropy: 0.15,
      },
      recommendation: 'Fast-Track Conclusive Title Guarantee Eligible (Low Fragility)',
      diffeomorphicDiscrepancy: {
        revenueAreaHectares: 1.96,
        droneSurveyAreaHectares: 1.96,
        overlapMismatchPct: 0.14,
        boundaryShiftMaxMeters: 0.2,
        encroachmentDetectedAreaSqm: 0,
      },
      litigationStream: [
        {
          id: 'lit-04',
          caseNumber: 'REV/2024/DL-0044',
          petitioner: 'Rameshwar Prasad',
          respondent: 'Adjacent Plot 104/1B',
          courtName: 'Revenue Court (SDM Mehrauli)',
          currentStatus: 'Disposed',
          filingDate: '2024-01-05',
          hearingDate: '2024-03-15',
          disputeType: 'Boundary Encroachment Review',
          docketSummary: 'Drone survey verification resolved boundary variance of 0.12 acres amicably.',
          forum: 'SDM_Mehrauli_Revenue_Court',
        },
      ],
      mutationHistory: [
        {
          id: 'mut-01',
          mutationNumber: 'DL-MUT-2024-0315',
          date: '2024-03-15',
          transactionType: 'SVAMITVA_Bhu_Aadhaar_Issuance',
          status: 'Approved',
          partiesInvolved: 'Rameshwar Prasad',
          approvalAuthority: 'Sub-Divisional Magistrate Mehrauli',
        },
      ],
    },
  },
  {
    ulpin: 'DL0702183B0002',
    name: 'Najafgarh Khasra 218/3B',
    revenueVillage: 'Najafgarh',
    tehsil: 'Najafgarh',
    district: 'South West Delhi',
    state: 'Delhi (NCT)',
    titleStatus: 'Disputed',
    lastMutationNumber: 'DL-MUT-2021-1104',
    tfiScore: 0.784,
    parties: [
      {
        id: 'p-2',
        name: 'Kishan Lal Yadav',
        role: 'Occupant Khatedar',
        sharePercentage: 65.0,
        nationalIdMasked: 'XXXX-XXXX-8921',
        jurisdiction: 'South West Delhi Tehsil',
      },
      {
        id: 'p-3',
        name: 'Gram Panchayat Najafgarh Common Land Pool',
        role: 'Claimant (Gram Sabha Pasture)',
        sharePercentage: 35.0,
        nationalIdMasked: 'GOV-DL-SWD-002',
        jurisdiction: 'District Collectorate South West Delhi',
      },
    ],
    rrrs: [
      {
        id: 'rrr-3',
        type: 'Right',
        code: 'OWN-DISPUTED',
        description: 'Bhumidhari tenure under challenge before Revenue SDM Court.',
        statutoryReference: 'DLRA Sec. 86A',
        timeSpec: { startDate: '2005-02-10' },
      },
      {
        id: 'rrr-4',
        type: 'Restriction',
        code: 'RCCMS-LIS-PENDENS',
        description: 'Interim Injunction against alienation or commercial conversion pending RCCMS case REV/2026/DL-4912.',
        statutoryReference: 'SDM Court Najafgarh Case 4912/2026',
        timeSpec: { startDate: '2023-04-12' },
      },
    ],
    spatialUnits: [
      {
        surveyNumber: '218/3B',
        declaredAreaSqM: 49371,
        gisCalculatedAreaSqM: 45200,
        areaDiscrepancyPercentage: 8.45,
        coordinates: [
          [28.607, 76.983],
          [28.608, 76.987],
          [28.611, 76.986],
          [28.610, 76.982],
        ],
        disputeZones: [
          [
            [28.608, 76.985],
            [28.610, 76.986],
            [28.609, 76.984],
          ],
        ],
      },
    ],
    riskProfile: {
      components: {
        dSpatial: 0.78,
        lRccms: 0.95,
        mGap: 0.62,
        eMortgage: 0.40,
        jEntropy: 0.72,
      },
      recommendation: 'Mandatory Pre-Mediation & Joint Resurvey with High-Resolution Orthophoto',
      diffeomorphicDiscrepancy: {
        revenueAreaHectares: 4.937,
        droneSurveyAreaHectares: 4.520,
        overlapMismatchPct: 8.45,
        boundaryShiftMaxMeters: 6.2,
        encroachmentDetectedAreaSqm: 4171,
      },
      litigationStream: [
        {
          id: 'lit-01',
          caseNumber: 'REV/2026/DL-4912',
          petitioner: 'Gram Panchayat Najafgarh',
          respondent: 'Kishan Lal Yadav',
          courtName: 'Revenue Court (SDM Najafgarh)',
          currentStatus: 'Active Hearing',
          filingDate: '2023-04-12',
          hearingDate: '2026-09-28',
          disputeType: 'Boundary Encroachment (Gram Sabha)',
          docketSummary: 'Encroachment claim over 2.5 acres of common grazing pasture adjacent to Khasra 218/3B.',
          forum: 'SDM_Revenue_Court_Najafgarh',
        },
      ],
      mutationHistory: [
        {
          id: 'mut-02',
          mutationNumber: 'DL-MUT-2021-1104',
          date: '2021-11-04',
          transactionType: 'Contested_Succession',
          status: 'Under Scrutiny',
          partiesInvolved: 'Yadav Lineage & Gram Sabha',
          approvalAuthority: 'Tehsildar Najafgarh',
        },
      ],
    },
  },
  {
    ulpin: 'DL0700442A0003',
    name: 'Alipur Khasra 44/2',
    revenueVillage: 'Alipur',
    tehsil: 'Alipur',
    district: 'North Delhi',
    state: 'Delhi (NCT)',
    titleStatus: 'Clear',
    lastMutationNumber: 'DL-MUT-2024-0118',
    tfiScore: 0.220,
    parties: [
      {
        id: 'p-4',
        name: 'Sardar Gurpreet Singh Dhillon',
        role: 'Sole Freehold Bhumidhar',
        sharePercentage: 100.0,
        nationalIdMasked: 'XXXX-XXXX-3341',
        jurisdiction: 'North Delhi Revenue Sub-Division',
      },
    ],
    rrrs: [
      {
        id: 'rrr-5',
        type: 'Right',
        code: 'OWN-CLEAR',
        description: 'Clear verified title with computerized RoR linkage under DILRMP.',
        statutoryReference: 'DLRA Sec. 4',
        timeSpec: { startDate: '2016-08-20' },
      },
    ],
    spatialUnits: [
      {
        surveyNumber: '44/2',
        declaredAreaSqM: 25400,
        gisCalculatedAreaSqM: 25350,
        areaDiscrepancyPercentage: 0.20,
        coordinates: [
          [28.800, 77.134],
          [28.802, 77.137],
          [28.803, 77.135],
          [28.801, 77.132],
        ],
      },
    ],
    riskProfile: {
      components: {
        dSpatial: 0.12,
        lRccms: 0.0,
        mGap: 0.15,
        eMortgage: 0.20,
        jEntropy: 0.10,
      },
      recommendation: 'Eligible for State Title Insurance & Kisan Credit Card Fast-Track',
      diffeomorphicDiscrepancy: {
        revenueAreaHectares: 2.54,
        droneSurveyAreaHectares: 2.535,
        overlapMismatchPct: 0.20,
        boundaryShiftMaxMeters: 0.4,
        encroachmentDetectedAreaSqm: 0,
      },
      litigationStream: [],
      mutationHistory: [
        {
          id: 'mut-03',
          mutationNumber: 'DL-MUT-2024-0118',
          date: '2024-01-18',
          transactionType: 'RoR_Spatial_Linkage',
          status: 'Approved',
          partiesInvolved: 'Gurpreet Singh Dhillon',
          approvalAuthority: 'Tehsildar Alipur',
        },
      ],
    },
  },
  {
    ulpin: 'DL0700785C0004',
    name: 'Shahdara Khasra 78/5C',
    revenueVillage: 'Shahdara',
    tehsil: 'Shahdara',
    district: 'East Delhi',
    state: 'Delhi (NCT)',
    titleStatus: 'Under-Mutation',
    lastMutationNumber: 'DL-MUT-2025-1102',
    tfiScore: 0.540,
    parties: [
      {
        id: 'p-5',
        name: 'Savitri Devi Trust & Legal Heirs',
        role: 'Inheritance Successors',
        sharePercentage: 60.0,
        nationalIdMasked: 'XXXX-XXXX-6712',
        jurisdiction: 'East Delhi Revenue Tehsil',
      },
      {
        id: 'p-6',
        name: 'Mukesh Kumar',
        role: 'Objecting Lineage Claimant',
        sharePercentage: 40.0,
        nationalIdMasked: 'XXXX-XXXX-5521',
        jurisdiction: 'East Delhi Revenue Court',
      },
    ],
    rrrs: [
      {
        id: 'rrr-6',
        type: 'Restriction',
        code: 'PROVISIONAL-MUTATION',
        description: 'Mutation entry in Ferfar register held in abeyance pending succession inquiry MUT/2026/DL-1102.',
        statutoryReference: 'Delhi Land Revenue Rules Sec. 34',
        timeSpec: { startDate: '2025-11-20' },
      },
    ],
    spatialUnits: [
      {
        surveyNumber: '78/5C',
        declaredAreaSqM: 14200,
        gisCalculatedAreaSqM: 13950,
        areaDiscrepancyPercentage: 1.76,
        coordinates: [
          [28.671, 77.290],
          [28.673, 77.293],
          [28.674, 77.291],
          [28.672, 77.289],
        ],
      },
    ],
    riskProfile: {
      components: {
        dSpatial: 0.32,
        lRccms: 0.45,
        mGap: 0.65,
        eMortgage: 0.10,
        jEntropy: 0.68,
      },
      recommendation: 'Issue Provisional Notice; Route to Tehsildar Summary Inquest',
      diffeomorphicDiscrepancy: {
        revenueAreaHectares: 1.42,
        droneSurveyAreaHectares: 1.395,
        overlapMismatchPct: 1.76,
        boundaryShiftMaxMeters: 1.1,
        encroachmentDetectedAreaSqm: 250,
      },
      litigationStream: [
        {
          id: 'lit-03',
          caseNumber: 'MUT/2026/DL-1102',
          petitioner: 'Mukesh Kumar',
          respondent: 'Savitri Devi Trust',
          courtName: 'Tehsildar Tribunal Shahdara',
          currentStatus: 'Active',
          filingDate: '2025-11-20',
          hearingDate: '2026-09-22',
          disputeType: 'Succession/Inheritance Contest',
          docketSummary: 'Succession contest following demise of title holder without registered will.',
          forum: 'Tehsildar_Tribunal_Shahdara',
        },
      ],
      mutationHistory: [
        {
          id: 'mut-04',
          mutationNumber: 'DL-MUT-2025-1102',
          date: '2025-11-20',
          transactionType: 'Contested_Succession',
          status: 'Under Scrutiny',
          partiesInvolved: 'Savitri Devi Heirs',
          approvalAuthority: 'Tehsildar Shahdara',
        },
      ],
    },
  },
  {
    ulpin: 'DL0703129A0005',
    name: 'Vasant Kunj Fringe Khasra 312/9',
    revenueVillage: 'Vasant Kunj Fringe',
    tehsil: 'Vasant Vihar',
    district: 'South Delhi',
    state: 'Delhi (NCT)',
    titleStatus: 'Disputed',
    lastMutationNumber: 'DL-MUT-2021-0910',
    tfiScore: 0.891,
    parties: [
      {
        id: 'p-7',
        name: 'Syndicate Realty Corp',
        role: 'Private Developer Developer Claimant',
        sharePercentage: 50.0,
        nationalIdMasked: 'CORP-DL-8821',
        jurisdiction: 'South Delhi Registrar',
      },
      {
        id: 'p-8',
        name: 'Delhi Forest Department',
        role: 'Statutory Ridge Custodian',
        sharePercentage: 50.0,
        nationalIdMasked: 'GOV-DL-ENV-001',
        jurisdiction: 'Delhi Ridge Management Board',
      },
    ],
    rrrs: [
      {
        id: 'rrr-7',
        type: 'Restriction',
        code: 'RIDGE-BUFFER-FREEZE',
        description: 'Eco-sensitive Southern Ridge buffer demarcation freeze ordered by Delhi High Court.',
        statutoryReference: 'Forest (Conservation) Act 1980',
        timeSpec: { startDate: '2021-09-10' },
      },
    ],
    spatialUnits: [
      {
        surveyNumber: '312/9',
        declaredAreaSqM: 32000,
        gisCalculatedAreaSqM: 28400,
        areaDiscrepancyPercentage: 11.25,
        coordinates: [
          [28.517, 77.141],
          [28.520, 77.145],
          [28.519, 77.144],
          [28.516, 77.140],
        ],
        disputeZones: [
          [
            [28.518, 77.142],
            [28.520, 77.145],
            [28.519, 77.143],
          ],
        ],
      },
    ],
    riskProfile: {
      components: {
        dSpatial: 0.89,
        lRccms: 1.0,
        mGap: 0.75,
        eMortgage: 0.65,
        jEntropy: 0.82,
      },
      recommendation: 'Critical Injunction: Freeze All Mutations; Forward to Ridge Oversight Committee',
      diffeomorphicDiscrepancy: {
        revenueAreaHectares: 3.20,
        droneSurveyAreaHectares: 2.84,
        overlapMismatchPct: 11.25,
        boundaryShiftMaxMeters: 8.5,
        encroachmentDetectedAreaSqm: 3600,
      },
      litigationStream: [
        {
          id: 'lit-02',
          caseNumber: 'CIV/2025/DL-8821',
          petitioner: 'Delhi Forest Department',
          respondent: 'Syndicate Realty Corp',
          courtName: 'District Civil Court Saket',
          currentStatus: 'Mediation',
          filingDate: '2021-09-10',
          hearingDate: '2026-10-15',
          disputeType: 'Ridge Buffer Overlap / Gram Sabha',
          docketSummary: 'Title dispute regarding Eco-sensitive Ridge zone boundary overlap with private developer farmhouses.',
          forum: 'District_Civil_Court_Saket',
        },
      ],
      mutationHistory: [
        {
          id: 'mut-05',
          mutationNumber: 'DL-MUT-2021-0910',
          date: '2021-09-10',
          transactionType: 'Injunction_Registration',
          status: 'Freezed',
          partiesInvolved: 'Forest Dept & Developer',
          approvalAuthority: 'Collector of Land Acquisition',
        },
      ],
    },
  },
  {
    ulpin: 'DL0705121A0006',
    name: 'Narela Khasra 512/1',
    revenueVillage: 'Narela',
    tehsil: 'Narela',
    district: 'North Delhi',
    state: 'Delhi (NCT)',
    titleStatus: 'Clear',
    lastMutationNumber: 'DL-MUT-2024-0220',
    tfiScore: 0.150,
    parties: [
      {
        id: 'p-9',
        name: 'Om Prakash & Sons',
        role: 'Primary Agricultural Bhumidhar',
        sharePercentage: 100.0,
        nationalIdMasked: 'XXXX-XXXX-9102',
        jurisdiction: 'Narela Sub-Division',
      },
    ],
    rrrs: [
      {
        id: 'rrr-8',
        type: 'Right',
        code: 'OWN-CLEAR',
        description: 'Verified Bhu-Aadhaar ULPIN registered under SVAMITVA Scheme.',
        statutoryReference: 'DLRA Sec. 4',
        timeSpec: { startDate: '2019-10-14' },
      },
    ],
    spatialUnits: [
      {
        surveyNumber: '512/1',
        declaredAreaSqM: 18500,
        gisCalculatedAreaSqM: 18480,
        areaDiscrepancyPercentage: 0.11,
        coordinates: [
          [28.851, 77.090],
          [28.854, 77.093],
          [28.853, 77.092],
          [28.850, 77.089],
        ],
      },
    ],
    riskProfile: {
      components: {
        dSpatial: 0.05,
        lRccms: 0.0,
        mGap: 0.10,
        eMortgage: 0.05,
        jEntropy: 0.12,
      },
      recommendation: 'Conclusive Title Guarantee Card Issued',
      diffeomorphicDiscrepancy: {
        revenueAreaHectares: 1.85,
        droneSurveyAreaHectares: 1.848,
        overlapMismatchPct: 0.11,
        boundaryShiftMaxMeters: 0.2,
        encroachmentDetectedAreaSqm: 0,
      },
      litigationStream: [],
      mutationHistory: [
        {
          id: 'mut-06',
          mutationNumber: 'DL-MUT-2024-0220',
          date: '2024-02-20',
          transactionType: 'SVAMITVA_Card_Handover',
          status: 'Approved',
          partiesInvolved: 'Om Prakash',
          approvalAuthority: 'Sub-Divisional Magistrate Narela',
        },
      ],
    },
  },
];

export function transformBackendParcel(bp: BackendParcel): Parcel {
  let coords: [number, number][] = [];
  if (bp.geojson_polygon) {
    try {
      const raw = JSON.parse(bp.geojson_polygon);
      if (Array.isArray(raw)) {
        coords = raw.map((pt: any) => {
          // If pt[0] > 50 it's [lng, lat], convert to [lat, lng] for Leaflet
          if (pt[0] > 50) {
            return [pt[1], pt[0]] as [number, number];
          }
          return [pt[0], pt[1]] as [number, number];
        });
      }
    } catch {
      coords = [];
    }
  }

  const lat = bp.lat || 28.6139;
  const lng = bp.lng || 77.2090;

  if (coords.length < 3) {
    const d = 0.0018;
    coords = [
      [lat - d, lng - d],
      [lat - d, lng + d],
      [lat + d, lng + d * 0.8],
      [lat + d * 0.9, lng - d * 0.9],
      [lat - d, lng - d],
    ];
  }

  const ulpin = `DL07${bp.id.toString().padStart(4, '0')}${bp.khasra_no.replace(/[^a-zA-Z0-9]/g, '')}`;
  const isDisputed = bp.title_status === 'Disputed';
  const isMutation = bp.title_status === 'Under-Mutation';
  const isMortgage = bp.title_status === 'Mortgaged';
  const riskScore = bp.dispute_risk_score || 0;
  const tfi = Number((riskScore / 100).toFixed(3));

  return {
    ulpin,
    name: `${bp.village} Khasra ${bp.khasra_no}`,
    revenueVillage: bp.village,
    tehsil: bp.taluka,
    district: bp.district || 'South Delhi',
    state: bp.state || 'Delhi (NCT)',
    titleStatus: bp.title_status,
    lastMutationNumber: bp.last_mutation_date ? `DL-MUT-${bp.last_mutation_date.replace(/-/g, '')}` : `DL-MUT-2025${bp.id}`,
    tfiScore: tfi,
    parties: [
      {
        id: `p-${bp.id}`,
        name: bp.owner_name,
        role: isDisputed ? 'Contested Co-sharer' : 'Primary Khatedar (Bhumidhar)',
        sharePercentage: 100.0,
        nationalIdMasked: `XXXX-XXXX-${1000 + (bp.id * 173) % 9000}`,
        jurisdiction: `${bp.district || 'Delhi'} Revenue Tehsil`,
      },
    ],
    rrrs: [
      {
        id: `rrr-${bp.id}-1`,
        type: 'Right',
        code: 'OWN-FREEHOLD',
        description: 'Bhumidhar with Transferable Rights under Delhi Land Reforms Act 1954 Sec. 4.',
        statutoryReference: 'DLRA 1954 Sec. 4',
        timeSpec: { startDate: bp.last_mutation_date || '2024-01-01' },
      },
      ...(isDisputed
        ? [
            {
              id: `rrr-${bp.id}-2`,
              type: 'Restriction' as const,
              code: 'LIS-PENDENS',
              description: `Title mutation stay in force under Section 52 Transfer of Property Act (SDM ${bp.taluka} Court).`,
              statutoryReference: 'TPA Sec. 52',
            },
          ]
        : []),
      ...(isMutation
        ? [
            {
              id: `rrr-${bp.id}-3`,
              type: 'Restriction' as const,
              code: 'PENDING-MUTATION',
              description: 'Digital Ferfar mutation verification in process under DL-LADR-2026 rules.',
              statutoryReference: 'DL-LADR-2026 Rule 8',
            },
          ]
        : []),
    ],
    spatialUnits: [
      {
        surveyNumber: bp.khasra_no,
        declaredAreaSqM: Math.round((bp.area_acres || 2.5) * 4046.86),
        gisCalculatedAreaSqM: Math.round((bp.area_acres || 2.5) * 4046.86 * 0.997),
        areaDiscrepancyPercentage: isDisputed ? 2.45 : 0.12,
        coordinates: coords,
      },
    ],
    riskProfile: {
      components: {
        dSpatial: isDisputed ? 0.38 : 0.06,
        lRccms: isDisputed ? 0.44 : 0.0,
        mGap: isMutation ? 0.34 : 0.08,
        eMortgage: isMortgage ? 0.28 : 0.03,
        jEntropy: Number(((riskScore % 30) / 100).toFixed(2)),
      },
      recommendation: isDisputed
        ? 'Mandatory Pre-Litigation Fast-Track Triage (High Fragility)'
        : isMutation
        ? 'Awaiting Sub-Divisional Magistrate Digital Certification'
        : 'Conclusive Title Guarantee Eligible (Low Fragility)',
      diffeomorphicDiscrepancy: {
        revenueAreaHectares: Number(((bp.area_acres || 2.5) * 0.404686).toFixed(2)),
        droneSurveyAreaHectares: Number(((bp.area_acres || 2.5) * 0.404686 * 0.998).toFixed(2)),
        overlapMismatchPct: isDisputed ? 2.45 : 0.12,
        boundaryShiftMaxMeters: isDisputed ? 1.8 : 0.15,
        encroachmentDetectedAreaSqm: isDisputed ? 480 : 0,
      },
      litigationStream: isDisputed
        ? [
            {
              id: `lit-${bp.id}`,
              caseNumber: `REV/2025/DL-${1000 + bp.id}`,
              petitioner: bp.owner_name,
              respondent: 'Gram Sabha / Co-sharers',
              courtName: `Revenue Court (SDM ${bp.taluka})`,
              currentStatus: 'Active',
              filingDate: '2023-05-10',
              hearingDate: '2026-10-15',
              disputeType: 'Boundary Encroachment & Farmland Demarcation Contest',
              docketSummary: `Contested demarcation under Section 28 Delhi Land Revenue Act 1954 for Khasra ${bp.khasra_no}.`,
              forum: `${bp.taluka}_Revenue_Court`,
            },
          ]
        : [],
      mutationHistory: [
        {
          id: `mut-${bp.id}`,
          mutationNumber: bp.last_mutation_date ? `DL-MUT-${bp.last_mutation_date.replace(/-/g, '')}` : `DL-MUT-20250101`,
          date: bp.last_mutation_date || '2025-01-01',
          transactionType: isMutation ? 'Succession_Mutation_Pending' : 'Bhumidhari_Registration',
          status: isMutation ? 'Under-Verification' : 'Approved',
          partiesInvolved: bp.owner_name,
          approvalAuthority: `Sub-Divisional Magistrate ${bp.taluka}`,
        },
      ],
    },
  };
}

interface SpatialState {
  parcels: Parcel[];
  isLoadingParcels: boolean;
  parcelsError: string | null;
  fetchParcelsFromBackend: () => Promise<void>;
  selectedUlpin: string | null;
  setSelectedUlpin: (ulpin: string | null) => void;
  hoveredUlpin: string | null;
  setHoveredUlpin: (ulpin: string | null) => void;
  activeLayers: ActiveLayerConfig;
  toggleLayer: (key: keyof ActiveLayerConfig) => void;
  mapCenter: [number, number];
  setMapCenter: (center: [number, number], zoom?: number) => void;
  zoomLevel: number;
  setZoomLevel: (zoom: number) => void;
  isSplitCompareActive: boolean;
  setSplitCompareActive: (active: boolean) => void;
  splitComparePosition: number;
  setSplitComparePosition: (pos: number) => void;
  getSelectedParcel: () => Parcel | undefined;
}

export const useSpatialStore = create<SpatialState>((set, get) => ({
  parcels: MOCK_PARCELS,
  isLoadingParcels: false,
  parcelsError: null,
  fetchParcelsFromBackend: async () => {
    set({ isLoadingParcels: true, parcelsError: null });
    try {
      const res = await apiClient.getParcels();
      if (res.data && Array.isArray(res.data) && res.data.length > 0) {
        const transformed = res.data.map(transformBackendParcel);
        set({
          parcels: transformed,
          isLoadingParcels: false,
          selectedUlpin: transformed[0]?.ulpin || null,
        });
      } else {
        set({ isLoadingParcels: false });
      }
    } catch (err: any) {
      set({ parcelsError: err.message || 'Failed to fetch parcels', isLoadingParcels: false });
    }
  },
  selectedUlpin: 'DL0701041A0001',
  setSelectedUlpin: (ulpin) => set({ selectedUlpin: ulpin }),
  hoveredUlpin: null,
  setHoveredUlpin: (ulpin) => set({ hoveredUlpin: ulpin }),
  activeLayers: {
    cadastreVector: true,
    droneOrtho: true,
    rccmsDisputeHeatmap: true,
    encroachmentOverlay: true,
    zoningMasterPlan: false,
  },
  toggleLayer: (key) =>
    set((state) => ({
      activeLayers: {
        ...state.activeLayers,
        [key]: !state.activeLayers[key],
      },
    })),
  mapCenter: [28.6139, 77.2090], // Delhi NCT
  setMapCenter: (center, zoom) =>
    set((state) => ({
      mapCenter: center,
      ...(zoom ? { zoomLevel: zoom } : {}),
    })),
  zoomLevel: 11,
  setZoomLevel: (zoom) => set({ zoomLevel: zoom }),
  isSplitCompareActive: false,
  setSplitCompareActive: (active) => set({ isSplitCompareActive: active }),
  splitComparePosition: 50,
  setSplitComparePosition: (pos) => set({ splitComparePosition: pos }),
  getSelectedParcel: () => {
    const { parcels, selectedUlpin } = get();
    return parcels.find((p) => p.ulpin === selectedUlpin) || parcels[0];
  },
}));
