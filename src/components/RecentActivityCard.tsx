
import { Clock, Eye, BookOpen, Headphones } from 'lucide-react';

export const RecentActivityCard = () => {
  const activities = [
    {
      icon: BookOpen,
      title: 'Direito Civil - Contratos',
      subtitle: 'Continuou leitura',
      time: '2 min atrás',
      progress: 75
    },
    {
      icon: Headphones,
      title: 'Áudio-aula: Processo Civil',
      subtitle: 'Ouviu 15 min',
      time: '1 hora atrás',
      progress: 45
    },
    {
      icon: Eye,
      title: 'Vade Mecum - Art. 927',
      subtitle: 'Consultou artigo',
      time: '3 horas atrás',
      progress: 100
    }
  ];

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 mx-4 mb-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
          <Clock className="h-3 w-3 text-primary" />
        </div>
        <h3 className="font-semibold text-sm text-foreground">Atividade Recente</h3>
      </div>
      
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-all duration-200 active:scale-98"
          >
            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <activity.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-foreground truncate leading-tight">
                {activity.title}
              </p>
              <p className="text-xs text-muted-foreground leading-tight">
                {activity.subtitle} • {activity.time}
              </p>
              
              {/* Progress bar */}
              <div className="mt-1 w-full bg-muted rounded-full h-1">
                <div 
                  className="bg-primary h-1 rounded-full transition-all duration-300"
                  style={{ width: `${activity.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-3 text-xs text-primary font-medium py-2 hover:bg-primary/5 rounded-lg transition-colors">
        Ver toda atividade
      </button>
    </div>
  );
};
