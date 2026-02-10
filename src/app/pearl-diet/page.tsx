import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Leaf, Activity, ShieldCheck, Bean } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/animations/fade-in';

export default function PearlDietPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section - Organic Green & Earth */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#2E7D32] text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
                    <ScaleIn className="absolute inset-0 w-full h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595246140625-573b715d11d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
                        />
                    </ScaleIn>
                </div>

                <div className="container relative z-20 text-center max-w-4xl">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center gap-2 bg-[#81C784]/20 text-[#A5D6A7] px-6 py-2 rounded-full mb-8 border border-[#A5D6A7]/30">
                            <Activity className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-[0.2em] uppercase">Metabolic Psychiatry</span>
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 leading-tight shadow-xl">
                            METABOLIC PEACE.
                        </h1>
                        <p className="text-xl md:text-3xl font-light tracking-wide opacity-90 leading-relaxed max-w-3xl mx-auto">
                            "A malnourished brain is an angry brain." <br />
                            <span className="text-sm uppercase tracking-widest font-bold mt-4 block text-[#A5D6A7]">We fight violence with nutrition.</span>
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* The Science */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <FadeIn direction="right">
                                <span className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-4 block opacity-60">The Hidden Epidemic</span>
                                <h2 className="text-4xl font-serif font-bold mb-8 text-[var(--color-primary)]">
                                    Sugar, Seed Oils, & Conflict.
                                </h2>
                                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                                    <p>
                                        We often treat Domestic Violence as a purely "social" or "moral" failing. But we miss the biological root. A diet high in processed sugar and industrial seed oils causes <strong>Metabolic Dysfunction</strong>.
                                    </p>
                                    <p>
                                        When blood sugar spikes and crashes, the brain goes into "fight or flight." Anxiety rises. Patience drops. In a stressed household, this simple biological trigger can be the spark for violence.
                                    </p>
                                    <p className="font-medium text-[var(--color-secondary)] italic">
                                        We cannot counsel a brain that is starving for nutrients. We must feed it first.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <FadeIn direction="up" delay={0.2} className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center">
                                    <h4 className="font-bold text-red-800 text-lg mb-2">The Problem</h4>
                                    <p className="text-sm text-red-600">Processed Foods. Sugar. Inflammatory Oils. Energy Crashes.</p>
                                </FadeIn>
                                <FadeIn direction="up" delay={0.4} className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center">
                                    <h4 className="font-bold text-green-800 text-lg mb-2">The Pearl Diet</h4>
                                    <p className="text-sm text-green-600">Organic. Traditional. Nutrient-Dense. Stable Energy.</p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OWC Partnership */}
            <section className="py-24 bg-[#FFFDE7]">
                <div className="container">
                    <div className="text-center mb-16">
                        <FadeIn direction="up">
                            <h2 className="text-4xl font-serif font-bold mb-4 text-[var(--color-primary)]">Strategy: Garrison to Garden</h2>
                            <div className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#FBC02D]">
                                <ShieldCheck className="w-5 h-5" /> With Operation Wealth Creation
                            </div>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Emmere (Food) */}
                        <FadeIn direction="right" delay={0.2} className="bg-white p-10 rounded-3xl shadow-xl flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-[#C8E6C9] rounded-full flex items-center justify-center shrink-0">
                                <Leaf className="w-10 h-10 text-green-700" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-serif mb-2 text-green-900">Project "Emmere"</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Fixing the plate. We distribute organic seedlings and educate barracks/families on growing nutrient-dense traditional foods.
                                </p>
                                <span className="text-xs font-bold bg-green-100 text-green-800 px-3 py-1 rounded-full uppercase">Food Security</span>
                            </div>
                        </FadeIn>

                        {/* Emmwanyi (Coffee) */}
                        <FadeIn direction="left" delay={0.4} className="bg-white p-10 rounded-3xl shadow-xl flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-[#D7CCC8] rounded-full flex items-center justify-center shrink-0">
                                <Bean className="w-10 h-10 text-brown-700" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-serif mb-2 text-[#3E2723]">Project "Emmwanyi"</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Women in Coffee. Partnering with OWC to give women ownership of the cash crop, ensuring financial independence alongside nutritional health.
                                </p>
                                <span className="text-xs font-bold bg-[#3E2723]/10 text-[#3E2723] px-3 py-1 rounded-full uppercase">Economic Wealth</span>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
