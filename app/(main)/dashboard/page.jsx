import StatsCards from './_components/stats-cards';
import DashboardView from './_components/dashboard-view';
import DashboardLayout from './_components/dashboard-layout';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <StatsCards />
      <DashboardView />
    </DashboardLayout>
  );
}