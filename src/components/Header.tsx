import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>94472 58746 | 0471 2080461</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>mcmmurali2@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Thiruvananthapuram, Kerala</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/770d4573-830a-4dde-b8d0-d7666a1fd65c.png" 
              alt="ReaL EstatE WorlD Logo" 
              className="h-10 w-10"
            />
            <div className="font-bold text-xl text-primary">
              ReaL EstatE WorlD
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:shadow-elegant transition-all"
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('reviews')} 
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-primary hover:shadow-elegant transition-all w-fit"
              >
                Get Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;