import React, { useState, useEffect } from 'react';
import { singerCandidates } from '../data/mockData';

// Fix: Update Card component to accept and forward all div props, including 'id', and handle undefined className.
const Card = ({ children, className, ...props }: React.ComponentProps<'div'>) => (
  <div {...props} className={`bg-space-card p-4 rounded-xl shadow-lg ${className || ''}`}>
    {children}
  </div>
);

const getVotes = (): Record<string, number> => {
  try {
    return JSON.parse(localStorage.getItem('hs_votes') || '{}');
  } catch (e) {
    return {};
  }
};

const saveVotes = (obj: Record<string, number>) => {
  localStorage.setItem('hs_votes', JSON.stringify(obj));
};

const SingerOfTheYearSection = () => {
  const [votes, setVotes] = useState<Record<string, number>>({});

  useEffect(() => {
    setVotes(getVotes());
  }, []);

  const handleVote = (candidateId: string) => {
    const hasVoted = localStorage.getItem('hs_voted_user');
    if (hasVoted) {
      if (!window.confirm('Kamu sudah pernah vote sebelumnya. Tetap tambah vote? (demo)')) return;
    }
    
    const newVotes = { ...votes };
    newVotes[candidateId] = (newVotes[candidateId] || 0) + 1;
    setVotes(newVotes);
    saveVotes(newVotes);
    localStorage.setItem('hs_voted_user', new Date().toISOString());
    alert('Terima kasih sudah vote! 🎉');
  };

  return (
    <Card id="singer" className="my-4">
      <h3 className="text-xl font-bold text-space-text">🏆 Singer of the Year — Harmony Space</h3>
      <p className="text-sm text-space-muted">Pilih penyanyi favoritmu. Voting tersimpan di browser (demo).</p>
      <div className="flex gap-4 flex-wrap mt-4 justify-center">
        {singerCandidates.map(c => (
          <div key={c.id} className="w-44 p-2.5 rounded-lg bg-white/90 text-center shadow-md">
            <img src={c.img} alt={c.name} className="w-full h-32 object-cover rounded-md" />
            <div className="font-extrabold mt-2 text-space-text">{c.name}</div>
            <div className="text-sm text-space-muted">{votes[c.id] || 0} votes</div>
            <div className="mt-2">
              <button 
                onClick={() => handleVote(c.id)}
                className="w-full bg-space-pastel-1 border-none px-4 py-2 rounded-lg text-blue-900 font-bold cursor-pointer hover:opacity-90 transition-opacity"
              >
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SingerOfTheYearSection;
