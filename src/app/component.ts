import {Component, computed, effect, signal} from "@angular/core";
import {Model} from "./repository.model";

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  private model: Model = new Model();
  private messages = ["Total", "Price"];
  private index = signal<number>(0);

  // get count(): number {
  //   let result = this.model.getProducts().length;
  //let total = 0;
  //for (let i = 0; i < 1000000000; i++) {
  // total += 1;
  //}
  //   console.log(`count value read: ${result}`);
  //   return result;
  // }

  count = computed<number>(() => this.model.Products().length);
  countEffect = effect(() =>
    console.log(`count value computed: ${this.count()}`));

  get total(): string {
    let result = this.model.Products()
      .reduce((total, p) => total + (p.price ?? 0), 0).toFixed(2);
    console.log(`total value read: ${result}`);
    return result;
  }

  // get message(): string {
  //   let result = `${this.messages[this.index()]} $${this.total}`;
  //   console.log(`message value read: ${result}`);
  //   return result;
  // }
  message = computed<string>(() =>
    `${this.messages[this.index()]} $${this.total}`);
  messageEffect = effect(() =>
    console.log(`message value computed: ${this.message()}`));

  toggleMessage() {
    console.clear();
    console.log("toggleMessage method invoked");
    // this.index = (this.index + 1) % 2;
    this.index.update(currentVal => (currentVal + 1) % 2);
  }

  removeProduct() {
    console.clear();
    console.log("removeProduct method invoked");
    this.model.deleteProduct(this.model.Products()[0].id ?? 0);
  }

}
