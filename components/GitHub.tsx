'use client';

const repositories = [
    {
        name: 'ai-agent-framework',
        description: 'A comprehensive framework for building multi-agent AI systems',
        stars: 324,
        language: 'Python',
        url: 'https://github.com/Abhishek-5854/ai-agent-framework',
    },
    {
        name: 'realtime-dashboard',
        description: 'Interactive real-time data visualization dashboard',
        stars: 156,
        language: 'TypeScript',
        url: 'https://github.com/Abhishek-5854/realtime-dashboard',
    },
    {
        name: 'ml-pipeline',
        description: 'Automated machine learning pipeline with MLOps best practices',
        stars: 89,
        language: 'Python',
        url: 'https://github.com/Abhishek-5854/ml-pipeline',
    },
    {
        name: 'nextjs-ecommerce',
        description: 'Full-featured e-commerce platform built with Next.js',
        stars: 234,
        language: 'TypeScript',
        url: 'https://github.com/Abhishek-5854/nextjs-ecommerce',
    },
];

export default function GitHub() {
    return (
        <section id="github" data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                            GitHub Repositories
                        </span>
                    </h2>
                    <p className="text-slate-400">Check out my latest projects on GitHub (<a href="https://github.com/Abhishek-5854" className="underline">@Abhishek-5854</a>)</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {repositories.map((repo) => (
                        <a
                            key={repo.name}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-blue-900/30 p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                        <span className="text-blue-400">📦</span> {repo.name}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-slate-400 text-sm mb-4">{repo.description}</p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-2 text-sm text-slate-400">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                        {repo.language}
                                    </span>
                                    <span className="flex items-center gap-2 text-sm text-slate-400">
                                        ⭐ {repo.stars}
                                    </span>
                                </div>
                                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
                                    →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* GitHub Stats */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-900/30 to-slate-800 rounded-lg border border-blue-600/30 p-6">
                        <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
                        <div className="text-sm text-slate-400">Total Contributions</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900/30 to-slate-800 rounded-lg border border-blue-600/30 p-6">
                        <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                        <div className="text-sm text-slate-400">GitHub Followers</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900/30 to-slate-800 rounded-lg border border-blue-600/30 p-6">
                        <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                        <div className="text-sm text-slate-400">Public Repositories</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
