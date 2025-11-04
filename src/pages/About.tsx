import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Heart, Target, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
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
      <section className="relative h-[40vh] bg-gradient-hero mt-16">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-alfa text-4xl md:text-6xl mb-4">About Unreal Homes</h1>
          <p className="font-poppins text-lg md:text-xl max-w-2xl">
            Creating extraordinary staycation experiences since the beginning
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <motion.div 
          className="container mx-auto px-6 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <h2 className="font-poppins text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="space-y-4 text-center">
            <p className="font-poppins text-muted-foreground leading-relaxed">
              Unreal Homes by Whistling Woods was born from a simple yet powerful vision: to redefine 
              the staycation experience by offering modern, luxurious accommodations that feel like home 
              while providing the amenities of a premium hotel.
            </p>
            <p className="font-poppins text-muted-foreground leading-relaxed">
              We believe that every guest deserves more than just a place to stay—they deserve an 
              experience that creates lasting memories. That's why we've carefully designed our property 
              to blend comfort, style, and convenience in perfect harmony.
            </p>
            <p className="font-poppins text-muted-foreground leading-relaxed">
              Located in the heart of Whistling Woods, our modern luxury apartment serves as your 
              gateway to both relaxation and adventure, offering the perfect base for exploring the 
              area or simply unwinding in sophisticated surroundings.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary/30">
        <motion.div 
          className="container mx-auto px-6 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="font-poppins text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Guest-Centric",
                description: "Your comfort and satisfaction are our top priorities"
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We maintain the highest standards in everything we do"
              },
              {
                icon: Award,
                title: "Quality",
                description: "Premium amenities and meticulous attention to detail"
              },
              {
                icon: Users,
                title: "Community",
                description: "Building lasting relationships with our guests"
              }
            ].map((value, i) => (
              <motion.div key={i} variants={scaleInVariants}>
                <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">{value.title}</h3>
                <p className="font-poppins text-muted-foreground text-sm">{value.description}</p>
              </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <motion.div 
          className="container mx-auto px-6 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <h2 className="font-poppins text-3xl font-bold mb-8 text-center">Why Choose Unreal Homes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-primary">Modern Luxury</h3>
              <p className="font-poppins text-muted-foreground">
                Our property features contemporary design, high-end furnishings, and state-of-the-art 
                amenities that create a truly premium experience.
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-primary">Prime Location</h3>
              <p className="font-poppins text-muted-foreground">
                Situated in Whistling Woods, you're perfectly positioned to explore local attractions 
                while enjoying a peaceful retreat.
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-primary">Exceptional Service</h3>
              <p className="font-poppins text-muted-foreground">
                Our dedicated team is available 24/7 to ensure your stay is seamless and memorable 
                from check-in to check-out.
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-primary">Flexible Stays</h3>
              <p className="font-poppins text-muted-foreground">
                Whether you need a weekend getaway or an extended stay, we offer flexible booking 
                options to suit your needs.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-brand">
        <motion.div 
          className="container mx-auto px-6 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <h2 className="font-poppins text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="font-poppins text-lg mb-6 opacity-90">
            We'd love to hear from you and help plan your perfect stay
          </p>
          <p className="font-poppins">
            Email: info@unrealhomes.com | Phone: +1 (555) 123-4567
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
