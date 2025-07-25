import { Facebook, Youtube, Linkedin, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-professional text-professional-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/770d4573-830a-4dde-b8d0-d7666a1fd65c.png" 
                alt="ReaL EstatE WorlD Logo" 
                className="h-8 w-8"
              />
              <h3 className="text-xl font-bold text-yellow-500">ReaL EstatE WorlD</h3>
            </div>
            <p className="text-professional-light leading-relaxed">
              Your trusted real estate consultant in Thiruvananthapuram, Kerala. 
              Specializing in buying, selling, and renting properties across Kerala 
              with over a decade of experience.
            </p>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="text-white font-semibold">4.9</span>
              <span className="text-professional-light">(37 reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-professional-light hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-professional-light hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-professional-light hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-professional-light hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-professional-light hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2 text-professional-light">
              <li>Houses for Sale</li>
              <li>Plots & Land</li>
              <li>Apartments & Flats</li>
              <li>Luxury Villas</li>
              <li>Commercial Properties</li>
              <li>Rental Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-professional-light">
                  <p>94472 58746</p>
                  <p>0471 2080461</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-professional-light">mcmmurali2@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-professional-light">Thiruvananthapuram, Kerala</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h5 className="font-medium text-white">Follow Us</h5>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/share/16pMPQr7ks/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>
                <a 
                  href="https://wa.me/919447258746" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 p-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-white" />
                </a>
                <a 
                  href="https://youtube.com/@realestateworldtvm?si=om7y0FykeICuxdR7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Youtube className="h-4 w-4 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/posts/murali-c-m-5aba42261_httpslnkdingxzrznnr-activity-7352034896787263488-962Z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-700 p-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-professional-light/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-professional-light">
              © 2024 <span className="text-yellow-500 font-semibold">ReaL EstatE WorlD</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-professional-light">
              <span>Thiruvananthapuram, Kerala</span>
              <span>•</span>
              <a 
                href="https://realestateworldkerala.com" 
                className="hover:text-white transition-colors"
              >
                realestateworldkerala.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;