'use client';

export default function Education() {
    return (
        <section id="education" data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    <p className="text-slate-400">
                        Academic background and qualifications
                    </p>
                </div>

                <div className="space-y-8">
                    {/* B.Tech Degree */}
                    <div data-aos="fade-up" className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-blue-900/30 p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">B.Tech in Internet of Things</h3>
                                <p className="text-blue-400 font-medium mb-1">Thakur College of Engineering and Technology, Mumbai</p>
                                <p className="text-slate-400 text-sm">CGPA: 9.07</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                                    2020 - 2024
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Higher Secondary Education */}
                    <div data-aos="fade-up" className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-blue-900/30 p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">Higher Secondary Education</h3>
                                <p className="text-blue-400 font-medium mb-1">Durgadevi Saraf College</p>
                                <p className="text-slate-400 text-sm">Science Stream</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                                    2018 - 2020
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div data-aos="fade-up" className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-blue-900/30 p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                        <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-slate-300">AWS Cloud Practitioner</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-slate-300">Google Cloud Professional</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-slate-300">Microsoft Azure Fundamentals</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-slate-300">IoT Specialization</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-slate-300">Embedded Systems</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-slate-300">Data Structures & Algorithms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}