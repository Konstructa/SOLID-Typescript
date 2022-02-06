import {

  EnterpriseCustomerProtocol,
  CustomerOrder,
} from '../../interfaces/customer-protocol';

export class EnterpriseCustomer
implements EnterpriseCustomerProtocol, CustomerOrder {
  name: string;

  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
