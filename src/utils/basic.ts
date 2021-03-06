const l = console.log;

interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
];

const map = <T, U>(f: (T) => U, iter: Iterable<T>): U[] => {
    const res = Array<U>();
    for(const a of iter) res.push(f(a));
    return res;
}

const filter = <T>(f: (T) => boolean, iter: Iterable<T>): T[] => {
    const res = Array<T>();
    for(const a of iter) if(f(a)) res.push(a);
    return res;
}


export function basic() {
    // # 평가
    // - 코드가 계산(Evaluation) 되어 값을 만드는 것
    //

    // # 일급
    // - 값으로 다룰 수 있다.
    // - 변수에 담을 수 있다.
    // - 함수의 인자로 사용될 수 있다.
    // - 함수의 결과로 사용될 수 있다.
    const a = 10;
    const add9 = a => a + 9;
    const r = add9(a);

    l(r);

    console.clear();

    // # 일급 함수
    // - 함수를 값으로 다룰 수 있다.
    // - 조합성과 추상화의 도구
    const add5 = a => a + 5;
    l(add5);
    l(add5(2));

    const f1 = () => () => 1;
    l(f1);
    l(f1());

    const f2 = f1();
    l(f2);
    l(f2());
    l(f1()());

    console.clear();

    // # 일급 함수
    // - 함수가 값으로 다뤄질 수 있다.
    //
    // # 고차 함수
    // - 함수를 값으로 다루는 함수
    //
    // ## 함수를 인자로 받아서 실행하는 함수
    // - apply1
    // - times

    const apply1 = f => f(1);
    const add2 = a => a + 2;
    l(apply1(add2));
    l(apply1(a => a - 1));

    const times = (f, n) => {
        let i = -1;
        while(++i < n) f(i);
    }
    times(l, 3);
    times(a => l(a + 10), 3);

    // ## 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
    // - addMaker

    const addMaker = a => b => a + b;
    const add10 = addMaker(10);
    l(add10);
    l(add10(5));
    l(add10(10));

    console.clear();

    const list = [1, 2, 3];
    for(let i = 0; i < list.length; i ++) l(list[i]);
    for(const a of list) l(a);

    const str = "abc";
    for(let i = 0; i < str.length; i ++) l(str[i]);
    for(const a of str) l(a);

    console.clear();

    l("Iter ==")
    const iter = list[Symbol.iterator]();
    for(const a of iter) l(a);

    l("Set ==")
    const set = new Set([1, 2, 3]);
    for (const a of set) l(a);

    l("Map ==")
    // const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
    // for (const a of map.keys()) l(a);
    // for (const a of map.values()) l(a);
    // for (const a of map.entries()) l(a);

    // ## 이터러블/이터레이터 프로토콜
    // - 이터러블: 이터레이터를 리턴하는 iterator() 를 가진 값
    // - 이터레이터: hasNext(), next() 를 가진 값
    // - 이터러블/이터레이터 프로토콜: 이터러블을 for...of 등과 함께 동작하도록한 규약
    console.clear();

    const iterator = list[Symbol.iterator]();
    l(iterator.next());
    l(iterator.next());
    l(iterator.next());
    l(iterator.next());

    for (const a of iterator) l(a);

    console.clear();

    l(map<Product, string>(p => p.name, products));
    l(filter<Product>(p => p.price > 20000, products));

}

// const map = (f, iter) => {
//     let res = [];
//     for(const a of iter) res.push(f(a));
//     return res;
// }


























// export function basic() {
//
//     // # 평가
//     // - 코드가 계산(Evaluation) 되어 값을 만드는 것
//
//     // # 일급
//     // - 값으로 다룰 수 있다.
//     // - 변수에 담을 수 있다.
//     // - 함수의 인자로 사용될 수 있다.
//     // - 함수의 결과로 사용될 수 있다.
//
//     const a = 10;
//     const add9 = a => a + 9;
//     const r = add9(a);
//
//     l(r);
//
//     l("==")
//
//     //# 일급 함수
//     // - 함수를 값으로 다룰 수 있다.
//     // - 조합성과 추상화의 도구
//
//     const add5 = (a: number) => a + 5;
//     l(add5);
//     l(add5(2));
//
//     const f1 = () => () => 1;
//     l(f1);
//     l(f1());
//
//
//     const f2 = f1();
//     l(f2);
//     l(f2());
//     l(f1()());
//
//     l("==")
//
//     // # 일급 함수
//     // - 함수가 값으로 다뤄질 수 있다.
//     //
//     // # 고차 함수
//     // - 함수를 값으로 다루는 함수
//     //
//     // ## 함수를 인자로 받아서 실행하는 함수
//     // - apply1
//     // - times
//
//     const apply1 = f => f(1);
//     const add2 = a => a + 2;
//     l(apply1(add2));
//     l(apply1(a => a - 1));
//
//     const times = (f, n) => {
//         let i = -1;
//         while (++i < n) f(i);
//     };
//
//     times(l, 3);
//     times(a => l(a + 10), 3);
//
//     l("==")
//
//     // ## 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
//     // - addMaker
//
//     const addMaker = a => b => a + b;
//     const add10 = addMaker(10);
//     l(add10);
//     l(add10(5));
//     l(add10(10));
// }

