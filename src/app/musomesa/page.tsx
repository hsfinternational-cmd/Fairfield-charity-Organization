import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Laptop, Database, Lock, Globe, Cpu } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/animations/fade-in';

export default function MusomesaPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section - Cyber/Tech Vibe */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#0A192F] text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-black z-10" />
                </div>

                <div className="container relative z-20 text-center max-w-5xl">
                    <FadeIn direction="down">
                        <div className="inline-flex items-center gap-2 bg-[#64FFDA]/10 text-[#64FFDA] px-4 py-2 rounded-full mb-8 border border-[#64FFDA]/20 cursor-default hover:bg-[#64FFDA]/20 transition-colors">
                            <Cpu className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-[0.2em] uppercase">Ugandon Labs x Fairfield</span>
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 leading-tight tracking-tight">
                            STOP TEACHING <br />
                            <span className="text-[#64FFDA]">BANTU MIGRATIONS.</span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-light tracking-wide opacity-90 leading-relaxed max-w-3xl mx-auto">
                            Start teaching <span className="font-bold text-white">Algorithm Migrations</span>.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* The Strategy Section */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Left: The Manifesto */}
                        <div className="lg:col-span-7">
                            <FadeIn direction="right">
                                <h2 className="text-4xl font-serif font-bold mb-8 text-[var(--color-primary)]">
                                    Fighting Information Gatekeeping.
                                </h2>
                                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                                    <p>
                                        The greatest threat to Uganda's future is not a lack of resources, but a <strong>lack of access to relevant information</strong>. For too long, our curriculum has looked backward, memorizing the history of "Bantu Migrations" while the rest of the world builds the future of Artificial Intelligence.
                                    </p>
                                    <p>
                                        <strong>"Musomesa"</strong> (The Teacher) is our answer. It is an AI-driven digital academy that breaks down the walls of the traditional classroom.
                                    </p>
                                    <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                                        <h4 className="font-bold text-blue-900 mb-2">The Fairfield Tech Doctrine:</h4>
                                        <p className="italic text-blue-800">
                                            "If you control the code, you control the culture. We are arming the Ugandan youth not with guns, but with Python, Rust, and React."
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>

                            <div className="mt-12 grid sm:grid-cols-2 gap-8">
                                <FadeIn direction="up" delay={0.2}>
                                    <div className="flex gap-4">
                                        <div className="bg-[#64FFDA] p-3 rounded-lg h-fit text-[#0A192F]">
                                            <Database className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Data Sovereignty</h4>
                                            <p className="text-sm text-gray-600">Owning our own digital infrastructure.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={0.3}>
                                    <div className="flex gap-4">
                                        <div className="bg-[#64FFDA] p-3 rounded-lg h-fit text-[#0A192F]">
                                            <Lock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Cyber Security</h4>
                                            <p className="text-sm text-gray-600">Protecting national assets online.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>

                        {/* Right: The Architect */}
                        <FadeIn direction="left" delay={0.2} className="lg:col-span-5 bg-[#112240] text-white p-8 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#64FFDA] rounded-full filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />

                            <img
                                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Jesse Ekelot"
                                className="w-24 h-24 rounded-full border-4 border-[#64FFDA] mb-6 object-cover"
                            />

                            <h3 className="text-2xl font-bold mb-1">Jesse Ekelot</h3>
                            <p className="text-[#64FFDA] text-sm uppercase tracking-widest font-bold mb-6">Technical Director & Architect</p>

                            <p className="opacity-80 leading-relaxed mb-6 font-mono text-sm">
                                Lead Developer at <strong>Ugandon Labs</strong>. Jesse is the mastermind behind the Musomesa platform. His vision is simple: "Democratize intelligence."
                            </p>

                            <Button className="w-full bg-transparent border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] font-bold tracking-widest uppercase transition-all">
                                Access The Beta
                            </Button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Features / "The Code" */}
            <section className="py-24 bg-[#E0F2F1] text-center">
                <div className="container max-w-4xl">
                    <FadeIn direction="up">
                        <Globe className="w-16 h-16 mx-auto mb-6 text-teal-600" />
                        <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">
                            Breaking Information Gatekeeping
                        </h2>
                        <p className="text-lg opacity-80 mb-8">
                            The elite schools have the libraries. The Musomesa App puts the Library of Alexandria in the pocket of a child in Karamoja.
                        </p>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                        <FadeIn direction="up" delay={0.1} className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="font-bold text-xl mb-2 text-teal-700">01. Civics</div>
                            <p className="text-sm text-gray-600">Know your rights. Direct access to the Constitution and safe reporting channels.</p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.2} className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="font-bold text-xl mb-2 text-teal-700">02. Skills</div>
                            <p className="text-sm text-gray-600">Vocational training videos. Farming, Coding, Carpentry.</p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.3} className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="font-bold text-xl mb-2 text-teal-700">03. Market</div>
                            <p className="text-sm text-gray-600">Real-time crop prices for young farmers. Economic intelligence.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
