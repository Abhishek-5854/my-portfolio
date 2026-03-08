'use client';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: "Capgemini",
            role: "Software Engineer", // Update with actual role
            timeline: "2024 – Present",
            responsibilities: [
                "Delivered 2 client-driven POCs and features under tight timelines, translating evolving requirements into working solutions for stakeholder demos and go/no-go decisions.",
                "Built and shipped GenAI capabilities using LangChain and LangGraph with RAG pipelines and OpenAI models to enable context-aware responses over private knowledge bases.",
                "Implemented end-to-end retrieval pipelines (document ingestion, chunking, embeddings, similarity search) and orchestrated multi-step GenAI workflows with tool-calling and guardrails to improve answer relevance.",
                "Designed REST APIs and background services to expose GenAI features; added logging and basic metrics to monitor latency, fallback usage, and response quality. ",
                "Analyzed and resolved functional/production issues; collaborated using Git (branching, reviews, merges) to maintain code quality and delivery velocity."
            ]
        },
        {
            id: 2,
            title: "Dquip Technologies – CRM Development Internship",
            role: "Junior Software Developer Intern",
            timeline: "Jul 2022 – Oct 2022",
            responsibilities: [
                "Contributed to CRM feature development using PHP (Laravel 6)",
                "Built backend logic and database workflows",
                "Assisted with Git version control and repository management",
                "Helped develop UI pages for CRM system",
                "Participated in debugging and feature improvements"
            ]
        },
        {
            id: 3,
            title: "Nirmaan Hyperloop Team",
            role: "Embedded Systems / Control Systems Contributor",
            timeline: "2021 – 2023",
            responsibilities: [
                "Worked on sensor data collection and control system design",
                "Developed monitoring dashboards for telemetry and sensor streams",
                "Assisted with simulation and testing for hyperloop system components",
                "Collaborated with multidisciplinary engineering team"
            ]
        },
        {
            id: 4,
            title: "Origin Tech – Embedded Systems Internship",
            role: "Embedded Systems Intern",
            timeline: "2021",
            responsibilities: [
                "Worked with microcontrollers and hardware interfacing",
                "Implemented monitoring logic and sensor integrations",
                "Contributed to prototype testing and debugging"
            ]
        },

    ];

    return (
        <section id="experience" data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
            <div className="max-w-4xl mx-auto relative">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                            Professional Experience
                        </span>
                    </h2>
                    <p className="text-slate-400">
                        My journey in embedded systems and software development
                    </p>
                </div>

                {/* Vertical Timeline Line */}
                <div className="absolute left-8 top-32 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-600"></div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} data-aos="fade-up" className="relative flex items-start">
                            {/* Timeline Dot */}
                            <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 mt-6"></div>

                            {/* Content Card */}
                            <div className="ml-12 flex-1">
                                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all hover:border-blue-600/50">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                            <p className="text-blue-400 font-medium mb-2">{exp.role}</p>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                                                {exp.timeline}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="text-slate-400 text-sm flex items-start">
                                                <span className="text-blue-400 mr-2 mt-1.5">•</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
