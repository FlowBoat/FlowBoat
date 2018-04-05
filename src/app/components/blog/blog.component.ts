import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() posts;

  constructor(private router: Router, private postService: PostService) {
  }

  ngOnInit() {
  }

  goTo(post: Post) {
    this.postService.setPost(post);
    this.router.navigate([post.link]);
  }

}
