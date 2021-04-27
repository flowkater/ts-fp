const l = console.log;

export function iterable() {
    const list = [1, 2, 3];
    for(let i = 0; i < list.length; i ++) l(list[i]);

    const str = "abc"
    for(let i = 0; i < str.length; i ++) l(str[i]);

    l("====of")

    for (const a of list) l(a);
    for (const a of str) l(a);

    // Array
    l("Arr -------");
    const arr = [1, 2, 3];
    for(const a of arr) l(a);

    // iterator
    l("Iter -------");
    let iter1 = arr[Symbol.iterator]();
    for(const a of iter1) l(a);

    // Set
    const set = new Set([1, 2, 3]);
    for (const a of set) l(a);

    // Map
    const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
    for (const a of map.keys()) l(a);
    for (const a of map.values()) l(a);
    for (const a of map.entries()) l(a);
    console.clear();

     // ## 이터러블/이터레이터 프로토콜
    // - 이터러블: 이터레이터를 리턴하는 iterator() 를 가진 값
    // - 이터레이터: hasNext(), next() 를 가진 값
    // - 이터러블/이터레이터 프로토콜: 이터러블을 for...of 등과 함께 동작하도록한 규약
    const iterator = list[Symbol.iterator]();
    l(iterator.next());
    l(iterator.next());
    // l(iterator.next());
    // l(iterator.next());

    for (const a of iterator) l(a);
}