
import { useState } from 'react';
import { Edit3, Bot, Scale, Monitor, Headphones, BookOpen, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/context/NavigationContext';

export const QuickAccessSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { setCurrentFunction } = useNavigation();
  const [quickItems, setQuickItems] = useState([
    { id: 1, title: 'Vade Mecum', active: true, icon: Scale, functionName: 'Vade Mecum Digital' },
    { id: 2, title: 'Assistente IA', active: true, icon: Bot, functionName: 'Assistente IA' },
    { id: 3, title: 'Plataforma Desktop', active: true, icon: Monitor, functionName: 'Plataforma Desktop' },
    { id: 4, title: 'Áudio-aulas', active: true, icon: Headphones, functionName: 'Audioaulas' },
    { id: 5, title: 'Biblioteca Jurídica', active: true, icon: BookOpen, functionName: 'Biblioteca Jurídica' },
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

  return (
    <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-border/30 text-center shadow-2xl hover:shadow-3xl transition-all duration-500">
      {/* Header with better spacing and typography */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex-1"></div>
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Acesso Rápido</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Suas ferramentas favoritas</p>
        </div>
        
        {!isEditing ? (
          <Button
            onClick={() => setIsEditing(true)}
            variant="ghost"
            size="sm"
            className="bg-primary/15 hover:bg-primary/25 text-primary hover:text-primary border border-primary/30 hover:border-primary/50 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 backdrop-blur-sm"
          >
            <Edit3 className="w-4 h-4 mr-2" />
            <span>Editar</span>
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSave}
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Check className="w-4 h-4 mr-1" />
              Salvar
            </Button>
            <Button
              onClick={handleCancel}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-destructive border border-border hover:border-destructive/40 rounded-xl px-4 py-2 text-sm transition-all duration-300"
            >
              <X className="w-4 h-4 mr-1" />
              Cancelar
            </Button>
          </div>
        )}
      </div>

      {/* Enhanced grid with better spacing and hover effects */}
      <div className="flex justify-center items-center gap-6 sm:gap-8 mt-6">
        {quickItems.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className={`group cursor-pointer transition-all duration-500 ${
              isEditing ? 'hover:scale-110' : 'hover:scale-105'
            }`}
            onClick={() => handleItemClick(item)}
          >
            {/* Enhanced circle with better styling */}
            <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 shadow-lg ${
              item.active 
                ? 'border-primary bg-gradient-to-br from-primary/20 to-primary/10 text-primary shadow-primary/25 hover:shadow-primary/40' 
                : 'border-border bg-muted/50 text-muted-foreground hover:border-border/70'
            } ${isEditing ? 'group-hover:border-primary/70 group-hover:bg-primary/20' : 'group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-xl'} backdrop-blur-sm`}>
              <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            
            {/* Enhanced text styling */}
            <p className={`text-sm sm:text-base font-semibold max-w-20 mx-auto leading-tight transition-colors duration-500 ${
              item.active ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {item.title}
            </p>
            
            {/* Enhanced checkbox for editing mode */}
            {isEditing && (
              <div className={`mt-2 w-4 h-4 mx-auto rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                item.active 
                  ? 'bg-primary border-primary shadow-lg shadow-primary/30' 
                  : 'border-muted-foreground hover:border-primary/50'
              }`}>
                {item.active && <Check className="w-2.5 h-2.5 text-primary-foreground font-bold" />}
              </div>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-border/50 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground text-center">
            💡 Clique nos itens para ativar/desativar suas ferramentas favoritas
          </p>
        </div>
      )}
    </div>
  );
};
