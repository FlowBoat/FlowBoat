import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crew-view',
  templateUrl: './crew-view.component.html',
  styleUrls: ['./crew-view.component.scss']
})
export class CrewViewComponent implements OnInit {
  @Input() items: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
