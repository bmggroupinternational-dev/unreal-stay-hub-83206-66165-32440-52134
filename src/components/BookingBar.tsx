import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import { usePageTransition } from "@/contexts/PageTransitionContext";

export const BookingBar = () => {
  const { navigate } = usePageTransition();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-poppins text-sm">Check Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-poppins text-sm">Up to 6 Guests</span>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/reservation')}
            className="bg-gradient-brand text-white font-poppins font-semibold"
          >
            Reserve Now
          </Button>
        </div>
      </div>
    </div>
  );
};
