import React from "react";
import {
  Check,
  Coffee,
  GlassWater,
  Wine,
  Users,
  Calendar,
  Clock,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  // Service packages
  const packages = [
    {
      title: "Essential",
      price: "Starting at $500",
      description: "Perfect for intimate gatherings and small parties",
      features: [
        "1 professional bartender",
        "Up to 4 hours of service",
        "Standard bar setup",
        "3 signature cocktails",
        "Basic mixers and garnishes",
      ],
      recommended: false,
      icon: <GlassWater className="h-10 w-10" />,
      suitable: "Small gatherings of up to 50 guests",
    },
    {
      title: "Premium",
      price: "Starting at $900",
      description: "Our most popular package for medium-sized events",
      features: [
        "2 professional bartenders",
        "Up to 6 hours of service",
        "Full bar setup with premium equipment",
        "5 signature cocktails",
        "Premium spirits and craft mixers",
        "Custom menu design",
        "Pre-event consultation",
      ],
      recommended: true,
      icon: <Wine className="h-10 w-10" />,
      suitable: "Medium events of 50-100 guests",
    },
    {
      title: "Luxury",
      price: "Starting at $1,500",
      description: "The ultimate bartending experience for large events",
      features: [
        "3+ professional bartenders",
        "Up to 8 hours of service",
        "Deluxe bar setup with premium equipment",
        "Unlimited signature cocktails",
        "Top-shelf spirits and artisanal mixers",
        "Custom menu design with branding",
        "Pre-event consultation and tasting",
        "Specialty ice program",
        "Flair bartending performance",
      ],
      recommended: false,
      icon: <Coffee className="h-10 w-10" />,
      suitable: "Large events of 100+ guests",
    },
  ];

  // Additional services
  const additionalServices = [
    {
      title: "Cocktail Workshops",
      description:
        "Interactive cocktail-making classes for corporate events or private parties",
      icon: <Users />,
    },
    {
      title: "Mobile Bar Rental",
      description:
        "Custom-built, elegant mobile bars that can be set up at any venue",
      icon: <Utensils />,
    },
    {
      title: "Event Planning",
      description:
        "Full-service event planning assistance to coordinate all aspects of your gathering",
      icon: <Calendar />,
    },
    {
      title: "Extended Hours",
      description: "Additional service hours available for longer events",
      icon: <Clock />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-amber-950 text-white relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/466731/pexels-photo-4667031.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Bartending Services
            </h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8">
              From intimate gatherings to grand celebrations, we offer tailored
              bartending services to make your event exceptional with craft
              cocktails and professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-amber-900/80 max-w-3xl mx-auto">
              Choose the perfect package for your event, or contact us for a
              custom solution tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl border ${
                  pkg.recommended
                    ? "border-amber-500 shadow-lg relative"
                    : "border-gray-200 shadow-md"
                }`}
              >
                {pkg.recommended && (
                  <div className="bg-amber-500 text-white text-xs font-bold uppercase tracking-wider py-1 text-center">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div
                    className={`inline-block p-3 rounded-full mb-6 ${
                      pkg.recommended
                        ? "bg-amber-100 text-amber-600"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-950 mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-xl font-semibold text-amber-700 mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-amber-900/70 mb-6">{pkg.description}</p>
                  <div className="mb-6">
                    <div className="text-sm text-amber-900/80 mb-2">
                      Recommended for:
                    </div>
                    <p className="text-amber-700 font-medium">{pkg.suitable}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check
                          size={18}
                          className={`mr-2 mt-0.5 flex-shrink-0 ${
                            pkg.recommended
                              ? "text-amber-500"
                              : "text-amber-600"
                          }`}
                        />
                        <span className="text-amber-900/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-3 px-4 rounded-md transition-colors font-medium ${
                      pkg.recommended
                        ? "bg-amber-600 hover:bg-amber-500 text-white"
                        : "bg-amber-100 hover:bg-amber-200 text-amber-900"
                    }`}
                  >
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-amber-900/80">
            <p className="mb-4">
              All packages can be customized to fit your specific requirements.
            </p>
            <p>
              <Link
                to="/contact"
                className="text-amber-700 font-medium hover:text-amber-600 underline"
              >
                Contact us
              </Link>{" "}
              for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-200 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-amber-100/80 max-w-3xl mx-auto">
              Enhance your event with these specialized services to create an
              even more memorable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-amber-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-amber-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-amber-900/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-amber-900/80 max-w-3xl mx-auto">
              We make working with us easy and straightforward. Here's how we
              bring your event to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description:
                  "We'll discuss your event details, guest count, preferences, and budget.",
              },
              {
                step: "02",
                title: "Custom Proposal",
                description:
                  "We'll create a tailored package with drink options and service details.",
              },
              {
                step: "03",
                title: "Menu Development",
                description:
                  "We'll design a custom cocktail menu that matches your event theme.",
              },
              {
                step: "04",
                title: "Flawless Execution",
                description:
                  "On the day of your event, we'll arrive early to set up and provide exceptional service.",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-xl mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-amber-950 mb-3 text-center">
                    {process.title}
                  </h3>
                  <p className="text-center text-amber-900/70">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] right-0 h-1 bg-amber-100">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-200 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-amber-100/80 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are some common questions
              we receive about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How far in advance should I book your services?",
                answer:
                  "We recommend booking at least 4-6 weeks in advance for standard events, and 2-3 months for peak season events (May-September) or holidays. For large events, earlier is always better.",
              },
              {
                question: "Do you provide the alcohol or should I purchase it?",
                answer:
                  "We can work either way. We can provide all alcohol, mixers, and garnishes as part of your package, or we can work with client-provided alcohol. If you choose to provide your own, we'll give you a detailed shopping list based on your guest count and menu.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "We primarily serve the greater metropolitan area and surrounding counties. We're also available for travel with additional travel fees for locations beyond our standard service area.",
              },
              {
                question: "Can you create custom cocktails for my event?",
                answer:
                  "Absolutely! Custom cocktail creation is one of our specialties. We can design signature drinks that match your event theme, color scheme, or personal preferences.",
              },
              {
                question: "What is your cancellation policy?",
                answer:
                  "We require a 50% deposit to secure your date. This deposit is refundable up to 30 days before your event. Cancellations within 30 days of the event are eligible for a partial refund or credit toward a future event, depending on circumstances.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="mb-4 rounded-lg border border-amber-200 overflow-hidden group"
              >
                <summary className="bg-amber-100 p-4 cursor-pointer list-none flex justify-between items-center text-amber-900 font-medium">
                  {faq.question}
                  <span className="transform group-open:rotate-180 transition-transform duration-200">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="p-4 bg-white text-amber-900/80">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-amber-200/80 mb-4">
              Have more questions? We're happy to help!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-500 text-white py-3 px-8 rounded-md transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our bartending services can make
            your next event unforgettable.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-amber-900 hover:bg-amber-100 py-3 px-8 rounded-md transition-colors font-medium"
          >
            Book Your Event Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
