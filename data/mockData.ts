
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
  {id:201,title:'Festival Musim Panas Kembali',img:'https://picsum.photos/seed/n1/600/400',excerpt:'Festival musim panas akan menghadirkan 30 artis internasional...'},
  {id:202,title:'Interview eksklusif dengan Rina Nova',img:'https://picsum.photos/seed/n2/600/400',excerpt:'Rina berbicara tentang inspirasi album terbarunya...'},
  {id:203,title:'Tren live streaming tahun 2025',img:'https://picsum.photos/seed/n3/600/400',excerpt:'Bagaimana platform streaming mengubah industri musik...'},
];

export const sampleReleases: Release[] = [
  {id:301,artist:'Rina Nova',title:'Single: Heartbeat',date:'2025-10-12'},
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
  {id:401,title:'Rina Nova — Live in Jakarta',date:'2025-10-12',venue:'Online • Jakarta',lineup:['Rina Nova'],tickets:'Rp199.000',recording:'/sample-live.mp4'},
  {id:402,title:'The Echoes — Sunset Session',date:'2025-11-25',venue:'Online',lineup:['The Echoes','Midnight Bloom'],tickets:'Rp99.000',recording:'/sample-echoes.mp4'},
  {id:403,title:'DJ Lumen — Neon Night',date:'2025-12-05',venue:'Online • Rave Stage',lineup:['DJ Lumen'],tickets:'Rp149.000',recording:'/sample-lumen.mp4'},
];
