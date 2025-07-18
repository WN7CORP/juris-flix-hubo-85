
import { useState, useEffect } from 'react';
import { Edit3, Bot, Scale, Monitor, Headphones, BookOpen, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/context/NavigationContext';

export const QuickAccessCarousel = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { setCurrentFunction } = useNavigation();
  
  const [quickItems, setQuickItems] = useState([
    { id: 1, title: 'Vade Mecum', active: true, icon: Scale, functionName: 'Vade Mecum Digital', gradient: 'from-amber-500/20 to-orange-500/20' },
    { id: 2, title: 'Assistente IA', active: true, icon: Bot, functionName: 'Assistente IA', gradient: 'from-blue-500/20 to-purple-500/20' },
    { id: 3, title: 'Desktop', active: true, icon: Monitor, functionName: 'Plataforma Desktop', gradient: 'from-green-500/20 to-emerald-500/20' },
    { id: 4, title: 'Áudio-aulas', active: true, icon: Headphones, functionName: 'Audioaulas', gradient: 'from-purple-500/20 to-pink-500/20' },
    { id: 5, title: 'Biblioteca', active: true, icon: BookOpen, functionName: 'Biblioteca Jurídica', gradient: 'from-red-500/20 to-rose-500/20' },
  ]);

  const activeItems = quickItems.filter(item => item.active);
  const itemsPerSlide = 3; // Mostrar 3 itens por slide
  const totalSlides = Math.ceil(activeItems.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isEditing || totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isEditing, totalSlides]);

  const toggleItem = (id: number) => {
    setQuickItems(items => 
      items.map(item => 
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const handleItemClick = (item: typeof quickItems[0]) => {
    if (!isEditing && item.active) {
      setCurrentFunction(item.functionName);
    } else if (isEditing) {
      toggleItem(item.id);
    }
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return activeItems.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/30 mx-4 mb-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1"></div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-primary mb-1">Acesso Rápido</h3>
          <p className="text-muted-foreground text-xs">Suas ferramentas favoritas</p>
        </div>
        
        {!isEditing ? (
          <Button
            onClick={() => setIsEditing(true)}
            variant="ghost"
            size="sm"
            className="bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary border border-primary/30 hover:border-primary/50 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300"
          >
            <Edit3 className="w-3 h-3 mr-1" />
            <span>Editar</span>
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIsEditing(false)}
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-3 py-1.5 rounded-lg text-sm transition-all duration-300"
            >
              <Check className="w-3 h-3 mr-1" />
              Salvar
            </Button>
            <Button
              onClick={() => setIsEditing(false)}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-destructive border border-border hover:border-destructive/40 rounded-lg px-3 py-1.5 text-sm transition-all duration-300"
            >
              <X className="w-3 h-3 mr-1" />
              Cancelar
            </Button>
          </div>
        )}
      </div>

      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Carousel Content */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="flex justify-center items-center gap-6 py-4">
                {activeItems.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((item) => (
                  <div
                    key={item.id}
                    className={`group cursor-pointer transition-all duration-300 ${
                      isEditing ? 'hover:scale-110' : 'hover:scale-105'
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    {/* Elegant Card */}
                    <div className={`relative w-20 h-20 mx-auto mb-3 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 bg-gradient-to-br ${item.gradient} ${
                      item.active 
                        ? 'border-primary shadow-lg shadow-primary/20' 
                        : 'border-border bg-muted/50'
                    } ${isEditing ? 'group-hover:border-primary/70 group-hover:shadow-primary/30' : 'group-hover:border-primary/50 group-hover:shadow-lg'}`}>
                      
                      {/* Glass Effect Overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm" />
                      
                      {/* Icon */}
                      <item.icon className={`relative z-10 w-8 h-8 transition-colors duration-300 ${
                        item.active ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      
                      {/* Active Indicator */}
                      {item.active && !isEditing && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-background flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                    
                    {/* Title */}
                    <p className={`text-sm font-medium text-center max-w-20 mx-auto leading-tight transition-colors duration-300 ${
                      item.active ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {item.title}
                    </p>
                    
                    {/* Edit Mode Checkbox */}
                    {isEditing && (
                      <div className={`mt-2 w-4 h-4 mx-auto rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        item.active 
                          ? 'bg-primary border-primary' 
                          : 'border-muted-foreground bg-transparent'
                      }`}>
                        {item.active && <Check className="w-2.5 h-2.5 text-primary-foreground" />}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show if more than 1 slide */}
        {totalSlides > 1 && !isEditing && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 border border-border/50 transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 border border-border/50 transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Slide Indicators - Only show if more than 1 slide */}
      {totalSlides > 1 && !isEditing && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Edit Mode Instructions */}
      {isEditing && (
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            💡 Clique nos itens para ativar/desativar
          </p>
          <div className="mt-2 flex justify-center items-center gap-6">
            {quickItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => handleItemClick(item)}
              >
                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                  item.active 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-muted-foreground/30 text-muted-foreground'
                }`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <span className={`text-xs ${item.active ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
