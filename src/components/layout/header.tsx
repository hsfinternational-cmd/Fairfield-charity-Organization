'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, Phone, Flower } from 'lucide-react';
import { Button, cn } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#mission' },
        { name: 'Projects', href: '/projects' },
        { name: 'Campaigns', href: '/campaigns' },
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Bar */}
            <div className="bg-[var(--color-primary)] text-white py-2 text-center text-sm font-medium hidden md:block">
                <div className="container">
                    Available for New Projects! DM me to discuss your next project.
                </div>
            </div>

            {/* Main Nav */}
            <div
                className={cn(
                    'transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-gray-100',
                    isScrolled ? 'py-2 shadow-sm' : 'py-4'
                )}
            >
                <div className="container flex items-center justify-center relative">
                    {/* Desktop Nav - Centered & Split */}
                    <div className="hidden lg:flex items-center justify-center flex-1 gap-12">
                        {/* Left Links */}
                        <nav className="flex items-center gap-8">
                            {navLinks.slice(0, 3).map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[var(--color-text-dark)] font-medium hover:text-[var(--color-secondary)] transition-colors uppercase text-sm tracking-wider"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Center Logo */}
                        <Link href="/" className="flex flex-col items-center gap-1 group transform hover:scale-105 transition-transform duration-300">
                            {/* Umbrella Icon (Custom SVG) */}
                            <div className="relative w-16 h-16 flex items-center justify-center">
                                <svg className="w-14 h-14 text-[004D40] fill-current" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Umbrella Top */}
                                    <path d="M50 20 C 25 20 5 45 5 55 L 95 55 C 95 45 75 20 50 20 Z" fill="#D84315" />
                                    {/* Umbrella Handle */}
                                    <path d="M50 55 L 50 80 C 50 85 55 85 55 80" stroke="#004D40" strokeWidth="4" fill="none" />
                                    {/* People under umbrella */}
                                    <circle cx="35" cy="65" r="5" fill="#004D40" />
                                    <circle cx="50" cy="65" r="5" fill="#004D40" />
                                    <circle cx="65" cy="65" r="5" fill="#004D40" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#004D40] uppercase">Fairfield</span>
                        </Link>

                        {/* Right Links */}
                        <nav className="flex items-center gap-8">
                            {navLinks.slice(3, 6).map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[var(--color-text-dark)] font-medium hover:text-[var(--color-secondary)] transition-colors uppercase text-sm tracking-wider"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Actions (pushed to right) */}
                    <div className="hidden lg:flex items-center gap-4 absolute right-0">
                        <Button variant="ghost" size="sm" className="px-2">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="secondary" size="sm" className="bg-[#D84315] hover:bg-[#BF360C] text-white rounded-full px-6">
                            Donate
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 absolute right-0"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>

                    {/* Mobile Logo (Left aligned if needed or centered) - Adding simplifed logo for mobile */}
                    <Link href="/" className="lg:hidden absolute left-0 flex items-center gap-2">
                        <span className="text-xl font-bold font-serif text-[var(--color-text-dark)]">Fairfield</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <nav className="container py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-[var(--color-text-dark)] py-2 border-b border-gray-50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 mt-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-light)]">
                                    <Phone className="h-4 w-4" />
                                    <span>(234) 000 700 999</span>
                                </div>
                                <Button variant="secondary" className="w-full">
                                    Donate Now
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
}
