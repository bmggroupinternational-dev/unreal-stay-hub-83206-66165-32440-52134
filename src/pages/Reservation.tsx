import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/Navigation";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { motion } from "framer-motion";

const Reservation = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
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
    <div className="min-h-screen bg-background py-12">
      <Navigation />
      
      <motion.div 
        className="container mx-auto px-6 max-w-6xl mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
      >
        <h1 className="font-alfa text-4xl mb-8">Complete Your Reservation</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="font-poppins text-2xl font-bold mb-6">Guest Information</h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>First Name</Label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <Label>Special Requests (Optional)</Label>
                  <Textarea placeholder="Any special requirements?" rows={4} />
                </div>
                <Button className="w-full bg-gradient-brand text-white font-poppins font-semibold">
                  Confirm Reservation
                </Button>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 sticky top-6">
              <h3 className="font-poppins text-xl font-bold mb-4">Booking Summary</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-poppins text-sm text-muted-foreground">Property</p>
                  <p className="font-poppins font-semibold">Modern Luxury Apartment</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-poppins">Price per night</span>
                    <span className="font-poppins font-semibold">$199</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-2">
                    <span className="font-poppins">Total</span>
                    <span className="font-poppins">$199</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Reservation;
