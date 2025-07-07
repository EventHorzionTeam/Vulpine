import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex justify-start gap-2">
              <span className="font-montserrat text-[1.25rem] text-white">
                V U L P I N E
              </span>
              {/* <img
                src={VulpineLogo}
                alt="Vulpine Logo"
                width={250}
                height={250}
              /> */}
            </div>
            {/* <div className="flex items-center gap-2">
              <GlassWater className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-serif font-bold tracking-tight text-white">
                Vulpine Bar
              </span>
            </div> */}
            <p className="text-sm text-amber-200 max-w-xs">
              Elevating events with crafted cocktails and professional service.
              Your premier choice for unforgettable bartending experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:contact@vulpine.bar"
                className="text-white hover:text-amber-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
                { name: "Book Now", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-amber-200 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-amber-400 shrink-0 mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-amber-400 shrink-0 mt-1" />
                <a
                  href="mailto:contact@vulpine.bar"
                  className="hover:text-amber-400 transition-colors"
                >
                  contact@vulpine.bar
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Service Areas</h4>
              <p className="text-amber-200 text-sm">
                Serving the greater metropolitan area and surrounding counties.
                Available for travel with additional fees.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900 mt-12 pt-8 text-center text-white text-sm">
          <p>© {currentYear} Vulpine Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
