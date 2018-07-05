import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryComponent } from './component-library.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentLibraryComponent],
  exports: [ComponentLibraryComponent]
})
export class ComponentLibraryModule { }
