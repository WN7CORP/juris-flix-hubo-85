
import { ShoppingCart, Bot, Library, Headphones, Home, FileText, Crown, Brain } from 'lucide-react';
import { useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';
import { useAppFunctions } from '@/hooks/useAppFunctions';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

interface FooterMenuProps {
  isVisible?: boolean;
}

export const FooterMenu = ({ isVisible = true }: FooterMenuProps) => {
  const [activeItem, setActiveItem] = useState('home');
  const { setCurrentFunction } = useNavigation();
  const { functions } = useAppFunctions();
  const { isDesktop } = useDeviceDetection();

  const findFunction = (searchTerm: string) => {
    return functions.find(func => 
      func.funcao.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const menuItems = [
    {
      id: 'home',
      title: 'Início',
      icon: Home,
      function: null,
      gradient: 'from-primary to-accent-legal',
      glowColor: 'hsl(var(--primary))'
    },
    {
      id: 'loja',
      title: 'Loja',
      icon: ShoppingCart,
      function: 'Loja',
      gradient: 'from-store-primary to-store-secondary',
      glowColor: 'hsl(var(--store-primary))'
    },
    {
      id: 'audio-aulas',
      title: 'Áudio-aulas',
      icon: Headphones,
      function: findFunction('audio')?.funcao || findFunction('áudio')?.funcao || 'Áudio-aulas',
      gradient: 'from-sky-500 to-blue-600',
      glowColor: '#0ea5e9'
    },
    {
      id: 'biblioteca',
      title: 'Biblioteca',
      icon: Library,
      function: findFunction('biblioteca')?.funcao || 'Biblioteca',
      gradient: 'from-emerald-500 to-green-600',
      glowColor: '#10b981'
    },
    {
      id: 'anotacoes',
      title: 'Anotações',
      icon: FileText,
      function: 'Anotações',
      gradient: 'from-orange-500 to-amber-600',
      glowColor: '#f97316'
    },
    {
      id: 'premium',
      title: 'Premium',
      icon: Crown,
      function: 'Premium',
      gradient: 'from-premium-primary to-premium-secondary',
      glowColor: 'hsl(var(--premium-primary))'
    }
  ];

  const getItemStyles = (item: typeof menuItems[0], isActive: boolean) => {
    const baseStyles = "relative flex flex-col items-center py-3 px-3 rounded-2xl transition-all duration-500 transform active:scale-95 group min-w-0 flex-1 overflow-hidden";
    
    if (isActive) {
      return `${baseStyles} text-white bg-gradient-to-br ${item.gradient} shadow-2xl scale-105 animate-footer-glow-vibrant`;
    } else {
      return `${baseStyles} text-slate-400 hover:text-white hover:bg-gradient-to-br hover:${item.gradient} hover:shadow-lg hover:scale-102`;
    }
  };

  const getIconStyles = (item: typeof menuItems[0], isActive: boolean) => {
    const baseStyles = "relative p-2.5 rounded-xl transition-all duration-500 overflow-hidden";
    
    if (isActive) {
      return `${baseStyles} bg-white/20 scale-110 animate-icon-bounce shadow-lg`;
    } else {
      return `${baseStyles} group-hover:bg-white/15 group-hover:scale-105 group-hover:shadow-md`;
    }
  };

  const handleItemClick = (item: typeof menuItems[0]) => {
    setActiveItem(item.id);
    setCurrentFunction(item.function);
  };

  // Desktop version
  if (isDesktop) {
    return (
      <div className={`transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="glass-effect-modern rounded-3xl overflow-hidden shadow-2xl border border-border/50">
          <div className="flex justify-around items-center px-3 py-3 bg-gradient-to-r from-background/50 to-card/50">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={getItemStyles(item, isActive)}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: isActive ? `0 0 30px ${item.glowColor}40, 0 0 60px ${item.glowColor}20` : undefined
                  }}
                >
                  {/* Indicador ativo aprimorado */}
                  {isActive && (
                    <div 
                      className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-10 h-1.5 rounded-full animate-icon-pulse-glow" 
                      style={{ backgroundColor: item.glowColor }}
                    />
                  )}
                  
                  {/* Efeito de brilho de fundo */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Icon container aprimorado */}
                  <div className={getIconStyles(item, isActive)}>
                    <Icon className="h-6 w-6 transition-all duration-500 relative z-10" />
                    
                    {/* Efeito de ondulação */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  </div>
                  
                  {/* Label aprimorado */}
                  <span className={`text-xs font-semibold transition-all duration-500 mt-1.5 text-center leading-tight relative z-10 ${
                    isActive ? 'font-bold text-white drop-shadow-sm' : 'group-hover:font-semibold'
                  }`}>
                    {item.title}
                  </span>
                  
                  {/* Efeito de brilho no hover */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-2xl" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Mobile version aprimorada
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 safe-area-pb-legal transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="mx-3 mb-3">
        <div className="max-w-md mx-auto glass-effect-modern rounded-3xl overflow-hidden shadow-2xl border border-border/30">
          <div className="flex justify-around items-center px-1 py-2 bg-gradient-to-r from-footer-bg/80 to-card/80">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={getItemStyles(item, isActive)}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: isActive ? `0 0 25px ${item.glowColor}50, 0 0 50px ${item.glowColor}25` : undefined
                  }}
                >
                  {/* Indicador ativo para mobile */}
                  {isActive && (
                    <div 
                      className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full animate-icon-pulse-glow" 
                      style={{ backgroundColor: item.glowColor }}
                    />
                  )}
                  
                  {/* Efeito de brilho de fundo */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Icon container */}
                  <div className={getIconStyles(item, isActive)}>
                    <Icon className="h-5 w-5 transition-all duration-500 relative z-10" />
                    
                    {/* Efeito especial para ícone ativo */}
                    {isActive && (
                      <div className="absolute inset-0 animate-icon-rotate-scale opacity-20 rounded-xl" style={{ backgroundColor: item.glowColor }} />
                    )}
                  </div>
                  
                  {/* Label */}
                  <span className={`text-xs font-medium transition-all duration-500 mt-1 text-center leading-tight relative z-10 ${
                    isActive ? 'font-bold text-white drop-shadow-sm' : 'group-hover:font-semibold'
                  }`}>
                    {item.title}
                  </span>
                  
                  {/* Efeito pulsante para item ativo */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-2xl" />
                      <div 
                        className="absolute inset-0 rounded-2xl animate-ping opacity-20" 
                        style={{ backgroundColor: item.glowColor }}
                      />
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
