/* eslint-disable import/no-unresolved */
import { CartItem } from '../../interfaces/cart-item';

export default class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem) {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get total(): number {
    return +this._items
      .reduce((total, element) => total + element.price, 0)
      .toFixed(2);
  }

  isEmpty(): Boolean {
    return this._items.length === 0;
  }

  clear() {
    this._items.length = 0;
  }
}
