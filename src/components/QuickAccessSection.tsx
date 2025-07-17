
import { useState } from 'react';
import { Edit3, Settings, Palette, Layout, Check, X, Scale, Briefcase, Monitor, Headphones, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    // Aqui você salvaria as configurações
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Aqui você restauraria as configurações originais
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 text-center">
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1"></div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">Acesso Rápido</h3>
          <p className="text-gray-400 text-sm">Funcionalidades mais utilizadas por profissionais do Direito</p>
        </div>
        
        {!isEditing ? (
          <Button
            onClick={() => setIsEditing(true)}
            variant="ghost"
            size="sm"
            className="group relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent-legal/10 hover:from-primary/20 hover:to-accent-legal/20 text-primary hover:text-primary border border-primary/20 hover:border-primary/40 rounded-xl px-4 py-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-legal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            <div className="relative flex items-center gap-2">
              <Edit3 className="w-4 h-4 group-hover:animate-pulse" />
              <span>Personalizar</span>
              <Palette className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSave}
              size="sm"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium px-4 py-2 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              <Check className="w-4 h-4 mr-1" />
              Salvar
            </Button>
            <Button
              onClick={handleCancel}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-destructive border border-border hover:border-destructive/40 rounded-xl px-4 py-2 transition-all duration-300"
            >
              <X className="w-4 h-4 mr-1" />
              Cancelar
            </Button>
          </div>
        )}
      </div>

      {/* Grid de itens - exatamente como na imagem */}
      <div className="flex justify-center items-center gap-8 mt-8">
        {quickItems.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className={`group cursor-pointer transition-all duration-300 ${
              isEditing ? 'hover:scale-110' : 'hover:scale-105'
            }`}
            onClick={() => isEditing && toggleItem(item.id)}
          >
            {/* Círculo com ícone */}
            <div className={`w-16 h-16 mx-auto mb-3 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              item.active 
                ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400' 
                : 'border-gray-600 bg-gray-800 text-gray-500'
            } ${isEditing ? 'group-hover:border-yellow-300 group-hover:bg-yellow-400/20' : ''}`}>
              <item.icon className="w-7 h-7" />
            </div>
            
            {/* Texto abaixo */}
            <p className={`text-sm font-medium max-w-20 mx-auto leading-tight ${
              item.active ? 'text-white' : 'text-gray-500'
            }`}>
              {item.title}
            </p>
            
            {/* Checkbox para modo de edição */}
            {isEditing && (
              <div className={`mt-2 w-4 h-4 mx-auto rounded-full border-2 flex items-center justify-center ${
                item.active 
                  ? 'bg-yellow-400 border-yellow-400' 
                  : 'border-gray-500'
              } transition-all duration-200`}>
                {item.active && <Check className="w-3 h-3 text-gray-900" />}
              </div>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <p className="text-sm text-gray-400 mt-6 text-center">
          💡 Clique nos itens para ativar/desativar no seu acesso rápido
        </p>
      )}
    </div>
  );
};
