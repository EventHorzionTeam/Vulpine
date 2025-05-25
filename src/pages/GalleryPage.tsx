import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Gallery images by category
  const galleryImages = {
    cocktails: [
      {
        src: "https://images.pexels.com/photos/2531187/pexels-photo-2531187.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Colorful cocktail with fresh berries",
        caption: "Berry Fusion Signature Cocktail"
      },
      {
        src: "https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Classic Old Fashioned cocktail",
        caption: "Classic Old Fashioned"
      },
      {
        src: "https://images.pexels.com/photos/2663974/pexels-photo-2663974.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Moscow Mule in copper mug",
        caption: "Copper Mule Variation"
      },
      {
        src: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Martini with olive garnish",
        caption: "Perfect Martini"
      },
      {
        src: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Tropical cocktail with pineapple",
        caption: "Tropical Paradise"
      },
      {
        src: "https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Frozen margarita with salt rim",
        caption: "Signature Margarita"
      },
    ],
    events: [
      {
        src: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Elegant wedding reception bar",
        caption: "Johnson Wedding Reception"
      },
      {
        src: "https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Corporate holiday party",
        caption: "Nexus Corp Annual Gala"
      },
      {
        src: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Garden party bar setup",
        caption: "Summer Garden Soirée"
      },
      {
        src: "https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Birthday celebration bar",
        caption: "40th Birthday Celebration"
      },
      {
        src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Outdoor wedding bar",
        caption: "Miller-Thompson Wedding"
      },
    ],
    setup: [
      {
        src: "https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Elegant mobile bar setup",
        caption: "Premium Mobile Bar Setup"
      },
      {
        src: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Bar tools and spirits display",
        caption: "Craft Cocktail Station"
      },
      {
        src: "https://images.pexels.com/photos/2531190/pexels-photo-2531190.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Bartender tools and preparation",
        caption: "Bartender Workstation"
      },
      {
        src: "https://images.pexels.com/photos/1400255/pexels-photo-1400255.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Rustic outdoor bar setup",
        caption: "Rustic Farmhouse Wedding Bar"
      },
    ],
    team: [
      {
        src: "https://images.pexels.com/photos/4667030/pexels-photo-4667030.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Bartender preparing drinks",
        caption: "Our Team in Action"
      },
      {
        src: "https://images.pexels.com/photos/4255484/pexels-photo-4255484.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Bartender mixing cocktail",
        caption: "Mixology Expertise"
      },
      {
        src: "https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "Flair bartending performance",
        caption: "Flair Bartending Show"
      },
    ],
  };

  // Combine all categories for "All" view
  const allImages = [
    ...galleryImages.cocktails,
    ...galleryImages.events,
    ...galleryImages.setup,
    ...galleryImages.team
  ];

  // Get current images based on active category
  const currentImages = activeCategory === 'all' 
    ? allImages 
    : galleryImages[activeCategory as keyof typeof galleryImages] || [];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-amber-950 text-white relative">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0" 
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/613037/pexels-photo-613037.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8">
              Explore our portfolio of signature cocktails, event setups, and happy clients.
              Get inspired for your next event.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'cocktails', label: 'Signature Cocktails' },
              { id: 'events', label: 'Events' },
              { id: 'setup', label: 'Bar Setups' },
              { id: 'team', label: 'Our Team' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => setActiveImage(image.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {activeImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <button 
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
                aria-label="Close"
              >
                <X size={32} />
              </button>
              <img 
                src={activeImage} 
                alt="Enlarged gallery image" 
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-6">
            Ready to Create Your Own Gallery-Worthy Event?
          </h2>
          <p className="text-lg text-amber-900/80 max-w-3xl mx-auto mb-8">
            Let us bring our expertise and creativity to your next gathering. Contact us today to start planning.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-500 text-white py-3 px-8 rounded-md transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;