'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Map,
  SlidersHorizontal,
  ShieldAlert,
  FileCheck,
  Database,
  Search,
  BookOpen,
  FlaskConical,
  Trophy,
  Sparkles,
} from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeColor?: string;
  description: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    title: 'Research Dashboard',
    href: '/',
    icon: LayoutDashboard,
    description: 'DILRMP 3.0 KPIs & national land governance scoreboard',
  },
  {
    title: 'GIS Spatial Studio',
    href: '/gis-studio',
    icon: Map,
    badge: 'OGC WMS',
    badgeColor: 'bg-teal-500/15 text-teal-300 border border-teal-500/30',
    description: 'Multi-layer cadastral, LULC & remote sensing viewer',
  },
  {
    title: 'Policy Simulation',
    href: '/simulation',
    icon: SlidersHorizontal,
    badge: 'Geo-CPSS',
    badgeColor: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30',
    description: 'Cellular automata & Causal DML scenario sandbox',
  },
  {
    title: 'Dispute Analytics',
    href: '/risk-triangulation',
    icon: ShieldAlert,
    badge: 'TFI Engine',
    badgeColor: 'bg-rose-500/15 text-rose-300 border border-rose-500/30',
    description: 'Land title fragility index & RCCMS litigation stream',
  },
  {
    title: 'Conclusive Titling',
    href: '/conclusive-titling',
    icon: FileCheck,
    badge: 'Guarantee',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    description: 'Presumptive-to-conclusive title transition & fund',
  },
  {
    title: 'Data Repository',
    href: '/data-repository',
    icon: Database,
    badge: 'NDSAP',
    badgeColor: 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
    description: 'Centralized datasets, cadastral archives & gazettes',
  },
  {
    title: 'AI Research Search',
    href: '/ai-search',
    icon: Search,
    badge: 'RAG',
    badgeColor: 'bg-purple-500/15 text-purple-300 border border-purple-500/30',
    description: 'Semantic vector search across 2,847 legal publications',
  },
  {
    title: 'Knowledge Hub',
    href: '/knowledge-hub',
    icon: BookOpen,
    badge: 'Open Access',
    badgeColor: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    description: 'Curated research, policy briefs & global case studies',
  },
  {
    title: 'Research Lab',
    href: '/research-lab',
    icon: FlaskConical,
    badge: 'Collab',
    badgeColor: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30',
    description: 'Collaborative workspaces, notebooks & experiments',
  },
  {
    title: 'Innovation Portal',
    href: '/innovation-hub',
    icon: Trophy,
    badge: 'Grants',
    badgeColor: 'bg-yellow-500/15 text-yellow-300 border border-yellow-500/30',
    description: 'DoLR hackathons, research grants & pilot projects',
  },
];

export function NavMain() {
  const pathname = usePathname();

  return (
    <div className="px-3 py-2.5">
      <div className="px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center justify-between">
        <span>Platform Modules</span>
        <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-mono font-medium">
          <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
          ISO 19152 LADM
        </span>
      </div>
      <nav className="mt-1.5 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-950/60 ring-1 ring-emerald-400/40'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 hover:text-zinc-950 dark:hover:text-white border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/50'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon
                  className={`w-4 h-4 flex-shrink-0 transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
                  }`}
                />
                <div className="min-w-0">
                  <div className={`truncate font-semibold ${isActive ? 'text-white' : 'text-zinc-800 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white'}`}>
                    {item.title}
                  </div>
                  <div className={`text-[10px] truncate font-normal mt-0.5 leading-tight ${isActive ? 'text-emerald-100/90' : 'text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300'}`}>
                    {item.description}
                  </div>
                </div>
              </div>
              {item.badge && (
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded-full flex-shrink-0 font-medium ml-1.5 ${
                    isActive ? 'bg-white/20 text-white border border-white/30' : item.badgeColor
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
