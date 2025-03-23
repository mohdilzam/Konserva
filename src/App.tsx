
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GaleriSatwa from "./pages/GaleriSatwa";
import ProgramKonservasi from "./pages/ProgramKonservasi";
import Artikel from "./pages/Artikel";
import TentangKami from "./pages/TentangKami";
import DetailSatwa from "./pages/DetailSatwa";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/galeri" element={<GaleriSatwa />} />
          <Route path="/konservasi" element={<ProgramKonservasi />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/tentang" element={<TentangKami />} />
          <Route path="/satwa/:id" element={<DetailSatwa />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
