import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/i18n/LanguageContext";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  options?: ChatOption[];
}

interface ChatOption {
  label: string;
  value: string;
  action?: "whatsapp" | "contact" | "navigate";
  url?: string;
}

const WHATSAPP_NUMBER = "+351969519950";

export default function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const translations = {
    pt: {
      chatTitle: "Assistente Azores4Fun",
      placeholder: "Escreva a sua mensagem...",
      send: "Enviar",
      welcome: "Olá! Bem-vindo à Azores4Fun! Como posso ajudá-lo hoje?",
      humanOption: "Falar com um humano",
      whatsappOption: "WhatsApp",
      contactFormOption: "Formulário de Contacto",
      humanResponse: "Claro! Escolha como prefere entrar em contacto connosco:",
      servicesQuestion: "Sobre que serviço gostaria de saber mais?",
      paintball: "Paintball",
      kayak: "Caiaque & SUP",
      tours: "Tours de Carrinha",
      accommodation: "Alojamento",
      tattoo: "Tatuagens & Piercings",
      events: "Eventos & Festas",
      transfers: "Transfers",
      paintballInfo: "O nosso Paintball oferece uma experiência emocionante com equipamento profissional! Temos campos preparados na Ilha do Faial. Perfeito para grupos, festas de aniversário e team building. Gostaria de saber mais ou reservar?",
      kayakInfo: "Oferecemos aluguer de SUP e Caiaques para explorar as águas cristalinas dos Açores. Disponível na Marina da Horta e Porto Pim. Equipamento de qualidade e briefing de segurança incluído!",
      toursInfo: "Os nossos Tours de Carrinha Elétrica levam-no pelos locais mais bonitos da Ilha do Faial: Caldeira, Capelinhos, Porto Pim e muito mais. Tours personalizados disponíveis!",
      accommodationInfo: "A Casa da Travessa oferece alojamento único na Horta com espírito náutico. Localização central, totalmente equipada, perfeita para explorar a ilha!",
      tattooInfo: "O nosso estúdio de tatuagens e piercings na Horta oferece artistas experientes, designs personalizados e máxima higiene. Marque a sua consulta!",
      eventsInfo: "Organizamos festas de aniversário, despedidas de solteiro(a) e eventos corporativos com atividades como Paintball, LaserTag e muito mais!",
      transfersInfo: "Oferecemos transfers em carrinha 100% elétrica. Aeroporto, Caldeira, Capelinhos - transporte sustentável e confortável!",
      anythingElse: "Posso ajudar com mais alguma coisa?",
      thankYou: "Obrigado pelo seu interesse! Não hesite em contactar-nos para mais informações.",
      notUnderstood: "Desculpe, não entendi completamente. Posso ajudá-lo com informações sobre os nossos serviços ou conectá-lo com a nossa equipa.",
      mainMenu: "Menu Principal",
      services: "Nossos Serviços",
      location: "Localização",
      prices: "Preços",
      locationInfo: "Estamos localizados na Horta, Ilha do Faial, Açores, Portugal. A ilha azul no meio do Atlântico!",
      pricesInfo: "Os nossos preços variam conforme a atividade e tamanho do grupo. Para um orçamento personalizado, entre em contacto connosco!",
    },
    en: {
      chatTitle: "Azores4Fun Assistant",
      placeholder: "Type your message...",
      send: "Send",
      welcome: "Hello! Welcome to Azores4Fun! How can I help you today?",
      humanOption: "Talk to a human",
      whatsappOption: "WhatsApp",
      contactFormOption: "Contact Form",
      humanResponse: "Of course! Choose how you prefer to contact us:",
      servicesQuestion: "Which service would you like to know more about?",
      paintball: "Paintball",
      kayak: "Kayak & SUP",
      tours: "Van Tours",
      accommodation: "Accommodation",
      tattoo: "Tattoos & Piercings",
      events: "Events & Parties",
      transfers: "Transfers",
      paintballInfo: "Our Paintball offers an exciting experience with professional equipment! We have prepared fields on Faial Island. Perfect for groups, birthday parties and team building. Would you like to know more or book?",
      kayakInfo: "We offer SUP and Kayak rental to explore the crystal clear waters of the Azores. Available at Horta Marina and Porto Pim. Quality equipment and safety briefing included!",
      toursInfo: "Our Electric Van Tours take you to the most beautiful spots on Faial Island: Caldeira, Capelinhos, Porto Pim and much more. Custom tours available!",
      accommodationInfo: "Casa da Travessa offers unique accommodation in Horta with nautical spirit. Central location, fully equipped, perfect for exploring the island!",
      tattooInfo: "Our tattoo and piercing studio in Horta offers experienced artists, personalized designs and maximum hygiene. Book your appointment!",
      eventsInfo: "We organize birthday parties, bachelor/bachelorette parties and corporate events with activities like Paintball, LaserTag and more!",
      transfersInfo: "We offer transfers in 100% electric van. Airport, Caldeira, Capelinhos - sustainable and comfortable transport!",
      anythingElse: "Can I help you with anything else?",
      thankYou: "Thank you for your interest! Don't hesitate to contact us for more information.",
      notUnderstood: "Sorry, I didn't fully understand. I can help you with information about our services or connect you with our team.",
      mainMenu: "Main Menu",
      services: "Our Services",
      location: "Location",
      prices: "Prices",
      locationInfo: "We are located in Horta, Faial Island, Azores, Portugal. The blue island in the middle of the Atlantic!",
      pricesInfo: "Our prices vary according to the activity and group size. For a personalized quote, get in touch with us!",
    }
  };

  const t = translations[language];

  const getMainMenuOptions = (): ChatOption[] => [
    { label: t.services, value: "services" },
    { label: t.location, value: "location" },
    { label: t.prices, value: "prices" },
    { label: t.humanOption, value: "human" },
  ];

  const getServicesOptions = (): ChatOption[] => [
    { label: t.paintball, value: "paintball" },
    { label: t.kayak, value: "kayak" },
    { label: t.tours, value: "tours" },
    { label: t.accommodation, value: "accommodation" },
    { label: t.tattoo, value: "tattoo" },
    { label: t.events, value: "events" },
    { label: t.transfers, value: "transfers" },
    { label: t.humanOption, value: "human" },
  ];

  const getHumanContactOptions = (): ChatOption[] => [
    { 
      label: t.whatsappOption, 
      value: "whatsapp", 
      action: "whatsapp",
      url: `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`
    },
    { 
      label: t.contactFormOption, 
      value: "contact",
      action: "contact",
      url: "/contact"
    },
  ];

  const getFollowUpOptions = (): ChatOption[] => [
    { label: t.mainMenu, value: "menu" },
    { label: t.humanOption, value: "human" },
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now(),
        text: t.welcome,
        isBot: true,
        options: getMainMenuOptions(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addBotMessage = (text: string, options?: ChatOption[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text,
        isBot: true,
        options,
      }]);
      setIsTyping(false);
    }, 800);
  };

  const handleOptionClick = (option: ChatOption) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: option.label,
      isBot: false,
    }]);

    if (option.action === "whatsapp" && option.url) {
      window.open(option.url, "_blank");
      addBotMessage(t.thankYou, getFollowUpOptions());
      return;
    }

    if (option.action === "contact" && option.url) {
      window.location.href = option.url;
      return;
    }

    switch (option.value) {
      case "services":
        addBotMessage(t.servicesQuestion, getServicesOptions());
        break;
      case "human":
        addBotMessage(t.humanResponse, getHumanContactOptions());
        break;
      case "menu":
        addBotMessage(t.welcome, getMainMenuOptions());
        break;
      case "paintball":
        addBotMessage(t.paintballInfo, getFollowUpOptions());
        break;
      case "kayak":
        addBotMessage(t.kayakInfo, getFollowUpOptions());
        break;
      case "tours":
        addBotMessage(t.toursInfo, getFollowUpOptions());
        break;
      case "accommodation":
        addBotMessage(t.accommodationInfo, getFollowUpOptions());
        break;
      case "tattoo":
        addBotMessage(t.tattooInfo, getFollowUpOptions());
        break;
      case "events":
        addBotMessage(t.eventsInfo, getFollowUpOptions());
        break;
      case "transfers":
        addBotMessage(t.transfersInfo, getFollowUpOptions());
        break;
      case "location":
        addBotMessage(t.locationInfo, getFollowUpOptions());
        break;
      case "prices":
        addBotMessage(t.pricesInfo, getFollowUpOptions());
        break;
      default:
        addBotMessage(t.notUnderstood, getMainMenuOptions());
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim().toLowerCase();
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: inputValue.trim(),
      isBot: false,
    }]);
    setInputValue("");

    const keywords = {
      paintball: ["paintball", "paint", "bolas", "tinta"],
      kayak: ["kayak", "caiaque", "sup", "paddle", "stand up"],
      tours: ["tour", "tours", "carrinha", "van", "passeio", "passeios"],
      accommodation: ["alojamento", "accommodation", "casa", "house", "hotel", "dormir", "sleep", "stay"],
      tattoo: ["tattoo", "tatuagem", "piercing", "body art"],
      events: ["festa", "party", "aniversário", "birthday", "despedida", "bachelor", "evento", "event"],
      transfers: ["transfer", "transporte", "aeroporto", "airport"],
      location: ["onde", "where", "localização", "location", "morada", "address"],
      prices: ["preço", "price", "custo", "cost", "quanto", "how much", "valor"],
      human: ["humano", "human", "pessoa", "person", "falar", "talk", "contacto", "contact", "ajuda", "help", "whatsapp"],
    };

    let matched = false;
    for (const [key, words] of Object.entries(keywords)) {
      if (words.some(word => userMessage.includes(word))) {
        matched = true;
        switch (key) {
          case "paintball":
            addBotMessage(t.paintballInfo, getFollowUpOptions());
            break;
          case "kayak":
            addBotMessage(t.kayakInfo, getFollowUpOptions());
            break;
          case "tours":
            addBotMessage(t.toursInfo, getFollowUpOptions());
            break;
          case "accommodation":
            addBotMessage(t.accommodationInfo, getFollowUpOptions());
            break;
          case "tattoo":
            addBotMessage(t.tattooInfo, getFollowUpOptions());
            break;
          case "events":
            addBotMessage(t.eventsInfo, getFollowUpOptions());
            break;
          case "transfers":
            addBotMessage(t.transfersInfo, getFollowUpOptions());
            break;
          case "location":
            addBotMessage(t.locationInfo, getFollowUpOptions());
            break;
          case "prices":
            addBotMessage(t.pricesInfo, getFollowUpOptions());
            break;
          case "human":
            addBotMessage(t.humanResponse, getHumanContactOptions());
            break;
        }
        break;
      }
    }

    if (!matched) {
      addBotMessage(t.notUnderstood, getMainMenuOptions());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 md:right-6 w-[calc(100%-2rem)] md:w-96 h-[500px] max-h-[70vh] bg-card border rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden"
            data-testid="chatbot-window"
          >
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6" />
                <span className="font-semibold">{t.chatTitle}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary/80"
                data-testid="button-close-chat"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`flex gap-2 max-w-[85%] ${message.isBot ? "" : "flex-row-reverse"}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isBot ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                      }`}>
                        {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <div className="space-y-2">
                        <div className={`p-3 rounded-lg ${
                          message.isBot 
                            ? "bg-muted text-foreground" 
                            : "bg-primary text-primary-foreground"
                        }`}>
                          <p className="text-sm">{message.text}</p>
                        </div>
                        {message.options && (
                          <div className="flex flex-wrap gap-2">
                            {message.options.map((option, idx) => (
                              <Button
                                key={idx}
                                variant="outline"
                                size="sm"
                                onClick={() => handleOptionClick(option)}
                                className="text-xs hover-elevate"
                                data-testid={`button-option-${option.value}`}
                              >
                                {option.action === "whatsapp" && <Phone className="w-3 h-3 mr-1" />}
                                {option.action === "contact" && <Mail className="w-3 h-3 mr-1" />}
                                {option.label}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t.placeholder}
                  className="flex-1"
                  data-testid="input-chat-message"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="icon"
                  disabled={!inputValue.trim()}
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center z-50 hover-elevate"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-toggle-chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
