'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer data-aos="fade-up" className="border-t border-blue-900/30 bg-slate-950/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">A</span>
                            </div>
                            <span className="text-lg font-bold text-white">Abhishek</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Full-stack developer passionate about GenAI and agentic systems.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#github" className="text-slate-400 hover:text-blue-400 transition-colors">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Connect</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-blue-400 transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-blue-400 transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-blue-400 transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@example.com"
                                    className="text-slate-400 hover:text-blue-400 transition-colors"
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
                        <p className="text-slate-400 text-sm mb-4">
                            Subscribe for updates on new projects and articles.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 bg-slate-800 border border-blue-900/30 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                            />
                            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-blue-900/30 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-slate-400 text-sm">
                        © {currentYear} Abhishek. All rights reserved. Available for roles in GenAI, IoT & full-stack development.
                    </p>
                    <div className="flex gap-6 mt-6 md:mt-0">
                        <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
