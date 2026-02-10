import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { CallToActionStrip } from '@/components/sections/cta-strip';
import { MakeDifference } from '@/components/sections/make-difference';
import { InvolvementOptions } from '@/components/sections/involvement-options';
import { MissionImpact } from '@/components/sections/mission-impact';
import { CoreValues } from '@/components/sections/core-values';
import { HowWeHelp } from '@/components/sections/how-we-help';
import { RealLifeStories } from '@/components/sections/real-life-stories';
import { UpcomingEvents } from '@/components/sections/upcoming-events';
import { ProblemSolution } from '@/components/sections/problem-solution';
import { StrategicPillars } from '@/components/sections/strategic-pillars'; // Kept for content depth
import { StrategicPartnership } from '@/components/sections/strategic-partnership';
import { ImpactStats } from '@/components/sections/impact-stats';
import { RecentCampaigns } from '@/components/sections/recent-campaigns';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CallToActionStrip />
      <MakeDifference />
      <InvolvementOptions />

      <div id="mission">
        <MissionImpact />
      </div>
      <CoreValues />
      <HowWeHelp />
      <RealLifeStories />
      <UpcomingEvents />

      <StrategicPartnership />
      <ImpactStats />
      <RecentCampaigns />
      <Footer />
    </main>
  );
}
