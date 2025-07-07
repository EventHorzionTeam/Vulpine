import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Clock,
  Send,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guestCount: "",
    venue: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // In a real application, you would submit the form data to your backend here
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-amber-950 text-white relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8">
              Ready to elevate your next event? Get in touch with us to discuss
              how our bartending services can make your gathering exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-950 mb-6">
                Get In Touch
              </h2>
              <p className="text-amber-900/80 mb-8">
                We'd love to hear from you! Fill out the form or contact us
                directly using the information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-950 mb-1">Phone</h3>
                    <p className="text-amber-900/80">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-950 mb-1">Email</h3>
                    <p className="text-amber-900/80">contact@vulpine.bar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-950 mb-1">
                      Service Area
                    </h3>
                    <p className="text-amber-900/80">
                      Greater Metropolitan Area
                      <br />
                      Available for travel with additional fees
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-950 mb-1">
                      Response Time
                    </h3>
                    <p className="text-amber-900/80">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white rounded-xl shadow-lg p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-950 mb-6">
                    Book Your Event
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-amber-900 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                          placeholder="Your Name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-amber-900 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                          placeholder="Your Email"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-amber-900 mb-1"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                          placeholder="Your Phone Number"
                        />
                      </div>

                      {/* Event Type */}
                      <div>
                        <label
                          htmlFor="eventType"
                          className="block text-sm font-medium text-amber-900 mb-1"
                        >
                          Event Type *
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                        >
                          <option value="">Select Event Type</option>
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="holiday">Holiday Party</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Event Date */}
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-amber-900 mb-1"
                        >
                          Event Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                        />
                      </div>

                      {/* Guest Count */}
                      <div>
                        <label
                          htmlFor="guestCount"
                          className="block text-sm font-medium text-amber-900 mb-1"
                        >
                          Estimated Guest Count *
                        </label>
                        <input
                          type="number"
                          id="guestCount"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          required
                          min="1"
                          className="w-full px-4 py-3 rounded-md border border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                          placeholder="Number of Guests"
                        />
                      </div>

                      {/* Venue/Location */}
                      <div className="md:col-span-2">
                        <label
                          htmlFor="venue"
                          className="block text-sm font-medium text-amber-900 mb-1"
                        >
                          Venue/Location
                        </label>
                        <input
                          type="text"
                          id="venue"
                          name="venue"
                          value={formData.venue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                          placeholder="Event Location"
                        />
                      </div>

                      {/* Message */}
                      <div className="md:col-span-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-amber-900 mb-1"
                        >
                          Additional Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 rounded-md border border-amber-200 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                          placeholder="Tell us more about your event, special requests, or questions..."
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="p-3 bg-red-100 text-red-700 rounded-md">
                        {error}
                      </div>
                    )}

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-amber-600 hover:bg-amber-500 text-white py-3 px-6 rounded-md transition-colors font-medium flex items-center justify-center ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send size={18} className="mr-2" />
                            Submit Inquiry
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 mb-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-amber-950 mb-4">
                    Thank You!
                  </h2>
                  <p className="text-amber-900/80 mb-8 max-w-md mx-auto">
                    Your inquiry has been submitted successfully. We'll get back
                    to you within 24-48 hours to discuss your event needs.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-amber-700 hover:text-amber-600 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              )}
            </div>
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
              Have questions about booking our services? Find answers to common
              inquiries below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What information do you need to provide a quote?",
                answer:
                  "To provide an accurate quote, we typically need to know: event date, venue location, number of guests, event duration, type of event, and any specific cocktail preferences or special requests.",
              },
              {
                question: "How far in advance should I book?",
                answer:
                  "We recommend booking at least 4-6 weeks in advance for standard events, and 2-3 months for peak season events (May-September) or holidays.",
              },
              {
                question: "Is there a deposit required?",
                answer:
                  "Yes, we require a 50% deposit to secure your date, with the balance due one week before the event.",
              },
              {
                question: "What happens after I submit an inquiry?",
                answer:
                  "After you submit an inquiry, our team will review your details and contact you within 24-48 hours to discuss your event further and provide a custom quote.",
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
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-4">
              Our Booking Process
            </h2>
            <p className="text-lg text-amber-900/80 max-w-3xl mx-auto">
              Here's what to expect when you book our services for your event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Inquiry",
                description:
                  "Submit your event details through our contact form or give us a call.",
                icon: <Send size={24} className="text-amber-600" />,
              },
              {
                step: "02",
                title: "Consultation",
                description:
                  "We'll schedule a call to discuss your vision and requirements in detail.",
                icon: <Phone size={24} className="text-amber-600" />,
              },
              {
                step: "03",
                title: "Custom Proposal",
                description:
                  "We'll create a tailored proposal and quote based on your event needs.",
                icon: <Calendar size={24} className="text-amber-600" />,
              },
              {
                step: "04",
                title: "Confirmation",
                description:
                  "Secure your date with a deposit and finalize all the details.",
                icon: <Users size={24} className="text-amber-600" />,
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                    {process.icon}
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

      {/* Map or Service Area Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Service Area
            </h2>
            <p className="text-lg text-amber-100 max-w-3xl mx-auto">
              We primarily serve the greater metropolitan area and surrounding
              counties, but are available for travel to other locations with
              additional travel fees.
            </p>
          </div>

          <div className="bg-amber-800/50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Core Service Area (No Travel Fee)
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
              {[
                "Downtown",
                "Midtown",
                "Uptown",
                "West End",
                "East Village",
                "Southside",
                "Northpoint",
                "Harbor District",
                "Riverside",
                "Central Park",
                "Lake View",
                "Golden Hills",
              ].map((location, index) => (
                <li key={index} className="flex items-center">
                  <MapPin size={16} className="text-amber-400 mr-2" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4">
              Extended Service Area (Travel Fee Applies)
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Oakwood",
                "Pine Valley",
                "Westlake",
                "Meadowbrook",
                "Sunnydale",
                "Brookfield",
                "Highland Park",
                "Cedar Springs",
                "Maplewood",
                "Silver Lake",
              ].map((location, index) => (
                <li key={index} className="flex items-center">
                  <MapPin size={16} className="text-amber-400 mr-2" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
