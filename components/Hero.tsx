
import React from 'react';

const scrollTo = (selector: string) => {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1.5 rounded-full bg-space-text/5 text-space-text font-semibold text-sm">
    {children}
  </span>
);

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-4 items-center p-4 md:p-8 rounded-2xl my-4 bg-gradient-to-b from-space-pastel-1/10 to-space-pastel-2/5 shadow-lg">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-space-text">Rasakan Konser di Rumahmu</h1>
        <p className="mt-2 text-space-muted text-lg">
          Streaming konser berkualitas, interaksi live, dan komunitas penggemar. Semua di Harmony Space.
        </p>
        <div className="mt-6 flex gap-3">
          <button className="bg-space-pastel-1 border-none px-4 py-2.5 rounded-lg text-blue-900 font-bold cursor-pointer hover:opacity-90 transition-opacity" onClick={() => scrollTo('#feed')}>
            Lihat Aktivitas
          </button>
          <button className="bg-transparent border-2 border-space-text/10 px-4 py-2.5 rounded-lg text-space-text cursor-pointer hover:bg-space-text/5 transition-colors">
            Chart Terkini
          </button>
        </div>

        <div className="mt-4 flex gap-3 flex-wrap">
          <Pill>Live Chat</Pill>
          <Pill>Download Replay</Pill>
          <Pill>VIP Packages</Pill>
        </div>
      </div>

      <aside className="w-full lg:w-96 bg-white/95 p-3 rounded-xl backdrop-blur-sm shrink-0">
        <div className="flex gap-3 items-center">
          <img src="https://picsum.photos/seed/artist/200/200" alt="artist" className="w-20 h-20 rounded-lg object-cover" />
          <div>
            <div className="font-extrabold text-space-text">Live Sekarang — Rina Nova</div>
            <div className="text-sm text-space-muted">12,345 penonton</div>
            <div className="mt-2">
              <button className="bg-space-pastel-1 border-none px-4 py-2 rounded-lg text-blue-900 font-bold cursor-pointer text-sm hover:opacity-90 transition-opacity" onClick={() => scrollTo('#live')}>
                Tonton
              </button>
            </div>
          </div>
        </div>

        <hr className="my-3 border-none border-t border-dashed border-space-text/10" />

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="font-bold text-space-text">Upcoming</div>
            <div className="text-sm text-space-muted">3 events</div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="flex-1 bg-gradient-to-b from-space-pastel-1/20 to-transparent p-2 rounded-lg">
              <div className="font-bold text-sm">Konser B</div>
              <div className="text-xs text-space-muted">25 Nov 2025</div>
            </div>
            <div className="flex-1 bg-gradient-to-b from-space-pastel-2/10 to-transparent p-2 rounded-lg">
              <div className="font-bold text-sm">Konser C</div>
              <div className="text-xs text-space-muted">05 Des 2025</div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
