import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Send, Check } from 'lucide-react';

export function ContactSection() {
  const { t, language } = useLanguage();
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // Don't prevent default - let FormSubmit.co handle it
    // Show thank you modal after a brief delay to simulate submission
    setTimeout(() => {
      setShowThankYou(true);
    }, 100);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {t('contactUs')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>
        <Card className="contact-form shadow-lg">
          <CardContent className="p-8">
            <form 
              action="https://formsubmit.co/Haimlevi274@gmail.com" 
              method="POST" 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden fields for FormSubmit.co configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Submission - בכל מכל כל" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 font-semibold">
                    {t('fullName')}
                  </Label>
                  <Input
                    id="fullName"
                    name="Full Name"
                    type="text"
                    placeholder={language === 'he' ? 'שם מלא' : 'Full Name'}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">
                    {t('phone')}
                  </Label>
                  <Input
                    id="phone"
                    name="Phone Number"
                    type="tel"
                    placeholder={language === 'he' ? 'מספר טלפון' : 'Phone Number'}
                    required
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700 font-semibold">
                  {language === 'he' ? 'פרטים נוספים' : 'Additional Details'}
                </Label>
                <Textarea
                  id="message"
                  name="Message"
                  rows={4}
                  placeholder={language === 'he' ? 'פרטים נוספים אודות הפרויקט...' : 'Additional details about your project...'}
                  className="mt-2"
                />
              </div>
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg"
                  className="font-semibold shadow-lg"
                >
                  <Send className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
                  {t('sendMessage')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Thank You Modal */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <DialogTitle className="text-center">
              {t('thankYou')}
            </DialogTitle>
          </DialogHeader>
          <p className="text-center text-gray-600 mb-6">
            {t('thankYouMessage')}
          </p>
          <Button 
            onClick={() => setShowThankYou(false)}
            className="w-full"
          >
            {t('close')}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
