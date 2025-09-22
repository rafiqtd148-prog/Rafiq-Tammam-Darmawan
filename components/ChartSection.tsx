import React from 'react';
import { sampleSongs } from '../data/mockData';
import { Song } from '../types';

// Fix: Update Card component to accept and forward all div props, including 'id', and handle undefined className.
const Card = ({ children, className, ...props }: React.ComponentProps<'div'>) => (
  <div {...props} className={`bg-space-card p-4 rounded-xl shadow-lg ${className || ''}`}>
    {children}
  </div>
);

const ChartItem = ({ song, rank }: { song: Song; rank: number }) => (
  <div className="flex gap-3 items-center p-2.5 rounded-lg bg-gradient-to-r from-space-pastel-1/5 to-space-pastel-2/5">
    <div className="font-extrabold text-space-pastel-1 w-7 text-center text-xl">{rank}</div>
    <img src={song.img} alt={song.title} className="w-16 h-16 rounded-md object-cover" />
    <div className="flex-1">
      <div className="font-bold text-space-text">{song.title}</div>
      <div className="text-sm text-space-muted">{song.artist}</div>
      <div className="text-sm text-space-muted mt-1">Streams: {song.streams.toLocaleString('id')}</div>
    </div>
    <div className="w-20 text-right">
      <button 
        className="bg-space-pastel-1 border-none px-4 py-2 rounded-lg text-blue-900 font-bold cursor-pointer text-sm hover:opacity-90 transition-opacity"
        onClick={() => alert(`Playing preview of ${song.title}`)}
      >
        Play
      </button>
    </div>
  </div>
);

const ChartSection = () => {
  return (
    <Card className="my-4" id="chart">
      <h3 className="text-xl font-bold mb-4 text-space-text">🔥 Chart Lagu Terkini</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2.5 lg:col-span-2">
          {sampleSongs.map((song, i) => (
            <ChartItem key={song.id} song={song} rank={i + 1} />
          ))}
        </div>
        <div className="space-y-4">
            <Card>
                <h4 className="font-bold">Top 5 (Preview)</h4>
                <ol className="list-decimal list-inside mt-2 space-y-1 text-sm text-space-muted">
                    {sampleSongs.slice(0, 5).map(s => <li key={s.id} className="truncate">{s.title} — {s.artist}</li>)}
                </ol>
            </Card>
            <Card>
                <h4 className="font-bold">Trending Tags</h4>
                <div className="flex gap-2 flex-wrap mt-2">
                    {['#pop', '#indie', '#edm', '#newrelease'].map(tag => (
                        <span key={tag} className="inline-block px-3 py-1.5 rounded-full bg-space-text/5 text-space-text font-semibold text-sm">{tag}</span>
                    ))}
                </div>
            </Card>
        </div>
      </div>
    </Card>
  );
};

export default ChartSection;
