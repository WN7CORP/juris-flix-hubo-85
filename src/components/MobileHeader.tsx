
import { Scale, Search, Bell, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { MobileSidebar } from './MobileSidebar';

interface MobileHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const MobileHeader = ({
  sidebarOpen,
  setSidebarOpen
}: MobileHeaderProps) => {
  const [hasNotifications] = useState(true);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/98 backdrop-blur-xl border-b border-border/30 safe-area-pt">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Title - Compacto */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                <img 
                  src="https://imgur.com/M5Qu1m8.png" 
                  alt="Direito Premium" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h1 className="text-base font-bold gradient-text leading-tight">Direito Premium</h1>
                <p className="text-xs text-muted-foreground leading-tight">Plataforma jurídica</p>
              </div>
            </div>
            
            {/* Action Buttons - Touch Optimized */}
            <div className="flex items-center gap-1">
              {/* Search Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 rounded-full hover:bg-primary/10 transition-all duration-300 active:scale-95"
              >
                <Search className="h-4 w-4 text-muted-foreground" />
              </Button>
              
              {/* Notifications Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 rounded-full hover:bg-primary/10 transition-all duration-300 active:scale-95 relative"
              >
                <Bell className="h-4 w-4 text-muted-foreground" />
                {hasNotifications && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background animate-pulse" />
                )}
              </Button>
              
              {/* Profile Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 rounded-full hover:bg-primary/10 transition-all duration-300 active:scale-95"
              >
                <User className="h-4 w-4 text-muted-foreground" />
              </Button>

              {/* Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 rounded-full hover:bg-primary/10 transition-all duration-300 active:scale-95 ml-1" 
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className={`h-5 w-5 text-primary transition-transform duration-300 ${sidebarOpen ? 'rotate-90' : 'rotate-0'}`} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};
