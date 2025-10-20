import React from 'react';
import AppHeader from './components/AppHeader';
import Hero from './components/Hero';
import Menu from './components/Menu';
import OperationalHours from './components/OperationalHours';
import AppFooter from './components/AppFooter';
import WhatsAppBubble from './components/WhatsAppBubble';
import { menuData } from './menuData.js';

function App() {
  return (
    <div className="app">
      <AppHeader />
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