import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Crown, Star, Globe, Heart } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/animations/fade-in';

export default function MissWorldPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section - Regal Gold & Purple */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#4A148C] text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <ScaleIn className="absolute inset-0 w-full h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
                        />
                    </ScaleIn>
                </div>

                <div className="container relative z-20 text-center">
                    <FadeIn direction="down" delay={0.1}>
                        <div className="w-24 h-24 mx-auto mb-6 bg-[var(--color-secondary)]/20 rounded-full flex items-center justify-center backdrop-blur-md border border-[var(--color-secondary)]">
                            <Crown className="w-12 h-12 text-[var(--color-secondary)]" />
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.3}>
                        <h1 className="text-6xl md:text-8xl font-bold font-serif mb-6 leading-tight drop-shadow-2xl">
                            A CROWN FOR <br />
                            <span className="text-[var(--color-secondary)]">A NATION</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase opacity-90 max-w-4xl mx-auto">
                            Elle Trivia Muhoza: The Blueprint for Modern Monarchy.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* The Vision */}
            <section className="py-24">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeIn direction="up">
                            <h2 className="text-4xl font-serif font-bold mb-8 text-[var(--color-primary)]">
                                Why Uganda? Why Now?
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed font-light mb-12">
                                The Miss World platform is about <strong>"Beauty with a Purpose."</strong> But often, projects are small, isolated acts of charity. Elle Trivia Muhoza offers something different: <strong>Systemic National Reformation.</strong>
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
                        <FadeIn direction="up" delay={0.2} className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow bg-white">
                            <Star className="w-10 h-10 mx-auto mb-4 text-[var(--color-secondary)]" />
                            <h3 className="text-xl font-bold mb-2">Not Charity. Strategy.</h3>
                            <p className="text-sm text-gray-600">
                                This is not about handing out shoes. It's about aligning with the Military, Police, and Government to fix the <em>systems</em> that cause poverty.
                            </p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.4} className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow bg-white">
                            <Heart className="w-10 h-10 mx-auto mb-4 text-red-500" />
                            <h3 className="text-xl font-bold mb-2">Metabolic Healing</h3>
                            <p className="text-sm text-gray-600">
                                A groundbreaking approach connecting "Good Food" to "Conflict Resolution." Healing the mind effectively heals the nation.
                            </p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.6} className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow bg-white">
                            <Globe className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-bold mb-2">The Fair Field</h3>
                            <p className="text-sm text-gray-600">
                                Honoring the legacy of freedom fighters by securing a "Fair Field" of opportunity for the next generation.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* The Pitch */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn direction="right">
                        <div>
                            <h2 className="text-5xl font-serif font-bold mb-6 leading-tight">
                                "The Ultimate Candidate."
                            </h2>
                            <div className="w-24 h-2 bg-[var(--color-secondary)] mb-8" />
                            <p className="text-xl opacity-90 leading-relaxed font-light mb-8">
                                Elle isn’t just wearing a sash; she is wearing the hopes of a nation transitioning from Peace to Prosperity. She has mobilized Generals, Technocrats, and Slum Dwellers alike under one banner: <strong>Fairfield.</strong>
                            </p>
                            <p className="text-xl opacity-90 leading-relaxed font-light mb-8">
                                Bringing the Miss World Crown to Uganda isn't just a win for beauty; it's a validation of our National Development Strategy.
                            </p>
                            <Button className="bg-[var(--color-secondary)] text-white px-10 py-6 text-lg tracking-widest uppercase rounded-full hover:bg-white hover:text-[var(--color-primary)] transition-colors">
                                Support The Bid
                            </Button>
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.3} className="relative">
                        <div className="absolute inset-0 border-2 border-[var(--color-secondary)] translate-x-6 translate-y-6 rounded-3xl" />
                        <img
                            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Elle Miss World"
                            className="rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
                        />
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
