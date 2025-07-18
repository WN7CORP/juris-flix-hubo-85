
import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { QuickAccessSection } from '@/components/QuickAccessSection';
import { QuickStatsBar } from '@/components/QuickStatsBar';
import { RecentActivityCard } from '@/components/RecentActivityCard';
import { AppFunction } from '@/components/AppFunction';
import { MobileLayout } from '@/components/MobileLayout';
import { DesktopLayout } from '@/components/DesktopLayout';
import { SuporteTab } from '@/components/SuporteTab';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/context/NavigationContext';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

const Index = () => {
  const { isInFunction } = useNavigation();
  const { isMobileOrTablet } = useDeviceDetection();

  // If we're in a function, show the function component
  if (isInFunction) {
    return <AppFunction />;
  }

  // Main content for both mobile and desktop
  const mainContent = (
    <>
      {/* Quick Stats Bar - Only Mobile */}
      {isMobileOrTablet && <QuickStatsBar />}

      {/* Carousel Section - Optimized height */}
      <section className="px-3 sm:px-4 md:px-8 mb-4 sm:mb-6">
        <div className="max-w-7xl mx-auto">
          <FeaturesCarousel />
        </div>
      </section>

      {/* Quick Access Section - Enhanced for mobile */}
      <QuickAccessSection />

      {/* Recent Activity - Mobile Only */}
      {isMobileOrTablet && <RecentActivityCard />}

      {/* Features Grid - Responsive */}
      <FeaturesGrid />

      {/* Enhanced CTA Section - Desktop Only */}
      {!isMobileOrTablet && (
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Sua Carreira Jurídica no Próximo Nível
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Acesse milhares de materiais jurídicos atualizados, ferramentas de IA especializadas e prepare-se para o sucesso profissional.
              </p>
            </div>
            
            <div className="flex gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Começar Gratuitamente
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                Agendar Demonstração
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Teste grátis por 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Suporte especializado</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Support Section - Enhanced for mobile */}
      <SuporteTab />
    </>
  );

  // Return appropriate layout based on device
  if (isMobileOrTablet) {
    return <MobileLayout>{mainContent}</MobileLayout>;
  }

  return <DesktopLayout>{mainContent}</DesktopLayout>;
};

export default Index;
