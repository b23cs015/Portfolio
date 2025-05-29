import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-primary-100/20 dark:from-primary-900/20 to-transparent"></div>
      <Navbar />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;