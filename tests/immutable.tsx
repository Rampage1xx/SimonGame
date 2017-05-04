import {List, Map} from 'immutable';
const map1 = Map({
        array1: List([1, 2, 3, 4, 5, 6])
    }
);
const map2 = Map({
    array2: List([1, 2])
});

let list1 = List([1, 2, 3, 4]);

let limit1 = Map({
    limit: 1
});

describe(' testing immutable.js operators', () => {

    it('map1 should reduce map1 length and assert equality with map2 shorter array ', () => {
        const map2Lenght = map2.getIn(['array2']).count();
        const map1Chop = map1.getIn(['array1']).setSize(map2Lenght);

        expect(map1Chop).toEqual(map2.getIn(['array2']));
    });
    it('should clear the list', () => {
        expect(map1.getIn(['array1']).clear()).toEqual(List([]));

    });
    it('should add a value', () => {
        const update = (value) => map2.update('array2', (list: any) => list.push(value));

        expect(update(3)).toEqual(Map({array2: List([1, 2, 3])}));

    });
    it('should not add a value to the list (immutable)', () => {
        list1.update((list) => list.push(2));
        list1.update((list) => list.push(2));
        expect(list1).toEqual(List([1, 2, 3, 4]));
    });
    it('should get a specific index from the list', () => {
        expect(map2.get('array2').get(1)).toEqual(2);
    });
    it('should pull out limit number', () => {
        expect(limit1.get('limit')).toEqual(1);
    });
});

