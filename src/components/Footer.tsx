import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const specialties = [
    "Cancer Care",
    "Cardiology", 
    "Orthopaedics",
    "Neurology",
    "Gastroenterology",
  ];

  const quickLinks = [
    { name: "Careers", path: "/careers" },
    { name: "For Media", path: "/media" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AGCH</h3>
                <p className="text-sm opacity-80">Advance Global Care</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted multi-specialty hospital, offering world-class healthcare 
              with advanced cancer care and comprehensive medical services for your family's well-being.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Our Specialties */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Specialties</h4>
            <ul className="space-y-2">
              {specialties.map((specialty) => (
                <li key={specialty}>
                  <Link 
                    to="/specialties" 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200"
                  >
                    {specialty}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200">Home</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200">About Us</Link></li>
              <li><Link to="/doctors" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200">Find a Doctor</Link></li>
              <li><Link to="/patients" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200">For Patients</Link></li>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 opacity-80" />
                <div className="text-sm opacity-80">
                  <p>123 Healthcare Avenue</p>
                  <p>Medical District, City 560001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">+91 80 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">info@agch.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Advance Global Care Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;