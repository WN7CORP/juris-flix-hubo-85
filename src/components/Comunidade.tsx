import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Gift, Bell, BookOpen, Star, MessageCircle, Trophy, Zap } from 'lucide-react';

export const Comunidade = () => {
  const benefits = [
    {
      icon: Bell,
      title: "Novidades em Primeira Mão",
      description: "Seja o primeiro a saber sobre novas funcionalidades, atualizações e recursos exclusivos da plataforma."
    },
    {
      icon: Gift,
      title: "Cupons de Desconto Exclusivos",
      description: "Receba cupons especiais para livros, cursos e materiais jurídicos com descontos de até 50%."
    },
    {
      icon: MessageCircle,
      title: "Networking Profissional",
      description: "Conecte-se com advogados, estudantes e profissionais do direito de todo o Brasil."
    },
    {
      icon: Trophy,
      title: "Eventos Exclusivos",
      description: "Participe de webinars, palestras e eventos ao vivo com especialistas renomados do setor jurídico."
    },
    {
      icon: Zap,
      title: "Suporte Prioritário",
      description: "Atendimento personalizado e suporte técnico com prioridade máxima para membros da comunidade."
    }
  ];

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/DKlKgHsjHZ97OKUDxEpT6w?mode=r_t', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-emerald-500/10 text-emerald-600 px-6 py-3 rounded-full text-lg font-semibold mb-6 border border-emerald-500/20">
            <Users className="w-6 h-6" />
            <span>Comunidade Exclusiva</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text-legal">
            Faça Parte da Nossa
            <br />
            <span className="text-emerald-600">Comunidade VIP</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conecte-se com <span className="font-bold text-emerald-600">profissionais do direito</span> de 
            todo o Brasil e tenha acesso a benefícios exclusivos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text-legal">
            Vantagens Exclusivas da Comunidade
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="group p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-emerald-500/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-emerald-600 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-emerald-400/20 animate-pulse"></div>
          <div className="relative z-10">
            <Star className="w-16 h-16 mx-auto mb-6 text-amber-300" />
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto para Fazer Parte?
            </h2>
            
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Junte-se agora à nossa comunidade e tenha acesso imediato a todos os benefícios exclusivos. 
              É gratuito e você pode sair quando quiser!
            </p>
            
            <Button 
              onClick={handleJoinCommunity}
              size="lg"
              className="bg-white hover:bg-gray-100 text-emerald-600 hover:text-emerald-700 font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Entrar na Comunidade
            </Button>
            
            <p className="text-emerald-200 text-sm mt-4">
              🔒 Seu número será mantido em total privacidade
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-lg">
            Dúvidas? Nossa comunidade está sempre pronta para ajudar! 🤝
          </p>
        </div>
      </div>
    </div>
  );
};