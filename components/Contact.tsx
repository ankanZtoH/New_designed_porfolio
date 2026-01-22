'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const handleCopy = (text: string, type: 'email' | 'phone') => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, subject, message } = formData;
        const mailtoLink = `mailto:ankan06edu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-dark text-md">
            <div className="absolute inset-0 bg-dark opacity-90 -z-10"></div>
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        Let's <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities in Data Science and AI.
                        Directly reach out or send a message below!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="flex flex-col gap-6 justify-start">
                        <div className="p-6 bg-surface/30 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary/30 transition-all group relative">
                            <button
                                onClick={() => handleCopy('ankan06edu@gmail.com', 'email')}
                                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
                                title="Copy Email"
                            >
                                {copiedEmail ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <Mail className="text-primary" size={28} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Email Me</p>
                                    <a href="mailto:ankan06edu@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors">
                                        ankan06edu@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-surface/30 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary/30 transition-all group relative">
                            <button
                                onClick={() => handleCopy('+917810937299', 'phone')}
                                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
                                title="Copy Phone Number"
                            >
                                {copiedPhone ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <Phone className="text-primary" size={28} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Call Me</p>
                                    <a href="tel:+917810937299" className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors">
                                        +91 78109 37299
                                    </a>
                                </div>
                            </div>
                        </div>



                        {/* Location Card */}
                        <div className="p-6 bg-surface/30 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary/30 transition-all flex items-center gap-4 group mt-2">
                            <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                <MapPin className="text-primary" size={28} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Located In</p>
                                <p className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                    Belur, Howrah , 711202
                                </p>
                            </div>
                        </div>

                        {/* Social Links Row */}
                        <div className="flex justify-center md:justify-start gap-4 mt-4">
                            <a href="https://github.com/ankanbera" target="_blank" className="p-4 bg-surface/50 border border-white/5 rounded-xl text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/ankanbera" target="_blank" className="p-4 bg-surface/50 border border-white/5 rounded-xl text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://instagram.com/ankanbera" target="_blank" className="p-4 bg-surface/50 border border-white/5 rounded-xl text-gray-400 hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Functional Form */}
                    <form onSubmit={handleSubmit} className="bg-surface/20 backdrop-blur-md p-8 rounded-3xl border border-white/5 flex flex-col gap-4 shadow-xl">
                        <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 font-medium ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 font-medium ml-1">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-gray-400 font-medium ml-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Collaboration"
                                className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-gray-400 font-medium ml-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Hi Ankan, I'd like to discuss a project..."
                                rows={4}
                                className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600 resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 w-full bg-primary text-dark font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(102,252,241,0.4)] transition-all flex items-center justify-center gap-2 group"
                        >
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

                <div className="pt-16 border-t border-white/5 text-gray-500 text-sm mt-16 text-center">
                    <p>&copy; {new Date().getFullYear()} Ankan Bera. Built with Lasting Innovations.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
