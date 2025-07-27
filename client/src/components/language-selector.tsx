import { useLanguage } from '@/hooks/use-language'
import { Button } from '@/components/ui/button'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-selector">
      <div className="flex bg-white rounded-full shadow-xl overflow-hidden border border-gray-200">
        <Button
          variant={language === 'he' ? 'default' : 'ghost'}
          size="sm"
          className={`px-6 py-3 text-sm font-bold transition-all duration-300 rounded-l-full border-0 ${
            language === 'he'
              ? 'bg-primary text-white shadow-lg'
              : 'bg-transparent text-gray-600 hover:bg-primary/10 hover:text-primary'
          }`}
          onClick={() => setLanguage('he')}
        >
          🇮🇱 עברית
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          className={`px-6 py-3 text-sm font-bold transition-all duration-300 rounded-r-full border-0 ${
            language === 'en'
              ? 'bg-primary text-white shadow-lg'
              : 'bg-transparent text-gray-600 hover:bg-primary/10 hover:text-primary'
          }`}
          onClick={() => setLanguage('en')}
        >
          🇺🇸 English
        </Button>
      </div>
    </div>
  )
}
