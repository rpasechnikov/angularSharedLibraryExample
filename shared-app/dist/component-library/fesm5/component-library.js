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
// SCSS
//export * from '../../_vars.scss';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ComponentLibraryModule, ItemCollectionComponent, ItemViewModel, ComponentLibraryComponent as ɵa, ItemComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnQtbGlicmFyeS5jb21wb25lbnQudHMiLCJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiLCJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2l0ZW0tY29sbGVjdGlvbi9pdGVtLWNvbGxlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkubW9kdWxlLnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvdmlldy1tb2RlbHMvaXRlbS12aWV3LW1vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jb21wb25lbnQtbGlicmFyeScsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgY2xhc3M9J2l0ZW0nPjwvbmctY29udGVudD5gLFxyXG4gIHN0eWxlczogW2AuaXRlbXtiYWNrZ3JvdW5kOiNhZGQ4ZTZ9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW1WaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9pdGVtLXZpZXctbW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaXRlbS1jb2xsZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J2l0ZW0tY29sbGVjdGlvbic+XHJcbiAgPGRpdiAqbmdJZj1cIml0ZW1zIT11bmRlZmluZWQgJiYgaXRlbXMhPW51bGxcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cclxuICAgICAgPGFwcC1pdGVtPnt7aXRlbS50aXRsZX19PC9hcHAtaXRlbT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ0ZXN0LWNsYXNzXCIgKm5nSWY9XCJpdGVtcz09dW5kZWZpbmVkIHx8IGl0ZW1zPT1udWxsXCI+XHJcbiAgICBObyBpdGVtc1xyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbkhFTExPIWAsXHJcbiAgc3R5bGVzOiBbYC5pdGVtLWNvbGxlY3Rpb257Ym9yZGVyOjFweCBzb2xpZCAjYzQyNzI3O2NvbG9yOmdyZWVuO2JhY2tncm91bmQ6IzAwZn1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbUNvbGxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyBUT0RPOiBpcyB0aGlzIGdvb2QgY29tcG9uZW50IGRlc2lnbj8gRG9lc24ndCBmZWVsIHNvLi4uIFVzaW5nIGEgVk0sIHdoaWNoIGlzIHVzZWQgYnkgY29tcG9uZW50XHJcbiAgLy8gLi5ob3dldmVyIHBhc3NpbmcgY29tcG9uZW50cyBhcm91bmQgc2VlbXMgYXdrd2FyZCBhbmQgdW5uZWNlc3NhcnksIG1vc3RseSBkdWUgdG8gYmVpbmcgdW5hYmxlXHJcbiAgLy8gdG8gdXNlIGN0b3JzXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaXRlbXM6IEl0ZW1WaWV3TW9kZWxbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudExpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC1saWJyYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0tY29sbGVjdGlvbi9pdGVtLWNvbGxlY3Rpb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50LCBJdGVtQ29tcG9uZW50LCBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NvbXBvbmVudExpYnJhcnlDb21wb25lbnQsIEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TGlicmFyeU1vZHVsZSB7IH1cclxuIiwiZXhwb3J0IGNsYXNzIEl0ZW1WaWV3TW9kZWwge1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqQ3RvclxyXG4gICAgICogQHBhcmFtIHRpdGxlIGl0ZW0gdGl0bGUvaGVhZGluZyBjb250ZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQVVFO0tBQWlCOzs7O0lBRWpCLDRDQUFROzs7SUFBUjtLQUVDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7b0NBUEQ7Ozs7Ozs7QUNBQTtJQVNFO0tBQ0M7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsd0NBQXdDO29CQUNsRCxNQUFNLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDdEM7Ozs7d0JBTkQ7Ozs7Ozs7QUNBQTtJQTJCRTtLQUFpQjs7OztJQUVqQiwwQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsNlNBV0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsd0VBQXdFLENBQUM7aUJBQ25GOzs7Ozt3QkFNRSxLQUFLOztrQ0F4QlI7Ozs7Ozs7QUNBQTs7OztnQkFNQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixDQUFDO29CQUNqRixPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSx1QkFBdUIsQ0FBQztpQkFDOUQ7O2lDQVpEOzs7Ozs7O0FDQUEsSUFBQTs7OztJQU1JLHVCQUFZLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDdEI7d0JBUkw7SUFTQzs7Ozs7Ozs7Ozs7Ozs7OzsifQ==