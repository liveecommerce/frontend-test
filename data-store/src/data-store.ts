import { DataCollection } from './data-collection';

export class DataStore {
  private collections: DataCollection[];

  /**
   * DataStore constructor
   *
   * @param collections
   */
  constructor(collections: DataCollection[]) {
    this.collections = collections;
  }

  /**
   * Return an specific amount of items by a given position
   *
   * @param _position
   * @param _amount
   */
  getItems(_position: number, _amount: number): number[] {
    return [];
  }
}
