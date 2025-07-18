
import { useState } from 'react';
import { Edit3, Settings, Palette, Check, X, Scale, Briefcase, Monitor, Headphones, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const QuickAccessSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [quickItems, setQuickItems] = useState([
    { id: 1, title: 'Vade Mecum', active: true, icon: Scale },
    { id: 2, title: 'Assistente IA', active: true, icon: Settings },
    { id: 3, title: 'Plataforma Desktop', active: true, icon: Monitor },
    { id: 4, title: 'Áudio-aulas', active: true, icon: Headphones },
    { id: 5, title: 'Biblioteca Jurídica', active: true, icon: BookOpen },
  ]);

  const toggleItem = (id: number) => {
    setQuickItems(items => 
      items.map(item => 
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center mx-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1"></div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-1">Acesso Rápido</h3>
          <p className="text-gray-400 text-xs">Funcionalidades mais utilizadas</p>
        </div>
        
        {!isEditing ? (
          <Button
            onClick={() => setIsEditing(true)}
            variant="ghost"
            size="sm"
            className="bg-gradient-to-r from-primary/10 to-accent-legal/10 hover:from-primary/20 hover:to-accent-legal/20 text-primary hover:text-primary border border-primary/20 hover:border-primary/40 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300"
          >
            <Edit3 className="w-3 h-3 mr-1" />
            <span>Editar</span>
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSave}
              size="sm"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium px-3 py-1.5 rounded-lg text-sm"
            >
              <Check className="w-3 h-3 mr-1" />
              Salvar
            </Button>
            <Button
              onClick={handleCancel}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-destructive border border-border hover:border-destructive/40 rounded-lg px-3 py-1.5 text-sm"
            >
              <X className="w-3 h-3 mr-1" />
              Cancelar
            </Button>
          </div>
        )}
      </div>

      {/* Grid compacto de itens */}
      <div className="flex justify-center items-center gap-6 mt-4">
        {quickItems.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className={`group cursor-pointer transition-all duration-300 ${
              isEditing ? 'hover:scale-110' : 'hover:scale-105'
            }`}
            onClick={() => isEditing && toggleItem(item.id)}
          >
            {/* Círculo compacto com ícone */}
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              item.active 
                ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400' 
                : 'border-gray-600 bg-gray-800 text-gray-500'
            } ${isEditing ? 'group-hover:border-yellow-300 group-hover:bg-yellow-400/20' : ''}`}>
              <item.icon className="w-5 h-5" />
            </div>
            
            {/* Texto compacto abaixo */}
            <p className={`text-xs font-medium max-w-16 mx-auto leading-tight ${
              item.active ? 'text-white' : 'text-gray-500'
            }`}>
              {item.title}
            </p>
            
            {/* Checkbox compacto para modo de edição */}
            {isEditing && (
              <div className={`mt-1.5 w-3 h-3 mx-auto rounded-full border flex items-center justify-center ${
                item.active 
                  ? 'bg-yellow-400 border-yellow-400' 
                  : 'border-gray-500'
              } transition-all duration-200`}>
                {item.active && <Check className="w-2 h-2 text-gray-900" />}
              </div>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <p className="text-xs text-gray-400 mt-4 text-center">
          💡 Clique nos itens para ativar/desativar
        </p>
      )}
    </div>
  );
};
