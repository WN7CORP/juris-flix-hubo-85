import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const carouselData = [{
  id: 1,
  title: "Vade Mecum Digital",
  description: "Leis e códigos sempre atualizados com busca inteligente",
  image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop&crop=center"
}, {
  id: 2,
  title: "Assistente IA Jurídico",
  description: "Inteligência artificial especializada em Direito brasileiro",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center"
}, {
  id: 3,
  title: "Biblioteca Jurídica",
  description: "Milhares de livros, doutrinas e jurisprudências organizadas",
  image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&crop=center"
}, {
  id: 4,
  title: "Flashcards Inteligentes",
  description: "Sistema de repetição espaçada para memorização eficaz",
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center"
}, {
  id: 5,
  title: "Áudio-aulas Especializadas",
  description: "Conteúdo em áudio para estudo em qualquer lugar",
  image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=400&fit=crop&crop=center"
}, {
  id: 6,
  title: "Mapas Mentais Jurídicos",
  description: "Visualize conexões entre institutos e conceitos do Direito",
  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center"
}, {
  id: 7,
  title: "Downloads Jurídicos",
  description: "Acervo completo de livros e materiais para download",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center"
}, {
  id: 8,
  title: "Notícias Jurídicas",
  description: "Mantenha-se atualizado com as últimas novidades do Direito",
  image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop&crop=center"
}, {
  id: 9,
  title: "Videoaulas Profissionais",
  description: "Aprenda com os melhores professores do país",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center"
}, {
  id: 10,
  title: "Questões Comentadas",
  description: "Pratique com questões de concursos anteriores",
  image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=400&fit=crop&crop=center"
}, {
  id: 11,
  title: "Simulados Online",
  description: "Teste seus conhecimentos com simulados completos",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&crop=center"
}, {
  id: 12,
  title: "Cronograma de Estudos",
  description: "Organize sua rotina de estudos de forma inteligente",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&crop=center"
}];
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
  return <div className="relative h-[220px] sm:h-[260px] w-full overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform" style={{
      backgroundImage: `url(${currentItem.image})`,
      filter: 'brightness(0.4) contrast(1.2) saturate(0.9)'
    }} />
      
      {/* Enhanced Legal Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/70 to-slate-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-purple-500/10" />
      
      {/* Content with better positioning and legal styling */}
      <div className="relative z-10 flex h-full items-center px-8 sm:px-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-2xl animate-fade-in-up">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              {currentItem.title}
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-100 drop-shadow-lg animate-fade-in-up leading-relaxed" style={{
          animationDelay: '0.2s'
        }}>
            {currentItem.description}
          </p>
          
          {/* Professional accent line */}
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-full animate-fade-in-up shadow-lg" style={{
          animationDelay: '0.4s'
        }} />
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <Button variant="ghost" size="sm" onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white border-0 rounded-full w-12 h-12 p-0 backdrop-blur-sm transition-all duration-300 hover:scale-110">
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button variant="ghost" size="sm" onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white border-0 rounded-full w-12 h-12 p-0 backdrop-blur-sm transition-all duration-300 hover:scale-110">
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Enhanced Dots Indicator */}
      

      {/* Enhanced Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800/50">
        <div className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 transition-all duration-500 shadow-lg shadow-amber-400/30" style={{
        width: `${(currentSlide + 1) / carouselData.length * 100}%`
      }} />
      </div>

      {/* Subtle particle effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 right-12 w-2 h-2 bg-amber-400/60 rounded-full animate-pulse" />
        <div className="absolute top-16 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute top-10 right-16 w-1.5 h-1.5 bg-amber-400/40 rounded-full animate-pulse" style={{
        animationDelay: '2s'
      }} />
      </div>
    </div>;
};