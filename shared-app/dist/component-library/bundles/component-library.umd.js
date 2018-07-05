(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('component-library', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['component-library'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

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
            this.items = ['1', '2', '3'];
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
                        template: "\n    <p *ngFor=\"let item of items\">\n      {{item}}\n    </p>\n  ",
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
                        imports: [
                            common.CommonModule
                        ],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkuc2VydmljZS50cyIsIm5nOi8vY29tcG9uZW50LWxpYnJhcnkvbGliL2NvbXBvbmVudC1saWJyYXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vY29tcG9uZW50LWxpYnJhcnkvbGliL2NvbXBvbmVudC1saWJyYXJ5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbXBvbmVudC1saWJyYXJ5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cCAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgICAge3tpdGVtfX1cbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGl0ZW1zOiBzdHJpbmdbXSA9IFsnMScsICcyJywgJzMnXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50LWxpYnJhcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbXBvbmVudExpYnJhcnlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExpYnJhcnlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztzQ0FKRDs7Ozs7OztBQ0FBO1FBZUU7eUJBRnlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FFdkI7Ozs7UUFFakIsNENBQVE7OztZQUFSO2FBQ0M7O29CQWhCRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFFBQVEsRUFBRSxzRUFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozt3Q0FWRDs7Ozs7OztBQ0FBOzs7O29CQUlDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7cUJBQ3JDOztxQ0FWRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==