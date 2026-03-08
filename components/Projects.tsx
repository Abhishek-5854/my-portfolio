'use client';

const projects = [
    {
        id: 1,
        title: 'FinGuard IPO Monitoring Platform',
        description: 'Comprehensive IPO monitoring platform using LLM RAG, LangChain, LangGraph with tool calling for AI-powered document understanding and investor dashboard',
        tech: ['Python', 'FastAPI', 'React', 'LLM RAG', 'LangChain', 'LangGraph', 'PostgreSQL'],
        github: 'https://github.com/Abhishek-5854/FinGuard-IPO-Monitoring-Analysis-Platform',
        demo: '#',
    },
    {
        id: 2,
        title: 'Trading LLM Bot',
        description: 'Ongoing AI trading assistant using Large Language Models - focusing on finetuning models with 15 years of market data to predict 30-minute price movements before/after major breakouts or breakdowns',
        tech: ['Python', 'LangChain', 'OpenAI', 'Jupyter', 'Pandas', 'Finetuning'],
        github: 'https://github.com/Abhishek-5854/Trading_LLM_BOT',
        demo: '#',
    },
    {
        id: 3,
        title: 'Pharm-App (Frontend)',
        description: 'Frontend of pharmacy management system with modern UI for inventory tracking and prescription management',
        tech: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/Abhishek-5854/Pharm-App',
        demo: '#',
    },
    {
        id: 4,
        title: 'MyPharmacy (Backend)',
        description: 'Backend of pharmacy management system built with .NET technologies for comprehensive medical inventory control',
        tech: ['C#', '.NET', 'SQL Server', 'Entity Framework'],
        github: 'https://github.com/Abhishek-5854/MyPharmacy',
        demo: '#',
    },
    {
        id: 5,
        title: 'PlayNex Hub',
        description: 'Gaming platform hub for connecting players and managing gaming communities',
        tech: ['JavaScript', 'React', 'Node.js', 'Socket.io'],
        github: 'https://github.com/Abhishek-5854/PlayNex-Hub',
        demo: '#',
    },
    {
        id: 6,
        title: 'Arcade Space Game',
        description: 'Classic arcade-style space shooter game built with Python and Pygame',
        tech: ['Python', 'Pygame', 'Game Development'],
        github: 'https://github.com/Abhishek-5854/arcade-space',
        demo: '#',
    },
];

export default function Projects() {
    return (
        <section id="projects" data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-slate-400">A collection of projects I&apos;ve built and shipped</p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            data-aos="zoom-in"
                            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl border border-blue-900/30 overflow-hidden hover:border-blue-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1"
                        >
                            {/* Project Header */}
                            <div className="h-32 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                <span className="text-4xl">
                                    {project.id === 1 ? '🤖' :
                                        project.id === 2 ? '📊' :
                                            project.id === 3 ? '⚙️' : '📈'}
                                </span>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 mt-2 text-sm">{project.description}</p>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-700/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3 pt-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg text-sm font-medium transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex-1 px-4 py-2 border border-blue-600 text-blue-400 hover:bg-blue-600/10 text-center rounded-lg text-sm font-medium transition-colors"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
