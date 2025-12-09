import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { motion } from "framer-motion";
import { Calendar, Clock, Percent, Gift, Star } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const Offers = () => {
  const { navigate } = usePageTransition();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const offers = [
    {
      title: "Extended Stay Discount",
      description: "Book 7 nights or more and enjoy 20% off your entire stay. Perfect for long-term visitors and remote workers.",
      discount: "20% OFF",
      validUntil: "Dec 31, 2025",
      image: gallery1,
      icon: Calendar,
      badge: "Popular"
    },
    {
      title: "Early Bird Special",
      description: "Book 30 days in advance and save 15% on your reservation. Plan ahead for the best rates.",
      discount: "15% OFF",
      validUntil: "Ongoing",
      image: gallery2,
      icon: Clock,
      badge: "Best Value"
    },
    {
      title: "Weekend Getaway",
      description: "Enjoy a relaxing weekend escape with complimentary breakfast and late checkout at noon.",
      discount: "Free Perks",
      validUntil: "Weekends Only",
      image: gallery6,
      icon: Gift,
      badge: "Limited"
    },
    {
      title: "Returning Guest Reward",
      description: "Our valued returning guests receive 10% off their next booking. Once you stay, you're family.",
      discount: "10% OFF",
      validUntil: "Members Only",
      image: gallery8,
      icon: Star,
      badge: "Exclusive"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] mt-16" style={{ backgroundImage: `url(${gallery6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <Badge className="bg-white/20 text-white mb-4">Special Offers</Badge>
          <h1 className="font-alfa text-4xl md:text-6xl mb-4">Exclusive Deals</h1>
          <p className="font-poppins text-lg md:text-xl max-w-2xl">
            Discover our special offers and enjoy incredible savings on your next luxury stay
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20">
        <motion.div 
          className="container mx-auto px-6 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">Current Promotions</h2>
            <p className="font-poppins text-muted-foreground text-lg max-w-2xl mx-auto">
              Take advantage of our limited-time offers for an unforgettable stay at unbeatable prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <motion.div key={index} variants={scaleInVariants}>
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {offer.badge}
                    </Badge>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Percent className="w-5 h-5" />
                        <span className="font-poppins font-bold text-2xl">{offer.discount}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <offer.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-poppins font-semibold text-xl">{offer.title}</h3>
                    </div>
                    <p className="font-poppins text-muted-foreground mb-4 leading-relaxed">
                      {offer.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-poppins text-sm text-muted-foreground">
                        Valid: {offer.validUntil}
                      </span>
                      <Button 
                        onClick={() => navigate('/reservation')}
                        className="bg-gradient-brand text-white font-poppins font-semibold"
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-secondary/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
            Don't Miss Out on These Deals
          </h2>
          <p className="font-poppins text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our special offers or to make a reservation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate('/reservation')}
              className="bg-gradient-brand text-white font-poppins font-semibold px-8"
            >
              Make a Reservation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/about')}
              className="font-poppins font-semibold px-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Offers;
