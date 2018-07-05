import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentLibraryService = /** @class */ (function () {
    function ComponentLibraryService() {
    }
    ComponentLibraryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ComponentLibraryService.ctorParameters = function () { return []; };
    /** @nocollapse */ ComponentLibraryService.ngInjectableDef = defineInjectable({ factory: function ComponentLibraryService_Factory() { return new ComponentLibraryService(); }, token: ComponentLibraryService, providedIn: "root" });
    return ComponentLibraryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentLibraryComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
var ComponentLibraryModule = /** @class */ (function () {
    function ComponentLibraryModule() {
    }
    ComponentLibraryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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

export { ComponentLibraryService, ComponentLibraryComponent, ComponentLibraryModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnQtbGlicmFyeS5zZXJ2aWNlLnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkuY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TGlicmFyeVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tcG9uZW50LWxpYnJhcnknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICB7e2l0ZW19fVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgaXRlbXM6IHN0cmluZ1tdID0gWycxJywgJzInLCAnMyddO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnRMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQtbGlicmFyeS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvbXBvbmVudExpYnJhcnlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TGlicmFyeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O2tDQUpEOzs7Ozs7O0FDQUE7SUFlRTtxQkFGeUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztLQUV2Qjs7OztJQUVqQiw0Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsc0VBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7b0NBVkQ7Ozs7Ozs7QUNBQTs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO2lCQUNyQzs7aUNBVkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==