
import { useState } from 'react';
import { Edit3, Settings, Palette, Layout, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const QuickAccessSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [quickItems, setQuickItems] = useState([
    { id: 1, title: 'Vade Mecum', active: true },
    { id: 2, title: 'Biblioteca', active: true },
    { id: 3, title: 'IA Jurídica', active: true },
    { id: 4, title: 'Flashcards', active: false },
    { id: 5, title: 'Notícias', active: false },
    { id: 6, title: 'Downloads', active: true },
    { id: 7, title: 'Áudio-aulas', active: true },
    { id: 8, title: 'Calculadoras', active: false },
    { id: 9, title: 'Jurisprudência', active: true },
    { id: 10, title: 'Petições', active: false },
    { id: 11, title: 'Simulados', active: true },
    { id: 12, title: 'Cursos', active: false },
  ]);

  const toggleItem = (id: number) => {
    setQuickItems(items => 
      items.map(item => 
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aqui você salvaria as configurações
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Aqui você restauraria as configurações originais
  };

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 2; // mobile
      if (window.innerWidth < 1024) return 3; // tablet
      return 4; // desktop
    }
    return 4;
  };

  const itemsPerSlide = getItemsPerSlide();
  const chunkedItems = [];
  for (let i = 0; i < quickItems.length; i += itemsPerSlide) {
    chunkedItems.push(quickItems.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 glass-effect-modern">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-legal flex items-center justify-center animate-glow-pulse">
            <Layout className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Acesso Rápido</h3>
            <p className="text-sm text-muted-foreground">Personalize seus atalhos favoritos</p>
          </div>
        </div>
        
        {!isEditing ? (
          <Button
            onClick={() => setIsEditing(true)}
            variant="ghost"
            size="sm"
            className="group relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent-legal/10 hover:from-primary/20 hover:to-accent-legal/20 text-primary hover:text-primary border border-primary/20 hover:border-primary/40 rounded-xl px-4 py-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-legal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            <div className="relative flex items-center gap-2">
              <Edit3 className="w-4 h-4 group-hover:animate-pulse" />
              <span>Personalizar</span>
              <Palette className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSave}
              size="sm"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium px-4 py-2 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              <Check className="w-4 h-4 mr-1" />
              Salvar
            </Button>
            <Button
              onClick={handleCancel}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-destructive border border-border hover:border-destructive/40 rounded-xl px-4 py-2 transition-all duration-300"
            >
              <X className="w-4 h-4 mr-1" />
              Cancelar
            </Button>
          </div>
        )}
      </div>

      {/* Carrossel de itens */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {chunkedItems.map((chunk, chunkIndex) => (
              <CarouselItem key={chunkIndex} className="pl-2 md:pl-4">
                <div className={`grid gap-3 ${
                  itemsPerSlide === 2 ? 'grid-cols-2' : 
                  itemsPerSlide === 3 ? 'grid-cols-3' : 
                  'grid-cols-4'
                }`}>
                  {chunk.map((item) => (
                    <Card
                      key={item.id}
                      className={`group cursor-pointer transition-all duration-300 ${
                        isEditing 
                          ? 'hover:scale-105 hover:shadow-lg' 
                          : item.active 
                            ? 'hover:scale-105 hover:shadow-lg bg-primary/5 border-primary/20' 
                            : 'opacity-50'
                      } ${
                        item.active && !isEditing ? 'bg-gradient-to-br from-primary/5 to-accent-legal/5 border-primary/20' : ''
                      }`}
                      onClick={() => isEditing && toggleItem(item.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className={`w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                          item.active 
                            ? 'gradient-legal text-white animate-glow-pulse' 
                            : 'bg-muted text-muted-foreground'
                        } ${isEditing ? 'group-hover:scale-110' : ''} transition-all duration-300`}>
                          <Settings className="w-4 h-4" />
                        </div>
                        <p className={`text-xs font-medium ${
                          item.active ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {item.title}
                        </p>
                        {isEditing && (
                          <div className={`mt-2 w-4 h-4 mx-auto rounded-full border-2 flex items-center justify-center ${
                            item.active 
                              ? 'bg-primary border-primary' 
                              : 'border-muted-foreground'
                          } transition-all duration-200`}>
                            {item.active && <Check className="w-3 h-3 text-white" />}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {chunkedItems.length > 1 && (
            <>
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary hover:text-primary" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary hover:text-primary" />
            </>
          )}
        </Carousel>
      </div>

      {isEditing && (
        <p className="text-sm text-muted-foreground mt-4 text-center">
          💡 Clique nos itens para ativar/desativar no seu acesso rápido
        </p>
      )}
    </div>
  );
};
