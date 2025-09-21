'use client';

import { useState, createContext, useContext } from 'react';
import DashboardSidebar from './dashboard-sidebar';
import ChatAssistant from './chat-assistant';
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
  const [isExpanded, setIsExpanded] = useState(true); // Always open on desktop
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Closed on mobile

  return (
    <SidebarContext.Provider value={{ isExpanded, setIsExpanded, isMobileOpen, setIsMobileOpen }}>
      <div className="min-h-screen bg-background relative">
        {/* Background Logo Text - Hidden when sidebar is visible */}
        <div 
          className={cn(
            'fixed inset-0 flex items-center justify-center pointer-events-none transition-all duration-300',
            (isExpanded || isMobileOpen) ? 'opacity-0 invisible z-[-1]' : 'opacity-10 visible z-0'
          )}
        >
          <div className="text-[20rem] font-bold text-muted-foreground/20 select-none">
            RTAK
          </div>
        </div>
        
        <DashboardSidebar />
        
        {/* Main content */}
        <main
          className={cn(
            'transition-all duration-300 ease-in-out pt-16 md:pt-0 min-h-screen relative z-10',
            // Adjust margin based on sidebar state on desktop
            isExpanded ? 'md:ml-64' : 'md:ml-20',
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
        
        {/* Chat Assistant */}
        <ChatAssistant />
      </div>
    </SidebarContext.Provider>
  );
}