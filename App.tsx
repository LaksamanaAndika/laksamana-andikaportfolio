/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ClientsSection } from './components/ClientsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ViralSection } from './components/ViralSection';
import { ProcessSection } from './components/ProcessSection';
import { ConnectSection } from './components/ConnectSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col selection:bg-[#FF6600] selection:text-white font-body">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <PortfolioSection />
        <ViralSection />
        <ProcessSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
}
