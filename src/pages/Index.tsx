
import { FeaturesCarousel } from '@/components/FeaturesCarousel';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { QuickAccessSection } from '@/components/QuickAccessSection';
import { AppFunction } from '@/components/AppFunction';
import { MobileLayout } from '@/components/MobileLayout';
import { DesktopLayout } from '@/components/DesktopLayout';
import { SuporteTab } from '@/components/SuporteTab';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/context/NavigationContext';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
import { ArrowRight, CheckCircle, Users, BookOpen } from 'lucide-react';

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
      {/* Hero Section with Carousel - Reduced height for better proportions */}
      <section className="px-3 sm:px-6 md:px-8 mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto">
          <FeaturesCarousel />
        </div>
      </section>

      {/* Quick Access Section - More prominent positioning */}
      <section className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16">
        <div className="max-w-5xl mx-auto">
          <QuickAccessSection />
        </div>
      </section>

      {/* Features Grid with improved spacing */}
      <section className="mb-12 sm:mb-20">
        <FeaturesGrid />
      </section>

      {/* Enhanced CTA Section - More prominent and modern */}
      {!isMobileOrTablet && (
        <section className="py-20 px-8 bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-primary/20">
                <CheckCircle className="w-5 h-5" />
                <span>Plataforma Líder em Educação Jurídica</span>
              </div>
              
              <h2 className="text-5xl font-bold mb-6 gradient-text-legal leading-tight">
                Transforme Sua Carreira Jurídica
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Acesse a mais completa plataforma de estudos jurídicos do Brasil. Milhares de materiais atualizados, 
                IA especializada e ferramentas exclusivas para sua aprovação.
              </p>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                <div className="text-sm text-muted-foreground">Estudantes Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100k+</div>
                <div className="text-sm text-muted-foreground">Materiais Jurídicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Taxa de Aprovação</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex gap-6 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-primary to-accent-legal hover:from-primary/90 hover:via-primary/90 hover:to-accent-legal/90 text-primary-foreground font-bold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-primary/20"
              >
                <span>Começar Gratuitamente</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 px-10 py-4 text-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
              >
                <Users className="w-5 h-5 mr-2" />
                <span>Ver Demonstração</span>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>Teste grátis por 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Cancele a qualquer momento</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mobile CTA - Simplified for mobile */}
      {isMobileOrTablet && (
        <section className="py-12 px-4 bg-gradient-to-br from-card/50 to-card/20 mx-4 rounded-2xl mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text-legal">
              Comece Sua Jornada Jurídica
            </h3>
            <p className="text-muted-foreground mb-6">
              Acesse gratuitamente por 7 dias
            </p>
            <Button className="w-full bg-gradient-to-r from-primary to-accent-legal text-primary-foreground font-semibold py-3">
              <BookOpen className="w-4 h-4 mr-2" />
              Começar Agora
            </Button>
          </div>
        </section>
      )}

      {/* Support Section */}
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
