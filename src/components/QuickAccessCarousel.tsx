
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Edit2, ShoppingCart, BookOpen, Headphones, FileText, Brain, Gavel, Users, Download, Zap, Video, Calculator, Crown, Star } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import { useAppFunctions } from '@/hooks/useAppFunctions';

export const QuickAccessCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const { setCurrentFunction } = useNavigation();
  const { functions } = useAppFunctions();

  // Expanded quick access items with more functions
  const quickAccessItems = [
    {
      id: 'loja',
      title: 'Loja de Direito',
      icon: ShoppingCart,
      gradient: 'from-blue-500 to-blue-600',
      function: 'Loja'
    },
    {
      id: 'novidades',
      title: 'Novidades',
      icon: Star,
      gradient: 'from-yellow-500 to-yellow-600',
      function: 'Novidades'
    },
    {
      id: 'vade-mecum',
      title: 'Vade Mecum',
      icon: BookOpen,
      gradient: 'from-green-500 to-green-600',
      function: functions.find(f => f.funcao.includes('Vade Mecum'))?.funcao || 'Vade Mecum Digital'
    },
    {
      id: 'audio-aulas',
      title: 'Áudio-aulas',
      icon: Headphones,
      gradient: 'from-purple-500 to-purple-600',
      function: functions.find(f => f.funcao.includes('Áudio'))?.funcao || 'Áudio-aulas'
    },
    {
      id: 'flashcards',
      title: 'Flashcards',
      icon: Brain,
      gradient: 'from-pink-500 to-pink-600',
      function: functions.find(f => f.funcao.includes('Flashcards'))?.funcao || 'Flashcards'
    },
    {
      id: 'videoaulas',
      title: 'Videoaulas',
      icon: Video,
      gradient: 'from-red-500 to-red-600',
      function: functions.find(f => f.funcao.includes('Videoaulas'))?.funcao || 'Videoaulas'
    },
    {
      id: 'questoes',
      title: 'Banco de Questões',
      icon: FileText,
      gradient: 'from-indigo-500 to-indigo-600',
      function: functions.find(f => f.funcao.includes('Questões'))?.funcao || 'Banco de Questões'
    },
    {
      id: 'simulados',
      title: 'Simulados OAB',
      icon: Calculator,
      gradient: 'from-teal-500 to-teal-600',
      function: functions.find(f => f.funcao.includes('Simulados'))?.funcao || 'Simulados OAB'
    },
    {
      id: 'downloads',
      title: 'Downloads',
      icon: Download,
      gradient: 'from-orange-500 to-orange-600',
      function: functions.find(f => f.funcao.includes('Downloads'))?.funcao || 'Downloads'
    },
    {
      id: 'assistente-ia',
      title: 'Assistente IA',
      icon: Zap,
      gradient: 'from-cyan-500 to-cyan-600',
      function: functions.find(f => f.funcao.includes('IA'))?.funcao || 'Assistente IA Jurídica'
    },
    {
      id: 'premium',
      title: 'Premium',
      icon: Crown,
      gradient: 'from-amber-500 to-amber-600',
      function: 'Premium'
    }
  ];

  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const getItemsPerSlide = () => {
    if (window.innerWidth < 768) return itemsPerSlide.mobile;
    if (window.innerWidth < 1024) return itemsPerSlide.tablet;
    return itemsPerSlide.desktop;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsPerSlide());
  const totalSlides = Math.ceil(quickAccessItems.length / itemsToShow);

  useEffect(() => {
    const handleResize = () => {
      const newItemsToShow = getItemsPerSlide();
      setItemsToShow(newItemsToShow);
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const handleItemClick = (item: typeof quickAccessItems[0]) => {
    if (!isEditMode) {
      setCurrentFunction(item.function);
    }
  };

  const currentItems = quickAccessItems.slice(
    currentSlide * itemsToShow,
    (currentSlide + 1) * itemsToShow
  );

  return (
    <section className="px-3 sm:px-4 md:px-8 mb-6 sm:mb-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold gradient-text-legal">Acesso Rápido</h2>
            <p className="text-muted-foreground mt-1">Navegue rapidamente pelas principais funcionalidades</p>
          </div>
          
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isEditMode 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            <Edit2 className="h-4 w-4" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background transition-all duration-300 -translate-x-4"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background transition-all duration-300 translate-x-4"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Carousel Items */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid gap-4"
                  style={{
                    gridTemplateColumns: `repeat(${itemsToShow}, 1fr)`
                  }}
                >
                  {quickAccessItems
                    .slice(slideIndex * itemsToShow, (slideIndex + 1) * itemsToShow)
                    .map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.id}
                          onClick={() => handleItemClick(item)}
                          className={`group relative p-6 rounded-2xl glass-effect-modern cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                            isEditMode ? 'ring-2 ring-primary/50 animate-pulse' : ''
                          }`}
                        >
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-300`} />
                          
                          {/* Content */}
                          <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="h-8 w-8" />
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                          
                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary scale-125 shadow-lg' 
                      : 'bg-muted hover:bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
