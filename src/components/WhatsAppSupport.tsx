
import { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';

export const WhatsAppSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '5511991897603';
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Preciso de suporte da Loja de Direito.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Modal/Card de Suporte */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Card de Suporte */}
          <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Suporte Loja de Direito</h3>
                  <p className="text-sm text-white/80">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Como podemos ajudar?
                </h4>
                <p className="text-gray-600 text-sm">
                  Nossa equipe está pronta para te atender!
                </p>
              </div>

              {/* Lista de Serviços */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                  <span className="text-blue-500">❓</span>
                  <span className="text-sm text-gray-700">Tirar dúvidas sobre produtos</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                  <span className="text-orange-500">📦</span>
                  <span className="text-sm text-gray-700">Acompanhar status do pedido</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                  <span className="text-green-500">🛠️</span>
                  <span className="text-sm text-gray-700">Suporte geral e orientações</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                  <span className="text-purple-500">💡</span>
                  <span className="text-sm text-gray-700">Recomendações personalizadas</span>
                </div>
              </div>

              {/* Botão WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
                <ExternalLink className="h-4 w-4" />
              </button>

              {/* Horário de Atendimento */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  ⏰ Atendimento: Segunda a Sexta, 8h às 18h
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
