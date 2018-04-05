import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable()
export class PostService {
  activePost: Post;

  constructor() { }

  setPost(post: Post) {
    this.activePost = post;
  }

  get post(): Post {
    return this.activePost;
  }
}
