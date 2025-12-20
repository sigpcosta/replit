import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/i18n/LanguageContext";
import { SiWhatsapp } from "react-icons/si";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  options?: ChatOption[];
}

interface ChatOption {
  label: string;
  value: string;
  action?: "whatsapp" | "contact" | "phone" | "navigate";
  url?: string;
}

const WHATSAPP_NUMBER = "+351969519950";
const PHONE_NUMBER = "+351934993770";

interface PageContext {
  welcomePt: string;
  welcomeEn: string;
  service: string;
  relatedOptions: string[];
}

const PAGE_CONTEXTS: Record<string, PageContext> = {
  "/paintball": {
    welcomePt: "Olá! Vejo que está interessado em Paintball. Posso ajudá-lo com informações sobre jogos, preços ou reservas?",
    welcomeEn: "Hello! I see you're interested in Paintball. Can I help you with information about games, prices or bookings?",
    service: "paintball",
    relatedOptions: ["lasertag", "events", "prices", "human"],
  },
  "/animacao": {
    welcomePt: "Bem-vindo à nossa secção de Animação! Temos Paintball, LaserTag, SUP, Caiaques e muito mais. Como posso ajudar?",
    welcomeEn: "Welcome to our Activities section! We have Paintball, LaserTag, SUP, Kayaks and much more. How can I help?",
    service: "activities",
    relatedOptions: ["paintball", "kayak", "tours", "events", "human"],
  },
  "/alojamento": {
    welcomePt: "Olá! Está a ver o nosso alojamento - Casa da Travessa. Posso dar-lhe mais informações sobre disponibilidade ou comodidades?",
    welcomeEn: "Hello! You're viewing our accommodation - Casa da Travessa. Can I give you more information about availability or amenities?",
    service: "accommodation",
    relatedOptions: ["tours", "transfers", "prices", "human"],
  },
  "/tatuagem": {
    welcomePt: "Bem-vindo ao nosso estúdio de Tatuagens e Piercings! Posso ajudá-lo a marcar uma consulta ou dar informações sobre os nossos artistas?",
    welcomeEn: "Welcome to our Tattoo and Piercing studio! Can I help you book an appointment or give information about our artists?",
    service: "tattoo",
    relatedOptions: ["prices", "location", "human"],
  },
  "/eventos": {
    welcomePt: "Olá! Está na nossa secção de Eventos. Organizamos festas de aniversário, despedidas de solteiro e eventos corporativos. Como posso ajudar?",
    welcomeEn: "Hello! You're in our Events section. We organize birthday parties, bachelor parties and corporate events. How can I help?",
    service: "events",
    relatedOptions: ["paintball", "lasertag", "prices", "human"],
  },
  "/imobiliaria": {
    welcomePt: "Bem-vindo à nossa secção de Gestão Imobiliária! Gerimos propriedades na Ilha do Faial. Posso dar-lhe mais informações?",
    welcomeEn: "Welcome to our Property Management section! We manage properties on Faial Island. Can I give you more information?",
    service: "realestate",
    relatedOptions: ["accommodation", "location", "human"],
  },
  "/loja": {
    welcomePt: "Olá! Está na nossa Loja Online. Temos merchandising Azores4Fun e produtos locais. Posso ajudar?",
    welcomeEn: "Hello! You're in our Online Shop. We have Azores4Fun merchandise and local products. Can I help?",
    service: "shop",
    relatedOptions: ["services", "human"],
  },
  "/sobre": {
    welcomePt: "Bem-vindo! Está a conhecer-nos melhor. A Azores4Fun opera desde 2011 na Ilha do Faial. Tem alguma questão?",
    welcomeEn: "Welcome! You're getting to know us better. Azores4Fun has been operating since 2011 on Faial Island. Do you have any questions?",
    service: "about",
    relatedOptions: ["services", "location", "human"],
  },
  "/blog": {
    welcomePt: "Olá! Está no nosso Blog com dicas e informações sobre os Açores. Posso ajudá-lo a encontrar algo específico?",
    welcomeEn: "Hello! You're on our Blog with tips and information about the Azores. Can I help you find something specific?",
    service: "blog",
    relatedOptions: ["services", "location", "human"],
  },
  "/contact": {
    welcomePt: "Olá! Está na nossa página de Contacto. Posso ajudá-lo a entrar em contacto connosco de forma rápida?",
    welcomeEn: "Hello! You're on our Contact page. Can I help you get in touch with us quickly?",
    service: "contact",
    relatedOptions: ["human"],
  },
};

