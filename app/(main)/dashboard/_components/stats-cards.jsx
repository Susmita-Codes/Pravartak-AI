'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, FileText, CheckCircle, Target, MessageCircle } from 'lucide-react';

const careerStatsData = [
  {
    title: 'Profile Score',
    value: '85%',
    icon: CheckCircle,
    color: 'text-green-500'
  },
  {
    title: 'Documents',
    value: '3/4',
    icon: FileText,
    color: 'text-blue-500'
  },
  {
    title: 'Interviews',
    value: '12',
    icon: MessageCircle,
    color: 'text-purple-500'
  },
  {
    title: 'Career Score',
    value: '4.2/5',
    icon: Target,
    color: 'text-orange-500'
  }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {careerStatsData.map((stat, index) => {
        const Icon = stat.icon;
        
        return (
          <Card key={index} className="bg-card border-border hover:bg-muted/50 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon className={`h-4 w-4 ${stat.color}`} />
                <span className="text-xl font-bold text-foreground">{stat.value}</span>
              </div>
              <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}