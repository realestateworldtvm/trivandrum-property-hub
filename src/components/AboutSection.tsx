import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Kerala Coverage",
      description: "Serving all major cities and districts across Kerala with local expertise"
    },
    {
      icon: Users,
      title: "900+ Happy Customers",
      description: "Over a decade of building trust and delivering exceptional real estate services"
    },
    {
      icon: Award,
      title: "4.9 Star Rating",
      description: "Consistently rated excellence by our clients on Google Reviews"
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "Deep understanding of Kerala's real estate market trends and pricing"
    }
  ];

  const services = [
    "House for sale in Trivandrum",
    "Plots and land in Thiruvananthapuram", 
    "Apartments & flats",
    "Luxury villas",
    "Commercial buildings",
    "Rental properties"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                About <span className="text-yellow-500 font-bold">ReaL EstatE WorlD</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <span className="text-yellow-500 font-semibold">ReaL EstatE WorlD</span> is a trusted real estate consultant based in Thiruvananthapuram, Kerala. 
                We specialize in buying, selling, and renting houses, plots, flats, villas, and commercial 
                properties across Kerala.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With 900+ happy customers and over a decade of experience, we provide personalized 
                service for your property needs. Our deep understanding of the Kerala real estate market 
                ensures you get the best deals at the best locations.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Our Specializations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-card p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">Looking for real estate in Thiruvananthapuram or anywhere in Kerala?</h4>
              <p className="text-muted-foreground mb-4">We help you find the best deals at the best locations.</p>
              <div className="space-y-2 text-sm">
                <p><strong>Phone:</strong> 94472 58746 | 0471 2080461</p>
                <p><strong>Email:</strong> mcmmurali2@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-border bg-gradient-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;