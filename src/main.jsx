import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { AuthContextProvider } from './context/AuthContext.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'sonner';

AOS.init({
  animatedClassName: 'aos-animate',
  delay: 0,
  duration: 800, 
  easing: 'ease',
  mirror: false,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Toaster visibleToasts={1} position="top-right" richColors />
    <App />
    </AuthContextProvider> 
  </React.StrictMode>,
)
