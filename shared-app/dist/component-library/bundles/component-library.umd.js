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
                        template: "<div class='item-collection'>\n  <div *ngIf=\"items!=undefined && items!=null\">\n    <div *ngFor=\"let item of items\">\n      <app-item>{{item.title}}</app-item>\n    </div>\n  </div>\n  <div *ngIf=\"items==undefined || items==null\">\n    No items\n  </div>\n</div>",
                        styles: [".item-collection{border:1px solid #000}"]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkuY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50cy9pdGVtLWNvbGxlY3Rpb24vaXRlbS1jb2xsZWN0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vY29tcG9uZW50LWxpYnJhcnkvbGliL2NvbXBvbmVudC1saWJyYXJ5Lm1vZHVsZS50cyIsIm5nOi8vY29tcG9uZW50LWxpYnJhcnkvbGliL3ZpZXctbW9kZWxzL2l0ZW0tdmlldy1tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbXBvbmVudC1saWJyYXJ5JyxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IGNsYXNzPSdpdGVtJz48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVzOiBbYC5pdGVte2JhY2tncm91bmQ6I2FkZDhlNn1gXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXRlbVZpZXdNb2RlbCB9IGZyb20gJ2NvbXBvbmVudC1saWJyYXJ5L2xpYi92aWV3LW1vZGVscy9pdGVtLXZpZXctbW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaXRlbS1jb2xsZWN0aW9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPSdpdGVtLWNvbGxlY3Rpb24nPlxuICA8ZGl2ICpuZ0lmPVwiaXRlbXMhPXVuZGVmaW5lZCAmJiBpdGVtcyE9bnVsbFwiPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cbiAgICAgIDxhcHAtaXRlbT57e2l0ZW0udGl0bGV9fTwvYXBwLWl0ZW0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiaXRlbXM9PXVuZGVmaW5lZCB8fCBpdGVtcz09bnVsbFwiPlxuICAgIE5vIGl0ZW1zXG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5pdGVtLWNvbGxlY3Rpb257Ym9yZGVyOjFweCBzb2xpZCAjMDAwfWBdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBUT0RPOiBpcyB0aGlzIGdvb2QgY29tcG9uZW50IGRlc2lnbj8gRG9lc24ndCBmZWVsIHNvLi4uIFVzaW5nIGEgVk0sIHdoaWNoIGlzIHVzZWQgYnkgY29tcG9uZW50XG4gIC8vIC4uaG93ZXZlciBwYXNzaW5nIGNvbXBvbmVudHMgYXJvdW5kIHNlZW1zIGF3a3dhcmQgYW5kIHVubmVjZXNzYXJ5LCBtb3N0bHkgZHVlIHRvIGJlaW5nIHVuYWJsZVxuICAvLyB0byB1c2UgY3RvcnNcbiAgQElucHV0KClcbiAgcHVibGljIGl0ZW1zOiBJdGVtVmlld01vZGVsW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQtbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0tY29sbGVjdGlvbi9pdGVtLWNvbGxlY3Rpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50LCBJdGVtQ29tcG9uZW50LCBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50LCBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TGlicmFyeU1vZHVsZSB7IH1cbiIsImV4cG9ydCBjbGFzcyBJdGVtVmlld01vZGVsIHtcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcblxuICAgIC8qKkN0b3JcbiAgICAgKiBAcGFyYW0gdGl0bGUgaXRlbSB0aXRsZS9oZWFkaW5nIGNvbnRlbnRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBVUU7U0FBaUI7Ozs7UUFFakIsNENBQVE7OztZQUFSO2FBRUM7O29CQVhGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsUUFBUSxFQUFFLEVBQUU7d0JBQ1osTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7d0NBUEQ7Ozs7Ozs7QUNBQTtRQVNFO1NBQ0M7Ozs7UUFFRCxnQ0FBUTs7O1lBQVI7YUFDQzs7b0JBWEZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLHdDQUF3Qzt3QkFDbEQsTUFBTSxFQUFFLENBQUMsMkJBQTJCLENBQUM7cUJBQ3RDOzs7OzRCQU5EOzs7Ozs7O0FDQUE7UUF5QkU7U0FBaUI7Ozs7UUFFakIsMENBQVE7OztZQUFSO2FBQ0M7O29CQXpCRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFFBQVEsRUFBRSw4UUFTTDt3QkFDTCxNQUFNLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztxQkFDcEQ7Ozs7OzRCQU1FQyxVQUFLOztzQ0F0QlI7Ozs7Ozs7QUNBQTs7OztvQkFNQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixDQUFDO3dCQUNqRixPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSx1QkFBdUIsQ0FBQztxQkFDOUQ7O3FDQVpEOzs7Ozs7O0FDQUEsUUFBQTs7OztRQU1JLHVCQUFZLEtBQWE7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDdEI7NEJBUkw7UUFTQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=