import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-soft">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label justify-center">Contato</span>
            <h2 className="heading-lg text-foreground mt-4 mb-4">Fale com a gente sobre a estrutura de TI da sua empresa</h2>
            <p className="text-lg text-muted-foreground">
              Uma conversa direta para entender o cenário atual e enxergar onde dá para organizar melhor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 flat-box space-y-6 h-fit">
              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">contato@elaratecnologia.com.br</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                  <p className="text-muted-foreground">(11) 3000-0000</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Atendimento</h4>
                  <p className="text-muted-foreground">São Paulo, SP e região</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 flat-box space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Sua empresa"
                value={formData.company}
                onChange={handleChange}
                required
                className="field-input"
              />

              <textarea
                name="message"
                placeholder="Conte brevemente o que sua empresa precisa"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="field-input resize-none"
              />

              <button type="submit" className="btn-primary w-full md:w-auto min-w-[220px]">
                {submitted ? 'Mensagem enviada' : 'Enviar mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
