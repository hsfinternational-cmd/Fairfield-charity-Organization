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
        { name: 'Campaigns', href: '/campaigns' },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Pages', href: '/pages' },
        { name: 'Contact Us', href: '/contact' },
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
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Flower className="h-8 w-8 text-[var(--color-primary)] group-hover:rotate-180 transition-transform duration-500" />
                        <span className="text-2xl font-bold font-serif text-[var(--color-text-dark)]">
                            GainImpact
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[var(--color-text-dark)] font-medium hover:text-[var(--color-primary)] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="items-center gap-2 hidden xl:flex text-sm font-medium text-[var(--color-text-light)]">
                            <Phone className="h-4 w-4" />
                            <span>(234) 000 700 999</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="px-2">
                                <Search className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="sm" className="px-2">
                                <User className="h-5 w-5" />
                            </Button>
                        </div>
                        <Button variant="secondary" size="sm">
                            Donate Now
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
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
        </header>
    );
}
