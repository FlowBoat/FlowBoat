export enum SocialType {
  facebook = 'Facebook',
  twitter = 'Twitter',
  youtube = 'Youtube',
  instagram = 'Instagram',
  website = 'Website',
  linkedin = 'LinkedIn',
  github = 'Github'
}

export enum Role {
  CEO = 'CEO',
  projectManager = 'Project Manager',
  CCO = 'CCO',
  leadDev = 'Lead Developer',
  developer = 'Developer',
  marketing = 'Marketing',
  operations = 'Business Operations',
  dataAnalyist = 'Data Analyst'
}

export enum School {
  wci = 'Waterloo Collegiate Institute',
  sjam = 'Sir John A Macdonald',
  ccvi = 'Centennial Collegiate Vocational Institute'
}

export interface Team {
  name: string;
  logo: string;
  img: string;
  link: string;
}

export interface Social {
  type: SocialType;
  icon: string;
  link: string; // FontAwesome code ie. "fa fa-facebook"
}

export interface Member {
  name: string;
  img: string;
  age: number;
  school: School;
  team: Team;
  role: Role;
  tagline: string;
  desc: string;
  socials: Array<Social>;
  link: string;
}
