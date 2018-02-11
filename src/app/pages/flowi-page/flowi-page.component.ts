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

  constructor() { }

  ngOnInit() {
  }

}
