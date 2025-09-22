
import React, { useState } from 'react';
import { samplePosts as initialPosts } from '../data/mockData';
import { Post as PostType, PostComment } from '../types';

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-space-card p-4 rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);


const Post = ({ post: initialPost }: { post: PostType }) => {
  const [post, setPost] = useState(initialPost);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    setPost(prevPost => ({
      ...prevPost,
      likes: isLiked ? prevPost.likes - 1 : prevPost.likes + 1
    }));
    setIsLiked(!isLiked);
  };

  const handleAddComment = () => {
    if (!commentText.trim()) {
      alert('Tulis komentar dulu 😉');
      return;
    }
    const newComment: PostComment = { u: 'Kamu', t: commentText };
    setPost(prevPost => ({
      ...prevPost,
      comments: [...prevPost.comments, newComment]
    }));
    setCommentText('');
  };

  const sharePost = () => {
    const url = `${window.location.href.split('#')[0]}#post-${post.id}`;
    navigator.clipboard?.writeText(url).then(
      () => alert('Link post disalin ke clipboard!'),
      () => alert(`Salin link: ${url}`)
    );
  };

  return (
    <Card className="mb-4">
      <div className="flex items-center gap-3">
        <img src={post.avatar} alt={post.artist} className="w-11 h-11 rounded-full object-cover" />
        <div>
          <div className="font-extrabold text-space-text">{post.artist}</div>
          <div className="text-sm text-space-muted">Posted just now</div>
        </div>
      </div>
      <p className="mt-3 text-space-text">{post.text}</p>
      <img src={post.img} className="w-full max-h-96 rounded-lg object-cover mt-3" alt="post image" />
      <div className="flex gap-4 items-center mt-3">
        <button onClick={handleLike} className="flex items-center gap-1.5 font-bold text-space-muted hover:text-space-pastel-2 transition-colors">
          <span>❤️</span>
          <span className={`${isLiked ? 'text-space-pastel-2' : ''}`}>{post.likes}</span>
        </button>
        <button onClick={() => setShowComments(!showComments)} className="font-bold text-space-muted hover:text-space-text transition-colors">
          💬 Komentar ({post.comments.length})
        </button>
        <button onClick={sharePost} className="font-bold text-space-muted hover:text-space-text transition-colors">
          🔗 Share
        </button>
      </div>
      {showComments && (
        <div className="mt-4 border-t border-space-text/10 pt-4">
          <div className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-2">
            {post.comments.map((c, i) => (
              <div key={i} className="text-sm">
                <strong className="text-space-text">{c.u}</strong>: <span className="text-space-muted">{c.t}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input 
              placeholder="Tulis komentar..." 
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg border border-space-text/10 bg-white focus:ring-2 focus:ring-space-pastel-1 focus:outline-none"
            />
            <button onClick={handleAddComment} className="bg-space-pastel-1 border-none px-4 py-2 rounded-lg text-blue-900 font-bold cursor-pointer hover:opacity-90 transition-opacity">
              Kirim
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

const FeedSection = () => {
    const [posts] = useState(initialPosts);
    return (
        <div id="feed" className="my-4">
            <Card>
                <h3 className="text-xl font-bold mb-4 text-space-text">📢 Update Aktivitas Musisi</h3>
                <div className="mt-3">
                    {posts.map(post => <Post key={post.id} post={post} />)}
                </div>
            </Card>
        </div>
    )
}

export default FeedSection;
