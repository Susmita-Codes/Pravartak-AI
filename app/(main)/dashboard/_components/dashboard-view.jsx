'use client';

import PersonalizedHeader from './personalized-header';
import StatsCards from './stats-cards';
import ActivityAndRecommendations from './activity-recommendations';

export default function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Personalized Header with Progress */}
      <PersonalizedHeader />
      
      {/* Stats Cards */}
      <StatsCards />
      
      {/* Recent Activity & AI Recommendations */}
      <ActivityAndRecommendations />
    </div>
  );
}