import { useState, useEffect } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-effect shadow-lg py-2'
            : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse logo-container">
              <div className="relative">
                <img
                  src="/new-logo.png"
                  alt={t('companyName')}
                  className={`object-contain nav-logo transition-all duration-300 ${
                    isScrolled ? 'w-10 h-10' : 'w-12 h-12'
                  }`}
                  onError={(e) => {
                    e.currentTarget.src = '/logo.png'
                  }}
                />
              </div>
              <div
                className={`font-bold text-primary transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}
              >
                <span className="text-shadow">{t('companyName')}</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {[
                { id: 'home', label: t('home') },
                { id: 'services', label: t('services') },
                { id: 'gallery', label: t('gallery') },
                { id: 'testimonials', label: t('testimonials') },
                { id: 'contact', label: t('contact') },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link text-gray-700 hover:text-primary font-medium tracking-wide transition-all duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 mobile-menu-backdrop"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 rtl:right-auto rtl:left-0 w-80 h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col p-6 pt-20">
              <div className="space-y-4">
                {[
                  { id: 'home', label: t('home') },
                  { id: 'services', label: t('services') },
                  { id: 'gallery', label: t('gallery') },
                  { id: 'testimonials', label: t('testimonials') },
                  { id: 'contact', label: t('contact') },
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-right rtl:text-left py-4 px-2 text-lg font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 animate-slide-in-right`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer for fixed nav */}
      <div className="h-20"></div>
    </>
  )
}
