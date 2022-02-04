/* eslint-disable import/no-unresolved */

import { Messaging } from './infraestructure/message';
import { Order } from './entities/order';
import { Persistency } from './infraestructure/persistency';
import { Product } from './entities/product';
import ShoppingCart from './entities/useCases/shopping-cart';

const shoppingCart: ShoppingCart = new ShoppingCart();
const messaging: Messaging = new Messaging();
const persistency: Persistency = new Persistency();
const order: Order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Calça', 23.5));
shoppingCart.addItem(new Product('Calça', 23.5));
shoppingCart.addItem(new Product('Calça', 23.5));

console.log(order.orderStatus);

console.log(shoppingCart.items);
order.checkout();
console.log(shoppingCart.items);

console.log(order.orderStatus);
