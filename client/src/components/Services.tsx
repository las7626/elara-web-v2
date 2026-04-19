import { Wifi, Server, Shield, Activity, Network, Cable, Bolt } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wifi,
      title: 'Redes e Wi-Fi',
      description: 'Estruturação e suporte de redes estáveis, cobertura adequada e ambiente bem organizado.'
    },
    {
      icon: Server,
      title: 'Servidores e Acessos',
      description: 'Controle de usuários, arquivos, permissões e serviços essenciais para a rotina da empresa.'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Proteção da rede, acesso remoto seguro e boas práticas para reduzir riscos.'
    },
    {
      icon: Activity,
      title: 'Monitoramento e Suporte',
      description: 'Acompanhamento contínuo e suporte para manter a operação rodando no dia a dia.'
    },
    {
      icon: Cable,
      title: 'Cabeamento estruturado',
      description: 'Organização de racks, patch panels, pontos de rede e estrutura física com padrão.'
    },
    {
      icon: Bolt,
      title: 'Infra elétrica para TI',
      description: 'Apoio em nobreaks, distribuição elétrica e preparação adequada para equipamentos de TI.'
    },
    {
      icon: Network,
      title: 'Implantação e reorganização',
      description: 'Montagem de ambientes novos ou reestruturação de empresas que cresceram sem padrão.'
    }
  ];

  return (
    <section id="services" className="section-padding bg-soft">
      <div className="container">
        <div className="text-center mb-14">
          <span className="section-label justify-center">Serviços</span>
          <h2 className="heading-lg text-foreground mt-4 mb-4">Serviços pensados para a realidade de pequenos negócios</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Elara entrega uma base técnica organizada, com foco em estabilidade, segurança e suporte prático para empresas que precisam de TI funcionando sem excesso de complexidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-service bg-background"
              >
                <div className="service-icon-shell">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
