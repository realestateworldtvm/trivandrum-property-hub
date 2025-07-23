import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, Linkedin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello ReaL EstatE WorlD,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Property Type: ${formData.propertyType}
Message: ${formData.message}

I'm interested in your real estate services.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919447258746?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message Sent!",
      description: "Redirecting you to WhatsApp to complete your inquiry.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your property journey? Contact us today for personalized assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-border animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your phone number"
                      className="border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-card-foreground mb-2">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  >
                    <option value="">Select property type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment/Flat</option>
                    <option value="villa">Villa</option>
                    <option value="plot">Plot/Land</option>
                    <option value="commercial">Commercial Property</option>
                    <option value="rental">Rental Property</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your property requirements..."
                    className="border-border focus:ring-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-elegant transition-all"
                  size="lg"
                >
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            {/* Contact Details */}
            <Card className="shadow-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-card-foreground">Phone</p>
                      <p className="text-muted-foreground">94472 58746</p>
                      <p className="text-muted-foreground">0471 2080461</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-muted-foreground">mcmmurali2@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-card-foreground">Location</p>
                      <p className="text-muted-foreground">Thiruvananthapuram, Kerala</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-card-foreground">Business Hours</p>
                      <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="shadow-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-6">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.facebook.com/share/16pMPQr7ks/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                  >
                    <Facebook className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-blue-800">Facebook</span>
                  </a>
                  <a 
                    href="https://wa.me/919447258746" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
                  >
                    <MessageCircle className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-green-800">WhatsApp</span>
                  </a>
                  <a 
                    href="https://youtube.com/@realestateworldtvm?si=om7y0FykeICuxdR7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors group"
                  >
                    <Youtube className="h-5 w-5 text-red-600 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-red-800">YouTube</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/posts/murali-c-m-5aba42261_httpslnkdingxzrznnr-activity-7352034896787263488-962Z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 text-blue-700 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-blue-900">LinkedIn</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Google Reviews CTA */}
            <Card className="shadow-card border-border bg-gradient-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Visit Our Google Business</h3>
                <p className="text-muted-foreground mb-4">
                  Check out our 4.9-star rating and read reviews from our satisfied customers.
                </p>
                <a 
                  href="https://g.co/kgs/VU8hgx2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:shadow-elegant transition-all"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="h-5 w-5" />
                  View on Google
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;