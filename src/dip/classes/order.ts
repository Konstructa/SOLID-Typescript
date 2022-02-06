/* eslint-disable import/no-unresolved */
import { OrderStatus } from '../interfaces/order-status';
import { CustomerOrder } from '../interfaces/customer-protocol';
import { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol';
import { MessagingProtocol } from '../interfaces/messaging-protocol';
import { PersistencyProtocol } from '../interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // injetar carrinho de compras que podemos usar
  // quebrando outro principio
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
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
    this.messaging.sendMessage(`Seu pedido no valor ${this.cart.totalWithDiscount()} foi feito!`);
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(`
    Dados:
    ${this.customer.getName()}
    ${this.customer.getIDN()}
    `);
  }
}
