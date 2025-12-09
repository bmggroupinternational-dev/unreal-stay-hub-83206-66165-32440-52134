import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Wifi, Car, Coffee, Tv, Wind, UtensilsCrossed, 
  Waves, Dumbbell, Shield, Headphones, Smartphone, Mic
} from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/living-office-space.jpg";

const Amenities = () => {
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

  const amenitiesCategories = [
    {
      title: "Essential Amenities",
      items: [
        { icon: Wifi, label: "High-Speed WiFi", description: "Lightning-fast internet throughout the property" },
        { icon: Wind, label: "Air Conditioning", description: "Climate control in all rooms" },
        { icon: Car, label: "Free Parking", description: "Dedicated parking space for guests" },
        { icon: Coffee, label: "Coffee & Tea", description: "Complimentary beverages" }
      ]
    },
    {
      title: "Entertainment & Comfort",
      items: [
        { icon: Tv, label: "Smart TV", description: "55\" 4K TV with streaming services" },
        { icon: Smartphone, label: "Smart Home", description: "Voice-controlled lighting and temperature" },
        { icon: Headphones, label: "Premium Sound", description: "Bluetooth speakers in living areas" },
        { icon: Mic, label: "Work From Home", description: "Dedicated workspace with high-speed internet" }
      ]
    },
    {
      title: "Kitchen & Dining",
      items: [
        { icon: UtensilsCrossed, label: "Full Kitchen", description: "Modern appliances and cookware" },
        { icon: Coffee, label: "Coffee Station", description: "Espresso machine and grinder" },
        { icon: Waves, label: "Dishwasher", description: "For your convenience" },
        { icon: UtensilsCrossed, label: "Dining Area", description: "Seats up to 6 guests comfortably" }
      ]
    },
    {
      title: "Safety & Security",
      items: [
        { icon: Shield, label: "24/7 Security", description: "Round-the-clock monitoring" },
        { icon: Shield, label: "Fire Safety", description: "Smoke detectors and fire extinguisher" },
        { icon: Shield, label: "First Aid Kit", description: "Medical essentials available" },
        { icon: Shield, label: "Secure Access", description: "Smart lock system" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] mt-16" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-alfa text-4xl md:text-6xl mb-4">Premium Amenities</h1>
          <p className="font-poppins text-lg md:text-xl max-w-2xl">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {amenitiesCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="mb-16 last:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <h2 className="font-poppins text-3xl font-bold mb-8 text-center">{category.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, i) => (
                  <motion.div key={i} variants={scaleInVariants}>
                    <Card className="p-6 hover:shadow-brand transition-shadow">
                    <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">{item.label}</h3>
                    <p className="font-poppins text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-secondary/30">
        <motion.div 
          className="container mx-auto px-6 max-w-6xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <h2 className="font-poppins text-3xl font-bold mb-8">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Premium Quality</h3>
              <p className="font-poppins text-muted-foreground">
                Only the finest amenities and furnishings for our guests
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Regular Updates</h3>
              <p className="font-poppins text-muted-foreground">
                We continuously upgrade our facilities and services
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💚</div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Eco-Friendly</h3>
              <p className="font-poppins text-muted-foreground">
                Sustainable practices and energy-efficient appliances
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;
