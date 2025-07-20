
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface Produto {
  id: string;
  nome: string;
  produtos: string; // URL da imagem
  preco?: number;
  descricao?: string;
  categoria?: string;
}

export const useProdutos = () => {
  return useQuery({
    queryKey: ['produtos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erro ao buscar produtos:', error);
        throw error;
      }

      return data as Produto[];
    },
  });
};
