import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import InteractiveHero from './components/InteractiveHero';
import MeetTheHumans from './components/MeetTheHumans';
import HumanWorkShowcase from './components/HumanWorkShowcase';
import HowWeWorkTogether from './components/HowWeWorkTogether';
import StudioDiary from './components/StudioDiary';
import KindWords from './components/KindWords';
import WarmFooter from './components/WarmFooter';
import FriendlyChatModal from './components/FriendlyChatModal';

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-warm-paper text-[#1C1917] selection:bg-amber-200 selection:text-stone-900 relative">
        
        {/* Warm Studio Navbar */}
        <Navbar onOpenChat={() => setChatOpen(true)} />

        {/* Heartfelt Main Flow */}
        <main>
          {/* Hero with Tactile Polaroids & Interactive Corkboard */}
          <InteractiveHero onOpenChat={() => setChatOpen(true)} />

          {/* Real Work We Loved Building */}
          <HumanWorkShowcase onOpenChat={() => setChatOpen(true)} />

          {/* Meet the Real Humans Behind the Code */}
          <MeetTheHumans />

          {/* How It Actually Feels to Work Together */}
          <HowWeWorkTogether />

          {/* Behind the Scenes Studio Diary & Radio */}
          <StudioDiary />

          {/* Kind Words From Real Founders */}
          <KindWords />
        </main>

        {/* Warm Studio Footer */}
        <WarmFooter onOpenChat={() => setChatOpen(true)} />

        {/* Friendly Coffee Chat Conversation Modal */}
        <FriendlyChatModal 
          isOpen={chatOpen} 
          onClose={() => setChatOpen(false)} 
        />

      </div>
    </SmoothScroll>
  );
}
