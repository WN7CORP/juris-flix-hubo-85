
import { Home, Download, BookOpen, Bot, Users, ShoppingBag, Play, UserCheck } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';

interface FooterMenuProps {
  isVisible: boolean;
}

const menuItems = [
  { icon: Home, label: 'Início', id: null },
  { icon: Download, label: 'Downloads', id: 'Downloads' },
  { icon: BookOpen, label: 'Notícias', id: 'Notícias Jurídicas' },
  { icon: Bot, label: 'Assistente IA', id: 'Assistente IA Jurídica' },
  { icon: Play, label: 'Videoaulas', id: 'Videoaulas' },
  { icon: ShoppingBag, label: 'Loja', id: 'Loja' },
  { icon: UserCheck, label: 'Premium', id: 'Premium' },
];

export const FooterMenu = ({ isVisible }: FooterMenuProps) => {
  const { setCurrentFunction } = useNavigation();

  const handleMenuClick = (functionId: string | null) => {
    setCurrentFunction(functionId);
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border/50 transition-all duration-300 z-40 ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="grid grid-cols-7 gap-1 p-2 sm:p-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id || 'home'}
              onClick={() => handleMenuClick(item.id)}
              className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg hover:bg-accent/50 transition-all duration-200 group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'slide-up 0.6s ease-out'
              }}
            >
              <div className="relative">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                
                {/* Indicador de funcionalidade premium ou especial */}
                {(item.id === 'Premium' || item.id === 'Assistente IA Jurídica') && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
                )}
              </div>
              
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200 text-center leading-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
