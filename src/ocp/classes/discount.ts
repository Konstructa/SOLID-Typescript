export abstract class Discount {
  protected discount = 1;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}
