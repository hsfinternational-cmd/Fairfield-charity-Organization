import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { ProblemSolution } from '@/components/sections/problem-solution';
import { StrategicPillars } from '@/components/sections/strategic-pillars';
import { StrategicPartnership } from '@/components/sections/strategic-partnership';
import { ImpactStats } from '@/components/sections/impact-stats';
import { RecentCampaigns } from '@/components/sections/recent-campaigns';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSolution />
      <StrategicPillars />
      <StrategicPartnership />
      <ImpactStats />
      <RecentCampaigns />
      <Footer />
    </main>
  );
}
