
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
      color: 'primary'
    },
    {
      id: 'biblioteca',
      title: 'Biblioteca',
      icon: Library,
      function: findFunction('biblioteca')?.funcao || 'Biblioteca',
      color: 'info'
    },
    {
      id: 'audio-aulas',
      title: 'Áudio',
      icon: Headphones,
      function: findFunction('audio')?.funcao || findFunction('áudio')?.funcao || 'Áudio-aulas',
      color: 'community'
    },
    {
      id: 'anotacoes',
      title: 'Notas',
      icon: FileText,
      function: 'Anotações',
      color: 'warning'
    },
    {
      id: 'premium',
      title: 'Premium',
      icon: Crown,
      function: 'Premium',
      color: 'premium'
    }
  ];

  const getItemStyles = (item: typeof menuItems[0], isActive: boolean) => {
    const baseStyles = "relative flex flex-col items-center py-3 px-2 rounded-2xl transition-all duration-300 transform active:scale-95 group min-w-0 flex-1 min-h-[64px] justify-center";
    
    if (isActive) {
      switch (item.color) {
        case 'community':
          return `${baseStyles} text-white bg-gradient-to-br from-community-primary via-community-primary to-community-secondary shadow-lg shadow-community-primary/30 scale-105`;
        case 'premium':
          return `${baseStyles} text-white bg-gradient-to-br from-premium-primary via-premium-primary to-premium-secondary shadow-lg shadow-premium-primary/30 scale-105`;
        case 'info':
          return `${baseStyles} text-white bg-gradient-to-br from-info via-info to-blue-600 shadow-lg shadow-info/30 scale-105`;
        case 'warning':
          return `${baseStyles} text-white bg-gradient-to-br from-warning via-warning to-orange-600 shadow-lg shadow-warning/30 scale-105`;
        default:
          return `${baseStyles} text-white bg-gradient-to-br from-primary via-primary to-accent-legal shadow-lg shadow-primary/30 scale-105`;
      }
    } else {
      return `${baseStyles} text-muted-foreground hover:text-primary hover:bg-primary/5 hover:scale-105`;
    }
  };

  const handleItemClick = (item: typeof menuItems[0]) => {
    setActiveItem(item.id);
    setCurrentFunction(item.function);
    
    // Haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  // Desktop version
  if (isDesktop) {
    return (
      <div className={`transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="glass-effect-modern rounded-2xl overflow-hidden">
          <div className="flex justify-around items-center px-2 py-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={getItemStyles(item, isActive)}
                >
                  {/* Indicador ativo */}
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
                  )}
                  
                  {/* Icon container */}
                  <div className="mb-1">
                    <Icon className="h-5 w-5 transition-all duration-300" />
                  </div>
                  
                  {/* Label */}
                  <span className="text-xs font-medium transition-all duration-300 text-center leading-tight">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Enhanced Mobile version
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="mx-2 mb-2">
        <div className="max-w-md mx-auto bg-background/98 backdrop-blur-xl rounded-3xl border border-border/30 shadow-2xl shadow-black/20 overflow-hidden">
          <div className="flex justify-around items-center px-1 py-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={getItemStyles(item, isActive)}
                >
                  {/* Indicador ativo - melhorado */}
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full opacity-90" />
                  )}
                  
                  {/* Icon container - otimizado para touch */}
                  <div className="mb-1">
                    <Icon className="h-5 w-5 transition-all duration-300" />
                  </div>
                  
                  {/* Label - melhor legibilidade */}
                  <span className="text-xs font-medium transition-all duration-300 text-center leading-tight">
                    {item.title}
                  </span>
                  
                  {/* Background effect para item ativo */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-2xl" />
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
