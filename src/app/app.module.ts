import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductComponent} from "./component";
import {PaAttrDirective} from "./attr.directive";
import {PaModel} from "./twoway.directive";
import {PaStructureDirective} from "./structural.directive";
import {PaIteratorDirective} from "./iterator.directive";
import {PaCellColor} from "./cellColor.directive";
import {PaCellColorSwitcher} from "./cellColorSwitcher.directive";
import {ProductTableComponent} from "./productTable.component";
import {ProductFormComponent} from "./productForm.component";
import {PaToggleView} from "./toggleView.component";
import {PaAddTaxPipe} from "./addTax.pipe";
import {PaCategoryFilterPipe} from "./categoryFilter.pipe";
import {LOCALE_ID} from "@angular/core";
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {PaDiscountEditorComponent} from "./discountEditor.component";
import {PaDiscountDisplayComponent} from "./discountDisplay.component";
import {DiscountService} from "./discount.service";
import {PaDiscountPipe} from "./discount.pipe";
import {PaDiscountAmountDirective} from "./discountAmount.directive";
import {Model} from "./model/repository.model";
import {SimpleDataSource} from "./model/datasource.model";

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    ProductComponent, PaAttrDirective, PaModel, PaStructureDirective,
    PaIteratorDirective, PaCellColor, PaCellColorSwitcher,
    ProductTableComponent, ProductFormComponent, PaToggleView,
    PaAddTaxPipe, PaCategoryFilterPipe, PaDiscountDisplayComponent,
    PaDiscountEditorComponent, PaDiscountPipe,
    PaDiscountAmountDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DiscountService, SimpleDataSource, Model],
  bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule {
}
