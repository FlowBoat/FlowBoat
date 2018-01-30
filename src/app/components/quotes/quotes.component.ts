import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  @Input() testimonials;

  constructor() { }

  ngOnInit() {
  }

}
