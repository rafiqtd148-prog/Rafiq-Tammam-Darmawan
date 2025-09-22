import React from 'react';
import { sampleReleases } from '../data/mockData';
import { Release } from '../types';

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

const ReleaseItem = ({ release }: { release: Release }) => (
  <div className="flex justify-between items-center p-3 rounded-lg bg-white/60 shadow-sm">
    <div>
      <div className="font-bold text-space-text">{release.title}</div>
      <div className="text-sm text-space-muted">{release.artist}</div>
    </div>
    <div className="text-sm text-space-muted">{formatDate(release.date)}</div>
  </div>
);

const ReleasesSection = () => {
  return (
    <Card id="releases" className="my-4">
      <h3 className="text-xl font-bold mb-4 text-space-text">📅 Jadwal Perilisan Lagu Baru</h3>
      <div className="space-y-2.5 mt-3">
        {sampleReleases.map(r => <ReleaseItem key={r.id} release={r} />)}
      </div>
    </Card>
  );
};

export default ReleasesSection;
