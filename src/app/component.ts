import {Component, computed, signal} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from "./product.model";

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  private model: Model = new Model();
  products = computed<Product[]>(() => this.model.Products());
  count = computed<number>(() => this.products().length);

  product(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  selectedProduct = signal<string | undefined>(undefined);

  get selectedProductProp() {
    return this.selectedProduct();
  }

  set selectedProductProp(val) {
    this.selectedProduct.set(val)
  };

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct();
  }

  handleInputEvent(ev: Event) {
    if (ev.target instanceof HTMLInputElement) {
      this.selectedProduct.set(ev.target.value);
    }
  }
}
