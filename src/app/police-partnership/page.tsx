import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Heart, Siren, Users } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/animations/fade-in';

export default function PolicePartnershipPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section - Police Blue & Compassion */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#1E3A8A] text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply z-10" />
                    <ScaleIn className="absolute inset-0 w-full h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541829070-5b2770026e18?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
                        />
                    </ScaleIn>
                </div>

                <div className="container relative z-20 text-center max-w-4xl">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full mb-8">
                            <Siren className="w-5 h-5 text-red-400 animate-pulse" />
                            <span className="text-sm font-bold tracking-[0.2em] uppercase">Child & Family Protection Unit (CFPU)</span>
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 leading-tight">
                            LAW, ORDER, <br />
                            <span className="text-[var(--color-secondary)]">& LOVE.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide opacity-90 leading-relaxed max-w-3xl mx-auto">
                            We are transforming the face of the Uganda Police Force. From enforcement to engagement.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* The Safe Corners Project */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-blue-100 rounded-3xl -z-10 transform -rotate-2" />
                            <FadeIn direction="right">
                                <img
                                    src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Police Officer Helping Child"
                                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                                />
                            </FadeIn>
                        </div>
                        <div className="order-1 lg:order-2">
                            <FadeIn direction="left" delay={0.2}>
                                <h2 className="text-4xl font-serif font-bold mb-6 text-[#1E3A8A]">
                                    The "Safe Corners" Upgrade
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                                    A Victim of Domestic Violence should not report their trauma at a counter next to a petty thief. It strips them of dignity and silences their voice.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                                    Fairfield is physically renovating Police Stations to create <strong>"Safe Corners"</strong>—specialized, private, and comforting spaces within the Station purely for children and women.
                                </p>

                                <ul className="space-y-4">
                                    <FadeIn direction="up" delay={0.3}>
                                        <li className="flex items-center gap-4 text-gray-800 font-medium">
                                            <ShieldAlert className="w-6 h-6 text-blue-600" />
                                            <span>Private Reporting Rooms</span>
                                        </li>
                                    </FadeIn>
                                    <FadeIn direction="up" delay={0.4}>
                                        <li className="flex items-center gap-4 text-gray-800 font-medium">
                                            <Heart className="w-6 h-6 text-red-500" />
                                            <span>Trauma-Informed Officers</span>
                                        </li>
                                    </FadeIn>
                                    <FadeIn direction="up" delay={0.5}>
                                        <li className="flex items-center gap-4 text-gray-800 font-medium">
                                            <Users className="w-6 h-6 text-green-600" />
                                            <span>Legal & Medical Accompaniment</span>
                                        </li>
                                    </FadeIn>
                                </ul>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Slum Barazas */}
            <section className="py-24 bg-[#FFF8E1]">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <FadeIn direction="up">
                            <h2 className="text-4xl font-serif font-bold mb-4 text-[var(--color-primary)]">
                                Bridging the Gap: Gen Z & Police
                            </h2>
                            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8" />
                            <p className="text-lg opacity-80">
                                The youth fear the police, and the police misunderstand the youth. We are breaking this cycle of mistrust with the <strong>Community Barazas</strong>.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FadeIn direction="up" delay={0.2} className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-blue-600 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">The Baraza</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We host town halls in the slums where the Police Band plays music, and Officers sit <em>on the mats</em> with the youth—not on podiums. We talk about crime, drugs, and jobs.
                            </p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.3} className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-[var(--color-secondary)] text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Siren className="w-8 h-8 text-[var(--color-secondary)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Tech Skills</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We don't just talk law. Alongside the Baraza, we bring the <strong>Musomesa</strong> team to teach a coding skill. We trade idleness for industry.
                            </p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.4} className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-red-500 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">De-Escalation</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We teach the Police creative de-escalation. Understanding that a "criminal" is often just a hungry, confused child.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="py-20 bg-blue-900 text-white text-center">
                <div className="container">
                    <FadeIn direction="up">
                        <h3 className="text-2xl md:text-4xl font-serif font-bold italic opacity-90">
                            "Law and Order cannot exist without Love and Opportunity."
                        </h3>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
