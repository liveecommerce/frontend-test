export class DataCollection {
  private items: number[];

  /**
   * DataCollection constructor
   *
   * @param items
   */
  constructor(items: number[]) {
    this.items = items;
  }

  /**
   * Returns an specific amount of items by a given position
   *
   * @param position
   * @param amount
   */
  getItems(position: number, amount: number): number[] {
    return this.items.slice(position, position + amount);
  }

  /**
   * Returns the current items length
   */
  getTotal(): number {
    return this.items.length;
  }
}
