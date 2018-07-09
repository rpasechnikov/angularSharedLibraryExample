/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ItemCollectionComponent {
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
  <div *ngIf="items==undefined || items==null">
    No items
  </div>
</div>`,
                styles: [`.item-collection{border:1px solid #000}`]
            },] },
];
/** @nocollapse */
ItemCollectionComponent.ctorParameters = () => [];
ItemCollectionComponent.propDecorators = {
    items: [{ type: Input }]
};
function ItemCollectionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ItemCollectionComponent.prototype.items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb2xsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBvbmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaXRlbS1jb2xsZWN0aW9uL2l0ZW0tY29sbGVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBaUJ6RCxNQUFNO0lBUUosaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7OztPQVNMO2dCQUNMLE1BQU0sRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2FBQ3BEOzs7OztvQkFNRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtVmlld01vZGVsIH0gZnJvbSAnY29tcG9uZW50LWxpYnJhcnkvbGliL3ZpZXctbW9kZWxzL2l0ZW0tdmlldy1tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1pdGVtLWNvbGxlY3Rpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J2l0ZW0tY29sbGVjdGlvbic+XG4gIDxkaXYgKm5nSWY9XCJpdGVtcyE9dW5kZWZpbmVkICYmIGl0ZW1zIT1udWxsXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgICAgPGFwcC1pdGVtPnt7aXRlbS50aXRsZX19PC9hcHAtaXRlbT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJpdGVtcz09dW5kZWZpbmVkIHx8IGl0ZW1zPT1udWxsXCI+XG4gICAgTm8gaXRlbXNcbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLml0ZW0tY29sbGVjdGlvbntib3JkZXI6MXB4IHNvbGlkICMwMDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvbGxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIFRPRE86IGlzIHRoaXMgZ29vZCBjb21wb25lbnQgZGVzaWduPyBEb2Vzbid0IGZlZWwgc28uLi4gVXNpbmcgYSBWTSwgd2hpY2ggaXMgdXNlZCBieSBjb21wb25lbnRcbiAgLy8gLi5ob3dldmVyIHBhc3NpbmcgY29tcG9uZW50cyBhcm91bmQgc2VlbXMgYXdrd2FyZCBhbmQgdW5uZWNlc3NhcnksIG1vc3RseSBkdWUgdG8gYmVpbmcgdW5hYmxlXG4gIC8vIHRvIHVzZSBjdG9yc1xuICBASW5wdXQoKVxuICBwdWJsaWMgaXRlbXM6IEl0ZW1WaWV3TW9kZWxbXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=