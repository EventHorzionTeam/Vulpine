import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Award, Calendar, Users } from "lucide-react";
import TwoCup from "../../public/twoCup.jfif";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-amber-950/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            <span className="block">Craft Cocktails &</span>
            <span className="block text-amber-400">
              Professional Bartending
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-amber-100">
            Pouring more than just drinks we serve slow moments, sweet company,
            and lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-amber-600 hover:bg-amber-500 text-white py-3 px-8 rounded-md transition-colors font-medium text-lg"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white py-3 px-8 rounded-md transition-colors font-medium text-lg"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-amber-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Our Bartending Services
            </h2>
            <p className="text-lg text-amber-100/80 max-w-3xl mx-auto">
              From intimate gatherings to large celebrations, we provide
              tailored bartending solutions for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Craft Cocktails",
                description:
                  "Expertly crafted signature cocktails using fresh ingredients and premium spirits.",
                image:
                  "https://images.pexels.com/photos/5379762/pexels-photo-5379762.jpeg?auto=compress&cs=tinysrgb&w=1600",
              },
              {
                title: "Full-Service Bar",
                description:
                  "Complete bar setup with professional staff, glassware, and premium spirits.",
                image:
                  "https://images.pexels.com/photos/3566226/pexels-photo-3566226.jpeg?auto=compress&cs=tinysrgb&w=1600",
              },
              {
                title: "Custom Menu Design",
                description:
                  "Personalized cocktail menus designed to match your event theme and preferences.",
                image:
                  "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-amber-950/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-amber-100 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-amber-400 hover:text-amber-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-amber-900 hover:bg-amber-800 text-white py-3 px-8 rounded-md transition-colors font-medium"
            >
              View All Services
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Why Choose Vulpine Bar
            </h2>
            <p className="text-lg text-amber-100/80 max-w-3xl mx-auto">
              What sets our bartending team apart is our dedication to quality,
              creativity, and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10" />,
                title: "Expert Mixologists",
                description:
                  "Our team consists of experienced, certified bartenders with a passion for craft cocktails.",
              },
              {
                icon: <Star className="h-10 w-10" />,
                title: "Premium Ingredients",
                description:
                  "We use only the freshest ingredients and top-shelf spirits to create exceptional drinks.",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Personalized Service",
                description:
                  "Every event is unique, and we tailor our services to match your specific needs.",
              },
              {
                icon: <Calendar className="h-10 w-10" />,
                title: "Seamless Experience",
                description:
                  "From planning to execution, we ensure your event runs smoothly without any hiccups.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-amber-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-amber-950 mb-3">
                  {feature.title}
                </h3>
                <p className="text-amber-900/70 font-[600]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-amber-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-amber-200 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about their experience with Vulpine Bar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The Vulpine Bar team made our wedding reception absolutely unforgettable. The custom cocktails were a huge hit!",
                author: "Sarah & Michael",
                event: "Wedding Reception",
              },
              {
                quote:
                  "Professional, creative, and incredibly accommodating. They went above and beyond to make our corporate event a success.",
                author: "David Chen",
                event: "Corporate Gala",
              },
              {
                quote:
                  "From the beautiful presentation to the delicious drinks, everything was perfect. We're still getting compliments from our guests.",
                author: "Jennifer Lopez",
                event: "Birthday Celebration",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-amber-900/50 p-8 rounded-lg backdrop-blur-sm"
              >
                <div className="flex justify-center mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-6 text-amber-100 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-amber-300">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-500 text-white py-3 px-8 rounded-md transition-colors font-medium"
            >
              Book Your Event
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-xl overflow-hidden shadow-xl">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-10 md:p-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Ready to Elevate Your Next Event?
                </h2>
                <p className="text-lg text-amber-100 mb-8">
                  Contact us today to discuss how we can create a memorable
                  experience for you and your guests with our custom bartending
                  services.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-amber-900 hover:bg-amber-100 py-3 px-8 rounded-md transition-colors font-medium"
                >
                  Get in Touch
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={TwoCup}
                  // src="https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Bartender preparing cocktails"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
