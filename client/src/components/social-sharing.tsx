import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { MessageCircle, Facebook, Link, QrCode, Check } from 'lucide-react';

export function SocialSharing() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const currentUrl = window.location.href;
  const shareText = 'בכל מכל כל - שיפוצים ובנייה מקצועית בישראל';

  const shareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}%20${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank');
  };

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">
          {t('shareUs')}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={shareWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
            {t('shareWhatsApp')}
          </Button>
          <Button
            onClick={shareFacebook}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            <Facebook className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
            {t('shareFacebook')}
          </Button>
          <Button
            onClick={copyLink}
            className="bg-gray-600 hover:bg-gray-700 text-white"
            size="lg"
          >
            {copied ? (
              <Check className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
            ) : (
              <Link className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
            )}
            {copied ? t('copied') : t('copyLink')}
          </Button>
        </div>
        <div className="bg-white rounded-xl p-8 inline-block">
          <h3 className="text-gray-800 font-semibold mb-4">
            {t('qrCodeSharing')}
          </h3>
          <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
            <QrCode className="w-16 h-16 text-gray-400" />
          </div>
          <p className="text-gray-600 text-sm mt-4">
            {t('scanForAccess')}
          </p>
        </div>
      </div>
    </section>
  );
}
