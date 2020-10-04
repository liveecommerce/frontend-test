import { DataCollection } from './data-collection';

describe('DataCollection', () => {
  describe('getItems', () => {
    it('should return empty items for empty list', () => {
      const collection = new DataCollection([]);

      expect(collection.getItems(1, 1)).toEqual([]);
      expect(collection.getItems(1, 0)).toEqual([]);
    });

    it('should return empty items for zero amount', () => {
      const collection = new DataCollection([1, 2, 3]);
      expect(collection.getItems(1, 0)).toEqual([]);
    });

    it('should return valid items for valid position and amount', () => {
      const collection = new DataCollection([1, 2, 3]);

      expect(collection.getItems(0, 1)).toEqual([1]);
      expect(collection.getItems(1, 2)).toEqual([2, 3]);
      expect(collection.getItems(0, 4)).toEqual([1, 2, 3]);
    });
  });

  describe('getTotal', () => {
    it('should return zero for empty collection', () => {
      const collection = new DataCollection([]);
      expect(collection.getTotal()).toEqual(0);
    });

    it('should return valid value for non-empty collection', () => {
      const collection = new DataCollection([1, 2, 3]);
      expect(collection.getTotal()).toEqual(3);
    });
  });
});
