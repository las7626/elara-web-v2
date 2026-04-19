export default function Solutions() {
  const solutions = [
    {
      title: 'Terceirização de TI',
      description: 'Você não precisa montar um time interno para ter uma TI organizada e acompanhada.'
    },
    {
      title: 'Organização e Padronização',
      description: 'Acessos, usuários, equipamentos e processos com mais clareza e menos improviso.'
    },
    {
      title: 'Segurança e Continuidade',
      description: 'Redução de riscos, mais controle e menos paradas que travam a rotina da empresa.'
    },
    {
      title: 'Estruturação do zero',
      description: 'Implantação completa para empresas novas ou operações que precisam sair do improviso.'
    }
  ];

  const benefits = ['Menos dor de cabeça', 'Mais controle', 'Mais previsibilidade'];

  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.98fr_1.02fr] gap-14 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <span className="section-label">Soluções</span>
              <h2 className="heading-lg text-foreground mt-4 mb-4">Consultoria enxuta, próxima e voltada ao que faz diferença</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa atuação é pensada para empresas que precisam de TI confiável, organizada e simples de acompanhar, com decisões práticas e foco em continuidade.
              </p>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="solution-item">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flat-box">
              <h4 className="font-semibold text-foreground mb-4">Benefícios principais</h4>
              <div className="flex flex-wrap gap-3">
                {benefits.map((benefit) => (
                  <span key={benefit} className="hero-pill">{benefit}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="section-media flat-panel">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663492254489/2ZvjmHnWYcjByrPRe62eiC/solutions-dashboard-MbMf6bdLkKnQKQFXqdhziT.webp"
              alt="Dashboard de gerenciamento de TI"
              className="section-media-image image-soft object-[center_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/14 via-transparent to-[#0052CC]/8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
