import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() data: object;

  constructor() { }

  ngOnInit() {
  }

  getOrientation() {
    return {
      'orient-right': this.data.orientation === 'right',
      'orient-left': this.data.orientation === 'left'
    };
  }

}
