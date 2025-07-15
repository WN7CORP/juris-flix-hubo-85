import { Crown, Check, Smartphone, Apple, Star, Zap, Shield, Infinity } from 'lucide-react';
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
    // Para web, pode redirecionar para uma página de pagamento ou mostrar as opções
    window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
  }
};

export const Premium = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Sem Anúncios',
      description: 'Experiência de estudo completamente livre de interrupções'
    },
    {
      icon: Crown,
      title: 'Acesso Total à Plataforma',
      description: 'Links diretos para todas as funcionalidades da plataforma desktop'
    },
    {
      icon: Zap,
      title: 'Recursos Exclusivos',
      description: 'Ferramentas avançadas de estudo e organização'
    },
    {
      icon: Star,
      title: 'Suporte Prioritário',
      description: 'Atendimento especializado e resposta rápida'
    },
    {
      icon: Infinity,
      title: 'Acesso Vitalício',
      description: 'Pagamento único para uso permanente'
    }
  ];

  const features = [
    'Acesso completo ao Vade Mecum Digital',
    'Biblioteca jurídica com milhares de livros',
    'Videoaulas com professores renomados',
    'Áudio-aulas para estudo em movimento',
    'Sistema de flashcards inteligentes',
    'Mapas mentais jurídicos',
    'Downloads ilimitados',
    'Sistema de anotações avançado',
    'Assistente IA jurídica',
    'Jurisprudência atualizada',
    'Modelos de petições',
    'Formulários atualizados'
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Crown className="w-4 h-4" />
          <span>Versão Premium</span>
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
          Direito Premium
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Desbloqueie todo o potencial da sua jornada jurídica com acesso completo 
          à nossa plataforma e experiência sem anúncios.
        </p>
      </div>

      {/* Preço */}
      <Card className="text-center bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border-amber-200 dark:border-amber-800">
        <CardContent className="pt-8 pb-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-amber-600 dark:text-amber-400">
                R$ 29,99
              </div>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                <Infinity className="w-3 h-3 mr-1" />
                Acesso Vitalício
              </Badge>
            </div>
            
            <p className="text-muted-foreground">
              Pagamento único • Sem mensalidades • Para sempre
            </p>
            
            <Button 
              onClick={handlePremiumUpgrade}
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-semibold px-8 py-3 text-lg"
            >
              <Crown className="w-5 h-5 mr-2" />
              Ser Premium Agora
            </Button>
            
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>Android</span>
              </div>
              <div className="flex items-center gap-2">
                <Apple className="w-4 h-4" />
                <span>iOS</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefícios */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Vantagens Exclusivas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20">
                    <benefit.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Lista de recursos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">O que você terá acesso:</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to action final */}
      <div className="text-center space-y-4 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-8">
        <h3 className="text-xl font-bold">
          🚀 Transforme seus estudos hoje mesmo!
        </h3>
        <p className="text-muted-foreground">
          Junte-se a milhares de estudantes e profissionais que já escolheram o Premium
        </p>
        <Button 
          onClick={handlePremiumUpgrade}
          size="lg" 
          className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-semibold px-8 py-3"
        >
          <Crown className="w-5 h-5 mr-2" />
          Começar Agora - R$ 29,99
        </Button>
      </div>
    </div>
  );
};