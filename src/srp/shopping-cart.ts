type CartItem = {name: string, price: number};
type OrderStatus = 'open' | 'closed';

export default class ShoppingCart {
  private readonly _items: CartItem[] = [];

  private _orderStatus: OrderStatus = 'open';

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

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout() {
    if (this.isEmpty()) {
      console.log('seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage('Pedido recebido');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): Boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string) {
    console.log(message);
  }

  saveOrder() {
    console.log('Pedido salvo');
  }

  clear() {
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Calça', price: 23.5 });
shoppingCart.addItem({ name: 'Camisa', price: 21.5 });
shoppingCart.addItem({ name: 'Tênis', price: 233.5 });

console.log(shoppingCart.orderStatus);

console.log(shoppingCart.items);
console.log(shoppingCart.checkout());
console.log(shoppingCart.clear());
console.log(shoppingCart.items);

console.log(shoppingCart.orderStatus);
