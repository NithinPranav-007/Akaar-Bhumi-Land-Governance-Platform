'use client';

import React from 'react';
import { Shield, Sparkles, Globe, Sun, Moon } from 'lucide-react';
import { useUIStore } from '../../lib/stores/use-ui-store';

export function CampaignTopBar() {
  const { theme, toggleTheme } = useUIStore();

  return (
    <header className="h-12 px-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between z-20 flex-shrink-0 transition-colors">
      <div className="flex items-center gap-2.5 sm:gap-3">
        <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
        <h1 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 tracking-tight truncate">
          Akaar Bhumi · Land Governance Platform
        </h1>
        <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/20 flex-shrink-0">
          DILRMP 3.0 · DoLR
        </span>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Quick Light / Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all text-xs font-semibold shadow-sm"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
              <span className="text-[11px] font-mono">Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600/20" />
              <span className="text-[11px] font-mono">Dark Mode</span>
            </>
          )}
        </button>

        <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
          <Sparkles className="w-3 h-3 text-blue-500" />
          <span>AI-Enabled · ISO 19152</span>
        </div>

        <div className="hidden sm:block text-right">
          <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
            MoRD_PORTAL
          </div>
          <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
            Ministry of Rural Dev
          </div>
        </div>

        <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center font-bold text-xs text-emerald-800 dark:text-emerald-300 shadow-sm font-mono flex-shrink-0">
          <Shield className="w-3.5 h-3.5" />
        </div>
      </div>
    </header>
  );
}
