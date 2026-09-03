import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Services } from './components/Services';
import { SolutionsShowcase } from './components/SolutionsShowcase';
import { SolutionPhilosophy } from './components/SolutionPhilosophy';
import { SubscriptionModel } from './components/SubscriptionModel';
import { HowWeWork } from './components/HowWeWork';
import { BusinessAnalysis } from './components/BusinessAnalysis';
import { Industries } from './components/Industries';
import { Clients } from './components/Clients';
import { WhySolbasket } from './components/WhySolbasket';
import { InteractiveFun } from './components/InteractiveFun';
import { NeedSelector } from './components/NeedSelector';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1326] text-[#F8FAFC] font-sans selection:bg-[#00C853]/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <SolutionsShowcase />
        <SolutionPhilosophy />
        <SubscriptionModel />
        <HowWeWork />
        <BusinessAnalysis />
        <Industries />
        <Clients />
        <WhySolbasket />
        <InteractiveFun />
        <NeedSelector />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
