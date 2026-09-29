'use client';

import React from 'react';
import { Plus, CheckSquare, Square, Filter } from 'lucide-react';
import { useNotebookSources } from '../../lib/stores/use-notebook-sources';
import { useUIStore } from '../../lib/stores/use-ui-store';
import { SourceCard } from './source-card';
import { SourceModality } from '../../lib/types/sources';

export function NavSources() {
  const {
    sources,
    selectedCount,
    totalTokens,
    filterModality,
    setFilterModality,
    selectAllSources,
  } = useNotebookSources();
  const { setUploadSourceModalOpen } = useUIStore();

  const allSelected = selectedCount === sources.length && sources.length > 0;

  const filteredSources = filterModality
    ? sources.filter((s) => s.modality === filterModality)
    : sources;

  return (
    <div className="px-3 py-3 border-t border-zinc-200 dark:border-[#1e293b]/80">
      {/* Header with Title, Counter, and Add Action */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Notebook Sources
            </span>
            <span className="px-2 py-0.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30 font-mono text-[10px] font-bold">
              {selectedCount}/{sources.length}
            </span>
          </div>
          <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
            {(totalTokens / 1000).toFixed(1)}k tokens in RAG context
          </div>
        </div>

        <button
          onClick={() => setUploadSourceModalOpen(true)}
          className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-sm shadow-blue-500/30 transition-all flex items-center gap-1.5 text-xs font-semibold hover:scale-[1.02] active:scale-95 flex-shrink-0"
          title="Add New Source"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Add</span>
        </button>
      </div>

      {/* Filter and Select All Bar */}
      <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 mb-2 pt-2 border-t border-zinc-200 dark:border-[#1e293b]/60">
        <button
          onClick={() => selectAllSources(!allSelected)}
          className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors font-medium py-0.5"
        >
          {allSelected ? (
            <CheckSquare className="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
          ) : (
            <Square className="w-4 h-4 text-zinc-400 dark:text-zinc-500 flex-shrink-0" />
          )}
          <span>{allSelected ? 'Deselect All' : 'Select All'}</span>
        </button>

        {/* Quick Modality Filter */}
        <div className="flex items-center gap-1">
          <select
            value={filterModality || 'all'}
            onChange={(e) => setFilterModality(e.target.value === 'all' ? null : (e.target.value as SourceModality))}
            className="bg-white dark:bg-zinc-800/90 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 rounded-lg px-2 py-1 text-[11px] text-zinc-800 dark:text-zinc-200 outline-none cursor-pointer focus:ring-1 focus:ring-blue-500 transition-colors"
          >
            <option value="all">All Modalities</option>
            <option value="cadastre">Cadastre GIS</option>
            <option value="textual_ror">RoR 7/12</option>
            <option value="litigation">RCCMS Litigation</option>
            <option value="statute">Statute Acts</option>
            <option value="raster">EO Rasters</option>
          </select>
        </div>
      </div>

      {/* Sources List */}
      <div className="space-y-2 mt-2">
        {filteredSources.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </div>
    </div>
  );
}
