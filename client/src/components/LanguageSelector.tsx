import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const PortugalFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm">
    <rect width="20" height="14" fill="#060" />
    <rect width="8" height="14" fill="#F00" />
    <circle cx="8" cy="7" r="3.5" fill="#FFD700" stroke="#000" strokeWidth="0.3" />
  </svg>
);

const UKFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm">
    <rect width="20" height="14" fill="#012169" />
    <path d="M0 0L20 14M20 0L0 14" stroke="#FFF" strokeWidth="1.8" />
    <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1" />
    <path d="M8 0H12V14H8V0ZM0 4.5H20V9.5H0V4.5Z" fill="#FFF" />
    <path d="M9 0H11V14H9V0ZM0 5.5H20V8.5H0V5.5Z" fill="#C8102E" />
  </svg>
);

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-md border p-1">
      <Button
        variant={language === 'pt' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('pt')}
        className="h-8 px-3 gap-2"
        data-testid="button-language-pt"
      >
        <PortugalFlag />
        <span className="text-xs font-medium">PT</span>
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-3 gap-2"
        data-testid="button-language-en"
      >
        <UKFlag />
        <span className="text-xs font-medium">EN</span>
      </Button>
    </div>
  );
}
