import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

export default function VolunteerPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 pt-32 pb-24">
                <div className="container max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif">Become a Volunteer</h1>
                    <p className="text-lg text-[var(--color-text-light)] mb-12">
                        Join our global community of volunteers and make a real difference in people's lives.
                    </p>

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
