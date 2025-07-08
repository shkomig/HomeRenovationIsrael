import { useLanguage } from '@/hooks/use-language';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonial1'),
      author: "Aaa A.",
      initial: "A"
    },
    {
      text: t('testimonial2'),
      author: "חן ד.",
      initial: "ח"
    },
    {
      text: t('testimonial3'),
      author: "רונית מ.",
      initial: "ר"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {t('customerTestimonials')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonialsDescription')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card shadow-lg">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <Quote className="w-8 h-8" />
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initial}
                  </div>
                  <div className="mr-4 rtl:mr-0 rtl:ml-4">
                    <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">
                      {t('satisfiedCustomer')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
