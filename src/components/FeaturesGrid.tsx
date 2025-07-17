import { Card, CardContent } from '@/components/ui/card';
import { useAppFunctions } from '@/hooks/useAppFunctions';
import { useNavigation } from '@/context/NavigationContext';
import { 
  ArrowRight, 
  GitBranch,
  Scale,
  Bot,
  Headphones,
  Library,
  Monitor,
  Play,
  Folder,
  Newspaper,
  Film,
  Brain,
  BookOpen,
  FileText,
  Search,
  GraduationCap,
  Calendar,
  Clock,
  Award,
  Target,
  Bookmark,
  Download,
  Upload,
  Share,
  Heart,
  Star,
  Zap,
  Shield,
  Globe,
  Camera,
  Music,
  Video,
  Image,
  File,
  Archive,
  Code,
  Database,
  Hammer,
  ShoppingBag,
  Users,
  Sparkles
} from 'lucide-react';

// Array expandido de ícones únicos
const availableIcons = [
  Scale, Bot, Library, Headphones, GitBranch, Monitor, Play, Folder, 
  Newspaper, Film, Brain, BookOpen, FileText, Search, GraduationCap, 
  Calendar, Clock, Award, Target, Bookmark, Download, Upload, Share, 
  Heart, Star, Zap, Shield, Globe, Camera, Music, Video, Image, 
  File, Archive, Code, Database, Hammer
];

const getUniqueIconForFunction = (funcao: string, index: number) => {
  const name = funcao.toLowerCase();
  
  // Mapeamento específico para funções principais
  if (name.includes('vade') || name.includes('mecum')) return Scale;
  if (name.includes('assistente') && name.includes('ia')) return Bot;
  if (name.includes('biblioteca')) return Library;
  if (name.includes('audio') || name.includes('áudio')) return Headphones;
  if (name.includes('mapa') && name.includes('mental')) return Brain;
  if (name.includes('plataforma') && name.includes('desktop')) return Monitor;
  if (name.includes('flashcard') || name.includes('flash card')) return Brain;
  if (name.includes('resumo') || name.includes('codigo') || name.includes('código')) return BookOpen;
  if (name.includes('video') || name.includes('vídeo') || name.includes('aula')) return Play;
  if (name.includes('petições') || name.includes('peticoes') || name.includes('petição')) return Folder;
  if (name.includes('noticia') || name.includes('notícia') || name.includes('juridica')) return Newspaper;
  if (name.includes('juriflix') || name.includes('filme') || name.includes('cinema')) return Film;
  if (name.includes('simulado') || name.includes('prova') || name.includes('oab')) return Hammer;
  if (name.includes('calendario') || name.includes('agenda')) return Calendar;
  if (name.includes('curso') || name.includes('aula')) return GraduationCap;
  if (name.includes('pesquisa') || name.includes('busca')) return Search;
  if (name.includes('documento') || name.includes('texto')) return FileText;
  if (name.includes('download') || name.includes('baixar')) return Download;
  if (name.includes('upload') || name.includes('enviar')) return Upload;
  if (name.includes('compartilhar') || name.includes('share')) return Share;
  if (name.includes('favorito') || name.includes('favoritar')) return Heart;
  if (name.includes('avaliação') || name.includes('rating')) return Star;
  if (name.includes('rápido') || name.includes('express')) return Zap;
  if (name.includes('segurança') || name.includes('security')) return Shield;
  if (name.includes('web') || name.includes('site')) return Globe;
  if (name.includes('imagem') || name.includes('foto')) return Camera;
  if (name.includes('música') || name.includes('music')) return Music;
  if (name.includes('arquivo') || name.includes('file')) return Archive;
  if (name.includes('código') || name.includes('programação')) return Code;
  if (name.includes('banco') || name.includes('dados')) return Database;
  if (name.includes('questões') || name.includes('questao') || name.includes('questão')) return Target;
  if (name.includes('dicionário') || name.includes('dicionario')) return Search;
  
  return availableIcons[index % availableIcons.length] || Scale;
};

const getColorForFunction = (index: number) => {
  const colors = [
    'gradient-legal',
    'gradient-ai',
    'gradient-study',
    'gradient-media',
    'gradient-docs',
    'gradient-legal',
    'gradient-ai',
    'gradient-study',
    'gradient-media',
    'gradient-docs',
    'gradient-legal',
    'gradient-ai'
  ];
  return colors[index % colors.length];
};

