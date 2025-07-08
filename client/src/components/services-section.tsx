import { useLanguage } from '@/hooks/use-language';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Hammer, 
  Paintbrush, 
  Layers, 
  Grid3x3,
  Bath,
  Snowflake,
  Wrench
} from 'lucide-react';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Hammer className="w-8 h-8 text-white" />,
      title: t('generalRenovations'),
      description: t('generalRenovationsDesc')
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-white" />,
      title: t('painting'),
      description: t('paintingDesc')
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: t('drywall'),
      description: t('drywallDesc')
    },
    {
      icon: <Grid3x3 className="w-8 h-8 text-white" />,
      title: t('flooring'),
      description: t('flooringDesc')
    },
    {
      icon: <Bath className="w-8 h-8 text-white" />,
      title: t('bathroomRenovations'),
      description: t('bathroomRenovationsDesc')
    },
    {
      icon: <Snowflake className="w-8 h-8 text-white" />,
      title: t('airConditioning'),
      description: t('airConditioningDesc')
    },
    {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: t('plumbing'),
      description: t('plumbingDesc')
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {t('ourServices')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card bg-gray-50 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
