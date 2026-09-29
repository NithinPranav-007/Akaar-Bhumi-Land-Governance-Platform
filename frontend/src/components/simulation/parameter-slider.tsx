'use client';

import React from 'react';
import { SlidersHorizontal, Clock, ShieldCheck, Sparkles, RefreshCw, Play, Loader2, CheckCircle2 } from 'lucide-react';
import { useSimulationStore } from '../../lib/stores/use-simulation-store';
import { SimulationHorizon } from '../../lib/types/simulation';

export function ParameterSlider() {
  const {
    scenarios,
    activeScenarioId,
    setActiveScenario,
    horizon,
    setHorizon,
    subsidySlider,
    setSubsidySlider,
    enforcementSlider,
    setEnforcementSlider,
    getActiveScenario,
    resetInertiaMatrix,
    runBackendSimulation,
    isLoadingSimulation,
    simulationError,
  } = useSimulationStore();

  const active = getActiveScenario();

  return (
    <div className="p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-indigo-500" />
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Geo-CPSS Policy Sandbox Controls
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
              FastAPI Live (Port 8001)
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
            Configure PLUS Framework Cellular Automata & Causal Econometric Drivers
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetInertiaMatrix}
            className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>

          <button
            onClick={() => runBackendSimulation()}
            disabled={isLoadingSimulation}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold text-xs shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoadingSimulation ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Computing...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run Simulation</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Scenario Selector */}
        <div>
          <label className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
            Target Policy Intervention
          </label>
          <select
            value={activeScenarioId}
            onChange={(e) => setActiveScenario(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs text-zinc-900 dark:text-zinc-100 font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            {scenarios.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
            {active.description}
          </p>
        </div>

        {/* Horizon Selector */}
        <div>
          <label className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
            Simulation Horizon
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 5 as SimulationHorizon, label: '5 Yrs (2031)' },
              { id: 10 as SimulationHorizon, label: '10 Yrs (2036)' },
              { id: 15 as SimulationHorizon, label: '15 Yrs (2041)' },
            ].map((h) => {
              const isSelected = horizon === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setHorizon(h.id)}
                  className={`py-2 px-1 rounded-lg border text-center font-mono text-[11px] font-semibold transition-all ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  {h.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-[11px] font-semibold mb-1">
              <span className="text-zinc-700 dark:text-zinc-300">Drone Survey Coverage Rate:</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">{subsidySlider}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={subsidySlider}
              onChange={(e) => setSubsidySlider(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] font-semibold mb-1">
              <span className="text-zinc-700 dark:text-zinc-300">Fast-Track Dispute Tribunals:</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">{enforcementSlider}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={enforcementSlider}
              onChange={(e) => setEnforcementSlider(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg"
            />
          </div>
        </div>
      </div>

      {simulationError && (
        <div className="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-rose-700 dark:text-rose-400 text-xs">
          {simulationError}
        </div>
      )}
    </div>
  );
}
