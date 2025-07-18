
import { TrendingUp, Clock, Trophy, Target } from 'lucide-react';

export const QuickStatsBar = () => {
  const stats = [
    { 
      icon: Clock, 
      value: '2h 30m', 
      label: 'Hoje', 
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    { 
      icon: TrendingUp, 
      value: '7 dias', 
      label: 'Sequência', 
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    { 
      icon: Trophy, 
      value: '850', 
      label: 'Pontos', 
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    },
    { 
      icon: Target, 
      value: '85%', 
      label: 'Meta', 
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ];

  return (
    <div className="px-4 pb-4">
      <div className="grid grid-cols-4 gap-3">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-3 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className={`w-8 h-8 rounded-xl ${stat.bgColor} flex items-center justify-center mb-2 mx-auto`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
            <div className="text-center">
              <p className="font-bold text-sm text-foreground leading-tight">{stat.value}</p>
              <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
