import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, BedDouble, Bath, Square, Phone, Mail, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Property {
  id: string;
  title: string;
  type: string;
  price: string;
  location: string;
  description: string;
  features: string;
  status: 'available' | 'sold' | 'rented';
  imageUrl: string;
  createdAt: string;
}

const PropertyListings = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const savedProperties = localStorage.getItem('realEstate_properties');
    if (savedProperties) {
      setProperties(JSON.parse(savedProperties));
    }
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'sold':
        return 'bg-red-500';
      case 'rented':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const filteredProperties = properties.filter(property => {
    if (filter === 'all') return true;
    return property.status === filter;
  });

  const handleContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Property Listings
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover your dream property in Kerala with our curated selection of homes and commercial spaces
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All Properties
            </Button>
            <Button
              variant={filter === 'available' ? 'default' : 'outline'}
              onClick={() => setFilter('available')}
            >
              Available
            </Button>
            <Button
              variant={filter === 'sold' ? 'default' : 'outline'}
              onClick={() => setFilter('sold')}
            >
              Sold
            </Button>
            <Button
              variant={filter === 'rented' ? 'default' : 'outline'}
              onClick={() => setFilter('rented')}
            >
              Rented
            </Button>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                No Properties Found
              </h3>
              <p className="text-muted-foreground mb-8">
                We're constantly updating our listings. Check back soon or contact us for personalized assistance.
              </p>
              <Button onClick={handleContact}>
                Contact Us
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={property.imageUrl || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge 
                      className={`absolute top-3 right-3 text-white ${getStatusColor(property.status)}`}
                    >
                      {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{property.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {property.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-2xl font-bold text-primary">
                      ₹{property.price}
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {property.description}
                    </p>
                    
                    {property.features && (
                      <div className="flex flex-wrap gap-2">
                        {property.features.split(',').slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature.trim()}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-2 pt-4">
                      <Button 
                        onClick={handleContact}
                        className="w-full"
                      >
                        Contact for Details
                      </Button>
                      <div className="flex justify-center gap-3 text-sm text-muted-foreground">
                        <a href="tel:9447258746" className="flex items-center gap-1 hover:text-primary">
                          <Phone className="h-3 w-3" />
                          Call
                        </a>
                        <a 
                          href="https://wa.me/919447258746?text=Hi, I'm interested in this property: " 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-primary"
                        >
                          <MessageCircle className="h-3 w-3" />
                          WhatsApp
                        </a>
                        <a href="mailto:mcmmurali2@gmail.com" className="flex items-center gap-1 hover:text-primary">
                          <Mail className="h-3 w-3" />
                          Email
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyListings;