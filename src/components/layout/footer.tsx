'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6 group">
                            <Logo variant="horizontal" dark />
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6 font-light">
                            We're building a world where everyone has the power to shape their lives. Together, we can create lasting change.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[var(--color-secondary)] hover:text-white transition-all transform hover:-translate-y-1">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[var(--color-secondary)] uppercase tracking-wider text-xs">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
                            <li><Link href="/partnership" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">The Army Partnership (OWC)</Link></li>
                            <li><Link href="/initiatives" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Initiatives</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Donate</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[var(--color-secondary)] uppercase tracking-wider text-xs">Get Involved</h4>
                        <ul className="space-y-4">
                            <li><Link href="/partnership" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Partner with Us</Link></li>
                            <li><Link href="/volunteer" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Volunteer</Link></li>
                            <li><Link href="/volunteer" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Careers</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Press</Link></li>
                            <li><Link href="/partnership" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Sponsorship</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[var(--color-secondary)] uppercase tracking-wider text-xs">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-gray-400">
                                <MapPin className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-1" />
                                <span>Arie Towers Level 8,<br />Kampala, Uganda</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400 group">
                                <Mail className="w-5 h-5 text-[var(--color-secondary)] shrink-0" />
                                <a href="mailto:fairfield19622@gmail.com" className="group-hover:text-white transition-colors">fairfield19622@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400 group">
                                <Phone className="w-5 h-5 text-[var(--color-secondary)] shrink-0" />
                                <a href="tel:+256745776540" className="group-hover:text-white transition-colors">+256 745 776 540</a>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <Link href="/partnership">
                                <Button className="w-full bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold py-6">
                                    Partner With Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Fairfield Charity Organization. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
                {/* Developer Credit */}
                <div className="mt-4 text-center text-xs text-gray-600 flex items-center justify-center gap-1">
                    <span>Developed with</span> <Heart className="w-3 h-3 text-red-500 fill-red-500" /> <span>by <span className="text-gray-400 font-medium">Ekelot Jesse Jones</span></span>
                </div>
            </div>
        </footer>
    );
}
