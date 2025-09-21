'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Lightbulb, 
  FileText, 
  MessageCircle, 
  TrendingUp,
  User
} from 'lucide-react';

const recentActivities = [
  {
    action: 'CV Analyzed',
    time: '2 hours ago',
    score: 87,
    type: 'analysis',
    icon: FileText
  },
  {
    action: 'Mock Interview Completed',
    time: '1 day ago',
    score: 4.5,
    type: 'interview',
    icon: MessageCircle
  },
  {
    action: 'Resume Updated',
    time: '3 days ago',
    score: 5,
    type: 'document',
    icon: FileText
  },
  {
    action: 'Industry Insights Viewed',
    time: '5 days ago',
    score: null,
    type: 'research',
    icon: TrendingUp
  }
];

const aiRecommendations = [
  {
    title: 'Practice Behavioral Questions',
    description: 'Focus on STAR method responses',
    priority: 'high',
    href: '/interview'
  },
  {
    title: 'Update LinkedIn Profile',
    description: 'Add your recent certifications',
    priority: 'medium',
    href: '/profile'
  },
  {
    title: 'Apply to Software Engineer Roles',
    description: '3 matching positions found',
    priority: 'high',
    href: '/industry-insights'
  },
  {
    title: 'Complete Career Assessment',
    description: 'Unlock personalized roadmap',
    priority: 'low',
    href: '/analytics'
  }
];

export default function ActivityAndRecommendations() {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'analysis': return FileText;
      case 'interview': return MessageCircle;
      case 'document': return FileText;
      case 'research': return TrendingUp;
      default: return CheckCircle;
    }
  };

  return (
    <div className="space-y-6">
      {/* Recent Activity */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Clock className="h-5 w-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const Icon = getActivityIcon(activity.type);
              
              return (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  
                  {activity.score && (
                    <Badge variant="secondary" className="text-xs">
                      {activity.type === 'interview' ? `${activity.score}/5` : `${activity.score}%`}
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
          
          <Button variant="outline" className="w-full mt-4 text-sm">
            View All Activity
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Lightbulb className="h-5 w-5 text-primary" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aiRecommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Badge 
                  className={`${getPriorityColor(recommendation.priority)} text-white text-xs mt-1`}
                >
                  {recommendation.priority}
                </Badge>
                
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm mb-1">
                    {recommendation.title}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {recommendation.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 px-2 text-xs text-primary hover:text-primary"
                    asChild
                  >
                    <a href={recommendation.href}>
                      Take Action <ArrowRight className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}