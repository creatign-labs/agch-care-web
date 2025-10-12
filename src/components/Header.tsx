import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import agchLogo from "@/assets/agch-logo.jpg";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Centres of Excellence", path: "/specialties" },
    { name: "Find a Doctor", path: "/doctors" },
    { name: "For Patients", path: "/patients" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Emergency Bar */}
      <div className="bg-accent text-accent-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-center text-sm font-medium">
          <Phone className="w-4 h-4 mr-2" />
          Emergency: 24/7 Helpline - 1800-123-AGCH (2424)
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={agchLogo} 
              alt="AGCH Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">AGCH</h1>
              <p className="text-xs text-muted-foreground">Advance Global Care</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs lg:text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button variant="cta" size="lg" className="shrink-0">
            Book Appointment
          </Button>
        </div>
      </div>

    </header>
  );
};

export default Header;