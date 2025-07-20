
import { useProdutos } from '@/hooks/useProdutos';
import { useEffect, useState } from 'react';

export const ProductCarousel = () => {
  const { data: produtos, isLoading } = useProdutos();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll mais lento e suave
  useEffect(() => {
    if (!produtos || produtos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % produtos.length);
    }, 4000); // 4 segundos para movimento mais lento

    return () => clearInterval(interval);
  }, [produtos]);

  if (isLoading) {
    return (
      <div className="w-full h-48 bg-gradient-to-r from-store-primary/10 to-premium-primary/10 rounded-2xl flex items-center justify-center animate-pulse shadow-lg">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-store-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-sm text-muted-foreground">Carregando produtos incríveis...</p>
        </div>
      </div>
    );
  }

  if (!produtos || produtos.length === 0) {
    return (
      <div className="w-full h-48 bg-gradient-to-r from-store-primary/10 to-premium-primary/10 rounded-2xl flex items-center justify-center shadow-lg">
        <p className="text-sm text-muted-foreground">Produtos em breve...</p>
      </div>
    );
  }

  // Duplicar produtos para efeito infinito mais suave
  const extendedProdutos = [...produtos, ...produtos, ...produtos];

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-gradient-to-r from-store-primary/5 to-premium-primary/5 shadow-2xl border">
      {/* Título do Carrossel */}
      <div className="text-center py-6 bg-gradient-to-r from-store-primary/10 to-premium-primary/10">
        <h2 className="text-2xl font-bold gradient-text-legal mb-2">
          📚 Nossos Produtos em Destaque
        </h2>
        <p className="text-sm text-muted-foreground">
          Produtos selecionados especialmente para seus estudos
        </p>
      </div>
      
      {/* Carrossel de Imagens */}
      <div className="relative h-32 overflow-hidden">
        <div 
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{
            transform: `translateX(-${(currentIndex * 100) / 5}%)`,
            width: `${extendedProdutos.length * 20}%`
          }}
        >
          {extendedProdutos.map((produto, index) => (
            <div
              key={`${produto.id}-${index}`}
              className="flex-shrink-0 px-2 h-full"
              style={{ width: `${100 / extendedProdutos.length}%` }}
            >
              <div className="relative group h-full">
                <img
                  src={produto.produtos}
                  alt={`Produto ${produto.id}`}
                  className="w-full h-full object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-sm font-bold">Produto #{produto.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicadores */}
      <div className="flex justify-center py-4 space-x-2">
        {produtos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex % produtos.length
                ? 'bg-store-primary shadow-lg scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
