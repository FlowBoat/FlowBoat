import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crew-view',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() items: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
