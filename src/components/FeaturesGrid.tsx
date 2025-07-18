
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

// Paleta de cores únicas para cada função
const getFunctionColor = (funcao: string, index: number) => {
  const name = funcao.toLowerCase();
  
  // Cores específicas baseadas no tipo de função
  if (name.includes('vade') || name.includes('mecum')) return 'from-amber-500 to-yellow-600';
  if (name.includes('assistente') && name.includes('ia')) return 'from-violet-500 to-purple-600';
  if (name.includes('biblioteca')) return 'from-emerald-500 to-green-600';
  if (name.includes('audio') || name.includes('áudio')) return 'from-pink-500 to-rose-600';
  if (name.includes('mapa') && name.includes('mental')) return 'from-cyan-500 to-blue-600';
  if (name.includes('plataforma') && name.includes('desktop')) return 'from-slate-500 to-gray-600';
  if (name.includes('flashcard') || name.includes('flash card')) return 'from-orange-500 to-red-600';
  if (name.includes('resumo') || name.includes('codigo') || name.includes('código')) return 'from-indigo-500 to-blue-600';
  if (name.includes('video') || name.includes('vídeo') || name.includes('aula')) return 'from-red-500 to-pink-600';
  if (name.includes('petições') || name.includes('peticoes') || name.includes('petição')) return 'from-teal-500 to-cyan-600';
  if (name.includes('noticia') || name.includes('notícia') || name.includes('juridica')) return 'from-blue-500 to-indigo-600';
  if (name.includes('juriflix') || name.includes('filme') || name.includes('cinema')) return 'from-purple-500 to-violet-600';
  if (name.includes('simulado') || name.includes('prova') || name.includes('oab')) return 'from-green-500 to-emerald-600';
  if (name.includes('calendario') || name.includes('agenda')) return 'from-rose-500 to-pink-600';
  if (name.includes('curso') || name.includes('aula')) return 'from-sky-500 to-blue-600';
  if (name.includes('pesquisa') || name.includes('busca')) return 'from-lime-500 to-green-600';
  if (name.includes('documento') || name.includes('texto')) return 'from-stone-500 to-slate-600';
  if (name.includes('download') || name.includes('baixar')) return 'from-cyan-500 to-teal-600';
  if (name.includes('upload') || name.includes('enviar')) return 'from-yellow-500 to-amber-600';
  if (name.includes('compartilhar') || name.includes('share')) return 'from-fuchsia-500 to-purple-600';
  if (name.includes('favorito') || name.includes('favoritar')) return 'from-red-500 to-rose-600';
  if (name.includes('avaliação') || name.includes('rating')) return 'from-amber-500 to-orange-600';
  if (name.includes('rápido') || name.includes('express')) return 'from-yellow-500 to-lime-600';
  if (name.includes('segurança') || name.includes('security')) return 'from-emerald-500 to-teal-600';
  if (name.includes('web') || name.includes('site')) return 'from-blue-500 to-cyan-600';
  if (name.includes('imagem') || name.includes('foto')) return 'from-violet-500 to-indigo-600';
  if (name.includes('música') || name.includes('music')) return 'from-pink-500 to-fuchsia-600';
  if (name.includes('arquivo') || name.includes('file')) return 'from-gray-500 to-zinc-600';
  if (name.includes('código') || name.includes('programação')) return 'from-green-500 to-lime-600';
  if (name.includes('banco') || name.includes('dados')) return 'from-slate-500 to-stone-600';
  if (name.includes('questões') || name.includes('questao') || name.includes('questão')) return 'from-orange-500 to-amber-600';
  if (name.includes('dicionário') || name.includes('dicionario')) return 'from-indigo-500 to-violet-600';
  
  // Cores alternativas baseadas no índice
  const colorVariations = [
    'from-blue-500 to-cyan-600',
    'from-green-500 to-teal-600',
    'from-purple-500 to-violet-600',
    'from-pink-500 to-rose-600',
    'from-yellow-500 to-amber-600',
    'from-red-500 to-orange-600',
    'from-indigo-500 to-blue-600',
    'from-emerald-500 to-green-600',
    'from-sky-500 to-cyan-600',
    'from-lime-500 to-emerald-600',
    'from-fuchsia-500 to-pink-600',
    'from-amber-500 to-yellow-600',
    'from-teal-500 to-cyan-600',
    'from-violet-500 to-purple-600',
    'from-rose-500 to-pink-600'
  ];
  
  return colorVariations[index % colorVariations.length];
};

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
            const gradientColor = getFunctionColor(func.funcao, index);
            
            return (
              <Card 
                key={func.id} 
                className="card-legal group cursor-pointer overflow-hidden animate-fade-in hover:animate-legal-float border-0"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleFunctionClick(func.funcao)}
              >
                <CardContent className="p-4 sm:p-6 text-center relative">
                  {/* Gradient background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`} />
                  
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${gradientColor} flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative shadow-lg`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white transition-colors duration-300" />
                    
                    {/* Professional hover arrow */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 shadow-lg">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-600" />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-500 line-clamp-2">
                    {func.funcao}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-500 line-clamp-2">
                    {func.descricao || 'Funcionalidade especializada para estudos jurídicos'}
                  </p>

                  {/* Professional interactive border effect */}
                  <div className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-current transition-all duration-500`} 
                       style={{ borderImageSource: `linear-gradient(135deg, ${gradientColor.replace('from-', '').replace(' to-', ', ')})`, borderImageSlice: 1 }} />
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
