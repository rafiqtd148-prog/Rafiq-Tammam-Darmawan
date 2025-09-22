import { Song, Post, News, Release, SingerCandidate, Concert } from '../types';

export const sampleSongs: Song[] = [
  {id:1,title:'Song A',artist:'Rina Nova',img:'https://picsum.photos/seed/song1/200/200',streams:145230},
  {id:2,title:'Song B',artist:'The Echoes',img:'https://picsum.photos/seed/song2/200/200',streams:120987},
  {id:3,title:'Neon Night',artist:'DJ Lumen',img:'https://picsum.photos/seed/song3/200/200',streams:98012},
  {id:4,title:'Moonlight',artist:'Saraswati',img:'https://picsum.photos/seed/song4/200/200',streams:76425},
  {id:5,title:'Afterhours',artist:'Midnight Bloom',img:'https://picsum.photos/seed/song5/200/200',streams:54321},
];

export const samplePosts: Post[] = [
  {id:101, artist:'Rina Nova', avatar:'https://picsum.photos/seed/a1/80/80', text:'Teaser konser minggu depan! Siap?', img:'https://picsum.photos/seed/p1/800/400', likes:120, comments: [{u:'fanA',t:'Cantik sekali!'}]},
  {id:102, artist:'The Echoes', avatar:'https://picsum.photos/seed/a2/80/80', text:'Rehearsal tadi malam 🔥', img:'https://picsum.photos/seed/p2/800/400', likes:86, comments: []},
  {id:103, artist:'DJ Lumen', avatar:'https://picsum.photos/seed/a3/80/80', text:'Drop baru di setlist nanti malam', img:'https://picsum.photos/seed/p3/800/400', likes:201, comments: [{u:'raver1',t:'Let\'s go!'}]},
];

export const sampleNews: News[] = [
  {id:201,title:'Miliaran Cinta Yovie Widianto – Andi Rianto Berkonser',img:'https://i.imgur.com/IRJ8SbE.jpeg',excerpt:"Enjoy Live Experience bersama ImaginAction akan menyelenggarakan konser berskala besar bertajuk 'Miliaran Cinta Yovie Widianto – Andi Rianto Berkonser' pada Minggu, 21 September 2025 di Plenary Hall, Jakarta Convention Center (JCC"},
  {id:202,title:'comeback mendatang',img:'https://i.imgur.com/nJPjhvI.jpeg',excerpt:"Hearts2Hearts akan comeback pada 20 oktober mendatang dengan mini album berjudul focus"},
  {id:203,title:'New song Pretty Please!',img:'https://i.imgur.com/bEvVDQ2.jpeg',excerpt:"Lagu baru Hearts 2 Hearts berjudul 'Pretty Please' akan rilis pada 24 Oktober dan telah diajukan oleh KBS Broadcasting Standards"},
];

export const sampleReleases: Release[] = [
  {id:301,artist:'Hearts 2 Hearts',title:'Mini Album: Focus',date:'2025-10-20'},
  {id:302,artist:'The Echoes',title:'EP: Sunset Session',date:'2025-11-01'},
  {id:303,artist:'DJ Lumen',title:'Remix Pack',date:'2025-12-05'},
];

export const singerCandidates: SingerCandidate[] = [
  {id:'s1',name:'Rina Nova',img:'https://picsum.photos/seed/s1/200/200'},
  {id:'s2',name:'The Echoes',img:'https://picsum.photos/seed/s2/200/200'},
  {id:'s3',name:'DJ Lumen',img:'https://picsum.photos/seed/s3/200/200'},
  {id:'s4',name:'Saraswati',img:'https://picsum.photos/seed/s4/200/200'},
];

export const concerts: Concert[] = [
  {id:401,title:'Rina Nova — Live in Jakarta',date:'2025-10-12',venue:'Online • Jakarta',lineup:['Rina Nova'],tickets:'Rp199.000',recording:'https://i.imgur.com/8JpHZZD.mp4'},
  {id:402,title:'The Echoes — Sunset Session',date:'2025-11-25',venue:'Online',lineup:['The Echoes','Midnight Bloom'],tickets:'Rp99.000',recording:'/sample-echoes.mp4'},
  {id:403,title:'DJ Lumen — Neon Night',date:'2025-12-05',venue:'Online • Rave Stage',lineup:['DJ Lumen'],tickets:'Rp149.000',recording:'/sample-lumen.mp4'},
];