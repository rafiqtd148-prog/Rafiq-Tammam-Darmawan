
export interface Song {
  id: number;
  title: string;
  artist: string;
  img: string;
  streams: number;
}

export interface PostComment {
  u: string;
  t: string;
}

export interface Post {
  id: number;
  artist: string;
  avatar: string;
  text: string;
  img: string;
  likes: number;
  comments: PostComment[];
}

export interface News {
  id: number;
  title: string;
  img: string;
  excerpt: string;
}

export interface Release {
  id: number;
  artist: string;
  title: string;
  date: string;
}

export interface SingerCandidate {
  id: string;
  name: string;
  img: string;
}

export interface Concert {
  id: number;
  title: string;
  date: string;
  venue: string;
  lineup: string[];
  tickets: string;
  recording: string;
}

export interface ChatMessage {
  user: string;
  text: string;
}
