import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ComponentLibraryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ComponentLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-component-library',
                template: ``,
                styles: []
            },] },
];
/** @nocollapse */
ComponentLibraryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ItemComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-item',
                template: `<ng-content class='item'></ng-content>`,
                styles: [`.item{background:#add8e6}`]
            },] },
];
/** @nocollapse */
ItemComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ItemCollectionComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ItemCollectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-item-collection',
                template: `<div class='item-collection'>
  <div *ngIf="items!=undefined && items!=null">
    <div *ngFor="let item of items">
      <app-item>{{item.title}}</app-item>
    </div>
  </div>
  <div class="test-class" *ngIf="items==undefined || items==null">
    No items
  </div>
</div>

HELLO!`,
                styles: [`.item-collection{border:1px solid #c42727;color:green;background:#00f}`]
            },] },
];
/** @nocollapse */
ItemCollectionComponent.ctorParameters = () => [];
ItemCollectionComponent.propDecorators = {
    items: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ComponentLibraryModule {
}
ComponentLibraryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [ComponentLibraryComponent, ItemComponent, ItemCollectionComponent],
                exports: [ComponentLibraryComponent, ItemCollectionComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ItemViewModel {
    /**
     * Ctor
     * @param {?} title item title/heading content
     */
    constructor(title) {
        this.title = title;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// SCSS
//export * from '../../_vars.scss';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ComponentLibraryModule, ItemCollectionComponent, ItemViewModel, ComponentLibraryComponent as ɵa, ItemComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnQtbGlicmFyeS5jb21wb25lbnQudHMiLCJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiLCJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2l0ZW0tY29sbGVjdGlvbi9pdGVtLWNvbGxlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkubW9kdWxlLnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvdmlldy1tb2RlbHMvaXRlbS12aWV3LW1vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jb21wb25lbnQtbGlicmFyeScsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgY2xhc3M9J2l0ZW0nPjwvbmctY29udGVudD5gLFxyXG4gIHN0eWxlczogW2AuaXRlbXtiYWNrZ3JvdW5kOiNhZGQ4ZTZ9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1WaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9pdGVtLXZpZXctbW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaXRlbS1jb2xsZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J2l0ZW0tY29sbGVjdGlvbic+XHJcbiAgPGRpdiAqbmdJZj1cIml0ZW1zIT11bmRlZmluZWQgJiYgaXRlbXMhPW51bGxcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cclxuICAgICAgPGFwcC1pdGVtPnt7aXRlbS50aXRsZX19PC9hcHAtaXRlbT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ0ZXN0LWNsYXNzXCIgKm5nSWY9XCJpdGVtcz09dW5kZWZpbmVkIHx8IGl0ZW1zPT1udWxsXCI+XHJcbiAgICBObyBpdGVtc1xyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbkhFTExPIWAsXHJcbiAgc3R5bGVzOiBbYC5pdGVtLWNvbGxlY3Rpb257Ym9yZGVyOjFweCBzb2xpZCAjYzQyNzI3O2NvbG9yOmdyZWVuO2JhY2tncm91bmQ6IzAwZn1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbUNvbGxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyBUT0RPOiBpcyB0aGlzIGdvb2QgY29tcG9uZW50IGRlc2lnbj8gRG9lc24ndCBmZWVsIHNvLi4uIFVzaW5nIGEgVk0sIHdoaWNoIGlzIHVzZWQgYnkgY29tcG9uZW50XHJcbiAgLy8gLi5ob3dldmVyIHBhc3NpbmcgY29tcG9uZW50cyBhcm91bmQgc2VlbXMgYXdrd2FyZCBhbmQgdW5uZWNlc3NhcnksIG1vc3RseSBkdWUgdG8gYmVpbmcgdW5hYmxlXHJcbiAgLy8gdG8gdXNlIGN0b3JzXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaXRlbXM6IEl0ZW1WaWV3TW9kZWxbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudExpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC1saWJyYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0tY29sbGVjdGlvbi9pdGVtLWNvbGxlY3Rpb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50LCBJdGVtQ29tcG9uZW50LCBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NvbXBvbmVudExpYnJhcnlDb21wb25lbnQsIEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TGlicmFyeU1vZHVsZSB7IH1cclxuIiwiZXhwb3J0IGNsYXNzIEl0ZW1WaWV3TW9kZWwge1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqQ3RvclxyXG4gICAgICogQHBhcmFtIHRpdGxlIGl0ZW0gdGl0bGUvaGVhZGluZyBjb250ZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQVVFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBRVA7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLEVBQUUsRUFBRTthQUNYOzs7Ozs7Ozs7QUNQRDtJQVNFO0tBQ0M7Ozs7SUFFRCxRQUFRO0tBQ1A7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsTUFBTSxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDdEM7Ozs7Ozs7OztBQ05EO0lBMkJFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7OztPQVdMO2dCQUNMLE1BQU0sRUFBRSxDQUFDLHdFQUF3RSxDQUFDO2FBQ25GOzs7OztvQkFNRSxLQUFLOzs7Ozs7O0FDeEJSOzs7WUFNQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixDQUFDO2dCQUNqRixPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSx1QkFBdUIsQ0FBQzthQUM5RDs7Ozs7OztBQ1pEOzs7OztJQU1JLFlBQVksS0FBYTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0QjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OyJ9