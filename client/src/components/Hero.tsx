export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pills = ['Suporte confiável', 'Mais organização', 'Menos paradas'];

  return (
    <section id="hero" className="pt-32 pb-18 md:pt-40 md:pb-24 bg-background relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.02fr_0.98fr] gap-14 items-center">
          <div className="flex flex-col gap-7 animate-fade-in">
            <div className="eyebrow">
              Infraestrutura, segurança e suporte para pequenos negócios
            </div>

            <div>
              <h1 className="heading-xl text-foreground mb-5 max-w-xl">
                Sua TI organizada, segura e pronta para o dia a dia do seu negócio
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                A Elara cuida da rede, acessos, servidores, estrutura física e suporte para que sua empresa tenha mais controle, menos improviso e mais continuidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Solicitar contato
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="btn-secondary"
              >
                Ver serviços
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {pills.map((pill) => (
                <span key={pill} className="hero-pill">{pill}</span>
              ))}
            </div>
          </div>

          <div className="hero-media flat-panel flat-panel-hero animate-fade-in-delayed">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663492254489/2ZvjmHnWYcjByrPRe62eiC/hero-server-room-hfKYEauKvbHyYBwT2JwoRv.webp"
              alt="Infraestrutura de TI em ambiente corporativo"
              className="hero-media-image image-soft"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/16 via-transparent to-[#0052CC]/10"></div>

            <div className="absolute left-4 right-4 bottom-4 md:left-5 md:right-5 md:bottom-5">
              <div className="flat-caption">
                <div>
                  <p className="text-sm font-semibold text-foreground">Consultoria próxima e prática</p>
                  <p className="text-sm text-muted-foreground">Estrutura de TI para empresas que precisam funcionar bem, sem complicação.</p>
                </div>
                <span className="caption-badge">TI sob controle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
