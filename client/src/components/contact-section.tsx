import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Send, Check } from 'lucide-react';
import type { InsertLead } from '@shared/schema';

export function ContactSection() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<InsertLead>>({
    language: language
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const createLeadMutation = useMutation({
    mutationFn: (data: InsertLead) => apiRequest('POST', '/api/leads', data),
    onSuccess: () => {
      setShowThankYou(true);
      setFormData({ language: language });
      toast({
        title: t('thankYou'),
        description: t('thankYouMessage'),
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.city || !formData.serviceType) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    createLeadMutation.mutate(formData as InsertLead);
  };

  const serviceOptions = [
    { value: 'general', label: t('generalRenovations') },
    { value: 'painting', label: t('painting') },
    { value: 'drywall', label: t('drywall') },
    { value: 'flooring', label: t('flooring') },
    { value: 'bathroom', label: t('bathroomRenovations') },
    { value: 'ac', label: t('airConditioning') },
    { value: 'plumbing', label: t('plumbing') }
  ];

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 font-semibold">
                    {t('fullName')}
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName || ''}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                    type="tel"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="city" className="text-gray-700 font-semibold">
                    {t('city')}
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    value={formData.city || ''}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="serviceType" className="text-gray-700 font-semibold">
                    {t('serviceType')}
                  </Label>
                  <Select 
                    value={formData.serviceType || ''} 
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder={t('chooseService')} />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="notes" className="text-gray-700 font-semibold">
                  {t('additionalNotes')}
                </Label>
                <Textarea
                  id="notes"
                  rows={4}
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t('notesPlaceholder')}
                  className="mt-2"
                />
              </div>
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={createLeadMutation.isPending}
                  className="font-semibold shadow-lg"
                >
                  <Send className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
                  {createLeadMutation.isPending ? 'Sending...' : t('sendMessage')}
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
