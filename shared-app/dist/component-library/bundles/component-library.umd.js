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
                        template: "<div *ngFor=\"let itemHeading of itemHeadings\">\n  <app-item>{{itemHeading}}</app-item>\n</div>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ItemCollectionComponent.ctorParameters = function () { return []; };
        ItemCollectionComponent.propDecorators = {
            itemHeadings: [{ type: core.Input }]
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ComponentLibraryModule = ComponentLibraryModule;
    exports.ItemCollectionComponent = ItemCollectionComponent;
    exports.ɵa = ComponentLibraryComponent;
    exports.ɵb = ItemComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkuY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50cy9pdGVtLWNvbGxlY3Rpb24vaXRlbS1jb2xsZWN0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vY29tcG9uZW50LWxpYnJhcnkvbGliL2NvbXBvbmVudC1saWJyYXJ5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbXBvbmVudC1saWJyYXJ5JyxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWl0ZW0tY29sbGVjdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbUhlYWRpbmcgb2YgaXRlbUhlYWRpbmdzXCI+XG4gIDxhcHAtaXRlbT57e2l0ZW1IZWFkaW5nfX08L2FwcC1pdGVtPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBUT0RPOiBpcyB0aGlzIGdvb2QgY29tcG9uZW50IGRlc2lnbj8gRG9lc24ndCBmZWVsIHNvLi4uXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpdGVtSGVhZGluZ3M6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50LWxpYnJhcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtQ29sbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pdGVtLWNvbGxlY3Rpb24vaXRlbS1jb2xsZWN0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudCwgSXRlbUNvbXBvbmVudCwgSXRlbUNvbGxlY3Rpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudCwgSXRlbUNvbGxlY3Rpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBVUU7U0FBaUI7Ozs7UUFFakIsNENBQVE7OztZQUFSO2FBRUM7O29CQVhGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsUUFBUSxFQUFFLEVBQUU7d0JBQ1osTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7d0NBUEQ7Ozs7Ozs7QUNBQTtRQVNFO1NBQ0M7Ozs7UUFFRCxnQ0FBUTs7O1lBQVI7YUFDQzs7b0JBWEZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLDJCQUEyQjt3QkFDckMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUNiOzs7OzRCQU5EOzs7Ozs7O0FDQUE7UUFlRTtTQUFpQjs7OztRQUVqQiwwQ0FBUTs7O1lBQVI7YUFDQzs7b0JBaEJGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLGtHQUVMO3dCQUNMLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDYjs7Ozs7bUNBSUVDLFVBQUs7O3NDQVpSOzs7Ozs7O0FDQUE7Ozs7b0JBTUNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixFQUFFLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQzt3QkFDakYsT0FBTyxFQUFFLENBQUMseUJBQXlCLEVBQUUsdUJBQXVCLENBQUM7cUJBQzlEOztxQ0FaRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=