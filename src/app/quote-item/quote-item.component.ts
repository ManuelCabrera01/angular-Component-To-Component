import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class QuoteItemComponent implements OnInit {
 @Input() quote: any;
  constructor() { }

  ngOnInit() {
  }

}
