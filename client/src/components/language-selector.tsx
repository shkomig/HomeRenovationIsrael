import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 left-4 z-50 rtl:left-auto rtl:right-4">
      <div className="flex bg-white rounded-full shadow-lg overflow-hidden">
        <Button
          variant={language === 'he' ? 'default' : 'ghost'}
          size="sm"
          className="px-4 py-2 text-sm font-semibold transition-all rounded-none"
          onClick={() => setLanguage('he')}
        >
          🇮🇱 עברית
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          className="px-4 py-2 text-sm font-semibold transition-all rounded-none"
          onClick={() => setLanguage('en')}
        >
          🇺🇸 English
        </Button>
      </div>
    </div>
  );
}
