
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  Users, 
  Crown, 
  ShoppingBag,
  Sparkles,
  Star,
  Gift,
  Zap
} from 'lucide-react';

export const FeaturesGrid = () => {
  const handleLojaClick = () => {
    window.open('https://editorajuspodivm.com.br/', '_blank');
  };

  const handleComunidadeClick = () => {
    window.open('https://chat.whatsapp.com/DKlKgHsjHZ97OKUDxEpT6w?mode=r_t', '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Loja de Livros - Botão Premium Estiloso */}
      <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-purple-400/20 animate-shimmer bg-[length:200%_100%]"></div>
        <CardContent className="p-8 relative z-10">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-4 text-white">
            Loja de Livros
          </h3>
          
          <p className="text-purple-100 text-center mb-6 leading-relaxed">
            Acesse nossa livraria parceira com descontos especiais em livros jurídicos
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-sm text-purple-200 ml-2">Avaliação Premium</span>
          </div>
          
          <Button 
            onClick={handleLojaClick}
            className="w-full bg-white hover:bg-gray-100 text-purple-700 hover:text-purple-800 font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 group-hover:scale-105"
          >
            <Gift className="w-5 h-5 mr-2" />
            Explorar Loja
          </Button>
        </CardContent>
      </Card>

      {/* Comunidade - Botão Vibrante */}
      <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 border-emerald-400/20 hover:border-emerald-300/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-transparent to-teal-400/20 animate-shimmer bg-[length:200%_100%]"></div>
        <CardContent className="p-8 relative z-10">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
            <Users className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-4 text-white">
            Comunidade VIP
          </h3>
          
          <p className="text-emerald-100 text-center mb-6 leading-relaxed">
            Conecte-se com outros estudantes e profissionais do direito
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-emerald-300 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-emerald-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-sm text-emerald-200 ml-2">+1000 membros</span>
          </div>
          
          <Button 
            onClick={handleComunidadeClick}
            className="w-full bg-white hover:bg-gray-100 text-emerald-700 hover:text-emerald-800 font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 group-hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2" />
            Entrar Agora
          </Button>
        </CardContent>
      </Card>

      {/* Premium - Mantém o design existente mas aprimorado */}
      <Card className="group relative overflow-hidden bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 border-amber-400/20 hover:border-amber-300/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-transparent to-yellow-400/20 animate-shimmer bg-[length:200%_100%]"></div>
        <CardContent className="p-8 relative z-10">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
            <Crown className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-4 text-white">
            Direito Premium
          </h3>
          
          <p className="text-amber-100 text-center mb-6 leading-relaxed">
            Desbloqueie recursos exclusivos e experiência sem anúncios
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
            <span className="text-sm text-amber-200">Recursos Exclusivos</span>
          </div>
          
          <Button 
            className="w-full bg-white hover:bg-gray-100 text-amber-700 hover:text-amber-800 font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 group-hover:scale-105"
          >
            <Crown className="w-5 h-5 mr-2" />
            Seja Premium
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
