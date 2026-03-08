'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import ChatInterface from '@/components/ChatInterface';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Header onChatClick={() => setShowChat(true)} />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
      <ChatInterface isOpen={showChat} onClose={() => setShowChat(false)} />
    </div>
  );
}

