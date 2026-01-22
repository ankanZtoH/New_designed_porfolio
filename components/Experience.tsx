'use client';

const experienceData = [
    {
        year: '2025 - Present',
        role: 'Freelance Developer',
        company: 'E16 Classes',
        points: [
            'Developed and maintained web-based educational tools and platforms.',
            'Implemented features for quizzes, student interaction, and content management.',
        ],
    },
    {
        year: '2021 - 2023',
        role: 'Junior Developer',
        company: 'Web Innovations Co.',
        points: [
            'Assisted in building responsive user interfaces for various client projects.',
            'Wrote clean, maintainable, and efficient code following best practices. and learned from senior developers.',

        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-16 text-center">
                    Work <span className="text-primary">Experience</span>
                </h2>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 -translate-x-1/2"></div>

                    {/* Mobile Line (Left side) */}
                    <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-0">
                        {experienceData.map((item, index) => (
                            <div key={index} className={`relative md:py-0 py-4 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>

                                {/* Desktop Dot - Center Line */}
                                <div className={`hidden md:block absolute top-0 w-3 h-3 bg-dark border-2 border-primary rounded-full z-10 shadow-[0_0_10px_rgba(102,252,241,0.5)] ${index % 2 === 0 ? '-right-[6px]' : '-left-[6px]'}`}></div>

                                {/* Mobile Dot */}
                                <div className="md:hidden absolute left-[15px] top-5 w-3 h-3 bg-dark border-2 border-primary rounded-full z-10 shadow-[0_0_10px_rgba(102,252,241,0.5)]"></div>

                                <div className="pl-12 md:pl-0">
                                    <span className="text-primary font-mono text-sm block mb-1">{item.year}</span>
                                    <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                                    <p className="text-gray-400 font-medium text-sm mb-4">{item.company}</p>

                                    <ul className={`space-y-2 inline-block text-left ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                                        {item.points.map((point, i) => (
                                            <li key={i} className={`flex gap-3 text-gray-400 text-sm leading-relaxed ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0 visible`}></span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
