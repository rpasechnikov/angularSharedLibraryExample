import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-collection',
  templateUrl: './item-collection.component.html',
  styleUrls: ['./item-collection.component.css']
})
export class ItemCollectionComponent implements OnInit {

  // TODO: is this good component design? Doesn't feel so...
  @Input()
  public itemHeadings: string[];

  constructor() { }

  ngOnInit() {
  }
}
