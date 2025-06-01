import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isAuthPage = () => {
    return ['/login', '/register', '/forgot-password', '/reset-password'].includes(location.pathname);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isAuthPage()) {
    return null;
  }

  return (
    <header className="w-full py-6 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-display font-bold text-2xl text-forest-900">Konserva</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link 
            to="/" 
            className={`font-medium transition-colors relative ${
              isActive('/') 
                ? 'text-forest-600' 
                : 'text-gray-900 hover:text-forest-600'
            }`}
          >
            Beranda
            {isActive('/') && (
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-forest-600 rounded-full" />
            )}
          </Link>
          
          <Link 
            to="/galeri" 
            className={`font-medium transition-colors relative ${
              isActive('/galeri') 
                ? 'text-forest-600' 
                : 'text-gray-900 hover:text-forest-600'
            }`}
          >
            Galeri
            {isActive('/galeri') && (
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-forest-600 rounded-full" />
            )}
          </Link>
          
          <Link 
            to="/konservasi" 
            className={`font-medium transition-colors relative ${
              isActive('/konservasi') 
                ? 'text-forest-600' 
                : 'text-gray-900 hover:text-forest-600'
            }`}
          >
            Konservasi
            {isActive('/konservasi') && (
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-forest-600 rounded-full" />
            )}
          </Link>
          
          <Link 
            to="/artikel" 
            className={`font-medium transition-colors relative ${
              isActive('/artikel') 
                ? 'text-forest-600' 
                : 'text-gray-900 hover:text-forest-600'
            }`}
          >
            Artikel
            {isActive('/artikel') && (
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-forest-600 rounded-full" />
            )}
          </Link>
          
          <Link 
            to="/tentang" 
            className={`font-medium transition-colors relative ${
              isActive('/tentang') 
                ? 'text-forest-600' 
                : 'text-gray-900 hover:text-forest-600'
            }`}
          >
            Tentang
            {isActive('/tentang') && (
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-forest-600 rounded-full" />
            )}
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {user.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  Profile
                </DropdownMenuItem>
                {user.role === 'admin' && (
                  <DropdownMenuItem onClick={() => navigate('/admin')}>
                    Admin Dashboard
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button onClick={() => navigate('/register')}>
                Register
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-md text-gray-800"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute left-0 w-full bg-white shadow-md py-4 z-50">
          <div className="flex flex-col px-6 space-y-4">
            <Link 
              to="/" 
              className={`font-medium transition-colors py-2 ${
                isActive('/') 
                  ? 'text-forest-600 border-l-4 border-forest-600 pl-2' 
                  : 'text-gray-900 hover:text-forest-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            
            <Link 
              to="/galeri" 
              className={`font-medium transition-colors py-2 ${
                isActive('/galeri') 
                  ? 'text-forest-600 border-l-4 border-forest-600 pl-2' 
                  : 'text-gray-900 hover:text-forest-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Galeri
            </Link>
            
            <Link 
              to="/konservasi" 
              className={`font-medium transition-colors py-2 ${
                isActive('/konservasi') 
                  ? 'text-forest-600 border-l-4 border-forest-600 pl-2' 
                  : 'text-gray-900 hover:text-forest-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Konservasi
            </Link>
            
            <Link 
              to="/artikel" 
              className={`font-medium transition-colors py-2 ${
                isActive('/artikel') 
                  ? 'text-forest-600 border-l-4 border-forest-600 pl-2' 
                  : 'text-gray-900 hover:text-forest-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Artikel
            </Link>
            
            <Link 
              to="/tentang" 
              className={`font-medium transition-colors py-2 ${
                isActive('/tentang') 
                  ? 'text-forest-600 border-l-4 border-forest-600 pl-2' 
                  : 'text-gray-900 hover:text-forest-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Tentang
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/profile" 
                  className="font-medium text-gray-900 hover:text-forest-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                {user.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="font-medium text-gray-900 hover:text-forest-600 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="font-medium text-gray-900 hover:text-forest-600 py-2 text-left w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="font-medium text-gray-900 hover:text-forest-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="font-medium text-gray-900 hover:text-forest-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Register
            </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
