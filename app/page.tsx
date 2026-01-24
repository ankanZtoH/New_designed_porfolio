import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Hero>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </Hero>
      <Chatbot />
    </main>
  );
}
