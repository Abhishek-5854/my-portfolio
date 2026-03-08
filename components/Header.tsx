'use client';

import { useState, useEffect } from 'react';

interface HeaderProps {
    onChatClick?: () => void;
}

export default function Header({ onChatClick }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) setScrolled(true);
        else setScrolled(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`sticky top-0 z-40 border-b border-blue-900/30 ${scrolled ? 'navbar-scrolled' : ''}`}>
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="text-lg font-bold text-white">Abhishek</span>
                        <span className="ml-2 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full">
                            Open to Work
                        </span>
                    </div>
                    <div className="hidden md:flex gap-8 items-center">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('education')}
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            Education
                        </button>
                        <button
                            onClick={() => scrollToSection('experience')}
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection('github')}
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            GitHub
                        </button>
                    </div>

                    <button
                        onClick={onChatClick}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                    >
                        💬 Chat
                    </button>
                </div>
            </nav>
        </header>
    );
}
