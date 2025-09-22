import React from 'react';

const scrollTo = (selector: string) => {
  const el = document.querySelector(selector);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth' });
};

const Header = () => {
  const navLinks = [
    { href: '#chart', label: 'Chart' },
    { href: '#feed', label: 'Aktivitas' },
    { href: '#live', label: 'Live' },
    { href: '#news', label: 'Berita' },
    { href: '#releases', label: 'Rilis' },
    { href: '#singer', label: 'Singer' },
    { href: '#concerts', label: 'Konser' },
  ];

  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-space-pastel-1 via-space-pastel-2 to-space-pastel-3 shadow-lg m-4 text-white">
      <div className="flex items-center gap-3">
        <img src="https://i.imgur.com/vE84117.png" alt="Harmony Space Logo" className="h-14 w-14 rounded-xl" />
        <div>
          <div className="font-bold text-lg">Harmony Space</div>
          <div className="text-xs text-white/90">Your Concert, Your Space, Your Harmony</div>
        </div>
      </div>

      <nav aria-label="main" className="hidden lg:flex gap-1 items-center">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="font-semibold px-3 py-2 rounded-lg opacity-95 hover:bg-white/10 transition-colors">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <div className="app-badges flex items-center gap-2">
          <a href="#" title="Download on Play Store">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
          </a>
          <a href="#" title="Download on App Store">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8" />
          </a>
        </div>
        <button className="bg-white text-space-text px-3 py-2 rounded-lg font-bold shadow-sm hover:bg-white/90 transition-colors" onClick={() => scrollTo('#live')}>
          Tonton Live
        </button>
      </div>
    </header>
  );
};

export default Header;