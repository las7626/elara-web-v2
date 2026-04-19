import { Mail, Phone } from 'lucide-react';
import LogoMark from './LogoMark';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoMark compact dark />
              <div>
                <h3 className="text-xl font-extrabold leading-none">Elara Tecnologia</h3>
                <p className="text-white/65 text-sm mt-1">Consultoria em TI para pequenas empresas</p>
              </div>
            </div>
            <p className="text-white/70">
              Infraestrutura, organização e suporte para negócios que precisam de TI funcionando com seriedade.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-white/90" />
                <span>contato@elaratecnologia.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-white/90" />
                <span>(11) 3000-0000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/55 text-sm">
            <p>&copy; {currentYear} Elara Tecnologia. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
