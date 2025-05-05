import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });

    // Handle hash changes
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Get current page based on hash
  const getPage = () => {
    if (currentPath.startsWith('#blog/post/')) {
      return <BlogPost slug={currentPath.split('/')[2]} />;
    }

    switch (currentPath) {
      case '#services':
        return <Services />;
      case '#about':
        return <About />;
      case '#blog':
        return <Blog />;
      case '':
      case '#':
      default:
        return <Home />;
    }
  };

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar currentPath={currentPath} />
        <main className="flex-grow">
          {getPage()}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;