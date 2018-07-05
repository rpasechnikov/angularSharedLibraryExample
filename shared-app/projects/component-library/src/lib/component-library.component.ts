import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-component-library',
  template: `
    <p *ngFor="let item of items">
      {{item}}
    </p>
  `,
  styles: []
})
export class ComponentLibraryComponent implements OnInit {

  public items: string[] = ['1', '2', '3'];

  constructor() { }

  ngOnInit() {
  }

}
