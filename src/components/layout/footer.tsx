'use client';

import Link from 'next/link';
import { Flower, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
    return (
        <footer className="bg-white pt-24 border-t border-gray-100">
            <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div>
                    <Link href="/" className="flex items-center gap-2 mb-6">
                        <Flower className="h-8 w-8 text-[var(--color-primary)]" />
                        <span className="text-2xl font-bold font-serif text-[var(--color-text-dark)]">
                            Fairfield Charity
                        </span>
                    </Link>
                    <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
                        We're building a world where everyone has the power to shape their lives.
                        Together, we can create lasting change.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
                    <ul className="space-y-4">
                        {['About Us', 'The Army Partnership (OWC)', 'Initiatives', 'Donate', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get Involved */}
                <div>
                    <h4 className="text-lg font-bold mb-6 font-serif">Get Involved</h4>
                    <ul className="space-y-4">
                        {['Partner with Us', 'Volunteer', 'Careers', 'Press', 'Sponsorship'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-bold mb-6 font-serif">Contact</h4>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-3 text-[var(--color-text-light)]">
                            <MapPin className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-1" />
                            <span>Arie Towers Level 8,<br />Kampala, Uganda</span>
                        </li>
                        <li className="flex items-center gap-3 text-[var(--color-text-light)]">
                            <Mail className="w-5 h-5 text-[var(--color-secondary)] shrink-0" />
                            <span>fairfield19622@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-3 text-[var(--color-text-light)]">
                            <Phone className="w-5 h-5 text-[var(--color-secondary)] shrink-0" />
                            <span>+256 745 776 540</span>
                        </li>
                    </ul>
                    <div className="mt-8">
                        <Button variant="secondary" className="w-full">Partner With Us</Button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-50 py-8 text-center text-sm text-[var(--color-text-light)]">
                <div className="container">
                    &copy; 2026 Fairfield Charity Organization. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
