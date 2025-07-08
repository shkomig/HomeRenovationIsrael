import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Hammer } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white py-20 lg:py-32 relative">
      {/* Logo positioned at top-right */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8 rtl:right-auto rtl:left-4 lg:rtl:left-8">
        <img 
          src="/logo.png"
          alt={t('companyName')}
          className="w-16 h-16 lg:w-20 lg:h-20 object-contain hero-logo"
          onError={(e) => {
            // Fallback to icon if logo doesn't exist
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white bg-opacity-20 rounded-full hidden flex items-center justify-center">
          <Hammer className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            {t('companyName')}
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('slogan')}
          </p>
        </div>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center rtl:sm:space-x-reverse">
          <Button
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg"
          >
            <a href="https://wa.me/972524577274" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
              {t('contactWhatsApp')}
            </a>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 font-semibold shadow-lg"
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
            {t('leaveDetails')}
          </Button>
        </div>
        
        {/* Midrag Reviews Link */}
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-primary font-semibold shadow-lg backdrop-blur-sm"
          >
            <a href="https://midrag.co.il/SpCard/Sp/85717?sectorId=11&listId=2" target="_blank" rel="noopener noreferrer">
              <Hammer className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
              {t('midragReviews')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
