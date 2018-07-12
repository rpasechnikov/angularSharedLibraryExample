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
function ItemCollectionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ItemCollectionComponent.prototype.items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb2xsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBvbmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaXRlbS1jb2xsZWN0aW9uL2l0ZW0tY29sbGVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUJ6RCxNQUFNO0lBUUosaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O09BV0w7Z0JBQ0wsTUFBTSxFQUFFLENBQUMsd0VBQXdFLENBQUM7YUFDbkY7Ozs7O29CQU1FLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2l0ZW0tdmlldy1tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pdGVtLWNvbGxlY3Rpb24nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0naXRlbS1jb2xsZWN0aW9uJz5cclxuICA8ZGl2ICpuZ0lmPVwiaXRlbXMhPXVuZGVmaW5lZCAmJiBpdGVtcyE9bnVsbFwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxyXG4gICAgICA8YXBwLWl0ZW0+e3tpdGVtLnRpdGxlfX08L2FwcC1pdGVtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInRlc3QtY2xhc3NcIiAqbmdJZj1cIml0ZW1zPT11bmRlZmluZWQgfHwgaXRlbXM9PW51bGxcIj5cclxuICAgIE5vIGl0ZW1zXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuSEVMTE8hYCxcclxuICBzdHlsZXM6IFtgLml0ZW0tY29sbGVjdGlvbntib3JkZXI6MXB4IHNvbGlkICNjNDI3Mjc7Y29sb3I6Z3JlZW47YmFja2dyb3VuZDojMDBmfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vIFRPRE86IGlzIHRoaXMgZ29vZCBjb21wb25lbnQgZGVzaWduPyBEb2Vzbid0IGZlZWwgc28uLi4gVXNpbmcgYSBWTSwgd2hpY2ggaXMgdXNlZCBieSBjb21wb25lbnRcclxuICAvLyAuLmhvd2V2ZXIgcGFzc2luZyBjb21wb25lbnRzIGFyb3VuZCBzZWVtcyBhd2t3YXJkIGFuZCB1bm5lY2Vzc2FyeSwgbW9zdGx5IGR1ZSB0byBiZWluZyB1bmFibGVcclxuICAvLyB0byB1c2UgY3RvcnNcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpdGVtczogSXRlbVZpZXdNb2RlbFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbn1cclxuIl19