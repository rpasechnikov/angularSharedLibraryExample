(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('component-library', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['component-library'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ComponentLibraryComponent = (function () {
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
            { type: core.Component, args: [{
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
    var ItemComponent = (function () {
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
            { type: core.Component, args: [{
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
    var ItemCollectionComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-item-collection',
                        template: "<div class='item-collection'>\n  <div *ngIf=\"items!=undefined && items!=null\">\n    <div *ngFor=\"let item of items\">\n      <app-item>{{item.title}}</app-item>\n    </div>\n  </div>\n  <div class=\"test-class\" *ngIf=\"items==undefined || items==null\">\n    No items\n  </div>\n</div>\n\nHELLO!",
                        styles: [".item-collection{border:1px solid #c42727;color:green;background:#00f}"]
                    },] },
        ];
        /** @nocollapse */
        ItemCollectionComponent.ctorParameters = function () { return []; };
        ItemCollectionComponent.propDecorators = {
            items: [{ type: core.Input }]
        };
        return ItemCollectionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ComponentLibraryModule = (function () {
        function ComponentLibraryModule() {
        }
        ComponentLibraryModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
    var ItemViewModel = (function () {
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

    exports.ComponentLibraryModule = ComponentLibraryModule;
    exports.ItemCollectionComponent = ItemCollectionComponent;
    exports.ItemViewModel = ItemViewModel;
    exports.ɵa = ComponentLibraryComponent;
    exports.ɵb = ItemComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkuY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50cy9pdGVtLWNvbGxlY3Rpb24vaXRlbS1jb2xsZWN0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vY29tcG9uZW50LWxpYnJhcnkvbGliL2NvbXBvbmVudC1saWJyYXJ5Lm1vZHVsZS50cyIsIm5nOi8vY29tcG9uZW50LWxpYnJhcnkvbGliL3ZpZXctbW9kZWxzL2l0ZW0tdmlldy1tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY29tcG9uZW50LWxpYnJhcnknLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pdGVtJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IGNsYXNzPSdpdGVtJz48L25nLWNvbnRlbnQ+YCxcclxuICBzdHlsZXM6IFtgLml0ZW17YmFja2dyb3VuZDojYWRkOGU2fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvaXRlbS12aWV3LW1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWl0ZW0tY29sbGVjdGlvbicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPSdpdGVtLWNvbGxlY3Rpb24nPlxyXG4gIDxkaXYgKm5nSWY9XCJpdGVtcyE9dW5kZWZpbmVkICYmIGl0ZW1zIT1udWxsXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XHJcbiAgICAgIDxhcHAtaXRlbT57e2l0ZW0udGl0bGV9fTwvYXBwLWl0ZW0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidGVzdC1jbGFzc1wiICpuZ0lmPVwiaXRlbXM9PXVuZGVmaW5lZCB8fCBpdGVtcz09bnVsbFwiPlxyXG4gICAgTm8gaXRlbXNcclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5IRUxMTyFgLFxyXG4gIHN0eWxlczogW2AuaXRlbS1jb2xsZWN0aW9ue2JvcmRlcjoxcHggc29saWQgI2M0MjcyNztjb2xvcjpncmVlbjtiYWNrZ3JvdW5kOiMwMGZ9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8gVE9ETzogaXMgdGhpcyBnb29kIGNvbXBvbmVudCBkZXNpZ24/IERvZXNuJ3QgZmVlbCBzby4uLiBVc2luZyBhIFZNLCB3aGljaCBpcyB1c2VkIGJ5IGNvbXBvbmVudFxyXG4gIC8vIC4uaG93ZXZlciBwYXNzaW5nIGNvbXBvbmVudHMgYXJvdW5kIHNlZW1zIGF3a3dhcmQgYW5kIHVubmVjZXNzYXJ5LCBtb3N0bHkgZHVlIHRvIGJlaW5nIHVuYWJsZVxyXG4gIC8vIHRvIHVzZSBjdG9yc1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGl0ZW1zOiBJdGVtVmlld01vZGVsW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQtbGlicmFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtLWNvbGxlY3Rpb24vaXRlbS1jb2xsZWN0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudCwgSXRlbUNvbXBvbmVudCwgSXRlbUNvbGxlY3Rpb25Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50LCBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlNb2R1bGUgeyB9XHJcbiIsImV4cG9ydCBjbGFzcyBJdGVtVmlld01vZGVsIHtcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKkN0b3JcclxuICAgICAqIEBwYXJhbSB0aXRsZSBpdGVtIHRpdGxlL2hlYWRpbmcgY29udGVudFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFVRTtTQUFpQjs7OztRQUVqQiw0Q0FBUTs7O1lBQVI7YUFFQzs7b0JBWEZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxRQUFRLEVBQUUsRUFBRTt3QkFDWixNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozt3Q0FQRDs7Ozs7OztBQ0FBO1FBU0U7U0FDQzs7OztRQUVELGdDQUFROzs7WUFBUjthQUNDOztvQkFYRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsd0NBQXdDO3dCQUNsRCxNQUFNLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztxQkFDdEM7Ozs7NEJBTkQ7Ozs7Ozs7QUNBQTtRQTJCRTtTQUFpQjs7OztRQUVqQiwwQ0FBUTs7O1lBQVI7YUFDQzs7b0JBM0JGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLDZTQVdMO3dCQUNMLE1BQU0sRUFBRSxDQUFDLHdFQUF3RSxDQUFDO3FCQUNuRjs7Ozs7NEJBTUVDLFVBQUs7O3NDQXhCUjs7Ozs7OztBQ0FBOzs7O29CQU1DQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxhQUFhLEVBQUUsdUJBQXVCLENBQUM7d0JBQ2pGLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixFQUFFLHVCQUF1QixDQUFDO3FCQUM5RDs7cUNBWkQ7Ozs7Ozs7QUNBQSxRQUFBOzs7O1FBTUksdUJBQVksS0FBYTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUN0Qjs0QkFSTDtRQVNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9