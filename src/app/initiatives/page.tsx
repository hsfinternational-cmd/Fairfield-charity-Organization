import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/animations/fade-in';

export default function InitiativesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#2E0249] text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2E0249]/90 to-black/60 z-10" />
                    <ScaleIn className="absolute inset-0 w-full h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
                        />
                    </ScaleIn>
                </div>

                <div className="container relative z-20 text-center">
                    <FadeIn direction="up">
                        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">Mental Wealth Initiatives</h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-90">
                            Strategic programs building a stronger, healthier, and smarter Uganda.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Program 1: The Pearl Diet */}
            <section className="py-24 border-b border-gray-200">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <FadeIn direction="right">
                                <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                                    <Brain className="w-4 h-4" /> Metabolic Health
                                </div>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[var(--color-primary)]">
                                    The Pearl Diet
                                </h2>
                                <h3 className="text-xl font-medium text-gray-500 mb-6 italic">"De-processing the Village"</h3>
                                <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                                    We are fighting aggression and violence by replacing sugar and seed oils with traditional, organic Ugandan foods.
                                    Science shows that a malnourished brain is an angry brain.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed font-light">
                                    Our "Good Food" protocol stabilizes blood sugar and mental health, reducing domestic conflict and improving focus in schools.
                                </p>

                                <div className="mt-8">
                                    <Link href="/pearl-diet">
                                        <Button className="bg-[var(--color-primary)] text-white rounded-full px-8 py-6 uppercase tracking-widest text-xs font-bold hover:bg-[#3E2723]">
                                            View Full Protocol <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                        <FadeIn direction="left" delay={0.2} className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1606914469725-e39c34279af4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Fresh Organic Food"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Program 2: HeForShe Rugby */}
            <section className="py-24 bg-gray-100 border-b border-gray-200">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="right" className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Rugby and Youth"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </FadeIn>
                        <div className="order-1 lg:order-2">
                            <FadeIn direction="left" delay={0.2}>
                                <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                                    <Zap className="w-4 h-4" /> Gender Partnership
                                </div>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[var(--color-primary)]">
                                    The "HeForShe" Rugby Project
                                </h2>
                                <h3 className="text-xl font-medium text-gray-500 mb-6 italic">Partnering with Mongers Rugby Club</h3>
                                <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                                    <strong>"Strong Men Protect, They Don't Abuse."</strong> We harness the discipline and physicality of rugby to teach young men about positive masculinity and respect.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed font-light">
                                    By engaging men as allies, we change the cultural conversation around gender-based violence.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program 3: Musomesa App */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <FadeIn direction="right">
                                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                                    <Smartphone className="w-4 h-4" /> Digital Future
                                </div>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[var(--color-primary)]">
                                    The "Musomesa" App
                                </h2>
                                <h3 className="text-xl font-medium text-gray-500 mb-6 italic">"The Future is Digital"</h3>
                                <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                                    Breaking information gatekeeping for the youth. Musomesa is an AI-driven digital academy providing accessible education, skills training, and agricultural knowledge.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                                    We are preparing the next generation to compete in the global economy.
                                </p>

                                <Link href="/musomesa">
                                    <Button className="bg-[var(--color-secondary)] text-white px-8 py-6 rounded-full text-lg font-bold">
                                        Visit Academy <ArrowRight className="ml-2" />
                                    </Button>
                                </Link>
                            </FadeIn>
                        </div>
                        <FadeIn direction="left" delay={0.2} className="rounded-3xl overflow-hidden shadow-2xl relative">
                            {/* Phone Mockup or Digital Abstract */}
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Digital Learning"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
