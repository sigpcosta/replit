import { createContext, useContext, useState, type ReactNode } from "react";

interface ChatbotContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | null>(null);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen(prev => !prev);

  return (
    <ChatbotContext.Provider value={{ isOpen, setIsOpen, openChat, closeChat, toggleChat }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error("useChatbot must be used within a ChatbotProvider");
  }
  return context;
}
