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

const map = <T, U>(f: (T) => U, iter:  Iterable<T>): U[] => {
    const res = Array<U>();
    for (const a of iter) res.push(f(a));
    return res;
}

// const map = (f, iter) => {
//     let res = [];
//     for (const a of iter) {
//         res.push(f(a));
//     }
//     return res;
// };


const foo = <T>(x: T) => x;


// function logText<T>(text: T): T {
//   return text;
// }


export function collection() {
    l(map<Product, Product[]>((p) => p.name, products));
}