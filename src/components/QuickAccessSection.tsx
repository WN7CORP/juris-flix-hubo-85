
import { useState } from 'react';
import { Edit3, Bot, Scale, Monitor, Headphones, BookOpen, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/context/NavigationContext';

export const QuickAccessSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { setCurrentFunction } = useNavigation();
  const [quickItems, setQuickItems] = useState([
    { id: 1, title: 'Vade Mecum', active: true, icon: Scale, functionName: 'Vade Mecum Digital', color: 'emerald' },
    { id: 2, title: 'Assistente IA', active: true, icon: Bot, functionName: 'Assistente IA', color: 'purple' },
    { id: 3, title: 'Plataforma Desktop', active: true, icon: Monitor, functionName: 'Plataforma Desktop', color: 'blue' },
    { id: 4, title: 'Áudio-aulas', active: true, icon: Headphones, functionName: 'Audioaulas', color: 'sky' },
    { id: 5, title: 'Biblioteca Jurídica', active: true, icon: BookOpen, functionName: 'Biblioteca Jurídica', color: 'emerald' },
  ]);

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

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const getColorClasses = (color: string, active: boolean) => {
    const colorMap = {
      emerald: active 
        ? 'border-emerald-500 bg-emerald-500/15 text-emerald-400 shadow-emerald-500/20' 
        : 'border-border bg-muted text-muted-foreground',
      purple: active 
        ? 'border-purple-500 bg-purple-500/15 text-purple-400 shadow-purple-500/20' 
        : 'border-border bg-muted text-muted-foreground',
      blue: active 
        ? 'border-blue-500 bg-blue-500/15 text-blue-400 shadow-blue-500/20' 
        : 'border-border bg-muted text-muted-foreground',
      sky: active 
        ? 'border-sky-500 bg-sky-500/15 text-sky-400 shadow-sky-500/20' 
        : 'border-border bg-muted text-muted-foreground',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <div className="glass-effect-premium rounded-2xl p-6 border border-quick-access-border/50 text-center mx-4 mb-8 shadow-2xl relative overflow-hidden animate-fade-in">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-legal/5 rounded-2xl" />
      
      {/* Header aprimorado */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex-1"></div>
        <div className="text-center">
          <h3 className="text-2xl font-bold gradient-text-legal mb-2">Acesso Rápido</h3>
          <p className="text-muted-foreground text-sm font-medium">Funcionalidades mais utilizadas</p>
        </div>
        
        {!isEditing ? (
          <Button
            onClick={() => setIsEditing(true)}
            variant="ghost"
            size="sm"
            className="bg-primary/15 hover:bg-primary/25 text-primary hover:text-primary border border-primary/30 hover:border-primary/50 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/20 animate-icon-pulse-glow"
          >
            <Edit3 className="w-4 h-4 mr-2" />
            <span>Personalizar</span>
          </Button>
        ) : (
          <div className="flex items-center gap-3">
            <Button
              onClick={handleSave}
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 animate-icon-bounce"
            >
              <Check className="w-4 h-4 mr-2" />
              Salvar
            </Button>
            <Button
              onClick={handleCancel}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-destructive border border-border hover:border-destructive/40 rounded-xl px-4 py-2 text-sm transition-all duration-300 shadow-md"
            >
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
          </div>
        )}
      </div>

      {/* Grid de itens aprimorado */}
      <div className="flex justify-center items-center gap-8 mt-6 relative z-10">
        {quickItems.slice(0, 5).map((item, index) => (
          <div
            key={item.id}
            className={`group cursor-pointer transition-all duration-500 transform hover:scale-110 animate-stagger-in ${
              isEditing ? 'hover:scale-125' : 'hover:scale-105'
            }`}
            onClick={() => handleItemClick(item)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Círculo do ícone aprimorado */}
            <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 shadow-xl relative overflow-hidden ${
              getColorClasses(item.color, item.active)
            } ${isEditing ? 'group-hover:shadow-2xl' : 'group-hover:shadow-2xl group-hover:-translate-y-2'}`}>
              
              {/* Efeito de brilho de fundo */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                item.active 
                  ? `from-${item.color}-400/20 to-${item.color}-600/20` 
                  : 'from-transparent to-transparent'
              } rounded-2xl transition-all duration-500`} />
              
              {/* Ícone com animação */}
              <item.icon className={`w-7 h-7 relative z-10 transition-all duration-500 ${
                item.active && !isEditing ? 'animate-icon-pulse-glow' : ''
              }`} />
              
              {/* Efeito de ondulação no hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Texto aprimorado */}
            <p className={`text-sm font-semibold max-w-20 mx-auto leading-tight transition-all duration-500 ${
              item.active ? 'text-foreground' : 'text-muted-foreground'
            } group-hover:text-primary`}>
              {item.title}
            </p>
            
            {/* Indicador de status para modo de edição */}
            {isEditing && (
              <div className={`mt-2 w-4 h-4 mx-auto rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-md ${
                item.active 
                  ? `bg-${item.color}-500 border-${item.color}-500 shadow-${item.color}-500/30` 
                  : 'border-muted-foreground bg-transparent'
              }`}>
                {item.active && <Check className="w-2.5 h-2.5 text-white" />}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dica para modo de edição */}
      {isEditing && (
        <div className="mt-6 p-3 bg-info/10 border border-info/20 rounded-xl relative z-10">
          <p className="text-sm text-info font-medium flex items-center justify-center gap-2">
            ✨ Clique nos itens para ativar/desativar suas funcionalidades favoritas
          </p>
        </div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent-legal/10 rounded-full blur-2xl" />
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-community-primary/10 to-store-primary/10 rounded-full blur-xl" />
    </div>
  );
};
