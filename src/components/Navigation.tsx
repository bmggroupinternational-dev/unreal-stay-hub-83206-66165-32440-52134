import { Home } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { motion } from "framer-motion";
import { useState } from "react";

export const Navigation = () => {
  const { navigate } = usePageTransition();
  const [isAnimating, setIsAnimating] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/suites", label: "Suites" },
    { to: "/amenities", label: "Amenities" },
    { to: "/about", label: "About Us" }
  ];

  const handleReserveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setButtonPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/reservation');
    }, 800);
  };

  return (
    <>
      {/* Expanding Box Overlay */}
      {isAnimating && (
        <motion.div
          initial={{
            position: "fixed",
            left: buttonPosition.x,
            top: buttonPosition.y,
            width: 0,
            height: 0,
            borderRadius: "50%",
            backgroundColor: "hsl(var(--primary))",
            zIndex: 9999,
            transform: "translate(-50%, -50%)"
          }}
          animate={{
            width: "300vw",
            height: "300vh",
            borderRadius: "0%"
          }}
          transition={{
            duration: 0.8,
            ease: [0.65, 0, 0.35, 1]
          }}
        />
      )}
    
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 flex-shrink-0">
            <Home className="w-8 h-8 text-primary" />
            <div>
              <h1 className="font-alfa text-xl font-bold text-primary">UNREAL HOMES</h1>
              <p className="font-poppins text-xs text-muted-foreground font-semibold">BY WHISTLING WOODS</p>
            </div>
          </NavLink>

          {/* Navigation Links - Centered */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={({ isActive }) =>
                  cn(
                    "font-poppins font-medium transition-colors",
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Reserve Now Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleReserveClick}
              disabled={isAnimating}
              className="bg-gradient-brand text-white font-poppins font-semibold hover:opacity-90 transition-opacity"
            >
              Reserve Now
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
    </>
  );
};
