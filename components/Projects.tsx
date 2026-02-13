'use client';

import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Diabetes Risk Factor Assessment Web Application",
        description: "Built a web-based diabetes risk assessment system to help users estimate their risk level based on lifestyle and clinical parameters. Designed an interactive frontend using Next.js and integrated a Django backend.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Django", "SQLite"],
        date: "2025",
        link: "https://preceptron-diabetes-risk-factor-cal.vercel.app/",
        github: "https://github.com/ankanZtoH/preceptron_diabetes_risk_factor.git"
    },
    {
        title: "AI-Powered SQL Chatbot",
        description: "Developed an LLM-powered SQL chatbot allowing non-technical users to query databases in natural language. Enabled teams to access data without writing SQL.",
        tags: ["Python", "LangChain", "OpenAI", "SQL"],
        date: "Nov 2025 - Dec 2025",
        link: "#",
        github: "https://github.com/ankanZtoH/-AI-Powered-SQL-Chatbot-for-Easy-Data-Access.git"
    },
    {
        title: "Synthetic Defect Image Generation",
        description: "Applied GANs and Diffusion models to synthesize realistic defect images (88% FID) to augment datasets. Built a full-stack web app for model training.",
        tags: ["PyTorch", "Next.js", "FastAPI", "GANs"],
        date: "2024",
        link: "#",
        github: "#"
    },
    {
        title: "Credit Risk Modeling",
        description: "Built a machine learning system to assess loan default probability using classification models, enabling accurate identification of high-risk applicants.",
        tags: ["Python", "Scikit-Learn", "Pandas", "ML"],
        date: "2024",
        link: "#",
        github: "https://github.com/ankanZtoH/Credit-Risk-Modelling-Through-Machine-Learning-.git"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-surface/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-12 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="group relative bg-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full"
                        >
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-md border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    {project.github && project.github !== '#' ? (
                                        <Link href={project.github} className="flex-1 py-2.5 rounded-lg bg-white/5 text-white text-sm font-medium hover:bg-white/10 flex items-center justify-center gap-2 transition-all">
                                            <Github size={16} /> Code
                                        </Link>
                                    ) : (
                                        <button disabled className="flex-1 py-2.5 rounded-lg bg-white/5 text-gray-500 text-sm font-medium flex items-center justify-center gap-2 cursor-not-allowed opacity-50 transition-all">
                                            <Github size={16} /> Code
                                        </button>
                                    )}
                                    {project.link && project.link !== '#' ? (
                                        <Link href={project.link} className="flex-1 py-2.5 rounded-lg bg-primary text-dark text-sm font-bold hover:bg-primary/90 flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
                                            <ExternalLink size={16} /> Demo
                                        </Link>
                                    ) : (
                                        <button disabled className="flex-1 py-2.5 rounded-lg bg-primary/20 text-gray-500/50 text-sm font-bold flex items-center justify-center gap-2 cursor-not-allowed opacity-50 transition-all">
                                            <ExternalLink size={16} /> Demo
                                        </button>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
