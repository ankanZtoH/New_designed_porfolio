'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Code2, Battery, Wifi, Instagram } from 'lucide-react';

const roles = ["Data Science student", "Web Developer"];

const Hero = () => {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);


    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const formattedTime = time.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 85;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-25 pb-20 px-4 md:px-8">
            {/* Static Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary opacity-10 blur-[120px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-secondary opacity-10 blur-[120px]"></div>

            {/* iPad Container */}
            <div className="relative z-10 w-full max-w-[900px] md:scale-100 scale-95">
                <div
                    className="relative bg-black rounded-[3rem] p-3 md:p-4 shadow-2xl border-[4px] border-[#222]"
                    style={{ boxShadow: '0 0 0 1px #111, 0 30px 60px -10px rgba(0, 0, 0, 0.6), inset 0 0 0 2px rgba(255,255,255,0.1)' }}
                >
                    {/* Bezel / Camera */}

                    <div className="absolute top-0 w-full h-full pointer-events-none rounded-[2.5rem] ring-8 ring-gray-900/50 inset-0 z-50"></div>

                    {/* Camera Dot (Front) */}

                    {/* Mobile Camera (Top) */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full border border-gray-800 md:hidden z-50"></div>


                    {/* Screen */}
                    <div className="w-full bg-slate-950 rounded-[2rem] overflow-hidden flex flex-col relative aspect-[9/16] md:aspect-[4/3] lg:aspect-[16/10]">

                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-6 py-2 text-xs font-medium text-white/80 bg-black/20 backdrop-blur-sm z-20">
                            <span className="tracking-widest">{mounted ? formattedTime : '09:41'}</span>
                            <div className="flex gap-4 items-center">
                                <Wifi size={14} />
                                <div className="flex items-center gap-1">
                                    <span className="text-[10px]">100%</span>
                                    <Battery size={16} className="text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area (Grid) */}
                        <div className="flex flex-col md:flex-row h-full relative z-10 ">

                            {/* Left Side: Profile (Glass Effect) */}
                            <div className="md:w-[35%] w-full bg-white/1 backdrop-blur-md border-b md:border-b-0 md:border-r border-white/5 p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden shrink-0 h-[40%] md:h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-30"></div>

                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary mb-0 md:mb-6 shadow-2xl shadow-primary/20 relative z-10">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                                        <img src="/profile.png" alt="Ankan Bera" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Desktop only name/stream (Hidden on mobile as requested to reduce duplication, or remove entirely if 'tab' meant tab view) */}
                                {/* User said 'in the tab there have name , stream 2 times which is not making sencce' - interpreting as removing it from this left panel entirely for cleaner look, or keeping it strictly minimal */}
                                {/* Removing text from left panel completely to let Right side handle Intro identity */}

                                <div className="hidden md:grid grid-cols-2 gap-3 w-full max-w-[280px] mt-8 relative z-20">
                                    <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/5 transition-all group cursor-pointer">
                                        <Code2 size={20} className="text-secondary group-hover:scale-110 transition-transform" />
                                        <span className="text-[10px] text-gray-400">Projects</span>
                                    </a>
                                    <a href="https://github.com/ankanbera" target="_blank" className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/5 transition-all group cursor-pointer">
                                        <Github size={20} className="text-white group-hover:scale-110 transition-transform" />
                                        <span className="text-[10px] text-gray-400">Github</span>
                                    </a>
                                    <a href="https://linkedin.com/in/ankanbera" target="_blank" className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/5 transition-all group cursor-pointer">
                                        <Linkedin size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                                        <span className="text-[10px] text-gray-400">LinkedIn</span>
                                    </a>
                                    <a href="https://instagram.com/ankanbera" target="_blank" className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/5 transition-all group cursor-pointer">
                                        <Instagram size={20} className="text-pink-500 group-hover:scale-110 transition-transform" />
                                        <span className="text-[10px] text-gray-400">Instagram</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right Side: Intro & Details */}
                            <div className="md:w-[65%] w-full h-[60%] md:h-full p-5 md:p-8 lg:p-10 flex flex-col justify-start text-left relative overflow-hidden pt-4 md:justify-center">
                                {/* <h3 className="text-primary text-[10px] md:text-sm font-medium mb-1 md:mb-2 tracking-wide uppercase flex items-center gap-2 opacity-80">
                                    <span className="w-4 md:w-6 h-[1px] bg-primary block"></span>
                                    Introduction
                                </h3> */}

                                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-1 md:mb-2 tracking-tight leading-tight whitespace-nowrap">
                                    <span className='text-primary'>He</span>llo,
                                </h1>
                                <h1 className='text-xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-2 md:mb-5'>
                                    <span className='text-primary'>I'm </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Ankan Bera</span>
                                </h1>

                                <div className="text-base md:text-xl lg:text-2xl text-gray-300 font-light mb-3 md:mb-4 h-6 md:h-8 flex items-center">
                                    is a <span className="text-white font-semibold ml-2">{text}</span>
                                    <span className="cursor-blink ml-1">|</span>
                                </div>

                                <p className="w-[80%] text-[10px] md:text-base text-gray-400 mb-6 md:mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">
                                    Bridging the gap between Applied Mathematics, Artificial Intelligence, and Full-Stack Development.
                                    Building intelligent systems for the future.
                                </p>

                                <div className=" w-full md:w-auto">
                                    {/* Mobile Social Links - Above Buttons */}
                                    <div className="flex md:hidden justify-start gap-4 mb-3 relative z-20">
                                        <a href="https://github.com/ankanbera" target="_blank" className="p-2.5 bg-white/5 rounded-xl text-white border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                                            <Github size={18} />
                                        </a>
                                        <a href="https://linkedin.com/in/ankanbera" target="_blank" className="p-2.5 bg-white/5 rounded-xl text-blue-400 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                                            <Linkedin size={18} />
                                        </a>
                                        <a href="https://instagram.com/ankanbera" target="_blank" className="p-2.5 bg-white/5 rounded-xl text-pink-500 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                                            <Instagram size={18} />
                                        </a>
                                        <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/5 transition-all group cursor-pointer">
                                            <Code2 size={20} className="text-secondary group-hover:scale-110 transition-transform" />

                                        </a>
                                    </div>

                                    {/* Action Buttons - Cuboid/Grid on Mobile */}
                                    <div className="grid grid-cols-2 md:flex gap-3 md:gap-3">
                                        <a
                                            href="#projects"
                                            onClick={(e) => handleScroll(e, '#projects')}
                                            className="cursor-pointer px-4 md:px-5 py-3 md:py-2.5 bg-primary text-dark text-xs md:text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(102,252,241,0.3)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-center"
                                        >
                                            View Work <ArrowRight size={14} className="hidden md:inline md:w-4 md:h-4" />
                                        </a>
                                        <a
                                            href="#contact"
                                            onClick={(e) => handleScroll(e, '#contact')}
                                            className="cursor-pointer px-4 md:px-5 py-3 md:py-2.5 border border-white/20 text-white text-xs md:text-sm rounded-xl hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center text-center"
                                        >
                                            Contact Me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-50"></div>
                    </div>

                    {/* Glass Reflection */}
                    <div className="absolute inset-0 rounded-[3rem] pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent z-40"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
