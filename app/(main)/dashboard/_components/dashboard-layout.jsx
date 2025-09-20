'use client';

import { useState, createContext, useContext } from 'react';
import DashboardSidebar from './dashboard-sidebar';
import { cn } from '@/lib/utils';

const SidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export default function DashboardLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isExpanded, setIsExpanded, isMobileOpen, setIsMobileOpen }}>
      <div className="min-h-screen bg-slate-900">
        <DashboardSidebar />
        
        {/* Main content */}
        <main
          className={cn(
            'transition-all duration-300 ease-in-out pt-16 md:pt-0 min-h-screen',
            // Adjust margin based on sidebar state on desktop
            isExpanded ? 'md:ml-64' : 'md:ml-16',
          )}
        >
          <div className={cn(
            'p-4 sm:p-6 transition-all duration-300 ease-in-out',
            // Add more padding when sidebar is collapsed to better use the space
            isExpanded ? '' : 'md:px-8 lg:px-12'
          )}>
            {children}
          </div>
        </main>
      </div>
    </SidebarContext.Provider>
  );
}