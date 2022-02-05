**ISP - Interface Segregation Principle (Princípio da Segregação de Interface)**

- Os "clientes" não devem ser forçados a depender de interface (protocolo), type ou membros abstratos que não utilizam.

- Exemplo protocolo de Pessoa fisica !== Pessoa Jurídica, logo cria dois protolocos distintos ao invés de forçar uma.

- No caso de elemento em comum que queiramos buscaro ideal é uma interface com método por exemplo:

```typescript
export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
```

- O resultado seria esse:
- Depois so injetar uma dependencia custumer: CustomerOrder, e acessar o metodo pelo customer
- Pode criar o new Individual... e o new Enterprise etc.

```typescript
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
    return this.firstName + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

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

```