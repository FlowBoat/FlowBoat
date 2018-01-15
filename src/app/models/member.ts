import { Team } from './team';
import { Role } from './role';

export interface Member {
  name: string;
  tagline: string;
  bio: string;
  school: string;
  age: number;
  team: Team;
  role: Role;
  image?: string;
}
