import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, MapPin, Key, TrendingUp, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Properties",
      description: "Houses, villas, and apartments for sale or rent across Kerala",
      features: ["Modern houses", "Luxury villas", "Affordable flats", "Family homes"]
    },
    {
      icon: Building,
      title: "Commercial Properties", 
      description: "Office spaces, shops, and commercial buildings for business needs",
      features: ["Office buildings", "Retail spaces", "Warehouses", "Business complexes"]
    },
    {
      icon: MapPin,
      title: "Land & Plots",
      description: "Prime plots and land parcels in strategic locations",
      features: ["Residential plots", "Commercial land", "Agricultural land", "Investment plots"]
    },
    {
      icon: Key,
      title: "Rental Services",
      description: "Comprehensive rental solutions for tenants and landlords",
      features: ["Tenant matching", "Property management", "Rental agreements", "Maintenance support"]
    },
    {
      icon: TrendingUp,
      title: "Investment Consulting",
      description: "Expert guidance for profitable real estate investments",
      features: ["Market analysis", "ROI evaluation", "Investment planning", "Risk assessment"]
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated support throughout your property journey",
      features: ["24/7 assistance", "Legal guidance", "Documentation help", "After-sales service"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to meet your specific needs across Kerala
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 border-border bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl text-center shadow-elegant">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Find Your Perfect Property?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Let our experienced team help you navigate Kerala's real estate market with confidence and expertise.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-hover transition-all hover:scale-105"
            >
              Start Your Property Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;