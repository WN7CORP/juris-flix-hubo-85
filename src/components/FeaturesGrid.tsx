
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
  Hammer
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
  if (name.includes('flashcard') || name.includes('flash card')) return Brain; // Alterado para cérebro
  if (name.includes('resumo') || name.includes('codigo') || name.includes('código')) return BookOpen;
  if (name.includes('video') || name.includes('vídeo') || name.includes('aula')) return Play;
  if (name.includes('petições') || name.includes('peticoes') || name.includes('petição')) return Folder;
  if (name.includes('noticia') || name.includes('notícia') || name.includes('juridica')) return Newspaper;
  if (name.includes('juriflix') || name.includes('filme') || name.includes('cinema')) return Film;
  if (name.includes('simulado') || name.includes('prova') || name.includes('oab')) return Hammer; // Alterado para martelo
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
  if (name.includes('questões') || name.includes('questao') || name.includes('questão')) return Target; // Alterado para alvo
  if (name.includes('dicionário') || name.includes('dicionario')) return Search; // Alterado para lupa
  
  // Se não encontrar correspondência específica, usa um ícone único baseado no índice
  return availableIcons[index % availableIcons.length] || Scale;
};

const getColorForFunction = (index: number) => {
  const colors = [
    'gradient-legal',     // Gold for legal content
    'gradient-ai',        // Cyan for AI/tech
    'gradient-study',     // Blue for study materials
    'gradient-media',     // Purple for media content
    'gradient-docs',      // Green for documents
    'gradient-legal',     // Back to gold
    'gradient-ai',        // Cyan
    'gradient-study',     // Blue
    'gradient-media',     // Purple
    'gradient-docs',      // Green
    'gradient-legal',     // Gold
    'gradient-ai'         // Cyan
  ];
  return colors[index % colors.length];
};

export const FeaturesGrid = () => {
  const { functions, loading } = useAppFunctions();
  const { setCurrentFunction } = useNavigation();

  const handleFunctionClick = (funcao: string) => {
    setCurrentFunction(funcao);
  };

  // Sort functions by id to maintain table order
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
        {/* Botões destacados: Loja e Comunidade */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 animate-slide-up-legal">
          <a
            href="https://preview--barba-growth-journey-76.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
            </svg>
            🏪 Loja de Livros Físicos
          </a>
          
          <a
            href="https://chat.whatsapp.com/DKlKgHsjHZ97OKUDxEpT6w?mode=r_t"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.38 14.99 3.06 16.26L2 22L7.74 20.94C9.01 21.62 10.46 22 12 22C17.52 22 22 17.52 22 12S17.52 2 12 2ZM17.25 15.3C17.01 15.95 16.16 16.48 15.38 16.67C14.84 16.8 14.15 16.9 12 16C9.18 14.83 7.33 11.83 7.17 11.63C7.03 11.43 6 10.21 6 8.95C6 7.69 6.7 7.08 6.97 6.81C7.24 6.54 7.6 6.45 7.8 6.45C7.9 6.45 8 6.45 8.08 6.46C8.35 6.47 8.49 6.49 8.66 6.87C8.85 7.29 9.27 8.19 9.31 8.29C9.35 8.39 9.39 8.51 9.31 8.67C9.23 8.83 9.19 8.93 9.05 9.09C8.91 9.25 8.75 9.43 8.63 9.55C8.49 9.69 8.35 9.85 8.51 10.11C8.67 10.37 9.26 11.4 10.14 12.2C11.28 13.24 12.21 13.57 12.51 13.71C12.81 13.85 12.97 13.81 13.13 13.63C13.29 13.45 13.67 13.01 13.85 12.75C14.03 12.49 14.21 12.53 14.47 12.63C14.73 12.73 15.63 13.21 15.93 13.37C16.23 13.53 16.43 13.61 16.47 13.73C16.51 13.85 16.51 14.27 17.25 15.3Z"/>
            </svg>
            👥 Comunidade Exclusiva
          </a>
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
