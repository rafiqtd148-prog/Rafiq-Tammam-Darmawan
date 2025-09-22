import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';

// Fix: Update Card component to accept and forward all div props, including 'id', and handle undefined className.
const Card = ({ children, className, ...props }: React.ComponentProps<'div'>) => (
  <div {...props} className={`bg-space-card p-4 rounded-xl shadow-lg ${className || ''}`}>
    {children}
  </div>
);

const LiveSection = () => {
  const [chatLog, setChatLog] = useState<ChatMessage[]>([{ user: 'System', text: 'Selamat datang di live chat Harmony Space!' }]);
  const [chatInput, setChatInput] = useState('');
  const [isLive, setIsLive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const chatIntervalRef = useRef<number | null>(null);
  const chatLogRef = useRef<HTMLDivElement>(null);

  const appendChat = (msg: ChatMessage) => {
    setChatLog(prev => [...prev, msg]);
  };
  
  const getRandomPastel = () => {
      const colors = ['text-space-pastel-1', 'text-space-pastel-2', 'text-space-pastel-3'];
      return colors[Math.floor(Math.random()*colors.length)];
  }

  const startMockLive = () => {
    if (isLive) return;
    setIsLive(true);
    videoRef.current?.play().catch(() => {});
    appendChat({ user: 'System', text: '🔴 Live dimulai — selamat menonton!' });
    chatIntervalRef.current = window.setInterval(() => {
      const msgs = ['Keren!', '🔥', 'Love this!', 'Where is the merch?', 'Encore!'];
      const m = msgs[Math.floor(Math.random() * msgs.length)];
      appendChat({ user: `fan${Math.floor(Math.random() * 999)}`, text: m });
    }, 1800);
  };

  const stopMockLive = () => {
    setIsLive(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    appendChat({ user: 'System', text: '🔴 Live berhenti.' });
    if (chatIntervalRef.current) {
      clearInterval(chatIntervalRef.current);
      chatIntervalRef.current = null;
    }
  };

  const sendChat = () => {
    if (!chatInput.trim()) return;
    appendChat({ user: 'You', text: chatInput });
    setChatInput('');
  };

  useEffect(() => {
    if (chatLogRef.current) {
        chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatLog]);
  
  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (chatIntervalRef.current) {
        clearInterval(chatIntervalRef.current);
      }
    }
  }, []);

  return (
    <Card id="live" className="my-4">
      <h3 className="text-xl font-bold mb-4 text-space-text">🎥 Live Streaming</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-3">
        <div className="lg:col-span-2">
          <div className="bg-black rounded-lg h-64 md:h-96 flex items-center justify-center text-white overflow-hidden">
            <video ref={videoRef} controls playsInline className="w-full h-full object-cover">
              <source src="/sample-live.mp4" type="video/mp4" />
              Browser Anda tidak mendukung video.
            </video>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            <button onClick={startMockLive} className="bg-space-pastel-1 border-none px-4 py-2 rounded-lg text-blue-900 font-bold cursor-pointer hover:opacity-90 transition-opacity">Mulai Live (mock)</button>
            <button onClick={stopMockLive} className="bg-transparent border-2 border-space-text/10 px-4 py-2 rounded-lg text-space-text cursor-pointer hover:bg-space-text/5 transition-colors">Hentikan Live (mock)</button>
            <a href="/sample-live.mp4" download className="inline-flex items-center gap-2 bg-transparent border-2 border-space-text/10 px-4 py-2 rounded-lg text-space-text cursor-pointer hover:bg-space-text/5 transition-colors no-underline">
              <span>⬇️</span> Download Replay
            </a>
          </div>
        </div>
        <aside className="bg-white p-3 rounded-lg h-96 flex flex-col">
          <div className="font-bold text-space-text mb-2">Live Chat</div>
          <div ref={chatLogRef} className="flex-1 overflow-y-auto pr-2 space-y-2 text-sm">
            {chatLog.map((msg, i) => (
              <div key={i}>
                <strong className={getRandomPastel()}>{msg.user}</strong>: <span className="text-space-muted">{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <input 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendChat()}
              placeholder="Tulis pesan..." 
              className="flex-1 px-3 py-2 rounded-lg border border-space-text/10 bg-white focus:ring-2 focus:ring-space-pastel-1 focus:outline-none"
            />
            <button onClick={sendChat} className="bg-space-pastel-1 border-none px-4 py-2 rounded-lg text-blue-900 font-bold cursor-pointer hover:opacity-90 transition-opacity">
              Kirim
            </button>
          </div>
        </aside>
      </div>
    </Card>
  );
};

export default LiveSection;
