import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ComponentLibraryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ComponentLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-component-library',
                template: ``,
                styles: []
            },] },
];
/** @nocollapse */
ComponentLibraryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ItemComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-item',
                template: `<ng-content class='item'></ng-content>`,
                styles: [`.item{background:#add8e6}`]
            },] },
];
/** @nocollapse */
ItemComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ItemCollectionComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ItemCollectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-item-collection',
                template: `<div class='item-collection'>
  <div *ngIf="items!=undefined && items!=null">
    <div *ngFor="let item of items">
      <app-item>{{item.title}}</app-item>
    </div>
  </div>
  <div *ngIf="items==undefined || items==null">
    No items
  </div>
</div>`,
                styles: [`.item-collection{border:1px solid #000}`]
            },] },
];
/** @nocollapse */
ItemCollectionComponent.ctorParameters = () => [];
ItemCollectionComponent.propDecorators = {
    items: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ComponentLibraryModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ItemViewModel {
    /**
     * Ctor
     * @param {?} title item title/heading content
     */
    constructor(title) {
        this.title = title;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ComponentLibraryModule, ItemCollectionComponent, ItemViewModel, ComponentLibraryComponent as ɵa, ItemComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxpYnJhcnkuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnQtbGlicmFyeS5jb21wb25lbnQudHMiLCJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiLCJuZzovL2NvbXBvbmVudC1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2l0ZW0tY29sbGVjdGlvbi9pdGVtLWNvbGxlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvY29tcG9uZW50LWxpYnJhcnkubW9kdWxlLnRzIiwibmc6Ly9jb21wb25lbnQtbGlicmFyeS9saWIvdmlldy1tb2RlbHMvaXRlbS12aWV3LW1vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tcG9uZW50LWxpYnJhcnknLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgY2xhc3M9J2l0ZW0nPjwvbmctY29udGVudD5gLFxuICBzdHlsZXM6IFtgLml0ZW17YmFja2dyb3VuZDojYWRkOGU2fWBdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtVmlld01vZGVsIH0gZnJvbSAnY29tcG9uZW50LWxpYnJhcnkvbGliL3ZpZXctbW9kZWxzL2l0ZW0tdmlldy1tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1pdGVtLWNvbGxlY3Rpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J2l0ZW0tY29sbGVjdGlvbic+XG4gIDxkaXYgKm5nSWY9XCJpdGVtcyE9dW5kZWZpbmVkICYmIGl0ZW1zIT1udWxsXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgICAgPGFwcC1pdGVtPnt7aXRlbS50aXRsZX19PC9hcHAtaXRlbT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJpdGVtcz09dW5kZWZpbmVkIHx8IGl0ZW1zPT1udWxsXCI+XG4gICAgTm8gaXRlbXNcbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLml0ZW0tY29sbGVjdGlvbntib3JkZXI6MXB4IHNvbGlkICMwMDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvbGxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIFRPRE86IGlzIHRoaXMgZ29vZCBjb21wb25lbnQgZGVzaWduPyBEb2Vzbid0IGZlZWwgc28uLi4gVXNpbmcgYSBWTSwgd2hpY2ggaXMgdXNlZCBieSBjb21wb25lbnRcbiAgLy8gLi5ob3dldmVyIHBhc3NpbmcgY29tcG9uZW50cyBhcm91bmQgc2VlbXMgYXdrd2FyZCBhbmQgdW5uZWNlc3NhcnksIG1vc3RseSBkdWUgdG8gYmVpbmcgdW5hYmxlXG4gIC8vIHRvIHVzZSBjdG9yc1xuICBASW5wdXQoKVxuICBwdWJsaWMgaXRlbXM6IEl0ZW1WaWV3TW9kZWxbXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudExpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC1saWJyYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUNvbGxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaXRlbS1jb2xsZWN0aW9uL2l0ZW0tY29sbGVjdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvbXBvbmVudExpYnJhcnlDb21wb25lbnQsIEl0ZW1Db21wb25lbnQsIEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbXBvbmVudExpYnJhcnlDb21wb25lbnQsIEl0ZW1Db2xsZWN0aW9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMaWJyYXJ5TW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNsYXNzIEl0ZW1WaWV3TW9kZWwge1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gICAgLyoqQ3RvclxuICAgICAqIEBwYXJhbSB0aXRsZSBpdGVtIHRpdGxlL2hlYWRpbmcgY29udGVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFVRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUVQOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEVBQUU7YUFDWDs7Ozs7Ozs7O0FDUEQ7SUFTRTtLQUNDOzs7O0lBRUQsUUFBUTtLQUNQOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELE1BQU0sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3RDOzs7Ozs7Ozs7QUNORDtJQXlCRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7O09BU0w7Z0JBQ0wsTUFBTSxFQUFFLENBQUMseUNBQXlDLENBQUM7YUFDcEQ7Ozs7O29CQU1FLEtBQUs7Ozs7Ozs7QUN0QlI7OztZQU1DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxhQUFhLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ2pGLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixFQUFFLHVCQUF1QixDQUFDO2FBQzlEOzs7Ozs7O0FDWkQ7Ozs7O0lBTUksWUFBWSxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3RCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7OyJ9