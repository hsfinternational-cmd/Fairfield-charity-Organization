'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, Phone, Flower, Crown } from 'lucide-react';
import { Button, cn } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { WeatherEffects } from './weather-effects';
import { Logo } from '@/components/ui/logo';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [crownTextIndex, setCrownTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCrownTextIndex((prev) => (prev + 1) % 2);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Partnership', href: '/partnership' },
        { name: 'Initiatives', href: '/initiatives' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Top Bar - Made slightly transparent */}
            <div className="bg-[#0F0418]/95 backdrop-blur-sm text-white py-2 text-center text-sm font-medium hidden md:block border-b border-white/5">
                <div className="container">
                    Available for New Projects! DM me to discuss your next project.
                </div>
            </div>

            {/* Main Nav - Glassmorphism (Deep Purple) */}
            <div
                className={cn(
                    'transition-all duration-300 border-b border-white/10 relative overflow-hidden',
                    isScrolled
                        ? 'bg-[#2E0249]/90 backdrop-blur-md py-2 shadow-lg shadow-purple-900/20' // Deep Purple & more opaque
                        : 'bg-[#2E0249]/75 backdrop-blur-md py-4' // Deep Purple & clearer
                )}
            >
                {/* --- WEATHER EFFECTS (Rain & Thunder -> Stars) --- */}
                <WeatherEffects />

                <div className="container flex items-center justify-between relative z-10 w-full">
                    {/* Desktop Nav - 3 Column Layout */}
                    <div className="hidden lg:flex w-full items-center justify-between">
                        {/* LEFT COLUMN: Nav Links */}
                        <div className="flex-1 flex justify-start items-center">
                            <nav className="flex items-center gap-6 xl:gap-8">
                                {navLinks.slice(0, 3).map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-white/90 font-medium hover:text-[var(--color-secondary)] transition-colors uppercase text-sm tracking-wider whitespace-nowrap"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* CENTER COLUMN: Logo */}
                        <div className="flex-shrink-0 flex justify-center px-4">
                            <Link href="/" className="flex items-center gap-1 group">
                                <Logo variant="horizontal" dark className="scale-90 md:scale-100" />
                            </Link>
                        </div>

                        {/* RIGHT COLUMN: Links + Miss World + Actions */}
                        <div className="flex-1 flex justify-end items-center gap-6">
                            <nav className="flex items-center gap-6">
                                {/* Miss World Button */}
                                <Link href="/miss-world" className="relative group overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all border border-yellow-400/50">
                                    <div className="relative h-4 w-48">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={crownTextIndex}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap"
                                            >
                                                {crownTextIndex === 0 ? (
                                                    <>
                                                        <Crown className="w-4 h-4 text-white fill-white" />
                                                        <span className="text-[10px] md:text-xs">
                                                            Bring The <span className="text-black">Crown</span> <span className="text-red-600">Home</span>
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="w-2 h-2 rounded-full bg-red-600 animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                                                        <span className="text-sm">Elle Muhoza</span>
                                                    </>
                                                )}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </Link>

                                {navLinks.slice(3, 5).map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-white/90 font-medium hover:text-[var(--color-secondary)] transition-colors uppercase text-sm tracking-wider whitespace-nowrap"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Actions (Search + Donate) */}
                            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                                {/* Animated Search Input */}
                                <div className="relative flex items-center">
                                    <AnimatePresence>
                                        {isSearchOpen && (
                                            <motion.input
                                                initial={{ width: 0, opacity: 0, padding: 0 }}
                                                animate={{ width: 140, opacity: 1, padding: "0.5rem" }}
                                                exit={{ width: 0, opacity: 0, padding: 0 }}
                                                placeholder="Search..."
                                                className="bg-white/10 border border-white/20 rounded-full text-sm outline-none px-4 py-2 mr-2 text-white placeholder:text-white/50 focus:bg-white/20"
                                                autoFocus
                                            />
                                        )}
                                    </AnimatePresence>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="px-2 hover:bg-white/20 text-white"
                                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                                    >
                                        <Search className="h-5 w-5 text-white" />
                                    </Button>
                                </div>

                                <Button variant="secondary" size="sm" className="bg-[#D84315] hover:bg-[#BF360C] text-white rounded-full px-6 shadow-lg shadow-orange-500/20 whitespace-nowrap">
                                    Donate
                                </Button>
                            </div>
                        </div>
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
                            {/* Mobile Ambassador Link */}
                            {/* Mobile Miss World Button */}
                            <Link
                                href="/miss-world"
                                className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-bold uppercase tracking-wider shadow-md border border-yellow-400/50 mt-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div className="relative h-12 w-full">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={crownTextIndex}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 flex items-center justify-center gap-3 whitespace-nowrap"
                                        >
                                            {crownTextIndex === 0 ? (
                                                <>
                                                    <Crown className="w-5 h-5 text-white fill-white" />
                                                    <span className="text-sm">
                                                        Bring The <span className="text-black">Crown</span> <span className="text-red-600">Home</span>
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                                                    <span className="text-sm">Elle Muhoza</span>
                                                </>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </Link>

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
