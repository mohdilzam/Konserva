import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import { Toaster } from './components/ui/toaster';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GaleriSatwa from "./pages/GaleriSatwa";
import ProgramKonservasi from "./pages/ProgramKonservasi";
import Artikel from "./pages/Artikel";
import TentangKami from "./pages/TentangKami";
import DetailSatwa from "./pages/DetailSatwa";

const queryClient = new QueryClient();

// Protected Route component
const ProtectedRoute = ({ children, allowedRoles = ['user', 'admin'] }: { children: React.ReactNode, allowedRoles?: string[] }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

// Main Layout with header and footer
const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

// Auth Layout without header and footer
const AuthLayout = () => (
  <div className="min-h-screen">
    <Outlet />
  </div>
);

const AppRoutes = () => {
  return (
        <Routes>
      {/* Auth routes without header/footer */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>

      {/* Main routes with header/footer */}
      <Route element={<MainLayout />}>
        {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/galeri" element={<GaleriSatwa />} />
          <Route path="/konservasi" element={<ProgramKonservasi />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/tentang" element={<TentangKami />} />
          <Route path="/satwa/:id" element={<DetailSatwa />} />

        {/* Protected routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
          <Route path="*" element={<NotFound />} />
      </Route>
        </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Router>
            <Toaster />
            <Sonner />
            <AppRoutes />
          </Router>
        </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);
};

export default App;
