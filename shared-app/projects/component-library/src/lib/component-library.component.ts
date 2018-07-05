import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-component-library',
  template: `
    <p>
      {{test}}
    </p>
  `,
  styles: []
})
export class ComponentLibraryComponent implements OnInit {

  public test: string = "Test String";

  constructor() { }

  ngOnInit() {
  }

}
