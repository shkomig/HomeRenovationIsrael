import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { LanguageSelector } from './language-selector'
import { useLanguage } from '../hooks/use-language'

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="bg-white rounded-full p-1 group-hover:scale-110 transition-transform duration-300 shadow-lg logo-container">
              <img
                src="/main-logo.png?v=2025"
                alt={t('companyName')}
                className="h-10 w-10 object-contain rounded-full nav-logo main-logo"
                onError={(e) => {
                  e.currentTarget.src = '/logo.png?v=2025'
                }}
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              {t('companyName')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button
              onClick={() => scrollToSection('services')}
              className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {t('services')}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {t('gallery')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {t('testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {t('contact')}
            </button>

            <LanguageSelector />

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a
                href="tel:+972524577274"
                className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">052-457-7274</span>
              </a>

              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('getQuote')}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3 rtl:space-x-reverse">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200/20 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-right rtl:text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
            >
              {t('services')}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-right rtl:text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
            >
              {t('gallery')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-right rtl:text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
            >
              {t('testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-right rtl:text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
            >
              {t('contact')}
            </button>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <a
                href="tel:+972524577274"
                className="flex items-center justify-end rtl:justify-start space-x-2 rtl:space-x-reverse py-3 px-4 text-gray-600 hover:text-blue-600 rounded-lg transition-colors duration-200"
              >
                <span className="font-medium">052-457-7274</span>
                <Phone className="w-4 h-4" />
              </a>

              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('getQuote')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
