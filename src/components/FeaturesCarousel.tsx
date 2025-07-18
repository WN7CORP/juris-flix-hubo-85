import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const carouselData = [
  {
    id: 1,
    title: "Vade Mecum Digital",
    description: "Leis e códigos sempre atualizados com busca inteligente",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Assistente IA Jurídico",
    description: "Inteligência artificial especializada em Direito brasileiro",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Biblioteca Jurídica",
    description: "Milhares de livros, doutrinas e jurisprudências organizadas",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Flashcards Inteligentes",
    description: "Sistema de repetição espaçada para memorização eficaz",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Áudio-aulas Especializadas",
    description: "Conteúdo em áudio para estudo em qualquer lugar",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "Mapas Mentais Jurídicos",
    description: "Visualize conexões entre institutos e conceitos do Direito",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 7,
    title: "Downloads Jurídicos",
    description: "Acervo completo de livros e materiais para download",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 8,
    title: "Notícias Jurídicas",
    description: "Mantenha-se atualizado com as últimas novidades do Direito",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 9,
    title: "Jurisprudência Atualizada",
    description: "Decisões judiciais mais recentes organizadas por área",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 10,
    title: "Petições Modelo",
    description: "Templates profissionais para todas as áreas do Direito",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 11,
    title: "Simulados OAB",
    description: "Questões atualizadas para aprovação no exame da Ordem",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 12,
    title: "Cursos Online",
    description: "Videoaulas com professores especializados e certificados",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 13,
    title: "Calculadoras Jurídicas",
    description: "Ferramentas para cálculos trabalhistas e previdenciários",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 14,
    title: "Agenda Profissional",
    description: "Gestão completa de prazos e compromissos advocatícios",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 15,
    title: "Contratos Digitais",
    description: "Modelos de contratos com assinatura eletrônica",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop&crop=center"
  }
];

export const FeaturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const currentItem = carouselData[currentSlide];

  return (
    <div 
      className="relative h-[160px] sm:h-[180px] md:h-[200px] w-full overflow-hidden rounded-2xl shadow-2xl border border-border/20" 
      onMouseEnter={() => setIsAutoPlaying(false)} 
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Image with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform" 
        style={{
          backgroundImage: `url(${currentItem.image})`,
          filter: 'brightness(0.3) contrast(1.1) saturate(0.9)'
        }} 
      />
      
      {/* Professional gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent-legal/10" />
      
      {/* Content with improved typography and spacing */}
      <div className="relative z-10 flex h-full items-center px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white drop-shadow-2xl animate-fade-in-up">
            {currentItem.title}
          </h1>
          <p 
            className="text-sm sm:text-base text-gray-100/90 drop-shadow-lg animate-fade-in-up leading-relaxed" 
            style={{ animationDelay: '0.2s' }}
          >
            {currentItem.description}
          </p>
          
          {/* Elegant accent line */}
          <div 
            className="mt-3 sm:mt-4 w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent-legal rounded-full animate-fade-in-up shadow-lg" 
            style={{ animationDelay: '0.4s' }} 
          />
        </div>
      </div>

      {/* Improved Navigation Arrows */}
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={prevSlide} 
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white border-0 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0 backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <Button 
        variant="ghost" 
        size="sm" 
        onClick={nextSlide} 
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white border-0 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0 backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      {/* Enhanced Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40">
        <div 
          className="h-full bg-gradient-to-r from-primary via-accent-legal to-primary transition-all duration-500 shadow-lg" 
          style={{ width: `${(currentSlide + 1) / carouselData.length * 100}%` }} 
        />
      </div>

      {/* Slide indicators - more visible */}
      <div className="absolute bottom-4 left-4 sm:left-6 flex gap-1.5 z-20">
        {carouselData.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide % 5 
                ? 'bg-primary scale-125 shadow-lg shadow-primary/50' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Slide counter - improved visibility */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/40 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-white/20">
        {currentSlide + 1} / {carouselData.length}
      </div>
    </div>
  );
};
