import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentLibraryComponent = /** @class */ (function () {
    function ComponentLibraryComponent() {
    }
    /**
     * @return {?}
     */
    ComponentLibraryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ComponentLibraryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-component-library',
                    template: "",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    ComponentLibraryComponent.ctorParameters = function () { return []; };
    return ComponentLibraryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    /**
     * @return {?}
     */
    ItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-item',
                    template: "<ng-content class='item'></ng-content>",
                    styles: [".item{background:#add8e6}"]
                },] },
    ];
    /** @nocollapse */
    ItemComponent.ctorParameters = function () { return []; };
    return ItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentLibraryModule = /** @class */ (function () {
    function ComponentLibraryModule() {
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
    return ComponentLibraryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ItemViewModel = /** @class */ (function () {
    /**Ctor
     * @param title item title/heading content
     */
    function ItemViewModel(title) {
        this.title = title;
    }
    return ItemViewModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ComponentLibraryModule, ItemCollectionComponent, ItemViewModel, ComponentLibraryComponent as ɵa, ItemComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnQtbGlicmFyeS5jb21wb25lbnQudHMiLCJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiLCJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2l0ZW0tY29sbGVjdGlvbi9pdGVtLWNvbGxlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkubW9kdWxlLnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvdmlldy1tb2RlbHMvaXRlbS12aWV3LW1vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tcG9uZW50LWxpYnJhcnknLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgY2xhc3M9J2l0ZW0nPjwvbmctY29udGVudD5gLFxuICBzdHlsZXM6IFtgLml0ZW17YmFja2dyb3VuZDojYWRkOGU2fWBdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtVmlld01vZGVsIH0gZnJvbSAnY29tcG9uZW50LWxpYnJhcnkvbGliL3ZpZXctbW9kZWxzL2l0ZW0tdmlldy1tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1pdGVtLWNvbGxlY3Rpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J2l0ZW0tY29sbGVjdGlvbic+XG4gIDxkaXYgKm5nSWY9XCJpdGVtcyE9dW5kZWZpbmVkICYmIGl0ZW1zIT1udWxsXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgICAgPGFwcC1pdGVtPnt7aXRlbS50aXRsZX19PC9hcHAtaXRlbT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJpdGVtcz09dW5kZWZpbmVkIHx8IGl0ZW1zPT1udWxsXCI+XG4gICAgTm8gaXRlbXNcbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLml0ZW0tY29sbGVjdGlvbntib3JkZXI6MXB4IHNvbGlkICMwMDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvbGxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIFRPRE86IGlzIHRoaXMgZ29vZCBjb21wb25lbnQgZGVzaWduPyBEb2Vzbid0IGZlZWwgc28uLi4gVXNpbmcgYSBWTSwgd2hpY2ggaXMgdXNlZCBieSBjb21wb25lbnRcbiAgLy8gLi5ob3dldmVyIHBhc3NpbmcgY29tcG9uZW50cyBhcm91bmQgc2VlbXMgYXdrd2FyZCBhbmQgdW5uZWNlc3NhcnksIG1vc3RseSBkdWUgdG8gYmVpbmcgdW5hYmxlXG4gIC8vIHRvIHVzZSBjdG9yc1xuICBASW5wdXQoKVxuICBwdWJsaWMgaXRlbXM6IEl0ZW1WaWV3TW9kZWxbXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudExpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC1saWJyYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUNvbGxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbS1jb2xsZWN0aW9uL2l0ZW0tY29sbGVjdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvbXBvbmVudExpYnJhcnlDb21wb25lbnQsIEl0ZW1Db21wb25lbnQsIEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbXBvbmVudExpYnJhcnlDb21wb25lbnQsIEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMaWJyYXJ5TW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNsYXNzIEl0ZW1WaWV3TW9kZWwge1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gICAgLyoqQ3RvclxuICAgICAqIEBwYXJhbSB0aXRsZSBpdGVtIHRpdGxlL2hlYWRpbmcgY29udGVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFVRTtLQUFpQjs7OztJQUVqQiw0Q0FBUTs7O0lBQVI7S0FFQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O29DQVBEOzs7Ozs7O0FDQUE7SUFTRTtLQUNDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO0tBQ0M7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsTUFBTSxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3RDOzs7O3dCQU5EOzs7Ozs7O0FDQUE7SUF5QkU7S0FBaUI7Ozs7SUFFakIsMENBQVE7OztJQUFSO0tBQ0M7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDhRQVNMO29CQUNMLE1BQU0sRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2lCQUNwRDs7Ozs7d0JBTUUsS0FBSzs7a0NBdEJSOzs7Ozs7O0FDQUE7Ozs7Z0JBTUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixFQUFFLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQztvQkFDakYsT0FBTyxFQUFFLENBQUMseUJBQXlCLEVBQUUsdUJBQXVCLENBQUM7aUJBQzlEOztpQ0FaRDs7Ozs7OztBQ0FBLElBQUE7Ozs7SUFNSSx1QkFBWSxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3RCO3dCQVJMO0lBU0M7Ozs7Ozs7Ozs7Ozs7OyJ9