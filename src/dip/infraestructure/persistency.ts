import { PersistencyProtocol } from '../interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder() {
    console.log('Pedido salvo');
  }
}
