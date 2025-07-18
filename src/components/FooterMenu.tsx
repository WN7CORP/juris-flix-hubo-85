
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
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-400 hover:to-blue-500',
      shadowColor: 'shadow-blue-500/30'
    },
    {
      id: 'loja',
      title: 'Loja',
      icon: ShoppingCart,
      function: 'Loja',
      bgColor: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-400 hover:to-emerald-500',
      shadowColor: 'shadow-emerald-500/30'
    },
    {
      id: 'audio-aulas',
      title: 'Áudio-aulas',
      icon: Headphones,
      function: findFunction('audio')?.funcao || findFunction('áudio')?.funcao || 'Áudio-aulas',
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-400 hover:to-purple-500',
      shadowColor: 'shadow-purple-500/30'
    },
    {
      id: 'biblioteca',
      title: 'Biblioteca',
      icon: Library,
      function: findFunction('biblioteca')?.funcao || 'Biblioteca',
      bgColor: 'bg-gradient-to-br from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-400 hover:to-orange-500',
      shadowColor: 'shadow-orange-500/30'
    },
    {
      id: 'anotacoes',
      title: 'Anotações',
      icon: FileText,
      function: 'Anotações',
      bgColor: 'bg-gradient-to-br from-teal-500 to-teal-600',
      hoverColor: 'hover:from-teal-400 hover:to-teal-500',
      shadowColor: 'shadow-teal-500/30'
    },
    {
      id: 'premium',
      title: 'Premium',
      icon: Crown,
      function: 'Premium',
      bgColor: 'bg-gradient-to-br from-amber-500 to-amber-600',
      hoverColor: 'hover:from-amber-400 hover:to-amber-500',
      shadowColor: 'shadow-amber-500/30'
    }
  ];

  const getItemStyles = (item: typeof menuItems[0], isActive: boolean) => {
    const baseStyles = "relative flex flex-col items-center py-3 px-3 rounded-xl transition-all duration-300 transform active:scale-95 group min-w-0 flex-1";
    
    if (isActive) {
      return `${baseStyles} text-white ${item.bgColor} ${item.hoverColor} shadow-lg scale-105 ${item.shadowColor} shadow-lg`;
    } else {
      return `${baseStyles} text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-600 hover:shadow-lg hover:scale-105`;
    }
  };

  const getIconStyles = (item: typeof menuItems[0], isActive: boolean) => {
    const baseStyles = "relative p-2 rounded-lg transition-all duration-300";
    
    if (isActive) {
      return `${baseStyles} bg-white/20 scale-110 backdrop-blur-sm`;
    } else {
      return `${baseStyles} group-hover:bg-white/10 group-hover:scale-105 group-hover:backdrop-blur-sm`;
    }
  };

  const handleItemClick = (item: typeof menuItems[0]) => {
    setActiveItem(item.id);
    setCurrentFunction(item.function);
  };

  // Desktop version
  if (isDesktop) {
    return (
      <div className={`transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="glass-effect-modern rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <div className="flex justify-around items-center px-2 py-2 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
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
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full shadow-lg" />
                  )}
                  
                  {/* Icon container */}
                  <div className={getIconStyles(item, isActive)}>
                    <Icon className="h-5 w-5 transition-all duration-300" />
                  </div>
                  
                  {/* Label */}
                  <span className={`text-xs font-medium transition-all duration-300 mt-1 text-center leading-tight ${
                    isActive ? 'font-semibold text-white drop-shadow-sm' : 'group-hover:font-medium group-hover:text-white'
                  }`}>
                    {item.title}
                  </span>
                  
                  {/* Efeito de brilho no hover */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-xl" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Mobile version
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 safe-area-pb-legal transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="mx-3 mb-3">
        <div className="max-w-md mx-auto glass-effect-modern rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <div className="flex justify-around items-center px-0 my-0 mx-0 rounded-none py-0 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl">
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
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full shadow-lg" />
                  )}
                  
                  {/* Icon container */}
                  <div className={getIconStyles(item, isActive)}>
                    <Icon className="h-5 w-5 transition-all duration-300" />
                  </div>
                  
                  {/* Label */}
                  <span className={`text-xs font-medium transition-all duration-300 mt-1 text-center leading-tight ${
                    isActive ? 'font-semibold text-white drop-shadow-sm' : 'group-hover:font-medium group-hover:text-white'
                  }`}>
                    {item.title}
                  </span>
                  
                  {/* Efeito de brilho no hover */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-xl" />
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
