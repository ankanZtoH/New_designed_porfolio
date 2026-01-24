'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { div } from 'framer-motion/client';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById('tablet-scroll-container');

    const handleScroll = () => {
      const scrollY = container ? container.scrollTop : window.scrollY;
      setScrolled(scrollY > 50);
    };

    const target = container || window;
    target.addEventListener('scroll', handleScroll);
    return () => target.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    const container = document.getElementById('tablet-scroll-container');

    if (element) {
      const headerOffset = 85;

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const offset = elementRect.top - containerRect.top + container.scrollTop - headerOffset;

        container.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      } else {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleDesktopScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const handleMobileScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    // Small delay to allow menu closing animation to start/finish
    setTimeout(() => {
      scrollToSection(href);
    }, 300);
  };

  return (
    <nav className={`w-full transition-all duration-300 border-b border-white/5 ${scrolled
      ? 'bg-black/40 backdrop-blur-md py-2'
      : 'bg-transparent py-4'
      }`}>
      <div className="px-6 flex justify-between md:justify-around items-center md:gap-12">
        <Link href="/" className="text-2xl font-bold font-heading text-primary flex items-center gap-2" onClick={() => {
          const c = document.getElementById('tablet-scroll-container');
          if (c) c.scrollTo({ top: 0, behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <Code2 className="w-8 h-8" />
          <span><span className='text-white font-bold text-3xl'>A</span>nkan<span className="text-secondary">.</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleDesktopScroll(e, link.href)}
              className="text-text-main hover:text-primary transition-colors font-medium font-heading cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume_ankanBera.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary/10 transition-all font-heading font-semibold"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-main hover:text-primary transition-colors cursor-pointer relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/5"
            style={{ position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 40 }}
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl text-text-main hover:text-primary font-heading cursor-pointer block w-full py-2"
                  onClick={(e) => handleMobileScroll(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume_ankanBera.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-primary font-bold font-heading py-2 block w-full"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
