import { Navigation } from '@/components/navigation'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { GallerySection } from '@/components/gallery-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { SocialSharing } from '@/components/social-sharing'
import { useLanguage } from '@/hooks/use-language'
import { MessageCircle, MapPin } from 'lucide-react'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <WhatsAppFloat />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <SocialSharing />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/main-logo.png?v=2025"
                  alt={t('companyName')}
                  className="h-12 w-12 object-contain rounded-lg ml-3 rtl:ml-0 rtl:mr-3 nav-logo main-logo"
                  onError={(e) => {
                    e.currentTarget.src = '/logo.png?v=2025'
                  }}
                />
                <h3 className="text-xl font-bold">{t('companyName')}</h3>
              </div>
              <p className="text-gray-400 mb-4">{t('footerDescription')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('contactInfo')}</h4>
              <p className="text-gray-400 mb-2 flex items-center">
                <MessageCircle className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                052-4577274
              </p>
              <p className="text-gray-400 mb-2 flex items-center">
                <MapPin className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                {t('israel')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('ourServicesFooter')}</h4>
              <ul className="text-gray-400 space-y-2">
                <li>{t('generalRenovations')}</li>
                <li>{t('paintingDrywall')}</li>
                <li>{t('flooringPlumbing')}</li>
                <li>{t('airConditioning')}</li>
              </ul>

              {/* QR Code in Footer */}
              <div className="mt-6 text-center">
                <h5 className="text-sm font-semibold mb-2 text-gray-300">
                  {t('qrCodeSharing')}
                </h5>
                <div className="w-20 h-20 bg-white rounded-lg mx-auto p-1">
                  <img
                    src="/qr-code.png"
                    alt="QR Code for בכל מכל כל website"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {t('allRightsReserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
