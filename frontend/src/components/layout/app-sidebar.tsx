'use client';

import Link from 'next/link';
import { Layers } from 'lucide-react';
import { WorkspaceSwitcher } from './workspace-switcher';
import { ULPINQuickSearch } from './ulpin-quick-search';
import { NavMain } from './nav-main';
import { NavSources } from '../sources/nav-sources';
import { NavUser } from './nav-user';
import { useUIStore } from '../../lib/stores/use-ui-store';

export function AppSidebar() {
  const { isSidebarOpen } = useUIStore();

  if (!isSidebarOpen) return null;

  return (
    <aside className="w-80 flex-shrink-0 h-screen bg-white dark:bg-[#0d131f] text-zinc-900 dark:text-zinc-100 border-r border-zinc-200 dark:border-[#1e293b] flex flex-col z-30 transition-colors select-none">
      {/* Top Fixed Area: Brand + Workspace Switcher + Search */}
      <div className="flex-shrink-0 border-b border-zinc-200 dark:border-[#1e293b] bg-slate-50/80 dark:bg-[#0b101a]">
        {/* Brand Header */}
        <div className="px-3.5 pt-3 pb-2 flex items-center gap-2.5">
          <Link
            href="/"
            className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 hover:scale-105 transition-transform flex-shrink-0"
            title="Akaar Bhumi - National Land Governance Platform"
          >
            <Layers className="w-4 h-4 text-white" />
          </Link>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-zinc-900 dark:text-white tracking-wide">Akaar Bhumi</span>
              <span className="px-1.5 py-0.2 rounded bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[9px] font-mono font-semibold border border-emerald-500/30">
                DILRMP 3.0
              </span>
            </div>
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
              National Digital Land Governance
            </div>
          </div>
        </div>

        {/* Workspace Switcher */}
        <WorkspaceSwitcher />

        {/* 14-Digit Bhu-Aadhaar Quick Search */}
        <ULPINQuickSearch />
      </div>

      {/* Middle Scrollable Section: NavMain + NavSources */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden divide-y divide-zinc-200 dark:divide-[#1e293b]/70">
        {/* Workflows Navigation */}
        <NavMain />

        {/* Notebook Sources Drawer Tray */}
        <NavSources />
      </div>

      {/* Bottom Fixed User Profile & Settings */}
      <div className="flex-shrink-0 border-t border-zinc-200 dark:border-[#1e293b] bg-slate-50/90 dark:bg-[#090d16]">
        <NavUser />
      </div>
    </aside>
  );
}
