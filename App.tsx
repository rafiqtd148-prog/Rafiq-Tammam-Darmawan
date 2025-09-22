
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChartSection from './components/ChartSection';
import FeedSection from './components/FeedSection';
import LiveSection from './components/LiveSection';
import NewsSection from './components/NewsSection';
import ReleasesSection from './components/ReleasesSection';
import SingerOfTheYearSection from './components/SingerOfTheYearSection';
import ConcertScheduleSection from './components/ConcertScheduleSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-space-bg text-space-text font-sans leading-normal">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-6">
        <Hero />
        <div className="space-y-4 md:space-y-6">
          <ChartSection />
          <FeedSection />
          <LiveSection />
          <NewsSection />
          <ReleasesSection />
          <SingerOfTheYearSection />
          <ConcertScheduleSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
