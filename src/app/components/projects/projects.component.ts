import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Array<Project>;

  constructor() { }

  ngOnInit() {
  }

}
