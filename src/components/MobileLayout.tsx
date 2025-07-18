
import { ReactNode, useState } from 'react';
import { FooterMenu } from '@/components/FooterMenu';
import { MobileHeader } from '@/components/MobileHeader';

interface MobileLayoutProps {
  children: ReactNode;
}

export const MobileLayout = ({ children }: MobileLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 flex flex-col overflow-x-hidden">
      {/* Enhanced Mobile Header - otimizado para conforto */}
      <MobileHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {/* Main Content with improved spacing and padding */}
      <main className="flex-1 pt-16 pb-20 overflow-x-hidden">
        <div className="w-full max-w-full px-3 space-y-4">
          {children}
        </div>
      </main>
      
      {/* Enhanced Bottom Navigation */}
      <FooterMenu isVisible={!sidebarOpen} />
    </div>
  );
};
