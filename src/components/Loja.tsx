
import { ArrowLeft, ShoppingBag, Copy, Check } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

export const Loja = () => {
  const { setCurrentFunction } = useNavigation();
  const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const handleBack = () => {
    setCurrentFunction(null);
  };

  const handleBackToIntro = () => {
    setShowIntro(true);
  };

  const handleEnterStore = async () => {
    setIsLoading(true);
    // Simular carregamento suave
    setTimeout(() => {
      setShowIntro(false);
      setIsLoading(false);
    }, 800);
  };

  const handleCopyCoupon = async () => {
    try {
      await navigator.clipboard.writeText('WN7PR10');
      setCopiedCoupon(true);
      toast({
        title: "Cupom copiado!",
        description: "O código WN7PR10 foi copiado para sua área de transferência.",
      });
      setTimeout(() => setCopiedCoupon(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o cupom. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <button
            onClick={showIntro ? handleBack : handleBackToIntro}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {showIntro ? 'Voltar' : 'Voltar à Introdução'}
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-semibold">Loja de Direito</h1>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {showIntro ? (
        /* Tela de Introdução Compacta */
        <div className="container mx-auto px-4 py-6 max-w-2xl">
          {/* Header com ícone */}
          <div className="text-center mb-6">
            <div className="gradient-store w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center animate-store-glow">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2 gradient-text-legal">
              Produtos Selecionados para Seus Estudos
            </h2>
          </div>

          {/* Card do Desconto e Botão - Seção Principal */}
          <div className="card-legal rounded-xl p-6 mb-6 text-center relative overflow-hidden animate-scale-in">
            <div className="absolute inset-0 gradient-store opacity-10 animate-legal-shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 text-store-primary">
                🎉 Oferta Exclusiva para Usuários do App!
              </h3>
              
              {/* Desconto e Cupom */}
              <div className="bg-store-primary/10 border border-store-primary/30 rounded-lg p-4 mb-4 animate-premium-glow">
                <p className="text-lg font-semibold mb-2">
                  Ganhe <span className="text-store-primary text-xl font-bold">10% de desconto</span> na sua primeira compra!
                </p>
                <div 
                  className="bg-store-primary text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                  onClick={handleCopyCoupon}
                >
                  <code className="text-base font-mono font-bold">WN7PR10</code>
                  {copiedCoupon ? (
                    <Check className="h-4 w-4 animate-scale-in" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Clique no código para copiá-lo
                </p>
              </div>

              {/* Botão Principal */}
              <button
                onClick={handleEnterStore}
                disabled={isLoading}
                className="btn-store px-6 py-3 rounded-xl text-base font-semibold inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed animate-glow-pulse w-full justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Carregando...
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-5 w-5" />
                    Entrar na Loja de Direito
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Benefícios Compactos */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-10 h-10 bg-community-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-lg">📚</span>
              </div>
              <p className="text-xs font-medium">Livros Especializados</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-10 h-10 bg-premium-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-lg">⚖️</span>
              </div>
              <p className="text-xs font-medium">Materiais de Estudo</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="w-10 h-10 bg-store-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-lg">🎯</span>
              </div>
              <p className="text-xs font-medium">Cursos Online</p>
            </div>
          </div>

          {/* Footer info */}
          <p className="text-xs text-center text-muted-foreground">
            🔒 Compra segura • 📦 Entrega rápida • 💯 Produtos verificados
          </p>
        </div>
      ) : (
        /* Iframe da Loja */
        <div className="w-full" style={{ height: 'calc(100vh - 56px)' }}>
          <iframe 
            src="https://preview--barba-growth-journey-76.lovable.app/"
            className="w-full h-full border-0" 
            title="Loja de Direito"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};
