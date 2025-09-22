import React from 'react';
import { sampleNews } from '../data/mockData';
import { News } from '../types';

// Fix: Update Card component to accept and forward all div props, including 'id', and handle undefined className.
const Card = ({ children, className, ...props }: React.ComponentProps<'div'>) => (
  <div {...props} className={`bg-space-card p-4 rounded-xl shadow-lg ${className || ''}`}>
    {children}
  </div>
);

const NewsCard = ({ news }: { news: News }) => (
  <Card className="hover:shadow-xl transition-shadow cursor-pointer">
    <img src={news.img} alt={news.title} className="w-full h-40 object-cover rounded-lg mb-3" />
    <div className="font-bold text-space-text">{news.title}</div>
    <div className="text-sm text-space-muted mt-1.5">{news.excerpt}</div>
  </Card>
);

const NewsSection = () => {
  return (
    <Card id="news" className="my-4">
      <h3 className="text-xl font-bold mb-4 text-space-text">📰 Berita Dunia Musik</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
        {sampleNews.map(n => <NewsCard key={n.id} news={n} />)}
      </div>
    </Card>
  );
};

export default NewsSection;
