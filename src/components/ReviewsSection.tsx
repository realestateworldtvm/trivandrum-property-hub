import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Manoj Neelambaran",
      rating: 5,
      text: "Very good dealing",
      date: "27 Jun 2024"
    },
    {
      name: "Sneha Andrews",
      rating: 5,
      text: "Good service",
      date: "27 Jun 2024"
    },
    {
      name: "PRAJOD P RAJ",
      rating: 5,
      text: "Great service. Very friendly support ❤️🔥",
      date: "27 Jun 2024"
    },
    {
      name: "SUNIL KUMAR ANANTHAKRISHNAN NAIR",
      rating: 5,
      text: "Excellent service",
      date: "27 Jun 2024"
    },
    {
      name: "Shiju Thomas",
      rating: 5,
      text: "Fast and reliable service",
      date: "27 Jun 2023"
    },
    {
      name: "Yaser Karalal",
      rating: 5,
      text: "Professional and trustworthy",
      date: "26 Jun 2023"
    },
    {
      name: "Dheeraj Gururani",
      rating: 5,
      text: "Fast and various property option available with Mr Murli in Trivandrum.",
      date: "26 Jun 2023"
    },
    {
      name: "Safia Ibrahim",
      rating: 5,
      text: "Excellent service",
      date: "7 days ago"
    },
    {
      name: "Shemil Thomas",
      rating: 5,
      text: "Good Service... 👍🏻",
      date: "7 days ago"
    },
    {
      name: "Sanjay Vijay",
      rating: 5,
      text: "Great experience with the team",
      date: "7 days ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reviews from our satisfied customers on Google Business
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-primary">4.9</span>
            <span className="text-muted-foreground">based on 37 reviews</span>
          </div>
        </div>

        {/* Scrolling Reviews */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-reviews gap-6 whitespace-nowrap">
            {/* First set of reviews */}
            {reviews.map((review, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-80">
                <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-hover transition-all border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-card-foreground mb-4 whitespace-normal leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="border-t border-border pt-3">
                    <p className="font-semibold text-card-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {reviews.map((review, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-80">
                <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-hover transition-all border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-card-foreground mb-4 whitespace-normal leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="border-t border-border pt-3">
                    <p className="font-semibold text-card-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://g.co/kgs/VU8hgx2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:shadow-elegant transition-all"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="h-5 w-5" />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;