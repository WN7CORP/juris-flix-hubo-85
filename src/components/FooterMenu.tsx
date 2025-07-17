
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

  // Find specific functions from the table with improved matching
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
      function: null
    },
    {
      id: 'loja',
      title: 'Loja',
      icon: ShoppingCart,
      function: 'Loja'
    },
    {
      id: 'audio-aulas',
      title: 'Áudio-aulas',
      icon: Headphones,
      function: findFunction('audio')?.funcao || findFunction('áudio')?.funcao || 'Áudio-aulas'
    },
    {
      id: 'biblioteca',
      title: 'Biblioteca',
      icon: Library,
      function: findFunction('biblioteca')?.funcao || 'Biblioteca'
    },
    {
      id: 'anotacoes',
      title: 'Anotações',
      icon: FileText,
      function: 'Anotações'
    },
    {
      id: 'premium',
      title: 'Premium',
      icon: Crown,
      function: 'Premium'
    }
  ];

  const handleItemClick = (item: typeof menuItems[0]) => {
    setActiveItem(item.id);
    setCurrentFunction(item.function);
  };

  // Desktop version - horizontal layout at top
  if (isDesktop) {
    return (
      <div className={`transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-gradient-to-r from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-600/50 shadow-2xl overflow-hidden">
          <div className="flex justify-around items-center px-2 py-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`relative flex flex-col items-center py-2 px-4 rounded-xl transition-all duration-300 transform active:scale-95 group min-w-0 flex-1 ${
                    isActive 
                      ? 'text-amber-400 bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-amber-500/20 shadow-lg scale-105 border border-amber-500/30' 
                      : 'text-slate-300 hover:text-amber-400 hover:bg-gradient-to-br hover:from-amber-500/10 hover:to-orange-500/10'
                  }`}
                >
                  {/* Indicador ativo melhorado */}
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 rounded-full shadow-lg shadow-amber-400/50" />
                  )}
                  
                  {/* Icon container */}
                  <div className={`relative p-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-amber-500/30 scale-110 shadow-lg shadow-amber-500/25' 
                      : 'group-hover:bg-gradient-to-br group-hover:from-amber-500/15 group-hover:to-orange-500/15 group-hover:scale-105'
                  }`}>
                    <Icon className="h-5 w-5 transition-all duration-300 drop-shadow-sm" />
                  </div>
                  
                  {/* Label */}
                  <span className={`text-xs font-medium transition-all duration-300 mt-1 text-center leading-tight ${
                    isActive 
                      ? 'font-bold text-amber-300 drop-shadow-sm' 
                      : 'group-hover:font-semibold group-hover:text-amber-300'
                  }`}>
                    {item.title}
                  </span>
                  
                  {/* Efeito de brilho no hover melhorado */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-orange-500/5 to-transparent rounded-xl" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Mobile version - original footer at bottom
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 safe-area-pb-legal transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="mx-3 mb-3">
        <div className="max-w-md mx-auto bg-gradient-to-r from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-600/50 shadow-2xl overflow-hidden">
          <div className="flex justify-around items-center px-0 my-0 mx-0 rounded-none py-0">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`relative flex flex-col items-center py-3 px-3 rounded-xl transition-all duration-300 transform active:scale-95 group min-w-0 flex-1 ${
                    isActive 
                      ? 'text-amber-400 bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-amber-500/20 shadow-lg scale-105 border border-amber-500/30' 
                      : 'text-slate-300 hover:text-amber-400 hover:bg-gradient-to-br hover:from-amber-500/10 hover:to-orange-500/10'
                  }`}
                >
                  {/* Indicador ativo melhorado */}
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 rounded-full shadow-lg shadow-amber-400/50" />
                  )}
                  
                  {/* Icon container */}
                  <div className={`relative p-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-amber-500/30 scale-110 shadow-lg shadow-amber-500/25' 
                      : 'group-hover:bg-gradient-to-br group-hover:from-amber-500/15 group-hover:to-orange-500/15 group-hover:scale-105'
                  }`}>
                    <Icon className="h-5 w-5 transition-all duration-300 drop-shadow-sm" />
                  </div>
                  
                  {/* Label */}
                  <span className={`text-xs font-medium transition-all duration-300 mt-1 text-center leading-tight ${
                    isActive 
                      ? 'font-bold text-amber-300 drop-shadow-sm' 
                      : 'group-hover:font-semibold group-hover:text-amber-300'
                  }`}>
                    {item.title}
                  </span>
                  
                  {/* Efeito de brilho no hover melhorado */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-orange-500/5 to-transparent rounded-xl" />
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
