import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SmoothScroll from 'smooth-scroll';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
    // new SmoothScroll('a[href*="#"]', {
    //   speed: 500,
    //   speedAsDuration: true,
    //   easing: 'easeInOutCubic',
    // });
  }, []);

  return (
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<Main />);
