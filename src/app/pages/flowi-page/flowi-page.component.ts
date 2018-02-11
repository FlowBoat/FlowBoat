import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { Member, Role, School, SocialType } from '../../models/member';

@Component({
  selector: 'app-flowi-page',
  templateUrl: './flowi-page.component.html',
  styleUrls: ['./flowi-page.component.scss']
})
export class FlowiPageComponent implements OnInit {
  project: Project =
    {
      tags: [
        true,
        false,
        false,
        false
      ],
      img: 'assets/images/groups/FloWi.jpg',
      title: 'Flowi',
      desc: 'Flowi is a startup in Waterloo which aims to make advertising more effective and eco friendly for locally run businesses. They aim to do this by developing a novel wifi service which gives everyday shoppers of uptown Waterloo access to free and reliable wifi. Local businesses to this region will then hop onto the network by paying a monthly fee in return for wifi in their stores, and for advertising through the system when potential consumers are near their store. This can take the form of an online coupon or simply their logo being shown when shoppers access the wifi service. This system hopes to replace other environmentally dangerous forms of local advertisement like printed sheets and coupon distributions with a more sustainable and effective method.\n',
      link: '#',
      logo: 'url(assets/images/logos/flowi.png)',
      line: 'The smart advertising solution for dense city centres.'
    };

  members: Array<Member> = [
    {
      name: 'Atif Mahmud',
      img: 'assets/images/members/atif-mahmud.jpg',
      age: 17,
      school: School.wci,
      team: {
        name: 'Flowi',
        logo: 'assets/images/logos/flowi.jpg',
        img: 'assets/images/teams/flowi.jpg',
        link: '#'
      },
      role: Role.CEO,
      tagline: 'Passion is the only way to find success in life. Follow yours or you\'ll fall behind',
      desc: 'Lorem Ipsum Delor blah blah blah',
      socials: [
        {
          type: SocialType.instagram,
          icon: 'fa fa-instagram',
          link: 'https://www.instagram.com/atif.a.mahmud/'
        },
        {
          type: SocialType.facebook,
          icon: 'fa fa-twitter',
          link: 'https://twitter.com/atif_mahmud101',
        },
        {
          type: SocialType.linkedin,
          icon: 'fa fa-linkedin',
          link: 'https://www.linkedin.com/in/atif-mahmud/'
        }
      ],
      link: '#'
    },
    {
      name: 'Adam Martinez',
      img: 'assets/images/members/adam-martinez.jpg',
      age: 16,
      school: School.wci,
      team: {
        name: 'Flowi',
        logo: 'assets/images/logos/flowi.jpg',
        img: 'assets/images/teams/flowi.jpg',
        link: '#'
      },
      role: Role.projectManager,
      tagline: 'If I could be a bacteria, I want to be an E. coli strain',
      desc: 'Adam Martinez is currently a grade 10 high school student in Waterloo, Canada. His current areas of interest and research are in molecular biology, biotechnology, and mathematics. Adam is a co-founder and manager at Flowi, and the Club President of the LaunchX program. He has presented his projects and research at several national and international events, including the Intel International Science and Engineering Fair (Team Canada), BioTEC Conference, AstraZeneca, and the Canada-Wide Science Fair, achieving top honors. Adam enjoys problem based learning, and is excited to be working with Flowboat this year.',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Advait Maybhate',
      img: 'assets/images/members/advait-maybhate.jpg',
      age: 17,
      school: School.sjam,
      team: {
        name: 'Flowi',
        logo: 'assets/images/logos/flowi.jpg',
        img: 'assets/images/teams/flowi.jpg',
        link: '#'
      },
      role: Role.developer,
      tagline: 'A thrill seeking adventurer exploring the land of computer science.',
      desc: 'My name is Advait Maybhate. I am a grade 12 student and a SHAD Fellow from Waterloo, Ontario. I am passionate about computer science, the natural sciences and mathematics. In the past, I have worked as a software intern at Christie Digital where I improved their camera calibration tools for projection mapping in addition to working on machine vision algorithms and developing system tests. My latest love is to compete in hackathons, recently winning the first place prize at WearHacks for my creation of an automated teleprompter for the Pebble smartwatch and the "Best Use of CockroachDB" at Hack the North. Last year, I co-founded JAMHacks, a 12 hour high school hackathon with over $3,700 in sponsorships. I also founded CMS (Computers, Math and Science) League, a 9 week program to teach 40 grade 6 students STEM topics such as fractals and combinatorics. I am the school champion of the Pascal, Cayley and Galois math contests. Additionally, I love to compete in long distance sports, specifically cross country running and nordic skiing, in which I was the 2016 regional champion. Currently, I am the president of science club and leader of computer science club at my school. I have won a silver medal and the Statistics Society of Canada Award at the Canada-Wide Science Fair for my bioinformatics project involving the creation of a novel algorithm that speeds up the process of DNA (deoxyribonucleic acid) motif discovery to link DNA patterns to biological functions.',
      socials: [
        {
          type: SocialType.facebook,
          icon: 'fa fa-facebook',
          link: 'https://www.facebook.com/AdvaitMaybhate'
        },
        {
          type: SocialType.twitter,
          icon: 'fa fa-twitter',
          link: 'https://twitter.com/AdvaitMaybhate'
        },
        {
          type: SocialType.instagram,
          icon: 'fa fa-instagram',
          link: 'https://www.instagram.com/advait.m'
        },
        {
          type: SocialType.github,
          icon: 'fa fa-github',
          link: 'https://github.com/Advait-M'
        }
      ],
      link: '#'
    },
    {
      name: 'Ally Cai',
      img: 'assets/images/members/ally-cai.jpg',
      age: 17,
      school: School.ccvi,
      team: {
        name: 'Flowi',
        logo: 'assets/images/logos/flowi.jpg',
        img: 'assets/images/teams/flowi.jpg',
        link: '#'
      },
      role: Role.operations,
      tagline: '',
      desc: 'Currently an enthusiastic and hardworking high school student, I aspire to be a professional working in the biotechnology and business industry. I value innovation, creativity, and community, and strive to live out my beliefs through the initiatives which I am presently involved with, and in my future ambitions. With experience in leadership, team management, and communication, I am always seeking new opportunities to apply my skills and passions in meaningful ways.',
      socials: [
      ],
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
