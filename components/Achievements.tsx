'use client';

export default function Achievements() {
    const achievements = [
    {
        id: 1,
        title: 'Hackathon Winner – Bionic Arm Rover',
        value: 'Innovation Project',
        description: 'Built a four-wheel rover with a bionic arm for plant disease detection and pruning'
    },
    {
        id: 2,
        title: 'LeetCode Problems Solved',
        value: '150+',
        description: 'Data structures and algorithms practice'
    },
    {
        id: 3,
        title: 'Hackathons Participated',
        value: '3+',
        description: 'Innovation and teamwork experiences'
    },
    {
        id: 4,
        title: 'AI-900 Certified',
        value: 'Microsoft',
        description: 'Azure AI Fundamentals certification'
    },
    {
        id: 5,
        title: 'AZ-900 Certified',
        value: 'Microsoft',
        description: 'Azure Fundamentals certification'
    },
    {
        id: 6,
        title: 'AI-102 Certified',
        value: 'Microsoft',
        description: 'Azure AI Engineer Associate'
    }
];

    return (
        <section id="achievements" data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                            Achievements
                        </span>
                    </h2>
                    <p className="text-slate-400">Certifications, competitions, and milestones</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, idx) => (
                        <div
                            key={achievement.id}
                            data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400 mb-2">{achievement.value}</div>
                                <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                                <p className="text-slate-400 text-sm">{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}