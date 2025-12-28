import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Phone, Menu, ChevronDown } from "lucide-react";
import agchLogo from "@/assets/agch-logo.jpg";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Find a Doctor", path: "/doctors" },
    { name: "For Patients", path: "/patients" },
    { name: "Contact Us", path: "/contact" },
  ];

  const moreItems = [
    { name: "Careers", path: "/careers" },
    { name: "Second Opinion", path: "/second-opinion" },
    { name: "Blogs", path: "/blogs" },
    { name: "Our Specialities", path: "/specialties" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Emergency Bar */}
      <div className="bg-accent text-accent-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-center text-xs sm:text-sm font-medium">
          <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Emergency: 24/7 Helpline - 1800-123-AGCH (2424)</span>
          <span className="sm:hidden">Emergency: 1800-123-AGCH</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src={agchLogo} 
              alt="AGCH Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-primary">AGCH</h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Advance Global Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                More
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {moreItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className={`w-full ${isActive(item.path) ? "text-primary" : ""}`}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop CTA Button */}
          <Button variant="cta" size="lg" className="hidden md:flex shrink-0">
            Book Appointment
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary py-2 ${
                      isActive(item.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">More</p>
                  {moreItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-medium transition-colors hover:text-primary py-2 ${
                        isActive(item.path) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <Button variant="cta" size="lg" className="w-full mt-4">
                  Book Appointment
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </header>
  );
};

export default Header;