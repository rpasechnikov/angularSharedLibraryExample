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
                    template: "<div class='item-collection'>\n  <div *ngIf=\"items!=undefined && items!=null\">\n    <div *ngFor=\"let item of items\">\n      <app-item>{{item.title}}</app-item>\n    </div>\n  </div>\n  <div *ngIf=\"items==undefined || items==null\">\n    No items\n  </div>\n</div>",
                    styles: [".item-collection{border:1px solid #000}"]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb2xsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBvbmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaXRlbS1jb2xsZWN0aW9uL2l0ZW0tY29sbGVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQXlCdkQ7S0FBaUI7Ozs7SUFFakIsMENBQVE7OztJQUFSO0tBQ0M7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDhRQVNMO29CQUNMLE1BQU0sRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2lCQUNwRDs7Ozs7d0JBTUUsS0FBSzs7a0NBdEJSOztTQWlCYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEl0ZW1WaWV3TW9kZWwgfSBmcm9tICdjb21wb25lbnQtbGlicmFyeS9saWIvdmlldy1tb2RlbHMvaXRlbS12aWV3LW1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWl0ZW0tY29sbGVjdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0naXRlbS1jb2xsZWN0aW9uJz5cbiAgPGRpdiAqbmdJZj1cIml0ZW1zIT11bmRlZmluZWQgJiYgaXRlbXMhPW51bGxcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICA8YXBwLWl0ZW0+e3tpdGVtLnRpdGxlfX08L2FwcC1pdGVtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIml0ZW1zPT11bmRlZmluZWQgfHwgaXRlbXM9PW51bGxcIj5cbiAgICBObyBpdGVtc1xuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AuaXRlbS1jb2xsZWN0aW9ue2JvcmRlcjoxcHggc29saWQgIzAwMH1gXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gVE9ETzogaXMgdGhpcyBnb29kIGNvbXBvbmVudCBkZXNpZ24/IERvZXNuJ3QgZmVlbCBzby4uLiBVc2luZyBhIFZNLCB3aGljaCBpcyB1c2VkIGJ5IGNvbXBvbmVudFxuICAvLyAuLmhvd2V2ZXIgcGFzc2luZyBjb21wb25lbnRzIGFyb3VuZCBzZWVtcyBhd2t3YXJkIGFuZCB1bm5lY2Vzc2FyeSwgbW9zdGx5IGR1ZSB0byBiZWluZyB1bmFibGVcbiAgLy8gdG8gdXNlIGN0b3JzXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpdGVtczogSXRlbVZpZXdNb2RlbFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiJdfQ==