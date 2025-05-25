import React from 'react';
import { User, MessageSquare, ThumbsUp, Award, Smile, Clock, Star, Heart, Calendar, GlassWater } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Alexandra Reynolds",
      role: "Founder & Head Mixologist",
      bio: "With over 15 years in the industry, Alexandra brings expertise from top-tier establishments across the country. Her passion for innovative cocktails and exceptional service led to the creation of Vulpine Bar.",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Marcus Williams",
      role: "Lead Bartender",
      bio: "Marcus specializes in classic cocktails with modern twists. His background in molecular gastronomy brings an exciting scientific approach to our signature drinks.",
      image: "https://images.pexels.com/photos/5329043/pexels-photo-5329043.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Sofia Chen",
      role: "Event Coordinator",
      bio: "Sofia ensures that every event runs smoothly from planning to execution. Her attention to detail and organizational skills guarantee a flawless experience for clients.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "James Rodriguez",
      role: "Mixologist & Trainer",
      bio: "James leads our training program and specializes in crafting unique flavor profiles. His background in culinary arts influences his innovative approach to cocktail creation.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  // Values data
  const values = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from the quality of our ingredients to the presentation of our cocktails."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Our team is passionate about the art of mixology and dedicated to creating memorable experiences through our craft."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Communication",
      description: "We believe in clear, open communication with our clients throughout the planning and execution process."
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Reliability",
      description: "You can count on us to deliver on our promises and exceed your expectations at every event."
    },
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Hospitality",
      description: "We're committed to creating a warm, welcoming atmosphere that puts your guests at ease."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Punctuality",
      description: "We respect your time and ensure prompt arrival, efficient setup, and timely service throughout your event."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-amber-950 text-white relative">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0" 
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              About Vulpine Bar
            </h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8">
              A team of passionate mixologists dedicated to elevating your events 
              through exceptional cocktails and professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Bartenders crafting cocktails" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-amber-900/80">
                <p>
                  Vulpine Bar was founded in 2019 with a simple mission: to bring exceptional craft cocktail experiences to events of all sizes. What began as a passion project by our founder, Alexandra Reynolds, quickly grew into a sought-after service for those looking to elevate their gatherings.
                </p>
                <p>
                  After years of working in high-end establishments, Alexandra noticed a gap in the market for truly customized, high-quality mobile bartending services. She assembled a team of like-minded professionals who shared her dedication to the craft and her commitment to exceptional service.
                </p>
                <p>
                  Today, Vulpine Bar has become synonymous with creativity, quality, and professionalism in the events industry. We've served at hundreds of events, from intimate dinner parties to grand weddings and corporate galas.
                </p>
                <p>
                  Our name "Vulpine" – meaning fox-like – reflects our clever approach to mixology and our ability to adapt to any environment with grace and skill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-amber-900/80 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure we deliver the best possible experience for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-amber-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-950 mb-3">
                  {value.title}
                </h3>
                <p className="text-amber-900/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-amber-900/80 max-w-3xl mx-auto">
              The talented individuals who make the magic happen behind the bar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-950 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-amber-900/70 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-amber-100 max-w-3xl mx-auto">
              We take pride in our work and the recognition we've received over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Events Serviced",
                icon: <Calendar className="h-6 w-6" />
              },
              {
                number: "50+",
                label: "Signature Cocktails Created",
                icon: <GlassWater className="h-6 w-6" />
              },
              {
                number: "15,000+",
                label: "Happy Guests",
                icon: <Smile className="h-6 w-6" />
              },
              {
                number: "5",
                label: "Industry Awards",
                icon: <Award className="h-6 w-6" />
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-amber-800/50 p-8 rounded-lg text-center backdrop-blur-sm"
              >
                <div className="inline-flex items-center justify-center p-3 bg-amber-700/50 rounded-full mb-4 text-amber-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-amber-300 mb-2">{stat.number}</div>
                <div className="text-amber-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-xl overflow-hidden shadow-xl">
            <div className="p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Let's Create Something Special Together
              </h2>
              <p className="text-lg text-amber-100 mb-8 max-w-3xl mx-auto">
                Ready to elevate your next event with our expert bartending services? 
                Get in touch to discuss how we can help make your vision a reality.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center bg-white text-amber-900 hover:bg-amber-100 py-3 px-8 rounded-md transition-colors font-medium text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;