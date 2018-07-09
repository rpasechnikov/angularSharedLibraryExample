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
                    template: "<ng-content></ng-content>",
                    styles: [""]
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
                    template: "<div *ngFor=\"let itemHeading of itemHeadings\">\n  <app-item>{{itemHeading}}</app-item>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ItemCollectionComponent.ctorParameters = function () { return []; };
    ItemCollectionComponent.propDecorators = {
        itemHeadings: [{ type: Input }]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ComponentLibraryModule, ItemCollectionComponent, ComponentLibraryComponent as ɵa, ItemComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnQtbGlicmFyeS5jb21wb25lbnQudHMiLCJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiLCJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2l0ZW0tY29sbGVjdGlvbi9pdGVtLWNvbGxlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tcG9uZW50LWxpYnJhcnknLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaXRlbS1jb2xsZWN0aW9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtSGVhZGluZyBvZiBpdGVtSGVhZGluZ3NcIj5cbiAgPGFwcC1pdGVtPnt7aXRlbUhlYWRpbmd9fTwvYXBwLWl0ZW0+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvbGxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIFRPRE86IGlzIHRoaXMgZ29vZCBjb21wb25lbnQgZGVzaWduPyBEb2Vzbid0IGZlZWwgc28uLi5cbiAgQElucHV0KClcbiAgcHVibGljIGl0ZW1IZWFkaW5nczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQtbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0tY29sbGVjdGlvbi9pdGVtLWNvbGxlY3Rpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50LCBJdGVtQ29tcG9uZW50LCBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50LCBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TGlicmFyeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFVRTtLQUFpQjs7OztJQUVqQiw0Q0FBUTs7O0lBQVI7S0FFQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O29DQVBEOzs7Ozs7O0FDQUE7SUFTRTtLQUNDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO0tBQ0M7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O3dCQU5EOzs7Ozs7O0FDQUE7SUFlRTtLQUFpQjs7OztJQUVqQiwwQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsa0dBRUw7b0JBQ0wsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7OzsrQkFJRSxLQUFLOztrQ0FaUjs7Ozs7OztBQ0FBOzs7O2dCQU1DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxhQUFhLEVBQUUsdUJBQXVCLENBQUM7b0JBQ2pGLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixFQUFFLHVCQUF1QixDQUFDO2lCQUM5RDs7aUNBWkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==