export default function Chatbot() {
  const { language } = useLanguage();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentPath, setCurrentPath] = useState(location);
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
      phoneOption: "Ligar",
      contactFormOption: "Formulário",
      humanResponse: "Claro! Escolha como prefere entrar em contacto connosco:",
      servicesQuestion: "Sobre que serviço gostaria de saber mais?",
      otherServices: "Ver outros serviços",
      paintball: "Paintball",
      lasertag: "LaserTag",
      kayak: "Caiaque & SUP",
      tours: "Tours de Carrinha",
      accommodation: "Alojamento",
      tattoo: "Tatuagens & Piercings",
      events: "Eventos & Festas",
      transfers: "Transfers",
      paintballInfo: "O nosso Paintball oferece uma experiência emocionante com equipamento profissional! Temos campos preparados na Ilha do Faial. Perfeito para grupos, festas de aniversário e team building. Também temos LaserTag, Gelblaster e Nerfs!",
      lasertagInfo: "O LaserTag é perfeito para todas as idades - sem dor, sem tinta! Jogos estratégicos com equipamento profissional. Ideal para festas de aniversário e eventos corporativos.",
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
      bookNow: "Reservar Agora",
      moreInfo: "Mais Informações",
    },
    en: {
      chatTitle: "Azores4Fun Assistant",
      placeholder: "Type your message...",
      send: "Send",
      welcome: "Hello! Welcome to Azores4Fun! How can I help you today?",
      humanOption: "Talk to a human",
      whatsappOption: "WhatsApp",
      phoneOption: "Call",
      contactFormOption: "Form",
      humanResponse: "Of course! Choose how you prefer to contact us:",
      servicesQuestion: "Which service would you like to know more about?",
      otherServices: "See other services",
      paintball: "Paintball",
      lasertag: "LaserTag",
      kayak: "Kayak & SUP",
      tours: "Van Tours",
      accommodation: "Accommodation",
      tattoo: "Tattoos & Piercings",
      events: "Events & Parties",
      transfers: "Transfers",
      paintballInfo: "Our Paintball offers an exciting experience with professional equipment! We have prepared fields on Faial Island. Perfect for groups, birthday parties and team building. We also have LaserTag, Gelblaster and Nerfs!",
      lasertagInfo: "LaserTag is perfect for all ages - no pain, no paint! Strategic games with professional equipment. Ideal for birthday parties and corporate events.",
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
      bookNow: "Book Now",
      moreInfo: "More Info",
    }
  };

  const t = translations[language];

  const getPageContext = (): PageContext | null => {
    const basePath = "/" + location.split("/")[1];
    if (location.startsWith("/blog/")) {
      return PAGE_CONTEXTS["/blog"];
    }
    return PAGE_CONTEXTS[basePath] || null;
  };

  const getWelcomeMessage = (): string => {
    const context = getPageContext();
    if (context) {
      return language === 'pt' ? context.welcomePt : context.welcomeEn;
    }
    return t.welcome;
  };

  const getMainMenuOptions = (): ChatOption[] => [
    { label: t.services, value: "services" },
    { label: t.location, value: "location" },
    { label: t.prices, value: "prices" },
    { label: t.humanOption, value: "human" },
  ];

  const getContextOptions = (): ChatOption[] => {
    const context = getPageContext();
    if (!context) return getMainMenuOptions();

    const optionMap: Record<string, ChatOption> = {
      paintball: { label: t.paintball, value: "paintball" },
      lasertag: { label: t.lasertag, value: "lasertag" },
      kayak: { label: t.kayak, value: "kayak" },
      tours: { label: t.tours, value: "tours" },
      accommodation: { label: t.accommodation, value: "accommodation" },
      tattoo: { label: t.tattoo, value: "tattoo" },
      events: { label: t.events, value: "events" },
      transfers: { label: t.transfers, value: "transfers" },
      services: { label: t.otherServices, value: "services" },
      location: { label: t.location, value: "location" },
      prices: { label: t.prices, value: "prices" },
      human: { label: t.humanOption, value: "human" },
    };

    const options: ChatOption[] = context.relatedOptions
      .filter(opt => optionMap[opt])
      .map(opt => optionMap[opt]);

    if (!options.find(o => o.value === "services")) {
      options.unshift({ label: t.otherServices, value: "services" });
    }

    return options;
  };

  const getServicesOptions = (): ChatOption[] => [
    { label: t.paintball, value: "paintball" },
    { label: t.lasertag, value: "lasertag" },
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
      label: t.phoneOption, 
      value: "phone", 
      action: "phone",
      url: `tel:${PHONE_NUMBER}`
    },
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
    if (location !== currentPath) {
      setCurrentPath(location);
      setMessages([]);
      setIsTyping(false);
      setInputValue("");
    }
  }, [location]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now(),
        text: getWelcomeMessage(),
        isBot: true,
        options: getContextOptions(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language, currentPath]);

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

    if (option.action === "phone" && option.url) {
      window.open(option.url, "_self");
      addBotMessage(t.thankYou, getFollowUpOptions());
      return;
    }

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
        addBotMessage(getWelcomeMessage(), getContextOptions());
        break;
      case "paintball":
        addBotMessage(t.paintballInfo, getFollowUpOptions());
        break;
      case "lasertag":
        addBotMessage(t.lasertagInfo, getFollowUpOptions());
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
      lasertag: ["laser", "lasertag", "tag"],
      kayak: ["kayak", "caiaque", "sup", "paddle", "stand up"],
      tours: ["tour", "tours", "carrinha", "van", "passeio", "passeios"],
      accommodation: ["alojamento", "accommodation", "casa", "house", "hotel", "dormir", "sleep", "stay"],
      tattoo: ["tattoo", "tatuagem", "piercing", "body art"],
      events: ["festa", "party", "aniversário", "birthday", "despedida", "bachelor", "evento", "event"],
      transfers: ["transfer", "transporte", "aeroporto", "airport"],
      location: ["onde", "where", "localização", "location", "morada", "address"],
      prices: ["preço", "price", "custo", "cost", "quanto", "how much", "valor"],
      human: ["humano", "human", "pessoa", "person", "falar", "talk", "contacto", "contact", "ajuda", "help", "whatsapp", "ligar", "call", "telefone", "phone"],
    };

    let matched = false;
    for (const [key, words] of Object.entries(keywords)) {
      if (words.some(word => userMessage.includes(word))) {
        matched = true;
        switch (key) {
          case "paintball":
            addBotMessage(t.paintballInfo, getFollowUpOptions());
            break;
          case "lasertag":
            addBotMessage(t.lasertagInfo, getFollowUpOptions());
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
            className="fixed bottom-20 !right-4 !left-auto w-[calc(100%-2rem)] md:w-96 h-[500px] max-h-[70vh] bg-card border rounded-xl shadow-2xl flex flex-col z-[9999] overflow-hidden"
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
                                {option.action === "phone" && <PhoneCall className="w-3 h-3 mr-1" />}
                                {option.action === "whatsapp" && <SiWhatsapp className="w-3 h-3 mr-1" />}
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
        className="fixed bottom-4 !right-4 !left-auto w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center z-[9999] hover-elevate"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-toggle-chatbot"
        aria-label="Chat"
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
