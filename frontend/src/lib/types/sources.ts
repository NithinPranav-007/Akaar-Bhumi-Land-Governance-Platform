export type SourceModality =
  | 'cadastre'
  | 'textual_ror'
  | 'litigation'
  | 'statute'
  | 'raster';

export interface NotebookSourceChunk {
  id: string;
  sourceId: string;
  title: string;
  preview: string;
  tokenAllocation: number;
  pageOrClause?: string;
  fullContent?: string;
  coordinates?: [number, number];
}

export interface NotebookSourceMetadata {
  sourceAuthority: string;
  ingestionTimestamp: string;
  crs?: string;
  checksum?: string;
  description?: string;
}

export interface GeographicScope {
  state: string;
  district: string;
  tehsil: string;
}

export interface NotebookSource {
  id: string;
  name: string;
  modality: SourceModality;
  geographicScope: GeographicScope;
  fileSize: string;
  tokenCount?: number;
  featureCount?: number;
  selected?: boolean;
  isSelected?: boolean;
  metadata: NotebookSourceMetadata;
  chunks: NotebookSourceChunk[];
}
