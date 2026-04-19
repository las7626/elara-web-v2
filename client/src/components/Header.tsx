import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Soluções', id: 'solutions' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/92 backdrop-blur-md border-b border-border z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 text-left"
            aria-label="Ir para o início"
          >
            <span className="logo-mark">
              <span className="logo-letter">E</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-foreground">Elara Tecnologia</span>
              <span className="text-[11px] md:text-xs text-muted-foreground mt-1">Consultoria em TI para pequenas empresas</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1 nav-shell">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex btn-primary"
          >
            Fale Conosco
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-xl transition-colors"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-foreground font-medium hover:text-primary hover:bg-secondary rounded-xl transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary mx-1 mt-2"
              >
                Fale Conosco
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
