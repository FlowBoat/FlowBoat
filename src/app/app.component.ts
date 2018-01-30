import { Component } from '@angular/core';
import { Project } from './models/project';
import { Member, Role, School, SocialType } from './models/member';
import { Testimonial } from './models/testimonial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a&amp;nbsp;iaculis diam.
  projects: Array<Project> = [
    {
      tags: [
        true,
        false,
        false,
        false
      ],
      img: 'assets/images/work-1.jpg',
      title: 'Flowi',
      desc: 'The smart advertising solution for dense city centres.',
      link: '#'
    },
    {
      tags: [
        false,
        true,
        false,
        true
      ],
      img: 'assets/images/work-2.jpg',
      title: 'BloomBud',
      desc: 'Description for bloom bud',
      link: '#'
    },
    {
      tags: [
        false,
        true,
        true,
        false
      ],
      img: 'assets/images/work-3.jpg',
      title: 'SmartWater',
      desc: 'Description for smartwater',
      link: '#'
    },
    {
      tags: [
        false,
        true,
        false,
        true
      ],
      img: 'assets/images/work-4.jpg',
      title: 'Pocket weather stations',
      desc: 'Description for weather',
      link: '#'
    },
    {
      tags: [
        false,
        false,
        false,
        true
      ],
      img: 'assets/images/work-5.jpg',
      title: 'Malarkey',
      desc: 'Description for Malarkey',
      link: '#'
    },
    {
      tags: [
        false,
        false,
        false,
        false
      ],
      img: 'assets/images/work-6.jpg',
      title: 'More projects on the way!',
      desc: 'Description filler',
      link: '#'
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
          link: '#'
        }
        ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
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
          link: '#'
        }
      ],
      link: '#'
    },
  ];

  testimonials: Array<Testimonial> = [
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
  ];

}
