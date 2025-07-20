
import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

export const WhatsAppSupport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511991897603'; // Formato internacional
    const message = encodeURIComponent('Olá! Vim através da Loja de Direito e gostaria de tirar algumas dúvidas.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse z-50"
        aria-label="Suporte WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      {/* Modal de Suporte */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-scale-in">
            {/* Header do Modal */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white p-6 rounded-t-2xl relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Suporte Loja de Direito</h3>
                  <p className="text-white/90 text-sm">Estamos aqui para ajudar!</p>
                </div>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Entre em contato conosco através do WhatsApp para:
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                  <span>Tirar dúvidas sobre nossos produtos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                  <span>Acompanhar o status do seu pedido</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                  <span>Receber suporte técnico especializado</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                  <span>Solicitar recomendações personalizadas</span>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Fechar
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <Phone className="h-4 w-4" />
                  Conversar Agora
                </button>
              </div>

              {/* Informação do Número */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Número: +55 (11) 99189-7603
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
