import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { Member, Role, School } from '../../models/member';
import { PostService } from '../../services/post.service';

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
      role: Role.CCO,
      tagline: 'If I could be a bacteria, I want to be an E. coli strain',
      desc: 'Adam Martinez is currently a grade 10 high school student in Waterloo, Canada. His current areas of interest and research are in molecular biology, biotechnology, and mathematics. Adam is a co-founder and manager at Flowi, and the Club President of the LaunchX program. He has presented his projects and research at several national and international events, including the Intel International Science and Engineering Fair (Team Canada), BioTEC Conference, AstraZeneca, and the Canada-Wide Science Fair, achieving top honors. Adam enjoys problem based learning, and is excited to be working with Flowboat this year.',
      socials: [
      ],
      link: '#'
    };

  post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.post = this.postService.post;
    this.post.author = this.adam;
  }

}
