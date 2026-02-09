import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Download, Star } from 'lucide-react';

export default function CampaignsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 pt-32 pb-0">
                <div className="container mb-16 text-center">
                    <span className="text-[var(--color-secondary)] font-bold uppercase tracking-wider text-sm mb-4 block">
                        Priority Campaign
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-[var(--color-primary)]">
                        Bring the Crown Home
                    </h1>
                    <p className="text-xl text-[var(--color-text-light)] max-w-2xl mx-auto">
                        Help us turn a Top 5 Contender into a Miss World Winner. Winning the "Multimedia Award" fast-tracks Elle directly into the Quarter-Finals.
                    </p>
                </div>

                <div className="container max-w-4xl">
                    <div className="bg-[#0F172A] text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold font-serif mb-6 text-[var(--color-secondary)]">
                                    How to Vote on the Miss World App
                                </h3>
                                <ol className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-[var(--color-secondary)] shrink-0">1</div>
                                        <p><strong>DOWNLOAD:</strong> Go to the Google Play Store or Apple App Store and download the "Miss World" App.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-[var(--color-secondary)] shrink-0">2</div>
                                        <p><strong>SEARCH:</strong> Go to "Vote" or "Contestants" and search for <strong>Elle Trivia Muhoza</strong>.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-[var(--color-secondary)] shrink-0">3</div>
                                        <p><strong>VOTE:</strong> Click the VOTE button on her profile. Subscribe to multiply your impact!</p>
                                    </li>
                                </ol>
                                <div className="mt-8">
                                    <Button className="w-full bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[#0F172A] font-bold">
                                        Download App Now
                                    </Button>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-[var(--color-secondary)] text-[#0F172A] rounded-full mb-6 animate-pulse">
                                    {/* Star icon would be here */}
                                    <span className="text-4xl">★</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-2">Vote Daily</h4>
                                <p className="text-gray-400">Do not let this opportunity slip.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
