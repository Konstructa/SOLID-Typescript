import {
  IndividualCustomerProtocol,
  CustomerOrder,
} from '../../interfaces/customer-protocol';

export class IndividualCustomer
implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;

  lastName: string;

  cpf: string;

  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = '';
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getIDN(): string {
    return this.cpf;
  }
}
