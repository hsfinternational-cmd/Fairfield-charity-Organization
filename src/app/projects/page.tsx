import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function ProjectsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 pt-32 pb-24">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif">Our Projects</h1>
                    <p className="text-lg text-[var(--color-text-light)] mb-12 max-w-2xl">
                        Explore our ongoing and upcoming initiatives designed to create sustainable change.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Placeholder for projects list */}
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-64 flex items-center justify-center bg-gray-50">
                                <span className="text-gray-400 font-medium">Project {item} Placeholder</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
