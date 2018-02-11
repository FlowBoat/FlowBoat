import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project';
import { Member, Role, School, SocialType } from '../../models/member';
import { Testimonial } from '../../models/testimonial';
import { Post } from '../../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Array<Project> = [
    {
      tags: [
        true,
        false,
        false,
        false
      ],
      img: 'assets/images/groups/FloWi.jpg',
      title: 'Flowi',
      desc: '',
      link: '#',
      logo: '',
      line: 'The smart advertising solution for dense city centres.'
    },
    {
      tags: [
        false,
        true,
        false,
        true
      ],
      img: 'assets/images/groups/BloomBud.jpg',
      title: 'BloomBud',
      desc: '',
      link: '#',
      logo: '',
      line: 'Working to integrate technology with plant life to bring about happy gardening'
    },
    {
      tags: [
        false,
        true,
        true,
        false
      ],
      img: 'assets/images/groups/smartwater.jpg',
      title: 'SmartWater',
      desc: '',
      logo: '',
      line: 'Helping users track their water usage through user friendly design'
    },
    {
      tags: [
        false,
        true,
        false,
        true
      ],
      img: 'assets/images/groups/iotstorm.jpg',
      title: 'IOTStorm',
      desc: '',
      link: '#',
      logo: '',
      line: 'Mass data analysis on micro scale weather patterns'
    },
    {
      tags: [
        false,
        false,
        false,
        true
      ],
      img: 'assets/images/logos/malarkey.jpg',
      title: 'Malarkey',
      desc: '',
      logo: '',
      line: 'Generative Adversarial Networks for finding Malarkey in tweets'
    },
    {
      tags: [
        false,
        false,
        false,
        false
      ],
      img: 'assets/images/logos/more.jpg',
      title: 'More projects on the way!',
      desc: '',
      logo: '',
      line: ''
    }
  ];

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
    },
    {
      name: 'Ethan Guo',
      img: 'assets/images/members/ethan-guo.jpg',
      age: 17,
      school: School.sjam,
      team: {
        name: 'Flowi',
        logo: 'assets/images/logos/flowi.jpg',
        img: 'assets/images/teams/flowi.jpg',
        link: '#'
      },
      role: Role.developer,
      tagline: '',
      desc: '',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Marina Ilyas',
      img: 'assets/images/members/marina-ilyas.jpg',
      age: 15,
      school: School.wci,
      team: {
        name: 'IOTStorm',
        logo: 'assets/images/logos/iotstorm.jpg',
        img: 'assets/images/teams/iotstorm.jpg',
        link: '#'
      },
      role: Role.projectManager,
      tagline: '\"Research is to see what everybody else has seen, and to think what nobody else has taught\" - Albert Szent-Gyorgi',
      desc: 'Hello, my name is Marina Ilyas, and I am currently attending Waterloo Collegiate Institute for grade 9. I play many sports ' +
      'outside of school, like basketball and soccer, as well as instruments. I play the violin, viola, drums, and piano. School is also' +
      ' a big portion of my life, and my favourite subjects are English and Science. I have always loved these subjects, and so flowboat' +
      ' seemed like an amazing program for me! It turned out that it really was a great experience from which I learned so much. Because' +
      ' I am in grade 9, and this program is for all high school students, I thought it would be a very difficult and stressing work' +
      ' environment, but thanks to our president, Adam Martinez, and vice-president, Atif Mahmud, this experience has been beyond' +
      ' fantastic! I urge everyone who is reading this to apply to this fabulous program, and I promise that you will learn so much,' +
      ' make new friends, and you will definitely use this knowledge in the outside world. ',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Andy Bao',
      img: 'assets/images/members/andy-bao.jpg',
      age: 17,
      school: School.wci,
      team: {
        name: 'IOTStorm',
        logo: 'assets/images/logos/iotstorm.jpg',
        img: 'assets/images/teams/iotstorm.jpg',
        link: '#'
      },
      role: Role.leadDev,
      tagline: 'A full-stack developer striving to bring tomorrow\'s technology into today\'s world.',
      desc: 'Andy Bao is a mobile and server application developer passionate about creating useful, practical products to improve people\'s lives. He especially loves integrating cutting edge technology with existing infrastructure to accelerate the adoption of new technology. Whether or not it\'s obsessing over every small detail or digging through bug report after bug report, Andy always makes sure to put the user experience above everything else. As a result, thousands of users launch his apps every day and many of his apps have racked up download counts in the hundred-thousands. Today he continues his mission to create great applications and services that users love!\n' +
      '\n' +
      'As an active contributor to open source, Andy releases most of his code for free, hoping to assist others in the development of great software. He is always looking to help out with any project, small or large.\n' +
      '\n' +
      'Outside of software development, Andy also loves to play tennis, badminton and swim.',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Alexander Kitaev',
      img: 'assets/images/members/alexander-kitaev.jpg',
      age: 17,
      school: School.wci,
      team: {
        name: 'IOTStorm',
        logo: 'assets/images/logos/iotstorm.jpg',
        img: 'assets/images/teams/iotstorm.jpg',
        link: '#'
      },
      role: Role.developer,
      tagline: 'Alexander Kitaev- a student on a quest to learn more about science, engineering, mathematics, computer software, and how to write good taglines.',
      desc: 'Alexander Kitaev is a passionate student with a wide range of interests both inside and outside the STEM fields. With many achievements and awards in mathematics, programming, and science competitions, Alex has distinguished himself as an exceptionally talented and motivated student. Alex hopes to obtain a career in aerospace or mechatronics engineering. Outside of the STEM fields, Alex\'s interests include music and linguistics.\n' +
      '\n' +
      'Respectfully,\n' +
      '\n' +
      'Alexander Kitaev',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Daniel Yu',
      img: 'assets/images/members/daniel-yu.jpg',
      age: 15,
      school: School.wci,
      team: {
        name: 'IOTStorm',
        logo: 'assets/images/logos/iotstorm.jpg',
        img: 'assets/images/teams/iotstorm.jpg',
        link: '#'
      },
      role: Role.dataAnalyist,
      tagline: 'I like computers, computer science, computer programming, and other things starting with “c”. Also oranges. Oranges are delicious.',
      desc: 'I am a grade 9 at Waterloo Collegiate Institute who is interested in mathematics and computer science. Among other things, I have created a primitive chess engine in Python 3. I am also fluent in Java, Javascript, and C++. After highschool I hope to go into CS, math, or medicine. At MIT Launch I am a developer for the IOTStorm group, where we create mini weather stations in order to raise awareness about global warming.',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Michael Lu',
      img: 'assets/images/members/michael-lu.jpg',
      age: 16,
      school: School.wci,
      team: {
        name: 'IOTStorm',
        logo: 'assets/images/logos/iotstorm.jpg',
        img: 'assets/images/teams/iotstorm.jpg',
        link: '#'
      },
      role: Role.marketing,
      tagline: 'Imagination is the key to innovation, innovation is the key to success. By logical deduction, imagination equals success. Keep on dreaming.',
      desc: 'Michael is an creative problem solver who works outside the container (because box is said too much). He likes to try new things and always enjoys meeting new people.\n' +
      '    He is a curious Grade 11 student at Waterloo Collegiate Institute (ON, Canada). His favorite subjects are Math, Science and Business. He participates in Math, Science and Business competitions annually, such as DECA, HOSA, COMC, CCC, etc...\n' +
      '    Last summer, he started his own company (sponsored by the Waterloo Region Small Business Centre) https://www.yuniktutoring.com/. He continues to learn and expand his knowledge about business. He recently competed in DECA’s EIB (Independent Business Plan) category.  \n' +
      '    Michael enjoys playing sports such as squash, volleyball, tennis, ping pong, etc… His favorite sport to play is basketball. Over the years, he has learned many life lessons from playing basketball at various teams and levels. This love he has for basketball has fueled him to give back to his community by volunteering his time to coach a team of younger children in his community basketball league.\n' +
      'One of Michael’s best experiences happened in Taiwan when he and his rep basketball team represented the city of Kitchener-Waterloo to play in the International Children’s Games at Taiwan. This unforgettable (memorable) experience has given new insight for exploring the world. From there, Michael has visited USA, France, Germany, Switzerland, Monaco, etc… (and the list continues).',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Vivian Tran',
      img: 'assets/images/members/vivian-tran.jpg',
      age: 16,
      school: School.wci,
      team: {
        name: 'Bloombud',
        logo: 'assets/images/logos/bloombud.jpg',
        img: 'assets/images/teams/bloombud.jpg',
        link: '#'
      },
      role: Role.marketing,
      tagline: 'Just your average empathetic egocentric searching for meaning.',
      desc: 'In all of my 15 years of existence, it’s always been imperative to me to find the meaning of my life. I was a curious kid growing up, constantly questioning the life of everything around me. I could always rely on science for an answer when it came to the existence of most things in life. However, when it came to humans, it became way more complex than what science could offer. \n' +
      'Thus, the start of my philosophical journey of finding my own meaning began. My time on Earth has been very limited so far. I still lack many of the monumental life experiences. But, at this point in my life, I find meaning in compassion. In a world where the range of one’s quality of life goes beyond my imagination, I believe as though it is my responsibility as a human to feel for other humans likewise. The feeling of helping others is one that is truly indescribable. It’s like a brief moment of pride and relief, knowing that your existence has been purposeful. \n' +
      'On the contrary, there’s also a part of me that is incredibly egocentric. I strive for success in all of my endeavours, and thus often forget about the well-being of others when I’m too focused on improving myself. As much as these two sides of me contradict each other, they ultimately make up who I am. \n' +
      'Finding a career that satisfies my needs to be both compassionate and self-seeking hasn’t been the easiest. The prospect of going into the field of business came about, and so that\'s where FlowBoat entered the picture. FlowBoat has given me the opportunity to explore my interests and adopt new skills along the way. I’ve learnt an abundance of what the business world is actually like by briefly being a part of it myself. It’s been an insightful learning opportunity that I am incredibly grateful for.',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Omar Atwa',
      img: 'assets/images/members/omar-atwa.jpg',
      age: 15,
      school: School.wci,
      team: {
        name: 'BloomBud',
        logo: 'assets/images/logos/bloombud.jpg',
        img: 'assets/images/teams/bloombud.jpg',
        link: '#'
      },
      role: Role.leadDev,
      tagline: '',
      desc: 'Hello, I\'m Omar Atwa. I\'m a high school student at Waterloo Collegiate Institute. I have a family of 5 (including my pet parrot). I love to develop and make things in my spare time. Since I was little I always wanted to invent stuff and make stuff to improve the world that we live in, that\'s how I started to develop different things my self. I also really enjoy to swim, actually I enjoy swimming so much that I have a part-time job as an aquatic assistant. Other things I like to do are playing video games, camping, hiking, playing squash, and many more things. I am currently one of the developers at FlowBoat. Being a part of the FlowBoat team has enabled me to bring my skills and passions that have been hiding inside of me, to the real world. Being a member of FlowBoat, I also have learned many things from different amazing people and I\'m certain people have also learned a thing or two from me. The FlowBoat team and I with strive to be the best, and construct a boat that will take us to a great future where all our work pays off. I hope FlowBoat in the near future, will grow and grow to something that I only could imagine in my dreams. I\'m really confident that FlowBoat will grow because I believe in the effort that every individual FlowBoat team member puts into there work to make the FlowBoat dream into a reality.',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Adeeb Mahmud',
      img: 'assets/images/members/adeeb-mahmud.jpg',
      age: 15,
      school: School.wci,
      team: {
        name: 'BloomBud',
        logo: 'assets/images/logos/bloombud.jpg',
        img: 'assets/images/teams/bloombud.jpg',
        link: '#'
      },
      role: Role.marketing,
      tagline: ' believe that with passion and effort, anyone can achieve anything and that\'s why I love working with people who love doing what they do.',
      desc: 'I believe that with passion and effort, anyone can achieve anything and that\'s why I love working with people who love doing what they do. Flowboat has given me the opportunity to do what I am passionate about with a large group of some of the region’s brightest minds. Being surrounded by over achievers in the city of Waterloo has definitely inspired me to try new things and to never shut out the opportunities which are given to me. Growing up, I have always reached for the top, although there were many bumps along the way and many more to come, I\'ve learned to keep moving forward. As Enzo Ferrari would say “What\'s behind you, doesn\'t matter”. Not only have I learned to keep looking forward but to also learn from my past mistakes and use them to my advantage. What keeps me going in through the day is definitely the 3000 some bagels that I’ve eaten over the years for breakfast, and the millions of bowls of cereal for whatever meal of the day. Some subject areas that peak my interest include renewable energy, computer science, as well as the medical field. Kind of all over the place if you ask me. I\'m not too sure what I want to do with my life just yet but hopefully that day is approaching very soon!\n',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'David Sun',
      img: 'assets/images/members/david-sun.jpg',
      age: 15,
      school: School.wci,
      team: {
        name: 'BloomBud',
        logo: 'assets/images/logos/bloombud.jpg',
        img: 'assets/images/teams/bloombud.jpg',
        link: '#'
      },
      role: Role.marketing,
      tagline: '',
      desc: '',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Anita Yang',
      img: 'assets/images/members/anita-yang.jpg',
      age: 17,
      school: School.wci,
      team: {
        name: 'BloomBud',
        logo: 'assets/images/logos/bloombud.jpg',
        img: 'assets/images/teams/bloombud.jpg',
        link: '#'
      },
      role: Role.developer,
      tagline: '',
      desc: '',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Angela Zhang',
      img: 'assets/images/members/angela-zhang.jpg',
      age: 17,
      school: School.wci,
      team: {
        name: 'SmartWater',
        logo: 'assets/images/logos/smartwater.jpg',
        img: 'assets/images/teams/smartwater.jpg',
        link: '#'
      },
      role: Role.operations,
      tagline: '',
      desc: '',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Rafael Campos-Gottardo',
      img: 'assets/images/members/rafael-campos-gottardo.jpg',
      age: 17,
      school: School.wci,
      team: {
        name: 'SmartWater',
        logo: 'assets/images/logos/smartwater.jpg',
        img: 'assets/images/teams/smartwater.jpg',
        link: '#'
      },
      role: Role.operations,
      tagline: '',
      desc: '',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Pesera Amarasekera',
      img: 'assets/images/members/pesera-amarasekera.jpg',
      age: 17,
      school: School.wci,
      team: {
        name: 'SmartWater',
        logo: 'assets/images/logos/smartwater.jpg',
        img: 'assets/images/teams/smartwater.jpg',
        link: '#'
      },
      role: Role.developer,
      tagline: '',
      desc: '',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Jack Bishop',
      img: 'assets/images/members/jack-bishop.jpg',
      age: 17,
      school: School.wci,
      team: {
        name: 'SmartWater',
        logo: 'assets/images/logos/smartwater.jpg',
        img: 'assets/images/teams/smartwater.jpg',
        link: '#'
      },
      role: Role.leadDev,
      tagline: '',
      desc: '',
      socials: [
      ],
      link: '#'
    },
    {
      name: 'Alex Liao',
      img: 'assets/images/members/alex-liao.jpg',
      age: 16,
      school: School.wci,
      team: {
        name: 'IOTStorm',
        logo: 'assets/images/logos/iotstorm.jpg',
        img: 'assets/images/teams/iotstorm.jpg',
        link: '#'
      },
      role: Role.leadDev,
      tagline: '',
      desc: '',
      socials: [
      ],
      link: '#'
    }
  ];

  memberGroups: Array<Array<Member>> = [
    [
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
    ],
    [
      {
        name: 'Ethan Guo',
        img: 'assets/images/members/ethan-guo.jpg',
        age: 17,
        school: School.sjam,
        team: {
          name: 'Flowi',
          logo: 'assets/images/logos/flowi.jpg',
          img: 'assets/images/teams/flowi.jpg',
          link: '#'
        },
        role: Role.developer,
        tagline: '',
        desc: '',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Marina Ilyas',
        img: 'assets/images/members/marina-ilyas.jpg',
        age: 15,
        school: School.wci,
        team: {
          name: 'IOTStorm',
          logo: 'assets/images/logos/iotstorm.jpg',
          img: 'assets/images/teams/iotstorm.jpg',
          link: '#'
        },
        role: Role.projectManager,
        tagline: '\"Research is to see what everybody else has seen, and to think what nobody else has taught\" - Albert Szent-Gyorgi',
        desc: 'Hello, my name is Marina Ilyas, and I am currently attending Waterloo Collegiate Institute for grade 9. I play many sports ' +
        'outside of school, like basketball and soccer, as well as instruments. I play the violin, viola, drums, and piano. School is also' +
        ' a big portion of my life, and my favourite subjects are English and Science. I have always loved these subjects, and so flowboat' +
        ' seemed like an amazing program for me! It turned out that it really was a great experience from which I learned so much. Because' +
        ' I am in grade 9, and this program is for all high school students, I thought it would be a very difficult and stressing work' +
        ' environment, but thanks to our president, Adam Martinez, and vice-president, Atif Mahmud, this experience has been beyond' +
        ' fantastic! I urge everyone who is reading this to apply to this fabulous program, and I promise that you will learn so much,' +
        ' make new friends, and you will definitely use this knowledge in the outside world. ',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Andy Bao',
        img: 'assets/images/members/andy-bao.jpg',
        age: 17,
        school: School.wci,
        team: {
          name: 'IOTStorm',
          logo: 'assets/images/logos/iotstorm.jpg',
          img: 'assets/images/teams/iotstorm.jpg',
          link: '#'
        },
        role: Role.leadDev,
        tagline: 'A full-stack developer striving to bring tomorrow\'s technology into today\'s world.',
        desc: 'Andy Bao is a mobile and server application developer passionate about creating useful, practical products to improve people\'s lives. He especially loves integrating cutting edge technology with existing infrastructure to accelerate the adoption of new technology. Whether or not it\'s obsessing over every small detail or digging through bug report after bug report, Andy always makes sure to put the user experience above everything else. As a result, thousands of users launch his apps every day and many of his apps have racked up download counts in the hundred-thousands. Today he continues his mission to create great applications and services that users love!\n' +
        '\n' +
        'As an active contributor to open source, Andy releases most of his code for free, hoping to assist others in the development of great software. He is always looking to help out with any project, small or large.\n' +
        '\n' +
        'Outside of software development, Andy also loves to play tennis, badminton and swim.',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Alexander Kitaev',
        img: 'assets/images/members/alexander-kitaev.jpg',
        age: 17,
        school: School.wci,
        team: {
          name: 'IOTStorm',
          logo: 'assets/images/logos/iotstorm.jpg',
          img: 'assets/images/teams/iotstorm.jpg',
          link: '#'
        },
        role: Role.developer,
        tagline: 'Alexander Kitaev- a student on a quest to learn more about science, engineering, mathematics, computer software, and how to write good taglines.',
        desc: 'Alexander Kitaev is a passionate student with a wide range of interests both inside and outside the STEM fields. With many achievements and awards in mathematics, programming, and science competitions, Alex has distinguished himself as an exceptionally talented and motivated student. Alex hopes to obtain a career in aerospace or mechatronics engineering. Outside of the STEM fields, Alex\'s interests include music and linguistics.\n' +
        '\n' +
        'Respectfully,\n' +
        '\n' +
        'Alexander Kitaev',
        socials: [
        ],
        link: '#'
      }
    ],
    [
      {
        name: 'Daniel Yu',
        img: 'assets/images/members/daniel-yu.jpg',
        age: 15,
        school: School.wci,
        team: {
          name: 'IOTStorm',
          logo: 'assets/images/logos/iotstorm.jpg',
          img: 'assets/images/teams/iotstorm.jpg',
          link: '#'
        },
        role: Role.dataAnalyist,
        tagline: 'I like computers, computer science, computer programming, and other things starting with “c”. Also oranges. Oranges are delicious.',
        desc: 'I am a grade 9 at Waterloo Collegiate Institute who is interested in mathematics and computer science. Among other things, I have created a primitive chess engine in Python 3. I am also fluent in Java, Javascript, and C++. After highschool I hope to go into CS, math, or medicine. At MIT Launch I am a developer for the IOTStorm group, where we create mini weather stations in order to raise awareness about global warming.',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Michael Lu',
        img: 'assets/images/members/michael-lu.jpg',
        age: 16,
        school: School.wci,
        team: {
          name: 'IOTStorm',
          logo: 'assets/images/logos/iotstorm.jpg',
          img: 'assets/images/teams/iotstorm.jpg',
          link: '#'
        },
        role: Role.marketing,
        tagline: 'Imagination is the key to innovation, innovation is the key to success. By logical deduction, imagination equals success. Keep on dreaming.',
        desc: 'Michael is an creative problem solver who works outside the container (because box is said too much). He likes to try new things and always enjoys meeting new people.\n' +
        '    He is a curious Grade 11 student at Waterloo Collegiate Institute (ON, Canada). His favorite subjects are Math, Science and Business. He participates in Math, Science and Business competitions annually, such as DECA, HOSA, COMC, CCC, etc...\n' +
        '    Last summer, he started his own company (sponsored by the Waterloo Region Small Business Centre) https://www.yuniktutoring.com/. He continues to learn and expand his knowledge about business. He recently competed in DECA’s EIB (Independent Business Plan) category.  \n' +
        '    Michael enjoys playing sports such as squash, volleyball, tennis, ping pong, etc… His favorite sport to play is basketball. Over the years, he has learned many life lessons from playing basketball at various teams and levels. This love he has for basketball has fueled him to give back to his community by volunteering his time to coach a team of younger children in his community basketball league.\n' +
        'One of Michael’s best experiences happened in Taiwan when he and his rep basketball team represented the city of Kitchener-Waterloo to play in the International Children’s Games at Taiwan. This unforgettable (memorable) experience has given new insight for exploring the world. From there, Michael has visited USA, France, Germany, Switzerland, Monaco, etc… (and the list continues).',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Vivian Tran',
        img: 'assets/images/members/vivian-tran.jpg',
        age: 16,
        school: School.wci,
        team: {
          name: 'Bloombud',
          logo: 'assets/images/logos/bloombud.jpg',
          img: 'assets/images/teams/bloombud.jpg',
          link: '#'
        },
        role: Role.marketing,
        tagline: 'Just your average empathetic egocentric searching for meaning.',
        desc: 'In all of my 15 years of existence, it’s always been imperative to me to find the meaning of my life. I was a curious kid growing up, constantly questioning the life of everything around me. I could always rely on science for an answer when it came to the existence of most things in life. However, when it came to humans, it became way more complex than what science could offer. \n' +
        'Thus, the start of my philosophical journey of finding my own meaning began. My time on Earth has been very limited so far. I still lack many of the monumental life experiences. But, at this point in my life, I find meaning in compassion. In a world where the range of one’s quality of life goes beyond my imagination, I believe as though it is my responsibility as a human to feel for other humans likewise. The feeling of helping others is one that is truly indescribable. It’s like a brief moment of pride and relief, knowing that your existence has been purposeful. \n' +
        'On the contrary, there’s also a part of me that is incredibly egocentric. I strive for success in all of my endeavours, and thus often forget about the well-being of others when I’m too focused on improving myself. As much as these two sides of me contradict each other, they ultimately make up who I am. \n' +
        'Finding a career that satisfies my needs to be both compassionate and self-seeking hasn’t been the easiest. The prospect of going into the field of business came about, and so that\'s where FlowBoat entered the picture. FlowBoat has given me the opportunity to explore my interests and adopt new skills along the way. I’ve learnt an abundance of what the business world is actually like by briefly being a part of it myself. It’s been an insightful learning opportunity that I am incredibly grateful for.',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Omar Atwa',
        img: 'assets/images/members/omar-atwa.jpg',
        age: 15,
        school: School.wci,
        team: {
          name: 'BloomBud',
          logo: 'assets/images/logos/bloombud.jpg',
          img: 'assets/images/teams/bloombud.jpg',
          link: '#'
        },
        role: Role.leadDev,
        tagline: '',
        desc: 'Hello, I\'m Omar Atwa. I\'m a high school student at Waterloo Collegiate Institute. I have a family of 5 (including my pet parrot). I love to develop and make things in my spare time. Since I was little I always wanted to invent stuff and make stuff to improve the world that we live in, that\'s how I started to develop different things my self. I also really enjoy to swim, actually I enjoy swimming so much that I have a part-time job as an aquatic assistant. Other things I like to do are playing video games, camping, hiking, playing squash, and many more things. I am currently one of the developers at FlowBoat. Being a part of the FlowBoat team has enabled me to bring my skills and passions that have been hiding inside of me, to the real world. Being a member of FlowBoat, I also have learned many things from different amazing people and I\'m certain people have also learned a thing or two from me. The FlowBoat team and I with strive to be the best, and construct a boat that will take us to a great future where all our work pays off. I hope FlowBoat in the near future, will grow and grow to something that I only could imagine in my dreams. I\'m really confident that FlowBoat will grow because I believe in the effort that every individual FlowBoat team member puts into there work to make the FlowBoat dream into a reality.',
        socials: [
        ],
        link: '#'
      }
    ],
    [
      {
        name: 'Adeeb Mahmud',
        img: 'assets/images/members/adeeb-mahmud.jpg',
        age: 15,
        school: School.wci,
        team: {
          name: 'BloomBud',
          logo: 'assets/images/logos/bloombud.jpg',
          img: 'assets/images/teams/bloombud.jpg',
          link: '#'
        },
        role: Role.marketing,
        tagline: '',
        desc: '',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'David Sun',
        img: 'assets/images/members/david-sun.jpg',
        age: 15,
        school: School.wci,
        team: {
          name: 'BloomBud',
          logo: 'assets/images/logos/bloombud.jpg',
          img: 'assets/images/teams/bloombud.jpg',
          link: '#'
        },
        role: Role.marketing,
        tagline: '',
        desc: '',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Anita Yang',
        img: 'assets/images/members/anita-yang.jpg',
        age: 17,
        school: School.wci,
        team: {
          name: 'BloomBud',
          logo: 'assets/images/logos/bloombud.jpg',
          img: 'assets/images/teams/bloombud.jpg',
          link: '#'
        },
        role: Role.developer,
        tagline: '',
        desc: '',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Angela Zhang',
        img: 'assets/images/members/angela-zhang.jpg',
        age: 17,
        school: School.wci,
        team: {
          name: 'SmartWater',
          logo: 'assets/images/logos/smartwater.jpg',
          img: 'assets/images/teams/smartwater.jpg',
          link: '#'
        },
        role: Role.operations,
        tagline: '',
        desc: '',
        socials: [
        ],
        link: '#'
      },
    ],
    [
      {
        name: 'Rafael Campos-Gottardo',
        img: 'assets/images/members/rafael-campos-gottardo.jpg',
        age: 17,
        school: School.wci,
        team: {
          name: 'SmartWater',
          logo: 'assets/images/logos/smartwater.jpg',
          img: 'assets/images/teams/smartwater.jpg',
          link: '#'
        },
        role: Role.operations,
        tagline: '',
        desc: '',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Pesera Amarasekera',
        img: 'assets/images/members/pesera-amarasekera.jpg',
        age: 17,
        school: School.wci,
        team: {
          name: 'SmartWater',
          logo: 'assets/images/logos/smartwater.jpg',
          img: 'assets/images/teams/smartwater.jpg',
          link: '#'
        },
        role: Role.developer,
        tagline: '',
        desc: '',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Jack Bishop',
        img: 'assets/images/members/jack-bishop.jpg',
        age: 17,
        school: School.wci,
        team: {
          name: 'SmartWater',
          logo: 'assets/images/logos/smartwater.jpg',
          img: 'assets/images/teams/smartwater.jpg',
          link: '#'
        },
        role: Role.leadDev,
        tagline: '',
        desc: '',
        socials: [
        ],
        link: '#'
      },
      {
        name: 'Alex Liao',
        img: 'assets/images/members/alex-liao.jpg',
        age: 16,
        school: School.wci,
        team: {
          name: 'IOTStorm',
          logo: 'assets/images/logos/iotstorm.jpg',
          img: 'assets/images/teams/iotstorm.jpg',
          link: '#'
        },
        role: Role.developer,
        tagline: '',
        desc: '',
        socials: [
        ],
        link: '#'
      }
    ]
  ];

  testimonials: Array<Testimonial> = [
    /*
    {
      content: 'What a great impact FlowBoat has made on my life!',
      author: 'John Doe',
      caption: 'The John Doe Company'
    },
    {
      content: 'What a great impact FlowBoat has made on my life!',
      author: 'John Doe',
      caption: 'The John Doe Company'
    },
    {
      content: 'What a great impact FlowBoat has made on my life!',
      author: 'John Doe',
      caption: 'The John Doe Company'
    }
    */
  ];

  posts: Array<Post> = [
    {
      title: 'It Begins: Waterloo’s New Era of Youth Entrepreneurs \n',
      author: this.members[1],
      img: 'assets/images/groups/Flowboat.jpg',
      date: '1 October',
      blurb: 'Waterloo has been known for many years to be the Silicon Valley of Canada. Ranked to be one of the worlds best tech startup cities...',
      content: 'Waterloo has been known for many years to be the Silicon Valley of Canada. Ranked to be one of the worlds best tech startup cities, it is not surprising to see the energy and innovation for technology. Opentext, Blackberry and Google all have offices around the city. 12 of the top 20 Ontario tech startup companies have origins in Waterloo. The University of Waterloo, along with its Velocity accelerator has provided financial and business support to make ideas come to life. Recently, this energy has caught on to a different, rather unexpected group of people -- high schoolers. There are many high schoolers in Waterloo, and surrounding areas like Kitchener and Guelph, who have taken an interest in technology. Now, for the first time in history, high school students in Waterloo Region have the resources and support to turn their passion into something real -- A startup company.\n' +
      'Today, a youth lead startup accelerator called Flowboat had its first meeting at the University of Waterloo.  A select group of students from Waterloo, Kitchener, and Guelph all came together with a united purpose. To use their tech and entrepreneurship skills to develop a startup of their own. \n' +
      '“This is not a regular high school club” explains Martinez, President and Co-founder of Flowboat, “Our aim is to create something real, meaningful, and novel”.\n' +
      'The club is supported by the MIT’s LaunchX program. This program gives Flowboat educational material, partners people with mentors, and gives members opportunity to pitch their Future startup’s to an international stage. \n' +
      '“This is truly a one of a kind experience you can not get anywhere else” says Mahmud, Vice President and co-founder of Flowboat.\n' +
      'It is exciting to see what this young and energetic group of youth entrepreneurs come up with this year. This post begins a long but rewarding journey of becoming a youth entrepreneur.\n',
      link: '/Post'
    }
    /*
    {
      title: 'Press release!',
      author: this.members[1],
      img: 'assets/images/post-2.jpg',
      date: '31 January',
      blurb: 'Lorem ipsum 130 characters more blah blah blah blah blah blah blah blah blah blah blah blah blah...',
      content: 'This is where the content of the post will go',
      link: '#'
    },
    {
      title: 'Our Trip to  New York',
      author: this.members[0],
      img: 'assets/images/post-3.jpg',
      date: '31 March',
      blurb: 'Lorem ipsum 130 characters more blah blah blah blah blah blah blah blah blah blah blah blah blah...',
      content: 'This is where the content of the post will go',
      link: '#'
    }
    */
  ];

  constructor() { }

  ngOnInit() {
  }

}
