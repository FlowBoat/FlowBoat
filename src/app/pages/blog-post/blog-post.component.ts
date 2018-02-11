import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { Member, Role, School } from '../../models/member';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  adam: Member =
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
    };

  post: Post =
    {
      title: 'It Begins: Waterloo’s New Era of Youth Entrepreneurs \n',
      author: this.adam,
      img: 'assets/images/groups/Flowboat.jpg',
      date: '1 October',
      blurb: 'Waterloo has been known for many years to be the Silicon Valley of Canada. Ranked to be one of the worlds best tech startup cities...',
      content: 'Waterloo has been known for many years to be the Silicon Valley of Canada. Ranked to be one of the worlds best tech startup cities, it is not surprising to see the energy and innovation for technology. Opentext, Blackberry and Google all have offices around the city. 12 of the top 20 Ontario tech startup companies have origins in Waterloo. The University of Waterloo, along with its Velocity accelerator has provided financial and business support to make ideas come to life. Recently, this energy has caught on to a different, rather unexpected group of people -- high schoolers. There are many high schoolers in Waterloo, and surrounding areas like Kitchener and Guelph, who have taken an interest in technology. Now, for the first time in history, high school students in Waterloo Region have the resources and support to turn their passion into something real -- A startup company.\n' +
      'Today, a youth lead startup accelerator called Flowboat had its first meeting at the University of Waterloo.  A select group of students from Waterloo, Kitchener, and Guelph all came together with a united purpose. To use their tech and entrepreneurship skills to develop a startup of their own. \n' +
      '“This is not a regular high school club” explains Martinez, President and Co-founder of Flowboat, “Our aim is to create something real, meaningful, and novel”.\n' +
      'The club is supported by the MIT’s LaunchX program. This program gives Flowboat educational material, partners people with mentors, and gives members opportunity to pitch their Future startup’s to an international stage. \n' +
      '“This is truly a one of a kind experience you can not get anywhere else” says Mahmud, Vice President and co-founder of Flowboat.\n' +
      'It is exciting to see what this young and energetic group of youth entrepreneurs come up with this year. This post begins a long but rewarding journey of becoming a youth entrepreneur.\n',
      link: '#'
    };

  constructor() { }

  ngOnInit() {
  }

}
