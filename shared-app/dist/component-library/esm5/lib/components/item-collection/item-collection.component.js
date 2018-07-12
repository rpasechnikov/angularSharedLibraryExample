/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ItemCollectionComponent = /** @class */ (function () {
    function ItemCollectionComponent() {
    }
    /**
     * @return {?}
     */
    ItemCollectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ItemCollectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-item-collection',
                    template: "<div class='item-collection'>\n  <div *ngIf=\"items!=undefined && items!=null\">\n    <div *ngFor=\"let item of items\">\n      <app-item>{{item.title}}</app-item>\n    </div>\n  </div>\n  <div class=\"test-class\" *ngIf=\"items==undefined || items==null\">\n    No items\n  </div>\n</div>\n\nHELLO!",
                    styles: [".item-collection{border:1px solid #c42727;color:green;background:#00f}"]
                },] },
    ];
    /** @nocollapse */
    ItemCollectionComponent.ctorParameters = function () { return []; };
    ItemCollectionComponent.propDecorators = {
        items: [{ type: Input }]
    };
    return ItemCollectionComponent;
}());
export { ItemCollectionComponent };
function ItemCollectionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ItemCollectionComponent.prototype.items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb2xsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBvbmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaXRlbS1jb2xsZWN0aW9uL2l0ZW0tY29sbGVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTJCdkQ7S0FBaUI7Ozs7SUFFakIsMENBQVE7OztJQUFSO0tBQ0M7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDZTQVdMO29CQUNMLE1BQU0sRUFBRSxDQUFDLHdFQUF3RSxDQUFDO2lCQUNuRjs7Ozs7d0JBTUUsS0FBSzs7a0NBeEJSOztTQW1CYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2l0ZW0tdmlldy1tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pdGVtLWNvbGxlY3Rpb24nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0naXRlbS1jb2xsZWN0aW9uJz5cclxuICA8ZGl2ICpuZ0lmPVwiaXRlbXMhPXVuZGVmaW5lZCAmJiBpdGVtcyE9bnVsbFwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxyXG4gICAgICA8YXBwLWl0ZW0+e3tpdGVtLnRpdGxlfX08L2FwcC1pdGVtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInRlc3QtY2xhc3NcIiAqbmdJZj1cIml0ZW1zPT11bmRlZmluZWQgfHwgaXRlbXM9PW51bGxcIj5cclxuICAgIE5vIGl0ZW1zXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuSEVMTE8hYCxcclxuICBzdHlsZXM6IFtgLml0ZW0tY29sbGVjdGlvbntib3JkZXI6MXB4IHNvbGlkICNjNDI3Mjc7Y29sb3I6Z3JlZW47YmFja2dyb3VuZDojMDBmfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vIFRPRE86IGlzIHRoaXMgZ29vZCBjb21wb25lbnQgZGVzaWduPyBEb2Vzbid0IGZlZWwgc28uLi4gVXNpbmcgYSBWTSwgd2hpY2ggaXMgdXNlZCBieSBjb21wb25lbnRcclxuICAvLyAuLmhvd2V2ZXIgcGFzc2luZyBjb21wb25lbnRzIGFyb3VuZCBzZWVtcyBhd2t3YXJkIGFuZCB1bm5lY2Vzc2FyeSwgbW9zdGx5IGR1ZSB0byBiZWluZyB1bmFibGVcclxuICAvLyB0byB1c2UgY3RvcnNcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpdGVtczogSXRlbVZpZXdNb2RlbFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbn1cclxuIl19