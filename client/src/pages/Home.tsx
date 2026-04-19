import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Elara Tecnologia - Landing Page
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * - Swiss Design principles
 * - Clean white/black/blue color scheme
 * - Generous whitespace
 * - Professional typography
 * - Smooth interactions
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
