import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! 👋 Eu sou a ⚡EVA da ImportCar. Como posso te ajudar hoje?" },
  ]);

  const options = [
    {
      id: 1,
      question: "📦 Ver catálogo de peças",
      answer: "Você pode acessar nosso catálogo completo aqui: 👉 https://importcar.com.br/catalogo",
    },
    {
      id: 2,
      question: "🚚 Acompanhar meu pedido",
      answer: "Para rastrear seu pedido, acesse: 👉 https://importcar.com.br/rastrear",
    },
    {
      id: 3,
      question: "🧾 Garantia e devoluções",
      answer:
        "Todos os produtos possuem 12 meses de garantia. Confira a política completa: 👉 https://importcar.com.br/garantia",
    },
    {
      id: 4,
      question: "💬 Falar com um atendente",
      answer: "Claro! Fale direto com nossa equipe pelo WhatsApp: 👉 https://wa.me/550000000000",
    },
  ];

  const handleOptionClick = (option) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: option.question },
      { from: "bot", text: option.answer },
    ]);
  };

  const handleUserInput = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const text = e.target.value.trim();
      setMessages((prev) => [
        ...prev,
        { from: "user", text },
        {
          from: "bot",
          text: "Desculpe, não entendi muito bem 😅. Vou te encaminhar para um de nossos atendentes 👉 https://wa.me/550000000000",
        },
      ]);
      e.target.value = "";
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>

      {/* Janela do Chat com animação */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="fixed bottom-20 right-6 w-80 h-[420px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Cabeçalho */}
            <div className="bg-red-600 text-white p-3 font-semibold flex justify-between items-center">
              <span>⚡ EVA da ImportCar</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Opções de Perguntas */}
            <div className="border-t border-gray-200 p-2 space-y-2">
              <p className="text-xs text-gray-500 mb-1">Perguntas rápidas:</p>
              <div className="grid grid-cols-1 gap-1">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionClick(opt)}
                    className="text-left text-sm bg-red-50 hover:bg-red-100 text-red-700 p-2 rounded-lg transition"
                  >
                    {opt.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Área de mensagens */}
            <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-xl max-w-[80%] ${msg.from === "bot"
                      ? "bg-gray-200 text-gray-800 self-start"
                      : "bg-red-600 text-white self-end ml-auto"
                    }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Entrada livre */}
            <input
              type="text"
              onKeyDown={handleUserInput}
              placeholder="Digite sua pergunta..."
              className="border-t border-gray-200 p-2 text-black outline-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
