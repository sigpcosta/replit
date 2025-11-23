import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

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
        <span className="text-lg leading-none" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif' }}>🇵🇹</span>
        <span className="text-xs font-medium">PT</span>
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-3 gap-2"
        data-testid="button-language-en"
      >
        <span className="text-lg leading-none" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif' }}>🇬🇧</span>
        <span className="text-xs font-medium">EN</span>
      </Button>
    </div>
  );
}
