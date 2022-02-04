/* eslint-disable import/no-unresolved */
import { OrderStatus } from '../interfaces/order-status';
import { Messaging } from '../infraestructure/message';
import { Persistency } from '../infraestructure/persistency';
import ShoppingCart from './useCases/shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // injetar carrinho de compras que podemos usar
  // quebrando outro principio
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency 
    ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout() {
    if (this.cart.isEmpty()) {
      console.log('seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido no valor ${this.cart.total} foi feito!`);
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
