import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Star, Wifi, Car, Coffee, Tv, Wind, UtensilsCrossed, Users, Bed, Bath, Home } from "lucide-react";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { motion } from "framer-motion";
import heroImage from "@/assets/building-exterior.jpg";
import livingRoom from "@/assets/living-room-main.jpg";
import bedroom from "@/assets/bedroom-main.jpg";
import kitchen from "@/assets/kitchen-modern.jpg";
import bathroom from "@/assets/bathroom-vanity.jpg";
import entertainment from "@/assets/entertainment-wall.jpg";
import seatingArea from "@/assets/seating-area.jpg";

const PropertyDetails = () => {
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
        staggerChildren: 0.15
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

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] mt-16" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <Badge className="bg-white/20 text-white w-fit mb-4">Featured Property</Badge>
          <h1 className="font-alfa text-4xl md:text-6xl text-white mb-4">Modern Luxury Apartment</h1>
          <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-poppins font-semibold">4.9</span>
            </div>
            <span className="font-poppins">·</span>
            <span className="font-poppins">Prime Location in Whistling Woods</span>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-8 justify-center">
            {[
              { icon: Users, label: "Up to 6 Guests" },
              { icon: Bed, label: "2 Bedrooms" },
              { icon: Bath, label: "2 Bathrooms" },
              { icon: Home, label: "1,200 sq ft" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-poppins font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <motion.div 
          className="container mx-auto px-6 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <h2 className="font-poppins text-3xl font-bold mb-6">About This Property</h2>
          <p className="font-poppins text-muted-foreground leading-relaxed mb-4">
            Welcome to our modern luxury apartment, where comfort meets sophistication. This beautifully designed space offers everything you need for an unforgettable staycation experience.
          </p>
          <p className="font-poppins text-muted-foreground leading-relaxed">
            Featuring contemporary furnishings, high-end appliances, and thoughtful amenities, our apartment is perfect for families, groups, or anyone seeking a premium short-term living experience.
          </p>
        </motion.div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-secondary/30">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="font-poppins text-3xl font-bold mb-12 text-center">Premium Amenities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Wifi, label: "High-Speed WiFi" },
              { icon: Car, label: "Free Parking" },
              { icon: Coffee, label: "Coffee & Tea" },
              { icon: Tv, label: "Smart TV" },
              { icon: Wind, label: "Air Conditioning" },
              { icon: UtensilsCrossed, label: "Full Kitchen" }
            ].map((amenity, i) => (
              <motion.div key={i} variants={scaleInVariants}>
                <Card className="p-6 flex items-center gap-4">
                <amenity.icon className="w-8 h-8 text-primary" />
                <span className="font-poppins font-medium">{amenity.label}</span>
              </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-secondary/30">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="font-poppins text-3xl font-bold mb-12 text-center">Property Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { image: livingRoom, name: 'Living Room' },
              { image: bedroom, name: 'Master Bedroom' },
              { image: kitchen, name: 'Modern Kitchen' },
              { image: bathroom, name: 'Luxury Bathroom' },
              { image: entertainment, name: 'Entertainment Area' },
              { image: seatingArea, name: 'Lounge Space' }
            ].map((item, i) => (
              <motion.div key={i} variants={scaleInVariants}>
                <div className="aspect-square rounded-xl overflow-hidden shadow-md group">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <motion.div 
          className="container mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <h2 className="font-poppins text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="font-poppins text-muted-foreground mb-8">Starting from $199/night</p>
          <Button 
            size="lg"
            onClick={() => navigate('/reservation')}
            className="bg-gradient-brand text-white font-poppins font-semibold px-12 py-6 text-lg"
          >
            Reserve This Property
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default PropertyDetails;
