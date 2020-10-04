import { DataCollection } from './data-collection';
import { DataStore } from './data-store';

describe('DataStore', () => {
  describe('getItems', () => {
    it('should return empty items for empty collection list', () => {
      const dataStore = new DataStore([]);
      expect(dataStore.getItems(0, 1)).toEqual([]);
    });

    it('should return empty items for a list with empty collection', () => {
      const dataStore = new DataStore([
        new DataCollection([]),
        new DataCollection([]),
      ]);
      expect(dataStore.getItems(0, 1)).toEqual([]);
    });

    it('should return valid items for valid collection list', () => {
      const dataStore = new DataStore([
        new DataCollection([4, 5, 6]),
        new DataCollection([10, 11]),
        new DataCollection([21, 22, 23, 24]),
        new DataCollection([32]),
      ]);

      expect(dataStore.getItems(3, 1)).toEqual([10]);
      expect(dataStore.getItems(3, 3)).toEqual([10, 11, 21]);
      expect(dataStore.getItems(0, 6)).toEqual([4, 5, 6, 10, 11, 21]);
      expect(dataStore.getItems(4, 3)).toEqual([11, 21, 22]);
    });
  });
});
