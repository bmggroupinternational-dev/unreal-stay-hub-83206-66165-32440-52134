import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Star, Users, Bed, Bath, Maximize } from "lucide-react";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { motion } from "framer-motion";
import heroImage from "@/assets/bedroom-main.jpg";
import livingRoom from "@/assets/living-room-main.jpg";
import bedroom from "@/assets/bedroom-main.jpg";
import kitchen from "@/assets/kitchen-modern.jpg";
import bathroom from "@/assets/bathroom-shower.jpg";
import seatingArea from "@/assets/seating-area.jpg";
import diningArea from "@/assets/dining-table.jpg";

const Suites = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] mt-16" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <Badge className="bg-white/20 text-white mb-4">Our Premium Suites</Badge>
          <h1 className="font-alfa text-4xl md:text-6xl mb-4">Luxury Accommodations</h1>
          <p className="font-poppins text-lg md:text-xl max-w-2xl">
            Choose between our spacious single or double bedroom suites, each designed for maximum comfort
          </p>
        </div>
      </section>

      {/* Suite Overview */}
      <section className="py-16">
        <motion.div 
          className="container mx-auto px-6 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Property Image */}
            <img src={livingRoom} alt="Modern living room with contemporary furnishings" className="aspect-video rounded-2xl shadow-brand object-cover w-full" />
            
            {/* Details */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 fill-current text-primary" />
                <span className="font-poppins font-semibold">5.0 / 5.0</span>
                <span className="font-poppins text-muted-foreground">(Exceptional Reviews)</span>
              </div>
              
              <h2 className="font-poppins text-3xl font-bold mb-6">Our Suite Options</h2>
              
              <div className="space-y-6 mb-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-poppins text-xl font-semibold mb-2">Single Bedroom Suite</h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed mb-3">
                    Perfect for couples or solo travelers seeking comfort and style. Featuring a spacious bedroom, 
                    modern living area, fully-equipped kitchen, and contemporary bathroom with premium fixtures.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-poppins">Up to 2 Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-primary" />
                      <span className="font-poppins">1 Bedroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-primary" />
                      <span className="font-poppins">1 Bathroom</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-poppins text-xl font-semibold mb-2">Double Bedroom Suite</h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed mb-3">
                    Ideal for families or groups. Spacious layout with two bedrooms, generous living spaces, 
                    full kitchen, and two bathrooms. Comfortably accommodates up to 4 adults (6 including children).
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-poppins">4 Adults (6 with children)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-primary" />
                      <span className="font-poppins">2 Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-primary" />
                      <span className="font-poppins">2 Bathrooms</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                size="lg"
                onClick={() => navigate('/reservation')}
                className="bg-gradient-brand text-white font-poppins font-semibold"
              >
                Reserve Your Suite
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-secondary/30">
        <motion.div 
          className="container mx-auto px-6 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="font-poppins text-3xl font-bold mb-12 text-center">Explore Our Space</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Living Room', image: livingRoom },
              { name: 'Master Bedroom', image: bedroom },
              { name: 'Kitchen', image: kitchen },
              { name: 'Bathroom', image: bathroom },
              { name: 'Seating Area', image: seatingArea },
              { name: 'Dining Area', image: diningArea }
            ].map((room, i) => (
              <motion.div key={i} variants={scaleInVariants}>
                <div className="aspect-square rounded-xl shadow-md relative overflow-hidden group">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-poppins font-semibold text-white">{room.name}</p>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Guest Reviews */}
      <section className="py-16 bg-secondary/30">
        <motion.div 
          className="container mx-auto px-6 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="font-poppins text-3xl font-bold mb-12 text-center">What Our Guests Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={scaleInVariants}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-primary" />
                  ))}
                </div>
                <p className="font-poppins text-muted-foreground mb-4 leading-relaxed">
                  "Unreal Homes made my stay in DsM truly enjoyable. The location is excellent, with no hassle 
                  dealing with Uber or Bolt drivers. I had a great experience during my time in DsM."
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-poppins font-semibold">Dt</p>
                    <p className="font-poppins text-sm text-muted-foreground">Kumasi, Ghana • May 2025</p>
                    <p className="font-poppins text-xs text-muted-foreground">Stayed with kids</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={scaleInVariants}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-primary" />
                  ))}
                </div>
                <p className="font-poppins text-muted-foreground mb-4 leading-relaxed">
                  "I stayed in Unreal Homes earlier so I knew what to expect. This place is perfect. I highly 
                  recommend it. You won't be disappointed. The place is very very nice but building manager 
                  makes your stay even better. No faults. Love it."
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-poppins font-semibold">Francisco</p>
                    <p className="font-poppins text-sm text-muted-foreground">7 years on Airbnb • April 2025</p>
                    <p className="font-poppins text-xs text-muted-foreground">Stayed a few nights</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <motion.div 
          className="container mx-auto px-6 max-w-6xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleInVariants}
        >
          <h2 className="font-poppins text-3xl font-bold mb-4">Transparent Pricing</h2>
          <p className="font-poppins text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enjoy our competitive rates with no hidden fees. What you see is what you pay.
          </p>
          
          <Card className="max-w-md mx-auto p-8">
            <div className="mb-4">
              <p className="font-poppins text-sm text-muted-foreground mb-2">Starting from</p>
              <p className="font-alfa text-5xl text-primary">$199</p>
              <p className="font-poppins text-muted-foreground">per night</p>
            </div>
            <ul className="space-y-2 mb-6 text-left">
              {[
                'Free WiFi & Parking',
                'Welcome Refreshments',
                'Full Kitchen Access',
                '24/7 Support'
              ].map((item, i) => (
                <li key={i} className="font-poppins text-sm flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button 
              onClick={() => navigate('/reservation')}
              className="w-full bg-gradient-brand text-white font-poppins font-semibold"
            >
              Book Now
            </Button>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Suites;
