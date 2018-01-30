import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects;

  constructor() { }

  ngOnInit() {
  }

  getTags(project) {
    return {
      'fintech': project.tags[0] === true,
      'greentech': project.tags[1] === true,
      'healthtech': project.tags[2] === true,
      'data': project.tags[3] === true
    };
  }

}
