import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Redução de problemas',
      description: 'Menos falhas recorrentes e mais estabilidade para a operação.'
    },
    {
      title: 'Organização do ambiente',
      description: 'Usuários, acessos, equipamentos e documentação em ordem.'
    },
    {
      title: 'Segurança dos dados',
      description: 'Boas práticas, controle de acesso e menos riscos no dia a dia.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[0.94fr_1.06fr] gap-12 items-center">
          <div className="section-media flat-panel order-2 md:order-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663492254489/2ZvjmHnWYcjByrPRe62eiC/about-it-team-kAuNi5gE2GTkQp9BKMaooB.webp"
              alt="Equipe de TI em ambiente corporativo"
              className="section-media-image image-soft object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/8 to-transparent"></div>
          </div>

          <div className="flex flex-col gap-8 order-1 md:order-2">
            <div>
              <span className="section-label">Sobre a Elara</span>
              <h2 className="heading-lg text-foreground mt-4 mb-4">TI bem cuidada, com linguagem simples e execução séria</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Elara Tecnologia atende pequenas empresas que precisam de uma base de TI organizada, segura e confiável, sem depender de uma equipe interna grande para manter tudo funcionando.
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flat-list-item">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
