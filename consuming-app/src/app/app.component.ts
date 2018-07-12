import { Component } from '@angular/core';
import { ItemViewModel } from 'component-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: ItemViewModel[] = [
    new ItemViewModel('Item 1'),
    new ItemViewModel('Item 2'),
    new ItemViewModel('Item 3')
  ];
}
