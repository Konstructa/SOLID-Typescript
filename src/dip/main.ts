/* eslint-disable import/no-unresolved */

// aberto para extensão, fechado para modificação OCP
import { Messaging } from './infraestructure/message';
import { Order } from './classes/order';
import { Persistency } from './infraestructure/persistency';
import { Product } from './classes/product';
import ShoppingCart from './classes/useCases/shopping-cart';
import { FiftyPercentDiscount } from './classes/percentDiscount';
import { NoDiscount } from './classes/noDiscount';
import { IndividualCustomer } from './classes/customer/customer-individual';

// no caso seria criar novos descontos (classe)
// const noDiscount = new NoDiscount();
const percentDiscount: FiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart: ShoppingCart = new ShoppingCart(percentDiscount);
const messaging: Messaging = new Messaging();
const persistency: Persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Maria', 'Sejuani', '123142-414-3');
const order: Order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCart.addItem(new Product('Calça', 23.5));
shoppingCart.addItem(new Product('Calça', 23.5));
shoppingCart.addItem(new Product('Calça', 23.5));

console.log(order.orderStatus);
console.log(shoppingCart.items);
order.checkout();
console.log(shoppingCart.items);

console.log(order.orderStatus);
