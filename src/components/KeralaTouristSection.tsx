import { Card, CardContent } from "@/components/ui/card";

const KeralaTouristSection = () => {
  const touristPlaces = [
    {
      id: 1,
      name: "Padmanabhaswamy Temple",
      location: "Thiruvananthapuram",
      image: "/lovable-uploads/15155af6-d499-4c51-bcb6-8ca48e84b571.png",
      description: "Ancient temple dedicated to Lord Vishnu, known for its Dravidian architecture"
    },
    {
      id: 2,
      name: "Thiruvananthapuram City",
      location: "Capital of Kerala",
      image: "/lovable-uploads/c8307ffa-4562-4c63-8e2e-164381572aee.png",
      description: "The capital city with rich heritage and modern amenities"
    },
    {
      id: 3,
      name: "Kerala Backwaters",
      location: "Alleppey & Kumarakom",
      image: "/lovable-uploads/7c5514e6-436b-4ecf-8560-e3feb9b27e8b.png",
      description: "Serene waterways surrounded by lush greenery and traditional houseboats"
    },
    {
      id: 4,
      name: "Hill Stations",
      location: "Munnar & Wayanad",
      image: "/lovable-uploads/6224347b-47e4-4da3-a0f6-2ad50a421221.png",
      description: "Picturesque hill stations with tea plantations and cool climate"
    },
    {
      id: 5,
      name: "Cochin City",
      location: "Commercial Capital",
      image: "/lovable-uploads/6b6363e3-7a9c-4b84-9b20-d55910e7f088.png",
      description: "Historic port city blending colonial charm with modern infrastructure"
    },
    {
      id: 6,
      name: "Kerala Beaches",
      location: "Kovalam & Varkala",
      image: "/lovable-uploads/1ab96012-a7b3-4f31-b4fe-f81a6ed804d7.png",
      description: "Golden sandy beaches with coconut palms and azure waters"
    }
  ];

  return (
    <section id="kerala-places" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover Beautiful 
            <span className="text-kerala-green"> Kerala</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore God's Own Country - From ancient temples to pristine backwaters, 
            Kerala offers diverse real estate opportunities in stunning locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {touristPlaces.map((place, index) => (
            <Card 
              key={place.id} 
              className="group overflow-hidden hover:shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-professional/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-1">{place.name}</h3>
                  <p className="text-sm">{place.location}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {place.name}
                </h3>
                <p className="text-kerala-green font-medium mb-3">{place.location}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {place.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">Perfect for:</span> Residential & Commercial Properties
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Real Estate in Kerala's Prime Locations
            </h3>
            <p className="text-muted-foreground">
              Whether you're looking for properties near temples, in bustling cities, 
              or serene tourist destinations, ReaL EstatE WorlD helps you find 
              the perfect location in God's Own Country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeralaTouristSection;