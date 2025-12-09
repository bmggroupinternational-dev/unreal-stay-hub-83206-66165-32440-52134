import { Home, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-8 h-8" />
              <div>
                <h3 className="font-alfa text-xl font-bold">UNREAL HOMES</h3>
                <p className="font-poppins text-xs opacity-80">BY WHISTLING WOODS</p>
              </div>
            </div>
            <p className="font-poppins text-sm opacity-80 leading-relaxed">
              Experience luxury staycations with modern, comfortable apartments designed for memorable stays.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/suites", label: "Suites" },
                { to: "/amenities", label: "Amenities" },
                { to: "/offers", label: "Offers" },
                { to: "/blog", label: "Blog" },
                { to: "/about", label: "About Us" }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="font-poppins text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-poppins text-sm opacity-80">
                  Whistling Woods Estate,<br />Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+233000000000" className="font-poppins text-sm opacity-80 hover:opacity-100">
                  +233 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@unrealhomes.com" className="font-poppins text-sm opacity-80 hover:opacity-100">
                  info@unrealhomes.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="font-poppins text-sm opacity-80">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-sm opacity-80">
            © {new Date().getFullYear()} Unreal Homes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="font-poppins text-sm opacity-80 hover:opacity-100">Privacy Policy</Link>
            <Link to="#" className="font-poppins text-sm opacity-80 hover:opacity-100">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
