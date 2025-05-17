
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
import Login from "./pages/Login";
import Register from "./pages/Register";

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
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
