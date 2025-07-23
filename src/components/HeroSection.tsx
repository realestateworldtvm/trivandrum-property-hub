import { Button } from "@/components/ui/button";
import { Star, Users, Calendar, Award } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Your Trusted
              <br />
              <span className="text-primary-light">Real Estate</span>
              <br />
              Partner in Kerala
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-lg">
              Specializing in buying, selling, and renting properties across Kerala. 
              Over a decade of experience with 900+ happy customers.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-2xl font-bold text-primary-foreground">4.9</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">Google Rating</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary-foreground" />
                <span className="text-2xl font-bold text-primary-foreground">900+</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">Happy Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-primary-foreground" />
                <span className="text-2xl font-bold text-primary-foreground">10+</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="h-5 w-5 text-primary-foreground" />
                <span className="text-2xl font-bold text-primary-foreground">37</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">Google Reviews</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 hover:shadow-hover transition-all"
            >
              Find Your Dream Property
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-white text-white hover:bg-white hover:text-primary transition-all"
            >
              Sell Your Property
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-scale-in">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src="/lovable-uploads/49b65f1f-2aa7-4392-93b6-7c9ddcc1d8ec.png" 
              alt="ReaL EstatE WorlD - Professional Real Estate Service" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-kerala-green text-white p-4 rounded-lg shadow-card animate-pulse">
            <div className="text-center">
              <div className="text-2xl font-bold">₹</div>
              <div className="text-xs">Best Deals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;