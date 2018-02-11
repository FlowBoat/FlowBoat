import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-bloombud-page',
  templateUrl: './bloombud-page.component.html',
  styleUrls: ['./bloombud-page.component.scss']
})
export class BloombudPageComponent implements OnInit {

  project: Project =
    {
      tags: [
        false,
        true,
        false,
        true
      ],
      img: 'assets/images/groups/BloomBud.jpg',
      title: 'BloomBud',
      link: '#',
      logo: 'assets/images/logos/bloombud.png',
      desc: 'Here at BloomBud Corporation, we work towards integrating technology into the world of gardening in order to prolong plant life, while maintaining all of the many appeals that there are associated with caring for plants. We highly value friendly work environments and love working hand in hand with our customers to ensure the best experience for everyone. Our new product, BloomBud, ensures the success of plant life, so that just about anyone, beginner or seasoned gardener, can be more than satisfied with their gardens at home. BloomBud is your very own gardening assistant, capable of notifying you when ever your dear plants are in need. You will be notified whenever and wherever with our live notification BloomBud app, showing you all of the details to your plant’s health. Our product will make sure your plants stay in optimal condition by keeping them hydrated and happy. Our product works great both indoors and outdoors thanks to our free BloomBud wifi connection. BloomBud is practical, easy to use, and less expensive than anyone you can think of, thanks to our wonderful marketing and dev team. Moving forward, we hope to keep on developing our product accustomed to your needs.',
      line: 'Working to integrate technology with plant life to bring about happy gardening'
    };
  constructor() { }

  ngOnInit() {
  }

}
