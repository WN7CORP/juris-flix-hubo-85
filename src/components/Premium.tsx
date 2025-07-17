
import { Crown, Check, Smartphone, Apple, Star, Zap, Shield, Infinity, Sparkles, Gift, Heart, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const detectDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/android/.test(userAgent)) return 'android';
  if (/iphone|ipad|ipod/.test(userAgent)) return 'ios';
  return 'web';
};

const handlePremiumUpgrade = () => {
  const device = detectDevice();
  
  if (device === 'android') {
    window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
  } else if (device === 'ios') {
    window.open('https://apps.apple.com/us/app/direito-premium/id6451451647', '_blank');
  } else {
    window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
  }
};

export const Premium = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Sem Anúncios',
      description: 'Experiência de estudo completamente livre de interrupções publicitárias',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Crown,
      title: 'Acesso Total à Plataforma',
      description: 'Links diretos para todas as funcionalidades da plataforma desktop',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Recursos Exclusivos',
      description: 'Ferramentas avançadas de estudo, organização e produtividade',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: 'Suporte Prioritário',
      description: 'Atendimento especializado e resposta rápida para todas suas dúvidas',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Infinity,
      title: 'Acesso Vitalício',
      description: 'Pagamento único para uso permanente, sem mensalidades',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Gift,
      title: 'Conteúdo Exclusivo',
      description: 'Materiais especiais e atualizações exclusivas para membros Premium',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const features = [
    'Acesso completo ao Vade Mecum Digital',
    'Biblioteca jurídica com milhares de livros',
    'Videoaulas com professores renomados',
    'Áudio-aulas para estudo em movimento',
    'Sistema de flashcards inteligentes',
    'Mapas mentais jurídicos interativos',
    'Downloads ilimitados de materiais',
    'Sistema de anotações avançado',
    'Assistente IA jurídica especializada',
    'Jurisprudência sempre atualizada',
    'Modelos de petições profissionais',
    'Formulários atualizados e validados'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm text-amber-300 px-6 py-3 rounded-full text-lg font-medium mb-6 border border-amber-500/30">
            <Crown className="w-6 h-6 animate-pulse" />
            <span>Versão Premium</span>
            <Sparkles className="w-5 h-5" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-fade-in-up">
            Direito Premium
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Desbloqueie todo o potencial da sua jornada jurídica com acesso completo 
            à nossa plataforma e uma experiência verdadeiramente premium.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-amber-400">
              <Trophy className="w-5 h-5" />
              <span className="text-sm">Mais de 50.000 usuários Premium</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Avaliação 4.9/5</span>
            </div>
          </div>
        </div>

        {/* Preço */}
        <Card className="text-center bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-amber-500/10 border-amber-400/30 backdrop-blur-sm shadow-2xl animate-scale-in">
          <CardContent className="pt-12 pb-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <div className="text-7xl font-bold text-amber-400 drop-shadow-2xl">
                    R$ 29,99
                  </div>
                  <div className="absolute -top-4 -right-8">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 text-sm px-3 py-1 animate-bounce">
                      OFERTA ESPECIAL
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary" className="bg-amber-100/10 text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                    <Infinity className="w-4 h-4 mr-2" />
                    Acesso Vitalício
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-100/10 text-emerald-300 border border-emerald-400/30 backdrop-blur-sm">
                    <Shield className="w-4 h-4 mr-2" />
                    Sem Riscos
                  </Badge>
                </div>
              </div>
              
              <p className="text-slate-400 text-lg">
                Pagamento único • Sem mensalidades • Para sempre
              </p>
              
              <Button 
                onClick={handlePremiumUpgrade}
                size="lg" 
                className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-black font-bold px-12 py-4 text-xl rounded-2xl shadow-2xl shadow-amber-500/30 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/50 border-0"
              >
                <Crown className="w-6 h-6 mr-3" />
                Ser Premium Agora
                <Sparkles className="w-5 h-5 ml-3" />
              </Button>
              
              <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mt-6">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Android</span>
                </div>
                <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Apple className="w-4 h-4" />
                  <span>iOS</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefícios */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Vantagens <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Exclusivas</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${benefit.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Lista de recursos */}
        <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-white">
              O que você terá acesso:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/30 transition-colors">
                  <div className="flex-shrink-0">
                    <Check className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-slate-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to action final */}
        <div className="text-center space-y-6 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 rounded-3xl p-12 border border-amber-400/20 backdrop-blur-sm">
          <div className="inline-flex items-center gap-3 text-4xl mb-4">
            <span>🚀</span>
            <h3 className="text-3xl font-bold text-white">
              Transforme seus estudos hoje mesmo!
            </h3>
            <span>⚖️</span>
          </div>
          <p className="text-xl text-slate-300">
            Junte-se a milhares de estudantes e profissionais que já escolheram o Premium
          </p>
          <Button 
            onClick={handlePremiumUpgrade}
            size="lg" 
            className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-black font-bold px-12 py-4 text-xl rounded-2xl shadow-2xl shadow-amber-500/30 transition-all duration-300 hover:scale-105 border-0"
          >
            <Crown className="w-6 h-6 mr-3" />
            Começar Agora - R$ 29,99
            <Zap className="w-5 h-5 ml-3" />
          </Button>
          
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mt-6">
            <span>🔒 Pagamento seguro</span>
            <span>💳 Cartão ou PIX</span>
            <span>📱 Acesso imediato</span>
          </div>
        </div>
      </div>
    </div>
  );
};
