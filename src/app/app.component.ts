import { Component } from '@angular/core';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
