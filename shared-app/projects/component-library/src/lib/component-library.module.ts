import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryComponent } from './component-library.component';
import { ItemComponent } from './components/item/item.component';
import { ItemCollectionComponent } from './components/item-collection/item-collection.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentLibraryComponent, ItemComponent, ItemCollectionComponent],
  exports: [ComponentLibraryComponent, ItemCollectionComponent]
})
export class ComponentLibraryModule { }
