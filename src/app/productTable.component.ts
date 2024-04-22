import {Component, Input, Signal} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from "./product.model";

@Component({
  selector: "paProductTable",
  templateUrl: "productTable.component.model: Model = new Model();html"
})
export class ProductTableComponent {
  @Input({alias: "model", required: true})
  dataModel!: Model;

  get Products(): Signal<Product[]> {
    return this.dataModel.Products;
  }

  getProduct(key: number): Product | undefined {
    return this.dataModel?.getProduct(key);
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }
}
