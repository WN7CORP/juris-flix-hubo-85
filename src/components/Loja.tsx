
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';

export const Loja = () => {
  const { setCurrentFunction } = useNavigation();

  const handleBack = () => {
    setCurrentFunction(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <button
            onClick={handleBack}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-semibold">Loja de Direito</h1>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Iframe content */}
      <div className="w-full" style={{ height: 'calc(100vh - 56px)' }}>
        <iframe 
          src="https://preview--barba-growth-journey-76.lovable.app/"
          className="w-full h-full border-0" 
          title="Loja de Direito"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
          loading="lazy"
        />
      </div>
    </div>
  );
};
