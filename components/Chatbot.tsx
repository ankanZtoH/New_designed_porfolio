'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import Image from 'next/image';

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'bot';
};

const quickOptions = [
    "Skills", "Projects", "Contact Me", "About You", "Experience"
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi! I'm Ankan's virtual assistant. how can i help you ?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [showOptions, setShowOptions] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const generateResponse = (text: string): string => {
        const lowerText = text.toLowerCase();

        // Greetings
        if (lowerText.match(/^(hi|hello|hey|greetings)/)) {
            return "Hello! I'm here to tell you all about Ankan. What would you like to know?";
        }

        // About
        if (lowerText.includes('about') || lowerText.includes('who are you') || lowerText.includes('who is ankan')) {
            return "Ankan is a Master's student in Data Science at RKMVERI (2025-2027) with a B.Sc. in Computer Science. He bridges the gap between Theoretical Math and Applied AI, building intelligent systems for the future.";
        }

        // Skills
        if (lowerText.includes('skill') || lowerText.includes('stack') || lowerText.includes('technology') || lowerText.includes('language')) {
            return "Ankan's arsenal includes:\n• Core: Python, C/C++, SQL\n• AI/ML: PyTorch, TensorFlow, LangChain, Scikit-Learn\n• Web: Next.js, React, FastAPI, Docker\nHe specializes in building scalable, production-ready AI systems.";
        }

        // Projects
        if (lowerText.includes('project') || lowerText.includes('work') || lowerText.includes('portfolio')) {
            return "Some featured projects include:\n1. AI-Powered SQL Chatbot (LangChain, OpenAI)\n2. Synthetic Defect Image Generation (GANs, Diffusion)\n3. Credit Risk Modeling (ML Classification)\nCheck the 'Projects' section for more details!";
        }

        // Experience
        if (lowerText.includes('experience') || lowerText.includes('job') || lowerText.includes('company')) {
            return "Ankan has experience as:\n• Freelance Developer at E16 Classes (2025-Present)\n• Junior Developer at Web Innovations Co. (2021-Present)\nHe has built educational tools and responsive web interfaces.";
        }

        // Contact
        if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('phone') || lowerText.includes('reach')) {
            return "You can reach Ankan via:\n• Email: ankan06edu@gmail.com\n• Phone: +91 78109 37299\n• Location: Belur, Howrah\nOr use the contact form on the left!";
        }
        // education
        if (lowerText.includes('education') || lowerText.includes('qualifications') || lowerText.includes('degree')) {
            return "Ankan holds a B.Sc. in Computer Science from Midnapore College (CGPA: 7.63) and is currently pursuing an M.Sc. in Data Science and AI at RKMVERI.";
        }


        if (lowerText.includes('bye') || lowerText.includes('goodbye')) {
            return "Goodbye! Feel free to reach out anytime.";
        }

        return "I'm not sure about that, but I can tell you about Ankan's skills, projects, experience, or education. Just ask!";
    };

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = { id: Date.now(), text: text, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setShowOptions(false);

        setTimeout(() => {
            const botResponse = generateResponse(text);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
        }, 600);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSend(input);
    };

    return (
        <div className="fixed bottom-10 md:bottom-20 right-6 z-[100] flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] max-w-[calc(100vw-48px)] h-[550px] max-h-[70vh] bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
                    {/* Header */}
                    <div className="p-4 bg-primary/10 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/30">
                                <Image
                                    src="/chatbot-logo.png"
                                    alt="Bot"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Ankan's Assistant</h3>
                                <p className="text-[10px] text-primary flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span> Online
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.sender === 'bot' && (
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 mr-2 flex-shrink-0 relative">
                                        <Image
                                            src="/chatbot-logo.png"
                                            alt="Bot"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${msg.sender === 'user'
                                        ? 'bg-primary text-dark rounded-tr-none font-medium'
                                        : 'bg-white/10 text-gray-200 rounded-tl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Initial Quick Options */}
                        {messages.length === 1 && showOptions && (
                            <div className="flex flex-wrap gap-2 mt-4 ml-10">
                                {quickOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSend(option)}
                                        className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-3 py-1.5 rounded-full transition-colors"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleFormSubmit} className="p-3 border-t border-white/5 bg-gray-900/50">
                        <div className="relative flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about skills, projects..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="absolute right-2 p-2 bg-primary text-dark rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <div className="relative group">
                {/* Tooltip */}
                <div className="absolute bottom-full mb-3 right-0 w-max bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Ask any query?
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative p-0 w-14 h-14 bg-dark rounded-full shadow-[0_0_20px_rgba(102,252,241,0.3)] hover:shadow-[0_0_30px_rgba(102,252,241,0.5)] hover:scale-110 transition-all duration-300 z-[100] overflow-hidden border-2 border-primary"
                >
                    <Image
                        src="/chatbot-logo.png"
                        alt="Chat"
                        fill
                        className="object-cover"
                    />
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
