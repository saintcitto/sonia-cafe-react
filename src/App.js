import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import OperationalHours from './components/OperationalHours';
import AppFooter from './components/AppFooter';
import WhatsAppBubble from './components/WhatsAppBubble';
import { menuData } from './menuData.js';

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Hero />
        <Menu menuData={menuData} />
        <OperationalHours />
      </main>
      <AppFooter />
      <WhatsAppBubble />
    </div>
  );
}

export default App;