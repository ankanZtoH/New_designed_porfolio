'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
    {
        title: "It’s Not Generative vs. Agentic AI. It’s How They Work Together That Matters.",
        excerpt: "Why the future isn't about choosing one over the other, but integrating them for powerful workflows.",
        date: "Jan 15, 2026",
        readTime: "5 min read",
        category: "AI Strategy",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
        link: "https://medium.com/@ankanbera"
    },
    {
        title: "4 Surprising Truths About How Generative AI Really Works, According to an Expert",
        excerpt: "Debunking common myths and explaining the true mechanics of LLMs and diffusion models.",
        date: "Dec 22, 2025",
        readTime: "6 min read",
        category: "Deep Dive",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        link: "https://medium.com/@ankanbera"
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20 bg-surface/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-12 text-center">
                    Latest <span className="text-primary">Articles</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {blogPosts.map((post, index) => (
                        <Link
                            href={post.link}
                            key={index}
                            target="_blank"
                            className="group bg-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full block"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 z-10"></div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-primary/20 backdrop-blur-md text-primary text-xs font-bold rounded-full border border-primary/20">
                                    {post.category}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <button className="text-primary text-sm font-medium flex items-center gap-2 group/btn">
                                        Read Article <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