export const FeaturesGrid = () => {
  const { functions, loading } = useAppFunctions();
  const { setCurrentFunction } = useNavigation();

  const handleFunctionClick = (funcao: string) => {
    setCurrentFunction(funcao);
  };

  const sortedFunctions = [...functions].sort((a, b) => a.id - b.id);

  if (loading) {
    return (
      <div className="py-12 sm:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text-legal">
              Ferramentas Jurídicas Profissionais
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Carregando funcionalidades...
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="animate-pulse neomorphism-legal">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-600 rounded-xl animate-legal-shimmer"></div>
                  <div className="h-4 bg-gray-600 rounded mb-2 animate-legal-shimmer"></div>
                  <div className="h-3 bg-gray-600 rounded animate-legal-shimmer"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Botões destacados redesenhados com cores únicas e design estiloso */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 animate-slide-up-legal">
          {/* Botão Loja - Design estiloso com azul vibrante */}
          <button
            onClick={() => setCurrentFunction('Loja')}
            className="group relative overflow-hidden bg-gradient-to-r from-store-primary via-blue-500 to-store-secondary hover:from-blue-600 hover:via-blue-500 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-500 flex items-center gap-4 min-w-[280px] justify-center animate-glow"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon container with glow effect */}
            <div className="relative z-10 w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
              <ShoppingBag className="w-5 h-5 text-white drop-shadow-lg" />
            </div>
            
            {/* Text with glow effect */}
            <span className="relative z-10 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
              Loja de Livros
            </span>
            
            {/* Sparkle effects */}
            <div className="absolute top-2 right-4 w-2 h-2 bg-white/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-6 w-1 h-1 bg-white/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}></div>
            
            {/* Arrow indicator */}
            <ArrowRight className="relative z-10 w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </button>
          
          {/* Botão Comunidade - Design estiloso com verde vibrante */}
          <button
            onClick={() => setCurrentFunction('Comunidade')}
            className="group relative overflow-hidden bg-gradient-to-r from-community-primary via-emerald-500 to-community-secondary hover:from-emerald-600 hover:via-emerald-500 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-[1.02] transition-all duration-500 flex items-center gap-4 min-w-[280px] justify-center animate-community-glow"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon container with glow effect */}
            <div className="relative z-10 w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
              <Users className="w-5 h-5 text-white drop-shadow-lg" />
            </div>
            
            {/* Text with glow effect */}
            <span className="relative z-10 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
              Comunidade VIP
            </span>
            
            {/* Sparkle effects */}
            <div className="absolute top-2 right-4 w-2 h-2 bg-white/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-6 w-1 h-1 bg-white/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}></div>
            
            {/* Arrow indicator */}
            <ArrowRight className="relative z-10 w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>

        <div className="text-center mb-8 sm:mb-12 animate-slide-up-legal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text-legal animate-legal-text-glow">
            Ferramentas Jurídicas Profissionais
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Acesse todas as funcionalidades desenvolvidas especialmente para profissionais e estudantes do Direito
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {sortedFunctions.map((func, index) => {
            const Icon = getUniqueIconForFunction(func.funcao, index);
            const colorClass = getColorForFunction(index);
            
            return (
              <Card 
                key={func.id} 
                className="card-legal group cursor-pointer border-border/30 bg-card/60 backdrop-blur-sm hover:bg-card/90 overflow-hidden animate-scale-glow hover:animate-legal-float"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleFunctionClick(func.funcao)}
              >
                <CardContent className="p-4 sm:p-6 text-center relative">
                  {/* Enhanced background gradient effect with animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-legal-glow" />
                  
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl ${colorClass} flex items-center justify-center group-hover:scale-110 transition-all duration-500 card-depth-2 group-hover:card-depth-3 relative animate-legal-shimmer group-hover:animate-legal-icon-glow`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 drop-shadow-lg group-hover:animate-legal-icon-float" />
                    
                    {/* Enhanced hover arrow with legal styling and animation */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 card-depth-1 animate-legal-bounce">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800 animate-legal-arrow-float" />
                    </div>
                    
                    {/* Legal sparkle effect */}
                    <div className="absolute top-1 right-1 w-2 h-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 animate-legal-sparkle transition-opacity duration-500" />
                  </div>
                  
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-500 line-clamp-2 group-hover:animate-legal-text-glow group-hover:scale-105">
                    {func.funcao}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-500 line-clamp-2-fade">
                    {func.descricao || 'Funcionalidade especializada para estudos jurídicos'}
                  </p>

                  {/* Enhanced interactive border effect with animation */}
                  <div className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/30 transition-all duration-500 animate-legal-border" />
                  
                  {/* Professional glow effect on hover with animation */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hover-glow-legal animate-legal-hover-glow" />
                  
                  {/* Justice-themed corner accent */}
                  <div className="absolute top-2 right-2 w-1 h-6 bg-gradient-to-b from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-legal-accent" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {sortedFunctions.length === 0 && !loading && (
          <div className="text-center py-12 animate-fade-in-legal">
            <p className="text-muted-foreground text-lg">
              Nenhuma função encontrada. Verifique a configuração da base de dados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
