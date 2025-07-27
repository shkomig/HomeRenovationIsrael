import { useLanguage } from '@/hooks/use-language'
import { Button } from '@/components/ui/button'
import { MessageCircle, Mail, Hammer, Star } from 'lucide-react'

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="hero-gradient text-white py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Logo positioned at top-right with enhanced styling */}
      <div className="absolute top-6 right-6 lg:top-8 lg:right-8 rtl:right-auto rtl:left-6 lg:rtl:left-8 animate-fade-in">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
          <img
            src="/new-logo.png"
            alt={t('companyName')}
            className="w-16 h-16 lg:w-20 lg:h-20 object-contain hero-logo animate-logo-glow"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const fallback = e.currentTarget.nextElementSibling as HTMLElement
              if (fallback) fallback.classList.remove('hidden')
            }}
          />
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white bg-opacity-20 rounded-full hidden items-center justify-center backdrop-blur-sm">
            <Hammer className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
          </div>
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
            <span className="block animate-slide-in-right">
              {t('companyName')}
            </span>
          </h1>

          <p className="text-xl lg:text-2xl xl:text-3xl text-blue-100 mb-4 max-w-4xl mx-auto font-medium animate-slide-in-left">
            {t('slogan')}
          </p>

          <p className="text-lg lg:text-xl text-blue-200 mb-12 max-w-3xl mx-auto animate-fade-in">
            שיפוצים איכותיים עם התחייבות למצוינות ושירות אישי
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
          <Button
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
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

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
