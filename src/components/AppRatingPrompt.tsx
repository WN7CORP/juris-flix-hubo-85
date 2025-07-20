
import { useState, useEffect } from 'react';
import { Star, X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export const AppRatingPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [userIP, setUserIP] = useState<string>('');
  const { deviceType } = useDeviceDetection();

  // Função para obter o IP do usuário
  const getUserIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.log('Erro ao obter IP:', error);
      return 'unknown';
    }
  };

  useEffect(() => {
    const initializeRatingPrompt = async () => {
      const ip = await getUserIP();
      setUserIP(ip);

      // Verificar se já foi mostrado para este IP nos últimos 7 dias
      const lastPromptDate = localStorage.getItem(`app-rating-${ip}`);
      const hasCompleted = localStorage.getItem(`app-rating-completed-${ip}`);

      if (hasCompleted) {
        return; // Se já avaliou, nunca mais mostrar
      }

      if (lastPromptDate) {
        const daysSinceLastPrompt = (Date.now() - parseInt(lastPromptDate)) / (1000 * 60 * 60 * 24);
        if (daysSinceLastPrompt < 7) {
          return; // Se mostrou há menos de 7 dias, não mostrar
        }
      }

      // Timer de 3 minutos (180000ms)
      const timer = setTimeout(() => {
        setShowPrompt(true);
        setTimeout(() => setIsVisible(true), 100);
        // Registrar que foi mostrado para este IP
        localStorage.setItem(`app-rating-${ip}`, Date.now().toString());
      }, 180000);

      return () => clearTimeout(timer);
    };

    initializeRatingPrompt();
  }, []);

  const handleRate = () => {
    if (userIP) {
      localStorage.setItem(`app-rating-completed-${userIP}`, 'true');
    }
    
    // Detectar plataforma e redirecionar
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('android') || deviceType === 'mobile') {
      // Tentar detectar Android especificamente
      if (userAgent.includes('android')) {
        window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2675756.gpu0e7509bfb7bde52aef412888bb17a456', '_blank');
      } else if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ios')) {
        window.open('https://apps.apple.com/us/app/direito-conte%C3%BAdo-jur%C3%ADdico/id6450845861', '_blank');
      } else {
        // Para dispositivos móveis não identificados, mostrar opções
        const isAndroid = confirm('Você está usando Android? Clique OK para ir à Play Store, ou Cancelar para ir à App Store.');
        if (isAndroid) {
          window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2675756.gpu0e7509bfb7bde52aef412888bb17a456', '_blank');
        } else {
          window.open('https://apps.apple.com/us/app/direito-conte%C3%BAdo-jur%C3%ADdico/id6450845861', '_blank');
        }
      }
    } else {
      // Para desktop, mostrar opções
      const isAndroid = confirm('Clique OK para acessar a Play Store (Android) ou Cancelar para App Store (iOS).');
      if (isAndroid) {
        window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2675756.gpu0e7509bfb7bde52aef412888bb17a456', '_blank');
      } else {
        window.open('https://apps.apple.com/us/app/direito-conte%C3%BAdo-jur%C3%ADdico/id6450845861', '_blank');
      }
    }
    
    handleClose();
  };

  const handleLater = () => {
    // Já foi registrado que apareceu, então só fecha
    handleClose();
  };

  const handleDismiss = () => {
    if (userIP) {
      localStorage.setItem(`app-rating-completed-${userIP}`, 'true');
    }
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShowPrompt(false), 300);
  };

  if (!showPrompt) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <Card className="w-80 max-w-[90vw] shadow-2xl border-2 border-primary/20 bg-card/95 backdrop-blur-xl">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 text-yellow-400 fill-current animate-pulse" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleClose}
              className="h-6 w-6 hover:bg-destructive/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-foreground mb-2">
              Está gostando do Direito?
            </h3>
            <p className="text-sm text-muted-foreground">
              Sua avaliação nos ajuda a melhorar e alcançar mais pessoas. 
              Que tal avaliar nosso app na loja?
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-2">
            <Button 
              onClick={handleRate}
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold"
            >
              ⭐ Avaliar Agora
            </Button>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={handleLater}
                className="flex-1 text-sm"
              >
                Mais Tarde
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleDismiss}
                className="flex-1 text-sm hover:bg-muted/50"
              >
                Não, Obrigado
              </Button>
            </div>
          </div>

          {/* Small app info */}
          <div className="mt-4 pt-4 border-t border-border/30">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-6 h-6 rounded-md overflow-hidden">
                <img 
                  src="https://imgur.com/rrouo0U.png" 
                  alt="Direito" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span>Direito - Conteúdo Jurídico</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
