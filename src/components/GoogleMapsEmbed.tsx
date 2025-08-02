import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ExternalLink } from 'lucide-react';

const GoogleMapsEmbed = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const address = "TC 25/1425-11, Vellayambalam, Trivandrum, Kerala 695010";
  const encodedAddress = encodeURIComponent(address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`;

  const handleLoadMap = () => {
    setIsLoaded(true);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Our Location</h3>
        </div>
        
        {!isLoaded ? (
          <div className="bg-muted rounded-lg p-8 text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              {address}
            </p>
            <div className="space-y-2">
              <Button onClick={handleLoadMap} className="w-full">
                Load Interactive Map
              </Button>
              <Button variant="outline" asChild className="w-full">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <iframe
              src={embedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="ReaL EstatE WorlD Office Location"
            />
            <Button 
              variant="outline" 
              size="sm" 
              asChild 
              className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm"
            >
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GoogleMapsEmbed;