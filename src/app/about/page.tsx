import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/animations/fade-in';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[var(--color-primary)] text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <ScaleIn className="absolute inset-0 w-full h-full" delay={0}>
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
                        />
                    </ScaleIn>
                </div>

                <div className="container relative z-20 text-center">
                    <FadeIn direction="up" delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">About Fairfield</h1>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.4}>
                        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-90">
                            From Peace to Prosperity.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* The Fair Field Story */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="right">
                            <span className="text-[var(--color-secondary)] font-bold uppercase tracking-widest text-sm mb-4 block">Our Origin Story</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[var(--color-primary)] leading-tight">
                                From the Battlefield to a Fair Field
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                                <p>
                                    The name <strong>"Fairfield"</strong> is a tribute to the freedom fighters who sought to create a "fair field" of opportunity for every Ugandan. They secured the borders; now, we secure the future.
                                </p>
                                <p>
                                    For decades, Uganda has enjoyed peace. Now, the mission has evolved. We must transition from <strong>Peace to Prosperity</strong>. We believe that true security is not just the absence of war, but the presence of opportunity, health, and economic independence for the youth.
                                </p>
                                <p>
                                    Fairfield operates with the discipline of the Army and the compassion of a family. We are the bridge between the security sector and the social sector.
                                </p>
                            </div>
                        </FadeIn>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[var(--color-secondary)] translate-x-4 translate-y-4 rounded-2xl -z-10" />
                            <FadeIn direction="left" delay={0.2}>
                                <img
                                    src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5"
                                    alt="Ugandan Youth"
                                    className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                                />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 bg-[#0F0418] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

                <div className="container relative z-10">
                    <FadeIn direction="up">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-serif font-bold mb-4">Strategic Leadership</h2>
                            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto" />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 lg:flex gap-12 items-center">
                        <div className="w-full lg:w-1/3 shrink-0 mb-8 lg:mb-0">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                                alt="Elle Trivia Muhoza"
                                className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">Elle Trivia Muhoza</h3>
                            <p className="text-[var(--color-secondary)] font-bold uppercase tracking-widest mb-6">Founder & Strategic Ambassador</p>

                            <p className="text-lg opacity-90 leading-relaxed mb-6">
                                Elle Trivia Muhoza is not just Miss Uganda; she is a <strong>Strategic Ambassador</strong> for national development. Working alongside Generals, Technocrats, and Community Leaders, she connects the discipline of the state with the needs of the household.
                            </p>
                            <p className="text-lg opacity-90 leading-relaxed italic">
                                "The Soldier protects the Nation; We protect the Soldier's family. My role is to ensure that the peace won on the battlefield translates into 'fair fields' of opportunity for every Ugandan child."
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
