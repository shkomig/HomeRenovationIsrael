import { useLanguage } from '@/hooks/use-language';

export function GallerySection() {
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: "/img1.jpg",
      alt: "Bathroom renovation project 1"
    },
    {
      src: "/img2.jpg",
      alt: "Bathroom renovation project 2"
    },
    {
      src: "/img3.jpg",
      alt: "Bathroom renovation project 3"
    },
    {
      src: "/img4.jpg",
      alt: "Kitchen renovation project"
    },
    {
      src: "/img5.jpg",
      alt: "Construction project 1"
    },
    {
      src: "/img6.jpg",
      alt: "Construction project 2"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {t('workGallery')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('galleryDescription')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="simple-gallery-item cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
