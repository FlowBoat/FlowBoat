import { Member } from './member';

export interface Post {
  title: string;
  author: Member;
  img: string;
  date: string;
  blurb: string;
  content: string;
  link: string;
}
