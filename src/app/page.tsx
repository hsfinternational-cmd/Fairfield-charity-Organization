import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { PartnershipSection } from '@/components/sections/partnership';
import { AmbassadorSection } from '@/components/sections/ambassador';
import { KeyInitiatives } from '@/components/sections/key-initiatives';
import { VolunteerSection } from '@/components/sections/volunteer-section';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PartnershipSection />
      <AmbassadorSection />
      {/* Kept KeyInitiatives as it aligns with "The Strategy" metrics conceptually */}
      <KeyInitiatives />
      <VolunteerSection />
      <Footer />
    </main>
  );
}
