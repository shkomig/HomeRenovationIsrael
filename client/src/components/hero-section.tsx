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
    <section id="home" className="hero-gradient text-white py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          {/* Logo */}
          <div className="mb-6 logo-container">
            <img 
              src="/logo.png"
              alt={t('companyName')}
              className="w-24 h-24 lg:w-32 lg:h-32 mx-auto object-contain hero-logo"
              onError={(e) => {
                // Fallback to icon if logo doesn't exist
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white bg-opacity-20 rounded-full mx-auto hidden flex items-center justify-center">
              <Hammer className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
            </div>
          </div>
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
      </div>
    </section>
  );
}
