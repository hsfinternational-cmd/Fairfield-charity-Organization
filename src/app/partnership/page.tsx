import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, Truck, HeartHandshake, Utensils } from 'lucide-react';
import { FadeIn, ScaleIn } from '@/components/animations/fade-in';

export default function PartnershipPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#1B3B5F] text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1B3B5F]/90 to-[#1B3B5F]/60 z-10" />
                    <ScaleIn className="absolute inset-0 w-full h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625723044792-44de168bf194?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
                        />
                    </ScaleIn>
                </div>

                <div className="container relative z-20 text-center max-w-4xl">
                    <FadeIn direction="down" delay={0.2}>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                            <Shield className="w-5 h-5 text-[var(--color-secondary)]" />
                            <span className="text-sm font-bold tracking-widest uppercase">Strategic Defense Partnership</span>
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
                            Civil-Military Cooperation for <br /> <span className="text-[var(--color-secondary)]">National Development</span>
                        </h1>
                        <p className="text-xl font-light tracking-wide opacity-90 leading-relaxed">
                            "The Soldier protects the Nation; We protect the Soldier's family."
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* The Concept: Garrison to Garden */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute inset-0 bg-[var(--color-primary)] -translate-x-4 translate-y-4 rounded-2xl -z-10" />
                            <FadeIn direction="right">
                                <img
                                    src="https://images.unsplash.com/photo-1595843458532-a50d4022c49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Soldier and Community"
                                    className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </FadeIn>
                        </div>
                        <div className="order-1 lg:order-2">
                            <FadeIn direction="left">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[var(--color-primary)]">
                                    The "Garrison to Garden" Strategy
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                                    True security starts in the home. Our partnership with the <strong>UPDF Directorate of Spouses and Welfare</strong> and <strong>Operation Wealth Creation (OWC)</strong> is built on a simple premise: A stable home creates a stable soldier, and a stable soldier protects the nation.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                                    We address the "Hidden Epidemic" of metabolic instability and stress within the barracks. By improving nutrition ("Good Food, Good Mood") and providing economic opportunities for spouses, we reduce PTSD and domestic conflict.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-[var(--color-secondary)] p-2 rounded-lg text-white shrink-0">
                                            <Truck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--color-primary)]">Strategic Logistics</h4>
                                            <p className="text-sm text-gray-600">Leveraging OWC supply chains to move nutrient-dense food to where it's needed most.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-[var(--color-secondary)] p-2 rounded-lg text-white shrink-0">
                                            <Utensils className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--color-primary)]">Metabolic Psychiatry</h4>
                                            <p className="text-sm text-gray-600">Connecting nutrition to behavior. Fighting aggression with a stabilized diet.</p>
                                        </div>
                                    </li>
                                </ul>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Police Partnership Teaser */}
            <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <FadeIn direction="right">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-800 border border-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Shield className="w-4 h-4" /> Police Force Alliance
                            </div>
                            <h2 className="text-4xl font-serif font-bold mb-6">Law, Order, & Love.</h2>
                            <p className="text-lg opacity-90 mb-8 font-light leading-relaxed">
                                Transforming the Uganda Police Force. Creating "Safe Corners" for victims and bridging the gap with Gen Z through Slum Barazas.
                            </p>
                            <Link href="/police-partnership">
                                <Button className="bg-white text-blue-900 px-8 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-blue-50 transition-all">
                                    View Police Strategy
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                    {/* Decorative Icon/Image */}
                    <FadeIn direction="left" delay={0.2}>
                        <div className="flex justify-center opacity-20">
                            <Shield className="w-64 h-64 text-white" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 bg-[var(--color-accent)] text-white text-center">
                <div className="container max-w-4xl">
                    <FadeIn direction="up">
                        <HeartHandshake className="w-16 h-16 mx-auto mb-8 opacity-90" />
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            "We are official partners in development. The Army secures the borders; Fairfield secures the home."
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="text-left">
                                <div className="font-bold text-lg uppercase tracking-wide">Civil-Military Cooperation</div>
                                <div className="text-white/80 text-sm">Official Strategic Alignment</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
