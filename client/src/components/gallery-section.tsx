import { useLanguage } from '@/hooks/use-language'

export function GallerySection() {
  const { t } = useLanguage()

  const galleryImages = [
    {
      src: '/img1.jpg',
      alt: 'Bathroom renovation project 1',
    },
    {
      src: '/img2.jpg',
      alt: 'Bathroom renovation project 2',
    },
    {
      src: '/img3.jpg',
      alt: 'Bathroom renovation project 3',
    },
    {
      src: '/img4.jpg',
      alt: 'Kitchen renovation project',
    },
    {
      src: '/img5.jpg',
      alt: 'Construction project 1',
    },
    {
      src: '/img6.jpg',
      alt: 'Construction project 2',
    },
    {
      src: '/gallery7.jpg',
      alt: 'Professional renovation project',
    },
    {
      src: '/gallery8.jpg',
      alt: 'Quality construction work',
    },
    {
      src: '/gallery9.jpg',
      alt: 'Modern renovation project',
    },
    {
      src: '/gallery10.jpg',
      alt: 'Expert craftsmanship',
    },
    {
      src: '/gallery11.jpg',
      alt: 'Professional building services',
    },
    {
      src: '/gallery12.jpg',
      alt: 'Quality renovation work',
    },
    {
      src: '/gallery13.jpg',
      alt: 'Expert construction project',
    },
  ]

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            {t('gallery')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            {t('galleryDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="simple-gallery-item group animate-fade-in relative"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            {t('galleryCallToAction')}
          </p>
          <a
            href="https://wa.me/972524577274"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {t('contactForMoreProjects')}
          </a>
        </div>
      </div>
    </section>
  )
}
