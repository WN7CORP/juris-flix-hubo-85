
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
              <Card key={i} className="animate-pulse card-legal">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-muted rounded-xl animate-legal-shimmer"></div>
                  <div className="h-4 bg-muted rounded mb-2 animate-legal-shimmer"></div>
                  <div className="h-3 bg-muted rounded animate-legal-shimmer"></div>
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
        {/* Botões destacados redesenhados com design profissional */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 animate-fade-in">
          {/* Botão Loja - Design profissional */}
          <button
            onClick={() => setCurrentFunction('Loja')}
            className="group relative overflow-hidden bg-gradient-to-r from-store-primary to-store-secondary hover:from-store-secondary hover:to-store-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-store-primary/25 transform hover:scale-[1.02] transition-all duration-500 flex items-center gap-4 min-w-[280px] justify-center border border-store-primary/20"
          >
            <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-all duration-300">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium">Loja de Livros</span>
            <ArrowRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </button>
          
          {/* Botão Comunidade - Design profissional */}
          <button
            onClick={() => setCurrentFunction('Comunidade')}
            className="group relative overflow-hidden bg-gradient-to-r from-community-primary to-community-secondary hover:from-community-secondary hover:to-community-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-community-primary/25 transform hover:scale-[1.02] transition-all duration-500 flex items-center gap-4 min-w-[280px] justify-center border border-community-primary/20"
          >
            <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-all duration-300">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium">Comunidade VIP</span>
            <ArrowRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>

        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text-legal">
            Ferramentas Jurídicas Profissionais
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Acesse todas as funcionalidades desenvolvidas especialmente para profissionais e estudantes do Direito
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {sortedFunctions.map((func, index) => {
            const Icon = getUniqueIconForFunction(func.funcao, index);
            
            return (
              <Card 
                key={func.id} 
                className="card-legal group cursor-pointer overflow-hidden animate-fade-in hover:animate-legal-float"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleFunctionClick(func.funcao)}
              >
                <CardContent className="p-4 sm:p-6 text-center relative">
                  {/* Professional background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 relative">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-foreground group-hover:text-primary transition-colors duration-300" />
                    
                    {/* Professional hover arrow */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 shadow-lg">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-500 line-clamp-2">
                    {func.funcao}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-500 line-clamp-2">
                    {func.descricao || 'Funcionalidade especializada para estudos jurídicos'}
                  </p>

                  {/* Professional interactive border effect */}
                  <div className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {sortedFunctions.length === 0 && !loading && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              Nenhuma função encontrada. Verifique a configuração da base de dados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
