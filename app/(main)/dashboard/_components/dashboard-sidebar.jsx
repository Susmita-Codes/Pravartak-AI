'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  PenBox,
  GraduationCap,
  StarsIcon,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSidebar } from './dashboard-layout';

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Industry Insights',
    href: '/industry-insights',
    icon: LayoutDashboard,
  },
  {
    title: 'Resume Builder',
    href: '/resume',
    icon: FileText,
  },
  {
    title: 'Cover Letter',
    href: '/ai-cover-letter',
    icon: PenBox,
  },
  {
    title: 'CV Analyser',
    href: '/cv-analyser',
    icon: FileText,
  },
  {
    title: 'Interview Prep',
    href: '/interview',
    icon: GraduationCap,
  },
  {
    title: 'Career Roadmap',
    href: '/roadmap',
    icon: StarsIcon,
  },
  {
    title: 'Mock Interview',
    href: '/mock-interview',
    icon: GraduationCap,
  },
];

export default function DashboardSidebar() {
  const { isExpanded, setIsExpanded, isMobileOpen, setIsMobileOpen } = useSidebar();
  const pathname = usePathname();

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      {/* Mobile hamburger button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 md:hidden bg-slate-800 hover:bg-slate-700"
        onClick={toggleMobile}
      >
        {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-full bg-slate-950 border-r border-slate-800 transition-all duration-300 z-50',
          // Desktop behavior
          'hidden md:flex flex-col',
          isExpanded ? 'w-64' : 'w-16',
          // Mobile behavior
          'md:translate-x-0',
          isMobileOpen ? 'flex w-64 translate-x-0' : 'md:flex -translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div className={cn('flex items-center gap-2', !isExpanded && 'md:hidden')}>
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-semibold">Menu</span>
          </div>
          
          {/* Desktop toggle button */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex text-slate-400 hover:text-white"
            onClick={toggleExpanded}
          >
            {isExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group relative',
                  isActive
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span
                  className={cn(
                    'transition-opacity duration-300',
                    !isExpanded && 'md:opacity-0 md:w-0 md:overflow-hidden'
                  )}
                >
                  {item.title}
                </span>

                {/* Tooltip for collapsed state */}
                {!isExpanded && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 hidden md:block">
                    {item.title}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User section at bottom */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">JC</span>
            </div>
            <div className={cn('transition-opacity duration-300', !isExpanded && 'md:opacity-0 md:w-0 md:overflow-hidden')}>
              <p className="text-white text-sm font-medium">John Carter</p>
              <p className="text-slate-400 text-xs">Product manager</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}