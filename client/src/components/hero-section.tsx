import { Button } from '@/components/ui/button'
import { Star, MessageCircle, Mail } from 'lucide-react'
import { useLanguage } from '../hooks/use-language'

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-indigo-900/90"></div>
      <div
        className="absolute inset-0 opacity-20 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3Ccircle cx='37' cy='37' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-indigo-400/30 rounded-full animate-ping"></div>

      {/* Logo section */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/30 animate-logo-glow logo-container">
          <img
            src="/main-logo.png?v=2025"
            alt={t('companyName')}
            className="h-20 w-20 object-contain rounded-lg hero-logo main-logo"
            onError={(e) => {
              e.currentTarget.src = '/logo.png?v=2025'
            }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="mb-12 animate-fade-in">
          {/* Trust indicators */}
          <div className="flex justify-center items-center mb-6 space-x-2 rtl:space-x-reverse">
            <div className="flex text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-blue-100 text-sm font-medium">
              5.0 • 100+ לקוחות מרוצים
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 text-shadow-lg leading-tight">
            {t('companyName')}
          </h1>

          <p className="text-xl lg:text-2xl xl:text-3xl text-blue-100 mb-4 max-w-4xl mx-auto font-medium">
            {t('slogan')}
          </p>

          <p className="text-lg lg:text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
            שיפוצים איכותיים עם התחייבות למצוינות ושירות אישי
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <a
              href="https://wa.me/972524577274"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6 mr-3 rtl:mr-0 rtl:ml-3" />
              {t('whatsappButton')}
            </a>
          </Button>

          <Button
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="bg-white/20 border-white/50 text-white hover:bg-white/30 font-bold text-lg px-8 py-4 rounded-xl backdrop-blur-sm shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-6 h-6 mr-3 rtl:mr-0 rtl:ml-3" />
            {t('contactUs')}
          </Button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-200 text-lg">שנות ניסיון</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
            <div className="text-blue-200 text-lg">פרויקטים הושלמו</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
            <div className="text-blue-200 text-lg">שביעות רצון</div>
          </div>
        </div>
      </div>
    </section>
  )
}
