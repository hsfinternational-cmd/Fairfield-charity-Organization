import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { VolunteerHero } from '@/components/about/volunteer-hero';
import { VolunteerShowcase } from '@/components/volunteer/volunteer-showcase';

export default function VolunteerPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            <VolunteerHero />

            <VolunteerShowcase />

            <div className="flex-1 pt-12 pb-24 bg-gray-50">
                <div className="container max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-serif mb-4">Join the Movement</h2>
                        <p className="text-gray-600">Fill out the form below to get started.</p>
                    </div>

                    <form className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <input type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Area of Interest</label>
                            <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none">
                                <option>Education</option>
                                <option>Healthcare</option>
                                <option>Clean Water</option>
                                <option>Fundraising</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea className="w-full p-3 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="Tell us why you want to join..."></textarea>
                        </div>

                        <Button size="lg" className="w-full">Submit Application</Button>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}
