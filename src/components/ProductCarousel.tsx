
import { useProdutos } from '@/hooks/useProdutos';
import { useEffect, useState } from 'react';

export const ProductCarousel = () => {
  const { data: produtos, isLoading } = useProdutos();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    if (!produtos || produtos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % produtos.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [produtos]);

  if (isLoading) {
    return (
      <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center animate-pulse">
        <p className="text-sm text-gray-500">Carregando produtos...</p>
      </div>
    );
  }

  if (!produtos || produtos.length === 0) {
    return (
      <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-sm text-gray-500">Nenhum produto encontrado</p>
      </div>
    );
  }

  // Duplicar produtos para efeito infinito
  const extendedProdutos = [...produtos, ...produtos];

  return (
    <div className="w-full overflow-hidden rounded-lg bg-gradient-to-r from-store-primary/5 to-premium-primary/5 p-4">
      <h3 className="text-sm font-medium text-center mb-3 text-gray-700">
        📚 Nossos Produtos em Destaque
      </h3>
      <div className="relative h-24">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / 4}%)`,
            width: `${extendedProdutos.length * 25}%`
          }}
        >
          {extendedProdutos.map((produto, index) => (
            <div
              key={`${produto.id}-${index}`}
              className="flex-shrink-0 px-1"
              style={{ width: `${100 / extendedProdutos.length}%` }}
            >
              <div className="relative group">
                <img
                  src={produto.produtos}
                  alt={produto.nome}
                  className="w-full h-20 object-cover rounded-md shadow-sm group-hover:shadow-md transition-shadow duration-200"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-md flex items-center justify-center">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center px-1">
                    {produto.nome}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2 space-x-1">
        {produtos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex % produtos.length
                ? 'bg-store-primary'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
