import React from 'react';
import { concerts } from '../data/mockData';
import { Concert } from '../types';

// Fix: Update Card component to accept and forward all div props, including 'id', and handle undefined className.
const Card = ({ children, className, ...props }: React.ComponentProps<'div'>) => (
  <div {...props} className={`bg-space-card p-4 rounded-xl shadow-lg ${className || ''}`}>
    {children}
  </div>
);

const formatDate = (d: string) => {
  try {
    return new Date(d).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return d;
  }
};

const ConcertItem = ({ concert }: { concert: Concert }) => {
  const openEvent = () => {
    alert(
      `${concert.title}\nTanggal: ${formatDate(concert.date)}\nVenue: ${concert.venue}\nLineup: ${concert.lineup.join(', ')}\nHarga: ${concert.tickets}\n\nRekaman tersedia: ${concert.recording}`
    );
  };
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded-lg bg-white/60 shadow-sm gap-4">
      <div>
        <div className="font-extrabold text-space-text">{concert.title}</div>
        <div className="text-sm text-space-muted">{concert.venue} • {formatDate(concert.date)}</div>
        <div className="text-sm text-space-muted mt-1.5">Lineup: {concert.lineup.join(', ')}</div>
      </div>
      <div className="text-left sm:text-right w-full sm:w-auto shrink-0">
        <div className="font-extrabold text-space-text">{concert.tickets}</div>
        <div className="mt-2 flex flex-row sm:flex-col md:flex-row gap-2 items-stretch sm:items-end">
          <button onClick={openEvent} className="flex-1 sm:flex-none bg-space-pastel-1 border-none px-4 py-2 rounded-lg text-blue-900 font-bold cursor-pointer hover:opacity-90 transition-opacity">Detail & Beli</button>
          <a href={concert.recording} download className="flex-1 sm:flex-none no-underline text-center bg-transparent border-2 border-space-text/10 px-3 py-1.5 rounded-lg text-space-text cursor-pointer hover:bg-space-text/5 transition-colors">
            ⬇️ Download
          </a>
        </div>
      </div>
    </div>
  );
};

const ConcertScheduleSection = () => {
  return (
    <Card id="concerts" className="my-4">
      <h3 className="text-xl font-bold mb-4 text-space-text">🎫 Jadwal Konser Terdekat & Artis Pengisi</h3>
      <div className="space-y-2.5 mt-3">
        {concerts.map(c => <ConcertItem key={c.id} concert={c} />)}
      </div>
    </Card>
  );
};

export default ConcertScheduleSection;
