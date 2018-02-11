import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.scss']
})
export class ProjectDisplayComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
