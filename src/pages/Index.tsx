import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Shield, Star, Users, MapPin, Wifi, Car, Coffee, ChevronDown, Quote } from "lucide-react";
import { BookingBar } from "@/components/BookingBar";
import { Navigation } from "@/components/Navigation";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroSuite from "@/assets/hero-main.jpg";
import suite1 from "@/assets/living-room-main.jpg";
import suite2 from "@/assets/bedroom-main.jpg";
import suite3 from "@/assets/kitchen-modern.jpg";
import amenityBathroom from "@/assets/bathroom-shower.jpg";
import amenityParking from "@/assets/building-exterior.jpg";

const Index = () => {
  const { navigate } = usePageTransition();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Full Width */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroSuite})`,
            scale: heroScale
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-black/40"
            style={{ opacity: heroOpacity }}
          ></motion.div>
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="animate-fade-in">
            {/* Logo/Brand */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="relative">
                <Home size={48} className="text-white animate-float" />
                <div className="absolute -top-2 -right-1 w-6 h-3 bg-white/30 rounded-full"></div>
              </div>
              <div>
                <h1 className="font-alfa text-4xl md:text-6xl font-bold tracking-wide">
                  UNREAL HOMES
                </h1>
                <p className="font-poppins font-semibold text-sm md:text-lg tracking-widest opacity-90 mt-1">
                  BY WHISTLING WOODS
                </p>
              </div>
            </div>
            
            <h2 className="font-poppins text-2xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Homes Beyond Imagination
            </h2>
            
            <p className="font-poppins text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience luxury staycations with modern, comfortable apartments designed for memorable stays. 
              <span className="block mt-2 font-semibold">Live, Stay, Experience.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/property')}
                className="bg-white text-primary hover:bg-white/90 font-poppins font-semibold px-8 py-6 text-lg"
              >
                Explore Properties
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/reservation')}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-poppins font-semibold px-8 py-6 text-lg"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Featured Properties - Full Width */}
      <section className="py-20 bg-background">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <div className="text-center mb-16">
            <Badge variant="secondary" className="font-poppins mb-4">
              Our Signature Suites
            </Badge>
            <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-6">
              Exceptional Stays Await
            </h2>
            <p className="font-poppins text-muted-foreground text-lg max-w-2xl mx-auto">
              Immerse yourself in thoughtfully designed spaces where luxury meets comfort
            </p>
          </div>
        </motion.div>

        {/* Full Width Property Grid */}
        <motion.div 
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <motion.div 
              className="relative h-96 md:h-[600px] overflow-hidden group cursor-pointer"
              variants={scaleInVariants}
            >
              <img 
                src={suite1} 
                alt="Single Bedroom apartment with modern living space" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-poppins text-2xl font-bold">Single Bedroom</h3>
                  <Badge className="bg-white/20 text-white">8 Units</Badge>
                </div>
                <p className="font-poppins opacity-90 mb-4">Perfect for couples or solo travelers seeking comfort</p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/property')}
                  className="border-white text-white bg-white/10 hover:bg-white hover:text-primary"
                >
                  View Details
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="relative h-96 md:h-[600px] overflow-hidden group cursor-pointer"
              variants={scaleInVariants}
            >
              <img 
                src={suite2} 
                alt="Double Bedroom apartment with spacious layout" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-poppins text-2xl font-bold">Double Bedroom</h3>
                  <Badge className="bg-white/20 text-white">2 Units</Badge>
                </div>
                <p className="font-poppins opacity-90 mb-4">Ideal for families and groups needing extra space</p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/property')}
                  className="border-white text-white bg-white/10 hover:bg-white hover:text-primary"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Why Choose Unreal Homes
            </h2>
            <p className="font-poppins text-muted-foreground text-lg max-w-2xl mx-auto">
              Every property is carefully curated to ensure your stay exceeds expectations
            </p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: Shield,
                title: "Trusted & Verified",
                description: "All properties are thoroughly verified for safety and quality assurance"
              },
              {
                icon: Star,
                title: "Premium Experience", 
                description: "Luxury amenities and modern interiors designed for comfort"
              },
              {
                icon: Users,
                title: "Guest-Centric Service",
                description: "24/7 support and personalized service for unforgettable stays"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={scaleInVariants}>
                <Card className="text-center p-8 shadow-brand hover:shadow-glow transition-all duration-300 border-border/50">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">{feature.title}</h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Amenities Gallery - Full Width Split */}
      <motion.section 
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="grid md:grid-cols-2 gap-0">
          <motion.div 
            className="relative h-96 md:h-[500px] overflow-hidden group"
            variants={scaleInVariants}
          >
            <img 
              src={amenityBathroom} 
              alt="Luxury bathroom with marble finishes" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <Coffee className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-poppins text-3xl font-bold mb-2">Spa-Like Bathrooms</h3>
                <p className="font-poppins text-lg opacity-90">Unwind in luxury</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative h-96 md:h-[500px] overflow-hidden group"
            variants={scaleInVariants}
          >
            <img 
              src={amenityParking} 
              alt="Secure parking facility" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <Car className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-poppins text-3xl font-bold mb-2">Secure Parking</h3>
                <p className="font-poppins text-lg opacity-90">Complimentary for all guests</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Additional Amenities */}
      <section className="py-20 bg-background">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wifi, label: "High-Speed WiFi", desc: "Seamless connectivity" },
              { icon: Coffee, label: "Welcome Refreshments", desc: "Complimentary treats" },
              { icon: MapPin, label: "Prime Locations", desc: "Near key attractions" },
              { icon: Shield, label: "24/7 Security", desc: "Your safety first" }
            ].map((amenity, index) => (
              <motion.div key={index} variants={scaleInVariants}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <amenity.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-poppins font-semibold text-lg mb-2">{amenity.label}</h4>
                  <p className="font-poppins text-muted-foreground text-sm">{amenity.desc}</p>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              What Our Guests Say
            </h2>
            <p className="font-poppins text-muted-foreground text-lg">
              Real experiences from satisfied guests
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                text: "An absolutely incredible experience! The attention to detail and luxury amenities exceeded all expectations. Will definitely return!",
                rating: 5
              },
              {
                name: "Michael Chen",
                location: "Singapore",
                text: "Perfect location, stunning views, and impeccable service. This is how modern hospitality should be done.",
                rating: 5
              },
              {
                name: "Emma Williams",
                location: "London, UK",
                text: "From booking to checkout, everything was seamless. The suite was even better than the photos. Highly recommend!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={scaleInVariants}>
                <Card className="p-8 relative">
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-poppins text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-poppins font-semibold">{testimonial.name}</p>
                    <p className="font-poppins text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section - Full Width */}
      <motion.section 
        className="relative py-32 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${suite2})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-bright/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="font-poppins text-lg md:text-xl mb-8 opacity-90">
              Discover our handpicked collection of premium apartments and create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/reservation')}
                className="bg-white text-primary hover:bg-white/90 font-poppins font-semibold px-8 py-6 text-lg"
              >
                Book Your Stay Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/property')}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-poppins font-semibold px-8 py-6 text-lg"
              >
                View All Suites
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      <BookingBar />

      {/* Footer - Full Width */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Home size={32} />
                <div>
                  <h3 className="font-alfa text-2xl font-bold">UNREAL HOMES</h3>
                  <p className="font-poppins font-semibold text-sm opacity-80">BY WHISTLING WOODS</p>
                </div>
              </div>
              <p className="font-poppins opacity-80 max-w-md mb-6">
                Creating extraordinary staycation experiences with modern comfort and luxury. Your home away from home awaits.
              </p>
            </div>

            <div>
              <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 font-poppins opacity-80">
                <li><a href="/property" className="hover:opacity-100 transition-opacity">Properties</a></li>
                <li><a href="/suites" className="hover:opacity-100 transition-opacity">Suites</a></li>
                <li><a href="/amenities" className="hover:opacity-100 transition-opacity">Amenities</a></li>
                <li><a href="/about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-poppins font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 font-poppins opacity-80">
                <li>support@unrealhomes.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="pt-2">Available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <p className="font-poppins text-sm opacity-60">
              © 2024 Unreal Homes by Whistling Woods. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
