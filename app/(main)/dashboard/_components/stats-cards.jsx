'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Users, Eye, MousePointer, Bell } from 'lucide-react';

const statsData = [
  {
    title: 'Pageviews',
    value: '50.8K',
    change: '+18.7%',
    trend: 'up',
    icon: Eye,
    color: 'text-green-500'
  },
  {
    title: 'Bounce',
    value: '23.6K',
    change: '-14.2%',
    trend: 'down',
    icon: MousePointer,
    color: 'text-red-500'
  },
  {
    title: 'New sign ups',
    value: '756',
    change: '+8.1%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-500'
  },
  {
    title: 'Subscriptions',
    value: '2.3K',
    change: '+12.3%',
    trend: 'up',
    icon: Bell,
    color: 'text-purple-500'
  }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
        
        return (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`h-5 w-5 ${stat.color}`} />
                <div className="flex items-center gap-1 text-sm">
                  <TrendIcon className={`h-4 w-4 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                  <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {stat.change}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-slate-400 text-sm">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}