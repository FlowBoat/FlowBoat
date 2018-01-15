import { Component, Input, OnInit } from '@angular/core';

import { Member } from '../../../models/member';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() member: Member;

  constructor() { }

  ngOnInit() {
  }

}
