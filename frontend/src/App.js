import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Components from './components';

const {
  Header,
  HeroSection,
  StatsSection,
  BenefitsSection,
  CTASection,
  GetStartedSection,
  TradingToolkitSection,
  Footer,
  TradingBotsPage,
  DashboardPage,
  PortfolioPage
} = Components;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <HeroSection />
              <StatsSection />
              <BenefitsSection />
              <CTASection />
              <GetStartedSection />
              <TradingToolkitSection />
              <Footer />
            </div>
          } />
          <Route path="/trading-bots" element={
            <div>
              <Header />
              <TradingBotsPage />
              <Footer />
            </div>
          } />
          <Route path="/dashboard" element={
            <div>
              <Header />
              <DashboardPage />
              <Footer />
            </div>
          } />
          <Route path="/portfolio" element={
            <div>
              <Header />
              <PortfolioPage />
              <Footer />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;