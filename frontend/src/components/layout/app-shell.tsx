'use client';

import React, { useEffect } from 'react';
import { CampaignTopBar } from './campaign-top-bar';
import { AppSidebar } from './app-sidebar';
import { RightInspectorPanel } from '../inspector/right-inspector-panel';
import { ChunkInspector } from '../sources/chunk-inspector';
import { UploadSourceDialog } from '../sources/upload-source-dialog';
import { useUIStore } from '../../lib/stores/use-ui-store';
import { useSpatialStore } from '../../lib/stores/use-spatial-store';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { theme, setTheme } = useUIStore();
  const { fetchParcelsFromBackend } = useSpatialStore();

  useEffect(() => {
    // Restore theme from localStorage if available
    try {
      const savedTheme = localStorage.getItem('landgov-theme') as 'light' | 'dark' | null;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setTheme(savedTheme);
      }
    } catch (_) {}

    // Preload live cadastral parcels from backend
    fetchParcelsFromBackend().catch(() => {});
  }, [setTheme, fetchParcelsFromBackend]);

  useEffect(() => {
    // Sync class directly to <html> element
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  return (
    <div className={`w-screen h-screen overflow-hidden ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="w-full h-full flex bg-[#f8fafc] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased">
        {/* Unified Primary Navigation & Data Sidebar */}
        <AppSidebar />

        {/* Center Main Stage */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
          <CampaignTopBar />
          <main className="flex-1 min-h-0 overflow-y-auto">
            {children}
          </main>
        </div>

        {/* Right Drawer: Contextual AI Copilot & ISO 19152 Inspector */}
        <RightInspectorPanel />

        {/* Global Modals */}
        <ChunkInspector />
        <UploadSourceDialog />
      </div>
    </div>
  );
}
