'use client';

import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="about"
            data-aos="fade-up"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
            <div className="max-w-6xl w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Info - Left Side */}
                    <div className="space-y-6 animate-fade-in-up">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                                    Hi, I&apos;m Abhishek
                                </span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-4">
                                B.Tech in IoT | Embedded Systems & AI Enthusiast
                            </p>
                        </div>

                        <p className="text-slate-400 leading-relaxed">
                            I build intelligent systems that combine embedded hardware, data pipelines, and AI-driven applications.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="/Resume Abhishek-Gupta.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                            >
                                View Resume
                            </a>
                            <a
                                href="https://github.com/Abhishek-5854"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-medium transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abhishek-gupta-627a8b204"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-medium transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Profile Image - Right Side */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-48 h-48 md:w-56 md:h-56">
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-xl"></div>

                            {/* Profile image container */}
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-full h-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                                <Image
                                    src="/profile_img.jpg"
                                    alt="Profile picture"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative wave */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg
                    className="w-full text-slate-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="currentColor"
                        fillOpacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,106.7C672,96,768,96,864,96C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
