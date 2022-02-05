/* eslint-disable import/no-unresolved */
import { CartItem } from '../../interfaces/cart-item';
import { Discount } from '../discount';
// usar readonly para dependencias

export default class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem) {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, element) => total + element.price, 0)
      .toFixed(2);
  }

  totalWithDiscount():number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): Boolean {
    return this._items.length === 0;
  }

  clear() {
    this._items.length = 0;
  }
}
