'use client';

import { GraduationCap, Award, Brain, Code, Cpu, Globe, Zap, Layers, GitBranch } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-28 bg-dark relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-70"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* 1. TOP SECTION: The Hook (Centered Bio) */}
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <h2 className="text-4xl font-bold tracking-[0.2em] text-primary uppercase mb-4">
                        Who I Am ?
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-8">
                        Bridging the divide between <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Theoretical Math</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Applied AI.</span>
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed mx-auto max-w-3xl">
                        I am a <strong className="text-white">Master's student in Data Science</strong> with a relentless drive to engineer systems that are not just intelligent, but foundational. <br className="hidden md:block" />
                        My work moves fluidly from distinct mathematical proofs to scalable, production-ready code.
                    </p>
                </div>

                {/* 2. BOTTOM SECTION: The Dashboard (2 Col Grid) */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Column 1: Education (Timeline) */}
                    <div className="bg-surface/30 rounded-3xl p-8 border border-white/5 hover:border-primary/20 transition-colors group h-full">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                                <GraduationCap size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white">Education</h4>
                        </div>

                        <div className="space-y-12 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/10"></div>

                            <div className="relative pl-8">
                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-dark border-2 border-primary z-10"></div>
                                <span className="text-xs font-bold text-primary tracking-wider uppercase mb-1 block">2025 - 2027</span>
                                <h5 className="text-lg font-bold text-white">M.Sc. Data Science And AI</h5>
                                <p className="text-sm text-gray-400 mt-1">RKMVERI, Belur</p>
                            </div>

                            <div className="relative pl-8">
                                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-dark border-2 border-secondary z-10"></div>
                                <span className="text-xs font-bold text-primary tracking-wider uppercase mb-1 block">2022 - 2025 <span className='ml-5'>CGPA : 7.63</span></span>
                                <h5 className="text-lg font-bold text-white">B.Sc. Computer Science</h5>
                                <p className="text-sm text-gray-400 mt-1">Midnapore College Autonomous , Midnapore</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: The Numbers (Stats) */}
                    <div className="space-y-6">
                        <div className="bg-surface/30 rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute right-0 top-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>

                            <div className="flex flex-col gap-6">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-2 text-gray-400">
                                        <Zap size={20} className="text-yellow-400" />
                                        <span className="text-sm font-bold uppercase tracking-wider">Total Projects</span>
                                    </div>
                                    <div className="text-6xl font-bold text-white mb-2">12+</div>
                                    <p className="text-sm text-gray-500">Delivered across Machine Learning & Web Development</p>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-2 text-gray-400">
                                        <GitBranch size={20} className="text-green-400" />
                                        <span className="text-sm font-bold uppercase tracking-wider">Years Active</span>
                                    </div>
                                    <div className="text-6xl font-bold text-white mb-2">One</div>
                                    <p className="text-sm text-gray-500">Consistent contribution in College Website work</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

// Helper Icon for Tech Stack
const StackIcon = ({ size, className }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
    </svg>
);

export default About;
