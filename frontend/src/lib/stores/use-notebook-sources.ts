import { create } from 'zustand';
import { NotebookSource, NotebookSourceChunk, SourceModality } from '../types/sources';

const INITIAL_SOURCES: NotebookSource[] = [
  {
    id: 'src-01',
    name: 'Delhi Land Reforms Act, 1954 (Act No. VIII of 1954)',
    modality: 'statute',
    geographicScope: {
      state: 'Delhi (NCT)',
      district: 'All Districts',
      tehsil: 'All Tehsils',
    },
    fileSize: '3.8 MB',
    tokenCount: 64000,
    selected: true,
    metadata: {
      sourceAuthority: 'Department of Revenue, Govt of NCT of Delhi',
      ingestionTimestamp: '2026-01-10T10:00:00Z',
      description: 'Primary substantive statutory code regulating Bhumidhari tenure, Asami rights, ceiling, and revenue court adjudication in NCT of Delhi.',
    },
    chunks: [
      {
        id: 'chk-01',
        sourceId: 'src-01',
        title: 'Section 4 - Bhumidhari Transferable Title Rights',
        preview: 'Every person who has been admitted to tenancy or holds agricultural land in Delhi under Section 4 shall have permanent, heritable, and transferable Bhumidhari rights.',
        tokenAllocation: 350,
        pageOrClause: 'DLRA Sec. 4(1)',
      },
      {
        id: 'chk-02',
        sourceId: 'src-01',
        title: 'Section 28 - Automated e-Mutation and Boundary Demarcation',
        preview: 'The Tehsildar shall enter in the digital Khatauni register every transfer reported under electronic registration, dispatching field survey alerts for discrepancy.',
        tokenAllocation: 420,
        pageOrClause: 'DLRA Sec. 28(2)',
      },
    ],
  },
  {
    id: 'src-02',
    name: 'Mehrauli Khasra 104/1A Digital RoR Record (Khatauni Extract)',
    modality: 'textual_ror',
    geographicScope: {
      state: 'Delhi (NCT)',
      district: 'South Delhi',
      tehsil: 'Mehrauli',
    },
    fileSize: '480 KB',
    tokenCount: 14200,
    selected: true,
    metadata: {
      sourceAuthority: 'Delhi Revenue Department (Revenue Sub-Division Mehrauli)',
      ingestionTimestamp: '2026-02-14T08:30:00Z',
      description: 'Digitally signed computerized Khatauni for Khasra 104/1A showing recorded Khatedar, declared area (1.96 Ha), and clear title mutation.',
    },
    chunks: [
      {
        id: 'chk-03',
        sourceId: 'src-02',
        title: 'Khatauni Extract - Rameshwar Prasad & Brothers',
        preview: 'Bhumidhar with Transferable Rights: Rameshwar Prasad & Co-sharers (1.9627 Ha). Mutation DL-MUT-2024-0315 confirmed post-SVAMITVA drone demarcation.',
        tokenAllocation: 280,
        pageOrClause: 'Delhi Khatauni Form II',
      },
    ],
  },
  {
    id: 'src-03',
    name: 'Delhi NCT Cadastral Vector Mesh (GeoPackage EPSG:4326)',
    modality: 'cadastre',
    geographicScope: {
      state: 'Delhi (NCT)',
      district: 'All 11 Districts',
      tehsil: 'All Tehsils',
    },
    fileSize: '24.2 MB',
    featureCount: 55,
    tokenCount: 26000,
    selected: true,
    metadata: {
      sourceAuthority: 'Survey of India & Geospatial Delhi Limited (GSDL)',
      ingestionTimestamp: '2026-03-01T11:15:00Z',
      crs: 'EPSG:4326',
      description: 'High-resolution cadastral vector boundaries cross-referenced with Bhu-Aadhaar 14-digit ULPIN codes across all Delhi revenue villages.',
    },
    chunks: [
      {
        id: 'chk-04',
        sourceId: 'src-03',
        title: 'Cadastral Boundary Polygon Khasra 104/1A (Declared 19,627 sq.m)',
        preview: 'Closed 5-vertex vector polygon matching Mehrauli revenue village map with 0.14% geometric variance against 5cm drone orthophoto.',
        tokenAllocation: 190,
        pageOrClause: 'FeatureID: DL_MEH_104_1A',
      },
    ],
  },
  {
    id: 'src-04',
    name: 'Delhi RCCMS Revenue Court Docket REV/2024/DL-0044',
    modality: 'litigation',
    geographicScope: {
      state: 'Delhi (NCT)',
      district: 'South Delhi',
      tehsil: 'Mehrauli',
    },
    fileSize: '1.4 MB',
    tokenCount: 24500,
    selected: true,
    metadata: {
      sourceAuthority: 'Delhi Revenue Court Case Management System (RCCMS)',
      ingestionTimestamp: '2026-02-28T14:45:00Z',
      description: 'Litigation docket from Sub-Divisional Magistrate Mehrauli Revenue Court regarding pre-litigation boundary reconciliation under DLRA Section 28.',
    },
    chunks: [
      {
        id: 'chk-05',
        sourceId: 'src-04',
        title: 'SDO Interlocutory Order on Demarcation Verification',
        preview: 'Court directs District Inspector of Land Records (DILR) to conduct joint survey with Drone Orthophoto comparison within 30 days and submit report.',
        tokenAllocation: 310,
        pageOrClause: 'Order Sheet Paras 4-8',
      },
    ],
  },
];

