'use client';

import { Terminal, Cpu, Globe, Database, Code2, Layout, GitBranch, Server } from 'lucide-react';

const skillsData = [
    {
        category: "The Core Programming Languages",
        description: "The fundamental tools I use to build logic and optimize performance.",
        items: [
            {
                name: "Python",
                icon: Terminal,
                tags: ["Pandas", "NumPy", "AsyncIO"]
            },
            {
                name: "C / C++",
                icon: Code2,
                tags: ["Memory Management", "Pointers"]
            },
            {
                name: "SQL",
                icon: Database,
                tags: ["PostgreSQL", "Normalization"]
            }
        ]
    },
    {
        category: "The Intelligence (AI & ML)",
        description: "Designing, training, and deploying intelligent models.",
        items: [
            {
                name: "PyTorch & TensorFlow",
                icon: Cpu,
                tags: ["Neural Networks", "Computer Vision"]
            },
            {
                name: "LangChain",
                icon: GitBranch,
                tags: ["RAG", "Agents"]
            },
            {
                name: "Scikit-Learn",
                icon: Layout,
                tags: ["Regression", "Clustering"]
            }
        ]
    },
    {
        category: "The Ecosystem (Web & Cloud)",
        description: "Delivering full-stack solutions with modern frameworks.",
        items: [
            {
                name: "Next.js & React",
                icon: Globe,
                tags: ["SSR", "Hooks", "Tailwind"]
            },
            {
                name: "FastAPI",
                icon: Server,
                tags: ["Swagger", "Pydantic"]
            },
            {
                name: "Cloud & DevOps",
                icon: Terminal,
                tags: ["Docker", "Git"]
            }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        It's not just about knowing the syntax. It's about knowing <strong>how</strong> to apply the right tool to solve complex problems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <div
                            key={index}
                            className="bg-surface/20 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden flex flex-col h-full hover:border-primary/20 transition-all duration-300"
                        >
                            {/* Category Header */}
                            <div className="p-8 border-b border-white/5 bg-white/5">
                                <h3 className="text-xl font-bold text-white mb-2">{category.category}</h3>
                                <p className="text-sm text-gray-400">{category.description}</p>
                            </div>

                            {/* Items List */}
                            <div className="p-6 flex flex-col gap-6 flex-grow">
                                {category.items.map((item, i) => (
                                    <div key={i} className="group">
                                        <div className="flex items-start gap-4 mb-3">
                                            <div className="p-2 bg-dark rounded-lg border border-white/10 text-primary shrink-0 group-hover:border-primary/50 transition-colors">
                                                <item.icon size={18} />
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.name}</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.tags.map((tag, t) => (
                                                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {i !== category.items.length - 1 && <div className="h-px bg-white/5 w-full my-2"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
