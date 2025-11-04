import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageTransitionProvider } from "@/contexts/PageTransitionContext";
import Index from "./pages/Index";
import Suites from "./pages/Suites";
import Amenities from "./pages/Amenities";
import About from "./pages/About";
import PropertyDetails from "./pages/PropertyDetails";
import Reservation from "./pages/Reservation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTransitionProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/suites" element={<Suites />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/about" element={<About />} />
            <Route path="/property" element={<PropertyDetails />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransitionProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