interface NotebookSourcesState {
  sources: NotebookSource[];
  selectedCount: number;
  totalTokens: number;
  activeChunk: NotebookSourceChunk | null;
  filterModality: SourceModality | null;
  toggleSourceSelection: (id: string) => void;
  selectAllSources: (select: boolean) => void;
  setActiveChunk: (chunk: NotebookSourceChunk | null) => void;
  addSource: (source: Omit<NotebookSource, 'id'>) => void;
  removeSource: (id: string) => void;
  setFilterModality: (modality: SourceModality | null) => void;
  getSelectedSources: () => NotebookSource[];
}

export const useNotebookSources = create<NotebookSourcesState>((set, get) => {
  const calculateMetrics = (sources: NotebookSource[]) => {
    const selected = sources.filter((s) => s.selected);
    const count = selected.length;
    const tokens = selected.reduce((sum, s) => sum + (s.tokenCount || 0), 0);
    return { selectedCount: count, totalTokens: tokens };
  };

  const initialMetrics = calculateMetrics(INITIAL_SOURCES);

  return {
    sources: INITIAL_SOURCES,
    selectedCount: initialMetrics.selectedCount,
    totalTokens: initialMetrics.totalTokens,
    activeChunk: null,
    filterModality: null,
    toggleSourceSelection: (id) =>
      set((state) => {
        const next = state.sources.map((s) =>
          s.id === id ? { ...s, selected: !s.selected } : s
        );
        return { sources: next, ...calculateMetrics(next) };
      }),
    selectAllSources: (select) =>
      set((state) => {
        const next = state.sources.map((s) => ({ ...s, selected: select }));
        return { sources: next, ...calculateMetrics(next) };
      }),
    setActiveChunk: (chunk) => set({ activeChunk: chunk }),
    addSource: (src) =>
      set((state) => {
        const newSource: NotebookSource = {
          ...src,
          id: `src-${Date.now()}`,
          selected: true,
        };
        const next = [newSource, ...state.sources];
        return { sources: next, ...calculateMetrics(next) };
      }),
    removeSource: (id) =>
      set((state) => {
        const next = state.sources.filter((s) => s.id !== id);
        return { sources: next, ...calculateMetrics(next) };
      }),
    setFilterModality: (modality) => set({ filterModality: modality }),
    getSelectedSources: () => get().sources.filter((s) => s.selected),
  };
});
