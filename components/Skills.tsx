'use client';

const skillCategories = [
    {
        category: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Bootstrap'],
    },
    {
        category: 'Backend',
        skills: [
            'FastAPI',
            'Node.js',
            'Express.js',
            'REST APIs',
            'GraphQL',
            'PyQt',
            'Tkinter'
        ],
    },
    {
        category: 'AI / ML',
        skills: [
            'LangChain',
            'RAG',
            'HuggingFace',
            'LLMs',
            'LLM Finetuning',
            'Prompt Engineering',
            'Google ADK',
            'CX Studio'
        ],
    },
    {
        category: 'DevOps',
        skills: [
            'Docker',
            'Git',
            'CI/CD',
            'Jenkins',
            'GitHub Actions',
            'Kubernetes',
            'SonarQube',
            'Grafana'
        ],
    },
    {
        category: 'Databases',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Server'],
    },
    {
        category: 'Game Development',
        skills: ['Python', 'Pygame', 'Game Design'],
    },
];

export default function Skills() {
    return (
        <section id="skills" data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                            Skills & Expertise
                        </span>
                    </h2>
                    <p className="text-slate-400">Technologies I work with</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={category.category}
                            data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-blue-900/30 p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <h3 className="text-xl font-bold text-blue-400 mb-4">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-lg hover:bg-blue-900/50 transition-colors cursor-default border border-blue-700/30"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
