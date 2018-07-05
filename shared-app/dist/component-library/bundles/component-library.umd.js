(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('component-library', ['exports', '@angular/core'], factory) :
    (factory((global['component-library'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ComponentLibraryService = (function () {
        function ComponentLibraryService() {
        }
        ComponentLibraryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ComponentLibraryService.ctorParameters = function () { return []; };
        /** @nocollapse */ ComponentLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function ComponentLibraryService_Factory() { return new ComponentLibraryService(); }, token: ComponentLibraryService, providedIn: "root" });
        return ComponentLibraryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ComponentLibraryComponent = (function () {
        function ComponentLibraryComponent() {
            this.test = "Test String";
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
            { type: i0.Component, args: [{
                        selector: 'lib-component-library',
                        template: "\n    <p>\n      {{test}}\n    </p>\n  ",
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
    var ComponentLibraryModule = (function () {
        function ComponentLibraryModule() {
        }
        ComponentLibraryModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [ComponentLibraryComponent],
                        exports: [ComponentLibraryComponent]
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

    exports.ComponentLibraryService = ComponentLibraryService;
    exports.ComponentLibraryComponent = ComponentLibraryComponent;
    exports.ComponentLibraryModule = ComponentLibraryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkuc2VydmljZS50cyIsIm5nOi8vY29tcG9uZW50LWxpYnJhcnkvbGliL2NvbXBvbmVudC1saWJyYXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vY29tcG9uZW50LWxpYnJhcnkvbGliL2NvbXBvbmVudC1saWJyYXJ5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbXBvbmVudC1saWJyYXJ5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHt7dGVzdH19XG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyB0ZXN0OiBzdHJpbmcgPSBcIlRlc3QgU3RyaW5nXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50LWxpYnJhcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbXBvbmVudExpYnJhcnlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztzQ0FKRDs7Ozs7OztBQ0FBO1FBZUU7d0JBRnNCLGFBQWE7U0FFbEI7Ozs7UUFFakIsNENBQVE7OztZQUFSO2FBQ0M7O29CQWhCRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFFBQVEsRUFBRSx5Q0FJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozt3Q0FWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO3FCQUNyQzs7cUNBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=